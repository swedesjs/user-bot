import { commandTypes } from "../types"

export const UniCode: commandTypes = {
  regExp: /^(?:unicode)\s(.*)$/i,
  func: ctx => ctx.editDelete(`UNICODE: ${ctx.$match[1].replace(/[\u0080-\uFFFF]/g, s => "\\u" + ("000" + s.charCodeAt(0).toString(16)).substr(-4))}`)
}
