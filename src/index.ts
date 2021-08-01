import dotenv from "dotenv"
import { IMessageContextSendOptions, MessageContext, VK } from "vk-io"
import { HearManager } from "@vk-io/hear"
import * as command from "./command"
import { delay } from "./utils"
import { commandTypes } from "./types"
dotenv.config()

export const vk = new VK({
  token: process.env.TOKEN
})

const hearManager = new HearManager<MessageContext>()

vk.updates.on("message", async (ctx, next) => {
  await ctx.loadMessagePayload()
  if (ctx.senderId !== 651129803) return

  ctx.editDelete = async (message: string, ms: number = 60000, params?: IMessageContextSendOptions) => {
    let message_ids: number
    try {
      message_ids = await ctx.editMessage({ message, ...params })
    } catch (message) {
      message_ids = await ctx.editMessage({ message, ...params })
    }
    await delay(ms)
    return ctx.deleteMessage({ message_ids })
  }
  await next()
})
vk.updates.on("message", hearManager.middleware)

Object.keys(command).map(x => {
  const { regExp, func } = command[x] as commandTypes
  return hearManager.hear(regExp, func)
})

vk.updates.start()
