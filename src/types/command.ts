import { HearManager } from "@vk-io/hear"
import { MessageContext } from "vk-io"
import { editDelete } from "."

export type commandTypes = Readonly<{
  regExp: RegExp
  func: (ctx: MessageContext & editDelete, next?: Parameters<HearManager<MessageContext>["hear"]>[1]) => void
}>
