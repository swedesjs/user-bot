import { Personal } from "qiwi-sdk"
import dotenv from "dotenv"

dotenv.config()

export const qiwi = new Personal(process.env.QIWI_TOKEN)
export const QIWIINFO: commandTypes = {
  regExp: /^(?:qiwi)/i,
  func: async ctx => {
    const info = await qiwi.getPersonProfile()
    const balance = await qiwi.getAccounts(String(info.authInfo.personId))
    ctx.editDelete(`Инфа о киви:
Статус: ${info.contractInfo.identificationInfo[0].identificationLevel}
Баланс: ${balance[0].balance.amount}₽
`)
  }
}
