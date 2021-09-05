import { Utils } from "../utils.utils"

/**
 * Преобразование UnixTime в понятное для глаз человека время
 * @param stamp Время UnixTime в миллисекундах
 * @returns Время
 */
export const unixStampTime = (stamp: number, declOfNum: boolean = false) => {
  stamp = stamp / 1000

  const second = stamp % 60
  stamp = (stamp - second) / 60

  const minutes = stamp % 60
  stamp = (stamp - minutes) / 60

  const house = stamp % 24
  stamp = (stamp - house) / 24

  const day = stamp % 31
  stamp = (stamp - day) / 31

  const mes = stamp % 365
  const year = (stamp - mes) / 365

  let text = ``

  if (year > 0)
    text += Math.floor(year) + (declOfNum ? ` ${Utils.declOfNum(year, ["год", "года", "лет"])} ` : ` ${Utils.declOfNum(year, ["г.", "г.", "л."])} `)
  if (mes > 0) text += Math.floor(mes) + " мес. "
  if (day > 0) text += Math.floor(day) + (declOfNum ? ` ${Utils.declOfNum(day, ["день", "дня", "дней"])} ` : " д. ")
  if (house > 0) text += Math.floor(house) + (declOfNum ? ` ${Utils.declOfNum(house, ["час", "часа", "часов"])} ` : " ч. ")
  if (minutes > 0) text += Math.floor(minutes) + (declOfNum ? ` ${Utils.declOfNum(minutes, ["минута", "минуты", "минут"])} ` : " м. ")
  if (second > 0) text += Math.floor(second) + (declOfNum ? ` ${Utils.declOfNum(second, ["секунда", "секунды", "секунд"])} ` : " с. ")

  return text
}
export const unixStampTime2 = (stamp: number) => {
  stamp = stamp / 1000

  const second = stamp % 60
  stamp = (stamp - second) / 60

  const minutes = stamp % 60
  stamp = (stamp - minutes) / 60

  const house = stamp % 24
  stamp = (stamp - house) / 24

  const day = stamp % 31
  stamp = (stamp - day) / 31

  const mes = stamp % 365
  const year = (stamp - mes) / 365

  let text = ``

  if (year > 0) text += Math.floor(year) + " г. "
  if (mes > 0) text += Math.floor(mes) + " мес. "
  if (day > 0) text += Math.floor(day) + " д. "
  if (house > 0) text += Math.floor(house) + " ч. "
  if (minutes > 0) text += Math.floor(minutes) + " м. "
  if (second > 0) text += Math.floor(second) + " с. "

  return text
}
