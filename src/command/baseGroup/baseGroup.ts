import { groupsRepository, lastIdRepository, vk } from "../.."
import { Utils } from "../../utils"

export const baseGroup: commandTypes = {
  hearConditions: /^(?:база)$/i,
  handler: async ctx => {
    const getBase = await groupsRepository.find()
    // console.log(getBase)

    const getBaseSlice = getBase.slice(getBase.length - 10, getBase.length).reverse()
    // @ts-expect-error
    const getGroups = await vk.api.groups.getById({ group_ids: getBaseSlice.map(x => x.groupId), fields: ["members_count"],  })
    const filterGroup = getGroups.filter(x => x.name !== "Частная группа")

    // @ts-expect-error
    const getUser = await vk.api.users.get({ user_ids: getBaseSlice.flatMap(x => x.contacts), lang: "en" })

    ctx.editDelete(`Последние ${filterGroup.length} ${Utils.declOfNum(filterGroup.length, ["группа", "группы", "групп"])} групп занесенных в базу:
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

Общее количество групп в базе: ${getBase.length}
Последний ID: ${(await lastIdRepository.findOne(1)).groupId}
Частных групп: ${getGroups.length - filterGroup.length}
    `)
  }
}
