import { vk } from "../.."

export const Conf: commandTypes = {
  regExp: /^(?:конфа)$/i,
  func: async ctx => {
    const { profiles } = await vk.api.messages.getConversationMembers({ peer_id: ctx.peerId, extended: 1, v: 5.144 })
    ctx.editDelete(profiles.map(x => `@id${x.id} (${x.first_name})`).join("\n"), 60000, { disable_mentions: true })
  }
}
