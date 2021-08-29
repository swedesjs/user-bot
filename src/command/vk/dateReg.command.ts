import { resolveResource } from "vk-io"
import { vk } from "../.."
import { unixStampTime, unixTime, VKUtils } from "../../utils"

export const dateReg: commandTypes = {
  hearConditions: /^(?:дата)\s?(.*)?$/i,
  handler: async ctx => {
    const userId = ctx.replyMessage?.senderId || ctx.forwards[0]?.senderId || (await resolveResource({ api: vk.api, resource: ctx.$match[1] })).id

    const dataReg = await VKUtils.getVkRegDate(userId)
    ctx.editDelete(`Дата регистрации этого @id${userId} (пидора): ${unixTime(dataReg)}
Тоесть в вк он: ${unixStampTime(Date.now() - dataReg)}`)
  }
}
