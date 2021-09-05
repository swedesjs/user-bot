import { Personal } from "qiwi-sdk"
import dotenv from "dotenv"
import { Utils } from "../../utils"

dotenv.config()

export const qiwi = new Personal(process.env.QIWI_TOKEN)
export const QIWIINFO: commandTypes = {
  hearConditions: /^(?:qiwi)/i,
  handler: async ctx => {
    const {
      contractInfo: {
        identificationInfo: [{ identificationLevel }]
      },
      authInfo
    } = await qiwi.getPersonProfile()

    const [{ balance }] = await qiwi.getAccounts(String(authInfo.personId))

    ctx.editDelete(`Инфа о киви:
Статус: ${identificationLevel}
Баланс: ${Utils.separator(balance.amount)}₽
`)
  }
}
