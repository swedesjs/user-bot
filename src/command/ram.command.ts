import os from "os"
import { Utils } from "../utils"

export const Ram: commandTypes = {
  regExp: /^(?:ram|озу)$/i,
  func: ctx =>
    ctx.editDelete(`
Общее количество RAM: ${Utils.bytesToSize(os.totalmem())}
Занято: ${Utils.bytesToSize(os.totalmem() - os.freemem())}
Свободно: ${Utils.bytesToSize(os.freemem())}
`)
}
