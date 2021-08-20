import { createHash } from "crypto"

console.log(createHash("md5").update("lalala").digest("hex"))
