import { groupsRepository } from "../.."

export const baseGetCount = async (): Promise<[number, number[]][]> => {
  const getGroups = await groupsRepository.find()

  return getGroups.reduce((acc, { groupId, contacts }) => {
    contacts.forEach(id => {
      const get = acc.find(x => x[0] === +id)
      return get ? get[1].push(groupId) : acc.push([+id, [groupId]])
    })
    return acc
  }, [])
}
