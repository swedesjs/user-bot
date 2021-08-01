import { API } from "vk-io"
import { Utils } from "../utils.utils"
import { IUserSticker, IUserStickerPackExtend, IUserStickerPack } from "./types"

class UtilsVK {
  async getStickerPacksInfo(token: string, stickerPacks_ids: number[]) {
    const api = new API({
      token,
      apiVersion: "5.157"
    })

    const output: IUserSticker[] = []

    for (const chunk of Utils.splitTo(stickerPacks_ids, 350)) {
      const data = await api.call(`store.getStockItems`, {
        type: "stickers",
        product_ids: chunk,
        lang: "ru"
      })

      output.push(
        ...data.items.map(
          (x: {
            product: {
              style_sticker_ids: number[]
              has_animation: boolean
              id: number
              title: string
            }
            old_price: number
            price: number
          }) => {
            const price = x.old_price || x.price || 0

            const isFree = price === 0
            const isAnimation = !!x.product.has_animation
            const isStyle = !!x.product.style_sticker_ids
            return {
              title: x.product.title,
              price,
              isFree,
              isAnimation,
              isStyle,
              id: x.product.id
            }
          }
        )
      )
    }

    return output
  }

  async getUserStickerPacks(token: string, user_id: number) {
    const api = new API({ token, apiVersion: "5.157" })

    const userStickerPacks = await api.call(`store.getProducts`, {
      type: "stickers",
      filters: "purchased",
      user_id
    })

    const parsedUserStickerPacks: IUserStickerPack[] = userStickerPacks.items.map((x: { id: number; base_id: number; active: number }) => {
      return {
        id: x.id,
        isStyle: !!x.base_id,
        isActive: !!x.active
      }
    })
    const extendsStickerPackInfo = await this.getStickerPacksInfo(
      token,
      parsedUserStickerPacks.map(x => x.id)
    )

    const output: IUserStickerPackExtend[] = []

    for (const stickerPack of extendsStickerPackInfo) {
      const userStickerPackInfo = parsedUserStickerPacks.find(x => x.id === stickerPack.id) as IUserStickerPack
      output.push(Object.assign(stickerPack, userStickerPackInfo))
    }
    const packsCount = output.filter(x => !x.isStyle).length
    const paidPacksCount = output.filter(x => !x.isFree && !x.isStyle).length
    return {
      items: output,
      totalPrice: Utils.total(output.map(x => x.price)),
      stats: {
        total: output.length,
        packs: {
          count: packsCount,
          paid: paidPacksCount
        }
      }
    }
  }
}

export const VKUtils = new UtilsVK()
