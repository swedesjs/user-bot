import util from "util"
import { commandTypes } from "../types"

export const evalCommand: commandTypes = {
  regExp: /^(?:eval)\s(.*)$/i,
  // @ts-expect-error
  func: async ctx => {
    const ms = +new Date()
    try {
      var result = eval(ctx.$match[1])
    } catch (message) {
      return ctx.editDelete(message)
    }

    const code = typeof result == "object" ? JSON.stringify(result, null, "\t") : typeof result == "symbol" ? String(result) : result

    ctx.editDelete(`🔚 Итог:\n⚄ ${code}\n✄Тип: ${typeof result}\n\n⏄Код выполнен за ${+new Date() - ms} мс. `)
  }
}
