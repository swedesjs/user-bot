import { vk } from ".."

export const intelligenceService: commandTypes = {
  regExp: /^(?:разведка)\s?(.*)?$/i,
  // @ts-expect-error
  func: async ctx => {
    try {
      const checkForwardAndReply = ctx.replyMessage?.text || ctx.forwards[0]?.text || ctx.$match[1]
      if (!checkForwardAndReply) return ctx.editDelete("Долбаеб ссылка где?")

      const checkLinkIndex = checkForwardAndReply.indexOf("https://vk.me/join/")

      const link = checkForwardAndReply.slice(checkLinkIndex, checkLinkIndex + 43)
      const { profiles, preview, groups } = await vk.api.messages.getChatPreview({
        link,
        // @ts-expect-error
        fields: "online",
        v: "5.21"
      })

      const groupAdmin = groups?.find(x => x.id === Math.abs(preview.admin_id))
      const userAdmin = profiles.find(x => x.id === preview.admin_id)

      ctx.editDelete(`
    Название: ${preview.title}
    Создатель: ${
      preview.admin_id < 0
        ? `@club${groupAdmin.id} (${groupAdmin.name}) ${groupAdmin.is_closed ? "- бросил своих подопечных" : ""}`
        : `@id${userAdmin.id} (${userAdmin.first_name} ${userAdmin.last_name}) - ${userAdmin.is_closed ? `бросил своих подопечных` : userAdmin.online ? "онлайн" : "не онлайн"}`
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
