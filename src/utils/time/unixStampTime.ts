/**
 * Преобразование UnixTime в понятное для глаз человека время
 * @param stamp Время UnixTime в миллисекундах
 * @returns Время
 */
export const unixStampTime = (stamp: number) => {
  stamp = stamp / 1000

  let s = stamp % 60
  stamp = (stamp - s) / 60

  let m = stamp % 60
  stamp = (stamp - m) / 60

  let h = stamp % 24
  let d = (stamp - h) / 24

  let text = ``

  if (d > 0) text += Math.floor(d) + " д. "
  if (h > 0) text += Math.floor(h) + " ч. "
  if (m > 0) text += Math.floor(m) + " мин. "
  if (s > 0) text += Math.floor(s) + " с."

  return text
}
