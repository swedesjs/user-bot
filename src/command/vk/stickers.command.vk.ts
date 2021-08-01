import { resolveResource } from "vk-io"
import { vk } from "../.."
import { commandTypes } from "../../types"
import dotenv from "dotenv"
import { Utils, VKUtils } from "../../utils"
dotenv.config()

export const Stickers: commandTypes = {
  regExp: /^(?:stickers)\s(.*)$/i,
  func: async ctx => {
    const userId = await resolveResource({
      api: vk.api,
      resource: ctx.$match[1]
    })

    const [info] = await vk.api.users.get({
      user_id: userId.id,
      name_case: "gen"
    })

    const userStickers = await VKUtils.getUserStickerPacks(process.env.VKME_TOKEN, userId.id)

    ctx.editDelete(
      `У @id${userId.id} (${info.first_name} ${info.last_name}) ${userStickers.stats.packs.paid}/${userStickers.stats.packs.count} платных наборов стикеров (${Utils.separator(
        userStickers.totalPrice,
        "."
      )} ${Utils.declOfNum(userStickers.totalPrice, ["голос", "голоса", "голосов"])}/${Utils.separator(userStickers.totalPrice * 7, ".")}₽)\n\n${
        userStickers.stats.packs.paid > 30
          ? `Много`
          : userStickers.items
              .filter(x => !x.isFree)
              .map(x => x.title)
              .join(", ")
      }`,
      60000,
      {
        disable_mentions: true,
        dont_parse_links: true
      }
    )
  }
}
