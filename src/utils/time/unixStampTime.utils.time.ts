import { Utils } from "../utils.utils"

/**
 * Преобразование UnixTime в понятное для глаз человека время
 * @param stamp Время UnixTime в миллисекундах
 * @returns Время
 */
export const unixStampTime = (stamp: number) => {
  stamp = stamp / 1000

  const second = stamp % 60
  stamp = (stamp - second) / 60

  const minutes = stamp % 60
  stamp = (stamp - minutes) / 60

  const house = stamp % 24
  stamp = (stamp - house) / 24

  const day = stamp % 365
  const year = (stamp - day) / 365

  let text = ``

  if (year > 0) text += Math.floor(year) + ` ${Utils.declOfNum(year, ["год", "года", "лет"])} `
  if (day > 0) text += Math.floor(day) + ` ${Utils.declOfNum(day, ["день", "дня", "дней"])} `
  if (house > 0) text += Math.floor(house) + ` ${Utils.declOfNum(house, ["час", "часа", "часов"])} `
  if (minutes > 0) text += Math.floor(minutes) + ` ${Utils.declOfNum(minutes, ["минута", "минуты", "минут"])} `
  if (second > 0) text += Math.floor(second) + ` ${Utils.declOfNum(second, ["секунда", "секунды", "секунд"])} `

  return text
}
