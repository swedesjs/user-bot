import { blacklistRepository, groupsRepository, lastIdRepository } from "./connect"
import { IMessageContextSendOptions, MessageContext, VK } from "vk-io"
import { HearManager } from "@vk-io/hear"
import { config } from "dotenv"

import { VKGroup } from "./entites"
import { delay } from "./utils"

import * as command from "./command"

config()

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
      message_ids = await ctx.editMessage({ message, ...params, dont_parse_links: true })
    } catch (message) {
      message_ids = await ctx.editMessage({ message })
    }

    await delay(ms)
    return ctx.deleteMessage({ message_ids, delete_for_all: true })
  }

  await next()
})

vk.updates.on("message", hearManager.middleware)

Object.values(command).forEach(({ hearConditions, handler }) => hearManager.hear(hearConditions, handler))

vk.updates.start()

setInterval(async () => {
  const group = await lastIdRepository.findOne(1)
  try {
    const [getGroupsAll, getGroups, getUserBlacklist] = await Promise.all([
      groupsRepository.find(),

      vk.api.groups.getById({ group_ids: Array.from({ length: 500 }, (_, x) => group.groupId + x), fields: ["contacts"] }),

      blacklistRepository.find()
    ])

    await Promise.all(
      // @ts-expect-error
      getGroups.map(async ({ id, contacts, name }) => {
        if (name === "DELETED") return (group.groupId -= 1)

        group.groupId += 1

        // @ts-expect-error
        if (!contacts?.length) return

        // @ts-expect-error
        if (!contacts?.filter(x => x.user_id)) return

        // @ts-expect-error
        if (contacts.find(x => getUserBlacklist.find(u => u.id === x.user_id))) return

        // @ts-expect-error
        if (getGroupsAll.find(x => x.groupId == id)) return

        const groups = new VKGroup()

        groups.groupId = id
        groups.contacts = contacts.map(x => x.user_id)

        await groupsRepository.save(groups)
      })
    )
  } catch (err) {
    console.log(err)
  }
  await lastIdRepository.save(group)
}, 10000)

export { groupsRepository, lastIdRepository, blacklistRepository }
