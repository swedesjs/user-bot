// const users: {
//   id: number
//   balance: number
//   ban: boolean
// }[] = [
//   {
//     id: 1,
//     balance: 3000,
//     ban: false
//   },
//   {
//     id: 2,
//     balance: 4000,
//     ban: false
//   },
//   {
//     id: 3,
//     balance: 4000,
//     ban: false
//   },
//   {
//     id: 4,
//     balance: 4000,
//     ban: false
//   },
//   {
//     id: 5,
//     balance: 4000,
//     ban: false
//   },
//   {
//     id: 6,
//     balance: 4000,
//     ban: false
//   },
//   {
//     id: 7,
//     balance: 4000,
//     ban: false
//   },
//   {
//     id: 8,
//     balance: 4000,
//     ban: false
//   },
//   {
//     id: 9,
//     balance: 4000,
//     ban: false
//   },
//   {
//     id: 10,
//     balance: 4000,
//     ban: false
//   },
//   {
//     id: 11,
//     balance: 4000,
//     ban: false
//   },
//   {
//     id: 12,
//     balance: 4000,
//     ban: false
//   }
// ]

import fetch from "node-fetch"

// const myId = 1

// const usersTop = () => {
//   const usersTopic = users.filter(x => !x.ban).sort((x, y) => y.balance - x.balance)

//   console.log(`TOP:
// ${usersTopic
//   .slice(0, 10)
//   .map(x => `ID: ${x.id} - balance: ${x.balance}`)
//   .join("\n")}

// Ваше место в топе: ${usersTopic.findIndex(x => x.id === myId) + 1}
// `)
// }

// usersTop()

// const command: commandTypes = {
//   hearConditions: {
//     text: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
//     isChat: true
//   },
//   handler: ctx => {
//     ctx.deleteMessage({
//       delete_for_all: true
//     })
//     ctx.send({ chat_id: 1, message: `Удалил подозрительную ссылку\n\nОтправитель: @id${ctx.senderId}` })
//   }
// }

fetch("https://bago.si/api/vk.getLatestGroup?hash=6681e0f2", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 Edg/92.0.902.73",
    cookle: "sid=e562bf1d20e46a4003152659b1f423c1a223"
  }
})
  .then(x => x.json())
  .then(console.log)
