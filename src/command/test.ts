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

Array.from({ length: 3 })
