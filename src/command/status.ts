import { commandTypes } from "../types"
import { ParseVK, unixTime } from "../utils"

export const status: commandTypes = {
  regExp: /^(?:status|статус)$/i,
  func: async ctx => {
    const parse = await ParseVK.status()
    ctx.editDelete(
      `Состояние VK API на ${unixTime()}:\n\n${parse
        .map(x => `${x.section} - ${x.performance}ms • ${x.status.includes("dev_status_okay") ? `Работает` : `Не работает`} • (uptime: ${x.uptime}%)`)
        .join("\n")}`,
      30000
    )
  }
}
