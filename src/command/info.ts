import os from "os"
import { commandTypes } from "../types"
import { unixStampTime } from "../utils"
import battery from "battery-level"

export const info: commandTypes = {
  regExp: /^(?:инфа)$/i,
  func: async ctx =>
    ctx.editDelete(
      `Информация о пк:
Версия: ${os.version}
Хост: ${os.hostname}
Платформа: ${os.platform}
Реализация: ${os.release}
Система: ${os.type}
ПК в рабочем состоянии: ${unixStampTime(os.uptime() * 1000)}
Процесс работы: ${unixStampTime(process.uptime() * 1000)}
ARCH: ${os.arch}
Батарея: ${(await battery()) * 100}%`,
      30000
    )
}
