// import { API } from "vk-io"
// import { vk } from ".."
// import { Utils } from "../utils"
// const api = new API({
//   token: "4b1270b7029a72ab7459588d532373cfa85be895628a4ef415699ce64802eb12cba0f251a5a07b35e58de"
// })
// const a = async () => {}
// a()

// namespace MatType {
//   export interface Shabolda {
//     shabolda: boolean
//   }
// }

// const TvoyaMat: MatType.Shabolda
// declare const tvoyaMat: MatType.Shabolda

// import fetch from "node-fetch"
// import { stringify } from "querystring"
// ;(async () => {
//   const result = await fetch("https://api.bago.si/method/app.getGroups?" + stringify({ id: 1, v: "a90c9ee0" }), {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "x-vk-sign":
//         "vk_access_token_settings=&vk_app_id=7183114&vk_are_notifications_enabled=0&vk_is_app_user=0&vk_is_favorite=0&vk_language=en&vk_platform=desktop_web&vk_ref=other&vk_ts=1629990305&vk_user_id=671597791&sign=BGpRA3mxo5zML8K7UbkU_TkzoJYDUmVAiRvcfDyFzdk"
//     }
//   })

//   const {
//     response: { items }
//   }: getGroups = await result.json()

//   console.log(`Группы Павла дурова:

// ${items
//   .slice(0, 20)
//   .map((x, index) => `${index}. @club${x.id} (${x.name}) (membersCount: ${x.members_count})`)
//   .join("\n")}`)
// })()

// type getGroups = {
//   response: {
//     count: number
//     items: {
//       id: number
//       name: string
//       photo: string
//       domain: string
//       members_count: number
//       verified: 0 | 1
//     }[]
//   }
// }
// type Subsequence = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
// type Param = `00${Exclude<Subsequence, 0 | 1>}`
// type CodeType = `${Param}${Subsequence | ("A" | "B" | "C" | "D" | "E" | "F")}`
// type UnicodeType<T extends Param, K extends Param = never> = [string, Extract<CodeType, `${T}${string}`>, Extract<CodeType, `${K}${string}`>?][]

// const unicode: UnicodeType<"002"> = [["", "0025"]]

// const users: Record<"id" | "balance" | "level", number>[] = [
//   { id: 0, balance: 30300303030, level: 494999 },
//   { id: 1, balance: 8484848484848, level: 4994949949 }
// ]

// users.forEach(value => Object.assign(value, { balance: 0, level: 0 } as Omit<UnArray<typeof users>, "id">))
// console.log(users)
export const unixStampTime2 = (stamp: number) => {
  stamp *= 1e6

  const nanosec = stamp % 1e6
  stamp = (stamp - nanosec) / 1e6

  const ms = stamp % 1000
  stamp = (stamp - ms) / 1000

  const second = stamp % 60
  stamp = (stamp - second) / 60

  const minutes = stamp % 60
  stamp = (stamp - minutes) / 60

  const house = stamp % 24
  stamp = (stamp - house) / 24

  const day = stamp % 31
  stamp = (stamp - day) / 31

  const mes = stamp % 12
  const year = (stamp - mes) / 12

  let text = ``

  if (year > 0) text += Math.floor(year) + " г. "
  if (mes > 0) text += Math.floor(mes) + " мес. "
  if (day > 0) text += Math.floor(day) + " д. "
  if (house > 0) text += Math.floor(house) + " ч. "
  if (minutes > 0) text += Math.floor(minutes) + " м. "
  if (second > 0) text += Math.floor(second) + " с. "
  if (ms > 0) text += Math.floor(ms) + " миллсек."

  return text
}
console.log(unixStampTime2(60000 * 60 * 24 * 31 * 12))
