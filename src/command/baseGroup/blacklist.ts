import { blacklistRepository, groupsRepository, vk } from "../.."
import { getUser } from "../../utils"

export const BlacklistCommand: commandTypes = {
  hearConditions: /^(?:чс)\s?(.*)?$/i,
  // @ts-expect-error
  handler: async ctx => {
    const user_id = await getUser(ctx)

    const [blaklist, [{ first_name, last_name }], getGroup] = await Promise.all([
      blacklistRepository.find(),
      vk.api.users.get({ user_id }),
      groupsRepository.find()
    ])

    if (blaklist.find(x => x.id === user_id)) return ctx.editDelete(`це @id${user_id} (петушок) уже торчит в чс`)

    const deleteCount = getGroup.filter(x => x.contacts.find(x => x == user_id))

    await Promise.all([blacklistRepository.save({ id: user_id }), Promise.all(deleteCount.map(x => groupsRepository.delete(x.groupId)))])

    ctx.editDelete(`Пидорас @id${user_id} (${first_name} ${last_name}) добавлен в чс групп, теперь его группы исчезли из базы нахуй
    Удалено групп: ${deleteCount.length}`)
  }
}
