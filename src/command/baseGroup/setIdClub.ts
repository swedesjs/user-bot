import { lastIdRepository } from "../.."

export const setBase: commandTypes = {
  hearConditions: /^(?:setClubId)\s(.*)$/i,
  handler: async ctx => {
    try {
      await lastIdRepository.save({ id: 1, groupId: +ctx.$match[1] })
      ctx.editDelete(`Изменено`)
    } catch (message) {
      ctx.editDelete(message)
    }
  }
}
