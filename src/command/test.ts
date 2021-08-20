import { getRandomId, IMessageContextSendOptions, MessageContext, resolveResource } from "vk-io"
import { vk } from ".."

const splitInto = (str: string, len: number) => {
  const res = []
  while (str.length) {
    res.push(str.substring(0, len))
    str = str.substring(len)
  }
  return res
}

export const Test: commandTypes = {
  regExp: /^(?:test)$/i,
  func: async ctx => {
    // ctx.sendSplit = ctx.send
    // ctx.send = (text: string | IMessageContextSendOptions, params?: IMessageContextSendOptions) => {
    //   if (!text) return vk.api.messages.send({ peer_ids: ctx.peerId, disable_mentions: true, random_id: getRandomId(), ...params } as IMessageContextSendOptions)
    //   return splitInto(text as string, 100).map(async message => vk.api.messages.send({ peer_ids: ctx.peerId, disable_mentions: true, message, random_id: getRandomId(), ...params }))[0]
    // }
    // console.log(await ctx.send(`d`))
    // const six = (a: any[], x: number) => (x % a.length) + 1
    // ctx.send("")
  }
}
