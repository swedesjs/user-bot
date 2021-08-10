/**
 * Преобразование UnixTime в понятную для глаз человеку дату
 * @param stamp Время в формате UnixTime
 * @returns Дата
 */
export const unixTime = (stamp?: number | string): string => {
  if (!stamp) return unixTime(+new Date())
  let date = new Date(stamp),
    year = date.getFullYear(),
    month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1,
    day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
    hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    mins = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    secs = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  return `${day}.${month}.${year}, ${hour}:${mins}:${secs}`
}
