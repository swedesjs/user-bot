import { fromEn, toEn } from "convert-layout/ru"

export const Tr: commandTypes = {
  hearConditions: /^(?:t(r|e))$/i,
  handler: ctx => {
    const message = ctx.replyMessage?.text || ctx.forwards[0]?.text
    ctx.editDelete(ctx.$match[1] == "r" ? fromEn(message) : toEn(message))
  }
}
