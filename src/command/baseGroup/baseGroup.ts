import { groupsRepository, lastIdRepository, vk } from "../.."

export const baseGroup: commandTypes = {
  hearConditions: /^(?:база)$/i,
  handler: async ctx => {
    const getBase = await groupsRepository.find()
    // console.log(getBase)

    const getBaseSrez = getBase.slice(getBase.length - 10, getBase.length).reverse()
    // @ts-expect-error
    const getGroups = await vk.api.groups.getById({ group_ids: getBaseSrez.map(x => x.groupId) })
    // @ts-expect-error
    const getUser = await vk.api.users.get({ user_ids: getBaseSrez.flatMap(x => x.contacts) })

    ctx.editDelete(`Последние 10 групп занесенных в базу:
${getGroups
  .map(
    x =>
      `@club${x.id} (${x.name}) - ${getBaseSrez
        .find(u => u.groupId == x.id)
        .contacts.map(x => {
          const { first_name, last_name } = getUser.find(u => u.id == x)
          return `@id${x} (${first_name} ${last_name})`
        })
        .join(", ")}`
  )
  .join("\n")}

Общее количество групп в базе: ${getBase.length}
Последний ID: ${(await lastIdRepository.findOne(1)).groupId}
    `)
  }
}
