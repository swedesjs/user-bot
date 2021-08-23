import { createCollectIterator } from "vk-io"
import { MessagesMessage } from "vk-io/lib/api/schemas/objects"
import { MessagesGetHistoryResponse } from "vk-io/lib/api/schemas/responses"
import { vk } from "../.."
import { delay } from "../../utils"

export const deleteMessage: commandTypes = {
  hearConditions: /^(?:deleteMessage)\s(all|([0-9]+))$/i,
  handler: async ctx => {
    const iterator = createCollectIterator({
      api: vk.api,
      method: "messages.getHistory",
      params: { peer_id: ctx.peerId },
      countPerRequest: 200,
      maxCount: 2000
    })

    let getMessage: MessagesMessage[]
    for await (const count of iterator) {
      getMessage = (count.items as MessagesGetHistoryResponse["items"]).filter(x => x.from_id === ctx.senderId).filter(x => Date.now() - 86400000 < x.date * 1000)
    }

    const sliceOrNo = getMessage.slice(1, ctx.$match[1] == "all" ? getMessage.length : +ctx.$match[1] + 1)
    console.log(sliceOrNo.map(x => x.id))

    // @ts-expect-error
    await vk.api.messages.delete({ peer_id: ctx.peerId, message_ids: sliceOrNo.map(x => x.id).join(","), delete_for_all: true })
    ctx.editDelete(`удалено ${sliceOrNo.length} сообщений`)
  }
}
