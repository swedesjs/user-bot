import { resolveResource } from "vk-io"
import { vk } from "../.."
import { commandTypes } from "../../types"
import { Utils, VKUtils } from "../../utils"

export const dateReg: commandTypes = {
  regExp: /^(?:дата)\s(.*)$/i,
  func: async ctx => {
    const { id } = await resolveResource({
      api: vk.api,
      resource: ctx.$match[1]
    })
    ctx.editDelete(`Дата регистрации этого @id${id} (пидора): ${await VKUtils.getVkRegDate(id)}`)
  }
}
