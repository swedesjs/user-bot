declare global {
  declare module "vk-io" {
    import { IMessageContextSendOptions } from "vk-io"
    export interface MessageContext {
      editDelete: (message: string, ms?: number, params?: IMessageContextSendOptions) => Promise<boolean>
    }
  }

  declare module "vk-io/lib/api/schemas/methods" {
    import * as Response from "vk-io/lib/api/schemas/responses"
    import * as Params from "vk-io/lib/api/schemas/params"

    export interface APIMessages {
      getChat(params: Params.MessagesChatGetParams): Promise<Response.MessagesChatGetResponse>
    }
  }

  declare module "vk-io/lib/api/schemas/params" {
    import * as Objects from "vk-io/lib/api/schemas/objects"

    export interface MessagesChatGetParams {
      chat_id: number
      fields: Objects.UsersFields[]
      name_case?: Objects.NameCase
      [key: string]: any
    }
  }

  declare module "vk-io/lib/api/schemas/responses" {
    import * as Objects from "vk-io/lib/api/schemas/objects"

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

    export interface MessagesChatGetResponse {
      type: string
      title: string
      admin_id: number
      members_count: number
      /** Идентификатор беседы. */
      id: number
      users: Objects.MessagesChatGetUsers[]
      kicked: number
      push_settings: {
        sound: number
        disabled_until: number
      }
      photo_50: string
    }
  }

  declare module "vk-io/lib/api/schemas/objects" {
    import * as Objects from "vk-io/lib/api/schemas/objects"

    export interface MessagesChatGetUsers extends Objects.UsersUserFull {
      invited_by: number
      type: "profile" | "group"
    }
  }

  declare module "@vk-io/hear" {}
  declare module "vk-io-question" {}

  declare global {
    import { MessageContext } from "vk-io"
    import { HearManager, HearConditions } from "@vk-io/hear"
    import { IQuestionMessageContext } from "vk-io-question"

    type commandTypes = Readonly<{
      hearConditions: HearConditions<MessageContext>
      handler: (ctx: MessageContext, next?: Parameters<Parameters<HearManager<MessageContext>["hear"]>[1]>[1]) => void
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

type AllowArray<T> = T[] | T

type UnArray<T> = T extends (infer U)[] ? U : never
