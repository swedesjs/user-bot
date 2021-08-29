import { Query } from "../utils"

export const QueryCommand: commandTypes = {
  hearConditions: /^(?:query)\s(.*)\s?(.*)?$/i,
  handler: async ctx => {
    try {
      const result = await Query.handler({ address: ctx.$match[1], port: +ctx.$match[2] || 19132 })
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
