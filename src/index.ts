import { Connection, Repository, createConnections, getRepository } from "typeorm"
import { IMessageContextSendOptions, MessageContext, VK } from "vk-io"
import { HearManager } from "@vk-io/hear"
import dotenv from "dotenv"

import { LastId, VKGroup } from "./entites/baseGroup.entity"
import { delay } from "./utils"
import * as command from "./command"

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

Object.keys(command).forEach(x => {
  const { hearConditions, handler }: commandTypes = command[x]
  hearManager.hear(hearConditions, handler)
})

vk.updates.start()

let db: Connection
export let groupsRepository: Repository<VKGroup>
export let lastIdRepository: Repository<LastId>
;(async () => {
  db = (await createConnections())[0]
  try {
    await db.connect()
  } catch {}
  groupsRepository = getRepository(VKGroup)
  lastIdRepository = getRepository(LastId)
})()

setInterval(async () => {
  const group = await lastIdRepository.findOne(1)
  try {
    const getGroupsAll = await groupsRepository.find()

    // @ts-expect-error
    const getGroups = await vk.api.groups.getById({ group_ids: Array.from({ length: 500 }, (_, x) => group.groupId + x), fields: ["contacts"] })

    await new Promise(resolve =>
      resolve(
        // @ts-expect-error
        getGroups.map(async ({ id, contacts, name }) => {
          if (name === "DELETED") return (group.groupId -= 1)

          group.groupId += 1

          // @ts-expect-error
          if (contacts?.length < 1) return

          // @ts-expect-error
          if (!contacts?.filter(x => x.user_id)) return

          // @ts-expect-error
          if (getGroupsAll.find(x => x.groupId == id)) return
          const groups = new VKGroup()
          groups.groupId = id
          groups.contacts = contacts.map(x => x.user_id)

          await groupsRepository.save(groups)
        })
      )
    )

    await lastIdRepository.save(group)
  } catch (err) {
    console.log(err)
  }
}, 10000)
