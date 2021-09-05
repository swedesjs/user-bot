import { MessageContext, resolveResource } from "vk-io"
import { vk } from "../.."

export const getUser = async (ctx: MessageContext) =>
  ctx.replyMessage?.senderId || ctx.forwards[0]?.senderId || (await resolveResource({ api: vk.api, resource: ctx.$match[1] })).id
