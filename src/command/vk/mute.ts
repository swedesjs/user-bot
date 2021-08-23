import { vk } from "../.."

export const mute: commandTypes = {
  hearConditions: /^(?:mute)\s?(.*)?$/i,
  handler: async ctx => {
    const message = await vk.api.messages.getHistory({ peer_id: ctx.peerId })
    console.log(message)
  }
}
