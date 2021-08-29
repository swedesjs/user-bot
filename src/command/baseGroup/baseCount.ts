import { groupsRepository, vk } from "../.."

export const baseCount: commandTypes = {
  hearConditions: /^(?:countBase)$/i,
  handler: async ctx => {
    const getGroups = await groupsRepository.find()

    const [[userId, groupsIds]] = getGroups
      .reduce((acc: [number, number[]][], { groupId, contacts }) => {
        contacts.forEach(id => {
          const get = acc.find(([x]) => x === +id)

          return get ? get[1].push(groupId) : acc.push([+id, [groupId]])
        })
        return acc
      }, [])
      .sort(([, a], [, b]) => b.length - a.length)

    const [{ id, first_name, last_name }] = await vk.api.users.get({ user_id: userId, lang: "en" })

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
