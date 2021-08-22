import { groupsRepository, vk } from "../.."
import { baseGetCount } from "../../utils/base"

export const baseCount: commandTypes = {
  hearConditions: /^(?:countBase)$/i,
  handler: async ctx => {
    const getGroups = await groupsRepository.find()

    const [[userId, groupsIds]] = (await baseGetCount()).sort((a, b) => b[1].length - a[1].length)

    const [{ id, first_name, last_name }] = await vk.api.users.get({ user_id: userId })

    //@ts-expect-error
    const getGroupsToApi = await vk.api.groups.getById({ group_ids: groupsIds, fields: ["members_count"] })

    ctx.editDelete(`Самое большое количество групп имеет - @id${id} (${first_name} ${last_name}) - ${groupsIds.length}

    ${getGroupsToApi.map(x => `@club${x.id} (${x.name})`).join("\n")}`)
  }
}
