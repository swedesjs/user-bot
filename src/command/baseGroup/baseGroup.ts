import { groupsRepository, lastIdRepository, vk } from "../.."
import { Utils } from "../../utils"

export const baseGroup: commandTypes = {
  hearConditions: /^(?:база)$/i,
  handler: async ctx => {
    const getBase = await groupsRepository.find()
    const getBaseSlice = getBase.slice(getBase.length - 20, getBase.length).reverse()

    const [getGroups, getUser, { groupId }] = await Promise.all([
      // @ts-expect-error
      vk.api.groups.getById({ group_ids: getBaseSlice.map(x => x.groupId), fields: ["members_count"] }),

      // @ts-expect-error
      vk.api.users.get({ user_ids: getBaseSlice.flatMap(x => x.contacts), lang: "en" }),

      lastIdRepository.findOne(1)
    ])

    const filterGroup = getGroups.filter(x => x.name !== "Частная группа")

    ctx.editDelete(`Последние ${filterGroup.length} ${Utils.declOfNum(filterGroup.length, ["группа", "группы", "групп"])} занесенных в базу:
${filterGroup
  .map(
    (x, index) =>
      `${index + 1}. @club${x.id} (${x.name}) - ${getBaseSlice
        .find(u => u.groupId == x.id)
        .contacts.map(id => {
          const { first_name, last_name } = getUser.find(u => u.id == id)
          return `@id${id} (${first_name.slice(0, 1)}. ${last_name}) - (🗣 ${x.members_count || 0}) `
        })
        .join(", ")}`
  )
  .join("\n")}

Общее количество групп в базе: ${Utils.separator(getBase.length)}
Последний ID: ${groupId}
Частных групп: ${getGroups.length - filterGroup.length}
    `)
  }
}
