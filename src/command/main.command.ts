import { promise as ping } from "ping"
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
    const dataPing = await ping.probe("api.vk.com")

    const [{ tx_bytes }] = await si.networkStats()
    const { free, used, total } = await si.mem()

    diskspace.check("/", async (_, { total: totalDisk, free: freeDisk }) =>
      ctx.editDelete(`
Информация о сервере:
📈 | Процесор: ${fixed((await getCPUUsage()) * 100)} %
⚙ | Оперативка: ${bytesToSize(used)} из ${bytesToSize(total)} (${fixed(((total - free) / total) * 100)} %)
📡 | Скорость: ${os
        .cpus()
        .map(x => `${fixed(x.speed / 1000)} ГГц`)
        .join(" | ")}
⏳ | Запущен: ${unixStampTime(process.uptime() * 1000)}
💿 | Disk: ${bytesToSize(+totalDisk - +freeDisk)} из ${bytesToSize(+totalDisk)} (${fixed(((+totalDisk - +freeDisk) / +totalDisk) * 100)} %)
📶 | Подключение: ${bytesToSize(tx_bytes)}/сек

🔨 | Обработка заняла — ${fixed((Date.now() - ctx.createdAt * 1000) / 1000) + " с."} 
⚒ | Время отправки — ${fixed((Date.now() - ms) / 1000)} с.
🏓 | Пинг: ${dataPing.time}ms

💻 | Система: ${os.type()}
`)
    )
  }
}
