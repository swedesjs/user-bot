import os from "os"
import { commandTypes } from "../types"

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
ARCH: ${os.arch}`,
      30000
    )
}
