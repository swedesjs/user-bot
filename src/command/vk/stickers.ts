import { resolveResource } from "vk-io"
import { vk } from "../.."
import { commandTypes } from "../../types"
import utils from "rus-anonym-utils"
import dotenv from "dotenv"
import { VKUtils } from "../../utils"
dotenv.config()

export const Stickers: commandTypes = {
  regExp: /^(?:stickers)\s(.*)$/i,
  func: async ctx => {
    await ctx.loadMessagePayload()
    const userId = await resolveResource({
      api: vk.api,
      resource: ctx.$match[1]
    })

    const userStickers = await VKUtils.getUserStickerPacks(process.env.VKME_TOKEN, userId.id, true)

    return ctx.editDelete(
      `У @id${userId.id} ${VKUtils.declOfNum(userStickers.items.length, ["найден", "найдено", "найдено"])} ${VKUtils.separator(userStickers.items.length, ".")} ${VKUtils.declOfNum(
        userStickers.items.length,
        ["стикерпак", "стикерпака", "стикерпаков"]
      )} на сумму ${VKUtils.separator(userStickers.totalPrice * 7, ".")}₽
Платных: ${userStickers.stats.paid}
Бесплатных: ${userStickers.stats.free}
Паков: ${userStickers.stats.packs.count}
⠀Обычных: ${userStickers.stats.packs.simple}
⠀Анимированных: ${userStickers.stats.packs.animated}
⠀Бесплатных обычных: ${userStickers.stats.packs.freeSimple}
⠀Бесплатных анимированных: ${userStickers.stats.packs.freeAnimated}
⠀Всего бесплатных: ${userStickers.stats.packs.free}
⠀Платных обычных: ${userStickers.stats.packs.paidSimple}
⠀Платных анимированных: ${userStickers.stats.packs.paidAnimated}
⠀Всего платных: ${userStickers.stats.packs.paid}
Стилей: ${userStickers.stats.styles.count}
⠀Обычных: ${userStickers.stats.styles.simple}
⠀Анимированных: ${userStickers.stats.styles.animated}
⠀Бесплатных обычных: ${userStickers.stats.styles.freeSimple}
⠀Бесплатных анимированных: ${userStickers.stats.styles.freeAnimated}
⠀Всего бесплатных: ${userStickers.stats.styles.free}
⠀Платных обычных: ${userStickers.stats.styles.paidSimple}
⠀Платных анимированных: ${userStickers.stats.styles.paidAnimated}
⠀Всего платных: ${userStickers.stats.styles.paid}`,
      60000,
      {
        disable_mentions: true
      }
    )
  }
}
