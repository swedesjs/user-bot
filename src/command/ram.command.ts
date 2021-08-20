import os from "os"
import { Utils } from "../utils"

export const Ram: commandTypes = {
  hearConditions: /^(?:ram|озу)$/i,
  handler: ctx =>
    ctx.editDelete(`
Общее количество RAM: ${Utils.bytesToSize(os.totalmem())}
Занято: ${Utils.bytesToSize(os.totalmem() - os.freemem())}
Свободно: ${Utils.bytesToSize(os.freemem())}
`)
}
