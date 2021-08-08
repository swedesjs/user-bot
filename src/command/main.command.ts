import { commandTypes } from "../types"
import { unixStampTime, Utils } from "../utils"
import battery from "battery-level"
import os from "os"
import ping from "ping"

export const Main: commandTypes = {
  regExp: /^(?:main)$/i,
  func: async ctx => {
    const memoryData = process.memoryUsage()
    const dataPing = await ping.promise.probe("vk.com")
    ctx.editDelete(`
RSS: ${Utils.bytesToSize(memoryData.rss)}
Heap Total: ${Utils.bytesToSize(memoryData.heapTotal)}
Heap Used: ${Utils.bytesToSize(memoryData.heapUsed)} 
V8 External Memory: ${Utils.bytesToSize(memoryData.external)}
OS Uptime: ${unixStampTime(os.uptime() * 1000)}
Battery: ${Math.floor((await battery()) * 100)}%
Ping: ${dataPing.time}ms
Запущен ${unixStampTime(process.uptime() * 1000)} назад
Задержка: ${Date.now() - ctx.createdAt * 1000}ms`)
  }
}
