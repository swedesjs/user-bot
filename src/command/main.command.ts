import { promise as ping } from "ping"
import { promisify } from "util"

import si from "systeminformation"
import diskspace from "diskspace"
import os from "os"

import { getCPUUsage, unixStampTime, Utils } from "../utils"

const { bytesToSize } = Utils

const fixed = (result: number, fractionDigits: number = 2) => +result.toFixed(fractionDigits)

export const Main: commandTypes = {
  hearConditions: /^(?:main)$/i,
  handler: async ctx => {
    const ms = Date.now()

    const [{ used, total }, { time }, { total: totalDisk, free: freeDisk }, getCpu] = await Promise.all([
      si.mem(),
      ping.probe("api.vk.com"),
      promisify(diskspace.check)("/"),
      getCPUUsage()
    ])

    ctx.editDelete(`
Информация о сервере:
📈 | Процесор: ${fixed(getCpu * 100)} %
⚙ | Оперативка: ${bytesToSize(used)} из ${bytesToSize(total)} (${fixed((used / total) * 100)} %)
📡 | Скорость: ${os
      .cpus()
      .map(x => `${fixed(x.speed / 1000)} ГГц`)
      .join(" | ")}
⏳ | Запущен: ${unixStampTime(process.uptime() * 1000)}
💿 | Disk: ${bytesToSize(+totalDisk - +freeDisk)} из ${bytesToSize(+totalDisk)} (${fixed(((+totalDisk - +freeDisk) / +totalDisk) * 100)} %)

🔨 | Обработка заняла — ${fixed((Date.now() - ctx.createdAt * 1000) / 1000) + " с."} 
⚒ | Время отправки — ${fixed((Date.now() - ms) / 1000)} с.
🏓 | Пинг: ${time}ms

💻 | Система: ${os.type()}
`)
  }
}
