declare global {
  declare module "vk-io" {
    import { IMessageContextSendOptions } from "vk-io"
    export interface MessageContext {
      editDelete: (message: string, ms?: number, params?: IMessageContextSendOptions) => Promise<boolean>
    }
  }

  declare module "vk-io/lib/api/schemas/responses" {
    export interface MessagesGetChatPreviewResponse {
      preview: {
        admin_id: number
        members_count: number
        members: number[]
        title: string
        photo: {
          photo_50: string
          photo_100: string
          photo_200: string
        }
        joined: boolean
        chat_settings: {
          owner_id: number
          title: string
          state: string
          acl: null | any
          members_count: number
          is_service: boolean
        }
      }
      groups: {
        id: number
        name: string
        screen_name: string
        is_closed: number
        type: string
        is_admin: number
        is_member: number
        is_advertiser: number
        photo_50: string
        photo_100: string
        photo_200: string
      }[]
    }
  }
  declare module "@vk-io/hear" {}

  declare global {
    import { MessageContext } from "vk-io"
    import { HearManager } from "@vk-io/hear"

    type commandTypes = Readonly<{
      regExp: RegExp
      func: (ctx: MessageContext, next?: Parameters<HearManager<MessageContext>["hear"]>[1]) => void
    }>
  }
}

type ParseVKStatus = Readonly<{
  /**
   * Категория методов
   */
  section: string
  /**
   * Время запроса
   */
  performance: number
  /**
   * UPTIME
   */
  uptime: number

  status: string
}>
