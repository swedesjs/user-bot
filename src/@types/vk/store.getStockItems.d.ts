declare global {
  declare module "vk-io/lib/api/schemas/methods" {
    import { StoryGetStockItemsParams } from "vk-io/lib/api/schemas/params"
    import { StoryGetStockItemsResponse } from "vk-io/lib/api/schemas/responses"

    export interface APIStore {
      getStockItems(params: StoryGetStockItemsParams): Promise<StoryGetStockItemsResponse>
    }
  }
  declare module "vk-io/lib/api/schemas/params" {
    export interface StoryGetStockItemsParams {
      type: "stickers"
      lang: "ru"
      products_ids: number
    }
  }
  declare module "vk-io/lib/api/schemas/responses" {
    export interface StoryGetStockItemsResponse {}
  }
}
