import { IMessageContextSendOptions, MessageContext, VK } from "vk-io"
import { HearManager } from "@vk-io/hear"
import dotenv from "dotenv"

import * as command from "./command"
import { delay } from "./utils"

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
      message_ids = await ctx.editMessage({ message })
    }
    await delay(ms)
    return ctx.deleteMessage({ message_ids, delete_for_all: true })
  }
  await next()
})
vk.updates.on("message", hearManager.middleware)

Object.keys(command).map(x => {
  const { hearConditions, handler } = command[x] as commandTypes
  return hearManager.hear(hearConditions, handler)
})

vk.updates.start()
