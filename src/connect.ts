import { Repository, getRepository, createConnection } from "typeorm"
import { VKGroup, LastId, Blacklist } from "./entites"

export let groupsRepository: Repository<VKGroup>
export let lastIdRepository: Repository<LastId>
export let blacklistRepository: Repository<Blacklist>

createConnection().then(() => {
  groupsRepository = getRepository(VKGroup)
  lastIdRepository = getRepository(LastId)
  blacklistRepository = getRepository(Blacklist)
})
