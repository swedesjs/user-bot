import { commandTypes } from "../types"
import { ParseVK } from "../utils"

export const token: commandTypes = {
  regExp: /^(?:token)\s(.*)$/i,
  func: async ctx => {
    try {
      const result = await ParseVK.getToken(ctx.$match[1])
      console.log(result)
    } catch (message) {
      ctx.editDelete(message, 20000)
    }
  }
}
