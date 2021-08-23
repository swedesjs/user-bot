import { groupsRepository, vk } from "../.."
import { delay } from "../../utils"
import { baseGetCount } from "../../utils/base"

export const baseCount: commandTypes = {
  hearConditions: /^(?:countBase)$/i,
  handler: async ctx => {
    const [[userId, groupsIds]] = (await baseGetCount()).sort((a, b) => b[1].length - a[1].length)

    const [{ id, first_name, last_name }] = await vk.api.users.get({ user_id: userId })

    //@ts-expect-error
    const getGroupsToApi = await vk.api.groups.getById({ group_ids: groupsIds, fields: ["members_count"] })

    const answer = await ctx.question(
      `Самое большое количество групп имеет - @id${id} (${first_name} ${last_name}) - ${groupsIds.length}

    ${getGroupsToApi.map(x => `@club${x.id} (${x.name}) - (🗣 ${x.members_count})`).join("\n")}

    Снейсти их нахуй?`,
      {
        answerTimeLimit: 60000
      }
    )

    if (/^(?:да|yes|конечно)/i.test(answer.text)) {
      getGroupsToApi.forEach(x => groupsRepository.delete(x.id))
    }
    // await delay(60000)
    // await ctx.deleteMessage({message_ids: })
  }
}
