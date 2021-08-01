import { Races } from "races-api"
import { commandTypes } from "../../types"
import dotenv from "dotenv"

dotenv.config()
export const races = new Races(process.env.RACETOKEN)
export const InfoRace: commandTypes = {
  regExp: /^(?:infoRace)/i,
  func: async ctx => {
    const info = await races.merchant.get()
    ctx.editDelete(`Info in project from ${info.name}

CreatedID: ${info.ownerVkid}
Coin: ${info.coin}
Diamonds: ${info.diamonds}
WebhooksURL: ${info.webhookUrl}
`)
  }
}
