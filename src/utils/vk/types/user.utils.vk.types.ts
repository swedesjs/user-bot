export type IUserSticker = {
  title: string
  price: number
  isFree: boolean
  isAnimation: boolean
  isStyle: boolean
  id: number
}
export type IUserStickerPack = {
  id: number
  isActive: boolean
  isStyle: boolean
}

export type IUserStickerPackExtend = IUserStickerPack & IUserSticker
