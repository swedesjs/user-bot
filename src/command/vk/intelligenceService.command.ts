import { vk } from "../.."
import { unixTime } from "../../utils"
import { platform } from "./getChat"

export const intelligenceService: commandTypes = {
  hearConditions: /^(?:разведка)\s?(.*)?$/i,

  // @ts-expect-error
  handler: async ctx => {
    try {
      const checkForwardAndReply = ctx.replyMessage?.text || ctx.forwards[0]?.text || ctx.$match[1]
      const [checkLink] = checkForwardAndReply.match(/(vk.me\/join\/(\w*))/g)

      if (!checkForwardAndReply) return ctx.editDelete("Долбаеб текст сообщений где где?")

      const { profiles, preview, groups } = await vk.api.messages.getChatPreview({ link: checkLink, fields: ["online", "last_seen"], v: "5.21" })

      const groupAdmin = groups?.find(x => x.id === Math.abs(preview.admin_id))
      const userAdmin = profiles.find(x => x.id === preview.admin_id)

      ctx.editDelete(`
      Название: ${preview.title}
      Создатель: ${
        preview.admin_id < 0
          ? `@club${groupAdmin.id} (${groupAdmin.name})`
          : `@id${userAdmin.id} (${userAdmin.first_name} ${userAdmin.last_name}) - ${
              userAdmin.online ? `онлайн (${platform[userAdmin.last_seen.platform]})` : `не онлайн (${unixTime(userAdmin.last_seen.time * 1000)})`
            }`
      }
      Онлайн: ${profiles.filter(x => x.online).length}
      Участников: ${preview.members_count}
      Боты в беседе: ${groups?.length ? groups.map(x => `@club${x.id} (${x.name})`).join(", ") : "Отсусутвуют"}
`)
    } catch (message) {
      ctx.editDelete(message)
    }
  }
}
