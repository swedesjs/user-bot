import dotenv from "dotenv"
import { MessageContext, VK } from "vk-io"
import { HearManager } from "@vk-io/hear"
import * as command from "./command"
import { delay } from "./utils"
dotenv.config()

export const vk = new VK({
  token: process.env.TOKEN
})

const hearManager = new HearManager<MessageContext>()

vk.updates.on("message", async (ctx, next) => {
  if (ctx.senderId !== 651129803) return
  ctx.editDelete = async (message: string, ms: number = 60000) => {
    let message_ids: number
    try {
      message_ids = await ctx.editMessage({ message })
    } catch (message) {
      message_ids = await ctx.editMessage({ message })
    }
    await delay(ms)
    return ctx.deleteMessage({ message_ids })
  }
  await next()
})
vk.updates.on("message", hearManager.middleware)

Object.keys(command).map(x => hearManager.hear(command[x].regExp, command[x].func))

vk.updates.start()
