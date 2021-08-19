import { qiwi } from "./info.command.qiwi"

export const paymentSend: commandTypes = {
  regExp: /^(?:перевод)\s([0-9]+)\s([0-9]+)$/i,
  func: async ctx => {
    try {
      const info = await qiwi.pay(99, ctx.$match[1], ctx.$match[2] as any)

      ctx.editDelete(`Платеж успешен`)
    } catch (message) {
      ctx.editDelete(message)
    }
  }
}
