import { groupsRepository } from "../.."

export const clearBase: commandTypes = {
  hearConditions: /^(?:очистить)$/i,
  handler: async ctx => {
    const getClear = await groupsRepository.find()
    const getCountDelete = getClear.filter(x => x.contacts?.length < 1).map(x => groupsRepository.delete(x.groupId))

    let count = 0
    getClear.reduce((a, b) => {
      if (a.groupId === b.groupId) count += 1
      return a
    })

    // @ts-expect-erro/*  */r
    // const groupInfo = await vk.api.groups.getById({ group_ids: getClear.map(x => x.groupId) })

    ctx.editDelete(`Было очищено ${getCountDelete.length} мусора
Найдено повторющихся ID: ${count}`)
  }
}
