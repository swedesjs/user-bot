import { ParseVK } from "../../utils"

export const token: commandTypes = {
  hearConditions: /^(?:token)\s(.*)$/i,
  handler: async ctx => {
    try {
      const result = await ParseVK.getToken(ctx.$match[1])
      console.log(result)
    } catch (message) {
      ctx.editDelete(message, 20000)
    }
  }
}
