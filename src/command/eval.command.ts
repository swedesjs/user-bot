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
    const type =
      typeof result == "number"
        ? `Число`
        : typeof result == "string"
        ? `Строка`
        : Array.isArray(result)
        ? `Массив`
        : typeof result == "object"
        ? `Объект`
        : typeof result == "function"
        ? `${util.types.isAsyncFunction(result) ? `Асинхронная функция` : `Функция`}`
        : typeof result == "bigint"
        ? `BigInt`
        : typeof result == "symbol"
        ? `Symbol`
        : typeof result
    const code = typeof result == "object" ? JSON.stringify(result, null, "\t") : typeof result == "symbol" ? String(result) : result

    ctx.editDelete(`🔚 Итог:\n⚄ ${code}\n✄Тип: ${type}\n\n⏄Код выполнен за ${+new Date() - ms} мс. `)
  }
}
