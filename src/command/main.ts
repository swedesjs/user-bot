import { commandTypes } from "../types"
import { unixStampTime, Utils } from "../utils"
import battery from "battery-level"
import os from "os"

export const Main: commandTypes = {
  regExp: /^(?:main)$/i,
  func: async ctx => {
    const memoryData = process.memoryUsage()
    ctx.editDelete(`Process:
    
RSS: ${Utils.bytesToSize(memoryData.rss)}
Heap Total: ${Utils.bytesToSize(memoryData.heapTotal)}
Heap Used: ${Utils.bytesToSize(memoryData.heapUsed)}
V8 External Memory: ${Utils.bytesToSize(memoryData.external)}
OS Uptime: ${unixStampTime(os.uptime() * 1000)}
Battery: ${(await battery()) * 100}%
Запущен ${unixStampTime(process.uptime() * 1000)} назад
Задержка: ${Date.now() - ctx.createdAt * 1000}ms`)
  }
}
