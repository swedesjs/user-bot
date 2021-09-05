import { resolveResource } from "vk-io"
import { groupsRepository, vk } from "../.."
import { getUser } from "../../utils"

export const getGroup: commandTypes = {
  hearConditions: /^(?:getGroup|группы)\s?(.*)?$/i,
  // @ts-expect-error
  handler: async ctx => {
    const [userId, getGroups] = await Promise.all([getUser(ctx), groupsRepository.find()])

    const getGroupUser = getGroups.filter(value => value.contacts.find(x => x == userId))

    if (!getGroupUser.length) return ctx.editDelete(`Нихуя не найдено`)
    const groupsInfo = await vk.api.groups.getById({ group_ids: getGroupUser.map(value => value.groupId), fields: ["members_count"] })
    const filterGroup = groupsInfo.filter(value => value.name !== "Частная группа")

    ctx.editDelete(`Найдено ${groupsInfo.length} групп
    ${filterGroup.map(({ id, name, members_count = 0 }, index) => `${index + 1}. @club${id} (${name}) (🗣 ${members_count})`).join("\n")}
    Частных групп: ${groupsInfo.length - filterGroup.length}
`)
  }
}
