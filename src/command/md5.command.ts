import crypto from "crypto"
import { commandTypes } from "../types"

export const md5: commandTypes = {
  regExp: /^(?:md5)\s(.*)$/i,
  func: ctx => ctx.editDelete(`MD5: ${crypto.createHash("md5").update(ctx.$match[1]).digest("hex")}`)
}
