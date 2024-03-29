import util from "util"

export const evalCommand: commandTypes = {
  hearConditions: /^(?:eval)\s((?:.|\s)+)$/i,
  handler: async ctx => {
    try {
      const ms = +new Date()
      let result = eval(`(() => {
        ${ctx.$match[1]}
      })()`)

      if (util.types.isPromise(result)) result = await result
      const code = typeof result == "object" ? JSON.stringify(result, null, "\t") : typeof result == "symbol" ? String(result) : result

      ctx.editDelete(`🔚 Итог:\n⚄ ${code}\n✄Тип: ${typeof result}\n\n⏄Код выполнен за ${+new Date() - ms} мс. `)
    } catch (message) {
      ctx.editDelete(message)
    }
  }
}
