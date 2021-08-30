const unicode: UnicodeType = [
  [" ", "0020"],
  ["!", "0021"],
  ['"', "0022"],
  ["#", "0023"],
  ["$", "0024"],
  ["%", "0025"],
  ["&", "0026"],
  ["'", "0027"],
  ["(", "0028"],
  [")", "0029"],
  ["*", "002A"],
  ["+", "002B"],
  [",", "002C"],
  ["-", "002D"],
  [".", "002E"],
  ["/", "002F"],
  [":", "003A"],
  [";", "003B"],
  ["<", "003C"],
  ["=", "003D"],
  [">", "003E"],
  ["?", "003F"],
  ["@", "0040"],
  ["[", "005B"],
  ["\\", "005C"],
  ["]", "005D"],
  ["^", "005E"],
  ["_", "005F"],
  ["`", "0060"],
  ["{", "007B"],
  ["|", "007C"],
  ["}", "007D"],
  ["~", "007E"],
  ["0", "0030"],
  ["1", "0031"],
  ["2", "0032"],
  ["3", "0033"],
  ["4", "0034"],
  ["5", "0035"],
  ["6", "0036"],
  ["7", "0037"],
  ["8", "0038"],
  ["9", "0039"],
  ["a", "0041", "0061"],
  ["b", "0042", "0062"],
  ["c", "0043", "0063"],
  ["d", "0044", "0064"],
  ["e", "0045", "0065"],
  ["f", "0046", "0066"],
  ["g", "0047", "0067"],
  ["h", "0048", "0068"],
  ["i", "0049", "0069"],
  ["j", "004A", "006A"],
  ["k", "004B", "006B"],
  ["l", "004C", "006C"],
  ["m", "004D", "006D"],
  ["n", "004E", "006E"],
  ["o", "004F", "006F"],
  ["p", "0050", "0070"],
  ["q", "0051", "0071"],
  ["r", "0052", "0072"],
  ["s", "0053", "0073"],
  ["t", "0054", "0074"],
  ["u", "0055", "0075"],
  ["v", "0056", "0076"],
  ["w", "0057", "0077"],
  ["x", "0058", "0078"],
  ["y", "0059", "0079"],
  ["z", "005A", "007A"]
]
const unicodeFunc = (text: string) =>
  text
    .split("")
    .map(value => `\\u${unicode.find(([symbol]) => symbol === value.toLowerCase())[value.charAt(0) === value.charAt(0).toUpperCase() ? 1 : 2]}`)
    .join("")

export const UniCode: commandTypes = {
  hearConditions: /^(?:unicode)\s(.*)$/i,
  handler: ctx => {
    const unicodeResponse = unicodeFunc(ctx.$match[1])
    const evalResult = eval(`\`${unicodeResponse}\``)

    ctx.editDelete(
      `UNICODE: ${unicodeResponse}
      
      Проверка: ${evalResult}
      Исходный текст: ${ctx.$match[1]}
      Совпадает: ${evalResult === ctx.$match[1] ? "да" : "нет"}
      Всего кодов: ${unicode.map(value => value.slice(1)).flatMap(value => value).length}`
    )
  }
}

type Subsequence = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type CodeType = `00${Exclude<Subsequence, 0 | 1>}${Subsequence | ("A" | "B" | "C" | "D" | "E" | "F")}`
type UnicodeType = [string, CodeType, CodeType?][]
