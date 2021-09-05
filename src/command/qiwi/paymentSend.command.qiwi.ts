import { qiwi } from "./info.command.qiwi"

export const paymentSend: commandTypes = {
  hearConditions: /^(?:перевод)\s([0-9]+)\s([0-9]+)$/i,
  handler: async ctx => {
    try {
      await qiwi.pay(99, ctx.$match[1], ctx.$match[2] as any)

      ctx.editDelete(`Платеж успешен`)
    } catch (message) {
      ctx.editDelete(message)
    }
  }
}
