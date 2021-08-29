import dgram from "dgram"
import { chunkArray } from "../utils"

const client = dgram.createSocket("udp4")

export const QueryCommand: commandTypes = {
  hearConditions: /^(?:query)\s(.*)\s(.*)$/i,
  handler: async ctx => {
    try {
      const result = await Query.handler({ address: ctx.$match[1], port: +ctx.$match[2] })
      client.disconnect()

      ctx.editDelete(`
IP: ${result.ip}:${result.port}
Название: ${result.hostname.replace(/§[^]/g, "")}
Версия: ${result.version.split(",").pop()}
Ядро: ${result.software || "отсуствует"}
Карта: ${result.map || "отсуствует"}
Онлайн: ${result.numplayers} из ${result.maxplayers}
Плагины: ${result.plugins?.join(", ") || "отсуствуют"}
`)
    } catch (message) {
      ctx.editDelete(message)
    }
  }
}

class Query {
  static connect({ address, port }: Params, reject: (reason?: Timeout) => void) {
    setTimeout(() => reject({ code: "timeout" }), 2000)

    client.connect(port, address)

    client.once("error", reject)
  }

  static simple(params: Params) {
    return new Promise<ConnectMessage>((resovle, reject) => {
      this.connect(params, reject)

      client.on("connect", () =>
        client.send(
          Buffer.concat([
            Buffer.from([0x01]),
            Buffer.alloc(9),
            Buffer.alloc(2, 0xff),
            Buffer.from([0x00]),
            Buffer.alloc(4, 0xfe),
            Buffer.alloc(4, 0xfd),
            Buffer.from([0x12, 0x34, 0x56, 0x78]),
            Buffer.alloc(8)
          ])
        )
      )

      client.on("message", (response, { address, address: ip, port }) => {
        const [, , version, numplayers, maxplayers, hostname] = response.toString("utf-8", 34).split(";")

        if (hostname) resovle({ address, ip, port, numplayers, maxplayers, hostname, version, plugins: [] })
      })
    })
  }

  static advanced(params: Params) {
    return new Promise<ConnectMessage>((resovle, reject) => {
      this.connect(params, reject)

      client.on("connect", () =>
        client.send(
          Buffer.concat([Buffer.from([0xfe]), Buffer.from([0xfd]), Buffer.from([9]), Buffer.from([0x00]), Buffer.alloc(2), Buffer.from([0x01])])
        )
      )

      client.on("message", (response, connect) => {
        const content: ConnectMessageSocket = Object.fromEntries(
          chunkArray(response.toString("utf-8", 11).split("\x00\x01player_\x00\x00")[0].split("\0").slice(2), 2)
        )

        if (Object.keys(content).length > 1) {
          const plugins = content.plugins?.split(/\s?[\:\;]\s?/g).slice(1)
          const version = content.version?.replace(/v/g, "").split(",")

          resovle({
            ...content,
            port: connect.port,
            address: connect.address,
            ip: connect.address,
            version: `${version.shift()} - ${version.pop() || ""}`,
            software: content.server_engine || plugins.shift(),
            plugins
          })
        } else {
          const buffer = Buffer.alloc(4)
          buffer.writeInt32BE(parseInt(response.toString("utf-8", 5)))

          client.send(Buffer.concat([Buffer.from([0xfe, 0xfd]), Buffer.alloc(4, 0x00), Buffer.from([0x01]), buffer, Buffer.alloc(4, 0x00)]))
        }
      })
    })
  }

  static handler(params: Params) {
    return new Promise<ConnectMessage>((resolve, reject) =>
      this.advanced(params)
        .then(resolve)
        .catch(() => this.simple(params).then(resolve).catch(reject))
    )
  }
}

type Params = { address: string; port: number }
type Timeout = { code: "timeout" }

type ConnectMessageSocket = Record<
  | "hostname"
  | "gametype"
  | "game_id"
  | "version"
  | "server_engine"
  | "plugins"
  | "map"
  | "numplayers"
  | "maxplayers"
  | "whitelist"
  | "hostip"
  | "hostport",
  string
>

type ConnectMessage = Record<"ip" | "address" | "hostname", string> &
  Record<"numplayers" | "maxplayers" | "port", string | number> &
  Record<"plugins", string[]> &
  Partial<Record<"software" | "map" | "version", string>>
