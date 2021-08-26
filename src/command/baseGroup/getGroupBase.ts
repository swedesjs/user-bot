import { resolveResource } from "vk-io"
import { groupsRepository, vk } from "../.."

export const getGroup: commandTypes = {
  hearConditions: /^(?:getGroup)\s?(.*)?$/i,
  // @ts-expect-error
  handler: async ctx => {
    const user_id = ctx.replyMessage?.senderId || ctx.forwards[0]?.senderId || (await resolveResource({ api: vk.api, resource: ctx.$match[1] })).id
    const getGroups = await groupsRepository.find()
    const getGroupUser = getGroups.filter(x => x.contacts.find(x => x == user_id))

    if (getGroupUser.length < 1) return ctx.editDelete(`Нихуя не найдено`)
    // @ts-expect-error
    const groupsInfo = await vk.api.groups.getById({ group_ids: getGroupUser.map(x => x.groupId), fields: ["members_count"] })
    const filterGroup = groupsInfo.filter(x => x.name !== "Частная группа")

    ctx.editDelete(`Найдено ${groupsInfo.length} групп
    ${filterGroup.map((x, index) => `${index + 1}. @club${x.id} (${x.name}) (🗣 ${x.members_count || 0})`).join("\n")}
    Частных групп: ${groupsInfo.length - filterGroup.length}
`)
  }
}
