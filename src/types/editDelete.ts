import { IMessageContextSendOptions } from "vk-io";

export type editDelete = {
  readonly editDelete: (message: string, ms?: number, params?: IMessageContextSendOptions) => Promise<boolean>
}
