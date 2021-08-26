import { vk } from "../.."
import { baseGetCount } from "../../utils/base"

export const baseCount: commandTypes = {
  hearConditions: /^(?:countBase)$/i,
  handler: async ctx => {
    const [[userId, groupsIds]] = (await baseGetCount()).sort(([, a], [, b]) => b.length - a.length)

    const [{ id, first_name, last_name }] = await vk.api.users.get({ user_id: userId })

    //@ts-expect-error
    const getGroupsToApi = await vk.api.groups.getById({ group_ids: groupsIds, fields: ["members_count"] })
    const filterGroup = getGroupsToApi.filter(x => x.name !== "Частная группа")

    ctx.editDelete(
      `Самое большое количество групп имеет - @id${id} (${first_name} ${last_name}) - ${groupsIds.length}

    ${filterGroup.map((x, index) => `${index + 1}. @club${x.id} (${x.name}) - (🗣 ${x.members_count || 0})`).join("\n")}

    Частных групп: ${getGroupsToApi.length - filterGroup.length}
`
    )
  }
}
