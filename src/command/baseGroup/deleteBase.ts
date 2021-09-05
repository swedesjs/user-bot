import { groupsRepository } from "../.."
import { Utils } from "../../utils"
import { getUser } from "../../utils"

export const deleteBase: commandTypes = {
  hearConditions: /^(?:deletebase)\s?(.*)?$/i,
  handler: async ctx => {
    const [userId, getGroups] = await Promise.all([getUser(ctx), groupsRepository.find()])

    const deleteCount = getGroups.filter(x => x.contacts.find(x => x == userId))

    await Promise.all(deleteCount.map(x => groupsRepository.delete(x.groupId)))

    ctx.editDelete(`Удалено групп: ${deleteCount.length}
    Осталось групп: ${Utils.separator(getGroups.length - deleteCount.length)}`)
  }
}
