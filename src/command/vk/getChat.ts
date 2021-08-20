import { vk } from "../.."
import { unixTime } from "../../utils"

export enum platform {
  Modile = 1,
  Iphone,
  iPad,
  Android,
  WindowsPhone,
  DesktopWindows10,
  FullVersion
}

export const getChat: commandTypes = {
  regExp: /^(?:chatinfo)$/i,
  func: async ctx => {
    try {
      const getChat = await vk.api.messages.getChat({ chat_id: ctx.chatId, fields: ["online", "last_seen"] })

      const profiles = getChat.users.filter(x => x.type === "profile")
      const groups = getChat.users.filter(x => x.type === "group")

      const userAdmin = profiles.find(x => x.id === getChat.admin_id)
      const groupAdmin = groups.find(x => x.id === Math.abs(getChat.admin_id))

      ctx.editDelete(`
      Название: ${getChat.title}
      Создатель: ${
        getChat.admin_id < 0
          ? `@club${groupAdmin.id} (${groupAdmin.name})`
          : `@id${userAdmin.id} (${userAdmin.first_name} ${userAdmin.last_name}) - ${
              userAdmin.online ? `онлайн (${platform[userAdmin.last_seen.platform]})` : `не онлайн (${unixTime(userAdmin.last_seen.time * 1000)})`
            }`
      }
      Онлайн: ${profiles.filter(x => x.online).length}
      Участников: ${getChat.members_count}
      Боты в беседе: ${groups.length > 0 ? groups.map(x => `@club${x.id} (${x.name})`).join(", ") : `Отсуствуют`}
`)
    } catch (message) {
      ctx.editDelete(message)
    }
  }
}
