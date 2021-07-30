import { HearManager } from "@vk-io/hear"
import { MessageContext } from "vk-io"
import { editDelete } from "."

type ParamsHear = Parameters<HearManager<MessageContext>["hear"]>
export type commandTypes = {
  regExp: RegExp
  func: (ctx: MessageContext & editDelete, next?: ParamsHear[1]) => void
}
