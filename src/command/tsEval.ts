import util from "util"
import { tsEval } from "../utils/tsEval"

export const tsEvalCommand: commandTypes = {
  hearConditions: /^(?:ts-eval)\s(.*)$/i,
  //@ts-expect-error
  handler: async ctx => {
    console.log(1)

    try {
      const ms = +new Date()
      let result = eval(await tsEval(ctx.$match[1]))

      if (util.types.isPromise(result)) result = await result
      const code = typeof result == "object" ? JSON.stringify(result, null, "\t") : typeof result == "symbol" ? String(result) : result

      ctx.editDelete(`🔚 Итог:\n⚄ ${code}\n✄Тип: ${typeof result}\n\n⏄Код выполнен за ${+new Date() - ms} мс. `)
    } catch (message) {
      return ctx.editDelete(message)
    }
  }
}
