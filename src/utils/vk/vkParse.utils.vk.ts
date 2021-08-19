import fetch, { Response } from "node-fetch"
import { VK } from "vk-io"

export class ParseVK {
  /**
   * Получить текущее состоянии API VK
   * @returns Текущее состоянии API VK
   */
  static async status() {
    let data: Response | string = await fetch("https://vk.com/dev/health")
    data = await data.text()
    let positionX = data.indexOf(`var content = {`)
    let positionY = data.indexOf(`'header': ['`)
    const newData = data.substring(positionX, positionY)
    positionX = newData.indexOf(`[[`)
    positionY = newData.indexOf(`]]`)
    const arrayWithSections = JSON.parse(newData.substring(positionX, positionY + 2))
    const outputArray: ParseVKStatus[] = []
    for (const [section, status, performance, uptime] of arrayWithSections) {
      outputArray.push({
        section,
        performance,
        uptime,
        status
      })
    }
    return outputArray
  }

  static async getToken(token: string) {
    if (token.length > 85 || token.length < 85) throw new Error("Недостаточная длина массива")
    const TokenWords = token.split("").map(tempWord => tempWord.toLowerCase())
    const AllowedWordSet = new Set(["d", "e", "f", "b", "c", "a", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    TokenWords.forEach(tempWord => {
      if (!AllowedWordSet.has(tempWord)) {
        throw new Error("Invalid token symbols")
      }
    })
    const vk = new VK({ token })
    const [info] = await vk.api.users.get({})
    return info
  }
}
