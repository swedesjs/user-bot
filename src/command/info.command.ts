import os from "os"
export const info: commandTypes = {
  hearConditions: /^(?:инфа)$/i,
  handler: async ctx =>
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
