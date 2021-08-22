declare global {
  declare module "vk-io/lib/api/schemas/methods" {
    import { SetMemberRoleParams } from "vk-io/lib/api/schemas/params"
    import { SetMemberRoleResponse } from "vk-io/lib/api/schemas/responses"

    export interface APIMessages {
      setMemberRole(params: SetMemberRoleParams): Promise<SetMemberRoleResponse>
    }
  }

  declare module "vk-io/lib/api/schemas/params" {
    export interface SetMemberRoleParams {
      peer_id: number
      member_id: number
      role: "member" | "admin"
    }

    export interface GroupsGetByIdParams {
      group_ids?: AllowArray<string> | AllowArray<number>
    }
  }

  declare module "vk-io/lib/api/schemas/responses" {
    export interface SetMemberRoleResponse {}
  }
}
type AppsGetGroupsType = {
  count: number
  items: {
    id: number
    name: string
    photo: string
    domain: string
    members_count: number
    verified: number
  }[]
}

type AppsGetGroups<T extends boolean = false> = T extends false ? Promise<AppsGetGroupsType> : AppsGetGroupsType
