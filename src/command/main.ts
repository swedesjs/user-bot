import { commandTypes } from "../types"
import { unixStampTime, Utils } from "../utils"

export const Main: commandTypes = {
  regExp: /^(?:main)$/i,
  func: ctx => {
    const memoryData = process.memoryUsage()
    ctx.editDelete(`Process:
RSS: ${Utils.bytesToSize(memoryData.rss)}
Heap Total: ${Utils.bytesToSize(memoryData.heapTotal)}
Heap Used: ${Utils.bytesToSize(memoryData.heapUsed)}
V8 External Memory: ${Utils.bytesToSize(memoryData.external)}
Запущен ${unixStampTime(process.uptime() * 1000)} назад`)
  }
}
