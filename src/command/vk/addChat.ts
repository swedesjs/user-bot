import { config } from "dotenv"
import { resolveResource, VK } from "vk-io"
import { vk } from "../.."

config()

export const addChat: commandTypes = {
  hearConditions: /^(?:addChat)\s(.*)$/i,
  handler: async ctx => {
    try {
      const botPod = new VK({
        token: process.env.BOTPOD
      })

      const { id, type } = await resolveResource({
        api: vk.api,
        resource: ctx.$match[1]
      })

      const [typeClass, typeMethod, typeSubMethod, params]: [VK, string, string, any] =
        type == "user" ? [vk, "messages", "addChatUser", { chat_id: ctx.chatId, user_id: id }] : [botPod, "bot", "addBotToChat", { peer_id: ctx.peerId, bot_id: -id }]

      await typeClass.api.call(`${typeMethod}.${typeSubMethod}`, params)
    } catch (message) {
      ctx.editDelete(message)
    }
  }
}
