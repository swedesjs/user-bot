import { resolveResource } from "vk-io"
import dotenv from "dotenv"

import { vk } from "../.."
import { unixStampTime, Utils, VKUtils } from "../../utils"

dotenv.config()

export const Stickers: commandTypes = {
  hearConditions: /^(?:stickers|стикеры)\s?(.*)?$/i,

  handler: async ctx => {
    const userId = ctx.replyMessage?.senderId || ctx.forwards[0]?.senderId || (await resolveResource({ api: vk.api, resource: ctx.$match[1] })).id
    const ms = +new Date()

    const [info] = await vk.api.users.get({
      user_id: userId,
      name_case: "gen"
    })

    const userStickers = await VKUtils.getUserStickerPacks(process.env.VKME_TOKEN, userId)

    ctx.editDelete(
      `У @id${userId} (${info.first_name} ${info.last_name}) ${userStickers.stats.packs.paid}/${
        userStickers.stats.packs.count
      } платных наборов стикеров (${Utils.separator(userStickers.totalPrice, ".")} ${Utils.declOfNum(userStickers.totalPrice, [
        "голос",
        "голоса",
        "голосов"
      ])}/${Utils.separator(userStickers.totalPrice * 7, ".")}₽)\n\n${
        userStickers.stats.packs.paid > 120
          ? `Много`
          : userStickers.items
              .filter(x => !x.isFree)
              .map(x => x.title)
              .join(", ")
      }\n\nЗадержка: ${unixStampTime(+new Date() - ms)}`,
      60000,
      {
        disable_mentions: true,
        dont_parse_links: true
      }
    )
  }
}
