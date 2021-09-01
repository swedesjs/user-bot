import { resolveResource } from "vk-io"
import { Utils } from "../../utils"
import { groupsRepository, vk } from "../.."

export const deleteBase: commandTypes = {
  hearConditions: /^(?:deletebase)\s?(.*)?$/i,
  handler: async ctx => {
    const userId = ctx.replyMessage?.senderId || ctx.forwards[0]?.senderId || (await resolveResource({ api: vk.api, resource: ctx.$match[1] })).id
    const getGroups = await groupsRepository.find()
    const deleteCount = getGroups.filter(x => x.contacts.find(x => x == userId))

    deleteCount.map(x => groupsRepository.delete(x.groupId))

    ctx.editDelete(`Удалено групп: ${deleteCount.length}
    Осталось групп: ${Utils.separator(getGroups.length - deleteCount.length)}`)
  }
}
