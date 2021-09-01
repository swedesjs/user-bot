import dgram from "dgram"
import { chunkArray } from "."

export class Query {
  static client = dgram.createSocket("udp4")

  static simple() {
    return new Promise<ConnectMessage>(resovle => {
      this.client.on("connect", () =>
        this.client.send(
          Buffer.concat([
            Buffer.from([1]),
            Buffer.alloc(9),
            Buffer.alloc(2, 255),
            Buffer.from([0]),
            Buffer.alloc(4, 254),
            Buffer.alloc(4, 253),
            Buffer.from([18, 52, 86, 120]),
            Buffer.alloc(8)
          ])
        )
      )

      this.client.on("message", (response, { address, address: ip, port }) => {
        const [, , version, numplayers, maxplayers, hostname] = response.toString("utf-8", 34).split(";")

        if (hostname) resovle({ address, ip, port, numplayers, maxplayers, hostname, version, plugins: [] })
      })
    })
  }

  static advanced() {
    return new Promise<ConnectMessage>(resovle => {
      this.client.on("connect", () =>
        this.client.send(
          Buffer.concat([Buffer.from([254]), Buffer.from([253]), Buffer.from([9]), Buffer.from([0]), Buffer.alloc(2), Buffer.from([1])])
        )
      )

      this.client.on("message", (response, { address, address: ip, port }) => {
        const content: ConnectMessageSocket = Object.fromEntries(
          chunkArray(response.toString("utf-8", 11).split("\x00\x01player_\x00\x00")[0].split("\0").slice(2), 2)
        )

        if (Object.keys(content).length > 1) {
          const plugins = content.plugins?.split(/\s?[\:\;]\s?/g).slice(1)
          const version = content.version?.replace(/v/g, "").split(",")

          resovle({
            ...content,
            version: `${version.shift()} - ${version.pop() || ""}`,
            software: content.server_engine || plugins.shift(),
            port,
            address,
            ip,
            plugins
          })
        } else {
          const buffer = Buffer.alloc(4)
          buffer.writeInt32BE(parseInt(response.toString("utf-8", 5)))

          this.client.send(Buffer.concat([Buffer.from([254, 253]), Buffer.alloc(4, 0), Buffer.from([1]), buffer, Buffer.alloc(4, 0)]))
        }
      })
    })
  }

  static handler({ port, address }: Params) {
    return new Promise<ConnectMessage>(async (resolve, reject: (reason?: string) => void) => {
      try {
        setTimeout(() => reject("Error: timeout"), 30000)

        this.client.connect(port, address)

        this.client.once("error", reject)

        try {
          resolve(await this.advanced())
        } catch {
          resolve(await this.simple())
        }

        this.client.disconnect()
      } catch (message) {
        reject(message)
      }
    })
  }
}

type Params = { address: string; port: number }

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
