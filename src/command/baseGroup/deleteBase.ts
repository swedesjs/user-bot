import { resolveResource } from "vk-io"
import { groupsRepository, vk } from "../.."

export const deleteBase: commandTypes = {
  hearConditions: /^(?:deletebase)\s?(.*)?$/i,
  handler: async ctx => {
    const user_id = ctx.replyMessage?.senderId || ctx.forwards[0]?.senderId || (await resolveResource({ api: vk.api, resource: ctx.$match[1] })).id
    const getGroups = await groupsRepository.find()
    const deleteCount = getGroups.filter(x => x.contacts.find(x => x == user_id))

    deleteCount.map(x => groupsRepository.delete(x.groupId))

    ctx.editDelete(`Удалено групп: ${deleteCount.length}
    Осталось групп: ${getGroups.length - deleteCount.length}`)
  }
}
