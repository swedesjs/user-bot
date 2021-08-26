declare global {
  declare module "vk-io/lib/api/schemas/methods" {
    import { StoryGetProductsParams } from "vk-io/lib/api/schemas/params"
    import { StoryGetProductsResponse } from "vk-io/lib/api/schemas/responses"

    export interface APIStore {
      // getProducts(params: StoryGetProductsParams): Promise<StoryGetProductsResponse>
    }
  }
  declare module "vk-io/lib/api/schemas/params" {
    export interface StoryGetProductsParams {}
  }
  declare module "vk-io/lib/api/schemas/responses" {
    export interface StoryGetProductsResponse {}
  }
}
