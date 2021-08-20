import crypto from "crypto"

export const md5: commandTypes = {
  hearConditions: /^(?:md5)\s(.*)$/i,
  handler: ctx => ctx.editDelete(`MD5: ${crypto.createHash("md5").update(ctx.$match[1]).digest("hex")}`)
}
