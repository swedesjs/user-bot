import types from "rus-anonym-utils/dist/lib/VK/types"
import { API } from "vk-io"

class UtilsVK {
  /**
   * Функция для корректного склонения чисел
   *
   * @param {number} inputNumber Число
   * @param {string[]} titlesArray Строки для склонения
   * @returns {string} корректное название
   * @example
   * // => помидора
   * string.declOfNum(3, ["помидор", "помидора", "помидоров"]);
   */
  public declOfNum(inputNumber: number, titlesArray: [string, string, string]): string {
    return titlesArray[inputNumber % 10 === 1 && inputNumber % 100 !== 11 ? 0 : inputNumber % 10 >= 2 && inputNumber % 10 <= 4 && (inputNumber % 100 < 10 || inputNumber % 100 >= 20) ? 1 : 2]
  }
  /**
   * @description Разделяет число по 3 символа
   * @param {number} number Число
   * @param {string} separator Разделитель
   * @param {string=} dotSymbol Разделитель между целой и дробной частью числа
   * @returns {string} Итоговую строку
   * @example
   * number.separator(100000, "."); // => 100.000
   * number.separator(100000.50, ".", ","); // => 100.000,50
   */
  separator(number: number, separator: string, dotSymbol: string | undefined = "."): string {
    const splittedNumber = Math.abs(number).toString().split(".")
    splittedNumber[0] = splittedNumber[0]
      .split("")
      .reverse()
      .map((value, index, arr) => (index > 0 && index < arr.length && index % 3 == 0 ? value + separator : value))
      .reverse()
      .join("")
    return (Math.sign(number) < 0 ? "-" : "") + splittedNumber.join(dotSymbol)
  }
  total(inputArray: number[]) {
    return inputArray.reduce((totalPrice, tempPrice) => totalPrice + tempPrice, 0)
  }

  splitTo<T>(inputArray: T[], elementsInChunk: number) {
    const outputArray: T[][] = []

    for (let i = 0; i < inputArray.length; i += elementsInChunk) {
      outputArray.push(inputArray.slice(i, i + elementsInChunk))
    }

    return outputArray
  }

  async getStickerPacksInfo(token: string, stickerPacks_ids: number[]): Promise<types.IStickerPackInfo[]> {
    const api = new API({
      token,
      apiVersion: "5.157"
    })

    const output: types.IStickerPackInfo[] = []

    for (const chunk of this.splitTo(stickerPacks_ids, 350)) {
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
              copyright: string
              url: string
            }
            old_price: number
            price: number
            author: string
            description: string
          }) => {
            const price = x.old_price || x.price || 0

            const isFree = price === 0
            const isAnimation = !!x.product.has_animation
            const isStyle = !!x.product.style_sticker_ids
            return {
              id: x.product.id,
              price,
              title: x.product.title,
              author: x.author,
              description: x.description,
              copyright: x.product.copyright,
              url: x.product.url,
              isFree,
              isAnimation,
              isStyle
            }
          }
        )
      )
    }

    return output
  }

  getUserStickerPacks(token: string, user_id: number): Promise<types.IUserStickerPack[]>
  getUserStickerPacks(token: string, user_id: number, extend: true): Promise<types.IGetUserStickerPacksResponse>
  async getUserStickerPacks(token: string, user_id: number, extend?: true): Promise<types.IUserStickerPack[] | types.IGetUserStickerPacksResponse> {
    const api = new API({ token, apiVersion: "5.157" })

    const userStickerPacks = await api.call(`store.getProducts`, {
      type: "stickers",
      filters: "purchased",
      user_id
    })

    const parsedUserStickerPacks = userStickerPacks.items.map((x: { id: number; base_id: number; active: number; purchase_date: number }) => {
      return {
        id: x.id,
        isStyle: !!x.base_id,
        isActive: Boolean(x.active),
        purchaseDate: new Date(x.purchase_date * 1000)
      }
    }) as types.IUserStickerPack[]

    if (!extend) {
      return parsedUserStickerPacks
    } else {
      const extendsStickerPackInfo = await this.getStickerPacksInfo(
        token,
        parsedUserStickerPacks.map(x => x.id)
      )

      const output: types.IUserStickerPackExtend[] = []

      for (const stickerPack of extendsStickerPackInfo) {
        const userStickerPackInfo = parsedUserStickerPacks.find(x => x.id === stickerPack.id) as types.IUserStickerPack
        output.push(Object.assign(stickerPack, userStickerPackInfo))
      }

      const free = output.filter(x => x.isFree).length
      const paid = output.length - free

      const packsCount = output.filter(x => !x.isStyle).length
      const stylesCount = output.length - packsCount

      const simplePacksCount = output.filter(x => !x.isStyle && !x.isAnimation).length
      const animatedPacksCount = output.filter(x => !x.isStyle && x.isAnimation).length

      const freePacksCount = output.filter(x => x.isFree && !x.isStyle).length
      const paidPacksCount = output.filter(x => !x.isFree && !x.isStyle).length

      const simpleFreePacksCount = output.filter(x => x.isFree && !x.isStyle && !x.isAnimation).length
      const animatedFreePacksCount = output.filter(x => x.isFree && !x.isStyle && x.isAnimation).length

      const freeStylesCount = output.filter(x => x.isStyle && x.isFree).length
      const paidStylesCount = output.filter(x => x.isStyle && !x.isFree).length

      const simpleStylesCount = output.filter(x => x.isStyle && !x.isAnimation).length
      const animatedStylesCount = output.filter(x => x.isStyle && x.isAnimation).length

      const freeSimpleStylesCount = output.filter(x => x.isFree && x.isStyle && !x.isAnimation).length
      const freeAnimatedStylesCount = output.filter(x => x.isFree && x.isStyle && x.isAnimation).length

      return {
        items: output,
        totalPrice: this.total(output.map(x => x.price)),
        stats: {
          total: output.length,
          free,
          paid,
          packs: {
            count: packsCount,
            free: freePacksCount,
            paid: paidPacksCount,
            simple: simplePacksCount,
            animated: animatedPacksCount,
            freeSimple: simpleFreePacksCount,
            freeAnimated: animatedFreePacksCount,
            paidSimple: simplePacksCount - simpleFreePacksCount,
            paidAnimated: animatedPacksCount - animatedFreePacksCount
          },
          styles: {
            count: stylesCount,
            free: freeStylesCount,
            paid: paidStylesCount,
            simple: simpleStylesCount,
            animated: animatedStylesCount,
            freeSimple: freeSimpleStylesCount,
            freeAnimated: animatedStylesCount,
            paidSimple: simpleStylesCount - freeSimpleStylesCount,
            paidAnimated: animatedStylesCount - freeAnimatedStylesCount
          }
        }
      }
    }
  }
}

export const VKUtils = new UtilsVK()
