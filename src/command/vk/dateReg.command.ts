import { resolveResource } from "vk-io"
import { vk } from "../.."
import { unixStampTime, unixTime, Utils, VKUtils } from "../../utils"

export const dateReg: commandTypes = {
  regExp: /^(?:дата)\s(.*)$/i,
  func: async ctx => {
    var { id } = await resolveResource({
      api: vk.api,
      resource: ctx.$match[1]
    })
    const dataReg = await VKUtils.getVkRegDate(id)
    ctx.editDelete(`Дата регистрации этого @id${id} (пидора): ${unixTime(dataReg)}
Тоесть в вк он: ${unixStampTime(Date.now() - dataReg)}`)
  }
}
