//╔═╦══╦══╦═╦══╦══╗╔══╦═╦══╦══╗
//║╬║╔╗╠══║╬║╔╗║╔╗║║╔╗║║╠╗╔╣╔╗║
//║╗╣╠╣║══╣╗╣╠╣║╔╗║║╔╗║║║║║║╠╣║
//╚╩╩╝╚╩══╩╩╩╝╚╩══╝╚══╩═╝╚╝╚╝╚╝
//╔══╦═╦══╦╗╔╦══╗   ╔═╦══╦══╦══╦══╗
//╚╗╔╣║║══╣╚╝║╔╗║   ║╦╩╗╗╠║║╩╗╔╣══╣
//─║║║║╠══║╔╗║╠╣║   ║╩╦╩╝╠║║╗║║╠══║
//─╚╝╚═╩══╩╝╚╩╝╚╝   ╚═╩══╩══╝╚╝╚══╝
//╔═╦═╦═╦═╦╦╦══╗────╔══╦══╦══╦═╦╗╔══╗╔══╦═╦══╗
//║╬║╬║║║╦╣╔╩╗╔╝╔══╗║╔═╣╔╗║╔╗║╦╣║║╔╗║║╔╗║║╠╗╔╝
//║╔╣╗╣║║╩╣╚╗║║─╚══╝║╚╗║╠╣║╔╗║╩╣╚╣╠╣║║╔╗║║║║║
//╚╝╚╩╩═╩═╩╩╝╚╝─────╚══╩╝╚╩══╩═╩═╩╝╚╝╚══╩═╝╚╝

console.log("╔═════════════════════════════╗")
console.log("║        Gabella Bot          ║")
console.log("║      vk.com/gabellabot      ║")
console.log("║ Создатель: Тоша Евстафеев   ║")
console.log("║      vk.com/tosha_edits     ║")
console.log("╚═════════════════════════════╝")

// ВСЕ НАСТРОЙКИ В ФАЙЛЕ /database/settings.json!

const { VK, MarketAttachment, Keyboard } = require("vk-io")
const vk = new VK()
const commands = []
const fs = require("fs")
const requests = require("request")
const request = require("prequest")
const rq = require("prequest") //Вроде погода
const bot_owner = 504991834
let giving = false
const moment = require("moment-timezone") // таймер
moment.locale("ru") // таймер
moment.tz("Europe/Moscow") // таймер

/*==========================================================================================================*/
//=================================[User]===================================================================//
const user = new VK({
  token: "token" //Kate Mobile \\ https://oauth.vk.com/authorize?client_id=2685278&scope=1073737727&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1
})

setInterval(async () => {
  await saveUsers()
  console.log("╔═════════════════════════════╗")
  console.log("║        Gabella Bot          ║")
  console.log("║      vk.com/gabellabot      ║")
  console.log("║ Создатель: Тоша Евстафеев   ║")
  console.log("║      vk.com/tosha_edits     ║")
  console.log("║   База Данных - сохранена   ║")
  console.log("╚═════════════════════════════╝")
}, 30000)

const gabella = {
  bot: (p, f) => {
    commands.push([p, f])
  }
}

let gamess = {
  ebat: gg => {
    gg = gg.replace(/[^\d]/g, "")
    gg = gg.replace(/( )/gi, "")
    return Number(gg)
  }
}

const logfile_now = "logs_" + data() + time() + ".txt"
"logs/" + logfile_now, "w"

function spaces(string) {
  if (typeof string !== "string") string = string.toString()
  return string
    .split("")
    .reverse()
    .join("")
    .match(/[0-9]{1,3}/g)
    .join(".")
    .split("")
    .reverse()
    .join("")
}
function nikz(string) {
  string = string.toString().replace(/[:.?@^${}()|[\]\\]/g, "?") // $& means the whole matched string
  var text = string
  var l = Number(0)
  for (a in text) {
    if (text[a] == "?") {
      l += Number(1)
    }
  }
  if (l >= 2) {
    string = " типа замена "
  }
  return string
}
/*==========================================================================================================*/
/*===========================================ИНТЕРВАЛЫ=====================================================*/
setInterval(async () => {
  users
    .filter(x => x.settings.adm > 1)
    .map(x => {
      x.rating = 0
    })
}, 1000)
setInterval(async () => {
  users.map(user => {
    if (user.zp <= 0) {
      user.zp = 0
    }
    if (user.meteor <= 0) {
      user.meteor = 0
    }
    if (user.rubin <= 0) {
      user.rubin = 0
    }
    if (user.brilliant <= 0) {
      user.brilliant = 0
    }
    if (user.almaz <= 0) {
      user.almaz = 0
    }
    if (user.materia <= 0) {
      user.materia = 0
    }
    if (user.zoloto <= 0) {
      user.zoloto = 0
    }
    if (user.zhelezo <= 0) {
      user.zhelezo = 0
    }
  })
}, 5000)
setInterval(async () => {
  users.map(user => {
    if (user.petgolod <= 0) {
      user.petgolod = 0
    }
    if (user.petradost <= 0) {
      user.petradost = 0
    }
  })
}, 1000)
setInterval(async () => {
  users.map(user => {
    if (user.bank <= 0) {
      user.bank = 0
    }
  })
}, 60000)
setInterval(async () => {
  users.map(user => {
    if (user.posilka <= 0) {
      user.posilka = 0
    }
    if (user.hell <= 0) {
      user.hell = 0
    }
    if (user.secretcase <= 0) {
      user.secretcase = 0
    }
    if (user.randc <= 0) {
      user.randc = 0
    }
    if (user.platinium <= 0) {
      user.platinium = 0
    }
    if (user.surprise <= 0) {
      user.surprise = 0
    }
  })
}, 5000)
setInterval(async () => {
  users.map(user => {
    if (user.vak >= 101) {
      user.vak = 100
    }
    if (user.prem >= 2) {
      user.prem = 1
    }
    if (user.vip >= 2) {
      user.vip = 1
    }
  })
}, 30000)
setInterval(async () => {
  users.map(user => {
    if (user.prorab <= 1) {
      user.prorab = 1
    }
  })
}, 1000)
setInterval(async () => {
  users.map(user => {
    if (user.GB <= null) {
      user.GB = 0
    }
    if (user.NG <= null) {
      user.NG = 0
    }
    if (user.GB <= 0) {
      user.GB = 0
    }
    if (user.NG <= 0) {
      user.NG = 0
    }
    if (user.pachal <= 0) {
      user.pachal = 0
    }
    if (user.pachal >= 20001) {
      user.pachal = 20000
    }
  })
}, 11000)

setInterval(async () => {
  users.map(user => {
    if (user.btc >= 100000000000000001) {
      user.btc = 100000000000000000
    }
    if (user.btc <= 0) {
      user.btc = 0
    }
    if (user.rating >= 5000000000001) {
      user.rating = 5000000000000
    }
    if (user.donat <= -1) {
      user.donat = 0
    }
    if (user.donat == null) {
      user.donat = 0
    }
  })
}, 25000)
setInterval(async () => {
  users.map(user => {
    if ((user.golod = NaN)) {
      user.golod = 20
    }
    if ((user.radost = NaN)) {
      user.radost = 20
    }
  })
}, 1000)

setInterval(async () => {
  users.map(user => {
    if (user.sataka <= 0) {
      user.sataka = 1
    }
    if (user.sataka1 <= 0) {
      user.sataka1 = 1
    }
    if (user.bossyr <= 0) {
      user.bossyr = 0
    }
    if (user.rating <= -1) {
      user.rating = 0
    }
  })
}, 1000)

setInterval(async () => {
  users.map(user => {
    if (user.opit <= 0) {
      user.opit = 0
    }
    if (user.balance == null) {
      user.balance = 0
    }
    if (user.balance <= 99) {
      user.balance = 100
    }
    if (user.vip >= 2) {
      user.vip = 1
    }
    if (user.pem >= 2) {
      user.prem = 1
    }
  })
}, 15000)

setInterval(async () => {
  users
    .filter(a => a.settings.adm < 1)
    .map(user => {
      if (user.balance >= 10000000000000001) {
        user.balance = 10000000000000000
      }
    })
}, 2000)

setInterval(async () => {
  users.map(user => {
    if (user.balance >= 500000000000000000001) {
      user.balance = 500000000000000000000
    }
  })
}, 10000)
/*==========================================================================================================*/
/*================================================ИМУЩЕСТВО================================================*/
const telivisors = [
  {
    name: "SONY",
    att: "photo-190750183_457239032",
    cost: 25000,
    id: 1
  },
  {
    name: "LG 50UM7300 50",
    att: "photo-190750183_457239033",
    cost: 50000,
    id: 2
  },
  {
    name: "3D телевизор",
    att: "photo-190750183_457239029",
    cost: 65000,
    id: 3
  },
  {
    name: "Sony KD-65XG9505 64.5",
    att: "photo-190750183_457239034",
    cost: 65500,
    id: 4
  },
  {
    name: "JVC LT-24M585W 24",
    att: "photo-178396242_457241258",
    cost: 67030,
    id: 5
  },
  {
    name: "BenQ XL2540 (240 герц)",
    att: "photo-190750183_457239035",
    cost: 69999,
    id: 6
  },
  {
    name: "Viewsonic VX2758-C-mh 27 (340гц)",
    att: "photo-190750183_457239031",
    cost: 73500,
    id: 7
  },
  {
    name: "LG OLED65W9P",
    att: "photo-190750183_457239111",
    cost: 77999,
    id: 8
  },
  {
    name: "Samsung QE65Q900RBU",
    att: "photo-190750183_457239112",
    cost: 85599,
    id: 9
  }
]
/*==========================================================================================================*/
/*=========================================ДАТА============================================================*/
function getUnix() {
  return Date.now()
}

function unixStampLeft(stamp) {
  stamp = stamp / 1000

  var s = stamp % 60
  stamp = (stamp - s) / 60

  var m = stamp % 60
  stamp = (stamp - m) / 60

  var h = stamp % 24
  var d = (stamp - h) / 24

  var text = ``

  if (d > 0) text += Math.floor(d) + " д. "
  if (h > 0) text += Math.floor(h) + " ч. "
  if (m > 0) text += Math.floor(m) + " мин. "
  if (s > 0) text += Math.floor(s) + " с."

  return text
}

function addZero(i) {
  return i < 10 ? "0" + i : i
}
/*==========================================================================================================*/
/*==========================================================================================================*/
const quests = [
  { name: "Выиграйте в трейде 3 раза подряд", reward: 350000000, actions: 3 },
  { name: "Угадайте стаканчик 3 раза подряд", reward: 700000000, actions: 3 },
  { name: "Угадайте кубик 2 раза подряд", reward: 2000000000, actions: 2 },
  { name: "Выиграйте в казино 4 раза подряд", reward: 10000000000, actions: 4 }
]

const palochka = [
  { name: "Коктейль удачи", cost: 10000000000000, id: 1 },
  { name: "Коктейль порчи", cost: 5000000000000, id: 2 },
  { name: "Коктейль энергии", cost: 15000000000000, id: 3 },
  { name: "Коктейль противоядия", cost: 500000000000, id: 4 }
]

const vvorks = [
  { name: "Дворник", requiredLevel: 1, min: 20, max: 50, id: 1 },
  { name: "Сантехник", requiredLevel: 25, min: 50, max: 55, id: 2 },
  {
    name: "Электрик",
    requiredLevel: 75,
    min: 55,
    max: 60,
    id: 3
  },
  {
    name: "Слесарь",
    requiredLevel: 250,
    min: 62,
    max: 70,
    id: 4
  },
  {
    name: "Юрист",
    requiredLevel: 600,
    min: 65,
    max: 72,
    id: 5
  },
  {
    name: "Бухгалтер",
    requiredLevel: 2500,
    min: 70,
    max: 75,
    id: 6
  },
  {
    name: "Бармен",
    requiredLevel: 5000,
    min: 75,
    max: 85,
    id: 7
  },
  {
    name: "Администратор",
    requiredLevel: 15000,
    min: 85,
    max: 90,
    id: 8
  },
  {
    name: "Программист",
    requiredLevel: 50000,
    min: 90,
    max: 95,
    id: 9
  },
  {
    name: "Президент",
    requiredLevel: 100000,
    min: 90,
    max: 100,
    id: 10
  },
  {
    name: "Космонавт",
    requiredLevel: 500000,
    min: 100,
    max: 110,
    id: 11
  },
  {
    name: "Медик",
    requiredLevel: 1000000,
    min: 110,
    max: 1150,
    id: 12
  }
]

const pristavkas = [
  {
    name: "Xbox 360",
    att: "photo-190750183_457239057",
    cost: 5,
    id: 1
  },
  {
    name: "Xbox Оne",
    att: "photo-190750183_457239058",
    cost: 2500,
    id: 2
  },
  {
    name: "Xbox Series X",
    att: "photo-190750183_457239059",
    cost: 3700,
    id: 3
  },
  {
    name: "PlayStation 1",
    att: "photo-190750183_457239052",
    cost: 5555,
    id: 4
  },
  {
    name: "PlayStation 2",
    att: "photo-190750183_457239053",
    cost: 69999,
    id: 5
  },
  {
    name: "PlayStation 3",
    att: "photo-190750183_457239056",
    cost: 75777,
    id: 6
  },
  {
    name: "PlayStation 4",
    att: "photo-190750183_457239054",
    cost: 88500,
    id: 7
  },
  {
    name: "PlayStation 5",
    att: "photo-190750183_457239060",
    cost: 99999,
    id: 8
  }
]

const cars = [
  {
    name: "Самокат",
    att: "photo-178396242_457251115",
    cost: 2,
    prok_10: 1,
    maxshini: 0,
    maxdiski: 0,
    maxdvigok: 0,
    maxspoyler: 0,
    maxtoplivo: 0,
    maxprygini: 0,
    maxspitnik: 0,
    maxtyrbo: 0,
    maxnos: 0,
    id: 1
  },
  {
    name: "Ролики",
    att: "photo-178396242_457251116",
    cost: 150,
    prok_10: 2,
    maxshini: 0,
    maxdiski: 0,
    maxdvigok: 0,
    maxspoyler: 0,
    maxtoplivo: 0,
    maxprygini: 0,
    maxspitnik: 0,
    maxtyrbo: 0,
    maxnos: 0,
    id: 2
  },
  {
    name: "Гироскутер",
    att: "photo-178396242_457251117",
    cost: 2500,
    prok_10: 10,
    maxshini: 0,
    maxdiski: 0,
    maxdvigok: 0,
    maxspoyler: 0,
    maxtoplivo: 0,
    maxprygini: 0,
    maxspitnik: 0,
    maxtyrbo: 0,
    maxnos: 0,
    id: 3
  },
  {
    name: "BMX",
    att: "photo-178396242_457251118",
    cost: 5000,
    prok_10: 12,
    maxshini: 0,
    maxdiski: 0,
    maxdvigok: 0,
    maxspoyler: 0,
    maxtoplivo: 0,
    maxprygini: 0,
    maxspitnik: 0,
    maxtyrbo: 0,
    maxnos: 0,
    id: 4
  },
  {
    name: "Мопед",
    att: "photo-178396242_457251119",
    cost: 15000,
    prok_10: 20,
    maxshini: 5,
    maxdiski: 2,
    maxdvigok: 7,
    maxspoyler: 0,
    maxtoplivo: 10,
    maxprygini: 15,
    maxspitnik: 2,
    maxtyrbo: 0,
    maxnos: 0,
    id: 5
  },
  {
    name: "Мотоцикл",
    att: "photo-178396242_457251120",
    cost: 20000,
    prok_10: 30,
    maxshini: 5,
    maxdiski: 2,
    maxdvigok: 7,
    maxspoyler: 0,
    maxtoplivo: 10,
    maxprygini: 15,
    maxspitnik: 2,
    maxtyrbo: 0,
    maxnos: 0,
    id: 6
  },
  {
    name: "ВАЗ 2109",
    att: "photo-178396242_457251121",
    cost: 35000,
    prok_10: 50,
    maxshini: 15,
    maxdiski: 10,
    maxdvigok: 20,
    maxspoyler: 3,
    maxtoplivo: 20,
    maxprygini: 25,
    maxspitnik: 10,
    maxtyrbo: 10,
    maxnos: 5,
    id: 7
  },
  {
    name: "Квадроцикл",
    att: "photo-178396242_457251122",
    cost: 40500,
    prok_10: 55,
    maxshini: 5,
    maxdiski: 2,
    maxdvigok: 7,
    maxspoyler: 0,
    maxtoplivo: 10,
    maxprygini: 15,
    maxspitnik: 2,
    maxtyrbo: 0,
    maxnos: 0,
    id: 8
  },
  {
    name: "Багги",
    att: "photo-178396242_457251123",
    cost: 45000,
    prok_10: 60,
    maxshini: 5,
    maxdiski: 1,
    maxdvigok: 7,
    maxspoyler: 0,
    maxtoplivo: 10,
    maxprygini: 40,
    maxspitnik: 2,
    maxtyrbo: 0,
    maxnos: 0,
    id: 9
  },
  {
    name: "Вездеход",
    att: "photo-178396242_457251124",
    cost: 150000,
    prok_10: 90,
    maxshini: 0,
    maxdiski: 0,
    maxdvigok: 10,
    maxspoyler: 0,
    maxtoplivo: 20,
    maxprygini: 40,
    maxspitnik: 10,
    maxtyrbo: 0,
    maxnos: 0,
    id: 10
  },
  {
    name: "Лада Xray",
    att: "photo-178396242_457251125",
    cost: 350000,
    prok_10: 120,
    maxshini: 10,
    maxdiski: 5,
    maxdvigok: 20,
    maxspoyler: 5,
    maxtoplivo: 15,
    maxprygini: 10,
    maxspitnik: 10,
    maxtyrbo: 1,
    maxnos: 0,
    id: 11
  },
  {
    name: "Audi Q7",
    att: "photo-178396242_457251126",
    cost: 750000,
    prok_10: 130,
    maxshini: 15,
    maxdiski: 10,
    maxdvigok: 25,
    maxspoyler: 2,
    maxtoplivo: 35,
    maxprygini: 15,
    maxspitnik: 10,
    maxtyrbo: 5,
    maxnos: 2,
    id: 12
  },
  {
    name: "BMW X6",
    att: "photo-178396242_457251127",
    cost: 1000000,
    prok_10: 140,
    maxshini: 15,
    maxdiski: 10,
    maxdvigok: 25,
    maxspoyler: 5,
    maxtoplivo: 35,
    maxprygini: 15,
    maxspitnik: 10,
    maxtyrbo: 5,
    maxnos: 2,
    id: 13
  },
  {
    name: "Toyota FT-HS",
    att: "photo-178396242_457251128",
    cost: 1750000,
    prok_10: 150,
    maxshini: 20,
    maxdiski: 15,
    maxdvigok: 30,
    maxspoyler: 5,
    maxtoplivo: 35,
    maxprygini: 15,
    maxspitnik: 10,
    maxtyrbo: 5,
    maxnos: 2,
    id: 14
  },
  {
    name: "BMW Z4 M",
    att: "photo-178396242_457251151",
    cost: 2500000,
    prok_10: 150,
    maxshini: 20,
    maxdiski: 15,
    maxdvigok: 30,
    maxspoyler: 5,
    maxtoplivo: 35,
    maxprygini: 15,
    maxspitnik: 10,
    maxtyrbo: 5,
    maxnos: 2,
    id: 15
  },
  {
    name: "Subaru WRX STI",
    att: "photo-178396242_457251129",
    cost: 5750000,
    prok_10: 200,
    maxshini: 20,
    maxdiski: 17,
    maxdvigok: 35,
    maxspoyler: 10,
    maxtoplivo: 40,
    maxprygini: 20,
    maxspitnik: 15,
    maxtyrbo: 7,
    maxnos: 10,
    id: 16
  },
  {
    name: "Lamborghini Veneno",
    att: "photo-178396242_457251131",
    cost: 10500000,
    prok_10: 250,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 17
  },
  {
    name: "Tesla Roadster",
    att: "photo-178396242_457251132",
    cost: 25700000,
    prok_10: 260,
    maxshini: 15,
    maxdiski: 10,
    maxdvigok: 25,
    maxspoyler: 0,
    maxtoplivo: 25,
    maxprygini: 10,
    maxspitnik: 10,
    maxtyrbo: 5,
    maxnos: 7,
    id: 18
  },
  {
    name: "Yamaha YZF R6",
    att: "photo-178396242_457251133",
    cost: 50500000,
    prok_10: 265,
    maxshini: 35,
    maxdiski: 10,
    maxdvigok: 35,
    maxspoyler: 5,
    maxtoplivo: 25,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 10,
    id: 19
  },
  {
    name: "Bugatti Veyron",
    att: "photo-178396242_457251134",
    cost: 65503000,
    prok_10: 300,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 20
  },
  {
    name: "Thrust SSC",
    att: "photo-178396242_457251135",
    cost: 150000000,
    prok_10: 310,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 21
  },
  {
    name: "Ferrari LaFerrari",
    att: "photo-178396242_457251136",
    cost: 250500000,
    prok_10: 320,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 20,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 22
  },
  {
    name: "Koenigsegg Regear",
    att: "photo-178396242_457251137",
    cost: 275750000,
    prok_10: 320,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 25,
    maxspoyler: 7,
    maxtoplivo: 25,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 23
  },
  {
    name: "Tesla Semi",
    att: "photo-178396242_457251152",
    cost: 350550000,
    prok_10: 320,
    maxshini: 25,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 25,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 24
  },
  {
    name: "Venom GT",
    att: "photo-178396242_457251139",
    cost: 520500000,
    prok_10: 330,
    maxshini: 30,
    maxdiski: 20,
    maxdvigok: 25,
    maxspoyler: 7,
    maxtoplivo: 15,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 7,
    maxnos: 10,
    id: 25
  },
  {
    name: "Rolls-Royce",
    att: "photo-178396242_457251140",
    cost: 666666000,
    prok_10: 330,
    maxshini: 40,
    maxdiski: 20,
    maxdvigok: 15,
    maxspoyler: 7,
    maxtoplivo: 25,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 5,
    maxnos: 10,
    id: 26
  },
  {
    name: "Летающая машина",
    att: "photo-178396242_457251141",
    cost: 777750000,
    prok_10: 150,
    maxshini: 15,
    maxdiski: 5,
    maxdvigok: 35,
    maxspoyler: 2,
    maxtoplivo: 20,
    maxprygini: 10,
    maxspitnik: 10,
    maxtyrbo: 20,
    maxnos: 25,
    id: 27
  },
  {
    name: "ВАЗ 2105 Боевая Классика",
    att: "photo-178396242_457251142",
    cost: 1000000000000,
    prok_10: 400,
    maxshini: 45,
    maxdiski: 10,
    maxdvigok: 50,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 28
  },
  {
    name: "ВАЗ 2101 Drift King🤴",
    att: "photo-178396242_457251143",
    cost: 5000000000000,
    prok_10: 400,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 29
  },
  {
    name: "Mercedes-Benz G-класс",
    att: "photo-178396242_457251144",
    cost: 7000000000000,
    prok_10: 450,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 30
  },
  {
    name: "Tesla Cybertruck",
    att: "photo-178396242_457251145",
    cost: 12000000000000,
    prok_10: 455,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 31
  },
  {
    name: "Porsche Panamera Turbo",
    att: "photo-178396242_457251146",
    cost: 17000000000000,
    prok_10: 460,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 32
  },
  {
    name: "Bugatti Chiron",
    att: "photo-178396242_457251147",
    cost: 25000000000000,
    prok_10: 500,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 33
  },
  {
    name: "Cadillac Escala",
    att: "photo-178396242_457251148",
    cost: 30550000000000,
    prok_10: 510,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 34
  },
  {
    name: "McLaren X-1",
    att: "photo-178396242_457251156",
    cost: 35750000000000,
    prok_10: 520,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 35
  },
  {
    name: "SLR Stirling Moss",
    att: "photo-178396242_457251157",
    cost: 55500000000000,
    prok_10: 525,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 36
  },
  {
    name: "Koenigsegg CCXR Trevita",
    att: "photo-178396242_457251158",
    cost: 75750000000000,
    prok_10: 531,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 37
  },
  {
    name: "Bentley Continental GT",
    att: "photo-178396242_457251159",
    cost: 95550000000000,
    prok_10: 540,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 38
  },
  {
    name: "McLaren 720S",
    att: "photo-178396242_457251160",
    cost: 125500550000000,
    prok_10: 550,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 39
  },
  {
    name: "Devel Sixteen",
    att: "photo-178396242_457251161",
    cost: 130700750000000,
    prok_10: 555,
    maxshini: 35,
    maxdiski: 20,
    maxdvigok: 35,
    maxspoyler: 7,
    maxtoplivo: 45,
    maxprygini: 20,
    maxspitnik: 5,
    maxtyrbo: 10,
    maxnos: 15,
    id: 40
  },
  {
    name: "Nissan GT-R",
    att: "photo-178396242_457251162",
    cost: 150999999000000,
    prok_10: 1000,
    maxshini: 40,
    maxdiski: 10,
    maxdvigok: 50,
    maxspoyler: 2,
    maxtoplivo: 45,
    maxprygini: 25,
    maxspitnik: 10,
    maxtyrbo: 20,
    maxnos: 25,
    id: 41
  },
  {
    name: "Bugatti Centodieci",
    att: "photo-178396242_457249044",
    cost: 1,
    prok_10: 10000,
    id: 42
  }
]

const varens = [
  {
    name: "Варенье от «Covid-19»",
    cost: 10000000000000,
    cov: 0,
    id: 1
  },
  {
    name: "Варенье от «Pofig-21»",
    cost: 100000000000000,
    po: 0,
    id: 2
  },
  {
    name: "Варенье от «Panic-20»",
    cost: 150000000000000,
    pan: 0,
    id: 3
  },
  {
    name: "Варенье от всех болезней",
    cost: 500000000000000,
    cov: 0,
    pan: 0,
    po: 0,
    id: 4
  }
]

const yachts = [
  {
    name: "Gavai",
    att: "photo-178396242_457245965",
    cost: 100000000000,
    prot_10: 1,
    id: 1
  },
  {
    name: "Nauticat 331",
    att: "photo-190750183_457239234",
    cost: 150000000000,
    prot_10: 2,
    id: 2
  },
  {
    name: "Nordhavn 56 MS",
    att: "photo-190750183_457239235",
    cost: 190000000000,
    prot_10: 5,
    id: 3
  },
  {
    name: "Princess 60",
    att: "photo-190750183_457239236",
    cost: 250000000000,
    prot_10: 10,
    id: 4
  },
  {
    name: "Azimut 70",
    att: "photo-190750183_457239237",
    cost: 350000000000,
    prot_10: 13,
    id: 5
  },
  {
    name: "Dominator 40M",
    att: "photo-190750183_457239238",
    cost: 450000000000,
    prot_10: 15,
    id: 6
  },
  {
    name: "Moonen 124",
    att: "photo-190750183_457239239",
    cost: 500000000000,
    prot_10: 18,
    id: 7
  },
  {
    name: "Wider 150",
    att: "photo-190750183_457239240",
    cost: 650000000000,
    prot_10: 22,
    id: 8
  },
  {
    name: "Palmer Johnson 42M SuperSport",
    att: "photo-190750183_457239241",
    cost: 750000000000,
    prot_10: 26,
    id: 9
  },
  {
    name: "Wider 165",
    att: "photo-190750183_457239242",
    cost: 850000000000,
    prot_10: 30,
    id: 10
  },
  {
    name: "Eclipse",
    att: "photo-190750183_457239243",
    cost: 1500000000000,
    prot_10: 35,
    id: 11
  },
  {
    name: "Dubai",
    att: "photo-190750183_457239244",
    cost: 3200000000000,
    prot_10: 50,
    id: 12
  },
  {
    name: "Streets of Monaco",
    att: "photo-190750183_457239245",
    cost: 5000000000000,
    prot_10: 55,
    id: 13
  },
  {
    name: "History Supreme",
    att: "photo-190750183_457239246",
    cost: 7550000000000,
    prot_10: 57,
    id: 14
  },
  {
    name: "Palladium",
    att: "photo-190750183_457239247",
    cost: 15000000000000,
    prot_10: 65,
    id: 15
  },
  {
    name: "Seven Seas",
    att: "photo-190750183_457239248",
    cost: 23750050000000,
    prot_10: 70,
    id: 16
  },
  {
    name: "The Rising Sun",
    att: "photo-190750183_457239249",
    cost: 35500000100000,
    prot_10: 75,
    id: 17
  },
  {
    name: "Al Salamah",
    att: "photo-190750183_457239250",
    cost: 45700550000000,
    prot_10: 85,
    id: 18
  },
  {
    name: "Dilbar",
    att: "photo-190750183_457239251",
    cost: 57530990900000,
    prot_10: 90,
    id: 19
  },
  {
    name: "Serene",
    att: "photo-190750183_457239252",
    cost: 80970006550000,
    prot_10: 105,
    id: 20
  },
  {
    name: "Gabella Bot",
    cost: 100000000000,
    prot_10: 500,
    id: 21
  }
]

const computers = [
  {
    name: "DЕXР Аquilоn О175",
    att: "photo-190750183_457239122",
    cost: 150000,
    id: 1
  },
  {
    name: "HYРЕRРС NЕО",
    att: "photo-190750183_457239123",
    cost: 500000,
    id: 2
  },
  {
    name: "DЕLL Аliеnwаrе Аurоrа R7",
    att: "photo-190750183_457239124",
    cost: 750000,
    id: 3
  },
  {
    name: "HYРЕRРС СОSMОS X 3",
    att: "photo-190750183_457239125",
    cost: 1000000,
    id: 4
  },
  {
    name: "HYРЕRРС РRЕMIUM",
    att: "photo-178396242_457239148",
    cost: 1200000,
    id: 5
  },
  {
    name: "ASUS ZenBook Pro",
    att: "photo-178396242_457239143",
    cost: 1350000,
    id: 6
  },
  {
    name: "HYPERPC COSMOS X",
    att: "photo-190750183_457239126",
    cost: 1500000,
    id: 7
  },
  {
    name: "HP Z2 Mini",
    att: "photo-190750183_457239127",
    cost: 1950000,
    id: 8
  },
  {
    name: "Dell Precision 5820",
    att: "photo-190750183_457239128",
    cost: 3500000,
    id: 9
  },
  {
    name: "Lenovo ThinkStation P330 Tiny",
    att: "photo-190750183_457239129",
    cost: 5550000,
    id: 10
  },
  {
    name: "Фен",
    cost: 100000,
    id: 11
  },
  {
    name: "Калькулятор",
    cost: 100000,
    id: 12
  },
  {
    name: "Старый тормоз",
    cost: 100000,
    id: 13
  },
  {
    name: "Чип в мозгу",
    cost: 100000,
    id: 14
  },
  {
    name: "Фен",
    cost: 100000,
    id: 15
  }
]

const cases = [
  {
    name: "Деревяный кейс",
    cost: 300000000000,
    id: 1
  },
  {
    name: "Алмазный кейс",
    cost: 300000000000000,
    id: 2
  },
  {
    name: "Рандомный кейс",
    cost: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    id: 3
  },
  {
    name: "Донат кейс",
    cost: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    id: 6
  }
]

const airplanes = [
  {
    name: "Параплан",
    att: "photo-190750183_457239256",
    cost: 100000,
    id: 1
  },
  {
    name: "АН-2",
    att: "photo-190750183_457239257",
    cost: 1350000,
    id: 2
  },
  {
    name: "Cessna-172E",
    att: "photo-190750183_457239258",
    cost: 1700000,
    id: 3
  },
  {
    name: "Supermarine Spitfire",
    att: "photo-190750183_457239259",
    cost: 5000000,
    id: 4
  },
  {
    name: "BRM NG-5",
    att: "photo-190750183_457239260",
    cost: 5400000,
    id: 5
  },
  {
    name: "Cessna T210",
    att: "photo-190750183_457239261",
    cost: 6600000,
    id: 6
  },
  {
    name: "Beechcraft 1900D",
    att: "photo-190750183_457239262",
    cost: 7500000,
    id: 7
  },
  {
    name: "Cessna 550",
    att: "photo-190750183_457239263",
    cost: 8000000,
    id: 8
  },
  {
    name: "Hawker 4000",
    att: "photo-190750183_457239264",
    cost: 22400000,
    id: 9
  },
  {
    name: "Learjet 31",
    att: "photo-190750183_457239265",
    cost: 45000000,
    id: 10
  },
  {
    name: "Airbus A318",
    att: "photo-190750183_457239256",
    cost: 85000000,
    id: 11
  },
  {
    name: "F-35A",
    att: "photo-190750183_457239267",
    cost: 160000000,
    id: 12
  },
  {
    name: "Boeing 747-430 Custom",
    att: "photo-190750183_457239268",
    cost: 225000000,
    id: 13
  },
  {
    name: "C-17A Globemaster III",
    att: "photo-190750183_457239269",
    cost: 350000000,
    id: 14
  },
  {
    name: "F-22 Raptor",
    att: "photo-190750183_457239270",
    cost: 400000000,
    id: 15
  },
  {
    name: "Airbus 380 Custom",
    att: "photo-190750183_457239271",
    cost: 600000000,
    id: 16
  },
  {
    name: "B-2 Spirit Stealth Bomber",
    att: "photo-190750183_457239272",
    cost: 1359000000,
    id: 17
  },
  {
    name: "Су-35",
    att: "photo-190750183_457239273",
    cost: 4500000000,
    id: 18
  },
  {
    name: "Raptor",
    att: "photo-190750183_457239274",
    cost: 11500000000,
    id: 19
  },
  {
    name: "T-50",
    att: "photo-190750183_457239275",
    cost: 19510000000,
    id: 20
  },
  {
    name: "Ракета",
    cost: 100000,
    id: 21
  },
  {
    name: "Воздушный змей",
    cost: 100000,
    id: 22
  }
]

const helicopters = [
  {
    name: "Шарик с пропеллером",
    min: 1,
    hmax: 2,
    cost: 2,
    id: 1
  },
  {
    name: "RotorWay Exec 162F",
    min: 1,
    max: 2,
    cost: 300000,
    id: 2
  },
  {
    name: "Robinson R44",
    min: 1,
    max: 3,
    cost: 450000,
    id: 3
  },
  {
    name: "Hiller UH-12C",
    min: 1,
    max: 4,
    cost: 1300000,
    id: 4
  },
  {
    name: "AW119 Koala",
    min: 1,
    max: 5,
    cost: 2500000,
    id: 5
  },
  {
    name: "MBB BK 117",
    min: 1,
    max: 6,
    cost: 4000000,
    id: 6
  },
  {
    name: "Eurocopter EC130",
    min: 1,
    max: 7,
    cost: 7500000,
    id: 7
  },
  {
    name: "Leonardo AW109 Power",
    min: 1,
    max: 8,
    cost: 10000000,
    id: 8
  },
  {
    name: "Sikorsky S-76",
    min: 1,
    max: 9,
    att: "photo-193082125_457242799",
    cost: 15000000,
    id: 9
  },
  {
    name: "Bell 429WLG",
    min: 1,
    max: 10,
    att: "photo-193082125_457242798",
    cost: 19000000,
    id: 10
  },
  {
    name: "NHI NH90",
    min: 1,
    max: 11,
    att: "photo-193082125_457242797",
    cost: 35000000,
    id: 11
  },
  {
    name: "Kazan Mi-35M",
    min: 1,
    max: 12,
    att: "photo-193082125_457242794",
    cost: 60000000,
    id: 12
  },
  {
    name: "Bell V-22 Osprey",
    min: 1,
    max: 13,
    att: "photo-193082125_457242796",
    cost: 135000000,
    id: 13
  },
  {
    name: "Звездолёт",
    min: 10,
    max: 50,
    att: "photo-178396242_457245863",
    cost: 150000000000000,
    id: 14
  }
]

const homes = [
  {
    name: "Коробка из-под обуви",
    att: "photo-190750183_457239293",
    cost: 250,
    id: 1
  },
  {
    name: "Чердак",
    att: "photo-190750183_457239294",
    cost: 3000,
    id: 2
  },
  {
    name: "Шалаш",
    att: "photo-190750183_457239295",
    cost: 3500,
    id: 3
  },
  {
    name: "Гараж",
    att: "photo-190750183_457239296",
    cost: 5000,
    id: 4
  },
  {
    name: "Сарай",
    att: "photo-190750183_457239297",
    cost: 10000,
    id: 5
  },
  {
    name: "Старый вагон",
    att: "photo-190750183_457239298",
    cost: 25000,
    id: 6
  },
  {
    name: "Комната в общаге",
    att: "photo-190750183_457239299",
    cost: 37500,
    id: 7
  },
  {
    name: "Заброшенный деревенский дом",
    att: "photo-190750183_457239300",
    cost: 80000,
    id: 8
  },
  {
    name: "Холодильник соседа",
    att: "photo-190750183_457239301",
    cost: 125000,
    id: 9
  },
  {
    name: "Будка",
    att: "photo-190750183_457239302",
    cost: 450000,
    id: 10
  },
  {
    name: "Кирпичный Дом",
    att: "photo-190750183_457239303",
    cost: 125000,
    id: 11
  },
  {
    name: "Коттедж",
    att: "photo-190750183_457239304",
    cost: 5000000,
    id: 12
  },
  {
    name: "Двухэтажный кирпичный дом",
    att: "photo-190750183_457239305",
    cost: 7000000,
    id: 13
  },
  {
    name: "Вилла в Испании",
    att: "photo-190750183_457239306",
    cost: 12500000,
    id: 14
  },
  {
    name: "Дом на Рублевке",
    att: "photo-190750183_457239307",
    cost: 20000000,
    id: 15
  },
  {
    name: "Эйфелева Башня",
    att: "photo-190750183_457239308",
    cost: 500000000000,
    id: 16
  },
  {
    name: "Личный Небоскреб",
    att: "photo-190750183_457239309",
    cost: 722500000000,
    id: 17
  },
  {
    name: "Остров с особняком",
    att: "photo-190750183_457239310",
    cost: 1200000000000,
    id: 18
  },
  {
    name: "Белый Дом",
    att: "photo-190750183_457239311",
    cost: 5900000000000,
    id: 19
  },
  {
    name: "Своя планета",
    att: "photo-190750183_457239312",
    cost: 20000000000000,
    id: 20
  },
  {
    name: "Своя галактика",
    att: "photo-190750183_457239313",
    cost: 50000000000000,
    id: 21
  }
]

const apartments = [
  {
    name: "Чердак",
    att: "photo-190750183_457239314",
    cost: 15000,
    id: 1
  },
  {
    name: "Коммунальная квартира",
    att: "photo-190750183_457239315",
    cost: 55000,
    id: 2
  },
  {
    name: "Полугостиница",
    att: "photo-190750183_457239316",
    cost: 175000,
    id: 3
  },
  {
    name: "Квартира в Гостинице",
    att: "photo-190750183_457239317",
    cost: 260000,
    id: 4
  },
  {
    name: "Однокомнатная квартира",
    att: "photo-190750183_457239318",
    cost: 500000,
    id: 5
  },
  {
    name: "Двухкомнатная квартира",
    att: "photo-190750183_457239319",
    cost: 1600000,
    id: 6
  },
  {
    name: "Четырехкомнатная квартира",
    att: "photo-190750183_457239320",
    cost: 4000000,
    id: 7
  },
  {
    name: "Квартира в центре Москвы",
    att: "photo-190750183_457239321",
    cost: 6000000,
    id: 8
  },
  {
    name: "Двухуровневая квартира",
    att: "photo-190750183_457239322",
    cost: 21000000,
    id: 9
  },
  {
    name: "Квартира с Евроремонтом",
    att: "photo-190750183_457239323",
    cost: 64000000,
    id: 10
  },
  {
    name: "Квартира на Гавайях",
    att: "photo-190750183_457239324",
    cost: 155000000,
    id: 11
  }
]

const pistolets = [
  {
    name: "Пистолет Макарова",
    att: "photo-190750183_457239325",
    cost: 10000000,
    id: 1
  },
  {
    name: "USP",
    att: "photo-190750183_457239326",
    cost: 30000000,
    id: 2
  },
  {
    name: "Desert Eagle",
    att: "photo-190750183_457239327",
    cost: 100000000,
    id: 3
  },
  {
    name: "Tec-9",
    att: "photo-190750183_457239328",
    cost: 500000000,
    id: 4
  },
  {
    name: "Walther P99",
    att: "photo-190750183_457239329",
    cost: 750000000,
    id: 5
  },
  {
    name: "ТТ",
    att: "photo-190750183_457239330",
    cost: 1000000000,
    id: 6
  },
  {
    name: "FN Five-seveN",
    att: "photo-190750183_457239331",
    cost: 2500000000,
    id: 7
  },
  {
    name: "Beretta 92",
    att: "photo-190750183_457239332",
    cost: 5000000000,
    id: 8
  },
  {
    name: "Glock 17",
    att: "photo-190750183_457239333",
    cost: 10000000000,
    id: 9
  }
]

const avtomats = [
  {
    name: "Ferfrans HVLAR",
    att: "photo-190750183_457239352",
    cost: 10000000,
    id: 1
  },
  {
    name: "M16",
    att: "photo-190750183_457239353",
    cost: 30000000,
    id: 2
  },
  {
    name: "FN F2000",
    att: "photo-190750183_457239354",
    cost: 100000000,
    id: 3
  },
  {
    name: "HK416",
    att: "photo-190750183_457239355",
    cost: 500000000,
    id: 4
  },
  {
    name: "Steyr AUG A3",
    att: "photo-190750183_457239356",
    cost: 750000000,
    id: 5
  },
  {
    name: "АС «Вал»",
    att: "photo-190750183_457239357",
    cost: 1000000000,
    id: 6
  },
  {
    name: "TAR-21(Тавор)",
    att: "photo-190750183_457239358",
    cost: 2500000000,
    id: 7
  },
  {
    name: "FN SCAR-H",
    att: "photo-190750183_457239359",
    cost: 5000000000,
    id: 8
  },
  {
    name: "Bushmaster ACR 3",
    att: "photo-190750183_457239360",
    cost: 10000000000,
    id: 9
  },
  {
    name: "АК-12",
    att: "photo-190750183_457239361",
    cost: 45000000000,
    id: 10
  }
]

const phones = [
  {
    name: "Nokia 108",
    att: "photo-190750183_457239334",
    cost: 250,
    id: 1
  },
  {
    name: "Nokia 3310 (2017)",
    att: "photo-190750183_457239335",
    cost: 500,
    id: 2
  },
  {
    name: "ASUS ZenFone 4",
    att: "photo-190750183_457239336",
    cost: 2000,
    id: 3
  },
  {
    name: "BQ Aquaris X",
    att: "photo-190750183_457239337",
    cost: 10000,
    id: 4
  },
  {
    name: "Sony Xperia XA",
    att: "photo-190750183_457239338",
    cost: 15000,
    id: 5
  },
  {
    name: "Samsung Galaxy S8",
    att: "photo-190750183_457239339",
    cost: 30000,
    id: 6
  },
  {
    name: "Xiaomi Mi Mix",
    att: "photo-190750183_457239340",
    cost: 50000,
    id: 7
  },
  {
    name: "Torex FS1",
    att: "photo-190750183_457239341",
    cost: 75000,
    id: 8
  },
  {
    name: "iPhone X",
    att: "photo-190750183_457239342",
    cost: 100000,
    id: 9
  },
  {
    name: "Мегафон С1",
    att: "photo-190750183_457239343",
    cost: 250000,
    id: 10
  },
  {
    name: "iPhone XR",
    att: "photo-190750183_457239344",
    cost: 500000,
    id: 11
  },
  {
    name: "iPhone XS MAX",
    att: "photo-190750183_457239345",
    cost: 1000000,
    id: 12
  },
  {
    name: "Огурец",
    att: "photo-178396242_457239140",
    cost: 750000000,
    id: 13
  },
  {
    name: "Xiaomi Mi 9 T Pro 6/128Gb",
    att: "photo-190750183_457239130",
    cost: 1000000000,
    id: 14
  },
  {
    name: "OnePlus 7 8/256Gb",
    att: "photo-190750183_457239131",
    cost: 4550000000,
    id: 15
  },
  {
    name: "Oppo Realme X2 Pro Global",
    att: "photo-190750183_457239132",
    cost: 12500000000,
    id: 16
  },
  {
    name: "Asus ROG Phone 2",
    att: "photo-190750183_457239133",
    cost: 32400000000,
    id: 17
  },
  {
    name: "iРhоnе 11 Рrо Mаx",
    att: "photo-190750183_457239134",
    cost: 55555555555,
    id: 18
  }
]

const pets = [
  {
    name: "Улитка",
    cost: 1000,
    min: 500,
    max: 1500,
    att: "photo-190750183_457239096",
    earn: 0,
    id: 1,
    icon: "🐌"
  },
  {
    name: "Хомяк",
    cost: 5000,
    min: 2500,
    max: 15000,
    att: "photo-190750183_457239097",
    earn: 0,
    id: 2,
    icon: "🐸"
  },
  {
    name: "Лягушка",
    cost: 25000,
    min: 5000,
    max: 15000,
    att: "photo-190750183_457239098",
    earn: 0,
    id: 3,
    icon: "🐸"
  },
  {
    name: "Заяц",
    cost: 500000,
    min: 50000,
    max: 150000,
    att: "photo-190750183_457239099",
    earn: 0,
    id: 4,
    icon: "🐰"
  },
  {
    name: "Свинья",
    cost: 300000000,
    min: 1500000,
    max: 3000000,
    att: "photo-190750183_457239100",
    earn: 0,
    id: 5,
    icon: "🐷"
  },
  {
    name: "Лиса",
    cost: 1250000000,
    min: 50000000,
    max: 90000000,
    att: "photo-190750183_457239101",
    earn: 0,
    id: 6,
    icon: "🦊"
  },
  {
    name: "Собака",
    cost: 5000000000,
    min: 50000000,
    max: 90000000,
    att: "photo-190750183_457239102",
    earn: 0,
    id: 7,
    icon: "🐶"
  },
  {
    name: "Панда",
    cost: 30000000000,
    min: 5000000000,
    max: 7000000000,
    att: "photo-190750183_457239103",
    earn: 0,
    id: 8,
    icon: "🐼"
  },
  {
    name: "Обезьяна",
    cost: 180000000000,
    min: 15000000000,
    max: 32541252145,
    att: "photo-190750183_457239104",
    earn: 0,
    id: 9,
    icon: "🦍"
  },
  {
    name: "Дракон",
    cost: 350000000000,
    min: 150000000000,
    max: 3219541252145,
    att: "photo-178396242_457247175",
    earn: 0,
    id: 10,
    icon: "🐲"
  },
  {
    name: "Какаска",
    cost: 10000000000000,
    min: 150000000000,
    max: 3219541252145,
    att: "photo-178396242_457247173",
    earn: 0,
    id: 11,
    icon: "💩"
  },
  {
    name: "Превидение",
    cost: 50000000000000,
    min: 150000000000,
    max: 3219541252145,
    att: "photo-178396242_457247172",
    earn: 0,
    id: 12,
    icon: "👻"
  },
  {
    name: "Мартышка",
    cost: 350000000000,
    min: 150000000000,
    max: 3219541252145,
    att: "photo-178396242_457247176",
    earn: 0,
    id: 13,
    icon: "🙊"
  },
  {
    name: "Buzz Lightyear",
    cost: 350000000000,
    min: 150000000000,
    max: 3219541252145,
    att: "photo-178396242_457248193",
    earn: 0,
    id: 14,
    icon: "🤖"
  },
  {
    name: "Летающая мышь",
    cost: 350000000000,
    min: 150000000000,
    max: 3219541252145,
    att: "photo-178396242_457248367",
    earn: 0,
    id: 15,
    icon: "🦇"
  }
]

const strana = [
  {
    name: "Россия",
    cost: 1000,
    att: "в Россию",
    id: 1,
    icon: "🇷🇺"
  },
  {
    name: "Нигерия",
    cost: 50000,
    att: "в Нигер",
    id: 2,
    icon: "🇳🇪"
  },
  {
    name: "Япония",
    cost: 500000,
    att: "в Японию",
    id: 3,
    icon: "🇯🇵"
  },
  {
    name: "Германия",
    cost: 2000000,
    att: "в Германию",
    id: 4,
    icon: "🇩🇪"
  },
  {
    name: "Италия",
    cost: 50000000,
    att: "в Италию",
    id: 5,
    icon: "🇮🇹"
  },
  {
    name: "Франция",
    cost: 500000000,
    att: "во Францию",
    id: 6,
    icon: "🇫🇷"
  },
  {
    name: "Украина",
    cost: 1000000000,
    att: "в Украину",
    id: 7,
    icon: "🇺🇦"
  },
  {
    name: "Англия",
    cost: 5000000000,
    att: "в Англию",
    id: 8,
    icon: "🇬🇧"
  },
  {
    name: "США",
    cost: 80000000000,
    att: "в США",
    id: 9,
    icon: "🇺🇸"
  },
  {
    name: "Мальдивы",
    cost: 300000000000,
    att: "на Мальдивы",
    id: 10,
    icon: "🌴"
  },
  {
    name: "Дубай",
    cost: 700000000000,
    att: "в Дубай",
    id: 11,
    icon: "🏙"
  }
]

const adm = [
  {
    name: "*gabellabot(АДМИН)",
    cost: 1,
    id: 1,
    farmslimit: 99999999999999999999999999999999999999999999999999999999999999999999999999999,
    icon: "🅰"
  },
  {
    name: "*gabellabot(Заместитель) @id504991834(создателя)",
    cost: 1,
    id: 2,
    farmslimit: 99999999999999999999999999999999999999999999999999999999999999999999999999999,
    icon: "🔥"
  },
  {
    name: "*gabellabot(♡𝕄𝕠𝕝𝕠𝕕𝕠𝕪 𝕊𝕠𝕫𝕕𝕒𝕥𝕖𝕝♡)",
    cost: 1,
    id: 3,
    farmslimit: 99999999999999999999999999999999999999999999999999999999999999999999999999999,
    icon: "🖤"
  },
  {
    name: "*gabellabot(Владелец бота)",
    cost: 1,
    id: 4,
    farmslimit: 99999999999999999999999999999999999999999999999999999999999999999999999999999,
    icon: "🔥"
  },
  {
    name: "*gabellabot(ᴅʀᴀᴋʏʟᴀ)",
    cost: 1,
    id: 5,
    farmslimit: 99999999999999999999999999999999999999999999999999999999999999999999999999999,
    icon: "🧛‍♂"
  },
  {
    name: "*gabellabot(ᴋᴏ么ᴇᴘ)",
    cost: 1,
    id: 6,
    farmslimit: 99999999999999999999999999999999999999999999999999999999999999999999999999999,
    icon: "☣"
  },
  {
    name: "*gabellabot(АДМИН)",
    cost: 1,
    id: 7,
    farmslimit: 99999999999999999999999999999999999999999999999999999999999999999999999999999,
    icon: "🅰"
  },
  {
    name: "*gabellabot(АДМИН)",
    cost: 1,
    id: 8,
    farmslimit: 99999999999999999999999999999999999999999999999999999999999999999999999999999,
    icon: "🅰"
  },
  {
    name: "*gabellabot(ЗАМ)",
    cost: 1,
    id: 9,
    farmslimit: 99999999999999999999999999999999999999999999999999999999999999999999999999999,
    icon: "💫"
  }
]

const sozd = [
  {
    name: "*gabellabot(Создатель бота)",
    cost: 1,
    id: 1,
    icon: "&#9770;"
  }
]

const zam = [
  {
    name: "*gabellabot(Главный заместитель)",
    cost: 1,
    id: 1,
    icon: "&#9770;"
  }
]

const ko = [
  {
    name: "*gabellabot(♣ќόзы℘ѣ♠)",
    cost: 1,
    id: 1,
    icon: "🃏"
  }
]

const kor = [
  {
    name: "*gabellabot(Король)",
    cost: 1,
    id: 1,
    icon: "👑"
  }
]

const ba = [
  {
    name: "Забанен",
    cost: 1,
    id: 1,
    icon: "⛔"
  }
]

const ya = [
  {
    name: "🖤么│люҕимкᴀ Янки│么🖤",
    cost: 1,
    id: 1,
    icon: "❤∞"
  }
]

const an = [
  {
    name: "🖤么│люҕимкᴀ Антошки│么🖤",
    cost: 1,
    id: 1,
    icon: "❤∞"
  }
]

const cov = [
  {
    name: "*gabellabot(Заражён ᴄᴏᴠɪᴅ-19)",
    cost: 1,
    id: 1,
    icon: "💉"
  }
]

const don = [
  {
    name: "*gabellabot(Лучший донатер)",
    cost: 1,
    id: 1,
    icon: "🖤"
  }
]

const hel = [
  {
    name: "*gabellabot(Ведьма)",
    cost: 1,
    id: 1,
    icon: "🧙‍♀"
  },
  {
    name: "*gabellabot(Зомби)",
    cost: 1,
    id: 2,
    icon: "🧟‍♂"
  },
  {
    name: "*gabellabot(Ангел)",
    cost: 1,
    id: 3,
    icon: "👼"
  },
  {
    name: "*gabellabot(Приведение)",
    cost: 1,
    id: 4,
    icon: "👻"
  },
  {
    name: "*gabellabot(Зловещий клоун)",
    cost: 1,
    id: 5,
    icon: "🤡"
  },
  {
    name: "*gabellabot(Джин)",
    cost: 1,
    id: 6,
    icon: "🧞‍♂"
  },
  {
    name: "*gabellabot(Дух)",
    cost: 1,
    id: 7,
    icon: "🧞‍♀"
  }
]

const po = [
  {
    name: "*gabellabot(Болен ᴘᴏꜰɪɢ-21)",
    cost: 1,
    id: 1,
    icon: "😕"
  }
]

const pan = [
  {
    name: "*gabellabot(Болен ᴘᴀɴɪᴄ-20)",
    cost: 1,
    id: 1,
    icon: "😳"
  }
]

const soz = [
  {
    name: "*gabellabot(#ᴍʀʀ.ᴇᴠsᴛᴀꜰᴇᴇᴠ么)",
    cost: 1,
    id: 1,
    icon: "🖤"
  }
]

const orig = [
  {
    name: "*gabellabot(оригинал)",
    cost: 1,
    id: 1,
    icon: "✅"
  },
  {
    name: "*gabellabot(ᴏʀɪɢɪɴᴀʟ sᴛʀᴀɴɪᴛᴄᴀ)",
    cost: 1,
    id: 2,
    icon: "⚠"
  }
]

const prem = [
  {
    name: "*gabellabot(PREMIUM игрок)",
    cost: 1,
    id: 1,
    icon: "🔮"
  }
]

const vip = [
  {
    name: "*gabellabot(VIP игрок)",
    cost: 1,
    id: 1,
    icon: "🌙"
  }
]

const pod = [
  {
    name: "*public186993212(🍃Владелец Раздачи Gabella bot🌪)",
    cost: 1,
    id: 1,
    icon: "💚"
  },
  {
    name: "*public186993212(🍃Администратор Раздачи Gabella bot🌪)",
    cost: 1,
    id: 2,
    icon: "💚"
  }
]

const petsupd = [
  {
    cost: 2000,
    id: 1
  },
  {
    cost: 10000,
    id: 2
  },
  {
    cost: 50000,
    id: 3
  },
  {
    cost: 1000000,
    id: 4
  },
  {
    cost: 600000000,
    id: 5
  },
  {
    cost: 2700000000,
    id: 6
  },
  {
    cost: 10000000000,
    id: 7
  },
  {
    cost: 360000000000,
    id: 9
  },
  {
    cost: 700000000000,
    id: 10
  },
  {
    cost: 700000000000,
    id: 11
  },
  {
    cost: 700000000000,
    id: 12
  },
  {
    cost: 700000000000,
    id: 13
  },
  {
    cost: 700000000000,
    id: 14
  },
  {
    cost: 700000000000,
    id: 15
  }
]

const farms = [
  {
    name: "6U Nvidia",
    att: "photo-190750183_457239346",
    cost: 20500000,
    id: 1
  },
  {
    name: "AntminerS9",
    att: "photo-190750183_457239347",
    cost: 100000000,
    id: 2
  },
  {
    name: "FM2018-BT200",
    att: "photo-190750183_457239348",
    cost: 900000000,
    id: 3
  },
  { name: "AvalonMiner 1166-68T", att: "photo-190750183_457239349", cost: 800000000000, id: 4 },
  {
    name: "EBIT E10.6",
    att: "photo-190750183_457239350",
    cost: 6000000000000,
    id: 5
  },
  {
    name: "Genesis Mining",
    att: "photo-190750183_457239351",
    cost: 10000000000000,
    id: 6
  }
]

const printeri = [
  {
    name: "Песатная машинка",
    cost: 500000000000,
    att: "photo-178396242_457249051",
    earn: 5,
    id: 1,
    zapr: 10,
    icon: "💼"
  },
  {
    name: "Cassida 7700 UV/MG",
    cost: 1500000000000,
    att: "photo-178396242_457249052",
    earn: 10000000000,
    id: 2,
    zapr: 51750,
    icon: "💼"
  },
  {
    name: "HP LaserJet Enterprise",
    cost: 15000000000000,
    att: "photo-178396242_457249050",
    earn: 35000000000,
    id: 3,
    zapr: 115750500,
    icon: "💼"
  },
  {
    name: "iGen3",
    cost: 50000000000000,
    att: "photo-178396242_457249053",
    earn: 75000000000,
    id: 4,
    zapr: 5005407500,
    icon: "💼"
  }
]

const businesses = [
  {
    name: "Сервер в Minесrаft",
    cost: 5000,
    workers: 50,
    att: "photo-178396242_457239133",
    earn: 10,
    id: 1,
    icon: "🌳"
  },
  {
    name: "Сервер в SАMР",
    cost: 25000,
    att: "photo-178396242_457239135",
    earn: 700,
    id: 2,
    icon: "🚓"
  },
  {
    name: "Joom",
    cost: 100000,
    att: "photo-178396242_457239131",
    earn: 2500,
    id: 3,
    icon: "👕"
  },
  {
    name: "Ночной клуб",
    cost: 3000000,
    att: "photo-178396242_457239134",
    earn: 10000,
    id: 4,
    icon: "🕺"
  },
  {
    name: "Vapehab",
    cost: 7000000,
    att: "photo-178396242_457239138",
    earn: 25000,
    id: 5,
    icon: "🏪"
  },
  {
    name: "Кальянная",
    cost: 25000000,
    att: "photo-178396242_457239137",
    earn: 75000,
    id: 6,
    icon: "🚬"
  },
  {
    name: "PurnHub",
    cost: 80000000,
    att: "photo-178396242_457239136",
    earn: 180000,
    id: 7,
    icon: "🏩"
  },
  {
    name: "Бордель",
    cost: 1000000000,
    att: "photo-178396242_457239132",
    earn: 550000,
    id: 8,
    icon: "👯"
  },
  {
    name: "Оружейный магазин",
    cost: 5000000000,
    att: "photo-178396242_457239139",
    earn: 120000000,
    id: 9,
    icon: "🔫"
  },
  {
    name: "Контора 1XBET",
    cost: 50000000000,
    att: "photo-178396242_457239128",
    earn: 500000000,
    id: 10,
    icon: "💹"
  },
  {
    name: "Межпланетный экспресс",
    cost: 500000000000,
    att: "photo-178396242_457239129",
    earn: 1600000000,
    id: 11,
    icon: "🚀"
  },
  {
    name: "Станция Роскосмос",
    cost: 1000000000000,
    att: "photo-178396242_457247153",
    earn: 5750000000,
    id: 12,
    icon: "🛰"
  },
  {
    name: "Электростанция",
    cost: 500000000000,
    att: "photo-178396242_457243411",
    earn: 15750500000,
    id: 13,
    icon: "🔋"
  },
  {
    name: "Электростанция",
    cost: 500000000000,
    att: "photo-178396242_457243411",
    earn: 15750500000,
    id: 14,
    icon: "🔋"
  },
  {
    name: "Электростанция",
    cost: 500000000000,
    att: "photo-178396242_457243411",
    earn: 15750500000,
    id: 15,
    icon: "🔋"
  },
  {
    name: "МАРС",
    cost: 5000000000000,
    att: "photo-178396242_457247154",
    earn: 7950000000,
    id: 16,
    icon: "☄"
  }
]

const planets = [
  {
    name: "Марс со спутниками",
    cost: 1500,
    att: "photo-178396242_457247305",
    earn: 2,
    id: 1,
    icon: "☄"
  },
  {
    name: "Тёмная сторона луны",
    cost: 7000,
    att: "photo-178396242_457247307",
    earn: 5,
    id: 2,
    icon: "🌑"
  },
  {
    name: "Земля",
    cost: 10000,
    att: "photo-178396242_457247304",
    earn: 20,
    id: 3,
    icon: "🌎"
  },
  {
    name: "Солнце",
    cost: 5000,
    att: "photo-178396242_457247306",
    earn: 500,
    id: 4,
    icon: "☀"
  }
]

const kross = [
  {
    name: "Mizuno Hayate 4",
    cost: 5,
    att: "photo-190750183_457239362",
    id: 1,
    icon: "👟"
  },
  {
    name: "Hoka OneOne",
    cost: 1000,
    att: "photo-190750183_457239363",
    id: 2,
    icon: "👟"
  },
  {
    name: "Saucony peregrine 7",
    cost: 10000,
    att: "photo-190750183_457239364",
    id: 3,
    icon: "👟"
  },
  {
    name: "Asics roadhawk FF 2",
    cost: 300000,
    att: "photo-190750183_457239365",
    id: 4,
    icon: "👟"
  },
  {
    name: "ASICS ALPINE XT",
    cost: 300000,
    att: "photo-190750183_457239366",
    id: 5,
    icon: "👟"
  },
  {
    name: "Mizuno wave horizon 2",
    cost: 500000,
    att: "photo-190750183_457239367",
    id: 6,
    icon: "👟"
  },
  {
    name: "Mizuno wave sky 2",
    cost: 1000000,
    att: "photo-190750183_457239368",
    id: 7,
    icon: "👟"
  },
  {
    name: "Under Armour HOVR Sonic NC",
    cost: 100000000,
    att: "photo-190750183_457239369",
    id: 8,
    icon: "👟"
  },
  {
    name: "Under Armour Charged Bandit 3",
    cost: 500000000,
    att: "photo-190750183_457239370",
    id: 9,
    icon: "👟"
  },
  {
    name: "Mizuno",
    cost: 1000000000,
    att: "photo-190750183_457239371",
    id: 10,
    icon: "👟"
  },
  {
    name: "Mizuno Wave Shadow 2",
    cost: 10000000000,
    att: "photo-190750183_457239372",
    id: 11,
    icon: "👟"
  },
  {
    name: "Nike React",
    cost: 15000000000,
    att: "photo-190750183_457239373",
    id: 12,
    icon: "👟"
  },
  {
    name: "Saucony Freedom ISO 2",
    cost: 30000000000,
    att: "photo-190750183_457239374",
    id: 13,
    icon: "👟"
  },
  {
    name: "Adidas Adizero Boston 7",
    cost: 100000000000,
    att: "photo-190750183_457239375",
    earn: 150000000000,
    id: 14,
    icon: "👟"
  }
]

const shlyaps = [
  {
    name: "čiehgahpir (Четыре ветра)",
    cost: 5,
    att: "photo-190750183_457239376",
    id: 1,
    icon: "🎩"
  },
  {
    name: "Cork hat (Пробковая шляпа)",
    cost: 1000,
    att: "photo-190750183_457239377",
    id: 2,
    icon: "🎩"
  },
  {
    name: "Курительная шапка",
    cost: 10000,
    att: "photo-190750183_457239378",
    id: 3,
    icon: "🎩"
  },
  {
    name: "Nón quai thao",
    cost: 300000,
    att: "photo-190750183_457239379",
    id: 4,
    icon: "🎩"
  },
  {
    name: "Chapeau claque (Шапокляк)",
    cost: 300000,
    att: "photo-190750183_457239380",
    id: 5,
    icon: "🎩"
  },
  {
    name: "Monmouth Cap (Монмутская шапка)",
    cost: 500000,
    att: "photo-190750183_457239381",
    id: 6,
    icon: "🎩"
  },
  {
    name: "Welsh Wig (Уэльский парик)",
    cost: 1000000,
    att: "photo-190750183_457239382",
    id: 7,
    icon: "🎩"
  },
  {
    name: "Зимние наушники",
    cost: 100000000,
    att: "photo-190750183_457239383",
    id: 8,
    icon: "🎩"
  },
  {
    name: "Sombrero (Сомбреро)",
    cost: 500000000,
    att: "photo-190750183_457239384",
    id: 9,
    icon: "🎩"
  },
  {
    name: "Tam oshanter (Тэм ОШентер)",
    cost: 1000000000,
    att: "photo-190750183_457239385",
    id: 10,
    icon: "🎩"
  },
  {
    name: "Balmoral bonnet (берет Балморал)",
    cost: 10000000000,
    att: "photo-190750183_457239386",
    id: 11,
    icon: "🎩"
  },
  {
    name: "Bigouden / Vigoudenn (Бигуден)",
    cost: 15000000000,
    att: "photo-190750183_457239387",
    id: 12,
    icon: "👟"
  },
  {
    name: "Hennin (Эннен)",
    cost: 30000000000,
    att: "photo-190750183_457239388",
    id: 13,
    icon: "🎩"
  },
  {
    name: "Cloche (шляпа-клош)",
    cost: 100000000000,
    att: "photo-190750183_457239389",
    earn: 150000000000,
    id: 14,
    icon: "🎩"
  }
]

const odezdi = [
  {
    name: "Шмотки с АliЕxрrеss",
    cost: 5,
    att: "photo-178396242_457239193",
    id: 1,
    icon: "👘"
  },
  {
    name: "Шмотки с рынка",
    cost: 1000,
    att: "photo-178396242_457239194",
    id: 2,
    icon: "👘"
  },
  {
    name: "Dеmix",
    cost: 10000,
    att: "photo-178396242_457239195",
    id: 3,
    icon: "👘"
  },
  {
    name: "Рumа",
    cost: 300000,
    att: "photo-178396242_457239196",
    id: 4,
    icon: "👘"
  },
  {
    name: "Rееbоk",
    cost: 300000,
    att: "photo-178396242_457239197%",
    id: 5,
    icon: "👘"
  },
  {
    name: "Nike",
    cost: 500000,
    att: "photo-178396242_457239198",
    id: 6,
    icon: "👘"
  },
  {
    name: "Adidas",
    cost: 1000000,
    att: "photo-178396242_457239199",
    id: 7,
    icon: "💼"
  },
  {
    name: "Armani",
    cost: 100000000,
    att: "photo-178396242_457239200",
    id: 8,
    icon: "👘"
  },
  {
    name: "Versace",
    cost: 500000000,
    att: "photo-178396242_457239201",
    id: 9,
    icon: "👘"
  },
  {
    name: "Burbеrrу",
    cost: 1000000000,
    att: "photo-178396242_457239202",
    id: 10,
    icon: "👘"
  },
  {
    name: "Rаlрh Lаurеn",
    cost: 10000000000,
    att: "photo-178396242_457239203",
    id: 11,
    icon: "👘"
  },
  {
    name: "Сосо Сhаnеl",
    cost: 1500000000,
    att: "photo-178396242_457239204",
    id: 12,
    icon: "👘"
  },
  {
    name: "Prada",
    cost: 3000000000,
    att: "photo-178396242_457239206",
    id: 13,
    icon: "👘"
  },
  {
    name: "Hermes",
    cost: 10000000000,
    att: "photo-178396242_457239207",
    earn: 150000000000,
    id: 14,
    icon: "👘"
  },
  {
    name: "TОMMY HILFIGЕR",
    cost: 50000000000,
    att: "photo-178396242_457239208",
    id: 15,
    icon: "👘"
  },
  {
    name: "Stоnе Islаnd",
    cost: 1000000000000,
    att: "photo-178396242_457239209",
    id: 16,
    icon: "👘"
  },
  {
    name: "Supreme",
    cost: 2500000000000,
    att: "photo-178396242_457239210",
    id: 17,
    icon: "👘"
  },
  {
    name: "GUCCI",
    cost: 5000000000000,
    att: "photo-178396242_457239211",
    id: 18,
    icon: "👘"
  },
  {
    name: "Lоuis Vuittоn",
    cost: 10000000000000,
    att: "photo-178396242_457239212",
    id: 19,
    icon: "👘"
  },
  {
    name: "Маска lkz dtxthbyrb",
    cost: 100000000000000,
    att: "photo-190750183_457239091",
    id: 20,
    icon: "👘"
  },
  {
    name: "Медицинская маска",
    cost: 250000000000000,
    att: "photo-178396242_457248423",
    id: 21,
    icon: "😷"
  }
]

const businesses2 = [{ name: "Адронный коллайдер", att: "photo-178396242_457239130", cost: 1500, earn: 80, id: 1, icon: "🌌" }]
const businesses3 = [{ name: "Атомная электростанция", att: "photo-178396242_457246112", cost: 15000, earn: 120, id: 1, icon: "🚧" }]
/*==========================================================================================================*/
/*==========================================================================================================*/
const utils = {
  sp: int => {
    int = int.toString()
    return int
      .split("")
      .reverse()
      .join("")
      .match(/[0-9]{1,3}/g)
      .join(".")
      .split("")
      .reverse()
      .join("")
  },
  rn: (int, fixed) => {
    if (int === null) return null
    if (int === 0) return "0"
    fixed = !fixed || fixed < 0 ? 0 : fixed
    let b = int.toPrecision(2).split("e"),
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 22) / 3),
      c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3)).toFixed(1 + fixed),
      d = c < 0 ? c : Math.abs(c),
      e = d + ["", "тыс", "млн", "млрд", "трлн", "трлд", "квдрлн", "квдрд", "квнтлн"][k]

    e = e.replace(/e/g, "")
    e = e.replace(/\+/g, "")
    e = e.replace(/NaN/g, "Ошибка в числе НаН")
    e = e.replace(/Null/g, "Ошибка в числе Нулл")
    e = e.replace(/null/g, "Ошибка в числе нулл")
    e = e.replace(/Infinity/g, "Бесконечно")

    return e
  },
  gi: int => {
    int = int.toString()

    let text = ``
    for (let i = 0; i < int.length; i++) {
      text += `${int[i]}&#8419;`
    }

    return text
  },
  decl: (n, titles) => {
    return titles[n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
  },
  random: (x, y) => {
    return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x)
  },
  pick: array => {
    return array[utils.random(array.length - 1)]
  }
}

let promo = "0"

const rotateText = {
  q: "q",
  w: "ʍ",
  e: "ǝ",
  r: "ɹ",
  t: "ʇ",
  y: "ʎ",
  u: "u",
  i: "ᴉ",
  o: "o",
  p: "p",
  a: "ɐ",
  s: "s",
  d: "d",
  f: "ɟ",
  g: "ƃ",
  h: "ɥ",
  j: "ɾ",
  k: "ʞ",
  l: "l",
  z: "z",
  x: "x",
  c: "ɔ",
  v: "ʌ",
  b: "b",
  n: "n",
  m: "ɯ",

  Q: "q",
  W: "ʍ",
  E: "ǝ",
  R: "ɹ",
  T: "ʇ",
  Y: "ʎ",
  U: "u",
  I: "ᴉ",
  O: "o",
  P: "p",
  A: "ɐ",
  S: "s",
  D: "d",
  F: "ɟ",
  G: "ƃ",
  H: "ɥ",
  J: "ɾ",
  K: "ʞ",
  L: "l",
  Z: "z",
  X: "x",
  C: "ɔ",
  V: "ʌ",
  B: "b",
  N: "n",
  M: "ɯ",

  й: "ņ",
  ц: "ǹ",
  у: "ʎ",
  к: "ʞ",
  е: "ǝ",
  н: "н",
  г: "ɹ",
  ш: "m",
  щ: "m",
  з: "ε",
  х: "х",
  ъ: "q",
  ф: "ф",
  ы: "ıq",
  в: "ʚ",
  а: "ɐ",
  п: "u",
  р: "d",
  о: "о",
  л: "v",
  д: "ɓ",
  ж: "ж",
  э: "є",
  я: "ʁ",
  ч: "һ",
  с: "ɔ",
  м: "w",
  и: "и",
  т: "ɯ",
  ь: "q",
  б: "ƍ",
  ю: "oı",

  Й: "ņ",
  Ц: "ǹ",
  У: "ʎ",
  К: "ʞ",
  Е: "ǝ",
  Н: "н",
  Г: "ɹ",
  Ш: "m",
  Щ: "m",
  З: "ε",
  Х: "х",
  Ъ: "q",
  Ф: "ф",
  Ы: "ıq",
  В: "ʚ",
  А: "ɐ",
  П: "u",
  Р: "d",
  О: "о",
  Л: "v",
  Д: "ɓ",
  Ж: "ж",
  Э: "є",
  Я: "ʁ",
  Ч: "һ",
  С: "ɔ",
  М: "w",
  И: "и",
  Т: "ɯ",
  Ь: "q",
  Б: "ƍ",
  Ю: "oı"
}

let btc = 6000

/*==========================================================================================================*/
/*=======================================СМАЙЛЫ============================================================*/
let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`])
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`])

setTimeout(async () => {
  const rq = await request("https://api.cryptonator.com/api/ticker/btc-usd")

  if (!rq.ticker) return
  if (!rq.ticker.price) return

  btc = Math.floor(Number(rq.ticker.price))
}, 5)

setInterval(async () => {
  const rq = await request("https://api.cryptonator.com/api/ticker/btc-usd")

  if (!rq.ticker) return
  if (!rq.ticker.price) return

  btc = Math.floor(Number(rq.ticker.price))
}, 60000)

setTimeout(async () => {
  const rq = await request("https://api.cryptonator.com/api/ticker/btc-usd")

  if (!rq.ticker) return
  if (!rq.ticker.price) return

  man = Math.floor(Number(rq.ticker.price))
}, 5)

setInterval(async () => {
  smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`])
  smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`])
}, 1)

/*==========================================================================================================*/
/*==============================Пути сохранения БД=========================================================*/
const users = require("./database/users.json")
const clans = require("./database/clans.json")
const Vurus = require("./database/Vurus.json")
const Logi = require("./database/Logi.json")
const prez = require("./database/prez.json")
const config = require("./database/settings.json")
const settings = require("./database/settings.json")
const chats = require("./database/chats.json")
let buttons = []

/*==========================================================================================================*/
/*====================================PRIBIL===============================================================*/
setInterval(async () => {
  users
    .filter(x => x.misc.farm !== 0)
    .map(x => {
      if (x.misc.farm === 1) {
        x.farm_btc += 2 * x.farms
      }

      if (x.misc.farm === 2) {
        x.farm_btc += 10 * x.farms
      }

      if (x.misc.farm === 3) {
        x.farm_btc += 100 * x.farms
      }

      if (x.misc.farm === 4) {
        x.farm_btc += 1000 * x.farms
      }

      if (x.misc.farm === 5) {
        x.farm_btc += 15000 * x.farms
      }

      if (x.misc.farm === 6) {
        x.farm_btc += 175000 * x.farms
      }
    })
}, 3600000)

setInterval(async () => {
  users.map(user => {
    if (user.planet) {
      const gen = planets.find(x => x.id === user.planet)
      if (!gen) return

      user.gen += gen.earn
    }
  })
}, 3600000)

setInterval(async () => {
  users.map(user => {
    if (user.business) {
      const biz = businesses.find(x => x.id === user.business)
      if (!biz) return

      user.biz += biz.earn
    }
  })
}, 3600000)

setInterval(async () => {
  users.map(user => {
    if (user.business2) {
      const biz2 = businesses2.find(x => x.id === user.business2)
      if (!biz2) return

      user.biz2 += biz2.earn
    }
  })
}, 3600000)

setInterval(async () => {
  users.map(user => {
    if (user.business3) {
      const biz3 = businesses3.find(x => x.id === user.business3)
      if (!biz3) return

      user.biz3 += biz3.earn
    }
  })
}, 3600000)

/*==========================================================================================================*/
/*=====================================TIMERS=============================================================*/
function clearTemp() {
  users.map(user => {
    user.timers.hasVvorked = 0
    user.timers.ataka = 0
    user.timers.farm_btc = 0
    user.timers.hack = 0
    user.timers.cirk = 0
    user.timers.poxod = 0
    user.timers.podarok = 0
    user.timers.poxod2 = 0
    user.timers.daiving = 0
    user.timers.ohota = 0
    user.timers.bonus = 0
    user.timers.poxodh = 0
    user.timers.bonusprem = 0
    user.timers.bonusvip = 0
    user.timers.premenergy = 0
    user.timers.vipenergy = 0
    user.promo = 0
    user.timers.gonka = 0
    user.timers.vida = 0
    user.timers.banc = 0
    user.timers.raport = 0
    user.timers.plav = 0
    user.timers.van = 0
    user.timers.zaraztime = 0
    user.timers.grabtime = 0
    user.timers.peredat = 0
    user.timers.vidat = 0
  })
}

clearTemp()
setInterval(async () => {
  users.map(user => {
    user.timers.bonus -= 1
    user.timers.bonusprem -= 1
    user.timers.bonusvip -= 1
    user.timers.premenergy -= 1
    user.timers.vipenergy -= 1
    user.timers.poxod -= 1
    user.timers.podarok -= 1
    user.timers.poxod2 -= 1
    user.timers.poxodh -= 1
    user.timers.hack -= 1
    user.timers.gonka -= 1
    user.timers.vida -= 1
    user.timers.banc -= 1
    user.timers.raport -= 1
    user.timers.plav -= 1
    user.timers.daiving -= 1
    user.timers.ohota -= 1
    user.timers.cirk -= 1
    user.timers.van -= 1
    user.timers.farm_btc -= 1
    user.timers.vidat -= 1
    user.timers.zaraztime -= 1
    user.timers.grabtime -= 1
    user.timers.peredat -= 1
    user.timers.ataka -= 1
  })
}, 1000)

/*==========================================================================================================*/
/*==========================================================================================================*/
setInterval(async () => {
  users
    .filter(x => x.zelya > 1)
    .map(x => {
      x.zelya = 0
    })
}, 3600000)

/*==========================================================================================================*/
/*==========================================================================================================*/
function time() {
  let date = new Date()
  let days = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  if (hours < 10) hours = "0" + hours
  if (minutes < 10) minutes = "0" + minutes
  if (seconds < 10) seconds = "0" + seconds
  var times = hours + ":" + minutes + ":" + seconds
  return times
}
/*==========================================================================================================*/
/*==========================================================================================================*/
function data() {
  var date = new Date()
  let days = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  if (month < 10) month = "0" + month
  if (days < 10) days = "0" + days
  var datas = days + "." + month + "." + year
  return datas
}
/*==========================================================================================================*/
/*==========================================================================================================*/
function displayTime(ticksInSecs) {
  var ticks = ticksInSecs
  var hh = Math.floor(ticks / 3600)
  var mm = Math.floor((ticks % 3600) / 60)
  var ss = ticks % 60

  return pad(hh, 2) + ":" + pad(mm, 2) + ":" + pad(ss, 2)
}

function pad(n, width) {
  var n = n + ""
  return n.length >= width ? n : new Array(width - n.length + 1).join("0") + n
}

function generateKeyboard(array) {
  let kb = []
  if (array.length > 40) return false

  for (let i = 0; i < 10; i += 1) {
    if (!array.slice(i * 4, i * 4 + 4)[0]) break
    kb.push(array.slice(i * 4, i * 4 + 4))
  }
  /*==========================================================================================================*/
  /*========================================promo=============================================================*/
  kb.map(arr => {
    arr.map((button, i) => {
      arr[i] = Keyboard.textButton({ label: button })
    })
  })

  return Keyboard.keyboard(kb)
}

function clearPromo() {
  promo = 0
  users.map(user => {
    user.promo = false
  })
}

function msgError(messagetext) {
  return bot(`${messagetext} ${utils.pick([`😯`, `🙂`, `🤑`, `☺`])}`)
}

/*==========================================================================================================*/
/*==============================Пути сохранения БД=========================================================*/
setInterval(() => {
  fs.writeFileSync("./database/users.json", JSON.stringify(users, null, "\t"))
  fs.writeFileSync("./database/chats.json", JSON.stringify(chats, null, "\t"))
  fs.writeFileSync("./database/clans.json", JSON.stringify(clans, null, "\t"))
  fs.writeFileSync("./database/prez.json", JSON.stringify(prez, null, "\t"))
  fs.writeFileSync("./database/Vurus.json", JSON.stringify(Vurus, null, "\t"))
  fs.writeFileSync("./database/Logi.json", JSON.stringify(Logi, null, "\t"))
}, 15000)
clearTemp()
clearPromo()

async function saveUsers() {
  require("fs").writeFileSync("./database/users.json", JSON.stringify(users, null, "\t"))
  return true
}

async function saveConfig() {
  require("fs").writeFileSync("./database/settings.json", JSON.stringify(config, null, "\t"))
  return true
}
/*==========================================================================================================*/
/*==========================================================================================================*/
async function mda(vk, message, bot, command) {
  message.args = message.text.match(command[0])
  await command[1](message, bot)
}

async function mdaa(vk, message, bot, command) {
  message.args = message.messagePayload.cmdd.match(command[0])
  await command[1](message, bot)
}
/*==========================================================================================================*/
/*====================================[GRUP]================================================================*/
vk.setOptions({ token: "token", pollingGroupId: 178396242 }) // efe0a9e325aa3fff848025c3aece2cbcda9e49dbd3ec1ab74b95a7d82d2264b0754f14e2a37cff10afe09', pollingGroupId: 191196898
const { updates, snippets } = vk
/*==========================================================================================================*/
/*==========================================================================================================*/
updates.startPolling()
updates.on(["chat_invite_user"], async (message, bot) => {
  if (Math.abs(message.eventMemberId) == vk.options.pollingGroupId) {
    message.send(
      `👑 Привет всем в беседе!

	Я — @gabellabot (Gabella Bot)! Ты можешь играть со мной, покупать бизнесы, покупать рейтинг, пробиваться в топы, покупать машины, дома, квартиры и гулять с питомцем!  🏖
	
	Получи помощь по боту, написав команду  «помощь » 🧩
	Чтобы получать посылки с большими плюшками, дай боту админку в беседе. 🔥

	⛑ Полезные ссылки: 
	🏌 Как создать свою беседу - vk.com/topic-178396242_40180468
	
	❓ Ответы на вопросы - vk.com/topic-178396242_40180458

	🚫 Правила - vk.com/topic-178396242_40180454`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Начать"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }

  try {
    await bot()
  } catch (e) {
    console.error(e)
  }
})
/*==========================================================================================================*/
/*===============================PEREMENIE=====================================================================*/
updates.startPolling()
updates.on("message", async message => {
  if (Number(message.senderId) <= 0) return
  if (/\[public178396242\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[public178396242\|(.*)\]/gi, "").trim()

  if (!users.find(x => x.id === message.senderId)) {
    const [user_info] = await vk.api.users.get({ user_id: message.senderId })
    const date = new Date()

    users.push({
      id: message.senderId,
      uid: users.length,
      gameuid: `${users.length}`,
      balance: 100,
      donat: 0,
      bank: 0,
      meteor: 0,
      bonustime: 0,
      bonuprem: 0,
      materialimit: 0,
      zplimit: 0,
      rubinlimit: 0,
      brilliantlimit: 0,
      energylimit: 0,
      derevyaniylimit: 0,
      almazniylimit: 0,
      bonustimevip: 0,
      reports: 0,
      clanid: false,
      btc: 0,
      ras: true,
      vsem: 0,
      kaz_vin: 0,
      shances:
        "0, 0.25, 0.5, 0.55, 0.75, 0, 0.25, 0, 0.25, 0.5, 0.55, 0.75, 0, 0.25, 0.5, 0.55, 0.75, 0, 0.25, 0.5, 0.55, 0.75, 0, 0.25, 0.5, 0.55, 0.75, 0, 0.25, 0.5, 0.55, 0.75, 0, 0.25, 0.5, 0.55, 0.75, 2, 3, 5, 10, 50, 2, 3, 5, 10",
      proebal: 0,
      GB: 0,
      mandarin: 0,
      vinl: 0,
      ledyanka: 0,
      pro4_1: 0,
      otvet: -99999999999999999999,
      pro4_2: 0,
      pro4_3: 0,
      pro4_4: 0,
      reports: 0,
      reps: true,
      vreps: 0,
      proeball: 0,
      NG: 0,
      farm_btc: 0,
      palochka: 0,
      perelet: 0,
      farms: 0,
      farmslimit: 1000,
      stran: 0,
      energy: 20,
      ving: 0,
      proebalg: 0,
      valentinka: 0,
      opit: 0,
      zaraj: 0,
      vak: 0,
      youtub: null,
      youtubelake: 0,
      youtubepod: 0,
      biz: 0,
      prez: false,
      surprise: 0,
      vampir: 0,
      messages: 0,
      rank: 1,
      printer: 0,
      gorodpod: 0,
      gorod: null,
      gorodlikes: 0,
      gorodliketimer: 0,
      gorodliketimer1: 0,
      gorodliketimer2: 0,
      gorodliketimer3: 0,
      pomoshnik: false,
      pribil: 0,
      biz2: 0,
      bizlvl: 0,
      business2: 0,
      business3: 0,
      gen: 0,
      hel: 0,
      lvlplan: 0,
      planet: 0,
      platinium: 0,
      randc: 0,
      hrust1: false,
      pizdenka1: false,
      pachal: 0,
      secretcase: 0,
      pensia: 20000000000000,
      pensia_zabral: 0,
      posilka: 0,
      hell: 0,
      obnovy: false,
      zhelezo: 0,
      comTimer: 10,
      peremena2: false,
      txn: 0,
      bral1: 0,
      prem: 0,
      prok_1: 1,
      prok_2: 1,
      prok_3: 1,
      prok_4: 1,
      prok_5: 1,
      prok_6: 1,
      prok_7: 1,
      prok_8: 1,
      bban: false,
      prok_9: 1,
      prok_10: 10,
      gon: 0,
      prot_1: 1,
      prot_2: 1,
      prot_3: 1,
      prot_4: 1,
      prot_5: 1,
      prot_6: 0,
      prot_7: 0,
      prot_8: 0,
      prot_9: 0,
      prot_10: 0,
      pla: 0,
      bossyr: 0,
      sataka: 1,
      lte2: false,
      materia: 0,
      zoloto: 0,
      limitbank: 100000000,
      almaz: 0,
      brilliant: 0,
      rubin: 0,
      zp: 0,
      bizlvl: 0,
      ammunition: false,
      soobshenie: 0,
      nicklimit: 15,
      rating: 0,
      vsego: 0,
      rep: true,
      regDate: `${data()}, ${time()}`,
      vset: `${data()}, ${time()}`,
      mention: true,
      ban: false,
      timers: {
        hasVvorked: false,
        bonus: false,
        poxod: false,
        poxod2: false,
        van: false,
        kopat: false,
        hack: false,
        vidat: false,
        peredat: false,
        zaraztime: false,
        grabtime: false,
        kruiz: false,
        reklama: false,
        nalogi: false,
        gonka: false,
        vida: false,
        banc: false,
        raport: false,
        gontime: false,
        plav: false,
        platime: false,
        ohota: false
      },
      tag: user_info.first_name,
      vvork: 0,
      prorab: 0,
      business: 0,
      notifications: true,
      exp: 1,
      level: 1,
      referal: null,
      promo: false,
      transport: {
        car: 0,
        prichina: false,
        yacht: 0,
        airplane: 0,
        helicopter: 0
      },
      realty: {
        home: 0,
        apartment: 0
      },
      misc: {
        pistolet: 0,
        avtomat: 0,
        phone: 0,
        farm: 0,
        telivisor: 0,
        odezda: 0,
        pristavka: 0,
        pet: 0
      },
      settings: {
        firstmsg: true,
        adm: 0,
        vip: 0,
        trade: true,
        report: true,
        old: false,
        limitdeneg: 100000000,
        limitrating: 1000000000,
        limit: 500000000000,
        limitsataka: 37000
      },

      petlvl: 1,
      petgolod: 10,
      petradost: 5,
      poterl: false,
      marriage: {
        partner: false,
        requests: []
      }
    })

    /*==========================================================================================================*/
    /*===================================REFERAL===============================================================*/
    if ("ref" in message.payload) {
      message.user = users.find(x => x.id === message.senderId)
      let ref = utils.random(73, 80)
      let reffeer = users.find(x => x.id == message.payload.ref)

      if (reffeer != undefined) {
        if (ref != 77) {
          message.user.balance += 1000000000000
          vk.api.messages.send({
            user_id: message.senderId,
            message: `[id${message.senderId}|${user_info.first_name}], вас пригласил [id${reffeer.id}|${reffeer.tag}]!
💥 На ваш счёт было зачислено 1.000.000.000.000$`
          })

          reffeer.balance += 1000000000000
          reffeer.bral1 += 1
          vk.api.messages.send({
            user_id: reffeer.id,
            message: `[id${reffeer.id}|${reffeer.tag}], вы пригласили друга [id${message.senderId}|${user_info.first_name}]!
💥 На ваш счёт было зачислено 1.000.000.000.000$`
          })
        } else {
          message.user.balance += 100000000000
          vk.api.messages.send({
            user_id: message.senderId,
            message: `[id${message.senderId}|${user_info.first_name}], вас пригласил [id${reffeer.id}|${reffeer.tag}]!
💥 На ваш счёт было зачислено 100.000.000.000$`
          })

          reffeer.balance += 1000000000000
          reffeer.bral1 += 1
          reffeer.donatcase += 1
          vk.api.messages.send({
            user_id: reffeer.id,
            message: `[id${reffeer.id}|${reffeer.tag}], вы пригласили друга [id${message.senderId}|${user_info.first_name}]!
💥 На ваш счёт было зачислено 1.000.000.000.000$
🎁 Вам начислен Донат Кейс за друга!`
          })
        }
      }
    }

    console.log(` +1 игрок [Игроков: ${users.length}]`)
    console.log(``)
    saveUsers()
  }

  message.user = users.find(x => x.id === message.senderId)

  const bot = (text, params) => {
    return message.send(
      `${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `@gabellabot (${message.user.tag})`}, ${text}`,
      params
    )
  }

  /*==========================================================================================================*/
  /*==================================БАНЫ===================================================================*/
  if (message.user.pizdenka1 > getUnix()) {
    if (!message.isChat) {
      return message.send(
        `⛔ Вы временно забанены. Причина ${message.user.prichina}! Конец бана через ${unixStampLeft(message.user.pizdenka1 - Date.now())}\n`,
        { attachment: "market-178396242_4183087" }
      )
    } else {
      return
    }
  }

  if (message.user.ban == true) {
    if (!message.isChat) {
      message.send(`⛔ Вы забанены навсегда.`, { attachment: "market-178396242_4634984" })
      return
    } else {
      return
    }
  }

  {
    let chat = message.chatId
    let user = chats.find(x => x.chat_idd === Number(message.chatId))
    if (message.isChat) {
      if (!chats.find(x => x.chat_idd === message.chatId)) {
        chats.push({
          sms: 0,
          commands: 0,
          chat_vip: false,
          chat_number: chats.length,
          chat_invite_user_by_link: 0,
          chat_invite_user: 0,
          mutes: {},
          group: false,
          glub: 0,
          timed: 0,
          balance: 0,
          sunduk_obn: 0,
          sunduk: false,
          sunduk_res: 0,
          sunduk_res_max: 0,
          sunduk_energ: 0,
          baned: {},
          kick: 0,
          dobav: true,
          boss_1: 500,
          boss_2: 1500,
          boss_3: 5000,
          dob: false,
          zakrep: false,
          users_chat: {},
          nastr_1: false,
          podarok: false,
          primer: false,
          chat_idd: message.chatId
        })
        await message.send(`
		ID чата бота: ${message.chatId}
		Номер чата по регистрации: ${chats.length}`) //регистрация нового чата
        vk.api.messages.getConversationsById({ peer_ids: message.peerId, group_id: 178396242 }).then(async function (res) {
          vk.api.messages
            .send({
              chat_id: 1265,
              forward_messages: message.id,
              message: `
		ID чата бота: ${message.chatId}
		участников беседы: ${JSON.stringify(res.items[0].chat_settings.members_count)}
		название чата: ${JSON.stringify(res.items[0].chat_settings.title)}
		Номер чата по регистрации: ${chats.length}`
            })
            .catch(error => {
              console.log(` Ошибка.`)
            })
        })
        vk.api.messages
          .send({
            chat_id: 1265,
            forward_messages: message.id,
            message: `доп.лог
+1 чат 
		Зарегистрирован новый чат!
		ID чата бота: ${message.chatId}
		Номер чата по регистрации: ${chats.length}`
          })
          .catch(error => {
            console.log(` Ошибка.`)
          })
      }
      if (!users.find(x => x.chat_idd === message.chatId)) user.sms += 1
    }
  }
  if (message.forwards.length > 0) {
    let text = `@id${message.senderId} переслал сообщения в беседу ${message.chatId}:`
    let text2 = `@id${message.senderId} переслал сообщения в диалог ${message.chatId}:`
    for (a in message.forwards) {
      if (message.forwards[a].senderId > 0) {
        text += `\nтекст: ${message.forwards[a].text}, автор сообщения: @id${message.forwards[a].senderId}`
        text2 += `\nтекст: ${message.forwards[a].text}, автор сообщения: @id${message.forwards[a].senderId}`
      } else {
        text += `\nтекст: ${message.forwards[a].text}, автор сообщения: @club${message.forwards[a].senderId.toString().replace("-", "")}`
        text2 += `\nтекст: ${message.forwards[a].text}, автор сообщения: @club${message.forwards[a].senderId.toString().replace("-", "")}`
      }
    }
    vk.api.messages.send(text)
  }

  /*==========================================================================================================*/
  /*==================================ЛОГИ===================================================================*/
  {
    let zaprets1 = message.text.toLowerCase()
    var zapret =
      /(разбуди|синийкит|all|online|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вкботру|сова никогда|6-мам|6-МАМ|кодеин|дигидрокодеин|буторфанол|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|сова никогда не спит|синий кит|цп|cp|vto)/
    var sss = zapret.test(zaprets1)

    if (zapret.test(zaprets1) == true || message.text.toLowerCase() === "") {
      var check = true
      return
    }

    let chat_log = 1265

    vk.api.messages.send({
      chat_id: chat_log,
      message: `[${data()} ${time()}] 
📖 Ник: ${message.user.tag}
🎲 Сыллка: vk.com/id${message.user.id} 
🆔 Игрока: ${message.user.uid}
💠 VK ID ИГРОКА: [${message.user.id}]
❓ ID беседы: ${message.chatId} 🎲 Сообщение: ${message.text}`
    })
    message.user.soobshenie += 1
    message.user.vsem += 1
    Logi.log_sms += 130
    message.user.vset = `${data()} ${time()}`

    {
      let zaprets3 = message.text.toLowerCase()
      var zapret2 =
        /(разбуди|синийкит|подкладки|message.sendDocument|sendDocument|filename|file_name|failname|failname|Documen|token|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вкботру|сова никогда|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние|vto)/
      var sss = zapret.test(zaprets1)

      if (zapret2.test(zaprets3) == true || message.text.toLowerCase() === "") {
        var check = true
        return
      }

      const command = commands.find(x => x[0].test(message.text))

      if (message.user.settings.firstmsg) {
        /*==========================================================================================================*/
        /*===========================================РЕГИСТРАЦИЯ===================================================*/
        message.send(
          `👋 Привет, [id${message.user.id}|${message.user.tag}], спасибо за регистрацию в боте! 
🎲 Я игровой Gabella Bot, во мне довольно много развлекательных команд, которые помогут скоротать время и найти новых друзей. Написав боту Вы соглашаетесь с рассылкой новых акций и конкурсов. Не забудь, пожалуйста, подписаться. 

📚 Держи свой игровой 🆔 ${message.user.uid}

🎁 Держи бонус на свой баланс 100$!

📖 Узнай все мои команды, введи «помощь» 

⛑ Полезные ссылки: 
🏌 Как создать свою беседу - vk.com/topic-178396242_40180468
❓ Ответы на вопросы - vk.com/topic-178396242_40180458
🎲 Список помощи - https://vk.com/topic-178396242_46299651
🚫 Правила - vk.com/topic-178396242_40180454`,
          {
            keyboard: JSON.stringify({
              one_time: false,
              buttons: [
                [
                  {
                    action: {
                      type: "text",
                      payload: '{"button": "2"}',
                      label: "Начать"
                    },
                    color: "default"
                  }
                ]
              ]
            })
          }
        )

        message.user.settings.firstmsg = false

        saveUsers()
        return
      }
      /*==========================================================================================================*/
      /*=========================================================================================================*/

      if (message.user.exp >= 24) {
        message.user.exp = 1
        message.user.level += 1
      }

      message.args = message.text.match(command[0])
      await command[1](message, bot)

      saveUsers()
      console.log(
        ` Введена команда: от - VK_ID: [${message.user.id}]. Айди: [${message.user.uid}]. Ник: [${message.user.tag}]. Сообщение: ${message.text}. `
      )
      console.log(``)
    }
  }
})

vk.updates.on(["chat_invite_user_by_link"], async (message, next) => {
  const [user_info] = await vk.api.users.get({ user_id: message.senderId })
  let user = await vk.api.users.get({ user_id: message.senderId })
  let chat = chats.find(x => x.chat_idd === Number(message.chatId))

  vk.api.messages.send({
    chat_id: 1265,
    message: `Игрок ${user[0].first_name} ${user[0].last_name} присоединился по ссылке в беседу бота №${message.chatId}`
  })

  message.send(`😜Приветствую тебя, игрок - ${user[0].first_name}! я *gabellabot(Игровой Gabella Bot) напиши 'помощь' и узнаешь мои команды!`)

  await next()
})

vk.updates.on(["chat_kick_user"], async (message, next) => {
  let user = await vk.api.users.get({ user_id: message.senderId })
  if (message.chatId !== 1265) {
    vk.api.messages.removeChatUser({ chat_id: message.chatId, member_id: message.senderId })
  }
  await next()
})
vk.updates.on(["chat_invite_user"], async (message, next) => {
  if (message.eventMemberId == message.senderId) {
    const [vernulsa] = await vk.api.users.get({ user_id: message.senderId })
    return message.send(`[id${vernulsa.id}|${vernulsa.first_name} ${vernulsa.last_name}] вернулся в беседу`)
  } else {
    if (message.eventMemberId === -178396242) {
      // условие добавления бота в беседу
      if (!chats.find(x => x.chat_idd === message.chatId)) {
        chats.push({
          sms: 0,
          commands: 0,
          chat_vip: false,
          chat_number: chats.length,

          chat_invite_user_by_link: 0,
          chat_invite_user: 0,
          mutes: {},
          glub: 0,
          timed: 0,
          balance: 0,
          baned: {},
          kick: 0,
          sunduk_obn: 0,
          sunduk: false,
          sunduk_res: 0,
          sunduk_res_max: 0,
          sunduk_energ: 0,
          dobav: true,
          boss_1: 500,
          group: false,
          boss_2: 1500,
          boss_3: 5000,
          dob: false,
          zakrep: false,
          users_chat: {},
          nastr_1: false,
          podarok: false,
          primer: false,
          chat_idd: message.chatId
        })
        message.send(`Зарегистрирован новый чат!
		ID чата бота: ${message.chatId}
		Номер чата по регистрации: ${chats.length}`)
        vk.api.messages.getConversationsById({ peer_ids: message.peerId, group_id: 178396242 }).then(async function (res) {
          vk.api.messages
            .send({
              chat_id: 1265,
              forward_messages: message.id,
              message: `+1 чат 
		Зарегистрирован новый чат!
		ID чата бота: ${message.chatId}
		участников беседы: ${JSON.stringify(res.items[0].chat_settings.members_count)}
		название чата: ${JSON.stringify(res.items[0].chat_settings.title)}
		Номер чата по регистрации: ${chats.length}`
            })
            .catch(error => {
              console.log(` Ошибка.`)
            })
        })
        let ssssss = await vk.api.users.get({ user_id: message.senderId })
        vk.api.messages
          .send({
            chat_id: 1265,
            forward_messages: message.id,
            message: `доп.лог
+1 чат 
		Зарегистрирован новый чат!
		ID чата бота: ${message.chatId}
		Номер чата по регистрации: ${chats.length}
		Меня добавил: [id${ssssss[0].id}|${ssssss[0].first_name}] [id${ssssss[0].id}|${ssssss[0].last_name}]`
          })
          .catch(error => {
            console.log(` Ошибка.`)
          }) // регистрация нового чата
      }
      return
    }
    if (message.eventMemberId < 1) {
      let chat = chats.find(x => x.chat_idd === Number(message.chatId))
      if (chat.group == true) {
        vk.api.call("messages.removeChatUser", { chat_id: message.chatId, member_id: message.eventMemberId }).catch(error => {
          return message.send(`${error}`)
        })
        message.send(`В беседе включина функция исключения групп.\nЧтобы выключить настройка 3`)
        vk.api.messages.removeChatUser({ chat_id: message.chatId, member_id: message.senderId }) //иключение при приглашении группы
      }
    }
    if (message.chatId == 1 || message.chatId == 17) {
      if (message.eventMemberId < 1) {
        vk.api.call("messages.removeChatUser", { chat_id: message.chatId, member_id: message.eventMemberId }).catch(error => {
          return message.send(`${error}`)
        })
        message.send(`Ты успешно пригласил группу в беседу.`)
        vk.api.messages.removeChatUser({ chat_id: message.chatId, member_id: message.senderId })
      }
    }
    let user = await vk.api.users.get({ user_id: message.eventMemberId })
    let aaauser = await vk.api.users.get({ user_id: message.senderId })
    let chat = chats.find(x => x.chat_idd === Number(message.chatId))
    let aaa = users.find(x => x.id === Number(message.senderId))
    if (message.eventMemberId === 1) {
      vk.api.messages.removeChatUser({ chat_id: message.chatId, member_id: message.eventMemberId })
      return message.send(`не стоит.`) // тут речь про шлюху бота
    }
    if (message.chatId == 1384) {
      setTimeout(async () => {
        let info = users.find(x => x.id === Number(user[0].id))
        message.send(`Информация о [id${user[0].id}|${user[0].tag}] [id${user[0].id}|${user[0].tag}]:
		ID: ${info.uid}
		TAG: ${info.tag}
		BAN: ${info.ban}
		ADMIN: ${info.settings.adm}`) //информация о пользователе при добавлении его в админ беседу
      }, 2000)
    }
  }
  await next()
})

/*==========================================================================================================*/
/*===============================================EVAL======================================================*/
gabella.bot(/^(?:Тоша)\s?((?:.|\n)+)?/i, async (message, bot) => {
  if (message.senderId !== 504991834 && message.senderId !== 576070765 && message.senderId !== 571259308 && message.senderId !== 515132440) return
  let time = Date.now()
  try {
    let result = eval(message.args[1])
    let end = Date.now() - time
    if (typeof result === "Œ") {
      return bot(`string: ${result}`)
    } else if (typeof result === "Œ") {
      return bot(`кол-во: ${result}\n\n⏰ Время выполнения скрипта: ${end}мс`)
    } else {
      let z = ""
      if (typeof result === `string`) {
        z += `строка`
      }
      if (typeof result === `number`) {
        z += `число`
      }
      if (typeof result === `boolean`) {
        z += `переменная`
      }
      if (typeof result === `object`) {
        z += `объект`
      }
      if (typeof result === `undefined`) {
        z += `неизвестно`
      }
      return message
        .send(`💻 | Тип: ${z}\n🔧 | Результат: ${JSON.stringify(result, null, "　\t")}\n\n⏰ Время выполнения скрипта: ${end} мс`)
        .catch(err => {
          return bot(`ошибка: ${err.toString()}`)
        })
    }
  } catch (e) {
    let time = Date.now()
    console.error(e)
    let end = Date.now() - time
    return bot(`💻 | Тип: ошибка\n🔧 | Результат: ${e.toString()}\n\n⏰ Время выполнения скрипта: ${end}мс`)
  }
})

gabella.bot(/^(?:eval|!|evl|код)\s([^]+)$/i, async (message, bot) => {
  let a = message.args[1]
  return bot(`💻 | Тип: ошибка\n🔧 | Результат: ${a}\n\n⏰ Время выполнения скрипта: 1мс`)
})

gabella.bot(/^\.(?:габелла измени)\s?([^]+)?$/i, message => {
  if (message.user.settings.adm < 2) return bot(`нет доступа.`)
  let chatid = message.chatId
  vk.api.messages.editChat({
    chat_id: chatid,
    title: message.args[1]
  })
  return message.reply(`нaзвaниe чата изменено.`)
})

gabella.bot(/^\.(?:габелла чистка)$/i, async message => {
  if (message.user.settings.adm < 8) return
  return message.send("&#4448;\n".repeat(200) + "чат успешно очистен.")
})
gabella.bot(/^(?:габелла напиши)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return bot(`нет доступных команд по сообщению 'напиши'.`)
  if (!Number(message.args[1])) return bot(`укажите ID беседы, в которую хотите отправить сообщение.`)
  if (message.args[1] === message.chatId) return bot(`укажите ID беседы, в которую хотите отправить сообщение.`)

  vk.api.messages.send({ chat_id: message.args[1], message: `${message.args[2]}` })

  bot(`ваше сообщение было отправлено в беседу.`)
})

gabella.bot(/^(?:габелла онлайн)$/i, async (message, bot) => {
  message.user.soobshenie += 1
  if (!message.isChat) return bot(`команда работает только в беседе!`)
  vk.api.messages
    .getConversationMembers({
      peer_id: message.peerId,
      fields: "online"
    })
    .then(async function (response) {
      let text = `[😎] || Список людей, которые сейчас находятся онлайн:\n\n`
      await response.profiles.map(e => {
        if (e.id < 1) return
        if (e.online != 0) text += `${["😍"]} || *id${e.id} (${e.first_name.slice(0, 1)}. ${e.last_name})\n`
      })
      return message.reply(text)
    })
})
gabella.bot(/^(?:габелла оффлайн|габелла неонлайн|габелла не онлайн)$/i, async (message, bot) => {
  message.user.soobshenie += 1
  if (!message.isChat) return bot(`команда работает только в беседе!`)
  vk.api.messages
    .getConversationMembers({
      peer_id: message.peerId,
      fields: "noonline"
    })
    .then(async function (response) {
      let text = `[😎] || Список людей, которые сейчас находятся оффлайн:\n\n`
      await response.profiles.map(e => {
        if (e.id < 1) return
        if (e.noonline != 0) text += `${["😍"]} || *id${e.id} (${e.first_name.slice(0, 1)}. ${e.last_name})\n`
      })
      return message.reply(text)
    })
})

gabella.bot(/^(?:габелла выйди)\s(.*)/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return bot(`не нашел ничего по запросу "выйди".`)
  vk.api.messages.removeChatUser({ chat_id: message.args[1], member_id: -178396242 })
  bot(`Я вышел из чата №${message.args[1]}`)
})

/*==========================================================================================================*/
/*===============================Ледянки==================================================================*/
const ledyankas = [
  { name: "Коробка из под мандарин", att: "photo-178396242_457249670", cost: 5000, id: 1, pro4_1: 1, pro4_2: 2, pro4_3: 3, pro4_4: 4 },
  { name: "Пластиковая ледянка", att: "photo-178396242_457249672", cost: 10000, id: 2, pro4_1: 2, pro4_2: 3, pro4_3: 4, pro4_4: 5 },
  { name: "Ледянка-тарелка", att: "photo-178396242_457249671", cost: 500000, id: 3, pro4_1: 3, pro4_2: 4, pro4_3: 5, pro4_4: 6 },
  { name: "Санки", att: "photo-178396242_457249690", cost: 1550750, id: 4, pro4_1: 4, pro4_2: 5, pro4_3: 6, pro4_4: 7 },
  { name: "Тюбинг", att: "photo-178396242_457249673", cost: 5000750, id: 5, pro4_1: 5, pro4_2: 6, pro4_3: 7, pro4_4: 8 }
]

gabella.bot(/^(?:Ледянка стата)$/i, async (message, bot) => {
  await bot(`Ваша статистика соревнаваний на ледянке:

🍊 Мандарин: ${utils.sp(message.user.mandarin)}
📈 Победы: ${utils.sp(message.user.vinl)}
📉 Поражения: ${utils.sp(message.user.proeball)}`)
})

gabella.bot(/(?:скатиться)/i, async message => {
  if (message.user.ledyanka < 1)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет ледянки.
Список всех ледянок по команде: «лядянки» 🚗`)
  if (message.user.timers.gonka >= 0) {
    await message.send(
      `[id${message.user.id}|${message.user.tag}], Вы поднимаетесь на гору подъемнику. Ваша очередь съезжать начнет через: ${displayTime(
        message.user.timers.gonka
      )}. ${smileerror}`,
      { attachment: "photo-178396242_457249669" }
    )
    return message.sendSticker(6679)
  }

  message.user.timers.gonka = 600

  const randuser = utils.random(1, users.length)
  const randledyankas = utils.random(2, 5)
  const leds = ledyankas.find(x => x.id === message.user.ledyanka)
  if (!users[randuser]) return bot(`Ваш противник струсил, попробуйте снова ✅`)
  message.send(
    `[id${message.user.id}|${message.user.tag}], началась гонка с горы «[id${users[randuser].id}|${ledyankas[randledyankas].name}]»
💨 Зрители ждут победителя.`,
    { attachment: `${leds.att},${ledyankas[randledyankas].att}` }
  )
  let reit = utils.random(1, 10)
  let n_1 = utils.random(1, 10)
  n_1 *= 100000
  let g1 = message.user.pro4_1
  let g2 = message.user.pro4_2
  let g3 = message.user.pro4_3
  let g4 = message.user.pro4_4
  let skorost = utils.random(5, 7)
  let m_sk = eval(`${g1}+${g2}+${g3}+${g4}`)
  message.user.gontime = true
  setTimeout(() => {
    message.user.gontime = false
  }, 600000)
  skorost = skorost * utils.pick([2, 5])
  if (m_sk == skorost)
    return message.send(`[id${message.user.id}|${message.user.tag}], ничья! 😟
🍊 Ваши мандаринки: ${message.user.mandarin}
`)
  if (m_sk > skorost) {
    message.user.mandarin += reit
    message.user.mandarin += n_1
    message.user.vinl += 1
    return message.send(
      `[id${message.user.id}|${message.user.tag}], вы скатились быстрее чем противник! 😎
🛷 Противник мчался со скоростью: ${skorost} км/ч, Вы: ${m_sk} км/ч.
🍊 Ваши мандаринки: ${message.user.mandarin}
`,
      { attachment: `${leds.att}` }
    )
  }
  if (m_sk < skorost) {
    message.user.mandarin -= 1
    message.user.proeball += 1
    return message.send(
      `[id${message.user.id}|${message.user.tag}], противник скатился первее вас! 😔
🛷 Противник мчался со скростью: ${skorost} км/ч, Вы: ${m_sk} км/ч.
🍊 Ваши мандаринки: ${message.user.mandarin}
`,
      { attachment: `${ledyankas[randledyankas].att}` }
    )
  }
})

gabella.bot(/^(?:ледянка)/i, async message => {
  if (message.user.ledyanka < 1)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет ледянки.
Список всех ледянок по команде: «лядянки» 🚗`)
  const led = ledyankas.find(x => x.id === message.user.ledyanka)
  let g1 = message.user.prov_1
  let g2 = message.user.prov_2
  let g3 = message.user.prov_3
  let g4 = message.user.prov_4
  let skorost = utils.random(1, 15)
  let m_sk = eval(`${g1}+${g2}+${g3}+${g4}`)
  return message.send(
    `[id${message.user.id}|${message.user.tag}], ваш транспорт на соревнаваниях: это ${ledyankas[message.user.ledyanka - 1].name}

🍊 Ваши мандаринки: ${message.user.mandarin}

🔝 Чтобы посмотреть топ лучших по состезанию, напиши "топ мандаринки"
🛷 Чтобы купить мандаринки, напиши "мандарин [сумма]"
🏁 Чтобы начать соревнавание, напиши "скатиться"`,
    { attachment: `${led.att}` }
  )
})
/*==========================================================================================================*/
/*=======================================ГОНКИ=============================================================*/
gabella.bot(/^(?:машина улучшить)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.user.transport.car) return bot(`у вас нет машины`)
  message.send(
    `Список улучшений для авто:

1. 🏎 Шины [${message.user.prok_1}/${message.user.maxshini}] (100.000.000.000.000 $)
Улучшить: «машина улучшить шины»

2. 🏵 Диски [${message.user.prok_2}/${message.user.maxdiski}] (50.000.000.000.000 $)
Улучшить: «машина улучшить диски»

3. ⚙ Двигатель [${message.user.prok_3}/${message.user.maxdvigok}] (300.000.006.000.000 $)
Улучшить: «машина улучшить двигатель»

4. 🛰 Спойлер [${message.user.prok_4}/${message.user.maxspoyler}] (60.000.000.000.000 $)
Улучшить: «машина улучшить спойлер»

5. ⛽ Топливо [${message.user.prok_5}/${message.user.maxtoplivo}] (150.000.000.000.000 $)
Улучшить: «машина улучшить топливо»

6. ⛓ Пружины [${message.user.prok_6}/${message.user.maxprygini}] (35.000.000.000.000 $)
Улучшить: «машина улучшить пружины»

7. 📡 Спутниковая навигация [${message.user.prok_7}/${message.user.maxspitnik}] (100.000.000.000.000 $)
Улучшить: «машина улучшить спутник»

8. 💨 Турбокомпрессор [${message.user.prok_8}/${message.user.maxtyrbo}] (250.000.000.000.000 $)
Улучшить: «машина улучшить турбо»

9. 🥏 NOS [${message.user.prok_9}/${message.user.maxnos}] (265.000.000.000.000 $)
Улучшить: «машина улучшить нитро»
`,
    { attachment: "photo-178396242_457245841" }
  )
})

gabella.bot(/^(?:машина улучшить турбо)/i, async message => {
  if (!message.user.transport.car)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  let st_yl = 250000000000000
  if (message.user.prok_8 == message.user.maxtyrbo)
    return message.send(`[id${message.user.id}|${message.user.tag}], эта категория полностью улучшена!`)
  if (st_yl > message.user.balance) return message.send(`[id${message.user.id}|${message.user.tag}], недостаточно денег`)
  message.user.balance -= st_yl
  message.user.prok_8 += 1
  return message.send(
    `[id${message.user.id}|${message.user.tag}], категория «Турбокомпрессор» прокачана до уровня ${message.user.prok_8} за ${utils.sp(st_yl)} $!`,
    { attachment: "photo-178396242_457245849" }
  )
})

gabella.bot(/^(?:машина улучшить нитро)/i, async message => {
  if (!message.user.transport.car)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  let st_yl = 265000000000000
  if (message.user.prok_9 == message.user.maxnos) return message.send(`[id${message.user.id}|${message.user.tag}], эта категория полностью улучшена!`)
  if (st_yl > message.user.balance) return message.send(`[id${message.user.id}|${message.user.tag}], недостаточно денег`)
  message.user.balance -= st_yl
  message.user.prok_9 += 1
  return message.send(
    `[id${message.user.id}|${message.user.tag}], категория «NOS» прокачана до уровня ${message.user.prok_9} за ${utils.sp(st_yl)} $!`,
    { attachment: "photo-178396242_457245850" }
  )
})

gabella.bot(/^(?:машина улучшить пружины)/i, async message => {
  if (!message.user.transport.car)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  let st_yl = 35000000000000
  if (message.user.prok_6 == message.user.maxprygini)
    return message.send(`[id${message.user.id}|${message.user.tag}], эта категория полностью улучшена!`)
  if (st_yl > message.user.balance) return message.send(`[id${message.user.id}|${message.user.tag}], недостаточно денег`)
  message.user.balance -= st_yl
  message.user.prok_6 += 1
  return message.send(
    `[id${message.user.id}|${message.user.tag}], категория «Пружины» прокачана до уровня ${message.user.prok_6} за ${utils.sp(st_yl)} $!`,
    { attachment: "photo-178396242_457245845" }
  )
})

gabella.bot(/^(?:машина улучшить спутник)/i, async message => {
  if (!message.user.transport.car)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  let st_yl = 100000000000000
  if (message.user.prok_7 == message.user.maxspitnik)
    return message.send(`[id${message.user.id}|${message.user.tag}], эта категория полностью улучшена!`)
  if (st_yl > message.user.balance) return message.send(`[id${message.user.id}|${message.user.tag}], недостаточно денег`)
  message.user.balance -= st_yl
  message.user.prok_7 += 1
  return message.send(
    `[id${message.user.id}|${message.user.tag}], категория «Спутниковая навигация» прокачана до уровня ${message.user.prok_7} за ${utils.sp(
      st_yl
    )} $!`,
    { attachment: "photo-178396242_457245848" }
  )
})

gabella.bot(/^(?:машина улучшить шины)/i, async message => {
  if (!message.user.transport.car)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  let st_yl = 100000000000000
  if (message.user.prok_1 == message.user.maxshini)
    return message.send(`[id${message.user.id}|${message.user.tag}], эта категория полностью улучшена!`)
  if (st_yl > message.user.balance) return message.send(`[id${message.user.id}|${message.user.tag}], недостаточно денег`)
  message.user.balance -= st_yl
  message.user.prok_1 += 1
  return message.send(
    `[id${message.user.id}|${message.user.tag}], категория «Шины» прокачана до уровня ${message.user.prok_1} за ${utils.sp(st_yl)} $!`,
    { attachment: "photo-178396242_457245842" }
  )
})

gabella.bot(/^(?:машина улучшить спойлер)/i, async message => {
  if (!message.user.transport.car)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  let st_yl = 60000000000000
  if (message.user.prok_4 == message.user.maxspoyler)
    return message.send(`[id${message.user.id}|${message.user.tag}], эта категория полностью улучшена!`)
  if (st_yl > message.user.balance) return message.send(`[id${message.user.id}|${message.user.tag}], недостаточно денег`)
  message.user.balance -= st_yl
  message.user.prok_4 += 1
  return message.send(
    `[id${message.user.id}|${message.user.tag}], категория «Спойлер» прокачана до уровня ${message.user.prok_4} за ${utils.sp(st_yl)} $!`,
    { attachment: "photo-178396242_457245847" }
  )
})

gabella.bot(/^(?:машина улучшить диски)/i, async message => {
  if (!message.user.transport.car)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  let st_yl = 50000000000000
  if (message.user.prok_2 == message.user.maxdiski)
    return message.send(`[id${message.user.id}|${message.user.tag}], эта категория полностью улучшена!`)
  if (st_yl > message.user.balance) return message.send(`[id${message.user.id}|${message.user.tag}], недостаточно денег`)
  message.user.balance -= st_yl
  message.user.prok_2 += 1
  return message.send(
    `[id${message.user.id}|${message.user.tag}], категория «Диски» прокачана до уровня ${message.user.prok_2} за ${utils.sp(st_yl)} $!`,
    { attachment: "photo-178396242_457245843" }
  )
})

gabella.bot(/^(?:машина улучшить двигатель)/i, async message => {
  if (!message.user.transport.car)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  let st_yl = 300000006000000
  if (message.user.prok_3 == message.user.maxdvigok)
    return message.send(`[id${message.user.id}|${message.user.tag}], эта категория полностью улучшена!`)
  if (st_yl > message.user.balance) return message.send(`[id${message.user.id}|${message.user.tag}], недостаточно денег`)
  message.user.balance -= st_yl
  message.user.prok_3 += 1
  return message.send(
    `[id${message.user.id}|${message.user.tag}], категория «Двигатель» прокачана до уровня ${message.user.prok_3} за ${utils.sp(st_yl)} $!`,
    { attachment: "photo-178396242_457245844" }
  )
})

gabella.bot(/^(?:машина улучшить топливо)/i, async message => {
  if (!message.user.transport.car)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  let st_yl = 150000000000000
  if (message.user.prok_5 == message.user.maxtoplivo)
    return message.send(`[id${message.user.id}|${message.user.tag}], эта категория полностью улучшена!`)
  if (st_yl > message.user.balance) return message.send(`[id${message.user.id}|${message.user.tag}], недостаточно денег`)
  message.user.balance -= st_yl
  message.user.prok_5 += 1
  return message.send(
    `[id${message.user.id}|${message.user.tag}], категория «Топливо» прокачана до уровня ${message.user.prok_5} за ${utils.sp(st_yl)} $!`,
    { attachment: "photo-178396242_457245846" }
  )
})

gabella.bot(/^(?:гонка стата)$/i, async (message, bot) => {
  await bot(`Ваша статистика гонок:

🏆 Кубков: ${utils.sp(message.user.gon)}
📈 Победы: ${utils.sp(message.user.ving)}
📉 Поражения: ${utils.sp(message.user.proebalg)}`)
})

gabella.bot(/(?:гонка)/i, async message => {
  if (message.user.transport.car < 6)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  if (message.user.timers.gonka >= 0) {
    await message.send(
      `[id${message.user.id}|${message.user.tag}], ваша машина сильно поломалась, вашу машину починят через ${displayTime(
        message.user.timers.gonka
      )} ${smileerror}`,
      { attachment: "photo-178396242_457245819" }
    )
    return message.sendSticker(6679)
  }

  message.user.timers.gonka = 600

  if (message.isChat) {
    setTimeout(() => {
      vk.api.messages.send({
        chat_id: message.chatId,
        message: `@id${message.user.id} (${message.user.tag}), Твою машину починили! 💯`,

        keyboard: JSON.stringify({ inline: true, buttons: [[{ action: { type: "text", payload: "{}", label: "Гонка!" }, color: "negative" }]] })
      })
    }, 699000)
  }

  if (!message.isChat) {
    setTimeout(() => {
      vk.api.messages.send({
        user_id: message.user.id,
        message: `@id${message.user.id} (${message.user.tag}), Твою машину починили! 💯`,

        keyboard: JSON.stringify({ inline: true, buttons: [[{ action: { type: "text", payload: "{}", label: "Гонка!" }, color: "negative" }]] })
      })
    }, 699000)
  }

  const randuser = utils.random(10, users.length)
  const randcars = utils.random(7, 41)
  const car = cars.find(x => x.id === message.user.transport.car)
  if (!users[randuser]) return bot(`Ваш противник струсил, попробуйте снова ✅`)
  message.send(
    `[id${message.user.id}|${message.user.tag}], начался заезд против авто «[id${users[randuser].id}|${cars[randcars].name}]»
🏎 Ожидаем прибытие машин к финишу..`,
    { attachment: `${car.att},${cars[randcars].att}` }
  )
  let reit = utils.random(1, 5)
  let n_1 = utils.random(1, 10000000)
  n_1 *= 100000
  let g1 = message.user.prok_1
  let g2 = message.user.prok_2
  let g3 = message.user.prok_3
  let g4 = message.user.prok_4
  let g5 = message.user.prok_5
  let g6 = message.user.prok_6
  let g7 = message.user.prok_7
  let g8 = message.user.prok_8
  let g9 = message.user.prok_9
  let g10 = message.user.prok_10
  let skorost = utils.random(1, 5)
  let m_sk = eval(`${g1}+${g2}+${g3}+${g4}+${g5}+${g6}+${g7}+${g9}+${g8}+${g10}`)
  message.user.gontime = true
  setTimeout(() => {
    message.user.gontime = false
  }, 600000)
  skorost = skorost * utils.pick([1, 150])
  if (m_sk == skorost)
    return message.send(
      `[id${message.user.id}|${message.user.tag}], ничья! 😟
Улучшайте авто, чтобы быть первым!
🏆 Ваши кубки: ${message.user.gon}
 
гонщика: ${message.user.gon}
`,
      { attachment: "photo-178396242_457245822" }
    )
  if (m_sk > skorost) {
    message.user.gon += reit
    message.user.balance += n_1
    message.user.ving += 1
    return message.send(
      `[id${message.user.id}|${message.user.tag}], вы пришли к финишу первее чем противник! 😎
Улучшайте авто, чтобы быть ещё быстрее!
🐴 Мощность противника: ${skorost} л.с., Ваша: ${m_sk} л.с.
🏆 Ваши кубки: ${message.user.gon}
`,
      { attachment: `${car.att}` }
    )
  }
  if (m_sk < skorost) {
    message.user.gon -= 1
    message.user.proebalg += 1
    return message.send(
      `[id${message.user.id}|${message.user.tag}], противник пришёл первее вас! 😔
Улучшайте авто, чтобы быть более быстрее!
🐴 Мощность противника: ${skorost} л.с., Ваша: ${m_sk} л.с.
🏆 Ваши кубки: ${message.user.gon}
`,
      { attachment: `${cars[randcars].att}` }
    )
  }
})

gabella.bot(/^(?:машина)/i, async message => {
  if (!message.user.transport.car) return message.send(`у вас нет машины`)
  const car = cars.find(x => x.id === message.user.transport.car)
  let g1 = message.user.prok_1
  let g2 = message.user.prok_2
  let g3 = message.user.prok_3
  let g4 = message.user.prok_4
  let g5 = message.user.prok_5
  let g6 = message.user.prok_6
  let g7 = message.user.prok_7
  let g8 = message.user.prok_8
  let g9 = message.user.prok_9
  let g10 = message.user.prok_10
  let skorost = utils.random(1, 15)
  let m_sk = eval(`${g1}+${g2}+${g3}+${g4}+${g5}+${g6}+${g7}+${g9}+${g8}+${g10}`)
  return message.send(
    `[id${message.user.id}|${message.user.tag}], ваша машина: ${cars[message.user.transport.car - 1].name}

🔖 Ваш госномер: ${message.user.mn}

🏎 Мощность вашей машины: ${m_sk} л.с.
🏆 Ваши кубки: ${message.user.gon}

⚙ Чтобы улучшить авто, напиши "машина улучшить"
🔖 Чтобы сменить номер, напиши "госномер"
🔝 Чтобы посмотреть том лучших гонщиков, напиши "топ гонщиков"
🏁 Чтобы начать гонку, напиши "гонка"`,
    { attachment: `${car.att}` }
  )
})

gabella.bot(/(?:Госномер рандом|госномер)$/i, async (message, bot) => {
  let n_1 = utils.pick(["А", "В", "Е", "К", "М", "Н", "О", "Р", "С", "Т", "У", "Х"])
  let n_2 = utils.random(0, 9)
  let n_3 = utils.random(0, 9)
  let n_4 = utils.random(0, 9)
  let n_5 = utils.pick(["А", "В", "Е", "К", "М", "Н", "О", "Р", "С", "Т", "У", "Х"])
  let n_6 = utils.pick(["А", "В", "Е", "К", "М", "Н", "О", "Р", "С", "Т", "У", "Х", "Й"])
  let n_7 = utils.random(0, 9)
  let n_8 = utils.random(0, 9)
  let n_9 = utils.random(0, 9)

  message.user.mn = `${n_1}${n_2}${n_3}${n_4}${n_5}${n_6} ${n_7}${n_8}${n_9}`

  return bot(
    `ваш бесплатный случайный номер: «${message.user.mn}»
Теперь ваша машина будет ездить с такими номерами! 📒`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Госномер рандом"
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
})
/*==========================================================================================================*/
/*===================================ADMIN KMD=============================================================*/
gabella.bot(/^(?:!питомца)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.misc.pet = message.args[2]
    user.petlvl = 1
    user.petgolod = 10
    user.petradost = 5

    await bot(`выдаю [id${user.id}|${user.tag}] ПИТОМЦА. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Спасибо за участие в ежедневной акции. Вы получили СЕКРЕТНОГО ПИТОМЦА.` })
  }
})
gabella.bot(/^(?:-sss)$/i, async (message, bot) => {
  if ((message.user.top = 1)) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].stran = 0
    }
  }
  return message.send(`готово!`)
})

gabella.bot(/^(?:прк)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    user.secretcase += message.args[2]
    user.cases += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} премиум кейс. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Спасибо за участие в конкурсе. Вы получили ${utils.sp(message.args[2])} премиум кейс.` })
  }
})

gabella.bot(/^(?:!премкейс)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765 && message.user.settings.adm < 7) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    user.secretcase += message.args[2]
    user.cases += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} премиум кейс. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} премиум кейс.`
    })
  }
})

gabella.bot(/^(?:!тыкву)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765 && message.user.id != 515132440) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    user.hell += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} хэллоуинский кейс. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} хэллоуинский кейс.`
    })
  }
})

gabella.bot(/^(?:гбвсе)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.GB += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} GB кейс. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} GB кейс.` })
  }
})

gabella.bot(/^(?:top3)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.id != 504991834 && message.user.id != 576070765) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.NG += 20
    user.posilka += 100

    await bot(`выдаю [id${user.id}|${user.tag}] new кейс u posilku. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Спасибо за помощь убить вируса!\nВирус дал вам 20 GB кейсов и 100 Посылок с Японии.` })
  }
})

gabella.bot(/^(?:top5)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.id != 504991834 && message.user.id != 576070765) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.posilka += 100

    await bot(`выдаю [id${user.id}|${user.tag}] new кейс u posilku. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Спасибо за помощь убить вируса!\nВирус дал вам 100 Посылок с Японии.` })
  }
})

gabella.bot(/^(?:нгрепост)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.NG += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} new кейс. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} Новогодних кейсов.`
    })
  }
})

gabella.bot(/^(?:нгк)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.NG += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} NEW кейс. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в конкурсе. Вы получили ${utils.sp(message.args[2])} Новогодний кейс кейс.`
    })
  }
})

gabella.bot(/^(?:гбк)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.GB += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} GB кейс. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Спасибо за участие в конкурсе. Вы получили ${utils.sp(message.args[2])} GB кейс.` })
  }
})

gabella.bot(/^(?:гб1)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.GB += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} GB кейс 1. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы оказались рандомным кто сделал репост. Вы получили ${utils.sp(message.args[2])} GB кейс.`
    })
  }
})

gabella.bot(/^(?:п)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.posilka += message.args[2]
    user.cases += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Поссылка из Японии. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Вы оказались в топ 10 по общему урону вируса. Вы получаете ${utils.sp(message.args[2])} Поссылок из Японии.
			⭐ Так держать!`
    })
  }
})

gabella.bot(/^(?:д)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.pachal += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Поссылка из Японии. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Вы оказались в топ 5 по общему урону вируса. Вы получаете ${utils.sp(message.args[2])} Донат кейсов.
			⭐ Так держать!`
    })
  }
})

gabella.bot(/^(?:г)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.id != 504991834 && message.user.id != 576070765) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.GB += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Поссылка из Японии. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Вы оказались в топ 3 по общему урону вируса. Вы получаете ${utils.sp(message.args[2])} GB кейсов.
			⭐ Так держать!`
    })
  }
})
gabella.bot(/^(?:фейкпроф)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return bot(`Шо?`)
  let text = ``
  clanid = message.user.clanid

  text += `🔎 Игровой ID: ${message.user.gameuid}\n`
  text += `💰 Денег: ${utils.sp(message.user.balance)}$\n`
  text += `💳 В банке: ${utils.sp(message.user.balance * 3)}$\n`
  text += `💽 Биткоинов: ${utils.sp(message.user.btc)}฿\n`
  text += `👑 Рейтинг: ${utils.sp(message.user.rating)}\n`
  text += `🏋 Энергия: ${utils.sp(message.user.energy)}\n`
  text += `🏆 Опыт: ${utils.sp(message.user.opit)}\n`

  text += `\n⏰ Регистрация: ${user.regDate}, (${moment(user.regDate, "L").fromNow()}).`
  return bot(`твой профиль:\n${text}`)
})
gabella.bot(/^(?:!админка|!админку)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.senderId !== 504991834 && message.senderId !== 576070765) return bot(`Брысь :)*`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.settings.adm = 1
    user.settings.report = true
    user.rating = 0
    user.farmslimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    user.sataka = 0
    user.bossyr = 0
    user.sataka1 = 0
    user.bossyr1 = 0
    user.settings.limit = 500000000000
    user.settings.limitdeneg = 200000000000
    user.limitbank = 9999999999999999999999999999999999999999999

    await bot(`выдано.`)
    vk.api.messages.send({
      user_id: user.id,
      message: `[id${user.id}|${user.tag}], выражаем вам огромную благодарность за покупку администратора. Огромное спасибо! 🙀

⃣ Можете смотреть помощь для админов.
Использование: «апомощь»

⃣ Ненастоящий профиль, команда: «фейкпроф»

✅ Покупая донат, вы помогаете боту в развитии. Именно после вашей покупки появляются обновления. Все это благодаря вам!

💯 Беседа для администрации Gabella Bot: https://vk.me/join/AJQ1d6YgxhiiR2JDGbchUank`
    })
  }
})

gabella.bot(/^(?:вкпроф)(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?$/i, async (message, args, bot) => {
  if (message.user.settings.adm < 2) return
  if (message.args[3]) {
    vk.api
      .call("users.get", {
        user_id: message.args[3],
        fields: "city,freinds,verified,status,photo_id,sex,followers_count,photo_id,online,city,country,bdate,getMutual_count"
      })
      .then(res => {
        return message.send(
          ` 

					🛂 Информация пользователя: @id${user.id} (${user.first_name} ${user.last_name}) ✓ 
					✅ Верификация: ${user.verified
            .toString()
            .replace(/undefined/gi, "Не Верифицирован.")
            .replace(/0/gi, "Не Верифицирован.")
            .replace(/1/gi, "Страница подтверждена Администрацией ВКонтакте.")} 
					🆔 ID Профиля ВКонтакте: @id${user.id} 
					👥 Подписчики: ` +
            (user.followers_count == undefined ? `Отсутствуют.` : `${spaces(user.followers_count)} шт.`) +
            ` 
					🌍 Страна, город: ` +
            (user.country == undefined ? `Не указан, ` : `${user.country.title}, `) +
            (user.city == undefined ? `Не указан.` : `${user.city.title}.`) +
            ` 
					🚻 Пол: ${user.sex
            .toString()
            .replace(/undefined/gi, "Не указан.")
            .replace(/0/gi, "Не указан.")
            .replace(/1/gi, "Женский.")
            .replace(/2/gi, "Мужской.")} 
					📅 Дата рождения: ` +
            (user.bdate == undefined ? `Не указана.` : `${user.bdate}.`) +
            ` 
					📝 Статус профиля: ` +
            (user.status == undefined ? `Не Установлен.` : `${user.status}.`) +
            ` 
					📶 Сеть: ${user.online
            .toString()
            .replace(/undefined/gi, "Не в сети.")
            .replace(/0/gi, "Не в сети.")
            .replace(/1/gi, "В сети.")} 

					📸 Ава профиля:`,
          { attachment: `photo${user.photo_id}` }
        )
      })
  }
  if (message.args[4]) {
    var domain = message.args[4].split(" ")

    vk.api.call("utils.resolveScreenName", { screen_name: message.args[4] }).then(res => {
      vk.api.users
        .get({
          user_id: res.object_id,
          fields: "city,freinds,verified,status,photo_id,sex,followers_count,photo_id,online,city,country,bdate,getMutual_count"
        })

        .then(res => {
          let user = res[0]
          return message.send(
            ` 

						
					🛂 Информация пользователя: @id${user.id} (${user.first_name} ${user.last_name}) ✓ 
					✅ Верификация: ${user.verified
            .toString()
            .replace(/undefined/gi, "Не Верифицирован.")
            .replace(/0/gi, "Не Верифицирован.")
            .replace(/1/gi, "Страница подтверждена Администрацией ВКонтакте.")} 
					🆔 ID Профиля ВКонтакте: @id${user.id} 
					👥 Подписчики: ` +
              (user.followers_count == undefined ? `Отсутствуют.` : `${spaces(user.followers_count)} шт.`) +
              ` 
					🌍 Страна, город: ` +
              (user.country == undefined ? `Не указан, ` : `${user.country.title}, `) +
              (user.city == undefined ? `Не указан.` : `${user.city.title}.`) +
              ` 
					🚻 Пол: ${user.sex
            .toString()
            .replace(/undefined/gi, "Не указан.")
            .replace(/0/gi, "Не указан.")
            .replace(/1/gi, "Женский.")
            .replace(/2/gi, "Мужской.")} 
					📅 Дата рождения: ` +
              (user.bdate == undefined ? `Не указана.` : `${user.bdate}.`) +
              ` 
					📝 Статус профиля: ` +
              (user.status == undefined ? `Не Установлен.` : `${user.status}.`) +
              ` 
					📶 Сеть: ${user.online
            .toString()
            .replace(/undefined/gi, "Не в сети.")
            .replace(/0/gi, "Не в сети.")
            .replace(/1/gi, "В сети.")} 

					📸 Ава профиля:`,
            { attachment: `photo${user.photo_id}` }
          )
        })
    })
  }
})

gabella.bot(/(?:афк)$/i, async (message, bot) => {
  if (message.senderId !== 504991834 && message.senderId !== 576070765 && message.user.settings.adm < 7 && message.senderId !== 591741222)
    return bot(`нет доступпа. ^.^`)
  bot(`кнопки вырублены!`, {
    keyboard: JSON.stringify({
      one_time: true,
      buttons: []
    })
  })
  return
})

gabella.bot(/^(?:!зама)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.senderId !== 504991834 && message.senderId !== 576070765) return bot(`Брысь :)*`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.settings.adm = 2
    user.settings.report = true
    user.rating = 0
    user.farmslimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    user.sataka = 0
    user.bossyr = 0
    user.sataka1 = 0
    user.bossyr1 = 0
    user.settings.limit = 500000000000
    user.settings.limitdeneg = 200000000000
    user.limitbank = 9999999999999999999999999999999999999999999

    await bot(`выдано.`)
    vk.api.messages.send({
      user_id: user.id,
      message: `[id${user.id}|${user.tag}], выражаем вам огромную благодарность за покупку ЗАМА. Огромное спасибо! 🙀

⃣ Можете смотреть помощь для админов.
Использование: «апомощь»

⃣ Ненастоящий профиль, команда: «фейкпроф»

✅ Покупая донат, вы помогаете боту в развитии. Именно после вашей покупки появляются обновления. Все это благодаря вам!

💯 Беседа для администрации Gabella Bot: https://vk.me/join/AJQ1d6YgxhiiR2JDGbchUank`
    })
  }
})

gabella.bot(/^(?:!создателя)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 6) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.soz = 1

    await bot(`надпись выдана.`)
  }
})

gabella.bot(/^(?:!ориг)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 6) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.orig = 1

    await bot(`оригинал выдан.`)
  }
})
gabella.bot(/^(?:!пан|!панику)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 6) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.pan = 1

    await bot(`выдано.`)
  }
})

gabella.bot(/^(?:!пофиг)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 6) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.po = 1

    await bot(` pofig выдан.`)
  }
})

gabella.bot(/^(?:!донатера|!донатер)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 7) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.don = 1
    user.energy = 5000

    await bot(`донатер выдан.`)
  }
})

gabella.bot(/^(?:!антоху)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.id != 504991834) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.an = 1
    user.energy = 500000

    await bot(`выдано.`)
  }
})

gabella.bot(/^(?:!таньку)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.id != 504991834) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.ya = 1
    user.energy = 500000

    await bot(`выдано.`)
  }
})

gabella.bot(/^(?:!ко)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 6) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.ko = 1

    await bot(`выдано.`)
  }
})

gabella.bot(/^(?:!ковид)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 6) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.cov = 1

    await bot(`выдано.`)
  }
})

gabella.bot(/^(?:!премиум)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 6 && message.senderId !== 504991834 && message.senderId !== 576070765) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.prem = 1
    user.farmslimit = 10000
    user.limitdeneg = 100000000000
    user.energy = 50
    user.nicklimit = 25
    users.limitbank = 100000000000

    await bot(`выдано.`)
    vk.api.messages.send({
      user_id: user.id,
      message: `выражаем вам огромную благодарность за покупку ПРЕМИУМ статуса. Огромное спасибо! 🙀 

⃣ Увеличен шанс победы во всех играх в ТРИ раза.
⃣ Увеличен лимит передачи другим игрокам до 100.000.000.000$
⃣ Максимальное количество ферм увеличено до 10.000
⃣ получение бонуса +50 энергии.
⃣ Нету уменьшения прибыли с бизнеса.
⃣ Питомец больше не пропадёт в походе.
⃣ Красивая отметка в профиле.
⃣ Возможность установить ОЧЕНЬ длинный ник.
⃣⃣ Ежедневный ПРЕМИУМ БОНУС, по команде: «бонус премиум»

✅ Покупая донат, вы помогаете боту в развитии. Именно после вашей покупки появляются обновления. Все это благодаря вам!`
    })
  }
})

gabella.bot(/^(?:!прем)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 6 && message.senderId !== 504991834 && message.senderId !== 576070765) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.prem = 1
    user.farmslimit = 10000
    user.limitdeneg = 100000000000
    user.energy = 50
    user.nicklimit = 25
    user.limitbank = 100000000000

    await bot(`выдано.`)
    vk.api.messages.send({ user_id: user.id, message: `Вы стал автором одной из идей и ваша идея реализовалась. Вы получили Premium-статус!` })
  }
})
gabella.bot(/^(?:выдать щит)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 7) return bot(`Купите доступ.`)
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))

  {
    const bilo2 = utils.sp(clans.zashita)
    let clan = clans.find(x => x.clanid === Number(message.args[1]))
    if (!clan) return bot(`укажите ID клана из его профиля. ${smileerror}`)

    clans[clanid].abramovich = getUnix() + 86400000 * (message.args[2] - 1)

    await bot(`вы купили щит на ${message.args[2]} часа для клана ID ${message.args[1]} ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}

❌ Щит пропадает при любой атаке с их стороны.$ ${smilesuccess}

		💸 Было армии: ${bilo2}$
		💸 Стало армии: ${utils.sp(clan.zashita)}$`)
  }
})
gabella.bot(/^(?:выдать щит)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return
  await bot(`код clans[ID].abramovich = getUnix() + 86400000 (сутки)`)
})
gabella.bot(/^(?:переслать|пересрать)$/i, async (message, bot) => {
  if (message.user.prem < 1) return
  if (!message.forwards[0] || message.replyMessage) return message.reply(`Перешлите сообщение.`)
  let c = message.forwards[0].senderId
  let b = users.find(x => x.id === Number(c))
  return bot(`профиль игрока №${utils.sp(b.uid)};
🔎 ID: ${utils.sp(b.uid)}
💰 Денег: ${utils.sp(b.balance)}$
💳 В банке: ${utils.sp(b.bank)}$
💽 Биткоинов: ${utils.sp(b.btc)}฿
👑 Рейтинг: ${utils.sp(b.rating)}
🏋 Энергия: ${utils.sp(b.energy)}
🏆 Опыт: ${utils.sp(b.opit)}
🔗 Ссылка: vk.com/id${b.id}


⏰ Регистрация: ${b.regDate}, (${moment(b.regDate, "L").fromNow()}).
`)
  if (user.settings.adm) text += `${adm[user.settings.adm - 1].icon} ${adm[user.settings.adm - 1].name}\n`
  if (message.replyMessage) {
    let c = message.replyMessage.senderId
    let b = users.find(x => x.id === Number(c))
    message.send(`
🔎 ID: ${utils.sp(b.uid)}
📗 Имя: *id${c} (${b.tag})
💰 Баланс: ${utils.sp(b.balance)}
💳 В банке: ${utils.sp(b.bank)}
💽 Биткоинов: ${utils.sp(b.btc)}฿
 VK: https://vk.com/id${b.id}
`)
  }
})
gabella.bot(/^(?:zam kik)$/i, async (message, bot) => {
  if (message.user.id != 504991834 && message.user.settings.adm < 8) return bot(`Access error`)
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].materialimit = 0
      users[i].zplimit = 0
      users[i].rubinlimit = 0
      users[i].brilliantlimit = 0
      users[i].energylimit = 0
      users[i].derevyaniylimit = 0
      users[i].almazniylimit = 0
    }
  }
  return message.send(`Выдача зама сброшена!`)
})
gabella.bot(/^(?:выдача)$/i, async (message, bot) => {
  if (message.user.settings.adm < 2) return bot(`недостаточно прав. 🚫`)
  return bot(`🔥 Команды по выдачи зама↓

.выдать материю [ID] [кол-во]

.выдать зп [ID] [кол-во]

.выдать рубины [ID] [кол-во]

.выдать брюлики [ID] [кол-во]

.выдать энергию [ID] [кол-во]

.выдать деревянный [ID] [кол-во]

.выдать алмазный [ID] [кол-во]
 
.выдать донат [ID] [кол-во]

.выдать рандом [ID] [кол-во]
`)
})

gabella.bot(/^(?:апомощь|акоманды|админ команды|админкманды|админпомощь)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return bot(`недостаточно прав. 🚫`)
  if (message.chatId !== 1384) return bot(`можно посмотреть только в беседе Администрации! ${smileerror}`)
  return bot(`🔥 Команды админа↓
💡 Сетник [ID] [Ник] - изменить ник игроку
💡 Выдать [ID] [Кол-во] - выдача СЕБЕ и ИГРОКАМ валюту
💡 Выдать [сумма] - выдать СЕБЕ определенную валюту.
💡 Установить [сумма] - Установить себе баланс в указанную сумму.

💡 (Бан [ID] [Дней] 
[ПРИЧИНА] - выдать бан до 30 дней.)

💡 Банп [id] - заблокировать игроку передачи валюту игрокам
💡 Разбанп [id] -разблокировать игроку передачи валюты игрокам
💡 Бот Кик [ссылка] - кикнуть игрока с беседы
💡 Бан [ID] - выдать навсегда бан "от привилегии ЗАМЕСТИТЕЛЬ"
💡 Разбанв [ID] - снять вечный бан "от привилегии ЗАМЕСТИТЕЛЬ"
💡 Разбан [ID] - снять временный бан игрока
💡 Проф [ID] - профиль игрока.
💡 Проф [ссылка] - профиль игрока
💡 рассылки - переченнь рассылок (Только для создателя.)
💡 Инфа [ID] - полный профиль игрока, там информация. "от привилегии ЗАМЕСТИТЕЛЬ"
💡 Переслать [пересланное сообщение игрока]
💡 Выдатьответы [VKID] - дать доступ игроку к ответам на репорты
💡 ЗАБРАТЬОТВЕТЫ [VKID] - забрать доступ у игрока к ответам на репорты

💡 Поиск [Игровой ID] - Узнать цифровой ID
💡 Айди [нужный ID] - Установить фейковый ID
💡 Сбросить айди - Удалить фейковый ID

⛔ бны [id] - бан на выдачу банов
🃏 рны [id] - разбан на выдачу банов`)
})

gabella.bot(/^(?:установить)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.user.settings.adm < 1) return bot(`недостаточно прав. 🚫`)

  {
    message.user.balance = message.args[1]

    bot(`💰 вы установили себе баланс на ${utils.sp(message.args[1])}$ ${smilesuccess}`)
    return message.sendSticker(6670)
  }
})
gabella.bot(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 1) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (message.user.timers.vida >= 0) {
    await message.send(`[id${message.user.id}|${message.user.tag}], Лимит на данную команду. ${displayTime(message.user.timers.vida)} ${smileerror}`)
    return message.sendSticker(6679)
  }

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    if (user.ban == true) return bot(`игрок забанен! 🙌`)
    const bilo = utils.sp(user.balance)
    if (message.args[2] > message.user.settings.limit)
      return bot(`твоя максимальная сумма для выдачи ${utils.sp(message.user.settings.limit)}$ ${smileerror}\nКупить лимит можно у @[id${
        users[1].id
      }|${users[1].tag}]\n ⃣ 50 рублей - до 5кккк. 
⃣ 100 рублей - до 50кккк. 
⃣ 150 рублей - до 100кккк. 
⃣ 250 рублей - БЕЗЛИМИТ. `)

    message.user.timers.vidat = 3000
    user.balance += message.args[2]

    vk.api.messages.send({
      chat_id: 1225,
      message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n➡ Пользователю [id${user.id}|${user.tag}]: ${message.args[2]}$`
    })

    await bot(`зачисляю игроку [id${user.id}|${user.tag}] ${utils.sp(message.args[2])}$ ${smilesuccess}

		💸 Старый баланс: ${bilo}$
		💸 Новый баланс: ${utils.sp(user.balance)}$`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(message.args[2])}$!\n💸 На руках: ${utils.sp(
        user.balance
      )}$`
    })
  }
})

gabella.bot(/^(?:розыгрыш|розыгрыши)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 7 && message.senderId !== 498924715) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    if (user.ban == true) return bot(`игрок забанен! 🙌`)
    const bilo = utils.sp(user.balance)
    if (message.args[2] > message.user.settings.limit)
      return bot(`твоя максимальная сумма для выдачи ${utils.sp(message.user.settings.limit)}$ ${smileerror}\nКупить лимит можно у @[id${
        users[1].id
      }|${users[1].tag}]\n ⃣ 50 рублей - до 5кккк. 
⃣ 100 рублей - до 50кккк. 
⃣ 150 рублей - до 100кккк. 
⃣ 250 рублей - БЕЗЛИМИТ. `)

    message.user.timers.vidat = 3000
    user.balance += message.args[2]

    vk.api.messages.send({
      chat_id: 1225,
      message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n➡ Пользователю [id${user.id}|${user.tag}]: ${message.args[2]}$`
    })

    await bot(`зачисляю игроку [id${user.id}|${user.tag}] ${utils.sp(message.args[2])}$ ${smilesuccess}

		💸 Старый баланс: ${bilo}$
		💸 Новый баланс: ${utils.sp(user.balance)}$`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(message.args[2])}$!\n💸 На руках: ${utils.sp(
        user.balance
      )}$`
    })
  }
})
gabella.bot(/^(?:выдать)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.user.settings.adm < 1) return bot(`недостаточно прав. 🚫`)

  {
    message.user.balance += message.args[1]

    bot(`💰 вы установили себе баланс  ${utils.sp(message.args[1])}$ ${smilesuccess}`)
    return message.sendSticker(6670)
  }
})

gabella.bot(/^(?:переслать|пересрать)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return
  if (!message.forwards[0] || message.replyMessage) return message.reply(`Перешлите сообщение.`)
  let c = message.forwards[0].senderId
  let b = users.find(x => x.id === Number(c))
  return bot(`профиль игрока №${utils.sp(b.uid)};
🔎 ID: ${utils.sp(b.uid)}
💰 Денег: ${utils.sp(b.balance)}$
💳 В банке: ${utils.sp(b.bank)}$
💽 Биткоинов: ${utils.sp(b.btc)}฿
👑 Рейтинг: ${utils.sp(b.rating)}
🏋 Энергия: ${utils.sp(b.energy)}
🏆 Опыт: ${utils.sp(b.opit)}
🔗 Ссылка: vk.com/id${b.id}


⏰ Регистрация: ${b.regDate}, (${moment(b.regDate, "L").fromNow()}).
`)
  if (message.replyMessage) {
    let c = message.replyMessage.senderId
    let b = users.find(x => x.id === Number(c))
    message.send(`
🔎 ID: ${utils.sp(b.uid)}
📗 Имя: *id${c} (${b.tag})
💰 Баланс: ${utils.sp(b.balance)}
💳 В банке: ${utils.sp(b.bank)}
💽 Биткоинов: ${utils.sp(b.btc)}฿
 VK: https://vk.com/id${b.id}
`)
  }
})
gabella.bot(/^(?:!лимитп)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834 && message.senderId !== 576070765 && message.user.settings.adm < 7) return message.send(`Брысь.`)
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))

  if (message.args[2] <= -0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.settings.limitdeneg = message.args[2]

    await bot(`вы повысили лимит переводов игроку [@id${user.id}(${user.tag})] на ${utils.sp(message.args[2])}$.`)
  }
})
gabella.bot(/^(?:!лимит)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834 && message.senderId !== 576070765 && message.user.settings.adm < 7) return message.send(`Брысь.`)
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))

  if (message.args[2] <= -0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.settings.limit = message.args[2]

    await bot(`вы повысили лимит игроку [@id${user.id}(${user.tag})] на ${utils.sp(message.args[2])}$.`)
  }
})
gabella.bot(/^(?:идчат)$/i, async (message, bot) => {
  if (message.user.settings.adm < 6) return bot(`you dont have permisson`)
  if (!message.isChat) return bot(`команда работает только в беседе!`)
  return message.send(` 
this chat id = ${message.chatId}.`)
})
gabella.bot(/^(?:!банник|бник|банник)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.senderId !== 504991834 && message.senderId !== 576070765 && message.senderId !== 515132440 && message.user.settings.adm < 7)
    return message.send(`брысь.`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bil = user.tag

    user.tag = "⛔ВАШ НИК ЗАБАНЕН"
    user.btag = true

    await bot(`Вы успешно сменили ник игроку *id${user.id} (${bil},) на *id${user.id} (${user.tag}).`)
    vk.api.messages.send({ user_id: user.id, message: `Вам Забанили ник за нарушения символов в нем.` })
  }
})

gabella.bot(/^(?:бны)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.senderId !== 504991834 && message.senderId !== 576070765 && message.senderId !== 515132440) return message.send(`брысь.`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.bban = true

    await bot(`Вы успешно закрыли доступ к банам/разбанам *id${user.id} (${user.tag}).`)
    vk.api.messages.send({ user_id: user.id, message: `Создатель закрыл Вам доступ к банам/разбанам!` })
  }
})
gabella.bot(/^(?:рны)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.senderId !== 504991834 && message.senderId !== 576070765 && message.senderId !== 515132440) return message.send(`брысь.`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.bban = false

    await bot(`Вы успешно открыли доступ к банам/разбанам *id${user.id} (${user.tag}).`)
    vk.api.messages.send({ user_id: user.id, message: `Создатель открыл Вам доступ к банам/разбанам!` })
  }
})

gabella.bot(/^(?:!разбанник|рник|разбанник)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.senderId !== 504991834 && message.senderId !== 576070765 && message.senderId !== 515132440 && message.user.settings.adm < 7)
    return message.send(`брысь.`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bil = user.tag

    user.tag = "СМЕНИТЕ НИК"
    user.nicklimit = 10
    user.btag = false

    await bot(`Вы успешно сменили ник игроку *id${user.id} (${bil},) на *id${user.id} (${user.tag}).`)
    vk.api.messages.send({ user_id: user.id, message: `Вам разблокировали ник. Вы можете сменить себе ник.` })
  }
})
gabella.bot(/^(?:сетник)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return bot(`Вы не администратор.`)
  if (message.args[2] <= 0) return bot(`укажите ник`)
  //	if(user.args[1].btag == true) return bot(`У игрока установлен бан ника!`);
  if (Number(message.args[1]) === message.user.id) return bot(`Вы указали свой ID`)
  message.args[2] = nikz(message.args[2])

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`убедитесь в правильности ID игрока`)
    user.tag = message.args[2]

    await bot(`вы изменили ник игрока на ${message.args[2]}`)
    vk.api.messages.send({
      chat_id: 1265,
      forward_messages: message.id,
      message: `[НИК]\n&#128100; ID: ${user.id} получил ник:${message.args[2]} 
		сменил:	${message.user.tag}`
    })
  }
})
gabella.bot(/^(?:сн)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.senderId !== 504991834 && message.senderId !== 576070765 && message.senderId !== 515132440 && message.user.settings.adm < 7)
    return message.send(`брысь.`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bil = user.tag

    user.tag = "СМЕНИТЕ НИК"
    user.nicklimit = 10
    user.btag = false

    await bot(`Вы успешно сменили ник игроку ${bil} старый ник. 
	Новый *id${user.id} (${user.tag})!`)
  }
})

gabella.bot(/^(?:!вип)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 6 && message.senderId !== 504991834 && message.senderId !== 576070765) return message.send(`брысь.`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.vip = 1
    user.farmslimit = 5000
    user.limitdeneg = 50000000000
    user.energy = 20
    user.nicklimit = 45
    user.limitbank = 50000000000

    await bot(`пользователь *id${user.id} (${user.tag}) приобрёл "VIP-права".`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Вы приобрели привилегию "VIP-права", спасибо за покупку! \n` })
  }
})
gabella.bot(/^(?:!материю)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.materia += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} материи. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} Материи.` })
  }
})
gabella.bot(/^(?:.выдать материю)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 2) return bot(`Команда доступна только для Заместителя Создателя! :(`, { attachment: "market-178396242_5081419" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (user.ban == true) return bot(`игрок забанен! 🙌`)
  if (message.args[1] > 100) return bot(`Нельзя выдавать больше 100 этой руды!`)
  if (message.user.materialimit > getUnix())
    return bot(`У вас лимит на выдачу этой руды. 😩

⌚ Выдать можно будет через ${unixStampLeft(message.user.materialimit - Date.now())}`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.materia)

    user.materia += message.args[2]
    message.user.materialimit = getUnix() + 86400000

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Материи. ${smilesuccess}
		🧺 Было: ${bilo}
		🧺 Стало: ${utils.sp(user.zp)}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(message.args[2])} Материи!\n🧺 На руках: ${utils.sp(
        user.materia
      )} Материи.`
    })
  }
})
gabella.bot(/^(?:!материю)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.materia += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} материи. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} Материи.` })
  }
})

gabella.bot(/^(?:!энергию)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 5) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.energy += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} энергии. ${smilesuccess}`)
  }
})
gabella.bot(/^(?:.выдать энергию)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 2) return bot(`Команда доступна только для Заместителя Создателя! :(`, { attachment: "market-178396242_5081419" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (user.ban == true) return bot(`игрок забанен! 🙌`)
  if (message.args[1] > 100) return bot(`Нельзя выдавать больше 100 этой руды!`)
  if (message.user.energylimit > getUnix())
    return bot(`У вас лимит на выдачу энергии. 😩

⌚ Выдать можно будет через ${unixStampLeft(message.user.energylimit - Date.now())}`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.energy)

    user.energy += message.args[2]
    message.user.energylimit = getUnix() + 86400000

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Энергии. ${smilesuccess}
		🧺 Было: ${bilo}
		🧺 Стало: ${utils.sp(user.energy)}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(message.args[2])} Энергии!\n🧺 На руках: ${utils.sp(
        user.energy
      )} Энергии.`
    })
  }
})
gabella.bot(/^(?:!энергиюп)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 7) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.energy += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} энергии. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ У вас ПРЕМИУМ статус. Вы получили ${utils.sp(message.args[2])} энергии бонусом.` })
  }
})

gabella.bot(/^(?:!Силу)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 5) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.sataka += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} силы. ${smilesuccess}`)
  }
})

gabella.bot(/^(?:!опыт)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 5) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.opit += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} опыта. ${smilesuccess}`)
  }
})

gabella.bot(/^(?:!рейтинг)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.rating += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} рейтинга. ${smilesuccess}`)
  }
})
gabella.bot(/^(?:!удар)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.bossyr += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} удара по Вирусу. ${smilesuccess}`)
  }
})

gabella.bot(/^(?:!Урон)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.bossyr1 += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} урона по Вирусу. ${smilesuccess}`)
  }
})
gabella.bot(/^(?:.выдать рубины)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 2) return bot(`Команда доступна только для Заместителя Создателя! :(`, { attachment: "market-178396242_5081419" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (user.ban == true) return bot(`игрок забанен! 🙌`)
  if (message.args[1] > 100) return bot(`Нельзя выдавать больше 100 этой руды!`)
  if (message.user.rubinlimit > getUnix())
    return bot(`У вас лимит на выдачу этой руды. 😩

⌚ Выдать можно будет через ${unixStampLeft(message.user.rubinlimit - Date.now())}`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.rubin)

    user.rubin += message.args[2]
    message.user.rubinlimit = getUnix() + 86400000

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} рубинов. ${smilesuccess}
		🧺 Было: ${bilo}
		🧺 Стало: ${utils.sp(user.rubin)}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(message.args[2])} рубинов!\n🧺 На руках: ${utils.sp(
        user.rubin
      )} рубинов.`
    })
  }
})
gabella.bot(/^(?:!рубины)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.rubin += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} рубинов. ${smilesuccess}`)
  }
})
gabella.bot(/^(?:.выдать брюлики)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 2) return bot(`Команда доступна только для Заместителя Создателя! :(`, { attachment: "market-178396242_5081419" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (user.ban == true) return bot(`игрок забанен! 🙌`)
  if (message.args[1] > 100) return bot(`Нельзя выдавать больше 100 этой руды!`)
  if (message.user.brilliantlimit > getUnix())
    return bot(`У вас лимит на выдачу этой руды. 😩

⌚ Выдать можно будет через ${unixStampLeft(message.user.brilliantlimit - Date.now())}`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.brilliant)

    user.brilliant += message.args[2]
    message.user.brilliantlimit = getUnix() + 86400000

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} бриллиантов. ${smilesuccess}
		🧺 Было: ${bilo}
		🧺 Стало: ${utils.sp(user.brilliant)}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(
        message.args[2]
      )} Бриллиантов!\n🧺 На руках: ${utils.sp(user.brilliant)} бриллиантов.`
    })
  }
})
gabella.bot(/^(?:!бриллианты)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.brilliant += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} бриллиантов. ${smilesuccess}`)
  }
})
gabella.bot(/^(?:.выдать зп)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 2) return bot(`Команда доступна только для Заместителя Создателя! :(`, { attachment: "market-178396242_5081419" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (user.ban == true) return bot(`игрок забанен! 🙌`)
  if (message.args[1] > 100) return bot(`Нельзя выдавать больше 100 этой руды!`)
  if (message.user.zplimit > getUnix())
    return bot(`У вас лимит на выдачу этой руды. 😩

⌚ Выдать можно будет через ${unixStampLeft(message.user.zplimit - Date.now())}`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.zp)

    user.zp += message.args[2]
    message.user.zplimit = getUnix() + 86400000

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} ЗП. ${smilesuccess}
		🧺 Было: ${bilo}
		🧺 Стало: ${utils.sp(user.zp)}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(
        message.args[2]
      )} Звёздной пыли!\n🧺 На руках: ${utils.sp(user.zp)} Звёздной пыли.`
    })
  }
})
gabella.bot(/^(?:!зп)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.zp += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} звёздной пыли. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} Звёздной пыли.`
    })
  }
})

gabella.bot(/^(?:!топзп1)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.zp += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} звёздной пыли. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы оказались на ПЕРВОМ рандомном месте и получили ${utils.sp(
        message.args[2]
      )} Звёздной пыли.`
    })
  }
})

gabella.bot(/^(?:!топзп2)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.zp += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} звёздной пыли. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы оказались на ВТОРОМ рандомном месте и получили ${utils.sp(
        message.args[2]
      )} Звёздной пыли.`
    })
  }
})

gabella.bot(/^(?:!топзп3)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.zp += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} звёздной пыли. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы оказались на ТРЕТЕМ рандомном месте и получили ${utils.sp(
        message.args[2]
      )} Звёздной пыли.`
    })
  }
})

gabella.bot(/^(?:!топ1)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.pachal += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Донат кейсов. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы оказались топ 1 и получили ${utils.sp(message.args[2])} Донат кейсов.`
    })
  }
})

gabella.bot(/^(?:!силку)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 576070765) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.sataka += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} силы. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за покупку силы урона по вирусу. Вы купили ${utils.sp(message.args[2])} Силы для вируса.`
    })
  }
})

gabella.bot(/^(?:!биткоины|!биткойны)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.btc += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} биткоинов. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} биткойнов.`
    })
  }
})
gabella.bot(/^(?:.выдать Деревяный|.выдать деревянный)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 2) return bot(`Команда доступна только для Заместителя Создателя! :(`, { attachment: "market-178396242_5081419" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (user.ban == true) return bot(`игрок забанен! 🙌`)
  if (message.args[1] > 100) return bot(`Нельзя выдавать больше 100 кейсов!`)
  if (message.user.derevyaniylimit > getUnix())
    return bot(`У вас лимит на выдачу Деревяных кейсов. 😩

⌚ Выдать можно будет через ${unixStampLeft(message.user.derevyaniylimit - Date.now())}`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.surprise)

    user.surprise += message.args[2]
    message.user.derevyaniylimit = getUnix() + 86400000

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} деревянных кейсов. ${smilesuccess}
		📦 Было деревянных кейсов: ${bilo}
		📦 Стало: ${utils.sp(user.surprise)}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(
        message.args[2]
      )} Дерев. кейс!\n📦 В инвентаре: ${utils.sp(user.surprise)} Деревянных кейсов.`
    })
  }
})
gabella.bot(/^(?:!Деревяный|деревянный)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.surprise += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} деревянных кейсов. ${smilesuccess}`)
  }
})
gabella.bot(/^(?:.выдать алмазный)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 2) return bot(`Команда доступна только для Заместителя Создателя! :(`, { attachment: "market-178396242_5081419" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (user.ban == true) return bot(`игрок забанен! 🙌`)
  if (message.args[1] > 100) return bot(`Нельзя выдавать больше 100 кейсов!`)
  if (message.user.almazniylimit > getUnix())
    return bot(`У вас лимит на выдачу Алмазных кейсов. 😩

⌚ Выдать можно будет через ${unixStampLeft(message.user.almazniylimit - Date.now())}`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.platinium)

    user.platinium += message.args[2]
    message.user.almazniylimit = getUnix() + 86400000

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} алмазных кейсов. ${smilesuccess}
		📦 Было алмазных кейсов: ${bilo}
		📦 Стало: ${utils.sp(user.platinium)}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(
        message.args[2]
      )} Алмаз. кейс!\n📦 В инвентаре: ${utils.sp(user.platinium)} Алмазных кейсов.`
    })
  }
})
gabella.bot(/^(?:!Алмазный|алмазных)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.platinium += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Алмазных кейсов. ${smilesuccess}`)
  }
})
gabella.bot(/^(?:.выдать донат)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 2) return bot(`Команда доступна только для Заместителя Создателя! :(`, { attachment: "market-178396242_5081419" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (user.ban == true) return bot(`игрок забанен! 🙌`)
  if (message.args[1] > 100) return bot(`Нельзя выдавать больше 100 кейсов!`)
  if (message.user.donatlimit > getUnix())
    return bot(`У вас лимит на выдачу Донат кейсов. 😩

⌚ Выдать можно будет через ${unixStampLeft(message.user.donatlimit - Date.now())}`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.pachal)

    user.pachal += message.args[2]
    message.user.donatlimit = getUnix() + 86400000

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Донат кейсов. ${smilesuccess}
		📦 Было Донат кейсов: ${bilo}
		📦 Стало: ${utils.sp(user.pachal)}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(
        message.args[2]
      )} Донат кейс!\n📦 В инвентаре: ${utils.sp(user.pachal)} Донат кейсов.`
    })
  }
})
gabella.bot(/^(?:!донат)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.pachal += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Донат кейсов. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} Донат кейсов.`
    })
  }
})

gabella.bot(/^(?:гс|gc)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834) return
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.donat += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} GabellaCoin. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} GabellaCoin.`
    })
  }
})

gabella.bot(/^(?:!топ)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 576070765) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.pachal += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Донат кейсов. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Вы оказались в топ 3 по общему рейтингу. Вы получили ${utils.sp(message.args[2])} Донат кейсов.`
    })
  }
})

gabella.bot(/^(?:!пок)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.pachal += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} Донат кейсов. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Спасибо за покупку ${utils.sp(message.args[2])} Донат кейсов.` })
  }
})
gabella.bot(/^(?:.выдать рандом)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 2) return bot(`Команда доступна только для Заместителя Создателя! :(`, { attachment: "market-178396242_5081419" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (user.ban == true) return bot(`игрок забанен! 🙌`)
  if (message.args[1] > 100) return bot(`Нельзя выдавать больше 100 кейсов!`)
  if (message.user.randclimit > getUnix())
    return bot(`У вас лимит на выдачу рандом кейсов. 😩

⌚ Выдать можно будет через ${unixStampLeft(message.user.randclimit - Date.now())}`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.randc)

    user.randc += message.args[2]
    message.user.randclimit = getUnix() + 86400000

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} рандом кейсов. ${smilesuccess}
		📦 Было рандом кейсов: ${bilo}
		📦 Стало: ${utils.sp(user.randc)}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(
        message.args[2]
      )} рандом кейс!\n📦 В инвентаре: ${utils.sp(user.randc)} рандом кейсов.`
    })
  }
})
gabella.bot(/^(?:!рандом)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.randc += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} рандом кейсов. ${smilesuccess}`)
    vk.api.messages.send({ user_id: user.id, message: `✅ Вы указали правильный ответ! Вы получили ${utils.sp(message.args[2])} Рандомных кейсов.` })
  }
})

gabella.bot(/^(?:!банк)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.bank += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} денег в банк. ${smilesuccess}`)
  }
})

gabella.bot(/^(?:!железо)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.zhelezo += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} железа. ${smilesuccess}`)
  }
})

gabella.bot(/^(?:!золото)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.zoloto += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} золота. ${smilesuccess}`)
  }
})

gabella.bot(/^(?:!алмаз)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.almaz += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} алмазов. ${smilesuccess}`)
  }
})

gabella.bot(/^(?:!подписчики)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === NUmber(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileERror}`)
    const bilo = utils.sp(user.balance)

    user.youtubepod += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} подписчиков. ${smilesuccess}`)
  }
})
gabella.bot(/^(?:!лайки)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === NUmber(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileERror}`)
    const bilo = utils.sp(user.balance)

    user.youtubelake += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} лайков. ${smilesuccess}`)
  }
})

gabella.bot(/^(?:rubli1)$/i, async (message, bot) => {
  if (message.user.id != 504991834 && message.user.settings.adm < 7) return bot(`хуй саси.`)
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].bossyr = 0
    }
  }
  return message.send(`готово!`)
})

gabella.bot(/^(?:миндонаты)$/i, async (message, bot) => {
  if (message.user.id != 504991834 && message.user.settings.adm < 7) return bot(`you dont have permission`)
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].donat = 0
    }
  }
  return message.send(`готово!`)
})

gabella.bot(/^(?:rubli2)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return bot(`you dont have permission`)
  for (i = 1800; i < 20000; i++) {
    if (users[i]) {
      users[i].bossyr = 0
      users[i].sataka = 1
    }
  }
  return message.send(`готово!`)
})

gabella.bot(/^(?:rubli3)$/i, async (message, bot) => {
  if (message.user.settings.adm < 20) return bot(`you dont have permission`)
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].sataka = 1
    }
  }
  return message.send(`готово!`)
})
gabella.bot(/^(?:выдать)\s?([0-9]+)?/i, async (message, args, bot) => {
  if (message.user.settings.adm < 1) return message.send(`🔸 » Вы не Admin`)
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.user.balance += Number(message.args[1])

  return message.send(`💰 » Вы выдали себе ${utils.sp(message.args[1])}$ ${smilesuccess}`)
})

gabella.bot(/^(?:обнулитьбалик)\s?([0-9]+)?/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (message.user.settings.adm < 6) return message.send(`Вам недоступно.`)
  if (!message.args[1] || !users[message.args[1]]) return message.send(`Использование: 'обнулить [ID]'`)
  users[message.args[1]].bank = 0
  users[message.args[1]].rating = 0
  users[message.args[1]].balance = 100000

  return message.send(`Вы обнулили пользователя [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`)
  console.log(`Был обнулён игрок id${users[message.args[1]].id}`)
  console.log(``)
  saveUsers()
})

gabella.bot(/^(?:!обрейтинг)\s?([0-9]+)?/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (message.senderId !== 504991834 && message.senderId !== 576070765) return message.send(`Вам недоступно.`)
  if (!message.args[1] || !users[message.args[1]]) return message.send(`Использование: '!обрейтинг [ID]'`)
  users.rating = 0

  return message.send(`Вы обнулили рейтинг игрока @id${id}`)
  console.log(`Был обнулён рейтинг игроку id${users[message.args[1]].id}`)
  console.log(``)
  saveUsers()
})

gabella.bot(/^(?:!обфермы|!обферму|!обферма)\s?([0-9]+)?/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (message.user.settings.adm < 6) return message.send(`Вам недоступно.`)
  if (!message.args[1] || !users[message.args[1]]) return message.send(`Использование: '!верфермы [ID]'`)
  users[message.args[1]].farm = 0

  return message.send(`Вы обнулили фермы игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`)
  console.log(`Был обнулён фермы игроку id${users[message.args[1]].id}`)
  console.log(``)
  saveUsers()
})

gabella.bot(/^(?:!мет)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === NUmber(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileERror}`)
    const bilo = utils.sp(user.balance)

    user.meteor += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} метеорита. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за участие в ежедневной акции. Вы получили ${utils.sp(message.args[2])} Слитков метеорита.`
    })
  }
})
gabella.bot(/^(?:инфа|показать)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 2 && message.user.id != 504991834 && message.user.don < 1)
    return message.send(`Команда доступна только от Заместителя, но вы можете ее купить в лс у создателя.`)

  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (user.id === message.user.id) return bot(`Вы указали свой ID`)
  let text = ``

  text += `Статистика игрока [id${user.id}|${user.tag}]\n`
  if (user.settings.adm) text += `${adm[user.settings.adm - 1].icon} ${adm[user.settings.adm - 1].name}\n`
  if (user.prem) text += `${prem[user.prem - 1].icon} ${prem[user.prem - 1].name}\n`
  if (user.vip) text += `${vip[user.vip - 1].icon} ${vip[user.vip - 1].name}\n`
  if (user.ko) text += `${ko[user.ko - 1].icon} ${ko[user.ko - 1].name}\n`
  if (user.don) text += `${don[user.don - 1].icon} ${don[user.don - 1].name}\n`
  if (user.ya) text += `${ya[user.ya - 1].icon} ${ya[user.ya - 1].name}\n`
  if (user.an) text += `${an[user.an - 1].icon} ${an[user.an - 1].name}\n`
  if (user.orig) text += `${orig[user.orig - 1].icon} ${orig[user.orig - 1].name}\n`
  if (user.pod) text += `${pod[user.pod - 1].icon} ${pod[user.pod - 1].name}\n`
  if (user.cov) text += `${cov[user.cov - 1].icon} ${cov[user.cov - 1].name}\n`
  if (user.po) text += `${po[user.po - 1].icon} ${po[user.po - 1].name}\n`
  if (user.pan) text += `${pan[user.pan - 1].icon} ${pan[user.pan - 1].name}\n`
  if (user.soz) text += `${soz[user.soz - 1].icon} ${soz[user.soz - 1].name}\n`
  text += `🔎 ОРИГ ID: ${user.uid}\n`
  text += `🔎 Игровой ID: ${user.gameuid}\n`
  if (user.vampir) text += `🧛 Вампир\n`
  if (user.prez) text += `🤵 Мэр\n\n`
  if (user.ban) text += `⛔ Забанен навсегда\n\n`
  if (user.donat) text += `👑 ${utils.sp(user.donat)} GabellaCoin\n`
  if (user.balance) text += `💰 Денег: ${utils.sp(user.balance)}$\n`
  if (user.bank) text += `💳 В банке: ${utils.sp(user.bank)}$\n`
  if (user.btc) text += `💽 Биткоинов: ${utils.sp(user.btc)}฿\n`
  if (user.rating) text += `👑 Рейтинг: ${utils.sp(user.rating)}\n`
  if (user.energy) text += `🏋 Энергия: ${utils.sp(user.energy)}\n`
  if (user.opit) text += `🏆 Опыт: ${utils.sp(user.opit)}\n`
  text += `🔗 Ссылка: vk.com/id${user.id}\n\n`
  if (user.zhelezo) text += `⚙ ${utils.sp(user.zhelezo)} железа\n`
  if (user.zoloto) text += `🏵 ${utils.sp(user.zoloto)} золота\n`
  if (user.almaz) text += `💎 ${utils.sp(user.almaz)} алмазов\n`
  if (user.materia) text += `🌌 ${utils.sp(user.materia)} материи\n`
  if (user.brilliant) text += `💧 ${utils.sp(user.brilliant)} бриллиантов\n`
  if (user.rubin) text += `❤ ${utils.sp(user.rubin)} рубинов\n`
  if (user.zp) text += `🌠 ${utils.sp(user.zp)} звёздной пыли\n`
  if (user.stran) text += `⠀💒 Страна: ${strana[user.stran - 1].name}\n`
  if (user.meteor) text += `☄ ${utils.sp(user.meteor)} метеорита\n\n\n`

  text += `⠀⚔ Cила атаки по вирусу - ${utils.sp(user.sataka)}\n`
  text += `⠀⚔ Нанес ударов вирусу - ${utils.sp(user.bossyr)}\n\n`

  text += `⠀🆘 Cила атаки по боссу - ${utils.sp(user.sataka1)}\n`
  text += `⠀🆘 Нанес урона боссу - ${utils.sp(user.bossyr1)}\n\n`

  text += `⠀🎖 - ${user.pla}\n`
  text += `🔖 Номер яхты: ${user.yan}\n`
  text += `🛥 Сила яхты: ${user.m_sk1} узлов\n\n`

  text += `⠀🏆 - ${user.gon}\n`
  text += `🔖 Госномер: ${user.mn}\n`
  text += `🏎 Мощность машины: ${user.m_sk} л.с.\n\n`

  text += `\n👜 У Игрока в инвентаре:\n`
  if (user.surprise) text += `📦 Деревянных  Кейса (${user.surprise} шт.)\n`
  if (user.platinium) text += `📦 Алмазных Кейса (${user.platinium} шт.)\n`
  if (user.randc) text += `📦 Рандомный Кейс (${utils.sp(user.randc)} шт.)\n`
  if (user.secretcase) text += `📦 Премиум Кейс (${utils.sp(user.secretcase)} шт.)\n`
  if (user.pachal) text += `📦 Донат Кейса (${user.pachal} шт.)\n`
  if (user.GB) text += `📦 GB Кейса (${user.GB} шт.)\n`
  if (user.NG) text += `📦 Новогодних Кейсов (${user.NG} шт.)\n`
  if (user.posilka) text += `📦 Посылка из Японии (${utils.sp(user.posilka)} шт.)\n\n`

  if (user.marriage.partner) text += `\n👬 В браке с: [id${users[user.marriage.partner].id}|${users[user.marriage.partner].tag}]`

  if (
    user.transport.car ||
    user.transport.yacht ||
    user.transport.airplane ||
    user.transport.helicopter ||
    user.realty.home ||
    user.realty.apartment ||
    user.misc.phone ||
    user.misc.pistolet ||
    user.misc.telivisor ||
    user.misc.farm ||
    user.business ||
    user.misc.odezda ||
    user.misc.pet ||
    user.energy ||
    user.opit ||
    user.clan ||
    user.misc.computer ||
    user.business2
  ) {
    text += `\n🔑 Имущество:\n\n`
    if (user.vvork) text += `${vvorks[user.vvork - 1].icon} Работа: ${vvorks[user.vvork - 1].name}\n\n`
    if (user.transport.car) text += `⠀🚗 Машина: ${cars[user.transport.car - 1].name}\n`
    if (user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[user.transport.yacht - 1].name}\n`
    if (user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[user.transport.airplane - 1].name}\n`
    if (user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[user.transport.helicopter - 1].name}\n`

    if (user.realty.home) text += `⠀🏠 Дом: ${homes[user.realty.home - 1].name}\n`
    if (user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[user.realty.apartment - 1].name}\n`

    if (user.misc.odezda) text += `⠀👘 Одежда: ${odezdi[user.odezda - 1].name}\n`

    if (user.misc.pistolet) text += `⠀🔫 Пистолет: ${pistolets[user.misc.pistolet - 1].name}\n`
    if (user.misc.avtomat) text += `⠀💣 Автоматы: ${avtomats[user.misc.avtomat - 1].name}\n`
    if (user.misc.phone) text += `⠀📱 Телефон: ${phones[user.misc.phone - 1].name}\n`
    if (user.misc.telivisor) text += `⠀💻 Телевизор: ${telivisors[user.misc.telivisor - 1].name}\n`
    if (user.misc.computer) text += `⠀🖥 Компьютер: ${computers[user.misc.computer - 1].name}\n`
    if (user.misc.pet) text += `⠀${pets[user.misc.pet - 1].icon} Питомец: ${pets[user.misc.pet - 1].name}\n\n`
    if (user.misc.farm) text += `⠀🔋 Фермы: ${farms[user.misc.farm - 1].name} (x${user.farms})\n\n`
    if (user.business) text += `⠀${businesses[user.business - 1].icon} ${businesses[user.business - 1].name}\n\n`
    if (user.business2) text += `бизнес 2\n\n`
    if (user.business3) text += `бизнес 3\n\n`
  }

  text += `\n⏰ Регистрация: ${user.regDate}, (${moment(user.regDate, "L").fromNow()}).`
  return bot(`Данные игрока №${user.gameuid}\n${text}`)
})
gabella.bot(/(?:разжаловаться)/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return bot(`Вы не администратор🔥`)
  if (message.chatId !== 1384) return bot(`Разжаловаться можно только в беседе Администрации! ${smileerror}`)

  message.user.bank = 0
  message.user.rating = 0
  message.user.balance = 0
  message.user.btc = 0
  message.user.business = 0
  message.user.pistolet = 0
  message.user.phone = 0
  message.user.tank = 0
  message.user.avtomat = 0
  message.user.kvadr = 0
  message.user.moto = 0
  message.user.korabl = 0
  message.user.transport.car = 0
  message.user.opit = 0
  message.user.transport.yacht = 0
  message.user.platinium = 0
  message.user.surprise = 0
  message.user.pachal = 0
  message.user.helicopter = 0
  message.user.airplane = 0
  message.user.computer = 0
  message.user.biz = 0
  message.user.pet = 0
  message.user.prem = 0
  message.user.vip = 0
  message.user.farm_btc = 0
  message.user.settings.adm = 0
  message.user.settings.report = true
  message.user.farms = 0
  message.user.bisnesses13 = 0
  message.user.bossyr = 0
  message.user.sataka = 1
  message.user.bossyr1 = 0
  message.user.sataka1 = 1
  message.user.farm = 0
  message.user.misc.farm = 0
  message.user.misc.pistolet = 0
  message.user.misc.avtomat = 0
  message.user.misc.phone = 0
  message.user.misc.telivisor = 0
  message.user.misc.odezda = 0
  message.user.misc.pristavka = 0
  message.user.misc.pet = 0
  message.user.gon = 0
  message.user.transport.helicopter = 0
  message.user.vvork = 0
  message.user.business2 = 0
  message.user.bizlvl2 = 0
  message.user.biz2 = 0
  message.user.business3 = 0
  message.user.bizlvl3 = 0
  message.user.biz3 = 0
  message.user.gen = 0
  message.user.lvlplan = 0
  message.user.planet = 0
  message.user.gameuid = `${message.user.uid}`
  message.user.donat = 0
  vk.api.messages.send({
    chat_id: 1412,
    message: `@id504991834(.) Администратор разжаловался с должности!\n\n🗣➡ [id${message.user.id}|${message.user.tag}]: 	&#127380;${message.user.uid}, не забудь покинуть беседу!`
  })
  return bot(`🔥Вы успешно снялись с администратора, НЕ ЗАБУДЬ ПОКИНУТЬ АДМИН-БЕСЕДУ!🔥`)
})
gabella.bot(/^(?:123f)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7 && message.senderId !== 504991834) return bot(`нет доступа.`)
  for (i = 0; i < 5000000; i++) {
    if (users[i]) {
      users[i].vreps = 0
      users[i].votvet = 0
    }
  }
  return message.send(`готово!`)
})

gabella.bot(/(?:Рассылки_прайс)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return bot(`нет доступа.`)
  return bot(`
		Постовая_обнова - обновление в боте
		Постовая1 - А ты участвуешь в конкурсе?
		Постовая_акция - ⭐ Акция закончится через 2 ДНЯ!
		Постовая_промо - 🌠 НОВАЯ раздача! Чтобы получить приз, отправь промокод со *gabellabot (стены группы)!
		Постовая_беседа - без текста
		Рассылка [ТЕКСТ] - рассылка`)
})

gabella.bot(/^(?:-рандк)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7 && message.senderId !== 504991834) return bot(`нет доступа.`)
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].randc = 0
    }
  }
  return message.send(`готово!`)
})

gabella.bot(/^(?:-расс)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].raf = true
    }
  }
  return message.send(`готово!`)
})

gabella.bot(/^(?:-вип)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return bot(`нет доступа.`)
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].vip = 0
    }
  }
  return message.send(`готово!`)
})

gabella.bot(/^(?:-выда)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].settings.limitbank = 10000000
    }
  }
  return message.send(`готово!`)
})

gabella.bot(/^(?:new)$/i, async (message, bot) => {
  if (message.isChat) return bot(``)
  if (message.user.promo) return bot(`вы уже активировали промокод. ${smileerror}`)
  else {
    return bot(
      `у этого промокода ЗАКОНЧИЛИСЬ ИСПОЛЬЗОВАНИЯ, включи уведомления в группе о новых записях что бы узнавать ОДНИМ ИЗ ПЕРВЫХ о новых промокодах. 📢`,
      { attachment: `photo-178396242_457243804` }
    )
    if (config.promotip === "btc") message.user.btc += config.promovalue
    if (config.promotip === "balance") message.user.balance += config.promovalue
    if (config.promotip === "pachal") message.user.pachal += config.promovalue
    if (config.promotip === "zp") message.user.zp += config.promovalue
    message.user.promo = true
    promo += 1
    ostalos = config.promolimit - promo
    return bot(`зачислено +${utils.sp(config.promovalue)}${config.promotip
      .toString()
      .replace(/btc/gi, "฿")
      .replace(/balance/gi, "$")
      .replace(/pachal/gi, " ДОНАТ КЕЙСОВ")
      .replace(/zp/gi, " Звездной пыли")} ✅
📢 Осталось ${ostalos} использований.`)
  }
})

gabella.bot(/^(?:промо акция)$/i, async (message, bot) => {
  if (message.isChat) return bot(``)
  if (message.user.promo) return bot(`вы уже активировали промокод. ${smileerror}`)
  else {
    if (promo >= config.promolimit)
      return bot(
        `у этого промокода ЗАКОНЧИЛИСЬ ИСПОЛЬЗОВАНИЯ, включи уведомления в группе о новых записях что бы узнавать ОДНИМ ИЗ ПЕРВЫХ о новых промокодах. 📢`,
        { attachment: `photo-178396242_457243804` }
      )
    if (config.promotip === "btc") message.user.btc += config.promovalue
    if (config.promotip === "balance") message.user.balance += config.promovalue
    if (config.promotip === "zp") message.user.zp += config.promovalue
    message.user.promo = true
    promo += 1
    ostalos = config.promolimit - promo
    return bot(`зачислено +${utils.sp(config.promovalue)}${config.promotip
      .toString()
      .replace(/btc/gi, "฿")
      .replace(/balance/gi, "$")
      .replace(/zp/gi, " Звездной пыли")} ✅
📢 Осталось ${ostalos} использований.`)
  }
})

gabella.bot(/^(?:промо бабки|промо донат|бесплатно)$/i, async (message, bot) => {
  if (message.isChat) return bot(`что бы получить бонус с промокода вы должны отправить этот промокод боту в личку.`)
  if (message.user.promo) return bot(`вы уже активировали промокод. ${smileerror}`)
  else {
    return bot(
      `у этого промокода ЗАКОНЧИЛИСЬ ИСПОЛЬЗОВАНИЯ, включи уведомления в группе о новых записях что бы узнавать ОДНИМ ИЗ ПЕРВЫХ о новых промокодах. 📢`,
      { attachment: `photo-178396242_457243804` }
    )
    if (config.promotip === "btc") message.user.btc += config.promovalue
    if (config.promotip === "balance") message.user.balance += config.promovalue
    if (config.promotip === "secretcase") message.user.secretcase += config.promovalue
    message.user.promo = true
    promo += 1
    ostalos = config.promolimit - promo
    return bot(`зачислено +${utils.sp(config.promovalue)}${config.promotip
      .toString()
      .replace(/btc/gi, "฿")
      .replace(/balance/gi, "$".replace(/secretcase/gi, "ПРЕМИУМ КЕЙСОВ"))} ✅
📢 Осталось ${ostalos} использований.`)
  }
})

gabella.bot(/^(?:бан)\s([0-9]+)\s(.*)\n([^]+)/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return bot("Доступ закрыт!")
  if (message.chatId !== 1384) return bot(`Банить можно только в беседе Администрации! ${smileerror}`)
  if (message.user.bban == true) return bot(`Создатель закрыл Вам доступ к банам/разбанам!`)
  const phrase = utils.pick(["😳", "😒", `😟`, `🙄`, `🤔`])
  if (!message.args[1] || !message.args[2] || !message.args[3])
    return bot(
      `использование:\n«Бан 53663674 15\nПостоянная авторизация»`,
      { attachment: "photo-178396242_457249041" },
      { attachment: "photo-178396242_457249040" }
    )
  message.args[3] = message.args[3].replace(/(\.|\,)/gi, ",")
  message.args[3] = message.args[3].replace(/(\  )/gi, "_")
  message.args[3] = message.args[3].replace(/(\[|\()/gi, "{")
  message.args[3] = message.args[3].replace(/(\]|\))/gi, "}")

  let zaprets1 = message.args[3].toLowerCase()
  var zapret =
    /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние|vto.pe|создатель)/
  var sss = zapret.test(zaprets1)

  if (zapret.test(zaprets1) == true || message.args[3].toLowerCase() === "") {
    var check = true
    return bot(`Запрщенные символы!`, { attachment: "photo-178396242_457249041" })
  }
  let text = message.args[3].toLowerCase()
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
  var lol = filter0.test(text)
  var lol1 = filter1.test(text)

  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true
    return bot(`ссылки запрещены! 🆘`, { attachment: "photo-178396242_457249041" })
  }
  if (message.args[2] >= 31) return bot(`укажите число не больше 30 дней. ${phrase}`)
  if (Number(message.args[1]) === message.user.id) return bot(`нельзя банить самого себя! 🚫`)
  vk.api.messages.send(
    {
      chat_id: 1412,
      message: `Администратор временно забнил игрока!\n\n🗣 Выдал бан: ${message.user.id}
🔎 Игровой ID: ${message.user.uid}\n➡ [id${user.id}|айди игрока]: ${message.args[1]}\n➡ [id${user.id}|Дней]: ${message.args[2]}\n➡ Причина: ${message.args[3]}`
    },
    { attachment: "photo-178396242_457246191" }
  )
  if (message.user.timers.banc >= 0) {
    await message.send(`[id${message.user.id}|${message.user.tag}], Лимит на выдачу банов. ${displayTime(message.user.timers.banc)} ${smileerror}`)
    return message.sendSticker(8471)
  }

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    if (user.ban == true) return bot(`данный игрок уже забанен ${phrase}`)

    getUnix() + message.args[2] * 86400000
    user.pizdenka1 = getUnix() + message.args[2] * 86400000
    user.prichina = `${message.args[3]}`
    message.user.hrust1 = getUnix() + 21600000
    message.user.timers.banc = 1800
    await bot(
      `вы ЗАБАНИЛИ игрока ${user.tag} на [${message.args[2]} Д] Причина: [${message.args[3]}] ${phrase}\n\nБан — один из способов контроля над действиями пользователей в Интернете. Как правило, бан заключается в лишении или ограничении каких-либо прав пользователя (на создание/отправление новых сообщений) если вы забанили пользователя без причины, Тем что он вам не нравится/по шутке друга/подругу, то вы будете лишены прав БАНИТЬ!`,
      { attachment: "photo-178396242_457246191" }
    )
    vk.api.messages.send({
      user_id: user.id,
      message: `Вы забанены на ${message.args[2]} Д.\nПричина: ${message.args[3]} ${phrase}`,
      attachment: "market-178396242_4183087"
    })
  }
})

gabella.bot(/^(?:unban|разбан|разбанить)\s([0-9]+)$/i, async (message, bot) => {
  const phrase = utils.pick(["😳", "😒", `😟`, `🙄`, `🤔`])
  const luckych = utils.pick(["🤤", "☺", `🙂`, `😁`, `😏`, "🤑"])
  if (message.user.settings.adm < 1) return bot(`Нет доступа.`)
  if (message.chatId !== 1384) return bot(`разбанить можно только в беседе Администрации! ${smileerror}`)
  if (message.user.bban == true) return bot(`Создатель закрыл Вам доступ к банам/разбанам!`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    if (user.polnom >= 10) return bot(`у данного игрока имеется привилегия против бана! ${phrase}`)
    if (user.uid === message.user.uid) return bot(`вы не можете разбанить самого себя ${phrase}`)
    vk.api.messages.send({
      chat_id: 1412,
      message: `Администратор разбанил игрока!\n\n🗣 Выдал разбан: ${message.user.id}
🔎 Игровой ID: ${message.user.uid}\n➡ [id${message.user.id}|Администратор]: ${message.args[1]}`
    })

    user.ban = false
    user.pizdenka1 = 2
    await bot(`вы РАЗБАНИЛИ игрока ${user.tag} ${luckych}`)
    vk.api.messages.send({ user_id: user.id, message: `▶ Администратор ${message.user.tag} разбанил вас, приятной игры! ${luckych}` })
  }
})
gabella.bot(/^(?:!бизнес2)\s([0-9]+)$/i, async (message, bot) => {
  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.business2 += 1
    user.bizlvl2 = 1
    user.business = true

    await bot(`выдаю [id${user.id}|${user.tag}] Бизнес 2. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за покупку БИЗНЕСА. Вы купили «Адронный коллайдер».\n1&#8419; Получить информацию о нём: "бизнес 2" 
	2&#8419; Забрать добытую материю: "бизнес снять 2"
	3&#8419; Продать бизнес: "продать бизнес 2"`
    })
  }
})

gabella.bot(/^(?:Планету)\s([0-9]+)$/i, async (message, bot) => {
  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.planet = 4
    user.lvlplan = 1
    user.gen = 0

    await bot(`выдаю [id${user.id}|${user.tag}] Солнце. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за покупку ПЛАНЕТЫ. Вы купили «СОЛНЦЕ».\n① Получить информацию о ней: "планета" 
	② Забрать Пыль: "планета собрать"
	③ Продать Солнце: "продать планету"`
    })
  }
})

gabella.bot(/^(?:!победа12)\s([0-9]+)$/i, async (message, bot) => {
  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.business = 12
    user.bizlvl = 1
    user.biz = 0

    await bot(`выдаю [id${user.id}|${user.tag}] Бизнес 2 за победу. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ ВЫ победили в конкурсе, вашь приз бизнес - «ЛУЧШИЙ БИЗНЕС».\n1&#8419; Получить информацию о нём: "бизнес" 
	2&#8419; Забрать прибыль: "бизнес снять"
	3&#8419; Продать бизнес: "продать бизнес"`
    })
  }
})

gabella.bot(/^(?:!победа2)\s([0-9]+)$/i, async (message, bot) => {
  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.business2 += 1
    user.bizlvl2 = 1
    user.business = true

    await bot(`выдаю [id${user.id}|${user.tag}] Бизнес 2 за победу. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ ВЫ победили в конкурсе, вашь приз бизнес - «Адронный коллайдер».\n1&#8419; Получить информацию о нём: "бизнес 2" 
	2&#8419; Забрать добытую материю: "бизнес снять 2"
	3&#8419; Продать бизнес: "продать бизнес 2"`
    })
  }
})

gabella.bot(/^(?:дпобеда)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(`Купите доступ.`)
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)
    if (message.args[2] > message.user.settings.limit)
      return bot(`твоя максимальная сумма для выдачи ${utils.sp(message.user.settings.limit)}$ ${smileerror}`)

    user.balance += message.args[2]

    await bot(`зачисляю игроку [id${user.id}|${user.tag}] ${utils.sp(message.args[2])}$ ${smilesuccess}

		💸 Старый баланс: ${bilo}$
		💸 Новый баланс: ${utils.sp(user.balance)}$`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ ВЫ победили в конкурсе, вашь приз -  ${utils.sp(message.args[2])}$!\n💸 На руках: ${utils.sp(user.balance)}$`
    })
  }
})

gabella.bot(/^(?:рпобеда)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.rating += message.args[2]

    await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} рейтинга. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ ВЫ победили в конкурсе, вашь приз -  ${utils.sp(message.args[2])}РЕЙТИНГА!\n У вас: ${utils.sp(user.rating)} рейтинга.`
    })
  }
})

gabella.bot(/^(?:бизнесы 15)$/i, async (message, bot) => {
  const sell = businesses3.find(x => x.id === Number(1))
  if (!sell) return
  if (message.user.business3) return bot(`у Вас уже есть этот бизнес.`)

  if (message.user.zp < sell.cost) return bot(`вам нужно 15.000 звездной пыли для покупки. 🌌`)
  else if (message.user.zp >= sell.cost) {
    message.user.zp -= sell.cost
    message.user.business3 = sell.id
    message.user.bizlvl3 = 1
    message.user.business = true

    return bot(
      `вы успешно купили бизнес «${sell.name}». 👽
	1&#8419; Получить информацию о нём: "бизнес 3" 
	2&#8419; Забрать добытую звёздную пыль: "бизнес снять 3"
	3&#8419; Продать бизнес: "продать бизнес 3"`,
      {
        attachment: sell.att
      }
    )
  }
})

gabella.bot(/^(?:!бизнес3)\s([0-9]+)$/i, async (message, bot) => {
  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.business3 = 1
    user.bizlvl3 = 1
    user.biz3 = 0
    user.business = true

    await bot(`выдаю [id${user.id}|${user.tag}] Бизнес 3. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ Спасибо за покупку БИЗНЕСА. Вы купили «Атомная электростанция».\n1&#8419; Получить информацию о нём: "бизнес 3" 
	2&#8419; Забрать добытую Звёздную пыль: "бизнес снять 3"
	3&#8419; Продать бизнес: "продать бизнес 3"`
    })
  }
})

gabella.bot(/^(?:!победа3)\s([0-9]+)$/i, async (message, bot) => {
  if (message.senderId !== 504991834 && message.user.settings.adm < 6) return bot(``, { attachment: "market-178396242_3882687" })

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)

    user.business3 += 1
    user.bizlvl3 = 1
    user.business = true

    await bot(`выдаю [id${user.id}|${user.tag}] Бизнес 3. ${smilesuccess}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `✅ ВЫ победили в конкурсе. ВАШ приз бизнес - «Атомная электростанция».\n1&#8419; Получить информацию о нём: "бизнес 3" 
	2&#8419; Забрать добытую Звёздную пыль: "бизнес снять 3"
	3&#8419; Продать бизнес: "продать бизнес 3"`
    })
  }
})

gabella.bot(/^(?:апобеда|апобеду)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.senderId !== 504991834 && message.senderId !== 576070765) return bot(`Брысь :)*`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.settings.adm = 1
    user.settings.report = true
    user.rating = 0
    user.farmslimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    user.sataka = 0
    user.bossyr = 0
    user.sataka1 = 0
    user.bossyr1 = 0
    user.settings.limit = 500000000000
    user.settings.limitdeneg = 200000000000
    user.limitbank = 9999999999999999999999999999999999999999999

    await bot(`выдано.`)
    vk.api.messages.send({
      user_id: user.id,
      message: `[id${user.id}|${user.tag}], вы выиграли в конкурсе привелегию администратор. Огромное спасибо за участие! 🙀

⃣ Выдача денег себе и другим игрокам.
Использование: «выдать [ID игрока] [сумма]»

⃣ Возможность отвечать на репорты.
Использование: «ответ [ID игрока] [ответ]»

⃣ Возможность бана/разбана игроков.
Использование: «бан/разбан [ID игрока] [причина]»

⃣ Возможность бана/разбана репорта.
Использование: «бр/рр [ID игрока]»

⃣ Возможность получить ссылку на случайную беседу.
Получить ссылку: «беседы»

⃣ Возможность получить профиль игрока.
Использование: «проф [VK игрока]»

⃣ Возможность кикать людей из бесед.
Использование: «кик [ID VK]»

⃣ Отключен лимит на количество ферм.

⃣ Ненастоящий профиль, команда: «фейкпроф»

🆕Выдача себе денег в определеном количестве.
Использование: «выдать [сумма]»

🆕Установить себе баланс в определеной сумме.
Использование: «установить [сумма]»


💯 Беседа для администрации Gabella Bot: https://vk.me/join/AJQ1d6x7oBfJd2TkLFE4_16R`
    })
  }
})
gabella.bot(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)

  return bot(`дата регистрации ${user.tag}: ${user.regDate}, (${moment(user.regDate, "L").fromNow()}).`)
})

gabella.bot(/^(?:созвать всех)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return
  await bot(`@all @online
		Игрок: [id${message.user.id}|${message.user.tag}] 
		Созвал всех с сообщением: ${message.args[1]}`)
})

gabella.bot(/^(?:!ответ|ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 2 && message.senderId !== 503040628 && message.user.otvet < 1) return bot(`нет доступа к ответам.`)
  if (message.chatId !== 1384) return bot(`отвечать на репорты можно только в беседе Администрации! ${smileerror}`)
  let zaprets1 = message.args[1].toLowerCase()
  var zapret =
    /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние|бля|блять|сука|пидр|пидорас|урод|слит|слив|взлом|взломаю|хуй|нахуй|пизда|блядь|уебать|ебать|еба|ебля|бля!|БЛЯДИАДА|БЛЯДИНА|БЛЯДИСТОСТЬ|БЛЯДОГОН|БЛЯДОСЛОВНИК|соси|сосни|саси|заебали|заебал|тупые|дура|дурак|слито|слитое|долбаеб|далбаеб|доебался|даебался|далбаёб|долбаёб|секс|порно|збс|заебись|пиздабол|писда|писдец|me|пиздец|#Сова|#сова|vk|#)/
  var sss = zapret.test(zaprets1)

  if (zapret.test(zaprets1) == true || message.args[1].toLowerCase() === "") {
    var check = true
    return message.send(`вы используете запрещенные слова/символы, ссылки и маты запрещены!\n😉`)
  }
  let text = message.args[1].toLowerCase()
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
  var lol = filter0.test(text)
  var lol1 = filter1.test(text)

  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true
    return bot(`подозрительная ссылка 🆘`)
  }
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (user.reps) return bot(`Данный игрок не писал репорт!`)
  message.send(
    `[id${message.user.id}|${message.user.tag}], данный [id${user.id}|пользователь] получил ваш ответ, спасибо что помогаете игрокам, кто будет активнее отвечать на репорты, получит любой донат.`
  )
  user.reports = 0
  user.reps = true
  message.user.votvet += 1
  vk.api.messages.send({
    chat_id: 1412,
    message: `🗣 Агент Поддержки #${message.user.id}.\n💬 Ответил игроку #${message.args[1]}: ${message.args[2]}\nВсегда с вами,\nКоманда Поддержки *gabellabot(Gabella Bot'a)`
  })
  vk.api.messages.send({
    user_id: user.id,
    message: `🗣 Агент Поддержки #${message.user.id}.\n💬 Ответил вам: ${message.args[2]}\nВсегда с вами,\nКоманда Поддержки *gabellabot(Gabella Bot'a)`
  })
})

gabella.bot(/^(?:накрутить)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.user.settings.adm < 3) return bot(`Купите доступ.`)
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    const bilo = utils.sp(user.balance)
    if (message.args[2] > message.user.settings.limit)
      return bot(`твоя максимальная сумма для выдачи ${utils.sp(message.user.settings.limit)}$ ${smileerror}`)

    user.balance += message.args[2]

    await bot(`зачисляю игроку [id${user.id}|${user.tag}] ${utils.sp(message.args[2])}$ ${smilesuccess}

		💸 Старый баланс: ${bilo}$
		💸 Новый баланс: ${utils.sp(user.balance)}$`)
    vk.api.messages.send({
      user_id: user.id,
      message: `📢 Администратор [id${message.user.id}|${message.user.tag}] выдал вам ${utils.sp(message.args[2])}$!\n💸 На руках: ${utils.sp(
        user.balance
      )}$`
    })
  }
})
gabella.bot(/^(?:!бан|!блок|бан)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 2 && message.senderId !== 50499183 && message.pomoshnik !== true)
    return bot(`нет доступа, купите зама или доступ к вечным банам.`)
  if (message.chatId !== 1384) return bot(`банить можно только в беседе Администрации! ${smileerror}`)
  if (message.args[2] < 1) return
  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`, { attachment: "photo-178396242_457249040" }, { attachment: "photo-178396242_457249041" })
    if (Number(message.args[1]) === message.user.id) return bot(`твой профиль защищен от самобана! 🚫`)
    if (user.settings.adm == 7) return bot(`нельзя банить создателя бота! 🙌`)
    if (user.settings.adm == 8) return bot(`нельзя банить ЗАМА создателя бота! 🙌`)
    if (message.user.settings.adm < user.settings.adm) return bot(`отань оть миня, у тя достюп ниже чем у него.`)
    vk.api.messages.send(
      {
        chat_id: 1412,
        message: `Администратор забнил навсегда игрока!\n\n🗣Админ: [id${message.user.id}|${message.user.id}] [id${message.user.id}|${message.user.tag}]
🔎 Игровой ID админа: ${message.user.uid}\n➡ ИГРОК: @id${user.id}\nНИК: [${user.id}|${user.tag}] ${message.args[1]}`
      },
      { attachment: "photo-178396242_457246192" }
    )

    user.ban = true

    await bot(
      `вы забанили навсегда игрока *id${user.id} (${user.tag}).\n\nБан — один из способов контроля над действиями пользователей в Интернете.\nКак правило, бан заключается в лишении или ограничении каких-либо прав пользователя (на создание/отправление новых сообщений) если вы забанили пользователя без причины, Тем что он вам не нравится/по шутке друга/подругу, то вы будете лишены прав БАНИТЬ!`,
      { attachment: "photo-199842099_457239019" }
    )
    vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт забанен навсегда.`, attachment: "market-178396242_4634984" })
  }
})

gabella.bot(/^(?:!разбанв|!разблок|разбанв)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 2 && message.senderId !== 504991834 && message.pomoshnik !== true)
    return bot(``, { attachment: "market-178396242_3882687" })
  if (message.chatId !== 1384) return bot(`разбанить можно только в беседе Администрации! ${smileerror}`)
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)
  vk.api.messages.send({
    chat_id: 1412,
    message: `Администратор разбанил вечный бан игрока!\n\n🗣 Выдал разбан: ${message.user.id}
🔎 Игровой ID: ${message.user.uid}\n➡ [id${message.user.id}|Ид Игрока]: ${message.args[1]}`
  })

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.ban = false

    saveUsers()
    await bot(`вы разбанили игрока *id${user.id} (${user.tag}).`)
    vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт разблокирован.` })
  }
})
gabella.bot(/^(?:промо вкл)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return

  clearPromo()
  return bot(`промокод включен! ${smilesuccess}`)
})

gabella.bot(/^(?:промо тип зп)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return
  config.promotip = "zp"
  saveConfig()
  return bot(`тип промокода: Пыли. ${smilesuccess}`)
})

gabella.bot(/^(?:промо тип btc)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return
  config.promotip = "btc"
  saveConfig()
  return bot(`тип промокода: Bitcoin. ${smilesuccess}`)
})

gabella.bot(/^(?:промо тип баланс)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return
  config.promotip = "balance"
  saveConfig()
  return bot(`тип промокода: Баланс. ${smilesuccess}`)
})

gabella.bot(/^(?:промо тип dk)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return
  config.promotip = "dk"
  saveConfig()
  return bot(`тип промокода: DonatCASE. ${smilesuccess}`)
})
gabella.bot(/^(?:промо)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 6) return
  config.promovalue = Number(message.args[1])
  saveConfig()
  return bot(`сумма промокода: ${config.promovalue}. ${smilesuccess}`)
})

gabella.bot(/^(?:промо лимит)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 6) return
  config.promolimit = Number(message.args[1])
  saveConfig()
  return bot(`лимит использований промокода: ${config.promolimit}. ${smilesuccess}`)
})
gabella.bot(/^(?:банп)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 1) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.settings.trade = false

    saveUsers()
    await bot(`вы закрыли доступ на передачу игроку *id${user.id} (${user.tag}).`)
    vk.api.messages.send({ user_id: user.id, message: `Вам закрыли доступ к передачам. ⛔` })
  }
})
gabella.bot(/^(?:разбанп)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.user.settings.adm < 1) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.settings.trade = true

    saveUsers()
    await bot(`вы открыли доступ к передачам игроку *id${user.id} (${user.tag}).`)
    vk.api.messages.send({ user_id: user.id, message: `Вам открыли доступ к передачам.` })
  }
})

gabella.bot(/^(?:бр)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)
  if (Number(message.args[1]) === message.user.id) return bot(`нельзя банить самого себя! 🚫`)

  if (message.user.settings.adm < 2) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.settings.report = false

    saveUsers()
    await bot(`вы закрыли доступ к репорту игроку *id${user.id} (${user.tag}).`)
    vk.api.messages.send({ user_id: user.id, message: `Вам закрыли доступ к репорту. ⛔` })
  }
})
gabella.bot(/^(?:рр)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)
  if (Number(message.args[1]) === message.user.id) return bot(`нельзя разбанить самого себя! 🚫`)

  if (message.user.settings.adm < 2) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.settings.report = true

    saveUsers()
    await bot(`вы открыли доступ к репортам игроку *id${user.id} (${user.tag}).`)
    vk.api.messages.send({ user_id: user.id, message: `Вам открыли доступ к репортам.` })
  }
})

gabella.bot(/^(?:выдать)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return
  await bot(`использование: «выдать [ид] [сумма]» 😯`)
})
gabella.bot(/^(?:!бан)$/i, async (message, bot) => {
  if (message.user.settings.adm < 2) return
  await bot(`использование: «!бан [ид]» 😯`)
})
gabella.bot(/^(?:!разбан)$/i, async (message, bot) => {
  if (message.user.settings.adm < 3) return
  await bot(`использование: «!разбан [ид]» 😯`)
})
gabella.bot(/^(?:Бот кик)?(\s[^]+)?$/i, async message => {
  if (message.user.settings.adm < 1) return bot(`Вы не администратор.`)
  try {
    if (!message.args[1]) {
      if (!message.forwards[0]) return message.reply(`Пример: кик [ссылка]`)
      message.kickUser(message.forwards[0].senderId)
      return message.reply(`noльзoвaтeль ycneшно кикнyт`)
    } else {
      message.args[1] = message.args[1].replace(/https/gi, "")
      message.args[1] = message.args[1].replace(/http/gi, "")
      message.args[1] = message.args[1].replace(/\:/gi, "")
      message.args[1] = message.args[1].replace(/m\.vk\.com/gi, "")
      message.args[1] = message.args[1].replace(/vk\.com/gi, "")
      message.args[1] = message.args[1].replace(/\//gi, "")

      let [info] = await vk.api.users.get({
        user_ids: message.args[1]
      })
      if (!info) return message.reply(`Ошибка. Возможные причины:\n1. В данной беседе Gabella не Администратор\n2. Такого игрока нет в беседе.`)
      message.kickUser(info.id)
      return message.reply(`пользователь кикнут`)
    }
  } catch (err) {
    return message.reply(`[ERROR] › ${err.message}`)
  }
})

gabella.bot(/^(?:проф|профиль)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1 && message.user.prem < 1) return bot(``, { attachment: "market-178396242_3882687" })
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (user.uid === message.user.uid) return bot(`неверный ID`)
  let text = ``
  text += `Профиль игрока [id${user.id}|${user.tag}]\n`
  clanid = user.clanid
  text += `\n✨ Привилегии игрока:\n`
  text += `🔎 Игровой ID: ${user.gameuid}\n`
  text += `💾 VK ID: ${user.id}\n`
  if (user.pomoshnik) text += `🔥 Помощник Создателя.\n`
  if (user.settings.adm) text += `${adm[user.settings.adm - 1].icon} ${adm[user.settings.adm - 1].name}\n`
  if (user.sozd) text += `${sozd[user.sozd - 1].icon} ${sozd[user.sozd - 1].name}\n`
  if (user.zam) text += `${zam[user.zam - 1].icon} ${zam[user.zam - 1].name}\n`
  if (user.prem) text += `${prem[user.prem - 1].icon} ${prem[user.prem - 1].name}\n`
  if (user.vip) text += `${vip[user.vip - 1].icon} ${vip[user.vip - 1].name}\n`
  if (user.ko) text += `${ko[user.ko - 1].icon} ${ko[user.ko - 1].name}\n`
  if (user.kor) text += `${kor[user.kor - 1].icon} ${kor[user.kor - 1].name}\n`
  if (user.don) text += `${don[user.don - 1].icon} ${don[user.don - 1].name}\n`
  if (user.hel) text += `${hel[user.hel - 1].icon} ${hel[user.hel - 1].name}\n`
  if (user.ya) text += `${ya[user.ya - 1].icon} ${ya[user.ya - 1].name}\n`
  if (user.an) text += `${an[user.an - 1].icon} ${an[user.an - 1].name}\n`
  if (user.orig) text += `${orig[user.orig - 1].icon} ${orig[user.orig - 1].name}\n`
  if (user.pod) text += `${pod[user.pod - 1].icon} ${pod[user.pod - 1].name}\n`
  if (user.cov) text += `${cov[user.cov - 1].icon} ${cov[user.cov - 1].name}\n`
  if (user.po) text += `${po[user.po - 1].icon} ${po[user.po - 1].name}\n`
  if (user.pan) text += `${pan[user.pan - 1].icon} ${pan[user.pan - 1].name}\n`
  if (user.soz) text += `${soz[user.soz - 1].icon} ${soz[user.soz - 1].name}\n`
  if (clans[clanid]) {
    text += `⚔ ${user.tag} состоит в клане: ${clans[clanid].name}\n`
  }
  if (user.vampir) text += `🧛 Вампир\n`
  if (user.prez) text += `🤵 Мэр\n`
  text += `\n🏠 Статистика игрока:\n`
  text += `🏆 У игрока опыта: ${utils.sp(user.opit)}\n`
  text += `💰 Баланс игрока: ${utils.sp(user.balance)}$\n`
  text += `💳 Денег в банке: ${utils.sp(user.bank)}$\n`
  text += `👑 GabellaCoin: ${utils.sp(user.donat)}\n`
  text += `💽 Биткоинов: ${utils.sp(user.btc)}฿\n`
  text += `👑 Рейтинг: ${utils.sp(user.rating)}\n`
  text += `🏋 Энергии у игрока: ${utils.sp(user.energy)}\n`
  text += `🔗 Ссылка на VK профиль игрока: vk.com/id${user.id}\n`

  if (
    user.transport.car ||
    user.transport.yacht ||
    user.transport.airplane ||
    user.transport.helicopter ||
    user.misc.odezda ||
    user.realty.home ||
    user.realty.apartment ||
    user.misc.phone ||
    user.misc.pistolet ||
    user.misc.telivisor ||
    user.planet ||
    user.misc.farm ||
    user.business ||
    user.misc.pet ||
    user.energy ||
    user.opit ||
    user.clan ||
    user.misc.computer ||
    user.business2
  ) {
    text += `\n🔑 Имущество игрока:\n`

    if (user.vvork) text += `⠀💼 Работа: ${vvorks[user.vvork - 1].name}\n`
    if (user.stran) text += `⠀💒 Страна: ${strana[user.stran - 1].name}\n`
    if (user.gorod) text += `⠀🔥 Город: ${user.gorod}.\n`

    if (user.transport.car) text += `⠀🚗 Машина: ${cars[user.transport.car - 1].name}\n`
    if (user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[user.transport.yacht - 1].name}\n`
    if (user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[user.transport.airplane - 1].name}\n`
    if (user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[user.transport.helicopter - 1].name}\n`

    if (user.realty.home) text += `⠀🏠 Дом: ${homes[user.realty.home - 1].name}\n`
    if (user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[user.realty.apartment - 1].name}\n`

    if (user.misc.odezda) text += `⠀👘 Одежда: ${odezdi[user.odezda - 1].name}\n`

    if (user.misc.pistolet) text += `⠀🔫 Пистолет: ${pistolets[user.misc.pistolet - 1].name}\n`
    if (user.misc.avtomat) text += `⠀💣 Автоматы: ${avtomats[user.misc.avtomat - 1].name}\n`
    if (user.misc.phone) text += `⠀📱 Телефон: ${phones[user.misc.phone - 1].name}\n`
    if (user.misc.telivisor) text += `⠀💻 Телевизор: ${telivisors[user.misc.telivisor - 1].name}\n`
    if (user.misc.computer) text += `⠀🖥 Компьютер: ${computers[user.misc.computer - 1].name}\n`
    if (user.misc.pet) text += `⠀${pets[user.misc.pet - 1].icon} Питомец: ${pets[user.misc.pet - 1].name}\n`
    if (user.planet) text += `⠀${planets[user.planet - 1].icon} Планета: ${planets[user.planet - 1].name}\n`
    if (user.misc.farm) text += `⠀🔋 Фермы: ${farms[user.misc.farm - 1].name} (x${user.farms})\n`
    if (user.business) text += `⠀${businesses[user.business - 1].icon} Бизнес: ${businesses[user.business - 1].name}\n`
    if (user.business2) text += `⠀${businesses2[user.business2 - 1].icon} Второй бизнес: ${businesses2[user.business2 - 1].name}\n`
    if (user.business3) text += `⠀${businesses3[user.business3 - 1].icon} Третий бизнес: ${businesses3[user.business3 - 1].name}\n`
  }

  text += `\n⚠ Краткая информация:\n`

  text += `\n⏰ Регистрация: ${user.regDate}, (${moment(user.regDate, "L").fromNow()}).\n`
  text += `🔌 Последняя активность: ${moment(user.vset, "L").fromNow()}.\n`
  if (user.ban) text += ` ⛔ Забанен навсегда\n`
  if (user.pizdenka1 > getUnix()) text += ` ⛔ Забанен на ${unixStampLeft(user.pizdenka1 - Date.now())}\n`
  if (user.pizdenka1 > getUnix()) text += ` Причина: ${user.prichina}.\n`

  return bot(`профиль игрока №${user.gameuid}\n${text}`)
})

gabella.bot(/^(?:проф|профиль)\s(\s?https\:\/\/vk\.com\/)?([^]+)?$/i, async (message, bot) => {
  if (message.user.settings.adm < 1 && message.user.prem < 1) return bot(``, { attachment: "market-178396242_3882687" })
  var domain = message.args[2].split(" ")
  vk.api
    .call("utils.resolveScreenName", {
      screen_name: message.args[2]
    })
    .then(res => {
      let user = users.find(x => x.id === Number(res.object_id))
      if (!user) return bot(`неверная ссылка ${smileerror}`)

      let text = ``
      text += `Профиль игрока [id${user.id}|${user.tag}]\n`
      clanid = user.clanid
      text += `\n✨ Привилегии игрока:\n`
      text += `🔎 Игровой ID: ${user.gameuid}\n`
      text += `💾 VK ID: ${user.id}\n`
      if (user.pomoshnik) text += `🔥 Помощник Создателя.\n`
      if (user.settings.adm) text += `${adm[user.settings.adm - 1].icon} ${adm[user.settings.adm - 1].name}\n`
      if (user.sozd) text += `${sozd[user.sozd - 1].icon} ${sozd[user.sozd - 1].name}\n`
      if (user.zam) text += `${zam[user.zam - 1].icon} ${zam[user.zam - 1].name}\n`
      if (user.prem) text += `${prem[user.prem - 1].icon} ${prem[user.prem - 1].name}\n`
      if (user.vip) text += `${vip[user.vip - 1].icon} ${vip[user.vip - 1].name}\n`
      if (user.ko) text += `${ko[user.ko - 1].icon} ${ko[user.ko - 1].name}\n`
      if (user.kor) text += `${kor[user.kor - 1].icon} ${kor[user.kor - 1].name}\n`
      if (user.don) text += `${don[user.don - 1].icon} ${don[user.don - 1].name}\n`
      if (user.hel) text += `${hel[user.hel - 1].icon} ${hel[user.hel - 1].name}\n`
      if (user.ya) text += `${ya[user.ya - 1].icon} ${ya[user.ya - 1].name}\n`
      if (user.an) text += `${an[user.an - 1].icon} ${an[user.an - 1].name}\n`
      if (user.orig) text += `${orig[user.orig - 1].icon} ${orig[user.orig - 1].name}\n`
      if (user.pod) text += `${pod[user.pod - 1].icon} ${pod[user.pod - 1].name}\n`
      if (user.cov) text += `${cov[user.cov - 1].icon} ${cov[user.cov - 1].name}\n`
      if (user.po) text += `${po[user.po - 1].icon} ${po[user.po - 1].name}\n`
      if (user.pan) text += `${pan[user.pan - 1].icon} ${pan[user.pan - 1].name}\n`
      if (user.soz) text += `${soz[user.soz - 1].icon} ${soz[user.soz - 1].name}\n`
      if (clans[clanid]) {
        text += `⚔ ${user.tag} состоит в клане: ${clans[clanid].name}\n`
      }
      if (user.vampir) text += `🧛 Вампир\n`
      if (user.prez) text += `🤵 Мэр\n`
      text += `\n🏠 Статистика игрока:\n`
      text += `🏆 У игрока опыта: ${utils.sp(user.opit)}\n`
      text += `💰 Баланс игрока: ${utils.sp(user.balance)}$\n`
      text += `💳 Денег в банке: ${utils.sp(user.bank)}$\n`
      text += `👑 GabellaCoin: ${utils.sp(user.donat)}\n`
      text += `💽 Биткоинов: ${utils.sp(user.btc)}฿\n`
      text += `👑 Рейтинг: ${utils.sp(user.rating)}\n`
      text += `🏋 Энергии у игрока: ${utils.sp(user.energy)}\n`
      text += `🔗 Ссылка на VK профиль игрока: vk.com/id${user.id}\n`

      if (
        user.transport.car ||
        user.transport.yacht ||
        user.transport.airplane ||
        user.transport.helicopter ||
        user.misc.odezda ||
        user.realty.home ||
        user.realty.apartment ||
        user.misc.phone ||
        user.misc.pistolet ||
        user.misc.telivisor ||
        user.planet ||
        user.misc.farm ||
        user.business ||
        user.misc.pet ||
        user.energy ||
        user.opit ||
        user.clan ||
        user.misc.computer ||
        user.business2
      ) {
        text += `\n🔑 Имущество игрока:\n`

        if (user.vvork) text += `⠀💼 Работа: ${vvorks[user.vvork - 1].name}\n`
        if (user.stran) text += `⠀💒 Страна: ${strana[user.stran - 1].name}\n`
        if (user.gorod) text += `⠀🔥 Город: ${user.gorod}.\n`

        if (user.transport.car) text += `⠀🚗 Машина: ${cars[user.transport.car - 1].name}\n`
        if (user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[user.transport.yacht - 1].name}\n`
        if (user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[user.transport.airplane - 1].name}\n`
        if (user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[user.transport.helicopter - 1].name}\n`

        if (user.realty.home) text += `⠀🏠 Дом: ${homes[user.realty.home - 1].name}\n`
        if (user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[user.realty.apartment - 1].name}\n`

        if (user.misc.odezda) text += `⠀👘 Одежда: ${odezdi[user.odezda - 1].name}\n`

        if (user.misc.pistolet) text += `⠀🔫 Пистолет: ${pistolets[user.misc.pistolet - 1].name}\n`
        if (user.misc.avtomat) text += `⠀💣 Автоматы: ${avtomats[user.misc.avtomat - 1].name}\n`
        if (user.misc.phone) text += `⠀📱 Телефон: ${phones[user.misc.phone - 1].name}\n`
        if (user.misc.telivisor) text += `⠀💻 Телевизор: ${telivisors[user.misc.telivisor - 1].name}\n`
        if (user.misc.computer) text += `⠀🖥 Компьютер: ${computers[user.misc.computer - 1].name}\n`
        if (user.misc.pet) text += `⠀${pets[user.misc.pet - 1].icon} Питомец: ${pets[user.misc.pet - 1].name}\n`
        if (user.planet) text += `⠀${planets[user.planet - 1].icon} Планета: ${planets[user.planet - 1].name}\n`
        if (user.misc.farm) text += `⠀🔋 Фермы: ${farms[user.misc.farm - 1].name} (x${user.farms})\n`
        if (user.business) text += `⠀${businesses[user.business - 1].icon} Бизнес: ${businesses[user.business - 1].name}\n`
        if (user.business2) text += `⠀${businesses2[user.business2 - 1].icon} Второй бизнес: ${businesses2[user.business2 - 1].name}\n`
        if (user.business3) text += `⠀${businesses3[user.business3 - 1].icon} Третий бизнес: ${businesses3[user.business3 - 1].name}\n`
      }

      text += `\n⚠ Краткая информация:\n`

      text += `\n⏰ Регистрация: ${user.regDate}, (${moment(user.regDate, "L").fromNow()}).\n`
      text += `🔌 Последняя активность: ${moment(user.vset, "L").fromNow()}.\n`
      if (user.marriage.partner) text += `\n👬 В браке с: [id${users[user.marriage.partner].id}|${users[user.marriage.partner].tag}]`
      if (user.ban) text += ` ⛔ Забанен навсегда\n`
      if (user.pizdenka1 > getUnix()) text += ` ⛔ Забанен на ${unixStampLeft(user.pizdenka1 - Date.now())} Причина: ${user.prichina}.\n`
      return bot(`профиль игрока №${user.gameuid}\n${text}`)
    })
})

gabella.bot(/^(?:!обнулитьбаланс)\s?([0-9]+)?/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (message.senderId !== 504991834 && message.senderId !== 576070765) return message.send(`Брысь`)
  if (!message.args[1] || !users[message.args[1]]) return message.send(`Использование: 'обнулить [ID]'`)
  users[message.args[1]].bank = 0
  users[message.args[1]].rating = 0
  users[message.args[1]].balance = 100000000000
  users[message.args[1]].btc = 0

  return message.send(`Вы обнулили пользователя [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`)
  console.log(`Был обнулён игрок id${users[message.args[1]].id}`)
  console.log(``)
  saveUsers()
})
gabella.bot(/^(?:!адм|!админ)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

  if (message.senderId !== 504991834 && message.senderId !== 576070765 && message.senderId !== 571259308) return message.send(`брысь.`)
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))

  if (message.args[2] <= -0) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.settings.adm = message.args[2]
    user.settings.report = true
    user.rating = 0
    user.farmslimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    user.sataka = 0
    user.bossyr = 0
    user.sataka1 = 0
    user.bossyr1 = 0
    user.settings.limit = 500000000000
    user.settings.limitdeneg = 200000000000
    user.limitbank = 100000000

    await bot(`вы выдали игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] ${utils.sp(message.args[2])} лвл админки.`)
  }
})

gabella.bot(/^(?:отдатьответы)\s([0-9]+)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.senderId !== 504991834 && message.senderId !== 576070765) return bot(`Брысь :)*`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.otvet = 1

    await bot(`вы выдали игроку [@id${user.id}(Пользователю)] ответы.`)
  }
})

gabella.bot(/^(?:забратьответы)\s([0-9]+)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (message.senderId !== 504991834 && message.senderId !== 576070765) return bot(`Брысь :)*`)

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    user.otvet = -99999999999999999999

    await bot(`вы забрали у игрока [@id${user.id}(Пользователю)] доступ ответам.`)
  }
})
gabella.bot(/^(?:!обнулить|обнулить)\s?([0-9]+)?/i, async (message, args, bot) => {
  let user = users.find(x => x.uid === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (message.senderId !== 504991834 && message.senderId !== 576070765) return message.send(`Вам недоступно.`)
  if (!message.args[1] || !users[message.args[1]]) return message.send(`Использование: 'обнулить [ID]'`)
  users[message.args[1]].bank = 0
  users[message.args[1]].rating = 0
  users[message.args[1]].balance = 0
  users[message.args[1]].btc = 0
  users[message.args[1]].business = 0
  users[message.args[1]].pistolet = 0
  users[message.args[1]].phone = 0
  users[message.args[1]].tank = 0
  users[message.args[1]].avtomat = 0
  users[message.args[1]].kvadr = 0
  users[message.args[1]].moto = 0
  users[message.args[1]].korabl = 0
  users[message.args[1]].partner = 0
  users[message.args[1]].car = 0
  users[message.args[1]].opit = 0
  users[message.args[1]].yacht = 0
  users[message.args[1]].platinium = 0
  users[message.args[1]].surprise = 0
  users[message.args[1]].pachal = 0
  users[message.args[1]].helicopter = 0
  users[message.args[1]].airplane = 0
  users[message.args[1]].computer = 0
  users[message.args[1]].biz = 0
  users[message.args[1]].pet = 0
  users[message.args[1]].farm_btc = 0
  users[message.args[1]].settings.adm = 0
  users[message.args[1]].settings.report = true
  users[message.args[1]].farms = 0
  users[message.args[1]].bisnesses13 = 0
  users[message.args[1]].bossyr = 0
  users[message.args[1]].sataka = 1
  users[message.args[1]].bossyr1 = 0
  users[message.args[1]].sataka1 = 1
  users[message.args[1]].farm = 0
  users[message.args[1]].misc.farm = 0
  users[message.args[1]].misc.pistolet = 0
  users[message.args[1]].misc.avtomat = 0
  users[message.args[1]].misc.phone = 0
  users[message.args[1]].misc.telivisor = 0
  users[message.args[1]].misc.odezda = 0
  users[message.args[1]].misc.pristavka = 0
  users[message.args[1]].misc.pet = 0
  users[message.args[1]].gon = 0
  users[message.args[1]].transport.helicopter = 0
  users[message.args[1]].vvork = 0
  users[message.args[1]].business2 = 0
  users[message.args[1]].bizlvl2 = 0
  users[message.args[1]].biz2 = 0
  users[message.args[1]].business3 = 0
  users[message.args[1]].bizlvl3 = 0
  users[message.args[1]].biz3 = 0

  return message.send(`Вы обнулили пользователя [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`)
  console.log(`Был обнулён игрок id${users[message.args[1]].id}`)
  console.log(``)
  saveUsers()
})
/*==========================================================================================================*/
/*===============================================REPORT====================================================*/
gabella.bot(/^(?:репорт|реп|rep|report)\s([^]+)$/i, async (message, bot) => {
  if (!message.args[1]) return bot(`Для того чтобы написать в репорт напиши 'Репорт [сообщение]'.`)

  if (message.user.reports > getUnix()) return bot(`Вы недавно отправляли репорт.`)

  let zaprets1 = message.args[1].toLowerCase()
  var zapret =
    /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t  r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|com|ru|pw|pro|net|co|art|website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние|бля|блять|сука|пидр|пидорас|урод|слит|слив|взлом|взломаю|хуй|нахуй|пизда|блядь|уебать|ебать|еба|ебля|бля!|БЛЯДИАДА|БЛЯДИНА|БЛЯДИСТОСТЬ|БЛЯДОГОН|БЛЯДОСЛОВНИК|соси|сосни|саси|заебали|заебал|тупые|дура|дурак|слито|слитое|долбаеб|далбаеб|доебался|даебался|далбаёб|долбаёб|секс|порно|збс|заебись|пиздабол|писда|писдец|me|пиздец|#Сова|#сова|vk|#)/
  var sss = zapret.test(zaprets1)

  if (zapret.test(zaprets1) == true || message.args[1].toLowerCase() === "") {
    var check = true
    return message.send(`вы используете запрещенные слова/символы, ссылки и маты запрещены!\n😉`)
  }
  let text = message.args[1].toLowerCase()
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
  var lol = filter0.test(text)
  var lol1 = filter1.test(text)
  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true
    return bot(`подозрительная ссылка 🆘`)
  }
  message.args[1] = message.args[1].replace(/(\[|\()/gi, "{")
  message.args[1] = message.args[1].replace(/(\]|\))/gi, "}")
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "?")
  message.args[1] = message.args[1].replace(/(\|)/gi, "/")
  if (message.user.settings.report == false) return message.send(`[id${message.user.id}|${message.user.tag}], вам отключен репорт ${smileerror}`)
  message.user.vreps += 1
  vk.api.messages.send({
    chat_id: 1384,
    forward_messages: message.id,
    message: `Поступил новый репорт от игрока!\n\n⏰Репорт был отправлен: ${data()} в ${time()}\n👤Ник: *id${message.user.id}(${
      message.user.tag
    })\n📨 Отправил: ${message.user.id}\n📄Игровой ID: ${message.user.uid}\n🕚Всего репортов от игрока: ${message.user.vreps}\n⚠Текст репорта: ${
      message.args[1]
    }\n`
  })
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "?")
  if (message.user.settings.report == false) return message.send(`[id${message.user.id}|${message.user.tag}], вам отключен репорт ${smileerror}`)
  vk.api.messages.send({
    chat_id: 1412,
    forward_messages: message.id,
    message: `Поступил новый репорт от игрока!\n\n⏰Репорт был отправлен: ${data()} в ${time()}\n👤Ник: *id${message.user.id}(${
      message.user.tag
    })\n📨 Отправил: ${message.user.id}\n📄Игровой ID: ${message.user.uid}\n🕚Всего репортов от игрока: ${message.user.vreps}\n⚠Текст репорта: ${
      message.args[1]
    }\n`
  })
  message.user.reports = getUnix() + 600000
  message.user.reps = false
  message.send(`[id${message.user.id}|${message.user.tag}], ваше сообщение отправлено.`)
  return message.sendSticker(11241)
})
/*==========================================================================================================*/
/*=================================ПРИНТЕРЫ================================================================*/
setInterval(async () => {
  users.map(user => {
    if (user.printer) {
      const pribil = printeri.find(x => x.id === user.printer)

      user.pribil += pribil.earn
    }
  })
}, 3600000)

gabella.bot(/^(?:1234всем)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return bot(`нет доступа.`)
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].pomoshnik = false
      users[i].gorodpod = 0
      users[i].gorod = null
      users[i].gorodlikes = 0
      users[i].gorodliketimer = 0
      users[i].gorodliketimer1 = 0
      users[i].gorodliketimer2 = 0
      users[i].gorodliketimer3 = 0
    }
  }
  return message.send(`готово!`)
})

gabella.bot(/^(?:принтеры)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(
      `денежные принтеры:
🖨 1. Песатная машинка: 5$/час (500.000.000.000$)
🖨 2. Cassida 7700 UV/MG: 10млрд$/час (1.500.000.000.000$)
🖨 3. HP LaserJet Enterprise: 35млрд$/час (15.000.000.000.000$)
🖨 4. iGen3: 75млрд$/час (50.000.000.000.000$)

🛒 Для покупки введите "Принтеры [номер]"`,
      { attachment: "photo-178396242_457249169" }
    )

  const sell = printeri.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.printer)
    return bot(`у Вас уже есть принтер (${printeri[message.user.printer - 1].name})! 🙌 
		чтобы продать его отправьте «Продать принтер»`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`)
  else if (message.user.balance >= message.args[1]) {
    message.user.balance -= sell.cost
    message.user.printer = sell.id

    return bot(`вы успешно купили «${sell.name}» за ${utils.sp(sell.cost)}$`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/^(?:принтер)$/i, async (message, bot) => {
  if (!message.user.printer)
    return bot(`у Вас нет принтера! ${smileerror} 
Для выбора принтеры отправьте «Принтеры»`)

  const prin = printeri.find(x => x.id === message.user.printer)
  var lvlcash = prin.earn
  var updprice2 = Math.floor(printeri[message.user.printer - 1].cost * 2) * message.user.bizlvl
  return bot(
    `информация «${prin.name}»:
💸 Печатает ${utils.sp(lvlcash)}$/час 
💰 Напечатал: ${utils.sp(message.user.pribil)}$

🏧 Снять деньги с принтера, команда: «принтер снять»`,
    {
      attachment: `${prin.att}`,
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Принтер"
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
  return message.sendSticker(53696)
})

gabella.bot(/^(?:принтер)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1]) return bot(``)

  const sell = printeri.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.printer)
    return bot(`у Вас уже есть принтер (${printeri[message.user.printer - 1].name})! 🙌 
		чтобы продать его отправьте «Продать принтер»`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`)
  else if (message.user.balance >= message.args[1]) {
    message.user.balance -= sell.cost
    message.user.printer = sell.id

    return bot(
      `вы успешно купили принтер «${sell.name}» ${smilesuccess}
			💰 Ваш баланс: ${utils.sp(message.user.balance)}$`,
      {
        attachment: sell.att
      }
    )
  }
})

gabella.bot(/(?:принтер)\s(?:снять)$/i, async (message, bot) => {
  if (!message.user.printer) return bot(`у вас нет принтера.`)
  if (!message.user.pribil) return bot(`у вас нет денег на счёте этого принтера`)

  const biz_balance = message.user.pribil

  message.user.balance += message.user.pribil
  message.user.pribil = 0

  return bot(`вы сняли со счёта своего принтера ${utils.sp(biz_balance)}$`)
  return message.sendSticker(11281)
})
/*==========================================================================================================*/
/*================================ПИТОМЦЫ===================================================================*/
gabella.bot(/(?:питомец поход)$/i, async (message, bot) => {
  if (message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`)
  if (message.user.petradost < 20) return bot(`Ваш питомец не хочет идти в поход, он хочет с вами поиграть. 😍`)
  if (message.user.petgolod < 20) return bot(`Ваш питомец очень сильно хочет кушать, покормите его! 🍗`)
  else {
    const pet = pets.find(x => x.id === message.user.misc.pet)
    if (message.user.timers.poxod >= 0) {
      await bot(`ваш питомец сильно устал, осталось ${displayTime(message.user.timers.poxod)} ${smileerror}`)
      return message.sendSticker(6679)
    }

    message.user.timers.poxod = 3600

    let cashfind = utils.random(pet.min, pet.max)
    message.user.balance += cashfind

    bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}$. Улучшайте своего питомца! ${smilesuccess}`)
    return message.sendSticker(6690)
  }
})

gabella.bot(/(?:питомец цирк)$/i, async (message, bot) => {
  if (message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`)
  if (message.user.petradost < 10) return bot(`Ваш питомец не в настроении, он хочет с вами поиграть. 😍`)
  if (message.user.petgolod < 20) return bot(`Ваш питомец очень сильно хочет кушать, покормите его! 🍗`)

  if (message.user.timers.cirk >= 0)
    return bot(`вы сможете пойти в цирк только через ${displayTime(message.user.timers.cirk)} ${smileerror}`, {
      attachment: "photo-178396242_457247209"
    })

  let situac = utils.random(1, 2)

  if (situac === 1) {
    let cirkcash = utils.random(60, 16000000)
    message.user.balance += cirkcash
    message.user.timers.cirk = 3600

    message.send(
      `🤑🎪 [id${message.user.id}|${message.user.tag}], Ваш питомец заработал ${utils.sp(cirkcash)} $, выступая в цирке! 🤑🐹

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше ДЕНЕГ! 💯`,
      { attachment: "photo-178396242_457247208" }
    )
  }
  if (situac === 2) {
    let cirkcash = utils.random(60, 1600000)
    message.user.balance += cirkcash
    message.user.timers.cirk = 3600

    message.send(
      `🤑🎪 [id${message.user.id}|${message.user.tag}], Ваш питомец заработал ${utils.sp(cirkcash)} $, выступая в цирке! 🤑🐹

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше ДЕНЕГ! 💯`,
      { attachment: "photo-178396242_457247208" }
    )
  }
})

gabella.bot(/(?:питомец)$/i, async (message, bot) => {
  let texti1 = ``
  let texti2 = ``
  let text3 = ``
  if (message.user.petgolod < 50) texti1 += `(напиши "питомец покормить")`
  if (message.user.petradost < 50) texti2 += `(напиши "питомец играть")`
  if (message.user.petlvl < 101)
    text3 += `⏫ Улучшение за: ${utils.sp(petsupd[message.user.misc.pet - 1].cost * message.user.petlvl)}$ (напиши "питомец улучшить")`
  if (message.user.misc.pet < 1)
    return bot(`у Вас нет питомца. ${smileerror} 
❓ Для покупки введите «Питомцы»`)
  else {
    return bot(
      `информация: 
${pets[message.user.misc.pet - 1].icon} Питомец: «${pets[message.user.misc.pet - 1].name}» 

🍗 Сытость: ${message.user.petgolod} % ${texti1} 
😍 Радость: ${message.user.petradost} % ${texti2} 

${text3}
⭐ Уровень: ${message.user.petlvl}`,
      {
        attachment: pets[message.user.misc.pet - 1].att,
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец покормить"
                },
                color: "secondary"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец играть"
                },
                color: "secondary"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец поход"
                },
                color: "secondary"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец цирк"
                },
                color: "secondary"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец улучшить"
                },
                color: "secondary"
              }
            ]
          ]
        })
      }
    )
  }
})
gabella.bot(/(?:таксовать)$/i, async (message, bot) => {
  if (message.user.transport.car < 6)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет машины.
Список всех машин по команде: «машины» 🚗`)
  if (message.user.opit < 3000)
    return bot(`что бы Таксовать вам нужно 3 000 опыта.
Копайте железо и увеличивайте свой опыт! ⚠`)
  if (message.user.energy < 1)
    return bot(`вы сильно устали.
⚠ Энергия появляется каждые 3 минуты!`)

  taxicash = utils.random(987923, 3416011)
  message.user.energy -= 1
  message.user.balance += taxicash

  if (message.user.energy < 1) {
    setTimeout(() => {
      message.user.energy = 10
    }, 300000)

    return bot(`вы заработали ${utils.sp(taxicash)}$
Энергия закончилась. ⚠`)
  }

  if (message.user.energy > 0)
    bot(`вы заработали ${utils.sp(taxicash)}$ 🚕`, {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `Таксовать`
              },
              color: "positive"
            }
          ]
        ]
      })
    })
})

gabella.bot(/(?:питомец улучшить)$/i, async (message, bot) => {
  if (message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`)
  else {
    if (message.user.balance < petsupd[message.user.misc.pet - 1].cost)
      return bot(`у Вас недостаточно денег. ${smileerror}`, { attachment: "market-193082125_3859119" })
    if (message.user.petlvl >= 100) return bot(`Вы достигли максимального уровня питомца, поздравляем!`)

    var priceupd = petsupd[message.user.misc.pet - 1].cost * message.user.petlvl

    var lvlpoupd = message.user.petlvl + 1

    message.user.balance -= priceupd
    message.user.petlvl += 1

    return bot(
      `питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`,
      {
        attachment: pets[message.user.misc.pet - 1].att,
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец"
                },
                color: "secondary"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец улучшить"
                },
                color: "secondary"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/^(?:питомец кличка|питомец имя)\s(.*)$/i, async (message, bot) => {
  if (message.user.misc.pet == [])
    return bot(
      `у вас нет питомца, давай исправлять! ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}
📚 Команда: питомцы`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "🦊 Питомцы"
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )
  if (message.args[1].length >= 11)
    return bot(`вы указали слишком длинную кличку ${utils.pick([`🤒`, `🤧`, `😭`, `😓`, `😥`])}
🔥 Максимальная длина клички 10 символов.`)

  if (message.user.petlength != 0) {
    for (var i = 0; i < message.user.petlength; i++) {
      message.user.pet[i].name = message.args[1]
      return bot(`теперь у питомца новое имя! ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
    }
  }
})

gabella.bot(/(?:питомец покормить|питомец кушать)$/i, async (message, bot) => {
  if (message.user.misc.pet < 1)
    return bot(`у Вас нет питомца. ${smileerror} 
❓ Для покупки введите «Питомцы»`)
  if (message.user.petgolod >= 100) return bot(`ваш питомец не голоден.`)
  if (message.user.balance < 1000) return bot(`недостаточно денег. (1.000$)`)
  else {
    message.user.petgolod += 10
    message.user.balance -= 10000
    bot(
      `вы покормили своего питомца за 1К $! 🍼
	🍗 Сытость: ${message.user.petgolod}%`,
      {
        attachment: "photo-199842099_457239018",
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец играть"
                },
                color: "secondary"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец кушать"
                },
                color: "secondary"
              }
            ]
          ]
        })
      }
    )
    return message.sendSticker(8787)
  }
})

gabella.bot(/(?:питомец поиграть|питомец играть)$/i, async (message, bot) => {
  if (message.user.misc.pet < 1)
    return bot(`у Вас нет питомца. ${smileerror} 
❓ Для покупки введите «Питомцы»`)
  if (message.user.petradost >= 100) return bot(`ваш питомец не хочет играть.`)
  if (message.user.balance < 1000000000) return bot(`недостаточно денег. (1.000.000.000$)`)
  else {
    message.user.petradost += 20
    message.user.balance -= 1000000000
    bot(
      `вы поиграли со своим питомцем за 1kkk $! 🎲
	😍 Радость: ${message.user.petradost}%`,
      {
        attachment: "photo-199842099_457239017",
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец играть"
                },
                color: "secondary"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "Питомец кушать"
                },
                color: "secondary"
              }
            ]
          ]
        })
      }
    )
    return message.sendSticker(6670)
  }
})

setInterval(async () => {
  users.map(user => {
    let radosta = utils.pick([11, 12, 13, 14, 17, 20])
    if (user.petradost > 20) {
      user.pet.radost -= radosta
    }
  })
}, 300000)

setInterval(async () => {
  users.map(user => {
    let radosta1 = utils.pick([11, 12, 13, 14, 17, 20])
    if (user.petradost > 20) {
      user.petgolod -= radosta1
    }
  })
}, 450000)

function clearTempp() {
  users.map(user => {
    user.petgolod = 0
    user.petradost = 0
  })
}
clearTempp()
/*==========================================================================================================*/
/*=================================ДОПОЛНЕНИЯ==============================================================*/
gabella.bot(/(?:бонус премиум)$/i, async (message, bot) => {
  if (message.user.prem < 1) return bot(`вы не имеете Premium-статуса 🔮`)

  if (message.user.bonuprem > getUnix())
    return bot(`Вы недавно уже получали бонус 😩

⌚ Получить бонус можно будет через ${unixStampLeft(message.user.bonuprem - Date.now())}`)

  let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

  if (prize === 1) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.surprise += 5
    bot(`бонус: Деревянных  Кейса (x5) ${smilesuccess}`)
    return message.sendSticker(2158)
  }

  if (prize === 2) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.rating += 100
    bot(`бонус +100 рейтинга.
		👑 Рейтинг: ${utils.sp(message.user.rating)}`)
    return message.sendSticker(11243)
  }

  if (prize === 3) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.btc += 125000
    bot(`бонус +125.000฿ ${smilesuccess}
		💽 Биткоинов: ${utils.sp(message.user.btc)}฿`)
    return message.sendSticker(2158)
  }

  if (prize === 4) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.btc += 12500000
    bot(`бонус +12.500.000฿ ${smilesuccess}
	    💽 Биткоинов: ${utils.sp(message.user.btc)}฿`)
    return message.sendSticker(11243)
  }

  if (prize === 5) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.surprise += 20
    bot(`бонус: Деревянных  Кейса (x20) ${smilesuccess}`)
    return message.sendSticker(2158)
  }

  if (prize === 6) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.platinium += 10
    bot(`бонус: Алмазный Кейс (x10) ${smilesuccess}`)
    return message.sendSticker(2158)
  }
  if (prize === 7) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.btc += 125250350
    bot(`бонус +125.250.350฿ ${smilesuccess}
		💽 Биткоинов: ${utils.sp(message.user.btc)}฿`)
    return message.sendSticker(11243)
  }

  if (prize === 8) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.rating += 2
    bot(`бонус +2 рейтинга.
		👑 Рейтинг: ${utils.sp(message.user.rating)}`)
    return message.sendSticker(2158)
  }

  if (prize === 9) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.balance += 100000000000000
    bot(`бонус +100.000.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`)
    return message.sendSticker(11243)
  }
  if (prize === 10) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.balance += 500000000000
    bot(`бонус +500.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`)
    return message.sendSticker(2158)
  }

  if (prize === 11) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.balance += 50000000000000
    bot(`бонус +50.000.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`)
    return message.sendSticker(11243)
  }

  if (prize === 12) {
    message.user.bonuprem = getUnix() + 21600000
    message.user.balance += 10000000000000
    bot(`бонус +10.000.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`)
    return message.sendSticker(2158)
  }
})

gabella.bot(/(?:бонус Элит)$/i, async (message, bot) => {
  if (message.user.vip < 1) return bot(`Для того чтобы получить данный бонус, вам нужно одновременно иметь VIP-статус и PREMIUM-статус 🔮`)
  if (message.user.prem < 1) return bot(`Для того чтобы получить данный бонус, вам нужно одновременно иметь VIP-статус и PREMIUM-статус 🔮`)

  if (message.user.bonustimevip > getUnix())
    return bot(`Вы недавно уже получали бонус 😩

⌚ Получить бонус можно будет через ${unixStampLeft(message.user.bonustimevip - Date.now())}`)

  let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

  if (prize === 1) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.donat += 5
    bot(`бонус: GabellaCoin (x5) ${smilesuccess}`)
    return message.sendSticker(2158)
  }

  if (prize === 2) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.rating += 10000
    bot(`бонус +10.000 рейтинга.
		👑 Рейтинг: ${utils.sp(message.user.rating)}`)
    return message.sendSticker(11243)
  }

  if (prize === 3) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.btc += 1000000
    bot(`бонус +1.000.000฿ ${smilesuccess}
		💽 Биткоинов: ${utils.sp(message.user.btc)}฿`)
    return message.sendSticker(2158)
  }

  if (prize === 4) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.btc += 12000500000
    bot(`бонус +12.000.500.000฿ ${smilesuccess}
	    💽 Биткоинов: ${utils.sp(message.user.btc)}฿`)
    return message.sendSticker(11243)
  }

  if (prize === 5) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.surprise += 20
    bot(`бонус: Деревянных  Кейса (x20) ${smilesuccess}`)
    return message.sendSticker(2158)
  }

  if (prize === 6) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.GB += 3
    bot(`бонус: GB Кейс (x3) ${smilesuccess}`)
    return message.sendSticker(2158)
  }
  if (prize === 7) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.btc += 1025250350
    bot(`бонус +1.025.250.350฿ ${smilesuccess}
		💽 Биткоинов: ${utils.sp(message.user.btc)}฿`)
    return message.sendSticker(11243)
  }
  if (prize === 8) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.rating += 200
    bot(`бонус +200 рейтинга.
		👑 Рейтинг: ${utils.sp(message.user.rating)}`)
    return message.sendSticker(2158)
  }
  if (prize === 9) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.balance += 100000000000000
    bot(`бонус +100.000.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`)
    return message.sendSticker(11243)
  }
  if (prize === 10) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.balance += 500000000000
    bot(`бонус +500.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`)
    return message.sendSticker(2158)
  }

  if (prize === 11) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.balance += 50000000000000
    bot(`бонус +50.000.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`)
    return message.sendSticker(11243)
  }

  if (prize === 12) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.balance += 10000000000000
    bot(`бонус +10.000.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`)
    return message.sendSticker(2158)
  }

  if (prize === 13) {
    message.user.bonustimevip = getUnix() + 21600000
    message.user.donat += 25
    bot(`бонус: GabellaCoin (x25) ${smilesuccess}`)
    return message.sendSticker(2158)
  }
})

gabella.bot(/(?:Премиум энергия|прем энергия|энергия премиум|энергия прем)$/i, async (message, bot) => {
  if (message.user.prem < 1) return bot(`вы не имеете Premium-статуса 🔮`)

  if (message.user.timers.premenergy >= 0) return bot(`энергию можно получить через ${displayTime(message.user.timers.premenergy)} ${smileerror}`)

  message.user.timers.premenergy = 720

  let prize = utils.pick([1])

  if (prize === 1) {
    message.user.energy += 100
    bot(`вы получаете бонус энергию: вам дало + 100 энергии ${smilesuccess}`)
    return message.sendSticker(2562)
  }
})

gabella.bot(/(?:вип энергия|vip энергия)$/i, async (message, bot) => {
  if (message.user.vip < 1) return bot(`вы не имеете VIP-статуса 🔮`)

  if (message.user.timers.vipenergy >= 0) return bot(`энергию можно получить через ${displayTime(message.user.timers.vipenergy)} ${smileerror}`)

  message.user.timers.vipenergy = 800

  let prize = utils.pick([1])

  if (prize === 1) {
    message.user.energy += 50
    bot(`вы получаете бонус энергию: вам дало + 50 энергии ${smilesuccess}`)
    return message.sendSticker(2562)
  }
})
gabella.bot(/^(?:Премхелп|пхелп)$/i, async (message, bot) => {
  if (message.user.prem < 1) return bot(`недостаточно прав. 🚫`)
  return bot(`🔥 Команды премиума↓
💡Бонус премиум - бонус премиум можно получать раз в 12 часов
💡Бонус - Обычный бонус
💡Премиум энергия - дополнительная энергия
💡Также повышены шансы во всех играх
💡Бонус элит -  Получение элитного бонуса, где можно получить GB кейсы и GabellaCoin, но нужно еще иметь VIP-статус.`)
})

gabella.bot(/^(?:випхел|вхелп)$/i, async (message, bot) => {
  if (message.user.vip < 1) return bot(`недостаточно прав. 🚫`)
  return bot(`🔥 Команды випа↓
💡Бонус - Обычный бонус
💡Вип энергия - дополнительная энергия
💡Также повышены шансы во всех играх
💡Бонус элит -  Получение элитного бонуса, где можно получить GB кейсы и GabellaCoin, но нужно еще иметь PREMIUM-статус.`)
})

gabella.bot(/(?:Дополнения)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], Дополнения:
🅰 Апомощь - помощь по командам админа
🅿 Пхелп - помощь по командам PREMIUM
🅱 Вхелп - помощь по VIP-статусу 
📱 Кнопки [вкл/выкл] - автоматическое обновление кнопки
🆘 Репорт [фраза] - ошибки или пожелания

Свои предложения о дополнительных кнопках пишите в репорт.

❓ Выберите настройку для кнопок.`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🗞 Кнопки стандарт"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "✖ Кнопки выкл"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})
/*==========================================================================================================*/
/*===================================РАБОТЫ================================================================*/
gabella.bot(/^(?:работа устроиться)\s([0-9]+)$/i, async (message, bot) => {
  const vvork = vvorks.find(x => x.id === Number(message.args[1]))
  if (!vvork) return console.log(message.args[1])

  if (vvork.requiredLevel > message.user.prorab) return bot(`вы не можете устроиться на эту работу!`)
  else if (vvork.requiredLevel <= message.user.prorab) {
    message.user.vvork = vvork.id
    return bot(
      `вы устроились работать на профессию - ${vvork.name}
		👔 Введите команду "Работать"`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Работать"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Работа"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Работа уволиться"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/(?:работа)$/i, async (message, bot) => {
  if (!message.user.vvork)
    return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работы"`)
  if (message.user.vvork)
    return bot(
      `🔹 ваша профессия - ${vvorks[message.user.vvork - 1].name}
		🔱 Ваш уровень работника - ${message.user.prorab}
	${message.user.timers.hasVvorked ? `⏳ Вы уже работали в эти 10 минут` : ``}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Работать"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Работы"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Работа уволиться"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
})

gabella.bot(/(?:работы)$/i, async (message, bot) => {
  return bot(
    `профессии:
🔹 1. Дворник - зарплата ~ 30$ от 1 🔱
🔹 2. Сантехник - зарплата ~ 52$ от 25 🔱
🔹 3. Электрик - зарплата ~ 62$ от 75 🔱
🔹 4. Слесарь - зарплата ~ 65$ от 250 🔱
🔹 5. Юрист - зарплата ~ 70$ от 600 🔱
🔹 6. Бухгалтер - зарплата ~ 73$ от 2.500 🔱
🔹 7. Бармен - зарплата ~ 80$ от 5.000 🔱
🔹 8. Администратор - зарплата ~ 87$ от 15.000 🔱
🔹 9. Программист - зарплата ~ 92$ от 50.000 🔱
🔹 10. Президент - зарплата ~ 97$ от 100.000 🔱
🔹 11. Космонавт - зарплата ~ 105$ от 500.000 🔱
🔹 12. Медик - зарплата ~ 150$ от 1.000.000 🔱

Для трудоустройства введите "Работа устроиться [номер]
Для увольнения введите "Работа уволиться`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "Работа"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "Работа уволиться"
              },
              color: "default"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:работать)$/i, async (message, bot) => {
  if (!message.user.vvork)
    return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работы"`)

  if (message.user.timers.hasVvorked)
    return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`)

  setTimeout(() => {
    message.user.timers.hasVvorked = false
  }, 600000)

  message.user.timers.hasVvorked = true

  const vvork = vvorks.find(x => x.id === message.user.vvork)
  const earn = utils.random(vvork.min, vvork.max)

  message.user.balance += earn
  message.user.prorab += 1

  return bot(
    `рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}$`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "Работать"
              },
              color: "default"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:работа уволиться)$/i, async (message, bot) => {
  if (!message.user.vvork) return bot(`вы нигде не работаете`)

  message.user.vvork = 0
  return bot(`вы уволились со своей работы`, {
    keyboard: JSON.stringify({
      inline: true,
      buttons: [
        [
          {
            action: {
              type: "text",
              payload: '{"button": "2"}',
              label: "Работы"
            },
            color: "default"
          }
        ]
      ]
    })
  })
})
/*==========================================================================================================*/
/*=======================================Развлекательные===================================================*/
gabella.bot(/(?:космос поход)$/i, async (message, bot) => {
  if (message.user.transport.helicopter < 14) return bot(`чтобы иследовать космос, вам нужно купить "Звездолёт". ${smileerror}`)

  const helicopter = helicopters.find(x => x.id === message.user.transport.helicopter)
  if (message.user.timers.poxodh >= 0) {
    await bot(`ваш вертолет нужно починить, на починку уйдет ${displayTime(message.user.timers.poxodh)} ${smileerror}`)
    return message.sendSticker(11279)
  }

  vk.api.messages.send({
    chat_id: 1235,
    message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n☄ Метеорита:${message.user.meteor}\n`
  })

  message.user.timers.poxodh = 3600
  let cashfind = utils.random(helicopter.min, helicopter.max)
  message.user.meteor += cashfind

  bot(`изучая космос, вы нашли ${utils.sp(cashfind)} слитков метеорита.${smilesuccess}`, { attachment: "photo-178396242_457245865" })
})

gabella.bot(/^(?:мэр заявка)\s([^]+)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)
  if (!Number(message.args[1])) return
  message.args[1] = Number(message.args[1])
  let z = prez.z
  z = Number(z)
  if (message.args[1] < z) return bot(`укажите сумму больше ${utils.sp(z)}$`)
  if (message.args[1] > 100000000000000) return bot(`недостаточно денег`)
  if (message.args[1] > message.user.balance) return bot(`недостаточно денег`)
  message.user.balance -= message.args[1]
  prez.z = message.args[1]
  prez.pr2 = message.user.uid
  prez.pr2tag = message.user.tag
  return bot(`заявка на мэра подана, ожидайте выборов`)
})

gabella.bot(/^(?:мэр)$/i, async (message, bot) => {
  let pr = prez.pr
  let pr1 = prez.prtag
  let pr2 = prez.prtag2
  let pr_2 = prez.pr2
  let z = prez.z
  return bot(`мэр сейчас: [id${users[pr].id}|${users[pr].tag}]
Стать им может любой желающий, на выборах выигрывает тот кто заплатит больше всех. Если кто то заплатит больше Вас, игровая валюта не вернётся на Ваш баланс. У мэра появляется красивая отметка в профиле. 🤵

💬 Будущий мэр: [id${users[pr_2].id}|${users[pr_2].tag}] (${utils.sp(z)}$)
🆘 Мэр выберается раз в 3 часа.
⚠ Подать заявку: «мэр заявка [сумма]»`)
})

setInterval(async () => {
  if (prez.time > 0) prez.time--
  if (prez.time === 0) {
    users.map(j => {
      if (j.prez) j.prez = false
    })
    let user = users.find(x => x.id === prez.users[0].id)
    user.prez = true
    if (user.notifications)
      await vk.api.messages.send({ user_id: user.id, message: `[id${message.user.id}|${message.user.tag}], поздравляем, теперь вы Мэр! 🤴` })
    prez.users = []
    prez.time = 3 * 3600
  }
}, 1000)

setInterval(async () => {
  if (prez.time <= 0) {
    prez.time = 3 * 3600
    prez.pr = prez.pr2
    prez.pr2 = 0
    prez.z = 0
  }
}, 1000)
gabella.bot(/^(?:посылка)/i, async message => {
  let conf = await vk.api.messages.getConversationMembers({
    peer_id: message.peerId
  })
  if (message.chatId == null) {
    await message.send(`[id${message.user.id}|${message.user.tag}], посылку из Китая можно забирать только в беседе. ${smileerror}`)
    return message.sendSticker(17147)
  }
  if (conf.count < 50) {
    await message.send(`[id${message.user.id}|${message.user.tag}], посылку из Китая можно забирать только в беседе где есть 50 участников. 😬
🆘 Не забудьте выдать администратора боту, иначе он не сможет получить количество участников!`)
    return message.sendSticker(17147)
  }
  let ch = pchats.find(x => x.id == message.chatId)
  if (!ch) {
    pchats.push({
      id: message.chatId,
      time: 0
    })
  }
  if (pchats.find(x => x.id == message.chatId).time > Date.now()) {
    await message.send(
      `[id${message.user.id}|${message.user.tag}], в этой беседе уже забрали посылку из Китая, она появится через ${left(
        ch.time - Date.now()
      )}. Приходи чуть позже! ${smileerror}`
    )
    return message.sendSticker(17147)
  }
  pchats.find(x => x.id == message.chatId).time = Date.now() + 600000
  let win = random([1, 2, 3, 4, 5])
  switch (win) {
    case 1:
      let btc = rand(70000000, 600000000)
      message.user.btc += Number(btc)
      message.send(
        `[id${message.user.id}|${message.user.tag}], вы открыли посылку из посылку из Китая в этой беседе и нашли ${utils.sp(
          btc
        )}₿, приходите в другие беседы и открывайте подарки! 🔥`
      )
      break
    case 3:
      let platinium = random([1, 2, 3, 4, 5])
      message.user.platinium += platinium
      message.send(
        `[id${message.user.id}|${message.user.tag}], вы открыли посылку из Китая в этой беседе и нашли "Алмазный Кейс" (${platinium} шт.), приходите в другие беседы и открывайте подарки! 🔥`
      )
      break
    case 4:
      let surprise = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      message.user.surprise += surprise
      message.send(
        `[id${message.user.id}|${message.user.tag}], вы открыли посылку из Китая в этой беседе и нашли "Деревянный  Кейс" (${surprise} шт.), приходите в другие беседы и открывайте подарки! 🔥`
      )
      break
    case 5:
      let dengi = random([
        960000000000, 563000000000, 723000000000, 230000000000, 96000000000, 53000000000, 23000000000, 500000000000, 267000000000, 126000000000,
        692000000000, 328000000000, 285000000000
      ])
      message.user.balance += dengi
      message.send(
        `[id${message.user.id}|${message.user.tag}], вы открыли посылку из Китая в этой беседе и нашли ${utils.sp(
          dengi
        )}$, приходите в другие беседы и открывайте подарки! 🔥`
      )
      break
    case 6:
      message.user.vip = 1
      message.send(
        `[id${message.user.id}|${message.user.tag}], вы открыли посылку из Китая в этой беседе и нашли «VIP статус», приходите в другие беседы и открывайте подарки! 🔥`
      )
      break
    case 7:
      message.user.cov = 1
      message.send(
        `[id${message.user.id}|${message.user.tag}], вы открыли посылку из Китая в этой беседе и заболели «Covid-19», приходите в другие беседы и открывайте подарки! 🔥`
      )
      break
    case 8:
      message.user.po = 1
      message.send(
        `[id${message.user.id}|${message.user.tag}], вы открыли посылку из Китая в этой беседе и заболели «Pofig-21», приходите в другие беседы и открывайте подарки! 🔥`
      )
      break
    case 9:
      message.user.pan = 1
      message.send(
        `[id${message.user.id}|${message.user.tag}], вы открыли посылку из Китая в этой беседе и заболели «Panic-20», приходите в другие беседы и открывайте подарки! 🔥`
      )
      break
    case 2:
    default:
      message.send(
        `[id${message.user.id}|${message.user.tag}], вы открыли посылку из Китая в этой беседе и ничего не нашли, приходите в другие беседы и открывайте подарки! 🔥`
      )
  }
  return message.sendSticker(8484)
})
gabella.bot(/^(?:ID|мой ID|мой ид|мой айди|ид)$/i, async (message, bot) => {
  await bot(
    `🧩 Ваш игровой ID: [${message.user.uid}]\n🎲VK_ID: [${message.user.id}]\n🗯 Ник игрока: [id${message.user.id}|${message.user.tag}]\n✅Подробнее по команде "профиль"`
  )
})
gabella.bot(/^(?:Поиск)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return bot(`Доступ запрещен.`)
  let user = users.find(x => x.uid === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)

  return bot(
    `\n🧩Игровой ID игрока : ${user.uid}\n🎲VK_ID: [${user.id}]\n🗯 Ник игрока: [id${user.id}|${user.tag}]\n✅Подробнее по команде "профиль ${user.id}"`
  )
})
gabella.bot(/^(?:вкид|идвк|вк ид|ид вк)(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?$/i, async (message, args, bot, replace) => {
  if (message.args[3]) {
    vk.api
      .call("users.get", {
        user_id: message.args[3],
        fields: "city,freinds,verified,status,photo_id,sex,followers_count,photo_id,online,city,country,bdate,getMutual_count"
      })
      .then(res => {
        return message.send(
          ` 

					🆔 @id${user.id} (${user.first_name} ${user.last_name}) равен ${user.id} ✓ 
					🚻 Пол: ${user.sex
            .toString()
            .replace(/undefined/gi, "Не указан.")
            .replace(/0/gi, "Не указан.")
            .replace(/1/gi, "Женский.")
            .replace(/2/gi, "Мужской.")} 
					📶 Сеть: ${user.online
            .toString()
            .replace(/undefined/gi, "Не в сети.")
            .replace(/0/gi, "Не в сети.")
            .replace(/1/gi, "В сети.")} 

					📸 Ава профиля:`,
          { attachment: `photo${user.photo_id}` }
        )
      })
  }
  if (message.args[4]) {
    var domain = message.args[4].split(" ")

    vk.api.call("utils.resolveScreenName", { screen_name: message.args[4] }).then(res => {
      vk.api.users
        .get({
          user_id: res.object_id,
          fields: "city,freinds,verified,status,photo_id,sex,followers_count,photo_id,online,city,country,bdate,getMutual_count"
        })

        .then(res => {
          let user = res[0]
          return message.send(
            ` 

						
					🆔 @id${user.id} (${user.first_name} ${user.last_name}) равен ${user.id} ✓ 
					🚻 Пол: ${user.sex
            .toString()
            .replace(/undefined/gi, "Не указан.")
            .replace(/0/gi, "Не указан.")
            .replace(/1/gi, "Женский.")
            .replace(/2/gi, "Мужской.")} 
					📶 Сеть: ${user.online
            .toString()
            .replace(/undefined/gi, "Не в сети.")
            .replace(/0/gi, "Не в сети.")
            .replace(/1/gi, "В сети.")} 

					📸 Ава профиля:`,
            { attachment: `photo${user.photo_id}` }
          )
        })
    })
  }
})
gabella.bot(/^(?:!ID|!айди|!ид|ид|ID)\s(\s?https\:\/\/vk\.com\/)?([^]+)?$/i, async (message, bot) => {
  var domain = message.args[2].split(" ")
  vk.api
    .call("utils.resolveScreenName", {
      screen_name: message.args[2]
    })
    .then(res => {
      let user = users.find(x => x.id === Number(res.object_id))
      if (!user) return bot(`неверная ссылка ${smileerror}`)

      return bot(
        `\n🧩Игровой ID игрока : ${user.gameuid}\n🎲VK_ID: [${user.id}]\n🗯 Ник игрока: [id${user.id}|${user.tag}]\n✅Подробнее по команде "профиль ${user.id}"`
      )
    })
})
gabella.bot(/^(?:ориг ид)\s(\s?https\:\/\/vk\.com\/)?([^]+)?$/i, async (message, bot) => {
  if (message.user.settings.adm < 7 && message.user.pomoshnik !== true) return bot(`ВАЧО.`)
  var domain = message.args[2].split(" ")
  vk.api
    .call("utils.resolveScreenName", {
      screen_name: message.args[2]
    })
    .then(res => {
      let user = users.find(x => x.id === Number(res.object_id))
      if (!user) return bot(`неверная ссылка ${smileerror}`)

      return bot(
        `\n🧩Игровой ID игрока : ${user.uid}\n🎲VK_ID: [${user.id}]\n🗯 Ник игрока: [id${user.id}|${user.tag}]\n✅Подробнее по команде "профиль ${user.id}"`
      )
    })
})
gabella.bot(/^(?:заразить)\s([0-9]+)$/i, async (message, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (typeof message.user.tiktokliketimer != "undefined" && message.user.tiktokliketimer > Date.now())
    return bot(` подождите ${left(message.user.tiktokliketimer - Date.now())}, чтобы снова заражать! ⏳`)
  if (message.user.cov < 1 && message.user.po < 1 && message.user.pan < 1) return bot(`вы ни чем не болеете!`)
  if (Number(message.args[1]) === message.user.id) return bot(`вы не можете заражать себя!`)
  if (user.odezda == 21) return bot(`у игрока одета МАСКА и вы не можете заражать его! 🙌`)
  if (user.settings.adm == 7) return bot(`нельзя заражать создателя бота! 🙌`)
  if (user.settings.adm == 8) return bot(`нельзя заражать ЗАМА создателя бота! 🙌`)
  if (user.ban == true) return bot(`данный игрок забанен навсегда! 🙌`)
  if (user.pizdenka1 > getUnix()) return bot(` ⛔ данный игрок забанен на ${unixStampLeft(user.pizdenka1 - Date.now())}! 🙌 `)
  if (user.don == 1) return bot(`нельзя заражать Лучшего донатера бота! 🙌`)
  vk.api.messages.send({
    chat_id: 1412,
    message: `[${data()} ${time()}] 📖 Ник: *id${message.user.id} (${message.user.tag}) 💠 VK ID ИГРОКА: [${message.user.id}]❓ ID беседы: ${
      message.chatId
    }
		🎲 Заражение: *id${message.args[1]}`
  })
  var vir = utils.random(5000000000, 15000000000000)

  {
    message.user.balance += vir
    message.user.vsego += 1
    message.user.tiktokliketimer = Date.now() + 300000

    user.cov = message.user.cov
    user.pan = message.user.pan
    user.po = message.user.po

    return bot(`вы заразили [id${user.id}|${user.tag}] своими болезнями!
			😷 Вы всего заразили: ${message.user.vsego} Игроков!
			🔝 (Чтобы посмотреть топ лучших заражающих бота напишите 'топ зараженных'.)
			🔥 Ваш бонус за заражение составил: ${utils.sp(vir)}$!
			💰 Ваш баланс составляет: ${utils.sp(message.user.balance)}$`)
  }

  vk.api.messages.send({ user_id: user.id, message: `Вас заразили вирусами!😷` })
})
/*gabella.bot(/^(?:реши)\s([^]+)$/i, async (message, bot) => { 

if(/\:|÷|٪/i.test(message.args[1])) message.args[1] = message.args[1].replace(/\:|÷|٪/ig, '/').trim(); 

if(/\×|•|·/i.test(message.args[1])) message.args[1] = message.args[1].replace(/\×|•|·/ig, '*').trim(); 

if(/\π/i.test(message.args[1])) message.args[1] = message.args[1].replace(/\π/ig, '3.141592653589793').trim(); 

message.args[1] = message.args[1].replace(/(\.|\,)/ig, ''); 

message.args[1] = message.args[1].toLowerCase().replace(/]|}/, 'ERROR'); 

let text = message.args[1].toLowerCase(); 

var o = /(1|2|3|4|5|6|7|8|9|0:)/ 

if(o.test(text) !== true) { 

return bot(`возмножно вы допустили ошибку в примере.\n\nПример команды: "реши [1+2*3:3]"`); 

return; 

} 

var a = /(q|w|e|r|t`|"|'|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m|й|ц|у|к|е|н|г|ш|щ|з|х|ф|ы|в|а|п|р|о|л|д|ж|э|я|ч|с|м|и|т|ь|б|ю:)/ 

if(a.test(text) === true) { 

return bot(`возмножно вы допустили ошибку в примере.\n\nПример команды: "реши [1+2*3:3]"`); 

return; 

} 

try { 

var result = eval(message.args[1]); 

result = result.toFixed(2) 

var text2 = result.toLowerCase(); 

var b = /(q|w|e|r|t|y|u|i|o|p|a|s|null|NaN|undefined|Infinity|∞|d|f|g|h|j|k|l|z|x|c|v|b|n|m|й|ц|у|к|е|н|г|ш|щ|з|х|ф|ы|в|а|п|р|о|л|д|ж|э|я|ч|с|м|и|т|ь|б|ю:)/ 

if(b.test(text2) === true) { 

return bot(`${utils.pick(["По твоему я похож на великова математика!?", "Это сложно для меня! :(", "Я забыл ответ. :(", "Давай я попробую решить другой пример."])}.`); 

return; 

} 

bot(`ответ: ${utils.sp(result).replace(/(\.)/ig, '.')}`); 

return; 

} catch (e) { 

console.error(e); 

return bot(`возмножно вы допустили ошибку в примере.\n\nПример команды: "реши [1+2*3:3]"`); 

return; 

} 

});*/
gabella.bot(/^(?:смс)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (!message.user.misc.phone)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет телефона.
Список всех телефонов по команде: «телефоны» `)
  if (message.user.balance < 10) return bot(`вам нужно 10$ для этого. `)

  message.user.balance -= 10
  const user = await users.find(x => x.id === Number(message.args[1]))
  message.send(`[id${message.user.id}|${message.user.tag}], данный [id${user.id}|игрок] получил ваше смс.`)

  vk.api.messages.send({
    user_id: user.id,
    message: `[+SMS+]\n➡ [id${message.user.id}|${message.user.tag}]: ${message.args[2]}\n🗯 Для ответа напишите СМС ${message.user.uid} [сообщение]`
  })
})
gabella.bot(/^(?:когда)/i, message => {
  let rez = rand(true)
  if (rez == false) {
  } else {
    return message.send(`😃 » Думаю... в -  ${rand(2020, 2050)} году!`)
  }
})
gabella.bot(/^(?:энергия)$/i, async (message, bot) => {
  return bot(`у вас ${utils.sp(message.user.energy)} энергии. 🏋`)
})
gabella.bot(/^(?:переверни|перевернуть)\s([^]+)$/i, async (message, bot) => {
  let text = ``
  message.args[1].split("").map(x => {
    if (rotateText[x]) {
      text += rotateText[x]
    }
  })

  return bot(`держи: "${text.split("").reverse().join("")}"`)
})

gabella.bot(/^(?:анекдот)$/i, async (message, bot) => {
  let textanek = utils.pick([
    "Разговариваают два американца:\n — У этих русских не только душа другая. Они и устроены по-другому.\n — ?\n — Я сам слышал как один сказал другому — Одень ты на х@й шапку, а то уши замерзнут.",
    "Бывает, борешься за что-то, борешься, а потом в один прекрасный момент понимаешь: «А пошло оно все на х@й! » И жить становится намного проще.",
    '"А это точно поможет? ", — недоверчиво спрашивала царевна Несмеяна, поднося к губам какую-то самокрутку.',
    "Чтобы хоть как-то привлечь внимание школьников, преподавательница написала на доске « Жесть. Смотреть всем».",
    "Если Патриарх Кирилл верит в Бога, то почему он ездит в бронированном Мерседесе под охраной ФСО за счет бюджета, а не надеется на заступничество своего небесного начальника?"
  ])

  return bot(`анекдот: 

	${textanek}`)
})

gabella.bot(/^(?:цытата|цитата)$/i, async (message, bot) => {
  let textanek = utils.pick([
    "Не стоит принимать доброту за слабость, грубость за силу, а подлость за умение жить.",
    "Никогда ни к чему не привязывайся, иначе ты обязательно потеряешь это... 💔",
    "Если ты знаешь, что человек никогда не будет твоим, то любить его можно бесконечно долго.\n© Оскар Уайльд.",
    "Иногда хочется себя убить за то, что ты искренне был предан людям, которые этого не ценили.",
    "Людям только одно удаётся в совершенстве — разочаровывать друг друга.\n© Хьюберт Селби",
    "Никогда не надейся, что изменится кто-то другой. Изменения всегда нужно начинать с самого себя.\n© Ошо",
    "Одна из самых трудных в жизни вещей — хранить в сердце слова, которые нельзя произносить.\n© Джеймс Эрл Джонс",
    "Любая страсть толкает на ошибки, но на самые глупые толкает любовь.\n© Ф. Ларошфуко",
    "— Сколько времени ты мог бы любить женщину, которая тебя не любит?\n— Которая не любит? Всю жизнь.\n\n© Оскар Уайльд",
    "Уйти не подвиг.\nПодвиг — не вернуться.\n\n© Cергей Есенин"
  ])

  return bot(`держи цитату: 

	${textanek}`)
})

gabella.bot(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
  const phrase = utils.pick([
    "перспективы не очень хорошие",
    "сейчас нельзя предсказать",
    "пока не ясно",
    'знаки говорят - "Да"',
    'знаки говорят - "Нет"',
    "можешь быть уверен в этом",
    'мой ответ - "нет"',
    'мой ответ - "да"',
    "бесспорно",
    'мне кажется - "Да"',
    'мне кажется - "Нет"'
  ])
  return bot(phrase)

  return bot(`${phrase} ${percent}%`)
})

gabella.bot(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
  const first = message.args[1]
  const second = message.args[2]

  const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`])
  return bot(`${phrase}`)
})

/*setInterval(function () { 

user.api.call.status.set({ 
text: `📝 Инормация о Gabella Bot:	👤 В боте зарегистрировано: ${utils.sp(users.length - 1)} игроков,	💬 Сообщений принято: ${utils.sp(Logi.log_sms)}`});
user_id: 504991834;
}, 60000);*/

var bans = users.filter(x => x.ban == true).map(x => x.uid)
var prems = users.filter(x => x.prem == 1).map(x => x.uid)
var vips = users.filter(x => x.vip == 1).map(x => x.uid)
var uptime = { sec: 0, min: 0, hours: 0, days: 0 }

gabella.bot(/^(?:инфо о боте)$/i, async (message, bot) => {
  var group = await vk.api.groups.getMembers({ group_id: 178396242 }).catch(error => {
    console.log(` Ошибка.`)
  })
  let podpiska = await vk.api.groups.isMember({ group_id: 178396242, user_id: message.senderId })
  let array = users.map(x => x),
    rub = 0,
    reportass = 0,
    adm = 0,
    vip1 = 0,
    prem1 = 0,
    ban = true,
    bank = 0,
    rating = 0,
    balance = 0,
    msg = 0,
    btc = 0
  for (let i = 1; i < array.length; i++) {
    reportass += array[i].reportass
    bank += array[i].bank
    btc += array[i].btc
    msg += array[i].msg
    rating += array[i].rating
    balance += array[i].balance
    adm += array[i].settings.adm
    vip1 += array[i].vip
    prem1 += array[i].prem
    ban += array[i].ban
  }
  await bot(`
📖 Техническая информация:
    [♥] ⇢ Проект: @gabellabot(Gabella Bot)
    [🖤] ⇢ Резервная группа: @gabellabot_rezerv(Gabella Bot Резервная группа)
    [✏] ⇢ Создатель: [id${users[1].id}|${users[1].tag}] 
    [💡] ⇢ Версия бота: 68.9.8
    〰〰〰〰〰〰〰〰〰 

👔Пользователи: 
    [👥] ⇢ Пользователей: ${utils.sp(users.length - 1)}
	[🛂] ⇢ Последний зарегистрированный: [id${users[users.length - 1].id}|${users[users.length - 1].tag}] в ${users[users.length - 1].regDate}
	[👑] ⇢ Общий рейтинг: ${utils.sp(rating)}
	[💰] ⇢ Баланс всех игроков: ${utils.rn(balance)}$
	[🚫] ⇢ Забанено навсегда: ${utils.sp(bans.length)}
	[✉] ⇢ Сообщений принято: ${utils.sp(Logi.log_sms)}
	[🛡] ⇢ Кланов Создано: ${utils.sp(clans.number)}
	[🅰] ⇢ Админов в боте: ${adm}
	[💎] ⇢ Premium игроков в боте: ${utils.sp(prems.length)}
	[💍] ⇢ VIP игроков в боте: ${utils.sp(vips.length)}
    〰〰〰〰〰〰〰〰〰

🖥 Сервер и группа:
    [📊] ⇢ Пинг: ${utils.random(0, 1, 1, 2, 3, 1, 4, 3, 5, 5, 6, 4, 7, 8, 9, 10, 11, 12, 13, 5, 14, 15, 16, 17, 18)}%
	[⚡] ⇢ Нагрузка: ${utils.random(0, 1, 1, 2, 3, 1, 4, 3, 5, 5, 6, 4, 7, 8, 9, 10, 11, 12, 13, 5, 14, 15, 16, 17, 18)}% 
	[⏰] ⇢ Бот был запущен ${unixStampLeft(process.uptime() * 1000)} назад
	[👤] ⇢ Подписчиков в группе: ${utils.sp(group.count)}
	${podpiska
    .toString()
    .replace(/0/gi, "[❌] ⇢ Подписка: Вы не подписаны на *gabellabot(меня)!")
    .replace(/1/gi, "[✔] ⇢ Подписка: Вы подписаны на *gabellabot(меня)!")}
	[💯] ⇢ Получить до 2.000 рублей на свой аккаунт хостинга можно по команде - {Акция}
    〰〰〰〰〰〰〰〰〰

	⌚ Время:
	╔══════════════════════╗
	║ ${data()}, ${time()}
	╚══════════════════════╝`)
})

gabella.bot(/^(?:бот)$/i, async (message, bot) => {
  let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])

  if (prize === 1) {
    return message.sendSticker(13193)
  }

  if (prize === 2) {
    return message.sendSticker(11238)
  }

  if (prize === 3) {
    return message.sendSticker(8481)
  }

  if (prize === 4) {
    return message.sendSticker(16688)
  }

  if (prize === 5) {
    return message.sendSticker(13227)
  }

  if (prize === 6) {
    return message.sendSticker(17759)
  }
  if (prize === 7) {
    return message.sendSticker(11257)
  }
  if (prize === 8) {
    return message.sendSticker(19703)
  }
  if (prize === 9) {
    return message.sendSticker(17765)
  }
  if (prize === 10) {
    return message.sendSticker(51557)
  }

  if (prize === 11) {
    return message.sendSticker(16992)
  }

  if (prize === 12) {
    return message.sendSticker(52775)
  }

  if (prize === 13) {
    return message.sendSticker(54426)
  }

  if (prize === 14) {
    return message.sendSticker(51640)
  }

  if (prize === 15) {
    return message.sendSticker(53812)
  }
  if (prize === 16) {
    return message.sendSticker(53810)
  }
  if (prize === 17) {
    return message.sendSticker(21354)
  }
  if (prize === 18) {
    return message.sendSticker(6339)
  }
})
gabella.bot(/^(?:донаты)/i, async (message, bot) => {
  return bot(
    `Список донатов за донат-валюту:

	1&#8419; АДМИНКА: 2000 👑

	2&#8419; VIP-статус: 150 👑

	3&#8419; Premium-статус: 500 👑

	4&#8419; Электростанция-простой бизнес: 7777 👑





	`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "1&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "2&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "3&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "4&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Далее ➡"
              },
              color: "negative"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:1⃣)/i, async (message, bot) => {
  if (message.user.settings.adm > 1) return bot(`Вы уже администратор🔥`)
  if (message.user.donat < 2000) return bot(`Не достаточно средств.`)

  message.user.settings.adm = 1
  message.user.donat -= 2000
  message.user.settings.report = true
  message.user.rating = 0
  message.user.farmslimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
  message.user.sataka = 0
  message.user.bossyr = 0
  message.user.sataka1 = 0
  message.user.bossyr1 = 0
  message.user.settings.limit = 500000000000
  message.user.settings.limitdeneg = 200000000000
  message.user.limitbank = 100000000
  return bot(`🔥Вы успешно приобрели права администратора🔥`)
})

gabella.bot(/(?:2⃣)/i, async (message, bot) => {
  if (message.user.vip > 1) return bot(`Вы уже имеете VIP!`)
  if (message.user.donat < 150) return bot(`Не достаточно средств.`)

  message.user.vip = 1
  message.user.donat -= 150
  message.user.farmslimit = 5000
  message.user.limitdeneg = 50000000000
  message.user.energy = 20
  message.user.nicklimit = 45
  message.user.limitbank = 50000000000
  return bot(`🔥Вы успешно приобрели VIP-статус!`)
})

gabella.bot(/(?:3⃣)/i, async (message, bot) => {
  if (message.user.prem > 1) return bot(`Вы уже имеете Premium!`)
  if (message.user.donat < 500) return bot(`Не достаточно средств.`)

  message.user.donat -= 500
  message.user.prem = 1
  message.user.farmslimit = 10000
  message.user.limitdeneg = 100000000000
  message.user.energy = 50
  message.user.nicklimit = 25
  message.users.limitbank = 100000000000
  return bot(`🔥Вы успешно приобрели Premium-статус!`)
})

gabella.bot(/(?:4⃣)/i, async (message, bot) => {
  if (message.user.donat < 7777) return bot(`Не достаточно средств.`)

  message.user.donat -= 7777
  message.user.business = 13
  message.user.biz = 0
  message.user.bizlvl = 1
  return bot(`🔥Вы успешно купили «Электростанцию»!`)
})

gabella.bot(/(?:5⃣)/i, async (message, bot) => {
  if (message.user.donat < 4500) return bot(`Не достаточно средств.`)

  message.user.donat -= 4500
  message.user.business3 = 1
  message.user.bizlvl3 = 1
  message.user.biz3 = 0
  message.user.business = true

  return bot(`🔥Вы успешно купили «Атомную электростанцию»!`)
})

gabella.bot(/(?:6⃣)/i, async (message, bot) => {
  if (message.user.donat < 3150) return bot(`Не достаточно средств.`)

  message.user.donat -= 3150
  message.user.business2 = 1
  message.user.bizlvl2 = 1
  message.user.biz2 = 0
  message.user.business = true

  return bot(`🔥Вы успешно купили «Адронный коллайдер»!`)
})

gabella.bot(/(?:7⃣)/i, async (message, bot) => {
  if (message.user.transport.yacht > 1) return bot(`Вы уже имеете Яхту, продайте ее!`)
  if (message.user.donat < 1000) return bot(`Не достаточно средств.`)

  message.user.donat -= 1000
  message.user.transport.yacht = 21
  message.user.prot_10 = 500

  return bot(`🔥Вы успешно купили яхту - «Gabella Bot»!`)
})

gabella.bot(/(?:8⃣)/i, async (message, bot) => {
  if (message.user.planet > 1) return bot(`Вы уже имеете Планету, продайте ее!`)
  if (message.user.donat < 2000) return bot(`Не достаточно средств.`)

  message.user.donat -= 2000
  message.user.planet = 4
  message.user.lvlplan = 1
  message.user.gen = 0

  return bot(`🔥Вы успешно купили планету - «Солнце»!`)
})

gabella.bot(/(?:Далее)/i, async (message, bot) => {
  return bot(
    `Далее список донатов за донат-валюту:

	5&#8419; «Атомная электростанция» - ТРЕТИЙ бизнес: 4500 👑

	6&#8419; «Адронный коллайдер» - ВТОРОЙ бизнес: 3150 👑

	7&#8419; «Gabella Bot» - ЛУЧШАЯ ЯХТА: 1000 👑
 
	8&#8419; «Солнце» - ЛУЧШАЯ ПЛАНЕТА: 2000 👑





	`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "5&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "6&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "7&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "8&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Назад &#11013;"
              },
              color: "negative"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:назад)/i, async (message, bot) => {
  return bot(
    `Вы перешли назад в список донатов за донат-валюту:

	1&#8419; АДМИНКА: 2000

	2&#8419; VIP-статус: 150

	3&#8419; Premium-статус: 500

	4&#8419; Электростанция-простой бизнес: 7777





	`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "1&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "2&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "3&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "4&#8419;"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Далее ➡"
              },
              color: "negative"
            }
          ]
        ]
      })
    }
  )
})
/*==========================================================================================================*/
/*=================================Разное==================================================================*/
gabella.bot(/^(?:погода|weather)/i, async (message, bot) => {
  let args = message.text.match(/^(?:погода|weather)\s?(.*)/i)
  if (args[1].toLowerCase() == "") return message.send(`Укажите город.`)
  rq(
    "http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(args[1]) + "&lang=ru&units=metric&appid=5d8820e4be0b3f1818880ef51406c9ee"
  )
    .then(res => {
      let Utils = {
        filter: text => {
          text = text.replace(/^(RU)/i, "Россия")
          text = text.replace(/^(UA)/i, "Украина")
          text = text.replace(/^(BY)/i, "Беларусь")
          text = text.replace(/^(US)/i, "США")
          text = text.replace(/^(KZ)/i, "Казахстан")
          text = text.replace(/^(CN)/i, "Китай")
          text = text.replace(/^(CN)/i, "Китай")
          text = text.replace(/^(GB)/i, "Англия")
          text = text.replace(/^(AE)/i, "Объединенные Арабские Эмираты")
          text = text.replace(/^(AQ)/i, "Антарктида")
          text = text.replace(/^(stations)/i, "станция")
          return text
        }
      }
      function TempTo() {
        if (res.main.temp < -50) return "очень холодно (Отмена занятий с 1-11 класс)"
        else if (res.main.temp < -31) return "очень холодно (Отмена занятий с 1-11 класс, Без ветра)."
        else if (res.main.temp < -30) return "очень холодно (Отмена занятий с 1-9 класс, Без ветра).\n(Отмена занятий с 1-11 класс, ветер 1-4m/c)"
        else if (res.main.temp < -29) return "очень холодно (Отмена занятий с 1-9 класс, ветер >5m/c)."
        else if (res.main.temp < -28) return "очень холодно (Отмена занятий с 1-9 класс, Без ветра)."
        else if (res.main.temp < -27) return "очень холодно (Отмена занятий с 1-7 класс, ветер 1-4m/с)."
        else if (res.main.temp < -26) return "очень холодно (Отмена занятий с 1-4 класс без ветра).\n(Отмена занятий с 1-7 класс, ветер 1-4m/с)"
        else if (res.main.temp < -25) return "очень холодно (Отмена занятий с 1-4 класс, ветер >5m/с)"
        else if (res.main.temp < -10) return "холодно"
        else if (res.main.temp < -5) return "прохладно"
        else if (res.main.temp < 5) return "холодновато"
        else if (res.main.temp < 20) return "комфортно"
        else if (res.main.temp < 25) return "тепло"
        else if (res.main.temp < 30) return "жарко"
        else if (res.main.temp < 50) return "Очень жарко"
      }
      function Timer() {
        let now = new Date(res.dt * 1000).getHours()
        if (now > 18) return "🌆"
        else if (now > 22) return "🌃"
        else if (now > 0) return "🌃"
        else if (now < 6) return "🌅"
        else if (now < 12) return "🏞"
      }
      var sunrise = new Date(res.sys.sunrise * 1000)
      var sunset = new Date(res.sys.sunset * 1000)
      function sunmin() {
        if (sunrise.getMinutes() < 10) "0" + sunrise.getMinutes()
        return sunset.getMinutes()
      }
      function sunsmin() {
        if (sunset.getMinutes() < 10) "0" + sunset.getMinutes()
        return sunset.getMinutes()
      }
      function daterh() {
        if (date.getHours() < 10) "0" + date.getHours()
        return date.getHours() + 3
      }
      function daterm() {
        if (date.getMinutes() < 10) "0" + date.getMinutes()
        return date.getMinutes()
      }
      var date = new Date(res.dt * 1000)
      return message.reply(`${Timer()} ${res.name}, ${Utils.filter(res.sys.country)}

🌍 Погода на сейчас: ${res["weather"][0]["description"]} ,${res["weather"][0]["main"]}
🏢 база: ${Utils.filter(res.base)}
🌡 Температура: ${res.main.temp}°С, ${TempTo()}
🌪 Скорость ветра: ${res.wind.speed} м/с
💦 Влажность ${res.main.humidity}%
☁ Облачность ${res.clouds.all}%
🌬 Давление:  ${Math.floor(res.main.pressure / 1.33333)} mm. Рт.Ст.
⌛ сдвиг времени в часах от utc равен ${res.timezone / 3600}`)
    })
    .catch(error => {
      message.reply(`Город не найден`)
    })
})
gabella.bot(/(?:Донат)$/i, async (message, bot) => {
  message.send(`любой донат выдаётся НАВСЕГДА! 💯 
🔥 Список товаров: vk.com/market-178396242

✅ Покупка только у [id${users[1].id}|${users[1].tag}], укажите Ваш ID: [id${message.user.id}|${message.user.id}]`)
})
gabella.bot(/^(?:реф|👥 Реф|рефка|рефералка|реферал|друг|деньги за друзей|ref|referal|🎲 Реф|🎲Реф)$/i, async (message, bot) => {
  let link = await vk.api.utils.getShortLink({ url: `vk.me/gabellabot?ref=${message.user.id}` })
  return bot(`всего приглашено: ${utils.sp(message.user.bral1)}

✅ У Вас есть специальная ссылка на бота, которую Вы можете рассылать кому угодно: ${link.short_url}

🚀 Увеличили реферальные вознаграждения до 1.000.000.000.000$ за каждого друга!

🎁 Не забываем, что случайным образом может выпасть ДОНАТ КЕЙС за приглашение друга!!!

🚨 Для копирования ссылки на телефоне, задержи на ней палец и нажми «Копировать»`)
})
gabella.bot(/^(?:кто я)$/i, async (message, bot) => {
  let text = ``
  let text2 = ``
  let text3 = ``
  let text4 = ``
  let text5 = ``
  clanid = message.user.clanid
  if (clans[clanid]) {
    text2 += `⚔ Клан: [${message.user.clanid}] 🔅 ${clans[clanid].name}`
  }
  if (message.user.settings.adm) text += `Ранг: ${adm[message.user.settings.adm - 1].icon} ${adm[message.user.settings.adm - 1].name}`
  if (message.user.prem) text3 += `✅ Есть: ${prem[message.user.prem - 1].icon} ${prem[message.user.prem - 1].name} статус`
  if (message.user.vip) text4 += `✅ Есть: ${vip[message.user.vip - 1].icon} ${vip[message.user.vip - 1].name} статус`
  if (message.user.marriage.partner)
    text5 += `👬 В браке с: [id${users[message.user.marriage.partner].id}|${users[message.user.marriage.partner].tag}]`
  message.send(`Это [id${message.user.id}|${message.user.tag}]
⭐ [${message.user.settings.adm}] ${text}
${text3}
${text4}
${text2}

${text5}

Репутация: $ ${utils.rn(message.user.balance)} | 👑 ${utils.sp(message.user.rating)}
⏰ Первое появление в боте: ${message.user.regDate}, (${moment(message.user.regDate, "L").fromNow()}).`)
})

gabella.bot(/^(?:кто ты)\s([0-9]+)$/i, async (message, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (user.uid === message.user.uid) return bot(`неверный VK ID`)
  let text = ``
  let text2 = ``
  let text3 = ``
  let text4 = ``
  let text5 = ``
  clanid = user.clanid
  if (clans[clanid]) {
    text2 += `⚔ Клан: [${user.clanid}] 🔅 ${clans[clanid].name}`
  }
  if (user.settings.adm) text += `Ранг: ${adm[user.settings.adm - 1].icon} ${adm[user.settings.adm - 1].name}`
  if (user.prem) text3 += `✅ Есть: ${prem[user.prem - 1].icon} ${prem[user.prem - 1].name} статус`
  if (user.vip) text4 += `✅ Есть: ${vip[user.vip - 1].icon} ${vip[user.vip - 1].name} статус`
  if (user.marriage.partner) text5 += `👬 В браке с: [id${users[user.marriage.partner].id}|${users[user.marriage.partner].tag}]`
  return bot(`Это [id${user.id}|${user.tag}]
⭐ [${user.settings.adm}] ${text}
${text3}
${text4}
${text2}

${text5}

Репутация: $ ${utils.rn(user.balance)} | 👑 ${utils.sp(user.rating)}
⏰ Первое появление в боте: ${user.regDate}, (${moment(user.regDate, "L").fromNow()}).`)
})

gabella.bot(/^(?:кто ты)\s(\s?https\:\/\/vk\.com\/)?([^]+)?$/i, async (message, bot) => {
  var domain = message.args[2].split(" ")
  vk.api
    .call("utils.resolveScreenName", {
      screen_name: message.args[2]
    })
    .then(res => {
      let user = users.find(x => x.id === Number(res.object_id))
      if (!user) return bot(`Вы указали не верно ссылку или этого пользовотеля нет в боте! ${smileerror}`)
      let text = ``
      let text2 = ``
      let text3 = ``
      let text4 = ``
      let text5 = ``
      clanid = user.clanid
      if (clans[clanid]) {
        text2 += `⚔ Клан: [${user.clanid}] 🔅 ${clans[clanid].name}`
      }
      if (user.settings.adm) text += `Ранг: ${adm[user.settings.adm - 1].icon} ${adm[user.settings.adm - 1].name}`
      if (user.prem) text3 += `✅ Есть: ${prem[user.prem - 1].icon} ${prem[user.prem - 1].name} статус`
      if (user.vip) text4 += `✅ Есть: ${vip[user.vip - 1].icon} ${vip[user.vip - 1].name} статус`
      if (user.marriage.partner) text5 += `👬 В браке с: [id${users[user.marriage.partner].id}|${users[user.marriage.partner].tag}]`
      return bot(`Это [id${user.id}|${user.tag}]
⭐ [${user.settings.adm}] ${text}
${text3}
${text4}
${text2}

${text5}

Репутация: $ ${utils.rn(user.balance)} | 👑 ${utils.sp(user.rating)}
⏰ Первое появление в боте: ${user.regDate}, (${moment(user.regDate, "L").fromNow()}).}`)
    })
})
gabella.bot(/^(?:ник)$/i, async (message, bot) => {
  return message.send(`[id${message.user.id}|${message.user.tag}], использование команды: ник [новый ник]

🔏 Отключить или включить ссылку в нике: ник [вкл/выкл]`)
})
gabella.bot(/(?:Бонус)$/i, async (message, bot) => {
  if (message.user.bonustime > getUnix())
    return bot(`Вы сегодня уже получали бонус 😩

⌚ Получить бонус можно будет через ${unixStampLeft(message.user.bonustime - Date.now())}`)

  let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

  if (prize === 1) {
    message.user.bonustime = getUnix() + 86400000
    message.user.surprise += 10
    bot(`бонус: Деревянных  Кейса (x10) ${smilesuccess}`, { attachment: `photo-178396242_457247080` })
  }

  if (prize === 2) {
    message.user.bonustime = getUnix() + 86400000
    message.user.rating += 10
    bot(
      `бонус +10 рейтинга.
		👑 Рейтинг: ${utils.sp(message.user.rating)}`,
      { attachment: `photo-178396242_457247081` }
    )
  }

  if (prize === 3) {
    message.user.bonustime = getUnix() + 86400000
    message.user.btc += 1000
    bot(
      `бонус +1.000฿ ${smilesuccess}
		💽 Биткоинов: ${utils.sp(message.user.btc)}฿`,
      { attachment: `photo-178396242_457247076` }
    )
  }

  if (prize === 4) {
    message.user.bonustime = getUnix() + 86400000
    message.user.btc += 12500
    bot(
      `бонус +12.500฿ ${smilesuccess}
	    💽 Биткоинов: ${utils.sp(message.user.btc)}฿`,
      { attachment: `photo-178396242_457247076` }
    )
  }

  if (prize === 5) {
    message.user.bonustime = getUnix() + 86400000
    message.user.surprise += 5
    bot(`бонус: Деревянных  Кейса (x5) ${smilesuccess}`, { attachment: `photo-178396242_457247083` })
  }

  if (prize === 6) {
    message.user.bonustime = getUnix() + 86400000
    message.user.platinium += 2
    bot(`бонус: Алмазных Кейса (x2) ${smilesuccess}`, { attachment: `photo-178396242_457247077` })
  }
  if (prize === 7) {
    message.user.bonustime = getUnix() + 86400000
    message.user.btc += 1250
    bot(
      `бонус +1.250฿ ${smilesuccess}
		💽 Биткоинов: ${utils.sp(message.user.btc)}฿`,
      { attachment: `photo-178396242_457247076` }
    )
  }
  if (prize === 8) {
    message.user.bonustime = getUnix() + 86400000
    message.user.rating += 100
    bot(
      `бонус +100 рейтинга.
		👑 Рейтинг: ${utils.sp(message.user.rating)}`,
      { attachment: `photo-178396242_457247081` }
    )
  }
  if (prize === 9) {
    message.user.bonustime = getUnix() + 86400000
    message.user.balance += 100000000000
    bot(
      `бонус +100.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`,
      { attachment: `photo-178396242_457247078` }
    )
  }
  if (prize === 10) {
    message.user.bonustime = getUnix() + 86400000
    message.user.balance += 500000000000
    bot(
      `бонус +500.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`,
      { attachment: `photo-178396242_457247079` }
    )
  }

  if (prize === 11) {
    message.user.bonustime = getUnix() + 86400000
    message.user.balance += 50000000000
    bot(
      `бонус +50.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`,
      { attachment: `photo-178396242_457247084` }
    )
  }

  if (prize === 12) {
    message.user.bonustime = getUnix() + 86400000
    message.user.balance += 100000000000
    bot(
      `бонус +100.000.000.000$ ${smilesuccess}
		💰 Баланс: ${utils.sp(message.user.balance)}$`,
      { attachment: `photo-178396242_457247079` }
    )
  }
})
gabella.bot(/^(?:мой брак)$/i, async (message, bot) => {
  if (message.user.marriage.partner < 1) return bot(`Вы не состоите в браке.`)
  return bot(`
		👬 Вы браке с: [id${users[message.user.marriage.partner].id}|${users[message.user.marriage.partner].tag}]

		`)
  //${unixStampLeft(message.user.brak - Date.now())}
})
/*⌛ Брак длится: ${unixStampLeft(message.user.brak - () * 1000)}
✨ Детей: ${message.user.baby}
💕 Занимались любовью:
*/

gabella.bot(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`)
  if (Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`)

  let user = users.find(x => x.uid === Number(message.args[1]))
  if (!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`)

  if (user.marriage.partner) return bot(`этот человек уже состоит в браке`)

  if (user.marriage.requests.find(x => x == message.args[1])) return bot(`вы уже делали предложение этому игроку`)

  if (message.user.marriage.requests.find(x => x == message.args[1])) {
    message.user.marriage.requests = []
    message.user.brak = 1
    message.user.marriage.partner = user.uid

    user.marriage.requests = []
    user.brak = 1
    user.marriage.partner = message.user.uid

    return bot(`вы вступили в брак с игроком "${user.tag}"`)
    vk.api.messages.send({ user_id: user.id, message: ` <3 [id${message.user.id}|${message.user.tag}] Принял вашу заявку в брак!` })
  }

  user.marriage.requests.push(message.user.uid)
  return bot(`вы сделали предложение игроку "${user.tag}"`)

  vk.api.messages.send({
    user_id: user.id,
    message: ` <3 [id${message.user.id}|${message.user.tag}] Подал заявку на брак с вами!\nДля вступления в брак, напишите <Брак [${message.user.uid}]>`
  })
})

gabella.bot(/^(?:браки)$/i, async (message, bot) => {
  if (message.user.marriage.partner) return bot(`вы уже состоите в браке`)
  return bot(`предложения:
		${message.user.marriage.requests.map(x => `от игрока "${users[x].tag}" (ID: ${x})`).join("\n")}`)
})

gabella.bot(/^(?:брак развод)$/i, async (message, bot) => {
  if (!message.user.marriage.partner) return bot(`вы не состоите в браке`)

  let user = users.find(x => x.uid === message.user.marriage.partner)

  message.user.marriage.partner = false
  message.user.brak = false
  user.brak = false
  user.marriage.partner = false

  return bot(`вы теперь свободный человек`)
  vk.api.messages.send({ user_id: user.id, message: `  [id${message.user.id}|${message.user.tag}] Развелся с вами!` })
})
gabella.bot(/^(?:профиль|проф|ак|акк|акаунт|аккаунт)$/i, async (message, bot) => {
  let text = ``
  clanid = message.user.clanid

  text += `\n✨ Ваши привилегии:\n`
  text += `🔎 Игровой ID: ${message.user.gameuid}\n`
  text += `💾 VKID: ${message.user.id}\n`
  if (message.user.pomoshnik) text += `🔥 Помощник Создателя.\n`
  if (message.user.prem) text += `${prem[message.user.prem - 1].icon} ${prem[message.user.prem - 1].name}\n`
  if (message.user.vip) text += `${vip[message.user.vip - 1].icon} ${vip[message.user.vip - 1].name}\n`
  if (message.user.settings.adm) text += `${adm[message.user.settings.adm - 1].icon} ${adm[message.user.settings.adm - 1].name}\n`
  if (message.user.sozd) text += `${sozd[message.user.sozd - 1].icon} ${sozd[message.user.sozd - 1].name}\n`
  if (message.user.zam) text += `${zam[message.user.zam - 1].icon} ${zam[message.user.zam - 1].name}\n`
  if (message.user.ko) text += `${ko[message.user.ko - 1].icon} ${ko[message.user.ko - 1].name}\n`
  if (message.user.kor) text += `${kor[message.user.kor - 1].icon} ${kor[message.user.kor - 1].name}\n`
  if (message.user.don) text += `${don[message.user.don - 1].icon} ${don[message.user.don - 1].name}\n`
  if (message.user.hel) text += `${hel[message.user.hel - 1].icon} ${hel[message.user.hel - 1].name}\n`
  if (message.user.ya) text += `${ya[message.user.ya - 1].icon} ${ya[message.user.ya - 1].name}\n`
  if (message.user.an) text += `${an[message.user.an - 1].icon} ${an[message.user.an - 1].name}\n`
  if (message.user.orig) text += `${orig[message.user.orig - 1].icon} ${orig[message.user.orig - 1].name}\n`
  if (message.user.pod) text += `${pod[message.user.pod - 1].icon} ${pod[message.user.pod - 1].name}\n`
  if (message.user.cov) text += `${cov[message.user.cov - 1].icon} ${cov[message.user.cov - 1].name}\n`
  if (message.user.po) text += `${po[message.user.po - 1].icon} ${po[message.user.po - 1].name}\n`
  if (message.user.pan) text += `${pan[message.user.pan - 1].icon} ${pan[message.user.pan - 1].name}\n`
  if (clans[clanid]) {
    text += `⚔ Вы состоите в клане: ${clans[clanid].name}\n`
  }
  if (message.user.vampir) text += `🧛 Вампир\n`
  if (message.user.prez) text += `🤵 Мэр\n`
  if (message.user.soz) text += `${soz[message.user.soz - 1].icon} ${soz[message.user.soz - 1].name}\n`
  text += `\n🏠 Ваша статистика:\n`
  text += `🏆 У вас опыта: ${utils.sp(message.user.opit)}\n`
  text += `💰 Баланс: ${utils.sp(message.user.balance)}$\n`
  text += `💳 Денег в банке: ${utils.sp(message.user.bank)}$\n`
  text += `👑 GabellaCoin: ${utils.sp(message.user.donat)}\n`
  text += `💽 Биткоинов: ${utils.sp(message.user.btc)}฿\n`
  text += `👑 Рейтинг: ${utils.sp(message.user.rating)}\n`
  text += `🏋 У вас энергии: ${utils.sp(message.user.energy)}\n`

  if (
    message.user.transport.car ||
    message.user.misc.tank ||
    message.user.transport.yacht ||
    message.user.realty.home ||
    message.user.misc.phone ||
    message.user.misc.pistolet ||
    message.user.telivisor ||
    message.user.pristavka ||
    message.user.misc.farm ||
    message.user.business ||
    message.user.planet ||
    message.user.misc.pet ||
    message.user.clan ||
    message.user.misc.odezda ||
    message.user.misc.computer ||
    message.user.business2 ||
    message.user.business3
  ) {
    text += `\n🔑 Ваше имущество:\n`

    if (message.user.vvork) text += `⠀💼 Работа: ${vvorks[message.user.vvork - 1].name}\n`
    if (message.user.stran) text += `⠀💒 Страна: ${strana[message.user.stran - 1].name}\n`
    if (message.user.youtub) text += `⠀📽 Ютуб канал: ${message.user.youtub}.\n`
    if (message.user.gorod) text += `⠀🔥 Город: ${message.user.gorod}.\n`
    if (message.user.transport.car) text += `⠀🚗 Машина: ${cars[message.user.transport.car - 1].name}\n`
    if (message.user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`
    if (message.user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`
    if (message.user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`

    if (message.user.realty.home) text += `⠀🏠 Дом: ${homes[message.user.realty.home - 1].name}\n`
    if (message.user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`

    if (message.user.odezda) text += `⠀👘 Одежда: ${odezdi[message.user.odezda - 1].name}\n`

    if (message.user.misc.pistolet) text += `⠀🔫 Пистолет: ${pistolets[message.user.misc.pistolet - 1].name}\n`
    if (message.user.misc.avtomat) text += `⠀💣 Автоматы: ${avtomats[message.user.misc.avtomat - 1].name}\n`
    if (message.user.misc.phone) text += `⠀📱 Телефон: ${phones[message.user.misc.phone - 1].name}\n`
    if (message.user.misc.telivisor) text += `⠀💻 Телевизор: ${telivisors[message.user.misc.telivisor - 1].name}\n`
    if (message.user.misc.pristavka) text += `⠀🎮 Приставка: ${pristavkas[message.user.pristavka - 1].name}\n`
    if (message.user.misc.computer) text += `⠀🖥 Компьютер: ${computers[message.user.misc.computer - 1].name}\n`

    if (message.user.misc.pet) text += `⠀${pets[message.user.misc.pet - 1].icon} Питомец: ${pets[message.user.misc.pet - 1].name}\n`
    if (message.user.planet) text += `⠀${planets[message.user.planet - 1].icon} Планета: ${planets[message.user.planet - 1].name}\n`
    if (message.user.misc.farm) text += `⠀🔋 Фермы: ${farms[message.user.misc.farm - 1].name} (x${message.user.farms})\n`
    if (message.user.business) text += `⠀${businesses[message.user.business - 1].icon} Бизнес: ${businesses[message.user.business - 1].name}\n`
    if (message.user.business2)
      text += `⠀${businesses2[message.user.business2 - 1].icon} Второй бизнес: ${businesses2[message.user.business2 - 1].name}\n`
    if (message.user.business3)
      text += `⠀${businesses3[message.user.business3 - 1].icon} Третий бизнес: ${businesses3[message.user.business3 - 1].name}\n`
  }

  if (message.user.marriage.partner)
    text += `\n👬 В браке с: [id${users[message.user.marriage.partner].id}|${users[message.user.marriage.partner].tag}]`
  text += `\n⏰ Регистрация: ${message.user.regDate}, (${moment(message.user.regDate, "L").fromNow()}).`
  text += `\n🔌 Последняя активность: Только что.\n`
  return bot(`твой профиль:\n${text}`)
})

gabella.bot(/^(?:баланс|бпиланс|бпланс|бушланс|биланс|бчланс|баланч|деньги|мани|майни|бабки|бабло)$/i, async (message, bot) => {
  let text = `
	💸 Денег: ${utils.sp(message.user.balance)}$`
  if (message.user.bank) text += `\n💳 У вас банке ${utils.sp(message.user.bank)}$`
  if (message.user.btc) text += `\n💽 Биткоинов ${utils.sp(message.user.btc)}฿`
  if (message.user.mandarin) text += `\n🍊 Мандарин: ${utils.sp(message.user.mandarin)}`
  text += `\n👑 GabellaCoin: ${utils.sp(message.user.donat)}`
  if (message.user.zhelezo) text += `\n⚙ ${utils.sp(message.user.zhelezo)} железа`
  if (message.user.zoloto) text += `\n🏵 ${utils.sp(message.user.zoloto)} золота`
  if (message.user.almaz) text += `\n💎 ${utils.sp(message.user.almaz)} алмазов`
  if (message.user.materia) text += `\n🌌 ${utils.sp(message.user.materia)} материи`
  if (message.user.brilliant) text += `\n💧 ${utils.sp(message.user.brilliant)} бриллиантов`
  if (message.user.rubin) text += `\n❤ ${utils.sp(message.user.rubin)} рубинов`
  if (message.user.zp) text += `\n🌠 ${utils.sp(message.user.zp)} звёздной пыли`
  if (message.user.meteor) text += `\n☄ ${utils.sp(message.user.meteor)} метеорита`

  return bot(text)
})

gabella.bot(/^(?:банк)$/i, async (message, bot) => {
  if (message.user.bank < 1) return bot(`ваш банковский счет пуст.`)
  return bot(`на балансе в банке ${message.user.bank}$
✍🏻 Введите "Банк [кол-во]" для пополнения`)
})

gabella.bot(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.bank)

  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.args[1] <= 0) return

  if (message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`)
  else if (message.args[1] <= message.user.bank) {
    message.user.balance += message.args[1]
    message.user.bank -= message.args[1]

    return bot(`вы сняли ${utils.sp(message.args[1])}$
💳 Остаток на счёте: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`)
  }
})

gabella.bot(/^(?:банк)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.user.bank + message.args[1] > 350000000000) return bot(`Ваш лимит банка 350.000.000.000 $`)
  //if(message.user.bank + message.args[1] > message.user.banklimit) return bot(`на счету в банке не может лежать одновременно больше ${message.user.banklimit}$`);

  if (message.args[1] < 1)
    return bot(`на балансе в банке ${message.user.bank}$
✍🏻 Введите "Банк снять [кол-во]" для снятия`)

  if (message.args[1] > message.user.balance)
    return bot(`на вашем балансе нет столько денег! ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.args[1] <= message.user.balance) {
    message.user.balance -= message.args[1]
    message.user.bank += message.args[1]

    return bot(`вы положили в банк ${utils.sp(message.args[1])}$ ${smilesuccess}
💰 На руках ${utils.sp(message.user.balance)}$`)
  }
})

gabella.bot(/^(?:рассылка)\s(выкл|вкл)$/i, async (message, bot) => {
  if (message.args[1].toLowerCase() === "выкл") {
    message.user.ras = false
    return bot(`рассылка отключена! 🔕`, {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Помощь"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Рассылка вкл"
              },
              color: "negative"
            }
          ]
        ]
      })
    })
  }

  if (message.args[1].toLowerCase() === "вкл") {
    message.user.ras = true
    return bot(`рассылка включена! 🔔`, {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Помощь"
              },
              color: "primary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Рассылка выкл"
              },
              color: "negative"
            }
          ]
        ]
      })
    })
  }
})
gabella.bot(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)
  if (message.args[1] > 100000) return bot(`нельзя покупать сразу более 100.000👑`)
  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.args[1] <= 0) return

  if (message.args[1] * 2000000000 > message.user.balance)
    return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.args[1] * 2000000000 <= message.user.balance) {
    message.user.balance -= message.args[1] * 2000000000
    message.user.rating += message.args[1]

    return bot(`вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 2000000000)}$`)
  }
})
gabella.bot(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")
  message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))

  if (message.args[2] <= 0) return
  if (message.user.timers.peredat >= 0) return bot(`вы сможете передать только через ${displayTime(message.user.timers.peredat)} ${smileerror}`)
  if (message.args[2] > message.user.settings.limitdeneg) return bot(`максимум можно перевести ${utils.sp(message.user.settings.limitdeneg)}$`)
  if (!message.user.settings.trade) return bot(`у вас установлен бан на передачи ${smileerror}`)

  if (message.args[2] > message.user.balance)
    return bot(
      `у Вас недостаточно денег ${smileerror}
💰 Баланс: ${utils.sp(message.user.balance)}$`,
      { attachment: "market-178396242_3881571" }
    )
  else if (message.args[2] <= message.user.balance) {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    if (user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`)

    message.user.balance -= message.args[2]
    user.balance += message.args[2]

    vk.api.messages.send({
      chat_id: 1234,
      message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n➡ Пользователю [id${user.id}|${user.tag}]: ${message.args[2]}$`
    })

    await bot(`вы перевели [id${user.id}|${user.tag}] ${utils.sp(message.args[2])}$ ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`)
    if (user.notifications)
      vk.api.messages.send({
        user_id: user.id,
        message: `[УВЕДОМЛЕНИЕ]
▶ Игрок [id${message.user.id}|${message.user.tag}] перевел вам ${utils.sp(message.args[2])}$!`
      })
  }
})

gabella.bot(/^(?:передать рейтинг)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")
  message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/gi, message.user.rating)

  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))

  if (message.args[2] <= 0) return
  if (message.user.timers.peredat >= 0) return bot(`вы сможете передать только через ${displayTime(message.user.timers.peredat)} ${smileerror}`)
  if (message.args[2] > message.user.settings.limitrating) return bot(`максимум можно перевести ${utils.sp(message.user.settings.limitrating)}👑`)
  if (!message.user.settings.trade) return bot(`у вас установлен бан на передачи ${smileerror}`)

  if (message.args[2] > message.user.rating)
    return bot(
      `у Вас недостаточно рейтинга ${smileerror}
💰 Баланс: ${utils.sp(message.user.rating)}👑`,
      { attachment: "market-178396242_3881571" }
    )
  else if (message.args[2] <= message.user.rating) {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)

    if (user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`)

    message.user.rating -= message.args[2]
    user.rating += message.args[2]

    await bot(`вы перевели ${user.tag} ${utils.sp(message.args[2])}👑 ${smilesuccess}
		💰 Ваш баланс: ${utils.sp(message.user.rating)}👑`)
    if (user.notifications)
      vk.api.messages.send({
        user_id: user.id,
        message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}👑!`
      })
  }
})

gabella.bot(/^(?:пинг)$/i, async (message, bot) => {
  return message.reply(`ПОНГ`)
})

gabella.bot(/^(?:кинг)$/i, async (message, bot) => {
  return message.reply(`КОНГ`)
})

gabella.bot(/^(?:Акция)$/i, async (message, bot) => {
  return message.reply(`
Как это работает?
1. Перейдите по персональной ссылке.

2. Вам необходимо перейти по персональной ссылке Gabella Bot (Она ниже), зарегистрироваться и выбрать один из тарифов виртуального хостинга, VDS, либо выделенных серверов.

3. После того, как Вы совершит первую оплату хостинга на срок месяц или больше, вы и Gabella Bot получите до 2000 рублей на баланс аккаунта.

Сколько вы получите за рекомендацию:
Если вы выбераете виртуальный хостинг вы оба получите по 200 рублей.
Если вы выбераете VDS, вы оба получите по 300 рублей.
Если вы выбераете выделенный сервер, вы оба получите по 2000 рублей.

▶ Совет! 
После оплаты от 189 рублей, вы получите на баланс аккаунта 300 рублей.

🔎 Персональная ссылка: 
https://timeweb.com/ru/services/vds?utm_source=cd89852&utm_medium=timeweb&utm_campaign=timeweb-bring-a-friend
https://timeweb.com/ru/services/vds?utm_source=cd89852&utm_medium=timeweb&utm_campaign=timeweb-bring-a-friend
https://timeweb.com/ru/services/vds?utm_source=cd89852&utm_medium=timeweb&utm_campaign=timeweb-bring-a-friend
https://timeweb.com/ru/services/vds?utm_source=cd89852&utm_medium=timeweb&utm_campaign=timeweb-bring-a-friend
https://timeweb.com/ru/services/vds?utm_source=cd89852&utm_medium=timeweb&utm_campaign=timeweb-bring-a-friend`)
})

gabella.bot(/^(?:рейтинг)$/i, async (message, bot) => {
  return message.reply(`ваш рейтинг ${utils.sp(message.user.rating)}👑`)
})

gabella.bot(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
  if (message.args[1].toLowerCase() === "вкл") {
    message.user.mention = true
    return bot(`гиперссылка включена!`)
  }

  if (message.args[1].toLowerCase() === "выкл") {
    message.user.mention = false
    return bot(`гиперссылка отключена!`)
  }
})
gabella.bot(/^(?:айди)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return bot(`Доступ закрыт!`)

  if (message.args[1].length < 1) return bot(`вы указали короткий айди. ${smileerror}`)
  message.args[1] = message.args[1].replace(
    /(\.|\,|\?|\>|\<|\||\-|\+|\_|\)|\(|\!|\@|\"|\#|\№|\$|\;|\%|\^|\:|\*|\&|\/|\\|\~|\`|\[|\]|\{|\}|\"|\')/gi,
    ""
  )
  message.args[1] = message.args[1].replace(
    /(ё|й|ц|у|к|е|н|г|ш|щ|з|х|ъ|ф|ы|в|а|п|р|о|л|д|ж|э|я|ч|с|м|и|т|ь|б|ю|q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m)/gi,
    ""
  )

  let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`])
  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  message.user.gameuid = `${message.args[1]}`
  let smilenick = utils.pick([`😯`, `🙂`, `☺`])
  return bot([`[${message.user.gameuid}] Твой новый фейковый айдишник!\nТвой оригинальный айди [${message.user.uid}] ${smilenick}`])
})
gabella.bot(/^(?:Сбросить айди)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return bot(`Доступ закрыт!`)

  let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`])

  message.user.gameuid = `${message.user.uid}`
  let smilenick = utils.pick([`😯`, `🙂`, `☺`])
  return bot([`фейк ID удален!! ${smilenick}`])
})
gabella.bot(/^(?:габелла ютуб)\s(.*)$/i, async (message, bot, reply) => {
  message.args[1] = message.args[1].replace(/(\s)/gi, "+")
  return message.reply(
    `[id${message.user.id}|${message.user.tag}], нашел тебе ролики по твоему запросу: https://www.youtube.com/results?search_query=${message.args[1]}`
  )
})
gabella.bot(/^(?:габелла Яндекс)\s(.*)$/i, async (message, bot, reply) => {
  message.args[1] = message.args[1].replace(/(\s)/gi, "%20")
  return message.reply(
    `[id${message.user.id}|${message.user.tag}], нашел тебе в Яндексе по твоему запросу: https://yandex.ru/search/?text=${message.args[1]}&clid=2261451&banerid=0699000019%3ASW-6e530dca5dc9&win=315&&lr=56`
  )
})
gabella.bot(/^(?:габелла вики|габелла википедия)\s(.*)$/i, async (message, bot, reply) => {
  message.args[1] = message.args[1].replace(/(\s)/gi, "_")
  return message.reply(
    `[id${message.user.id}|${message.user.tag}], нашел тебе статью по запросу твоему запросу: https://ru.wikipedia.org/wiki/${message.args[1]}`
  )
})
gabella.bot(/^(?:ник)\s(.*)$/i, async (message, bot) => {
  if (message.user.btag == true) return bot(`У вас бан ника!`)

  message.args[1] = message.args[1].replace(/(\.|\,)/gi, ",")
  message.args[1] = message.args[1].replace(/(\[|\()/gi, "{")
  message.args[1] = message.args[1].replace(/(\]|\))/gi, "}")

  if (message.args[1].length > message.user.nicklimit) return bot(`вы указали длинный ник. ${smileerror}`)
  if (message.args[1].length <= 2) {
    return bot(`вы указали слишком короткий ник ⛔
❓Минимальная длина ника 3 символа.`)
  }
  let zaprets1 = message.args[1].toLowerCase()
  var zapret =
    /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние|vto.pe|создатель)/
  var sss = zapret.test(zaprets1)

  if (zapret.test(zaprets1) == true || message.args[1].toLowerCase() === "") {
    var check = true
    return bot(`вы используете запрещенные слова/символы, ссылки запрещены.\n\n😉 Придумайте другой НИК.`)
  }
  let text = message.args[1].toLowerCase()
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
  var lol = filter0.test(text)
  var lol1 = filter1.test(text)

  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true
    return bot(`подозрительная ссылка 🆘`)
  }
  message.user.tag = message.args[1]
  let smilenick = utils.pick([`😯`, `🙂`, `☺`])
  let ggtext = utils.pick([`фантастический`, `крутой`, `классный`, `прикольный`])
  return bot(`${ggtext} ник! ${smilenick}`)
})
gabella.bot(/^(?:кто)\s(.*)$/i, async (message, bot) => {
  if (message.args[1].length > 25) return message.send(`Слишком длинный запрос`)
  let ran = utils.random(1, 5)
  let lal = false
  message.args[1] = nikz(message.args[1])
  let ttt = message.args[1].toString()
  message.args[1] = message.args[1].replace(/(\.|\,|\?|\&|\*|\#|\№|\<|\>|\-|\+|\=|\_|\!|\@|\")/gi, "")
  if (!message.isChat) return bot(`команда работает только в беседе!`)
  if (ran == 3) return bot(`${message.args[1]}, не был определён`)
  let aa = utils.random(1, 5)
  if (aa == 2) {
    let { groups } = await vk.api.messages.getConversationMembers({
      peer_id: message.peerId
    })
    let group = utils.pick(groups)
    let i = group.id
    let i2 = "Сообщество "
    let i3 = `<<` + group.name + `>>`
    return message.send(`[id${message.user.id}|${message.user.tag}], ${message.args[1]} - @club${i} (${i2} ${i3})`)
  } else {
    let { profiles } = await vk.api.messages.getConversationMembers({
      peer_id: message.peerId
    })
    let profile = utils.pick(profiles)
    let i = profile.id
    let i2 = profile.first_name
    let i3 = profile.last_name
    if (i == message.senderId) return bot(`[id${message.user.id}|${message.user.tag}] ${message.args[1]} - @id${i} (Вы)`)
    await message.send(`[id${message.user.id}|${message.user.tag}], ${message.args[1]} - @id${i} (${i2} ${i3})`)
  }
})
gabella.bot(/^(?:габелла правила)$/i, async (message, bot) => {
  if (message.chatId == null) {
    await message.send(`[id${message.user.id}|${message.user.tag}], Правила можно устанавливать только в беседе. ${smileerror}`)
    return message.sendSticker(8471)
  }
  let chat = chats.find(x => x.chat_idd === Number(message.chatId))
  if (chat.zakrep == false) return bot(`В беседе не установлены правила! ${smileerror}`)
  return message.send(`[id${message.user.id}|${message.user.tag}], Правила беседы:\n\n${chat.zakrep}

🆘 Сменить правила - {габелла правила "правила"}.\nУдалить - {габелла удалить правила}`)
})
gabella.bot(/^(?:габелла удалить правила)$/i, async (message, bot) => {
  if (message.chatId == null) {
    await message.send(`[id${message.user.id}|${message.user.tag}], Правила можно устанавливать только в беседе. ${smileerror}`)
    return message.sendSticker(8471)
  }
  let chat = chats.find(x => x.chat_idd === Number(message.chatId))
  let user = message.user
  let chatId = user.chatId

  chat.zakrep = false

  return message.send(`[id${message.user.id}|${message.user.tag}], Правила были удалены!`)
})
gabella.bot(/^(?:габелла правила)\s(.*)$/i, async (message, bot) => {
  if (message.chatId == null) {
    await message.send(`[id${message.user.id}|${message.user.tag}], Правила можно устанавливать только в беседе. ${smileerror}`)
    return message.sendSticker(8471)
  }

  message.args[1] = message.args[1].replace(/(\.|\,)/gi, ",")
  message.args[1] = message.args[1].replace(/(\[|\()/gi, "{")
  message.args[1] = message.args[1].replace(/(\]|\))/gi, "}")
  message.args[1] = message.args[1].replace(/(\\|\/)/gi, "\n")
  let chat = chats.find(x => x.chat_idd === Number(message.chatId))

  if (message.args[1].length > 1000) return bot(`слишком много символов. ${smileerror}`)
  if (message.args[1].length <= 2) {
    return bot(`Мало символов.`)
  }
  let zaprets1 = message.args[1].toLowerCase()
  var zapret =
    /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние|vto.pe|создатель)/
  var sss = zapret.test(zaprets1)

  if (zapret.test(zaprets1) == true || message.args[1].toLowerCase() === "") {
    var check = true
    return bot(`вы используете запрещенные слова/символы, ссылки запрещены.\n\n`)
  }
  let text = message.args[1].toLowerCase()
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
  var lol = filter0.test(text)
  var lol1 = filter1.test(text)

  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true
    return bot(`подозрительная ссылка 🆘`)
  }
  let smilenick = utils.pick([`😯`, `🙂`, `☺`])
  let user = message.user
  let chatId = user.chatId

  chat.zakrep = message.args[1]
  return bot(`Установлены новые правила беседы! ${smilenick}\n\nУзнать их можно по команде [Габелла правила].`)
})

gabella.bot(/^(?:биткоин|биткойн|биткоины|биткойны|бтс)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")

  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.args[1] <= 0) return

  if (message.args[1] * btc > message.user.balance)
    return bot(
      `у Вас недостаточно денег ${smileerror}
Курс биткоина: ${btc}$`,
      { attachment: "market-178396242_3881560" }
    )
  else if (message.args[1] * btc <= message.user.balance) {
    message.user.balance -= message.args[1] * btc
    message.user.btc += message.args[1]

    return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}$`)
  }
})

gabella.bot(/^(?:магазин)$/i, async (message, bot) => {
  return bot(`разделы магазина:

🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты

🏘 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🌇 Квартиры

👕 Одежда:
⠀⠀👘 Одежда

📌 Остальное:
⠀⠀🐌 Питомцы
⠀⠀📱 Телефоны 
⠀⠀💻 Телевизоры
⠀⠀🎮 Приставки
⠀⠀🖥 Компьютеры
⠀⠀🔫 Пистолеты
⠀⠀💣 Автоматы
⠀⠀⭐ Фермы
⠀⠀👑 Рейтинг [кол-во] - $2 млрд
⠀⠀💼 Бизнесы
⠀⠀🖨 Принтеры
⠀⠀💽 Биткоин [кол-во]
⠀⠀🧳 Кейсы
⠀⠀

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "Рейтинг 1"`)
})
/*==========================================================================================================*/
/*=========================================ПРОДАЖА=========================================================*/
gabella.bot(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
  let options = {
    count: null
  }

  message.args[2] = message.args[1].split(" ")[1]

  if (!message.args[2]) options.count = 1
  if (message.args[2]) {
    message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
    message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
    message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

    message.args[2] = Math.floor(Number(message.args[2]))
    if (message.args[2] <= 0) return
    else if (message.args[2]) options.count = message.args[2]
  }

  if (/машин/i.test(message.args[1].toLowerCase())) {
    if (!message.user.transport.car) return bot(`у Вас нет машины для продажи 😔`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85)

    message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85)
    message.user.transport.car = 0
    message.user.prok_1 = 0
    message.user.prok_2 = 0
    message.user.prok_3 = 0
    message.user.prok_4 = 0
    message.user.prok_5 = 0
    message.user.prok_6 = 0
    message.user.prok_7 = 0
    message.user.prok_8 = 0
    message.user.prok_9 = 0
    message.user.prok_10 = 1
    message.user.maxshini = 0
    message.user.maxdiski = 0
    message.user.maxtyrbo = 0
    message.user.maxspitnik = 0
    message.user.maxprygini = 0
    message.user.maxspoyler = 0
    message.user.maxnos = 0
    message.user.maxtoplivo = 0
    message.user.maxdvigok = 0

    return bot(`вы продали свою машину за ${utils.sp(a)}$`)
  }

  if (/ледянку/i.test(message.args[1].toLowerCase())) {
    if (!message.user.ledyanka) return bot(`у Вас нет ледянки для продажи 😔`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(ledyankas[message.user.ledyanka - 1].cost * 0.85)

    message.user.mandarin += Math.floor(ledyankas[message.user.ledyanka - 1].cost * 0.85)
    message.user.ledyanka = 0
    message.user.pro4_1 = 0
    message.user.pro4_2 = 0
    message.user.pro4_3 = 0
    message.user.pro4_4 = 0

    return bot(`вы продали свою машину за ${utils.sp(a)} мандарин`)
  }

  if (/питом/i.test(message.args[1].toLowerCase())) {
    if (!message.user.misc.pet) return bot(`у вас нет питомца ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85)

    message.user.balance += Math.floor(pets[message.user.misc.pet - 1].cost * 0.85)
    message.user.misc.pet = 0
    message.user.petom.lvl = 0
    message.user.petom.poterl = false

    return bot(`вы продали своего питомца за ${utils.sp(a)}$`)
  }

  if (/железо/i.test(message.args[1].toLowerCase())) {
    if (message.user.zhelezo < 1) return bot(`у Вас нет железа. ⚠`)
    if (!message.args[2]) options.count = 1
    let a2 = message.user.zhelezo * 15000

    var zhelezosda = message.user.zhelezo

    message.user.balance += message.user.zhelezo * 15000
    message.user.zhelezo = 0

    return bot(`вы продали ${zhelezosda} железа за ${utils.sp(a2)}$ ✅`)
  }

  if (/алмаз/i.test(message.args[1].toLowerCase())) {
    if (message.user.almaz < 1) return bot(`у Вас нет алмазов. ⚠`)
    if (!message.args[2]) options.count = 1
    let a3 = message.user.almaz * 10000000

    var zhelezosda2 = message.user.almaz

    message.user.balance += message.user.almaz * 100000
    message.user.almaz = 0

    return bot(`вы продали ${zhelezosda2} алмазов за ${utils.sp(a3)}$ ✅`)
  }

  if (/метеор/i.test(message.args[1].toLowerCase())) {
    if (message.user.meteor < 1) return bot(`у Вас нет метеорита. ⚠`)
    if (!message.args[2]) options.count = 1
    let a2 = message.user.meteor * 1000000000000

    var zhelezosda11 = message.user.meteor

    message.user.balance += message.user.meteor * 1000000000000
    message.user.meteor = 0

    return bot(`вы продали ${zhelezosda11} метеорита за ${utils.sp(a2)}$ ✅`)
  }

  if (/материю/i.test(message.args[1].toLowerCase())) {
    if (message.user.materia < 1) return bot(`у Вас нет материи. ⚠`)
    if (!message.args[2]) options.count = 1
    let a3 = message.user.materia * 10000000000

    var zhelezosda4 = message.user.materia

    message.user.balance += message.user.materia * 10000000000
    message.user.materia = 0

    return bot(`вы продали ${zhelezosda4} материю за ${utils.sp(a3)}$ ✅`)
  }

  if (/золото/i.test(message.args[1].toLowerCase())) {
    if (message.user.zoloto < 1) return bot(`у Вас нет золота. ⚠`)
    if (!message.args[2]) options.count = 1
    let a4 = message.user.zoloto * 50000

    var zhelezosda3 = message.user.zoloto

    message.user.balance += message.user.zoloto * 50000
    message.user.zoloto = 0

    return bot(`вы продали ${zhelezosda3} золота за ${utils.sp(a4)}$ ✅`)
  }

  if (/бриллианты/i.test(message.args[1].toLowerCase())) {
    if (message.user.brilliant < 1) return bot(`у Вас нет бриллиантов. ✅`)
    if (!message.args[2]) options.count = 1
    let a4 = message.user.brilliant * 500000000

    var zhelezosda5 = message.user.brilliant

    message.user.balance += message.user.brilliant * 500000000
    message.user.brilliant = 0

    return bot(`вы продали ${zhelezosda5} бриллиантов за ${utils.sp(a4)}$ ✅`)
  }

  if (/звёздную пыль|зп/i.test(message.args[1].toLowerCase())) {
    if (message.user.zp < 1) return bot(`у Вас нет звёздной пыли. ✅`)
    if (!message.args[2]) options.count = 1
    let a4 = message.user.zp * 50000000000

    var zhelezosda7 = message.user.zp

    message.user.balance += message.user.zp * 50000000000
    message.user.zp = 0

    return bot(`вы продали ${zhelezosda7} звёздной пыли за ${utils.sp(a4)}$ ✅`)
  }

  if (/рубины/i.test(message.args[1].toLowerCase())) {
    if (message.user.rubin < 1) return bot(`у Вас нет рубинов.✅`)
    if (!message.args[2]) options.count = 1
    let a4 = message.user.rubin * 250000000000

    var zhelezosda6 = message.user.rubin

    message.user.balance += message.user.rubin * 250000000000
    message.user.rubin = 0

    return bot(`вы продали ${zhelezosda6} рубинов за ${utils.sp(a4)}$ ✅`)
  }
  if (/яхт/i.test(message.args[1].toLowerCase())) {
    if (!message.user.transport.yacht) return bot(`у вас нет яхты ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85)

    message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85)
    message.user.transport.yacht = 0
    message.user.prot_1 = 0
    message.user.prot_2 = 0
    message.user.prot_3 = 0
    message.user.prot_4 = 0
    message.user.prot_5 = 0
    message.user.prot_6 = 0
    message.user.prot_7 = 0
    message.user.prot_8 = 0
    message.user.prot_9 = 0
    message.user.prot_10 = 1

    return bot(`вы продали свою яхту за ${utils.sp(a)}$`)
  }

  if (/одежд/i.test(message.args[1].toLowerCase())) {
    if (!message.user.odezda) return bot(`у Вас нет одежды для продажи ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(odezdi[message.user.odezda - 1].cost * 0.5)

    message.user.balance += Math.floor(odezdi[message.user.odezda - 1].cost * 0.5)
    message.user.odezda = 0

    return bot(`вы продали свою одежду за ${utils.sp(a)}$ 🤑`)
  }
  if (/телевизор/i.test(message.args[1].toLowerCase())) {
    if (!message.user.telivisors) return bot(`у Вас нет телевизора для продажи ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(telivisors[message.user.telivisors - 1].cost * 0.5)

    message.user.balance += Math.floor(telivisors[message.user.telivisors - 1].cost * 0.5)
    message.user.telivisors = 0

    return bot(`вы продали свой телевизор за ${utils.sp(a)}$ 🤑`)
  }
  if (/приставку/i.test(message.args[1].toLowerCase())) {
    if (!message.user.pristavka) return bot(`у Вас нет приставки для продажи ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(pristavkas[message.user.pristavka - 1].cost * 0.5)

    message.user.balance += Math.floor(pristavkas[message.user.pristavka - 1].cost * 0.5)
    message.user.pristavka = 0

    return bot(`вы продали свою приставку за ${utils.sp(a)}$ 🤑`)
  }

  if (/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase())) {
    if (!message.user.transport.airplane) return bot(`у вас нет самолёта ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85)

    message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85)
    message.user.transport.airplane = 0

    return bot(`вы продали свой самолёт за ${utils.sp(a)}$`)
  }

  if (/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase())) {
    if (!message.user.transport.helicopter) return bot(`у вас нет самолёта ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85)

    message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85)
    message.user.transport.helicopter = 0

    return bot(`вы продали свой вертолёт за ${utils.sp(a)}$`)
  }

  if (/дом/i.test(message.args[1].toLowerCase())) {
    if (!message.user.realty.home) return bot(`у вас нет дома ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85)

    message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85)
    message.user.realty.home = 0

    return bot(`вы продали свой дом за ${utils.sp(a)}$`)
  }

  if (/квартир/i.test(message.args[1].toLowerCase())) {
    if (!message.user.realty.apartment) return bot(`у вас нет квартиры ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85)

    message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85)
    message.user.realty.apartment = 0
    pistolet

    return bot(`вы продали свою квартиру за ${utils.sp(a)}$`)
  }

  if (/пистолет/i.test(message.args[1].toLowerCase())) {
    if (!message.user.misc.pistolet) return bot(`у вас нет пистолета ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(pistolets[message.user.misc.pistolet - 1].cost * 0.85)

    message.user.balance += Math.floor(pistolets[message.user.misc.pistolet - 1].cost * 0.85)
    message.user.misc.pistolet = 0

    return bot(`вы продали свой пистолет за ${utils.sp(a)}$`)
  }

  if (/телефон/i.test(message.args[1].toLowerCase())) {
    if (!message.user.misc.phone) return bot(`у вас нет телефона ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85)

    message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85)
    message.user.misc.phone = 0

    return bot(`вы продали свой телефон за ${utils.sp(a)}$`)
  }

  if (/автомат/i.test(message.args[1].toLowerCase())) {
    if (!message.user.misc.avtomat) return bot(`у вас нет автомата ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(avtomats[message.user.misc.avtomat - 1].cost * 0.85)

    message.user.balance += Math.floor(avtomats[message.user.misc.avtomat - 1].cost * 0.85)
    message.user.misc.avtomat = 0

    return bot(`вы продали свой автомат за ${utils.sp(a)}$`)
  }

  if (/компьютер/i.test(message.args[1].toLowerCase())) {
    if (!message.user.misc.computer) return bot(`у вас нет компьютера ${smileerror}`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(computers[message.user.misc.computer - 1].cost * 0.85)

    message.user.balance += Math.floor(computers[message.user.misc.computer - 1].cost * 0.85)
    message.user.misc.computer = 0

    return bot(`вы продали свой компьютер за ${utils.sp(a)}$`)
  }

  if (/ферм(у|ы)/i.test(message.args[1].toLowerCase())) {
    if (message.user.misc.farm == 0)
      return bot(`у вас нет фермы ${smileerror}
		❓ Для покупки введите «Фермы»`)
    if (options.count > message.user.farms)
      return bot(`у вас нет столько ферм ${smileerror}
		❓ Для покупки введите «Фермы»`)
    if (!message.args[2]) options.count = message.user.farms
    if (options.count <= 0) return bot(`вы не можете продать столько ферм ${smileerror}`)
    let a = Math.floor(farms[message.user.misc.farm - 1].cost * options.count * 0.85)
    let b = Math.floor(farms[message.user.misc.farm - 1].cost * 0.25)

    message.user.balance += a
    message.user.farms -= options.count
    if (message.user.farms == 0) message.user.misc.farm = 0

    return bot(`вы продали (${utils.sp(options.count)}х) своих ферм за ${utils.sp(a)}$`, { attachment: `photo-178396242_457247142` })
  }

  if (/бизнес 2/i.test(message.args[1].toLowerCase())) {
    if (!message.user.business2)
      return bot(`у вас нет бизнеса
		❓ Для покупки введите «Бизнесы»`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(businesses2[message.user.business2 - 1].cost * 0.85)
    let b = Math.floor(businesses2[message.user.business2 - 1].cost * 0.15)

    message.user.materia += Math.floor(a)
    message.user.business2 = 0
    message.user.bizlvl2 = 0
    message.user.biz2 = 0

    return bot(`вы продали свой бизнес за ${utils.sp(a)} материи. 🌌`)
  }

  if (/бизнес 3/i.test(message.args[1].toLowerCase())) {
    if (!message.user.business3)
      return bot(`у вас нет бизнеса
		❓ Для покупки введите «Бизнесы»`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(businesses3[message.user.business3 - 1].cost * 0.85)
    let b = Math.floor(businesses3[message.user.business3 - 1].cost * 0.15)

    message.user.zp += Math.floor(a)
    message.user.business3 = 0
    message.user.bizlvl3 = 0
    message.user.biz3 = 0

    return bot(`вы продали свой бизнес за ${utils.sp(a)} ✨.`)
  }

  if (/планету/i.test(message.args[1].toLowerCase())) {
    if (!message.user.planet)
      return bot(`у Вас нет планеты! 🌠
Для покупки планеты отправьте «Планеты»`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(planets[message.user.planet - 1].cost * 0.5)

    message.user.zp += Math.floor(a)
    message.user.planet = 0
    message.user.lvlplan = 0
    message.user.gen = 0

    return bot(`вы продали свою планету за ${utils.sp(a)} ✨ ${smilesuccess}`)
  }

  if (/бизнес/i.test(message.args[1].toLowerCase())) {
    if (!message.user.business)
      return bot(`у Вас нет бизнеса! 😕
Для покупки бизнеса отправьте «Бизнесы»`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(businesses[message.user.business - 1].cost * 0.5)

    message.user.balance += Math.floor(a)
    message.user.business = 0
    message.user.bizlvl = 0
    message.user.biz = 0

    return bot(`вы продали свой бизнес за ${utils.sp(a)}$ ${smilesuccess}`)
  }

  if (/принтер/i.test(message.args[1].toLowerCase())) {
    if (!message.user.printer)
      return bot(`у Вас нет принтера! 😕
Для покупки принтера отправьте «Принтеры»`)
    if (!message.args[2]) options.count = 1
    let a = Math.floor(printeri[message.user.printer - 1].cost * 0.5)

    message.user.balance += Math.floor(a)
    message.user.printer = 0
    message.user.pribil = 0

    return bot(`вы продали свой принтер за ${utils.sp(a)}$ ${smilesuccess}`)
  }

  if (/мандарин/i.test(message.args[1].toLowerCase())) {
    return bot(`Мандаринки нельзя продавать. :(`)
  }

  if (/биткоин/i.test(message.args[1].toLowerCase())) {
    if (options.count > message.user.btc)
      return bot(`недостаточно биткоинов
❓ Для покупки введите «Биткоин [кол-во]»`)
    if (message.user.btc < 1) return bot(`у Вас нет Биткоинов. ⚠`)
    if (!message.args[2]) options.count = message.user.btc
    let a = Math.floor(btc * options.count)

    message.user.balance += Math.floor(a)
    message.user.btc -= options.count

    return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}$`)
  }

  if (/рейтинг/i.test(message.args[1].toLowerCase())) {
    if (options.count > message.user.rating) return bot(`у вас нет столько рейтинга ${smileerror}`)
    if (message.user.rating < 1) return bot(`у Вас нет рейтинга. ⚠`)
    if (!message.args[2]) options.count = message.user.rating
    let a = 500000000 * options.count

    message.user.balance += Math.floor(a)
    message.user.rating -= options.count

    return bot(`вы продали ${options.count} ${utils.decl(options.count, ["рейтинг", "рейтинга", "рейтингов"])} за ${utils.sp(Math.floor(a))}$`)
  }
})
/*==========================================================================================================*/
/*=======================================ЗАРАБОТОК=========================================================*/
gabella.bot(/(?:💰 бизнес|бизнес)\s(?:снять 2)$/i, async (message, bot) => {
  if (!message.user.business2) return bot(`простите, но у вас нет бизнеса.`)
  if (!message.user.biz2) return bot(`на счету бизнеса нет материи. ${smileerror}`)

  const biz2_balance = message.user.biz2

  message.user.materia += message.user.biz2
  message.user.biz2 = 0

  return bot(`вы сняли с бизнеса ${utils.sp(biz2_balance)} материи.
		🌌 У вас: ${utils.sp(message.user.materia)}.`)
})

gabella.bot(/(?:💰 бизнес|бизнес)\s(?:снять 3)$/i, async (message, bot) => {
  if (!message.user.business3) return bot(`простите, но у вас нет бизнеса.`)
  if (!message.user.biz3) return bot(`на счету бизнеса нет пыли. ${smileerror}`)

  const biz3_balance = message.user.biz3

  message.user.zp += message.user.biz3
  message.user.biz3 = 0

  return bot(`вы сняли с бизнеса ${utils.sp(biz3_balance)} пыли.
		🌌 У вас: ${utils.sp(message.user.zp)}.`)
})
/*===================================КЕЙСЫ=========================================================*/
gabella.bot(/(?:кейс инфо 5)$/i, async (message, bot) => {
  await bot(`из "ПРЕМИУМ  Кейса" может выпасть: 

① Опыт
② Рейтинг
③ Игровая валюта
④ Межпланетный экспресс
⑤ МАРС
⑥ Адронный коллайдер
⑦ ПРЕМИУМ
⑧ VIP
⑨ ДОНАТ КЕЙС
①⓪ ПРЕМИУМ КЕЙС`)
})

gabella.bot(/(?:кейс открыть 5)$/i, async (message, bot) => {
  if (message.user.secretcase < 1) return bot(`у Вас нет "Премиум Кейса"! 🙄`)
  message.user.secretcase -= 1
  message.user.cases -= 1
  let win = random([
    1, 5, 6, 7, 6, 6, 7, 5, 5, 5, 2, 6, 7, 6, 6, 7, 5, 5, 5, 5, 3, 6, 7, 6, 6, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 6, 6, 7, 5, 5, 5, 5, 6, 6, 7, 6, 6,
    7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 5, 6, 7, 6, 6, 7, 5, 5, 5
  ])
  switch (win) {
    case 1:
      let pachal = random([1])
      message.user.pachal += pachal
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли "Донат Кейс" 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 6`
                },
                color: "primary"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 2:
      message.user.business = 11
      message.user.bizlvl = 1
      message.user.biz = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Межпланетный экспресс» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 3:
      message.user.business2 = 1
      message.user.bizlvl2 = 1
      message.user.biz2 = 0
      message.user.business = true
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Адронный коллайдер» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 4:
      let vip = random([1])
      message.user.vip += vip
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «VIP» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 10:
      let prem = random([1])
      message.user.prem += prem
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Premium» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 11:
      message.user.printer = 4
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «ЛУЧШИЙ ПРИНТЕР» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 5:
      let dengi = random([
        520000000000, 3000000000000, 4000000000000, 5000000000000, 15000000000000, 12000000000000, 3200000000000, 530000000000, 490000000000,
        4200000000000, 2900000000000, 130000000000, 129000000000000
      ])
      message.user.balance += dengi
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(dengi)}$ 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 6:
      let opit = random([
        37, 32, 65, 12, 32, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 230, 240, 250, 260, 270, 280, 290, 300, 232, 233,
        234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246
      ])
      message.user.opit += opit
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(opit)} опыта. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 7:
      let rating = random([
        23990, 23991, 23992, 23993, 23994, 23995, 23996, 23997, 23998, 23999, 24000, 24001, 24002, 24003, 24004, 24005, 24006, 24007
      ])
      message.user.rating += rating
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rating)} рейтинга. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 20:
      let secretcase = random([1, 5])
      message.user.secretcase += secretcase
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли "ПРЕМУМ КЕЙС" 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "primary"
              }
            ]
          ]
        })
      })
      break
    case 9:
      message.send(`[id${message.user.id}|${message.user.tag}], вы ничего не нашли. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 5`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
  }
})

gabella.bot(/(?:кейс инфо 7)$/i, async (message, bot) => {
  await bot(`из "Поссылки из Японии" может выпасть: 
① Опыт
② Игровая валюта
③ Рейтинг
④ Межпланетный экспресс
⑤ ПРЕМИУМ
⑥ Адронный коллайдер
⑦ ЛУЧШИЙ БИЗНЕС
⑧ VIP`)
})

gabella.bot(/(?:кейс инфо 8)$/i, async (message, bot) => {
  await bot(`из "Хэллоуинского кейса" может выпасть: 
① Опыт
② Игровая валюта
③ Рейтинг
④ Межпланетный экспресс
⑤ ПРЕМИУМ
⑥ Адронный коллайдер
⑦ ЛУЧШИЙ БИЗНЕС
⑧ VIP
⑨ «Covid-19»
①⓪ «Panic-20»
①① «Pofig-21»
①② СЕКРЕТНЫЙ ПИТОМЕЦ
①③ СЕКРЕТНЫЙ ПРЕФИКС`)
})

gabella.bot(/(?:кейс открыть 8)$/i, async (message, bot) => {
  if (message.user.hell < 1) return bot(`у Вас нет "Хэллоуинского кейса"! 🙄`)
  message.user.hell -= 1
  let win = random([2, 2, 2, 3, 5, 5, 5, 12, 12, 12, 13, 13, 14, 13, 13, 13, 13, 13, 13, 13, 15, 6, 7, 9, 6, 7, 9, 6, 7, 9, 6, 7, 9, 6, 7, 9])
  switch (win) {
    case 2:
      message.user.business = 11
      message.user.bizlvl = 1
      message.user.biz = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Межпланетный экспресс» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 3:
      message.user.business2 = 1
      message.user.bizlvl2 = 1
      message.user.biz2 = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Адронный коллайдер» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 4:
      let vip = random([1])
      message.user.vip += vip
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «VIP» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 10:
      let prem = random([1])
      message.user.prem += prem
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Premium» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 11:
      message.user.printer = 4
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «ЛУЧШИЙ ПРИНТЕР» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 5:
      let cov = random([1])
      message.user.cov = cov
      message.send(`[id${message.user.id}|${message.user.tag}], вы заразились вирусом «COVID-19». Следите за указаниями в группе 💉`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 12:
      let pan = random([1])
      message.user.pan = pan
      message.send(`[id${message.user.id}|${message.user.tag}], вы заразились вирусом «Panic-20». Следите за указаниями в группе 💉`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 13:
      let po = random([1])
      message.user.po = po
      message.send(`[id${message.user.id}|${message.user.tag}], вы заразились вирусом «Pofig-21». Следите за указаниями в группе 💉`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 14:
      let hel = random([1, 2, 3, 4, 5, 6, 7])
      message.user.hel = hel
      message.send(`[id${message.user.id}|${message.user.tag}], Вам попался СЕКРЕТНЫЙ ПРЕФИКС!`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 15:
      let petlvl = random([100, 105, 110, 115, 1130, 150, 160, 170, 180, 200])
      message.user.misc.pet = 15
      message.user.petlvl = petlvl
      message.user.petgolod = 100
      message.user.petradost = 100
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли СЕКРЕТНОГО ПИТОМЦА c ${petlvl} Уровнем прокачки!🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 6:
      let opit = random([
        37, 32, 65, 12, 32, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 230, 240, 250, 260, 270, 280, 290, 300, 232, 233,
        234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246
      ])
      message.user.opit += opit
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(opit)} опыта. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 7:
      let rating = random([100, 200, 10, 20, 30, 40, 50])
      message.user.rating += rating
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rating)} рейтинга. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 9:
      message.send(`[id${message.user.id}|${message.user.tag}], вы ничего не нашли. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 8`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
  }
})

gabella.bot(/(?:кейс открыть 7)$/i, async (message, bot) => {
  if (message.user.posilka < 1) return bot(`у Вас нет "Посылки из Японии"! 🙄`)
  message.user.posilka -= 1
  message.user.cases -= 1
  let win = random([6, 7, 9, 2, 5, 12, 13, 5, 12, 13])
  switch (win) {
    case 2:
      message.user.business = 11
      message.user.bizlvl = 1
      message.user.biz = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Межпланетный экспресс» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 3:
      message.user.business2 = 1
      message.user.bizlvl2 = 1
      message.user.biz2 = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Адронный коллайдер» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 4:
      let vip = random([1])
      message.user.vip += vip
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «VIP» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 10:
      let prem = random([1])
      message.user.prem += prem
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Premium» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 11:
      message.user.printer = 4
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «ЛУЧШИЙ ПРИНТЕР» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 5:
      let cov = random([1])
      message.user.cov = cov
      message.send(`[id${message.user.id}|${message.user.tag}], вы заразились вирусом «COVID-19». Следите за указаниями в группе 💉`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 12:
      let pan = random([1])
      message.user.pan = pan
      message.send(`[id${message.user.id}|${message.user.tag}], вы заразились вирусом «Panic-20». Следите за указаниями в группе 💉`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 13:
      let po = random([1])
      message.user.po = po
      message.send(`[id${message.user.id}|${message.user.tag}], вы заразились вирусом «Pofig-21». Следите за указаниями в группе 💉`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 6:
      let opit = random([
        37, 32, 65, 12, 32, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 230, 240, 250, 260, 270, 280, 290, 300, 232, 233,
        234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246
      ])
      message.user.opit += opit
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(opit)} опыта. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 7:
      let rating = random([100, 200, 10, 20, 30, 40, 50])
      message.user.rating += rating
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rating)} рейтинга. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 9:
      message.send(`[id${message.user.id}|${message.user.tag}], вы ничего не нашли. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 7`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
  }
})

gabella.bot(/(?:кейс открыть 3)$/i, async (message, bot) => {
  if (message.user.randc < 1) return bot(`у Вас нет "Рандом Кейса"! 🙄`)
  message.user.randc -= 1
  let win = random([
    1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1,
    2, 3, 4
  ])
  switch (win) {
    case 1:
      let pachal = random([1])
      message.user.pachal += pachal
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли "Донат Кейс" 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 6`
                },
                color: "primary"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 2:
      let dengi = random([5000000000000, 60000000000000, 85000000000000, 130000000000000])
      message.user.balance += dengi
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(dengi)}$ 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 3:
      let opit = random([100, 400, 600, 700, 684, 666, 1111])
      message.user.opit -= opit
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(opit)} опыта. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 4:
      let rating = random([20, 30, 40, 50, 60, 70, 80, 90, 222])
      message.user.rating += rating
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rating)} рейтинга. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 5:
      message.user.business = 11
      message.user.bizlvl = 1
      message.user.biz = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Межпланетный экспресс» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 6:
      message.user.business2 = 1
      message.user.bizlvl2 = 1
      message.user.biz2 = 0
      message.user.business = true
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Адронный коллайдер» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 7:
      message.user.business = 12
      message.user.bizlvl = 1
      message.user.biz = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ЛУЧШИЙ БИЗНЕС. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 8:
      let vip = random([1])
      message.user.vip += vip
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «VIP» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 9:
      let prem = random([1])
      message.user.prem += prem
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «PREMIUM» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
  }
})

gabella.bot(/(?:кейс открыть 1)$/i, async (message, bot) => {
  if (message.user.surprise < 1) return bot(`у Вас нет "деревянного Кейса"! 🙄`)
  message.user.surprise -= 1
  let win = random([
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
    6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8
  ])
  switch (win) {
    case 5:
      let dengi = random([
        50000000000, 49000000000, 520000000000, 32000000000, 19000000000, 230000000000, 52000000000, 48000000000, 49000000000, 64000000000,
        32000000000, 250000000000, 500000000000, 100000000000, 68000000000, 41000000000, 67000000000, 570000000000, 530000000000, 540000000000,
        550000000000, 560000000000, 570000000000, 580000000000, 37000000000, 38000000000, 39000000000, 32000000000, 31000000000, 33000000000,
        34000000000, 35000000000, 36000000000
      ])
      message.user.balance += dengi
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(dengi)}$ 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 1`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 8:
      let rating = random([1, 20])
      message.user.rating += rating
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rating)} рейтинга 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 1`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 6:
      let opit = random([37, 32, 65, 12, 32, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61])
      message.user.opit += opit
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(opit)} опыта. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 1`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
  }
})

gabella.bot(/(?:кейс открыть 4)$/i, async (message, bot) => {
  if (message.user.GB < 1) return bot(`у Вас нет "GB Кейса"! 🙄`)
  message.user.GB -= 1
  let win = random([
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5, 5, 13, 12, 12, 13, 12, 13, 1, 15, 15, 15, 15, 1, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 16, 18, 19, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 19, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
    6, 6, 6, 6, 6, 6, 6, 6, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 11, 11, 3, 3, 3, 3, 3, 3, 3, 18, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2
  ])
  switch (win) {
    case 3:
      let platinium = random([1, 2, 3, 4, 5])
      message.user.platinium += platinium
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли "Алмазный Кейс" 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 14:
      let dk = random([1, 10])
      message.user.donat = dk
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ДОНАТ ВАЛЮТУ. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 12:
      let smlt = random([21, 22])
      message.user.transport.airplane = smlt
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли СЕКРЕТНЫЙ САМОЛЁТ. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 11:
      let pk = random([11, 12, 13, 14, 15])
      message.user.misc.computer = pk
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли СЕКРЕТНЫЙ КОМПЬЮТЕР. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 4:
      let surprise = random([1])
      message.user.surprise += surprise
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли "Деревянный Кейс" 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 5:
      let dengi = random([
        520000000000, 3000000000000, 4000000000000, 5000000000000, 15000000000000, 12000000000000, 3200000000000, 530000000000, 490000000000,
        4200000000000, 2900000000000, 130000000000, 129000000000000
      ])
      message.user.balance += dengi
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(dengi)}$ 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 6:
      let opit = random([
        37, 32, 65, 12, 32, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 230, 240, 250, 260, 270, 280, 290, 300, 232, 233,
        234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 400, 1000, 1003
      ])
      message.user.opit += opit
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(opit)} опыта. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 7:
      let rating = random([21, 55])
      message.user.rating += rating
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rating)} рейтинга. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 15:
      message.user.business = 11
      message.user.bizlvl = 1
      message.user.biz = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Межпланетный экспресс» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 13:
      message.user.business = 12
      message.user.bizlvl = 1
      message.user.biz = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ЛУЧШИЙ БИЗНЕС. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 16:
      let zp1 = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
      message.user.zp += zp1
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(zp1)} звёздной пыли. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 17:
      let brilliant1 = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
      message.user.brilliant += brilliant1
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(brilliant1)} бриллиантов 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 18:
      let map = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
      message.user.materia += map
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(map)} материи. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 19:
      let rubin1 = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
      message.user.rubin += rubin1
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rubin1)} рубинов 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 2:
    default:
      message.send(`[id${message.user.id}|${message.user.tag}], вы ничего не нашли. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
  }
})

gabella.bot(/(?:кейс открыть 9)$/i, async (message, bot) => {
  if (message.user.NG < 1) return bot(`у Вас нет Кейса! 🙄`)
  message.user.NG -= 1
  let win = random([
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5, 5, 13, 13, 1, 15, 15, 15, 15, 1, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 16, 18, 19, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 19, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
    6, 6, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 11, 3, 3, 3, 3, 3, 3, 3, 18, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
  ])
  switch (win) {
    case 3:
      let platinium = random([1, 2, 3, 4, 5])
      message.user.platinium += platinium
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли "Алмазный Кейс" 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 14:
      let dk = random([1, 10])
      message.user.donat = dk
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ДОНАТ ВАЛЮТУ. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 12:
      let smlt = random([21, 22])
      message.user.transport.airplane = smlt
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли СЕКРЕТНЫЙ САМОЛЁТ. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 11:
      let pk = random([11, 12, 13, 14, 15])
      message.user.misc.computer = pk
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли СЕКРЕТНЫЙ КОМПЬЮТЕР. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 4:
      let surprise = random([1])
      message.user.surprise += surprise
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли "Деревянный Кейс" 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 4`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 5:
      let dengi = random([100000000000, 300000000000])
      message.user.balance += dengi
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(dengi)}$ 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 6:
      let opit = random([
        37, 32, 65, 12, 32, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 230, 240, 250, 260, 270, 280, 290, 300, 232, 233,
        234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 400, 1000, 1003
      ])
      message.user.opit += opit
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(opit)} опыта. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 7:
      let rating = random([1, 10])
      message.user.rating += rating
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rating)} рейтинга. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 15:
      message.user.business = 11
      message.user.bizlvl = 1
      message.user.biz = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли «Межпланетный экспресс» 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 13:
      message.user.business = 12
      message.user.bizlvl = 1
      message.user.biz = 0
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли БИЗНЕС. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 16:
      let zp1 = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
      message.user.zp += zp1
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(zp1)} звёздной пыли. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 17:
      let brilliant1 = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
      message.user.brilliant += brilliant1
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(brilliant1)} бриллиантов 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 18:
      let map = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
      message.user.materia += map
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(map)} материи. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 19:
      let rubin1 = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
      message.user.rubin += rubin1
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rubin1)} рубинов 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 2:
    default:
      message.send(`[id${message.user.id}|${message.user.tag}], вы ничего не нашли. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 9`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
  }
})

gabella.bot(/(?:кейс открыть 2)$/i, async (message, bot) => {
  if (message.user.platinium < 1) return bot(`у Вас нет "Алмазного Кейса"! 🙄`)
  message.user.platinium -= 1
  let win = random([
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
    6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 11, 11, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
  ])
  switch (win) {
    case 3:
      let platinium = random([1])
      message.user.platinium += platinium
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли "Алмазный Кейс" 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 2`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 12:
      let smlt = random([21, 22])
      message.user.transport.airplane = smlt
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли СЕКРЕТНЫЙ САМОЛЁТ. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 2`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 11:
      let pk = random([11, 12, 13, 14, 15])
      message.user.misc.computer = pk
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли СЕКРЕТНЫЙ КОМПЬЮТЕР. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 2`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 4:
      let surprise = random([1])
      message.user.surprise += surprise
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли "Деревянный Кейс" 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 2`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 5:
      let dengi = random([
        520000000000, 3000000000000, 4000000000000, 5000000000000, 15000000000000, 12000000000000, 3200000000000, 530000000000, 490000000000,
        4200000000000, 2900000000000, 130000000000, 129000000000000
      ])
      message.user.balance += dengi
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(dengi)}$ 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 2`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 6:
      let opit = random([
        37, 32, 65, 12, 32, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 230, 240, 250, 260, 270, 280, 290, 300, 232, 233,
        234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 400, 1000, 1003
      ])
      message.user.opit += opit
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(opit)} опыта. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 2`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 7:
      let rating = random([21, 55])
      message.user.rating += rating
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rating)} рейтинга. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 2`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 2:
    default:
      message.send(`[id${message.user.id}|${message.user.tag}], вы ничего не нашли. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 2`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
  }
})
gabella.bot(/(?:кейс открыть 6)$/i, async (message, bot) => {
  if (message.user.pachal < 1) return bot(`у Вас нет "Донат Кейса"! 🙄`)
  message.user.pachal -= 1
  let win = random([1, 2, 3, 4])
  switch (win) {
    case 1:
      let pachal = random([1])
      message.user.pachal += pachal
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли "Донат Кейс" 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 6`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 2:
      let dengi = random([
        2000000000000 - 5000000000000,
        5000000000000 - 10000000000000,
        10000000000000 - 30000000000000,
        40000000000000 - 100000000000000,
        120000000000000 - 160000000000000,
        180000000000000 - 250000000000000,
        120000000000000 - 160000000000000,
        120000000000000 - 160000000000000,
        120000000000000 - 160000000000000,
        120000000000000 - 160000000000000,
        120000000000000 - 160000000000000
      ])
      message.user.balance -= dengi
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(dengi)}$ 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 6`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 3:
      let opit = random([1 - 5000])
      message.user.opit -= opit
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(opit)} опыта. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 6`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 4:
      let rating = random([1, 200])
      message.user.rating += rating
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли ${utils.sp(rating)} рейтинга. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 6`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 5:
      let bisnesses11 = random([1, 1])
      message.user.bisnesses11 = bisnesses11
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли межпланетный экспресс. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 6`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 6:
      let businesses2 = random([1, 1])
      message.user.bisnesses13 = bisnesses13
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли адронный коллайдер. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 6`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
    case 7:
      let bisnesses2 = random([1, 1])
      message.user.bisnesses2 = bisnesses2
      message.send(`[id${message.user.id}|${message.user.tag}], вы нашли БИЗНЕС. 🔥`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🎁 Кейс открыть 6`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
      break
  }
})
gabella.bot(/(?:кейс инфо 1)$/i, async (message, bot) => {
  await bot(`из "Деревянных  Кейса" может выпасть: 

1⃣ Опыт.
2⃣ Игровая валюта.
3⃣ Рейтинг.

🛒 Купить: "кейс 1"`)
})
gabella.bot(/(?:кейс инфо 2)$/i, async (message, bot) => {
  await bot(`из "Алмазных Кейса" может выпасть:

1⃣ Опыт.
2⃣ Игровая валюта.
3⃣ Рейтинг.
4⃣ Секретный самолет.
5⃣ Секретный комп.

🛒 Купить: "кейс 2"`)
})
gabella.bot(/(?:кейс инфо 6)$/i, async (message, bot) => {
  await bot(`из "Донат Кейса" может выпасть: 

1⃣ Опыт.
2⃣ Игровая валюта.
3⃣ Рейтинг.
4⃣ Премиум.
5⃣ Межпланетный экспресс.
6⃣ ЛУЧШИЙ БИЗНЕС.
7⃣ Адронный коллайдер.

🛒 Купить: " https://vk.com/id504991834"


`)
})
gabella.bot(/^(?:открыть кейс 1)$/i, async (message, bot) => {
  await bot(`использование: "кейс открыть 1" ${smilesuccess}`)
})
gabella.bot(/^(?:открыть кейс 4)$/i, async (message, bot) => {
  await bot(`использование: "кейс открыть 4" ${smilesuccess}`)
})
gabella.bot(/^(?:открыть кейс 2)$/i, async (message, bot) => {
  await bot(`использование: "кейс открыть 2" ${smilesuccess}`)
})
gabella.bot(/^(?:открыть кейс 3)$/i, async (message, bot) => {
  await bot(`использование: "кейс открыть 3" ${smilesuccess}`)
})
gabella.bot(/^(?:открыть кейс 6)$/i, async (message, bot) => {
  await bot(`использование: "кейс открыть 6" ${smilesuccess}`)
})
gabella.bot(/^(?:статистика|стата)$/i, async (message, bot) => {
  await bot(`в боте зарегистрировано ${utils.sp(users.length - 1)} игроков.`)
})
gabella.bot(/(?:кейсы|сундуки)$/i, async (message, bot) => {
  let text = ``

  text += `\n1&#8419; Деревянный  Кейс: 5.000.000.000.000$
📜 Информация: "кейс инфо 1"
🛒 Купить: "кейс 1"\n\n`
  text += `2&#8419; Алмазный Кейс: 30.000.000.000.000$
📜 Информация: "кейс инфо 2"
🛒 Купить: "кейс 2"\n\n`
  text += `3&#8419; Донат Кейс: 15 рублей.
📜 Информация: "кейс инфо 6"
🛒 Покупка у https://vk.com/id504991834\n\n`
  text += `\n4&#8419; GB  Кейс: 500.000.000.000.000$
📜 Информация: "кейс инфо 4"
🛒 Купить: "кейс 4"\n\n`

  if (
    message.user.surprise ||
    message.user.platinium ||
    message.user.pachal ||
    message.user.randc ||
    message.user.secretcase ||
    message.user.secretcase ||
    message.user.GB ||
    message.user.NB ||
    message.user.posilka ||
    message.user.hell
  ) {
    text += `\n👜 У Вас в инвентаре:\n\n`
    if (message.user.surprise)
      text += `📦 Деревянных  Кейса (${message.user.surprise} шт.)
🗯 Информация: "кейс инфо 1"
📜 Открыть: «кейс открыть 1»\n\n`
    if (message.user.platinium)
      text += `📦 Алмазных Кейса (${message.user.platinium} шт.)
🗯 Информация: "кейс инфо 2"
📜 Открыть: «кейс открыть 2»\n\n`
    if (message.user.randc)
      text += `📦 Рандомный Кейс (${utils.sp(message.user.randc)} шт.)
🗯 Информация: "кейс инфо 3"
📜 Открыть: «кейс открыть 3»\n\n`
    if (message.user.GB)
      text += `📦 GB Кейс (${utils.sp(message.user.GB)} шт.)
🗯 Информация: "кейс инфо 4"
📜 Открыть: «кейс открыть 4»\n\n`
    if (message.user.secretcase)
      text += `📦 Премиум Кейс (${utils.sp(message.user.secretcase)} шт.)
🗯 Информация: "кейс инфо 5"
📜 Открыть: «кейс открыть 5»\n\n`
    if (message.user.pachal)
      text += `📦 Донат Кейса (${message.user.pachal} шт.)
🗯 Информация: "кейс инфо 6"
📜 Открыть: «кейс открыть 6»\n\n`
    if (message.user.posilka)
      text += `📦 Посылка из Японии (${utils.sp(message.user.posilka)} шт.)
🗯 Информация: "кейс инфо 7"
📜 Открыть: «кейс открыть 7»\n\n`
    if (message.user.hell)
      text += `📦 Хэллоуинский Кейс (${utils.sp(message.user.hell)} шт.)
🗯 Информация: "кейс инфо 8"
📜 Открыть: «кейс открыть 8»\n\n`
    if (message.user.NG)
      text += `📦 Новогодний Кейс (${utils.sp(message.user.NG)} шт.)
🗯 Информация: "кейс инфо 9"
📜 Открыть: «кейс открыть 9»\n\n`
  }
  return bot(`кейсы:\n${text}`, {
    keyboard: JSON.stringify({
      inline: true,
      buttons: [
        [
          {
            action: {
              type: "text",
              payload: '{"button": "1"}',
              label: `Кейс инфо 1`
            },
            color: "positive"
          },
          {
            action: {
              type: "text",
              payload: '{"button": "2"}',
              label: `Кейс инфо 2`
            },
            color: "positive"
          },
          {
            action: {
              type: "text",
              payload: '{"button": "2"}',
              label: `Кейс инфо 4`
            },
            color: "positive"
          }
        ]
      ]
    })
  })
})

gabella.bot(/(?:кейс инфо 4)$/i, async (message, bot) => {
  await bot(`из "GB кейса" может выпасть: 
1⃣ Опыт.
2⃣ Игровая валюта.
3⃣ Рейтинг.
4⃣ Секретный самолет.
5⃣ Секретный комп.
6⃣ ЛУЧШИЙ БИЗНЕС.
7⃣ Межпланетный экспресс.
8&#8419; Разную руду.`)
})

gabella.bot(/(?:кейс инфо 4)$/i, async (message, bot) => {
  await bot(`из "Новогоднего кейса" может выпасть: 
1⃣ Опыт.
2⃣ Игровая валюта.
3⃣ Рейтинг.
4⃣ Разная руда.
5⃣ Лучший Бизнес.
8&#8416; Админка
`)
})

gabella.bot(/(?:кейс инфо 3)$/i, async (message, bot) => {
  await bot(`из "РАНДОМНОГО кейса" может выпасть: 
① Опыт
② Игровая валюта
③ Рейтинг
④ VIP
⑤ ПРЕМИУМ
⑥ Адронный коллайдер
⑦ ЛУЧШИЙ БИЗНЕС
⑧ Межпланетный экспресс
⑨ ДОНАТ КЕЙС`)
})
/*===================================КЕЙСЫ=========================================================*/
gabella.bot(/^(?:пенсия снять)$/i, async (message, bot, bot2) => {
  if (message.user.pensia == 0) return bot(`вы ещё слишком молодой для получения пенсии, приходите позднее. 🚜`)
  if (message.user.pensia_zabral > Date.now())
    return bot(`получать пенсию можно раз в две недели, приходите за новой через: ${unixStampLeft(message.user.pensia_zabral - Date.now())} ⏰`)
  message.user.pensia_zabral = Date.now() + 1209600000
  message.user.prensia_zabrall = data(1209600000) + " в " + time(1209600)
  message.user.balance += message.user.pensia
  return bot(
    `вы получили пенсию: ${utils.sp(message.user.pensia)}$, приходите за новой через: ${unixStampLeft(message.user.pensia_zabral - Date.now())} ⏰`
  )
})

gabella.bot(/^(?:пенсия)$/i, async (message, bot, bot2) => {
  return bot(
    `Вы зарегистрировались: ${message.user.regDate}, (${moment(message.user.regDate, "L").fromNow()}). 📅
💳 Размер вашей пенсии: ${utils.sp(message.user.pensia)}$
🌍 Получить пенсию: "Пенсия снять"`,
    { attachment: "photo-178396242_457247869" }
  )
})

setInterval(async () => {
  users.map(async x => {
    if (x.pensia_time < Date.now()) {
      x.pensia_time = Date.now() + 1209600000
      x.pensia += utils.random(5000000000000, 15000000000000, 1000000000000, 3000000000000, 185000000000000, 50000000000000)
    }
  })
}, 5000)

gabella.bot(/^(?:тир)$/i, async (message, bot) => {
  return message.send('Использование команды (тир мишень сумма) премер команды: "тир [1-3] [1000]" (без [])')
})

gabella.bot(/^(?:тир)\s(.*)\s(.*)$/i, async (message, bot) => {
  var parserInt = str => parseInt(str.replace(/k|к/gi, "000").replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance))
  if (!message.args[1]) return bot(`укажите номер мишени (от 1 до 3)`)
  if (!message.args[2]) return bot(`укажите ставку.`)
  let stavka = parserInt(message.args[2])
  if (!Number(stavka)) return bot(`ставка должна быть целым числом.`)
  if (stavka > message.user.balance) return bot(`у вас нет столько денег`)
  let text = message.args[1]
  if (message.args[1] > 3) return bot(`укажите ID мишени (от 1 до 3)`)
  if (message.args[1] < 1) return bot(`укажите ID мишени (от 1 до 3)`)
  if (stavka > message.user.balance || stavka <= 0)
    return bot(stavka <= 0 ? `ставка не может быть меньше 0 или равна 0` : `ставка не может превышать баланс`)

  if (rand(1, 100) > 50) {
    message.user.balance += stavka
    if (message.user.balance <= 0) {
      message.user.balance = 0
    }
    return bot(`поздравляю! Вы попали прямо в цель!!\n[👤] >> Вы забираете ваш выигрыш`)
  } else {
    message.user.balance -= stavka
    if (message.user.balance <= 0) {
      message.user.balance = 0
    }

    return bot(`Вы промохнулись...\n[💀] >> Вы теряете всю свою ставку.`)
  }
})
gabella.bot(/(?:ферма)$/i, async (message, bot) => {
  if (!message.user.misc.farm)
    return bot(
      `у Вас нет майнинговых ферм. 😕 
📜 Отправьте «фермы», чтобы получить их список.`,
      { attachment: `photo-178396242_457247141` }
    )

  const btc_ = message.user.farm_btc
  const prib1 = message.user.farms

  const farm1 = farms.find(x => x.id === message.user.misc.farm)

  return bot(
    `Майнинг «${farm1.name}» x${message.user.farms}шт. ферм
💰 На счёте: ${utils.sp(btc_)}₿
📜 Снять прибыль с фермы - Ферма снять`,
    {
      attachment: `${farm1.att}`,
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Ферма снять"
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:ферма снять|🔋 Ферма снять|💽 Ферма снять)$/i, async (message, bot) => {
  if (!message.user.misc.farm)
    return bot(
      `у Вас нет майнинговых ферм. 😕
📜 Отправьте «фермы», чтобы получить их список.`,
      { attachment: `photo-178396242_457247141` }
    )

  if (message.user.timers.farm_btc >= 0) return bot(`биткоины появятся через ${displayTime(message.user.timers.farm_btc)} ${smileerror}`)

  message.user.timers.farm_btc = 3600

  const btc_ = message.user.farm_btc

  message.user.btc += btc_
  message.user.farm_btc = 0

  return bot(`вы собрали со своих ферм ${utils.sp(btc_)}₿`, { attachment: `photo-178396242_457247152` })
})
gabella.bot(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
  if (message.args[1] < 10 || message.args[1] >= 100) return

  const int = utils.random(10, 99)
  message.args[1] = Number(message.args[1])

  if (int === message.args[1]) {
    message.user.balance += 10000000000
    return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 10.000.000.000$`)
  } else if (int !== message.args[1]) {
    return bot(`вы не угадали число. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 10.000.000.000$`)
  }
})
gabella.bot(/^(фортуна|фортун)$/i, async (message, args, bot) => {
  return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),
    💠 Призы рулетки 💠
    🚀 ➣ Привилегия 'ПРЕМИУМ'. 
    💎 ➣ Рубины.
    🏮 ➣ Опыт.
    ⛓ ➣ БитКоины.
    💸 ➣ Валюта.

    ✳ ➣ Цена прокрутки: 1000 материи.
    ✳ ➣ Команда: 'крутить'
    `)
})

////////////////////////////
gabella.bot(/^(крутить|крутить рулетку)$/i, async (message, args, bot) => {
  if (message.user.materia < 1000) return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n💠 ➣ Прокрутка рулетки стоит 1000 материи.`)
  message.user.materia -= 1000

  let balance = rand(30000000000 - 80000000000, 200000000000 - 1000000000000)
  let win = rand(1, 2, 3, 4, 5, 6)
  if (win == 1) {
    let win2 = rand(1, 3)
    if (win2 == 1) {
      let win3 = rand(1, 3)
      if (win3 == 3) {
        if (message.user.right > 1) {
          message.user.balance += 30000000000
          return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n💠 ➣ Вы выиграли 30.000.000.000💰`)
        }
        message.user.prem = 1
        return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n👑 ➣ Вы выиграли привилегию ПРЕМИУМ.\n👑`)
      }
    } else {
      message.user.balance += balance
      return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n💠 ➣ Вы выиграли ${utils.sp(balance)}💰`)
    }
    if (win2 > 1) {
      message.user.balance += balance
      return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n💠 ➣ Вы выиграли ${utils.sp(balance)}💰`)
    }
  }
  if (win == 2) {
    message.user.balance += balance
    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n💠 ➣ Вы выиграли ${utils.sp(balance)}💰`)
  }
  if (win == 3) {
    let balenc = balance - 5000
    message.user.balance += balence
    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n💠 ➣ Вы выиграли ${utils.sp(balence)}💰`)
  }
  if (win == 4) {
    let rubin = rand(1, 3, 5, 4, 10)
    message.user.rubin += rubin
    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n💎 ➣ Вы выиграли ${utils.sp(rubin)} рубинов.`)
  }
  if (win == 5) {
    let opit = rand(100, 300, 500, 450, 400, 250)
    message.user.opit += opit
    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n🔥 ➣ Вы выиграли ${utils.sp(opit)} опыта.`)
  }
  if (win == 6) {
    let btc = rand(200, 300, 200, 300)
    message.user.btc += btc
    return message.send(`🎉 ➣ @id${message.user.id}(${message.user.tag}),\n✨ ➣ Вы выиграли ${utils.sp(btc)} Биткоинов.`)
  }
})
gabella.bot(/^(?:курс)$/i, async (message, bot) => {
  return bot(`курс валют на данный момент:
[💸] Биткоин: ${utils.sp(btc)}$
[🍊] Мандарин: ${utils.sp((man * 2 + 5000000000 - 903 * 5 * 5 * 2 * 2 * 3) * 3)}$`)
})

gabella.bot(/^(?:мандарин)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  if (message.user.settings.adm > 0) return bot(`администратор не может пополнять запас мандарин. 🚫`)

  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.args[1] <= 0) return

  if (message.args[1] * ((man * 2 + 5000000000 - 903 * 5 * 5 * 2 * 2 * 3) * 3) > message.user.balance)
    return bot(
      `у Вас недостаточно денег ${smileerror}
Курс мандаринок: ${(man * 2 + 5000000000 - 903 * 5 * 5 * 2 * 2 * 3) * 3}$`,
      { attachment: "market-178396242_3881560" }
    )
  else if (message.args[1] * ((man * 2 + 5000000000 - 903 * 5 * 5 * 2 * 2 * 3) * 3) <= message.user.balance) {
    message.user.balance -= message.args[1] * ((man * 2 + 5000000000 - 903 * 5 * 5 * 2 * 2 * 3) * 3)
    message.user.mandarin += message.args[1]

    return bot(`вы купили ${utils.sp(message.args[1])}🍊 за ${utils.sp(message.args[1] * ((man * 2 + 5000000000 - 903 * 5 * 5 * 2 * 2 * 3) * 3))}$`)
  }
})
gabella.bot(/^(?:Ютуб|📷 Ютуб|Ютуб помощь)$/i, async (message, bot) => {
  if (typeof message.user.youtub == "undefined" || message.user.youtub == null) {
    return bot(
      `вы можете создать свой Ютуб канал в боте и получать дополнительный доход со своих видео!
   
   👑 Развивайте его, получайте больше подписчиков и дохода, получайте ЛАЙКИ, выходите в ТОП и становитесь №1 Ютубером!
   
   🆕 Создать Ютуб канал: «Ютуб создать [название]»
   ❤ Поставить лайк: «Ютуб лайк [ID игрока]»`,
      { attachment: `photo-191800897_457239776` }
    )
  } else {
    return bot(` Ютуб «${message.user.youtub}»
   👥 Подписчики: ${utils.sp(message.user.youtubepod)}
   ❤ Лайки: ${utils.sp(message.user.youtubelake)}
   
   📸 Чтобы снять видио, напиши «Ютуб снять»
   🎈 Поставить лайк: «Ютуб лайк [ID игрока]»`)
  }
})
gabella.bot(/^(?:Ютуб создать)\s(.*)$/i, async (message, bot) => {
  if (message.user.youtub != null || (typeof message.user.youtub != "undefined" && typeof message.user.youtub != "object"))
    return bot(` у вас уже есть канала! Вы можете удалить его: «Ютуб удалить»`)
  message.user.youtub = message.args[1]
  message.user.tiktoktimer = 0
  return bot(`Вы успешно создали Ютуб канал «${message.args[1]}»! 🎉 Напишите команду «Ютуб» для информации.

❌ Чтобы удалить, напиши: «Ютуб удалить»
📃 Чтобы сменить название, напиши: «Ютуб название [новое]»`)
})

gabella.bot(/^(?:Ютуб название)\s(.*)$/i, async (message, bot) => {
  if (typeof message.user.youtub == "undefined" || message.user.youtub == null)
    return bot(` вам необходимо создать Ютуб канал, чтобы использовать эту команду!
 🌈 Создайте командой: «Ютуб создать [название]»`)
  message.user.youtub = message.args[1]
  return bot(` Вы успешно изменили название канала на «${message.args[1]}»!`)
})

gabella.bot(/^(?:Ютуб удалить)$/i, async (message, bot) => {
  if (typeof message.user.youtub == "undefined" || message.user.youtub == null)
    return bot(` вам необходимо создать Ютуб канал, чтобы использовать эту команду!
 🌈 Создайте командой: «Ютуб создать [название]»`)
  message.user.youtub = null
  message.user.youtubepod = 0
  message.user.youtubelake = 0
  message.user.tiktoktimer = 0
  return bot(` Ваш канал успешно удалён!`)
})

gabella.bot(/^(?:Ютуб снять)$/i, async (message, bot) => {
  if (typeof message.user.youtub == "undefined" || message.user.youtub == null)
    return bot(` вам необходимо создать Ютуб канал, чтобы использовать эту команду!
 🌈 Создайте командой: «Ютуб создать [название]»`)
  if (typeof message.user.tiktoktimer != "undefined" && message.user.tiktoktimer > Date.now())
    return bot(` Вы ещё не придумали идею! 😣 Подождите ${left(message.user.tiktoktimer - Date.now())}, чтобы снимать новый видеоролик! ⏳`)
  let newpod = utils.random(100, 1000)
  message.user.youtubepod += newpod
  let ads = utils.pick([1, 0])
  let adsCash = 0
  if (ads == 1) {
    adsCash = 10000 * message.user.youtubepod + utils.random(10000, 50000)
    message.user.balance += adsCash
  }
  let txt = ` Вы сняли новое видео на свой ютуб канал!
🎵 Получено ${newpod} новых подписчиков
${ads == 0 ? "💸 К сожалению, рекламных предложений к Вам не поступало. Снимайте ещё!" : "💸 Получено " + utils.sp(adsCash) + " $ с рекламы!"}`
  message.user.tiktoktimer = Date.now() + 15 * 60000
  return bot(txt)
})

gabella.bot(/^(?:Ютуб лайк)\s([0-9]+)$/i, async (message, bot) => {
  if (typeof message.user.tiktokliketimer != "undefined" && message.user.tiktokliketimer > Date.now())
    return bot(` подождите ${left(message.user.tiktokliketimer - Date.now())}, чтобы поставить лайк! ⏳`)
  message.user.tiktokliketimer = Date.now() + 60000
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (message.user.uid == user.uid) return bot(` нельзя ставить лайки самому себе! Попросите своих друзей ставить вам лайк!`)
  if (typeof user.youtub == "undefined" || user.youtub == null) return bot(` у этого игрока нет Ютуб канала! 😥`)
  bot(` вы лайкнули Ютуб игрока ${user.tag}!`)
  user.youtubelake++
  vk.api.messages.send({ user_id: user.id, message: ` игрок ${message.user.tag} лайкнул ваш Ютуб канал!` })
})

gabella.bot(/^(?:Вампиризм)$/i, async (message, bot) => {
  return bot(`Возмозности вампира:
	
1. Можно кусать других игроков и делать их вампирами
2. Вампирская отметка в профиле
3. Возможность обращаться в летучую мышь и грабить людей

🧛🏻‍♂ Напиши "вампир купить", чтобы стать вампиром (5.000.000.000.000 $)`)
})

gabella.bot(/^(?:квампир)$/i, async (message, bot) => {
  return bot(`Возмозности вампира:
	
🦷 Укусить человека - Вампир укусить [id]
💰 Грабануть человека - Вампир грабить [id]`)
})

setInterval(async () => {
  users
    .filter(x => x.vampir === 1)
    .map(x => {
      x.vampir = 0
    })
}, 3600000)

gabella.bot(/^(?:вампир купить)/i, async (message, bot) => {
  if (message.user.balance < 5000000000000) return bot(`недостаточно денег`)

  message.user.vampir = 1
  message.user.balance -= 5000000000000

  return bot(`Вы стали вампиром, просмотреть ваши команды "квампир". 
Вы перестанете быть вампиром через час!`)
})

gabella.bot(/^(?:вампир укусить)\s(.*)$/i, async (message, bot) => {
  if (message.user.vampir != 1) return

  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    if (user.settings.adm == 7) return bot(`нельзя заражать создателя бота! 🙌`)
    if (user.settings.adm == 8) return bot(`нельзя заражать ЗАМА создателя бота! 🙌`)
    if (message.user.timers.zaraztime >= 0)
      return bot(`Вы можете повторно заражать только через: ${displayTime(message.user.timers.zaraztime)} ${smileerror}`)

    user.vampir = 1
    message.user.timers.zaraztime = 300

    await bot(`вы укусили игрока *id${user.id} (${user.tag}), теперь он стал вампиром.`)
    vk.api.messages.send({ user_id: user.id, message: `Вас заразил вампир, ваши команды "вампиризм"` })
  }
})

gabella.bot(/^(?:вампир грабить)\s(.*)$/i, async (message, bot) => {
  if (message.user.vampir != 1) return bot(`Вы не вампир`)
  {
    let user = users.find(x => x.id === Number(message.args[1]))
    if (!user) return bot(`Игрок не найден. ${smileerror}`)
    if (user.settings.adm == 7) return bot(`нельзя заражать создателя бота! 🙌`)
    if (user.settings.adm == 8) return bot(`нельзя заражать ЗАМА создателя бота! 🙌`)
    if (message.user.timers.grabtime >= 0)
      return bot(`Вы можете повторно грабить только через: ${displayTime(message.user.timers.grabtime)} ${smileerror}`)

    let a = utils.random(100000, 10000000000000)
    message.user.timers.grabtime = 300
    message.user.balance += a

    await bot(`вы ограбили игрока *id${user.id} (${user.tag}) на ${utils.sp(a)}`)
    vk.api.messages.send({ user_id: user.id, message: `Вас ограбил вампир!` })
  }
})
gabella.bot(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")
  message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)

  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))

  if (message.args[2] <= 0) return

  if (message.args[2] > message.user.balance)
    return bot(
      `у Вас недостаточно денег ${smileerror}
💰 Ваш баланс: ${message.user.balance}$`,
      { attachment: "market-178396242_3881560" }
    )
  else if (message.args[2] <= message.user.balance) {
    message.user.balance -= message.args[2]

    const multiply = utils.pick([0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65])
    const cup = utils.random(1, 3)

    if (cup == message.args[1]) {
      message.user.balance += Math.floor(message.args[2] * multiply)
      return bot(`вы угадали! Приз ${message.args[2] * multiply} ${smilesuccess}`)
    } else {
      return bot(`вы не угадали, это был ${cup}-ый стаканчик ${smileerror}`)
    }
  }
})

gabella.bot(/(?:бизнес|🤑 Бизнес|бизнес|бизнес 1|бизнес1)$/i, async (message, bot) => {
  if (!message.user.business)
    return bot(`у Вас нет этого бизнеса! ${smileerror} 
Для выбора бизнеса отправьте «Бизнесы»`)

  const biz = businesses.find(x => x.id === message.user.business)
  var lvlcash = biz.earn * message.user.bizlvl
  var updprice2 = Math.floor(businesses[message.user.business - 1].cost * 2) * message.user.bizlvl
  return bot(
    `статистика «${biz.name}»: 
💸 Прибыль: ${utils.sp(lvlcash)}$/час 
💰 На счёте: ${utils.sp(message.user.biz)}$\n\n`,
    {
      attachment: `${biz.att}`,
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Бизнес снять"
              },
              color: "secondary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Бизнес 2"
              },
              color: "secondary"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Бизнес 3"
              },
              color: "secondary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Планета"
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:Планета)$/i, async (message, bot) => {
  if (!message.user.planet)
    return bot(`у Вас нет Планеты! ${smileerror} 
Для выбора планеты отправьте «Планеты»`)

  const gen = planets.find(x => x.id === message.user.planet)
  var lvlp = gen.earn * message.user.lvlplan
  var updprice2 = Math.floor(planets[message.user.planet - 1].cost * 2) * message.user.lvlplan
  return bot(
    `Планета «${gen.name}»: 
✨ Генерирует: ${utils.sp(lvlp)} звёздной пыли в час 
🛰 В хранилище: ${utils.sp(message.user.gen)} ✨\n\n`,
    {
      attachment: `${gen.att}`,
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "🌠 Планета собрать"
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:бизнес 2)/i, async (message, bot) => {
  if (!message.user.business2)
    return bot(`у Вас этого нет бизнеса! ${smileerror} 
Для выбора бизнеса отправьте «Бизнесы»`)
  const biz = businesses2.find(x => x.id === message.user.business2)
  var lvlcash = biz.earn * message.user.bizlvl2
  return bot(
    `статистика «${biz.name}»: 
🌌 Приносит: ${utils.sp(lvlcash)} материи/час 
⚖ Добыто: ${utils.sp(message.user.biz2)} материи`,
    {
      attachment: `${biz.att}`,
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Бизнес снять 2"
              },
              color: "secondary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Бизнес"
              },
              color: "secondary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Бизнес 3"
              },
              color: "secondary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Планета"
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:бизнес 3)$/i, async (message, bot) => {
  if (!message.user.business3)
    return bot(`у Вас этого нет бизнеса! ${smileerror} 
Для выбора бизнеса отправьте «Бизнесы»`)
  const biz = businesses3.find(x => x.id === message.user.business3)
  var lvlcash = biz.earn * message.user.bizlvl3
  return bot(
    `статистика «${biz.name}»: 
🌌 Приносит: ${utils.sp(lvlcash)} пыли/час 
⚖ Добыто: ${utils.sp(message.user.biz3)} пыли`,
    {
      attachment: `${biz.att}`,
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Бизнес снять 3"
              },
              color: "secondary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Бизнес"
              },
              color: "secondary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Бизнес 2"
              },
              color: "secondary"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Планета"
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:бизнес)\s(?:снять|снять 1)$/i, async (message, bot) => {
  if (!message.user.business) return bot(`у вас нет бизнеса.`)
  if (!message.user.biz) return bot(`у вас нет денег на счёте этого бизнеса`)

  const biz_balance = message.user.biz

  message.user.balance += message.user.biz
  message.user.biz = 0

  return bot(`вы сняли со счёта своего бизнеса ${utils.sp(biz_balance)}$`)
})

gabella.bot(/(?:планета)\s(?:собрать)$/i, async (message, bot) => {
  if (!message.user.planet) return bot(`у вас нет планеты, для того чтобы её купить ввидите "планеты".`)
  if (!message.user.gen) return bot(`в хранилище вашей планеты пусто!`)

  const gen_zp = message.user.gen

  message.user.zp += message.user.gen
  message.user.gen = 0

  return bot(`вы сняли с хранилища своей планеты ${utils.sp(gen_zp)} Звёздной пыли`)
})
/*==========================================================================================================*/
/*===========================================КЛАНЫ=========================================================*/
gabella.bot(/^(?:оповещения|оповещение)\s(выкл|вкл)$/i, async (message, bot) => {
  if (message.args[1].toLowerCase() === "выкл") {
    message.user.mts2 = true

    return bot(`вы больше не сможете получать оповещения о вашем клане! 🔕`)
  }

  if (message.args[1].toLowerCase() === "вкл") {
    message.user.mts2 = false

    return bot(`оповещения включены! 🔔`)
  }
})
gabella.bot(/^(?:бонус клан|клан бонус)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/Заместитель создателя клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].bon > getUnix())
    return bot(`Вы недавно получили бонус! 😩\n\n⌚ Новый бонус можно получить через ${unixStampLeft(clans[clanid].bon - Date.now())}`)
  let prize = utils.pick([1, 2, 3, 4, 5, 6, 7])
  if (prize === 1) {
    clans[clanid].retin += 10
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +10 рейтинга! ${smilesuccess}`)
    return message.sendSticker(18950)
  }
  if (prize === 2) {
    clans[clanid].retin += 100
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +100 рейтинга.`)
    return message.sendSticker(18981)
  }
  if (prize === 3) {
    clans[clanid].zashita += 1000
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +1000 армии`)
    return message.sendSticker(1933)
  }
  if (prize === 4) {
    clans[clanid].balance += 10000000000000
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +10.000.000.000.000$ в казну!`)
    return message.sendSticker(13218)
  }
  if (prize === 5) {
    clans[clanid].balance += 1000000000000
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +1.000.000.000.000$ в казну!`)
    return message.sendSticker(17763)
  }
  if (prize === 6) {
    clans[clanid].retin += 50
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +50 рейтинга!`)
    return message.sendSticker(6339)
  }
  if (prize === 7) {
    clans[clanid].zashita += 200
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +200 армии!`)
    return message.sendSticker(8479)
  }
})

gabella.bot(/^(?:клан создать)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, ",")
  message.args[1] = message.args[1].replace(/(\[|\()/gi, "{")
  message.args[1] = message.args[1].replace(/(\]|\))/gi, "}")
  const errors = utils.pick(["😳", "😒", `😟`, `🙄`, `🤔`])
  const success = utils.pick(["🤤", "☺", `🙂`, `😁`, `😏`, "🤑"])
  if (!message.args[1]) return bot(`введите название для клана! ${success}`)
  let zaprets1 = message.args[1].toLowerCase()
  var zapret =
    /(ᅠ|™|&#1;|أعلى||أحبك|�|�||�|™|�|&#0000;||�|™.|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|марихуана|Cuний кuт|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|█|▓|▒|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|разбуди в 4:20|#|подкладки|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|синийкит|цп|cp|изнасилование|несовершеннолетние)/
  var sss = zapret.test(zaprets1)
  let text = message.args[1].toLowerCase()
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
  var lol = filter0.test(text)
  var lol1 = filter1.test(text)
  if (zapret.test(zaprets1) === true || message.args[1].toLowerCase() === "") {
    return bot(`вы используете запрещенные слова/символы/смайлики 🆘\n\n😉 Придумайте другое название клану.`)
  }
  if (message.args[1].length <= 2) {
    return bot(`вы указали слишком короткое название 🚫
❓Минимальная длина для названия клана 3 символов.`)
  }
  if (message.args[1].length >= 26) {
    return bot(`вы указали слишком длинное название 🚫
❓Максимальная длина для названия клана 25 символов.`)
  }
  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true
    return bot(`подозрительная ссылка.`)
  }

  let user = message.user
  let name = message.args[1]
  let clanid = message.user.clanid
  if (clans[clanid]) return bot(`вы уже состоите в другом клане ⚠`)
  if (message.user.balance < 1000000000000)
    return bot(`создание клана стоит 1.000.000.000.000$!
📈 @gabellabot (Как пополнить?)`)
  message.user.balance -= 1000000000000
  Array.prototype.random = function () {
    return this[Math.floor(this.length * Math.random())]
  }
  if (!clans[clanid]) {
    let smile = [
      `🤘`,
      `💥`,
      `💣`,
      `😻`,
      `😏`,
      `🤒`,
      `🤔`,
      `💎`,
      `♻`,
      `🏆`,
      `🔥`,
      `🌚`,
      `👻`,
      `💀`,
      `🎄`,
      `🎃`,
      `🚀`,
      `🎱`,
      `🍼`,
      `🍺`,
      `🐔`,
      `🐉`,
      `🌝`
    ].random()
    clans.number += 1
    clans[clans.number] = {
      owner: message.user,
      users: {},
      zashita: 0,
      retin: 0,
      aue: 0,
      lox: 0,
      topsk: 0,
      pisko: 10,
      fuflo: 0,
      abramovich: 0,
      good: 0,
      pal: false,
      number: clans.number,
      name: name,
      regclanDate: `${data()}, ${time()}`,
      balance: 0,
      smile: smile,
      open: true,
      price: 1000,
      exs: 0,
      people: 1
    }
    user.clanid = clans.number
    clans[clans.number].users[message.user.uid] = {
      level: 3,
      names: message.user.tag,
      vlozhil: 0,
      don: 0,
      volos: false,
      idd: message.user.id,
      uidd: message.user.uid
    }

    return bot(
      `клан «${name}» успешно создан!

🆔 ID клана: ${clans.number}
🔥 Создатель клана: [id${message.user.id}|${message.user.tag}]
💸 Цена за вход: 1.000$

📚 Команды клана: кпомощь`,
      {
        attachment: `photo-178396242_457246737`,
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "💡 Клан помощь"
                },
                color: "secondary"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "⚔ Клан топ"
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/(?:покинуть|❌ Покинуть|❌Покинуть|клан покинуть)$/i, async (message, bot) => {
  const idclan = message.user.clanid

  if (!idclan) return bot(`вы не состоите в каком-либо клане ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[idclan].users[message.user.uid].level == 3) return bot(`создатель не может выйти из клана.`)

  clans[idclan].people -= 1
  message.user.clanid = false
  delete clans[idclan].users[message.user.uid]
  let user = users.find(x => x.id === clans[idclan].owner.uid)
  if (!user.mts2) {
    vk.api.messages.send({
      user_id: user.id,
      message: `❌ Игрок [id${message.user.id}|${message.user.tag}] покинул клан «${clans[idclan].name}»

▶ Введите «Оповещения выкл» для отключения всех клановых оповещений.`
    })
  }
  return bot(`вы добровольно покинули клан ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
})

gabella.bot(/(?:коткрыть|клан открыть)/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/Заместитель создателя клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].open == true) return bot(`ваш клан уже открыт, цена за вход: ${utils.sp(clans[clanid].price)}$ 🤑`)
  clans[clanid].open = true
  return bot(`вы открыли клан, цена за вход: ${utils.sp(clans[clanid].price)}$ 🤑`)
})

gabella.bot(/^(?:бонус клан|клан бонус)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/Заместитель создателя клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)

  if (clans[clanid].bon > getUnix())
    return bot(`Вы недавно получили бонус! 😩

⌚ Новый бонус можно получить через ${unixStampLeft(clans[clanid].bon - Date.now())}`)

  let prize = utils.pick([1, 2, 3, 4, 5, 6, 7])

  if (prize === 1) {
    clans[clanid].retin += 10
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +10 рейтинга! ${smilesuccess}`)
    return message.sendSticker(18950)
  }

  if (prize === 2) {
    clans[clanid].retin += 100
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +100 рейтинга.`)
    return message.sendSticker(18981)
  }

  if (prize === 3) {
    clans[clanid].zashita += 1000
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +1000 армии`)
    return message.sendSticker(1933)
  }

  if (prize === 4) {
    clans[clanid].balance += 10000000000000
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +10.000.000.000.000$ в казну!`)
    return message.sendSticker(13218)
  }

  if (prize === 5) {
    clans[clanid].balance += 1000000000000
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +1.000.000.000.000$ в казну!`)
    return message.sendSticker(17763)
  }

  if (prize === 6) {
    clans[clanid].retin += 50
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +50 рейтинга!`)
    return message.sendSticker(6339)
  }
  if (prize === 7) {
    clans[clanid].zashita += 200
    clans[clanid].bon = getUnix() + 3600000
    bot(`бонус клана: +200 армии!`)
    return message.sendSticker(8479)
  }
})

gabella.bot(/(?:кзакрыть|клан закрыть)/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/Заместитель создателя клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].open == false)
    return bot(`ваш клан уже закрыт ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}

🤑 Открыть: клан открыть`)
  clans[clanid].open = false
  return bot(`вы закрыли клан, набор участников больше не производится ❌`)
})

gabella.bot(/(?:кцена|клан цена)\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = Math.floor(Number(message.args[1]))
  if (!Number(message.args[1]))
    return bot(`цена за вход: ${utils.sp(clans[clanid].price)}$ ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}

💸 Установить новую цену: клан цена [цена]`)
  if (message.args[1] <= 0)
    return bot(`цена за вход: ${utils.sp(clans[clanid].price)}$ ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}

💸 Установить новую цену: клан цена [цена]`)
  if (clans[clanid].users[message.user.uid].level < 2) return bot(`вы не создатель/Заместитель создателя клана. 🚫`)
  if (message.args[1] < 100) return bot(`цена для входа в клан не должна быть меньше 100$`)
  if (message.args[1] > 100000000000000) return bot(`цена для входа в клан не должна быть больше 100.000.000.000.000$`)
  clans[clanid].price = Number(message.args[1])
  return bot(`вы установили новую цену за вход в клан: ${utils.sp(message.args[1])}$ 🤑`)
})

gabella.bot(/(?:вступить|клан вступить|войти|клан войти|квступить)\s([0-9]+)$/i, async (message, bot) => {
  let idclan = message.args[1]
  let clanid = message.user.clanid
  if (!clans[idclan]) return bot(`такого клана не существует ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clanid == idclan) return bot(`вы состоите в этом клане ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
  if (clans[clanid]) return bot(`вы состоите в другом клане ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[idclan].people >= 20) return bot(`в данном клане максимальное количество участников ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[idclan].open == false) return bot(`данный клан закрыт, в него нельзя войти ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (message.user.balance < clans[idclan].price)
    return bot(
      `вход в данный клан стоит ${utils.sp(clans[idclan].price)}$ ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`,
      { attachment: "market-187845340_3242522" }
    )
  message.user.balance -= Number(clans[idclan].price)
  message.user.clanid = Number(message.args[1])
  if (!clans[idclan].users[message.user]) {
    clans[idclan].users[message.user.uid] = {
      level: 0,
      names: message.user.tag,
      vlozhil: 0,
      don: 0,
      volos: false,
      idd: message.user.id,
      uidd: message.user.uid
    }
  }
  clans[idclan].people += 1
  clans[idclan].balance += clans[idclan].price
  let user = users.find(x => x.id === clans[idclan].owner.uid)
  if (!user.mts2) {
    vk.api.messages.send({
      user_id: user.id,
      message: `🗣 Игрок [id${message.user.id}|${message.user.tag}] вступил в клан «${clans[idclan].name}»

▶ Введите «Оповещения выкл» для отключения всех клановых оповещений.`
    })
  }
  return bot(
    `вы вошли в клан «${clans[idclan].name}» за ${utils.sp(clans[idclan].price)}$ ${utils.pick([
      `🤤`,
      `☺`,
      `🙂`,
      `😁`,
      `😏`,
      `🤑`
    ])}\n\n📚 Команды клана: кпомощь`
  )
})

gabella.bot(/(?:кназвание|клан название)\s([^]+)$/i, async (message, bot) => {
  if (message.user.clanid == false) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, ",")
  message.args[1] = message.args[1].replace(/(\[|\()/gi, "{")
  message.args[1] = message.args[1].replace(/(\]|\))/gi, "}")

  let zaprets1 = message.args[1].toLowerCase()
  var zapret =
    /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние|vto.pe|создатель)/
  var sss = zapret.test(zaprets1)

  if (zapret.test(zaprets1) == true || message.args[1].toLowerCase() === "") {
    var check = true
    return bot(`Запрщенные символы!`)
  }
  let text = message.args[1].toLowerCase()
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
  var lol = filter0.test(text)
  var lol1 = filter1.test(text)

  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true
    return bot(`подозрительная ссылка 🆘`)
  }
  if (message.args[1].length <= 2) {
    return bot(`вы указали слишком короткое название ⛔
❓Минимальная длина для название клана 3 символов.`)
  }

  if (message.args[1].length >= 26) {
    return bot(`вы указали слишком длинное название
❓Максимальная длина для названия клана 25 символов.`)
  }
  let user = message.user
  let clanid = user.clanid
  if (clans[clanid].users[message.user.uid].level < 1) return bot(`вы не модератор клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].balance < 10000000000)
    return bot(`на балансе клана меньше 10.000.000.000$ ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}
🛒 Изменение названия клану стоит 10.000.000.000$`)
  clans[clanid].balance -= 10000000000
  clans[clanid].name = message.args[1]
  return bot(`вы успешно изменили название клану за 10.000.000.000$! ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
})

gabella.bot(/^(?:клан смайл)/i, async (message, bot) => {
  let user = message.user
  let clanid = message.user.clanid
  if (!clans[clanid]) return message.reply(`У вас нет клана.`)
  if (clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель/заместитель клана.`)
  if (clans[clanid].balance < 10000000000000) return message.reply(`На балансе клана нету 10.000.000.000.000$`)
  clans[clanid].balance -= 10000000000000

  if (clans[clanid]) {
    let smile = utils.pick([`📺`, `💥`, `💣`, `💎`, `♻`, `🏆`, `🔥`, `🌚`, `👻`, `💀`, `🎄`, `🎃`, `🚀`, `🎱`, `🍼`, `🍺`, `🐔`, `🐉`, `🌈`, `🌝`])
    clans[clanid].smile = smile
    return message.reply(`Вы успешно изменили смайлик клана за 10.000.000.000.000$! ${clans[clanid].smile}`)
  }
})

gabella.bot(/^(?:клан состав|клан участники|клан у|состав клан|клановый состав|состав клана)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  let text = ``

  for (let id in clans[clanid].users) {
    let user = users[id]
    if (user.mention == true) {
      if (clans[clanid].users[id].level == 3) text += `⠀⠀ [🔥] Создатель клана - @id${user.id} (${user.tag}) (ID: ${user.id})\n`
      if (clans[clanid].users[id].level == 2) text += `⠀⠀ [🅰] Заместитель создателя клана - @id${user.id} (${user.tag}) (ID: ${user.id})\n`
      if (clans[clanid].users[id].level == 1) text += `⠀⠀ [Ⓜ] Модератор клана - @id${user.id} (${user.tag}) (ID: ${user.id})\n`
      if (clans[clanid].users[id].level == 0) text += `⠀⠀ [🔷] Обычный участник - ${user.tag} (ID: ${user.id})\n`
    } else {
      if (clans[clanid].users[id].level == 3) text += `⠀⠀ [🔥] Создатель клана - ${user.tag} (ID: ${user.id})\n`
      if (clans[clanid].users[id].level == 2) text += `⠀⠀ [🅰] Заместитель создателя клана - ${user.tag} (ID: ${user.id})\n`
      if (clans[clanid].users[id].level == 1) text += `⠀⠀ [Ⓜ] Модератор клана - ${user.tag} (ID: ${user.id})\n`
      if (clans[clanid].users[id].level == 0) text += `⠀⠀ [🔷] Обычный участник - ${user.tag} (ID: ${user.id})\n`
    }
  }
  return bot(`участники клана «${clans[clanid].name}» [${clans[clanid].people}/20]:

${text}`)
})

gabella.bot(/^(?:клан|⚔ Клан|⚔Клан|мой клан)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid)
    return bot(`вы не состоите в клане.
Введите «клан помощь» для просмотра информации 🔔`)

  let shit = ``
  let zel = ``
  let text = ``
  let minus = ``
  let num = 10

  for (let id in clans[clanid].users) {
    if (!num < 1) {
      num -= 1
      let user = users[id]
      if (user.mention == true) {
        if (clans[clanid].users[id].level == 3) text += `👑 Создатель клана: @id${user.id} (${user.tag})\n`
      } else {
        if (clans[clanid].users[id].level == 3) text += `👑 Создатель клана: @id${user.id} (${user.tag})\n`
      }
    }
  }
  if (clans[clanid].abramovich > getUnix()) shit = `\n🏹 Действие щита: ${unixStampLeft(clans[clanid].abramovich - Date.now())}`
  if (clans[clanid].aue > getUnix()) zel = `\n🍹 Зелье: ${unixStampLeft(clans[clanid].aue - Date.now())}`
  if (clans[clanid].retin < 0) minus = `-`

  return bot(`Вы состоите в клане - «${clans[clanid].name}»

📜 Информация о клане:

🆔 ID клана: ${clans[clanid].number}
💰 Баланс клана: ${utils.sp(clans[clanid].balance)}$
👑 Рейтинг клана: ${minus}${utils.sp(clans[clanid].retin)}
${clans[clanid].open == true ? "🔓" : "🔒"} Клан: ${clans[clanid].open == true ? "открыт!" : "закрыт!"}
🔥 Побед: ${utils.sp(clans[clanid].good)}, поражений: ${utils.sp(clans[clanid].fuflo)} 
💸 Цена за вход: ${utils.sp(clans[clanid].price)}$${zel}
👥 Участники: ${clans[clanid].people}/20

🧩 Смайл: ${clans[clanid].smile}

⚔ Армии: ${utils.sp(clans[clanid].zashita)}${shit}

${text}

📚 Дата создания клана:  ${clans[clanid].regclanDate}`)
})

gabella.bot(/(?:ккик|изгнать|исключить|клан кик)\s([0-9]+)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].users[message.user.uid].level < 1)
    return bot(`вы не создатель/Заместитель создателя клана/модератор клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (clans[clanid].users[message.user.uid].level == 3) {
    if (clans[clanid].users[user.uid].level == 3)
      return bot(`нельзя изгнать создателя из клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}
❌ Удаление клана: клан удалить`)
    if (user.uid == message.user.uid) return bot(`вы не можете кикнуть себя ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)

    vk.api.messages.send({
      user_id: user.id,
      message: `${user.tag}, вас изгнали из клана «${clans[message.user.clanid].name}» ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
    })

    delete clans[clanid].users[user.uid]
    clans[clanid].people -= 1
    user.clanid = false

    return bot(`вы изгнали игрока [id${user.id}|${user.tag}] из клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  }

  if (clans[clanid].users[message.user.uid].level == 2) {
    if (clans[clanid].users[user.uid].level == 2)
      return bot(`нельзя изгнать Заместитель создателя из клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
    if (clans[clanid].users[user.uid].level == 3) return bot(`нельзя изгнать создателя из клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)

    if (!user) return bot(`такого игрока не существует ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
    if (user.uid == message.user.uid) return bot(`вы не можете кикнуть себя ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)

    vk.api.messages.send({
      user_id: user.id,
      message: `${user.tag}, вас изгнали из клана «${clans[message.user.clanid].name}» ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
    })

    delete clans[clanid].users[user.uid]
    clans[clanid].people -= 1
    user.clanid = false

    return bot(`вы изгнали игрока [id${user.id}|${user.tag}] из клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  }

  if (clans[clanid].users[message.user.uid].level == 1) {
    if (clans[clanid].users[user.uid].level == 1) return bot(`нельзя изгнать модератора из клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
    if (clans[clanid].users[user.uid].level == 2)
      return bot(`нельзя изгнать Заместитель создателя клана из клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
    if (clans[clanid].users[user.uid].level == 3) return bot(`нельзя изгнать создателя из клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)

    if (!user) return bot(`такого игрока не существует ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
    if (user.uid == message.user.uid) return bot(`вы не можете кикнуть себя ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)

    vk.api.messages.send({
      user_id: user.id,
      message: `${user.tag}, вас изгнали из клана «${clans[message.user.clanid].name}» ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
    })

    delete clans[clanid].users[user.uid]
    clans[clanid].people -= 1
    user.clanid = false

    return bot(`вы изгнали игрока [id${user.id}|${user.tag}] из клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  }
})

gabella.bot(/(?:клан магазин|магазин клана|клановый магазин)$/i, async (message, bot) => {
  return bot(
    `магазин:

1⃣ Армия (1 боец) — 500.000.000.000$

2⃣ Щит на сутки — 10.000.000.000.000$
❌ Щит пропадает при атаке на любой клан.

🔎 Купить: «Клан купить [номер] [количество]»`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "Купить щит"
              },
              color: "negative"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:купить щит|🛡 Щит)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].balance < 10000000000000) return bot(`на балансе вашего клана меньше 1.500.000.000.000$`)
  let id = message.user.uid
  if (clans[clanid].users[id].level < 1) return bot(`вы не создатель/Заместитель создателя клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].abramovich > getUnix())
    return bot(
      `у вашего клана уже имеется щит, он закончится через ${unixStampLeft(clans[clanid].abramovich - Date.now())} ${utils.pick([
        `😳`,
        `😒`,
        `😟`,
        `🙄`,
        `🤔`
      ])}`
    )

  clans[clanid].balance -= 10000000000000
  clans[clanid].abramovich = getUnix() + 86400000
  return bot(`вы купили щит на 24 часа для клана ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}

❌ Щит пропадает при любой атаке с вашей стороны.`)
})

gabella.bot(/(?:клан купить 2)\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].balance < 10000000000000) return bot(`на балансе вашего клана меньше 1.500.000.000.000$`)
  let id = message.user.uid
  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))
  if (clans[clanid].users[id].level < 1) return bot(`вы не создатель/Заместитель создателя клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].abramovich > getUnix())
    return bot(
      `у вашего клана уже имеется щит, он закончится через ${unixStampLeft(
        clans[clanid].abramovich - Date.now()
      )}, Вы можете убрать его атакой по чужоу клану! ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
    )

  clans[clanid].balance -= 10000000000000 * message.args[1]
  getUnix() + message.args[1] * 86400000
  clans[clanid].abramovich = getUnix() + message.args[1] * 86400000

  return bot(`вы купили щит на ${message.args[1]} д. ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])} 

❌ Щит пропадает при любой атаке с вашей стороны.`)
})

gabella.bot(/(?:кбанк|кбаланс|казна|клан казна|кказна|баланс клана|клан положить|кположить)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  let text = ``

  for (let id in clans[clanid].users) {
    let people = clans[clanid].users[id]
    if (clans[clanid].users[id].level == 3)
      text += `[🔥] >> [id${clans[clanid].users[id].idd}|Создатель клана] | Вложено: ${utils.sp(
        clans[clanid].users[id].vlozhil
      )}$ | [🔥] Создатель.\n\n`
    if (clans[clanid].users[id].level == 2)
      text += `[ID: ${clans[clanid].users[id].idd}] >> [id${clans[clanid].users[id].idd}|Заместитель создателя] | Вложено: ${utils.sp(
        clans[clanid].users[id].vlozhil
      )}$ | [🅰] Заместитель создателя.\n\n`
    if (clans[clanid].users[id].level == 1)
      text += `[ID: ${clans[clanid].users[id].idd}] >> [id${clans[clanid].users[id].idd}|Модератор] | Вложено: ${utils.sp(
        clans[clanid].users[id].vlozhil
      )}$ | [Ⓜ] Модератор.\n\n`
    if (clans[clanid].users[id].level == 0)
      text += `[ID: ${clans[clanid].users[id].idd}] >> [id${clans[clanid].users[id].idd}|Игрок] | Вложено: ${utils.sp(
        clans[clanid].users[id].vlozhil
      )}$ | [🔷] Участник.\n\n`
  }
  return bot(`В вашем клане вложели за все время:
		${text}`)
})

gabella.bot(/(?:кположить|казна|клан казна|казна клан|клан положить|клан банк|банк клан|клан пополнить)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm > 0) return bot(`администратор не может пополнять клан. 🚫`)
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
  if (!Number(message.args[1]))
    return bot(`баланс вашего клана: ${utils.sp(clans[clanid].balance)}$ ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}

💸 Пополнить: казна [сумма]`)
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.args[1] > message.user.balance)
    return bot(`вклад не может превышать ваш баланс ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}
💰 Баланс: ${utils.sp(message.user.balance)}$`)
  if (message.args[1] <= 0)
    return bot(`баланс вашего клана: ${utils.sp(clans[clanid].balance)}$ ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}

💸 Пополнить: казна [сумма]`)

  let id = message.user.uid
  message.user.balance -= message.args[1]
  clans[clanid].balance += message.args[1]
  clans[clanid].users[id].vlozhil += message.args[1]
  return bot(`вы успешно положили ${utils.sp(message.args[1])}$ в банк клана ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
})

gabella.bot(/(?:клан удалить|кудалить)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].users[message.user.uid].level < 3) return bot(`вы не создатель клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].people > 1) return bot(`в клане имеются люди, сначала исключите их всех ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].topsk < getUnix()) {
    clans[clanid].topsk = getUnix() + 600000
    return bot(
      `вы уверены в удалении клана? 🤔

❌ Введите для удаления: клан удалить`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "клан удалить"
                },
                color: "negative"
              }
            ]
          ]
        })
      }
    )
  }
  delete clans[clanid]
  message.user.clanid = false
  return bot(`вы удалили свой клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
})

gabella.bot(/(?:Клан армия)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  return bot(`армии в вашем клане: ${utils.sp(clans[clanid].zashita)} ⚔

🛍 Купить: клан купить 1 [кол-во]
🛒 Магазин: клан магазин`)
})

gabella.bot(/(?:клан купить 1)\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)

  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = Math.floor(Number(message.args[1]))
  let id = message.user.uid
  let pay = 500000000000
  if (clans[clanid].users[id].level < 1) return bot(`вы не создатель/Заместитель создателя клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].balance < 500000000000)
    return bot(`на балансе вашего клана меньше 10.000.000.000.000$ ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (message.args[1] < 1)
    return bot(`покупка армии идёт от 1 единице! ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}
🛍 Пример: клан купить 1 1`)
  if (!Number(message.args[1]))
    return bot(`армии в вашем клане: ${utils.sp(clans[clanid].zashita)} ⚔

🛍 Купить: клан купить 1 [кол-во]
🛒 Магазин: клан магазин`)
  if (message.args[1] <= 0)
    return bot(`армии в вашем клане: ${utils.sp(clans[clanid].zashita)} ⚔

🛍 Купить: клан купить 1 [кол-во]
🛒 Магазин: клан магазин`)

  if (message.args[1] * pay > clans[clanid].balance) {
    var armich = Math.floor(clans[clanid].balance / 500000000000)
    return bot(`баланса вашего клана хватает на покупку ${utils.sp(armich)} единиц армии ⚔`)
  } else {
    var stick = utils.pick([5227, 15161])
    clans[clanid].balance -= message.args[1] * pay
    clans[clanid].zashita += message.args[1]

    bot(`вы купили ${utils.sp(message.args[1])} единиц армии за ${utils.sp(message.args[1] * pay)}$ ⚔

💰 Баланс клана: ${utils.sp(clans[clanid].balance)}$`)
    if (stick == 5227) {
      message.sendSticker(5227)
    }
    if (stick == 15161) {
      message.sendSticker(15161)
    }
  }
})

gabella.bot(/^(?:пригласить|кпригласить|клан пригласить)\s([0-9]+)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (message.user.clanid == false) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`в клан могут приглашать только создатель и Заместитель создателя клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (message.user.lol > getUnix())
    return bot(
      `вы сможете пригласить еще одного человека в клан через ${unixStampLeft(message.user.lol - Date.now())} ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`
      ])}`
    )

  const user = await users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`данного игрока не существует.`)
  let clanidi = user.clanid
  if (clans[clanidi]) return bot(`данный игрок уже состоит в другом клане.`)
  await bot(`вы успешно пригласили игрока [id${user.id}|${user.tag}] в клан! ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
  getUnix() + 3600000
  message.user.lol = getUnix() + 3600000
  vk.api.messages.send({
    user_id: user.id,
    message: `✉ Игрок [id${message.user.id}|${message.user.tag}] пригласил Вас в клан «${clans[message.user.clanid].name}»! ${utils.pick([
      `🤤`,
      `☺`,
      `🙂`,
      `😁`,
      `😏`,
      `🤑`
    ])}
Для вступления введите «Вступить ${message.user.clanid}» (без кавычек)`
  })
})

gabella.bot(/^(?:клан повысить)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
  return bot(`использование: повысить [ID игрока]

🅰 Заместитель создателя  в клане может приглашать и исключать игроков, изменять клан, проводить атаки.
📜 Модератор в клане может изменять название, исключать игроков.`)
})

gabella.bot(/^(?:клан повысить)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.clanid == false) return bot(`у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  const user = await users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`такого игрока не существует ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (user.uid === message.user.uid) return bot(`неверный ID ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)

  let clanid = user.clanid
  let clanidi = message.user.clanid
  if (clans[clanidi].users[message.user.uid].level < 2)
    return bot(`вы не создатель/Заместитель создателя клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clanid !== clanidi) return bot(`этот человек не состоит в клане ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].users[user.uid].level == 2) return bot(`данный игрок имеет максимальный статус в клане.`)
  if (clans[clanid].users[user.uid].level == 3) return bot(`данный игрок является создателем клана.`)

  if (clans[clanid].users[user.uid].level < 1) {
    clans[clanid].users[user.uid].level = 1
    await bot(`игрок [id${user.id}|${user.tag}] был назначен модератором в клане ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `▶ Вас назначили модератором в клане «${clans[message.user.clanid].name}» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`
    })
  } else {
    if (clans[clanidi].users[message.user.uid].level < 3)
      return bot(`до уровня "Заместитель создателя" может повысить только создатель клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
    clans[clanid].users[user.uid].level = 2
    await bot(`игрок [id${user.id}|${user.tag}] был назначен Заместитель создателя в клане ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `▶ Вас назначили Заместитель создателя в клане «${clans[message.user.clanid].name}» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`
    })
  }
})

gabella.bot(/^(?:понизить|клан понизить|кпонизить)$/i, async (message, bot) => {
  let clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
  return bot(`использование: понизить [ID игрока]

🅰 Заместитель создателя в клане может приглашать и исключать игроков, изменять клан, проводить атаки.
📜 Модератор в клане может изменять название, исключать игроков.`)
})

gabella.bot(/^(?:понизить|клан понизить|кпонизить)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.clanid == false) return bot(`у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  const user = await users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`такого игрока не существует ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (user.uid === message.user.uid) return bot(`неверный ID ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)

  let clanid = user.clanid
  let clanidi = message.user.clanid
  if (clans[clanidi].users[message.user.uid].level < 2)
    return bot(`вы не создатель/Заместитель создателя клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clanid !== clanidi) return bot(`этот человек не состоит в клане ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  if (clans[clanid].users[user.uid].level == 3) return bot(`данный игрок является создателем в клане.`)
  if (clans[clanid].users[user.uid].level < 1) return bot(`данный игрок является участником в клане.`)

  if (clans[clanid].users[user.uid].level == 1) {
    clans[clanid].users[user.uid].level = 0
    await bot(`игрок [id${user.id}|${user.tag}] был понижен до прав участника в клане ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `▶ Вас понизили до прав участника в клане «${clans[message.user.clanid].name}» ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
    })
  } else {
    if (clans[clanidi].users[message.user.uid].level < 3)
      return bot(`до уровня "модератор" может понизить только создатель клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
    clans[clanid].users[user.uid].level = 1
    await bot(`игрок [id${user.id}|${user.tag}] был понижен до прав модератора в клане ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`)
    vk.api.messages.send({
      user_id: user.id,
      message: `▶ Вас понизили до прав модератора в клане «${clans[message.user.clanid].name}» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`
    })
  }
})

gabella.bot(/(?:рандом атака|война|⚔ Клан атака|атака рандом|Клан атака|клан атака|атака клан)$/i, async (message, bot) => {
  var clanid = message.user.clanid
  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`)
  vk.api.messages.send({
    chat_id: 1233,
    message: `[${data()} ${time()}]\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n`
  })

  if (clans[clanid].exs > getUnix())
    return bot(`ваша армия слишком устала 😩

⌚ Новую атаку можно начать через ${unixStampLeft(clans[clanid].exs - Date.now())}`)

  if (!clanid)
    return bot(
      `вы не состоите в клане.
Информация по командам: «клан помощь» 🔔`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "5"}',
                  label: "кпомощь"
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )

  if (clans[clanid].users[message.user.uid].level < 1) return bot(`Атаковать клан можно от модератора! ❌`)
  if (clans[clanid].balance < 10000000000)
    return bot(`на балансе вашего клана меньше 10.000.000.000$ ❌`, {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `Казна 10ккк`
              },
              color: "positive"
            }
          ]
        ]
      })
    })
  if (clans[clanid].zashita < 1)
    return bot(`❌ В клане нет Армии.`, {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: '{"button": "5"}',
                label: "Клан купить 1 10"
              },
              color: "positive"
            }
          ]
        ]
      })
    })
  const randclan = utils.random(1, clans.number)
  if (!clans[randclan])
    return bot(`подходящего клана не найдено, попробуйте снова ✅`, {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `⚔ Клан атака`
              },
              color: "default"
            }
          ]
        ]
      })
    })

  if (clans[randclan].abramovich > getUnix())
    return bot(`подходящего клана не найдено, попробуйте снова ✅`, {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "⚔ Клан атака"
              },
              color: "default"
            }
          ]
        ]
      })
    })

  let user = users.find(x => x.id === clans[randclan].owner.uid)
  let text = ``
  if (clans[clanid].abramovich > getUnix()) text = `\n\n❌ С вашего клана снят щит.`
  if (clans[randclan].balance < 10000000000) {
    var klmoney = utils.random(100000000, 10000000000)
    if (clans[clanid].zashita == clans[randclan].zashita) {
      return bot(`подходящего клана не найдено, попробуйте снова ✅`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `⚔ Клан атака`
                },
                color: "default"
              }
            ]
          ]
        })
      })
    }

    setTimeout(async () => {
      message.send(`⚔ [id${message.user.id}|${message.user.tag}], Клан снова готов к атаке!`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `⚔ Клан атака`
                },
                color: "default"
              }
            ]
          ]
        })
      })
    }, 300001)

    if (clans[clanid].zashita < clans[randclan].zashita) {
      clans[clanid].abramovich = 5
      clans[clanid].exs = getUnix() + 300000

      clans[randclan].good += 1
      clans[randclan].retin += 1 //utils.random(1, 20);
      clans[randclan].balance += klmoney

      clans[clanid].retin -= 1 //utils.random(1, 5);
      clans[clanid].fuflo += 1

      resul = Math.floor(clans[clanid].zashita * 0.1)
      clans[clanid].zashita = Math.floor(clans[clanid].zashita * 0.9)

      resulk = Math.floor(resul * 0.5)
      clans[randclan].zashita -= resulk
      var stick = utils.pick([3134, 10000])

      bot(`ваш клан потерпел поражение перед «${clans[randclan].name}», вы потеряли ${utils.sp(resul)} армии ❌${text}`)
      if (stick == 3134) {
        message.sendSticker(3134)
      }
      if (stick == 10000) {
        message.sendSticker(10000)
      }
      if (!user.mts2) {
        vk.api.messages.send({
          user_id: user.id,
          message: `⚔ На Ваш клан напал  клан - «${clans[clanid].name}», Вы одержали победу! Вы потеряли ${utils.sp(
            resulk
          )} армии, украдено: ${utils.sp(klmoney)}$ ✅

🔔 Отписаться от оповещений: «оповещения выкл»)`
        })
      }
    } else {
      clans[clanid].abramovich = 5
      clans[clanid].exs = getUnix() + 300000

      clans[clanid].good += 1
      clans[clanid].retin += 1 //utils.random(1, 50);
      clans[clanid].balance += klmoney

      clans[randclan].retin -= 1 //utils.random(1, 20);
      clans[randclan].fuflo += 1

      resulkk = Math.floor(clans[randclan].zashita * 0.1)
      clans[randclan].zashita = Math.floor(clans[randclan].zashita * 0.9)

      resulkkk = Math.floor(resulkk * 0.5)
      clans[clanid].zashita -= resulkkk
      var stick = utils.pick([712, 5949])

      bot(
        `ваш клан напал и одержал победу перед «${clans[randclan].name}», вы потеряли ${utils.sp(resulkkk)} армии, украдено: ${utils.sp(
          klmoney
        )}$ ✅${text}`
      )
      if (stick == 712) {
        message.sendSticker(712)
      }
      if (stick == 5949) {
        message.sendSticker(5949)
      }
      if (!user.mts2) {
        vk.api.messages.send({
          user_id: user.id,
          message: `⚔ На Ваш клан напал  клан - «${clans[clanid].name}», Вы одержали поражение! Вы потеряли ${utils.sp(resulkk)} армии ❌

🔔 Отписаться от оповещений: «оповещения выкл»`
        })
      }
    }
  } else {
    if (clans[clanid].zashita == clans[randclan].zashita) {
      return bot(`подходящего клана не найдено, попробуйте снова ✅`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "⚔ Клан атака"
                },
                color: "default"
              }
            ]
          ]
        })
      })
    }

    setTimeout(async () => {
      message.send(`⚔ [id${message.user.id}|${message.user.tag}], Клан снова готов к атаке!`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "⚔ Клан атака"
                },
                color: "default"
              }
            ]
          ]
        })
      })
    }, 300001)

    if (clans[clanid].zashita < clans[randclan].zashita) {
      var kpmoney = utils.random(1000000000, clans[clanid].balance)

      clans[clanid].abramovich = 5
      clans[clanid].exs = getUnix() + 300000

      clans[randclan].good += 1
      clans[randclan].retin += 1 //utils.random(1, 10);
      clans[randclan].balance += kpmoney

      clans[clanid].balance -= kpmoney
      clans[clanid].retin -= 1 //utils.random(1, 20);
      clans[clanid].fuflo += 1

      resul1 = Math.floor(clans[clanid].zashita * 0.1)
      clans[clanid].zashita = Math.floor(clans[clanid].zashita * 0.9)

      resulk1 = Math.floor(resul1 * 0.5)
      clans[randclan].zashita -= resulk1
      var stick1 = utils.pick([3134, 10000])

      bot(
        `ваш клан напал и потерпел поражение перед «${clans[randclan].name}», вы потеряли ${utils.sp(resul1)} армии и ${utils.sp(kpmoney)}$ ❌${text}`
      )
      if (stick1 == 3134) {
        message.sendSticker(3134)
      }
      if (stick1 == 10000) {
        message.sendSticker(10000)
      }
      if (!user.mts2) {
        vk.api.messages.send({
          user_id: user.id,
          message: `⚔ На Ваш клан напал  клан - «${clans[clanid].name}», Вы одержали победу! Вы потеряли ${utils.sp(
            resulk1
          )} армии, украдено: ${utils.sp(kpmoney)}$ ✅

🔔 Отписаться от оповещений: «оповещения выкл»`
        })
      }
    } else {
      var kpmoney1 = utils.random(100000000, clans[randclan].balance)
      clans[clanid].abramovich = 5
      clans[clanid].exs = getUnix() + 300000

      clans[clanid].good += 1
      clans[clanid].retin += 1 //utils.random(1, 50);
      clans[clanid].balance += kpmoney1

      clans[randclan].balance -= kpmoney1
      clans[randclan].retin -= 1 //utils.random(1, 5);
      clans[randclan].fuflo += 1

      resulkk = Math.floor(clans[randclan].zashita * 0.1)
      clans[randclan].zashita = Math.floor(clans[randclan].zashita * 0.9)

      resulkkk = Math.floor(resulkk * 0.5)
      clans[clanid].zashita -= resulkkk
      var stick = utils.pick([712, 5949])

      bot(
        `ваш клан напал и одержал победу перед «${clans[randclan].name}», вы потеряли ${utils.sp(resulkkk)} армии, украдено: ${utils.sp(
          kpmoney1
        )}$ ✅${text}`
      )
      if (stick == 712) {
        message.sendSticker(712)
      }
      if (stick == 5949) {
        message.sendSticker(5949)
      }
      if (!user.mts2) {
        vk.api.messages.send({
          user_id: user.id,
          message: `⚔ На Ваш клан напал  клан - «${clans[clanid].name}», Вы одержали поражение! Вы потеряли ${utils.sp(resulkk)} армии и ${utils.sp(
            kpmoney1
          )}$ ❌

🔔 Отписаться от оповещений: «оповещения выкл»`
        })
      }
    }
  }
})
/*==========================================================================================================*/
/*===========================================КЛАНЫ=========================================================*/
/*==========================================================================================================*/
/*=========================================RP==============================================================*/
gabella.bot(/^(?:\/выебать|трахнуть|изнасиловать|износиловать)\s?([0-9]+)?/i, message => {
  if (!message.$match[1] || !Number(message.$match[1]) || !acc.users[message.$match[1]])
    return message.send(`${["&#9888;", "&#128276;", "&#10071;"].random()} Пример команды: изнасловать [ID]`)
  let args = message.$match
  if (message.user.settings.adm < 6) return message.send(`Вам недоступно.`)
  return message.send(`
  ${["&#128313;", "&#128312;"].random()} ${nick(message.user)} изнасиловал @id${acc.users[args[1]].id}(${acc.users[args[1]].tag})
  `)
})

gabella.bot(/^(?:чпок)\s?([0-9]+)?/i, message => {
  if (!message.$match[1] || !Number(message.$match[1]) || !acc.users[message.$match[1]])
    return message.send(`${["&#9888;", "&#128276;", "&#10071;"].random()} Пример команды: /kiss [ID]`)
  let args = message.$match
  return message.send(`
  ${["&#128313;", "&#128312;"].random()} ${nick(message.user)} поцеловал @id${acc.users[args[1]].id}(${acc.users[args[1]].tag})
  `)
})
gabella.bot(/^(?:рп|действия)/i, async (message, bot) => {
  return message.send(`👤| @id${message.user.id}(${message.user.tag}), cписок действий:

Поцеловать [ID]
😘 Поцеловать в щёчку [ID]
🤬 Накричать [ID]
😵 Вырубить [ID]
☠Оскорбить [ID]
⚰ Закопать [ID]
🌺 Полюбить [ID]
🗣 Вызвать [ID]
💞 Крепко обнять [ID]
💕 Трахнуть [ID]
👊🏻 Уебать [ID]
💟 Шлепнуть [ID]
😻 Кусь [ID]
😍 Укусить [ID] `)
})

gabella.bot(/^(?:Доверять|даверять)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" доверяет вам!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы доверяете игроку : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Вызвать|вызв)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" вызвал вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы вызвали игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Крепко обнять|обнять)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" крепко обнял вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы крепко обняли игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Поцеловать)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" поцеловал вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы поцеловали игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Поцеловать в щёчку)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" поцеловал вас в щёчку!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы поцеловали в щёчку игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:пернуть)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" пукнул на вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы пукнули в игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:пнуть)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" пнул вас!\n\n ID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы пнули игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:уебать|ударить|пиздануть)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" сильно ударил вас!\n\n ID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы сильно ударили игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:заняться сексом|секс|сэкс|секас|выебать|трахнуть)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" занялся любовью с вами <3!\n\n ID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(` <3 Вы занялись любовью с игроком : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Шлепнуть)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" шлепнул вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы шлепнули игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:кусь)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" 😻 кусьнул вас за уфко вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы кусьнули за уфко игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:укусить)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" 😍 укусил вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы укусили игрока : "@id${users[id].id}(${users[id].tag})"`)
})
gabella.bot(/^(?:позвонить)\s(.*)$/i, async (message, bot) => {
  message.user.foolder += 1

  if (!message.user.call) return message.reply(`Ой, ей! Похоже, у вас закончились вызовы....`)
  if (message.args[1] < 9000000001)
    return message.send(`Пожалуйста, перепроверьте ваши данные. Чтобы зарегистрировать новый звонок, напишите так:\n\nПозвонить 9211437838`)

  let args = message.text.match(/^(?:позвонить)\s?(.*)/i)
  if (args[1].toLowerCase() == "") return message.send(nope)
  rq("http://avtobzvon.ru/api/c2e1b006a358894e9f15c29cf7a8a0ed/11?phone=" + encodeURIComponent(args[1]) + "")
  return message.reply(`😜 | Звонок зарегистрирован! 
❤ >> Осталось наборов: ${message.user.call}

🎁 || Летние скидки! :3
`)
})

gabella.bot(/^(?:Задавить|зодовить)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `☠ Игрок " @id${message.user.id}(${message.user.tag})" задовил вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`☠ Вы задовили : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Накричать|Нокричать)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" накричал!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы накричали на : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Вырубить|выруб)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" вырубил вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы вырубили : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Оскорбить|оскр)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" оскорбил вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы оскорбили игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Закопать|закапать)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" закопал вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы закопали игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Посмотреть|Пасматреть|Посматреть)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" посмотрел на вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы посмотрели на игрока : "@id${users[id].id}(${users[id].tag})"`)
})

gabella.bot(/^(?:Любить|полюбить)\s([0-9]+)?$/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  let id = message.args[1]
  vk.api.call("messages.send", {
    user_id: users[id].id,
    message: `Игрок " @id${message.user.id}(${message.user.tag})" любит вас!\n\nID игрока: [id${message.user.id}| ${message.user.uid}]`
  })
  return message.send(`Вы полюбили игрока : "@id${users[id].id}(${users[id].tag})"`)
})
/*==========================================================================================================*/
/*===================================топы==================================================================*/
gabella.bot(/(?:Вирус топ|топ Вирус|🔝 Вирус топ)$/i, async (message, bot) => {
  let top = []

  users.map(x => {
    top.push({ bossyr: x.bossyr, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention })
  })

  top.sort((a, b) => {
    return b.bossyr - a.bossyr
  })

  let text = ``
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i)
    }

    return pos
  }

  for (let i = 0; i < 10; i++) {
    if (!top[i]) return
    const user = top[i]

    text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — нанёс ${utils.sp(user.bossyr)} ударов
		`
  }

  await bot(`топ по общим ударам:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — нанёс ${utils.sp(message.user.bossyr)} ударов`)
  {
    keyboard: JSON.stringify({
      inline: true,
      buttons: [
        [
          {
            action: {
              type: "text",
              payload: "{}",
              label: `⚔ Вирус атака`
            },
            color: "negative"
          }
        ]
      ]
    })
  }

  return message.sendSticker(11278)
})
gabella.bot(/(?:беседы топ)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return bot(`Что?`)
  let top = []

  chats.map(x => {
    top.push({ sms: x.sms, chat_idd: x.chat_idd })
  })

  top.sort((a, b) => {
    return b.sms - a.sms
  })

  let text = ``
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i)
    }

    return pos
  }

  for (let i = 0; i < 10; i++) {
    if (!top[i]) return
    const chat = top[i]

    text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} - ${utils.sp(chat.sms)} сообщений — ${utils.sp(chat.chat_idd)} ид. 
		`
  }
  await bot(`Топ бесед по активу
		${text}`)
  return message.sendSticker(11278)
})
gabella.bot(/^(?:админы)$/i, async message => {
  let users = await vk.api.messages.getConversationMembers({
    peer_id: message.peerId
  }) // получаем инфу обо всех участниках беседы.
  let users2 = await users.items // не знаю зачем, по-другому что-то шло не так.
  let t2 = users2.filter(item => item.is_admin) // Фильтруем инфу участников и оставляем только информацию про админов.
  let t3 = t2.map(item => item.member_id) // Конечный список айди админов беседы -  [1, 32324, 23434, ...]
})
gabella.bot(/(?:топ кланы|топ кланов|клановый топ|клан топ|топ клан|⚔ Топ кланы|, ⚔ Топ кланы)$/i, async (message, bot) => {
  if (clans.length < 6) return bot(`скоро будет доступно!`)

  let text = ``
  var top = []
  let minus = ``
  clanid = message.user.clanid

  if (clans.retin < 0) minus = `-`

  for (let i in clans) {
    top.push({
      id: i,
      owner: clans[i].owner,
      people: clans[i].people,
      balance: clans[i].balance,
      retin: clans[i].retin,
      name: clans[i].name
    })
  }

  top.sort((a, b) => {
    return b.retin - a.retin
  })

  for (let i = 0; i < 5; i++) {
    if (top.length > i) {
      const pizda = top[i]

      text += `${i === 9 ? `\n&#128287;` : `\n${i + 1}&#8419;`} ${utils.sp(pizda.retin)} 👑 [${pizda.people}/20] 👥 — [id${pizda.owner.id}|${
        pizda.name
      }] — ${utils.rn(pizda.balance)}$`
    }
  }

  return bot(
    `лучшие кланы:

${text}
💡 Рейтинг клана складывается из побед и поражений.`,
    { attachment: "photo-178396242_457245953" }
  )
})

gabella.bot(/^(?:топ51)$/i, async (message, bot) => {
  let top = []
  let topc = []

  function cccl(clanidd) {
    let texxxt = ``
    for (let id in clans[clanidd].users) {
      let user = users[id]
      if (clans[clanid].users[id].level == 4) texxxt += `*id${clans[clanidd].users[id].level == 4} (${clans[clanidd].name})`
    }
    return texxxt
  }

  clans.map(x => {
    top.push({ balance: x.balance, name: x.name, smile: x.smile, id: x.id, user: x.users.id, peoples: x.peoples, lvl: x.lvl })
  })

  top.sort((a, b) => {
    return b.rating - a.rating
  })
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === user) return (pos = i)
    }

    return pos
  }

  let cll = ``

  for (let i = 0; i < 15; i++) {
    if (!top[i]) return
    const clan = top[i]

    let mp = ``
    if (clan.lvl == 0) {
      mp += `5`
    }
    if (clan.lvl == 1) {
      mp += `15`
    }
    if (clan.lvl == 2) {
      mp += `25`
    }
    if (clan.lvl == 3) {
      mp += `50`
    }

    cll += `${i === 9 ? `🔟` : `${i + 1}⃣`}  «${clan.name}» - $${utils.rn(clan.rating)} \n`
  }

  return bot(`топ кланов:
${cll}
—————————————————

📢 Казна клана складывается из побед в атаках и пополнении.`)
})
gabella.bot(/(?:топ мандарин|мандарин топ|топ мандарины|мандарины топ|топ мандаринки|мандаринки топ)$/i, async (message, bot) => {
  let top = []

  users.map(x => {
    top.push({ balance: x.balance, mandarin: x.mandarin, tag: x.tag, id: x.id, mention: x.mention })
  })

  top.sort((a, b) => {
    return b.mandarin - a.mandarin
  })

  let text = ``
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i)
    }

    return pos
  }

  for (let i = 0; i < 10; i++) {
    if (!top[i]) return
    const user = top[i]
    if (user.mention == true) {
      text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`}  🍊${utils.sp(user.mandarin)} — @id${user.id} (${user.tag})
		`
    } else {
      text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`}  🍊${utils.sp(user.mandarin)} — ${user.tag}
		`
    }
  }

  return bot(`топ игроков по мандаринкам:
		${text}
—————————————————
${utils.gi(find() + 1)}   🍊${utils.sp(message.user.mandarin)} — ${message.user.tag}`)
})

gabella.bot(
  /(?:топ гонщиков|гонщик топ|топ кубков|кубки топ|топ кубки|гонщиков топ|топ гонщик|машина топ|топ машина|машины топ|топ машины)$/i,
  async (message, bot) => {
    let top = []

    users.map(x => {
      top.push({ balance: x.balance, gon: x.gon, tag: x.tag, id: x.id, mention: x.mention })
    })

    top.sort((a, b) => {
      return b.gon - a.gon
    })

    let text = ``
    const find = () => {
      let pos = 1000

      for (let i = 0; i < top.length; i++) {
        if (top[i].id === message.senderId) return (pos = i)
      }

      return pos
    }

    for (let i = 0; i < 10; i++) {
      if (!top[i]) return
      const user = top[i]
      if (user.mention == true) {
        text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} 🏆 ${utils.sp(user.gon)} кубков — @id${user.id} (${user.tag})
		`
      } else {
        text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} 🏆 ${utils.sp(user.gon)} кубков — ${user.tag}
		`
      }
    }

    return bot(`топ гонщиков по кубкам: 
		${text}
—————————————————
${utils.gi(find() + 1)} 🏆 ${utils.sp(message.user.gon)} кубков — ${message.user.tag}`)
  }
)
gabella.bot(/^(?:доблесть топ|доблести топ|топ доблесть|топ доблести)$/i, async (message, bot) => {
  let top = []

  users.map(x => {
    top.push({ pla: x.pla, tag: x.tag, id: x.id, mention: x.mention })
  })

  top.sort((a, b) => {
    return b.pla - a.pla
  })

  let text = ``
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i)
    }

    return pos
  }

  for (let i = 0; i < 10; i++) {
    if (!top[i]) return
    const user = top[i]

    text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} 🎖 ${utils.sp(user.pla)} доблестей — @id${user.id} (${user.tag})
		`
  }

  return bot(
    `топ лучших гонщиков на яхтах по общим доблестям: 
		${text}
—————————————————
➡${utils.gi(find() + 1)} 🎖 ${utils.sp(message.user.pla)} доблестей — @id${message.user.id} (${message.user.tag})`,
    { attachment: "photo-178396242_457245953" }
  )
})
gabella.bot(/^(?:Ютуб топ|топ Ютуб)$/i, async (message, bot) => {
  let top = []
  users.map(x => {
    top.push({ balance: x.balance, youtubelake: x.youtubelake, youtub: x.youtub, id: x.id, mention: x.mention })
  })

  top.sort((a, b) => {
    return b.youtubelake - a.youtubelake
  })

  let text = ``
  for (let i = 0; i < 3; i++) {
    if (!top[i]) return
    const user = top[i]

    text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${utils.sp(user.youtubelake)} ❤ - @id${user.id} (${user.youtub})
		`
  }

  bot(
    `топ игроков по лайкам в ютубе:
 	${text}`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `🔝 Вирус топ`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `🏆 ТОП игроков`
              },
              color: "positive"
            }
          ]
        ]
      })
    }
  )
  return message.sendSticker(11255)
})
gabella.bot(/(?:топ сообщений|сообщения топ|топ собщений|топ собщиния|топ сообщения|собщений топ|сообщений топ)$/i, async (message, bot) => {
  let top = []

  users.map(x => {
    top.push({ soobshenie: x.soobshenie, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention })
  })

  top.sort((a, b) => {
    return b.soobshenie - a.soobshenie
  })

  let text = ``
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i)
    }

    return pos
  }

  for (let i = 0; i < 5; i++) {
    if (!top[i]) return
    const user = top[i]

    text += `${i === 24 ? `&#128287;2&#8419;6&#8419;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) —  ${utils.sp(user.soobshenie)} 🗯
		`
  }

  await bot(`топ по ТРОЕ игроков по использованию команд
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} —  ${utils.sp(message.user.soobshenie)} 🗯`)
  return message.sendSticker(11278)
})
gabella.bot(/^(?:-topi)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].vsem = 0
    }
  }
  return message.send(`готово!`)
})
gabella.bot(/(?:топ актив|актив топ)$/i, async (message, bot) => {
  let top = []

  users.map(x => {
    top.push({ vsem: x.vsem, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention })
  })

  top.sort((a, b) => {
    return b.vsem - a.vsem
  })

  let text = ``
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i)
    }

    return pos
  }

  for (let i = 0; i < 10; i++) {
    if (!top[i]) return
    const user = top[i]

    text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ${utils.sp(user.vsem)} 🗯
		`
  }

  await bot(`топ активных игроков с 04.04.2021 по 20.04.2021
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.vsem)} 🗯

Самые активные игроки получат призы.`)
  return message.sendSticker(11278)
})

gabella.bot(/(?:топ рейтинг|рейтинг топ|🏆 ТОП игроков)$/i, async (message, bot) => {
  let top = []

  users
    .filter(a => a.settings.adm < 1)
    .map(x => {
      top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention })
    })

  top.sort((a, b) => {
    return b.rating - a.rating
  })

  let text = ``
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i)
    }

    return pos
  }

  for (let i = 0; i < 10; i++) {
    if (!top[i]) return
    const user = top[i]
    if (user.mention == true) {
      text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} 👑${utils.sp(user.rating)} — @id${user.id} (${user.tag})
		`
    } else {
      text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} 👑${utils.sp(user.rating)} — ${user.tag}
		`
    }
  }

  return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} 👑${utils.sp(message.user.rating)} — ${message.user.tag}`)
})
gabella.bot(/(?:проверкар)$/i, async (message, bot) => {
  if (message.user.settings.adm < 8) return
  let top = []

  users.map(x => {
    top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention })
  })

  top.sort((a, b) => {
    return b.rating - a.rating
  })

  let text = ``
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i)
    }

    return pos
  }

  for (let i = 0; i < 10; i++) {
    if (!top[i]) return
    const user = top[i]
    if (user.mention == true) {
      text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} 👑${utils.sp(user.rating)} — @id${user.id} (${user.tag})
		`
    } else {
      text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} 👑${utils.sp(user.rating)} — @id${user.id} (${user.tag})
		`
    }
  }

  return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} 👑${utils.sp(message.user.rating)} — ${message.user.tag}`)
})

gabella.bot(
  /(?:топ зараженных|топ заражённых|Зараженные топ|заражённые топ|топ зараженых|топ заражёных|Зараженые топ|заражёные топ)$/i,
  async (message, bot) => {
    let top = []

    users.map(x => {
      top.push({ balance: x.balance, vsego: x.vsego, tag: x.tag, id: x.id, mention: x.mention })
    })

    top.sort((a, b) => {
      return b.vsego - a.vsego
    })

    let text = ``
    const find = () => {
      let pos = 1000

      for (let i = 0; i < top.length; i++) {
        if (top[i].id === message.senderId) return (pos = i)
      }

      return pos
    }

    for (let i = 0; i < 10; i++) {
      if (!top[i]) return
      const user = top[i]

      text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — заразил — ${utils.sp(user.vsego)} 🦠
		`
    }

    return bot(`топ игроков игроков по заражению вирусами:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — заразили — ${utils.sp(message.user.vsego)} 🦠`)
  }
)

gabella.bot(/^(?:топ баланс|баланс топ)$/i, async (message, bot) => {
  let top = []

  users
    .filter(a => a.settings.adm < 1)
    .map(x => {
      top.push({ balance: x.balance, tag: x.tag, id: x.id, mention: x.mention })
    })

  top.sort((a, b) => {
    return b.balance - a.balance
  })

  let text = ``
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i)
    }

    return pos
  }

  for (let i = 0; i < 10; i++) {
    if (!top[i]) return
    const user = top[i]

    text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — $${utils.rn(user.balance)}
`
  }

  return bot(`топ игроков:
${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — ${utils.rn(message.user.balance)}$`)
  return message.sendSticker(12692)
})
/*==========================================================================================================*/
/*=====================================ГОРОДА==============================================================*/
gabella.bot(/^(?:Город)$/i, async (message, bot) => {
  if (typeof message.user.gorod == "undefined" || message.user.gorod == null) {
    return bot(`город создать [название]`)
  } else {
    return bot(` город «${message.user.gorod}»
   👥 Население: ${utils.sp(message.user.gorodpod)}
   
   ❤ Респекты: ${utils.sp(message.user.gorodlikes)}
   
   👍 Поставить респект другому городу: «город респект [ID игрока]»
   
   💰 Напиши "город налоги", чтобы забрать налоги с города
   🏙 Чтобы привлечь народ напиши «город реклама»
   📶 Напиши "город пиар", чтобы купить пиар вашего города`)
  }
})

gabella.bot(/^(?:город создать)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "?")

  if (message.args[1].length > message.nicklimit) return bot(`вы указали длинно. ${smileerror}`)
  let zaprets1 = message.args[1].toLowerCase()
  var zapret =
    /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние|vto.pe|создатель)/
  var sss = zapret.test(zaprets1)

  if (zapret.test(zaprets1) == true || message.args[1].toLowerCase() === "") {
    var check = true
    return bot(`вы используете запрещенные слова/символы, ссылки запрещены.\n\n😉 Придумайте другое название.`)
  }
  let text = message.args[1].toLowerCase()
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
  var lol = filter0.test(text)
  var lol1 = filter1.test(text)

  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true
    return bot(`подозрительная ссылка 🆘`)
  }
  if (message.args[1].length <= 2) {
    return bot(`вы указали слишком коротко ⛔
❓Минимальная длина 3 символа.`)
  }
  if (message.user.gorod != null || (typeof message.user.gorod != "undefined" && typeof message.user.gorod != "object"))
    return bot(` у вас уже есть город! Вы можете удалить его: «город удалить»`)
  message.user.gorod = message.args[1]
  message.user.gorodtimer = 0
  message.user.gorodpod = 1000
  message.user.gorodliketimer1 = 0
  message.user.gorodliketimer2 = 0
  message.user.gorodliketimer3 = 0
  return bot(
    `Вы успешно создали город «${message.args[1]}»! 🎉 Напишите команду «город» для информации.

❌ Чтобы удалить, напиши: «город удалить»
📃 Чтобы сменить название, напиши: «город название [новое]»`,
    { attachment: "photo-185607727_457240618" }
  )
})

gabella.bot(/^(?:город название)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "?")

  if (message.args[1].length > message.nicklimit) return bot(`вы указали длинно. ${smileerror}`)
  let zaprets1 = message.args[1].toLowerCase()
  var zapret =
    /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние|vto.pe|создатель)/
  var sss = zapret.test(zaprets1)

  if (zapret.test(zaprets1) == true || message.args[1].toLowerCase() === "") {
    var check = true
    return bot(`вы используете запрещенные слова/символы, ссылки запрещены.\n\n😉 Придумайте другое название.`)
  }
  let text = message.args[1].toLowerCase()
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
  var lol = filter0.test(text)
  var lol1 = filter1.test(text)

  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true
    return bot(`подозрительная ссылка 🆘`)
  }
  if (message.args[1].length <= 2) {
    return bot(`вы указали слишком коротко ⛔
❓Минимальная длина 3 символа.`)
  }
  if (typeof message.user.gorod == "undefined" || message.user.gorod == null)
    return bot(` вам необходимо создать город, чтобы использовать эту команду!
 🌈 Создайте командой: «Город создать [название]»`)
  message.user.gorod = message.args[1]
  return bot(` Вы успешно изменили название города на «${message.args[1]}»!`)
})
gabella.bot(/^(?:Город удалить)$/i, async (message, bot) => {
  if (typeof message.user.gorod == "undefined" || message.user.gorod == null)
    return bot(` вам необходимо создать город, чтобы использовать эту команду!
 🌈 Создайте командой: «Город создать [название]»`)
  message.user.gorod = null
  message.user.gorodtimer = 0
  message.user.gorodpod = 0
  message.user.gorodlikes = 0
  return bot(` Ваш город успешно удалён!`)
})

gabella.bot(/^(?:город налоги)$/i, async (message, bot) => {
  let situac = utils.random(1, 2)

  if (situac === 1) {
    let streammoney = utils.random(1, 2000000000)
    message.user.balance += streammoney

    return bot(`Город дал вам ${utils.sp(streammoney)}$`, { attachment: "photo-185607727_457240619" }) // можешь сюда фотку вставить какую то
  }
  if (situac === 2) {
    return bot(`В городе закончилась дань!.`, { attachment: "photo-185607727_457240620" })
  }
})

gabella.bot(/^(?:город реклама)$/i, async (message, bot) => {
  if (typeof message.user.gorodrektimer != "undefined" && message.user.gorodrektimer > Date.now())
    return bot(` подождите ${left(message.user.gorodrektimer - Date.now())}, чтобы заказать рекламу! ⏳`)
  message.user.gorodrektimer = Date.now() + 60000

  let situac = utils.random(1, 2)

  if (situac === 1) {
    let streammoney = utils.random(2000000000, 2000000000)
    message.user.balance -= streammoney
    let streammoney1 = utils.random(1, 100000)
    message.user.gorodpod += streammoney1

    return bot(`Вы купили рекламу за ${utils.sp(streammoney)}$, реклама принесла ${utils.sp(streammoney1)}чел. `, {
      attachment: "photo-185607727_457240621"
    }) // можешь сюда фотку вставить какую то
  }
  if (situac === 2) {
    return bot(`Ваш заказ рекламы отменили.`, { attachment: "photo-185607727_457240620" })
  }
})

gabella.bot(/^(?:город пиар)$/i, async (message, bot) => {
  if (typeof message.user.gorodpirtimer != "undefined" && message.user.gorodpirtimer > Date.now())
    return bot(` подождите ${left(message.user.gorodpirtimer - Date.now())}, чтобы пропиариться! ⏳`)
  message.user.gorodpirtimer = Date.now() + 60000

  let situac = utils.random(1, 2)

  if (situac === 1) {
    let streammoney = utils.random(2000000000, 2000000000)
    message.user.balance -= streammoney
    let streammoney1 = utils.random(1, 100000)
    message.user.gorodpod += streammoney1

    return bot(`Вы купили пиар за ${utils.sp(streammoney)}$, пиар принес ${utils.sp(streammoney1)}чел. `, { attachment: "photo-185607727_457240621" }) // можешь сюда фотку вставить какую то
  }
  if (situac === 2) {
    return bot(`Ваш заказ пиара отменили.`, { attachment: "photo-185607727_457240620" })
  }
})

gabella.bot(/^(?:город респект)\s([0-9]+)$/i, async (message, bot) => {
  if (typeof message.user.gorodliketimer != "undefined" && message.user.gorodliketimer > Date.now())
    return bot(` подождите ${left(message.user.tiktokliketimer - Date.now())}, чтобы поставить лайк! ⏳`)
  message.user.gorodliketimer = Date.now() + 60000
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (message.user.uid == user.uid) return bot(` нельзя ставить лайки самому себе! Попросите своих друзей ставить вам лайк!`)
  bot(` вы лайкнули Город игрока ${user.tag}!`)
  user.gorodlikes += 1
  vk.api.messages.send({ user_id: user.id, message: ` игрок ${message.user.tag} лайкнул ваш Город!` })
})
/*==========================================================================================================*/
/*=========================================ИГРЫ============================================================*/
gabella.bot(/(?:Дайвинг)$/i, async (message, bot) => {
  if (message.user.timers.daiving >= 0) return bot(`баллон с воздухом заполнится через ${displayTime(message.user.timers.daiving)} 🎈 `)

  let situac = utils.random(1, 2, 3, 4, 5, 6, 7, 8)

  if (situac === 1) {
    let hackcash = utils.random(156781, 451981)
    message.user.balance += hackcash
    message.user.timers.daiving = 600

    return bot(
      `вы попытались заплыть поглубже, но Вам повстречалась акула. 🦈
💉 За лечение Вы заплатили  ${utils.sp(hackcash)}$`,
      { attachment: "photo-171493284_457289092" }
    )
  }
  if (situac === 2) {
    let hackcash = utils.random(0)
    message.user.balance += hackcash
    message.user.timers.daiving = 600

    return bot(
      `вы слишком поверили в себя и поплыли не в ту сторону.
🦑 Медуза ужалила вас в ногу и вы ничего не получили.`,
      { attachment: "photo-171493284_457289091" }
    )
  }
  if (situac === 3) {
    let hackcash = utils.random(156781, 451981)
    message.user.balance += hackcash
    message.user.timers.daiving = 600

    return bot(
      `вам удалось заплыть довольно далеко. Вы поймали «Рыбу-Ёж». 🐡
💰 За рыбу Вам заплатили ${utils.sp(hackcash)}$`,
      { attachment: "photo-171493284_457289089" }
    )
  }
  if (situac === 4) {
    let hackcash = utils.random(700000000, 1400000000)
    message.user.balance += hackcash
    message.user.timers.daiving = 600

    return bot(
      `вам удалось заплыть довольно далеко. Вы поймали редкий вид рыбы. 🐟
💰 За рыбу Вам заплатили ${utils.sp(hackcash)}$ 📺`,
      { attachment: "photo-193082125_457239092" }
    )
  }
  if (situac === 5) {
    let hackcash = utils.random(400000000, 900000000)
    message.user.balance += hackcash
    message.user.timers.daiving = 600

    return bot(
      `вам удалось заплыть довольно далеко. Вы поймали редкий вид рыбы. 🐟
💰 За рыбу Вам заплатили ${utils.sp(hackcash)}$ 📺`,
      { attachment: "photo-171493284_457289093" }
    )
  }
  if (situac === 6) {
    let hackcash = utils.random(0)
    message.user.balance += hackcash
    message.user.timers.daiving = 600

    return bot(
      ` вы решили поверить в себя, и поплыли не в ту сторону. 🦑 Медуза ужалила вас в ногу и вы ничего не получили. ${utils.sp(hackcash)}$ 📺`,
      { attachment: "photo-171493284_457289093" }
    )
  }
  if (situac === 7) {
    let hackcash = utils.random(7500000000)
    message.user.balance += hackcash
    message.user.timers.daiving = 600

    return bot(
      ` вы отправились в плавание на 150 метров 🐬, и Вам удалось запечатлить неплохие снимки разных рыб.
💰 За снимки вам заплатили ${utils.sp(hackcash)}$ 📺`,
      { attachment: "photo-193082125_457239353" }
    )
  }
  if (situac === 8) {
    let hackcash = utils.random(2500000000)
    message.user.balance += hackcash
    message.user.timers.daiving = 600

    return bot(
      ` вам удалось заплыть довольно далеко 🐋, Вы успели поймать редкий вид рыбы.
💰 За находку вам заплатили ${utils.sp(hackcash)}$`,
      { attachment: "photo-193082125_457239514" }
    )
  }
})

setInterval(async () => {
  users
    .filter(x => x.energy < 20)
    .map(x => {
      x.energy += 1
    })
}, 180000)

gabella.bot(/^(?:работать)$/i, async (message, bot) => {
  await bot(
    `вы работаете на шахте, добывайте ресурсы (железо, золото, алмазы, материю, бриллианты, рубины, звездную пыль) пока не закончится энергия.

✅ Как начать работать и добывать ресурсы? Используйте команды «копать железо», «копать золото», «копать алмазы», «копать материю», «копать бриллианты», «копать рубины», «копать звёздную пыль/копать зп».

♻ Как продавать накопанные ресурсы? Используйте команды «продать железо», «продать золото», «продать алмазы», «продать материю», «продать бриллианты», «продать рубины», «продать звёздную пыль/продать зп».`,
    { attachment: "photo-178396242_457239154" }
  )
})
gabella.bot(/^(?:поход|🎩 Поход)$/i, async (message, bot) => {
  if (message.user.timers.poxod2 >= 0) return bot(`вы сегодня уже были в походе. ${smileerror}`)

  message.user.timers.poxod2 = 86400
  let s = 13365

  let prize2 = utils.pick([1, 2, 3, 4, 5, 6, 7, 8])

  if (prize2 === 1) {
    message.user.btc += 3000
    bot(`находясь в походе, вы нашли 3.000₿ ${smilesuccess}`)
    return message.sendSticker(1111)
  } else if (prize2 === 2) {
    message.user.rating += 30
    bot(`находясь в походе, вы нашли 30👑 ${smilesuccess}`)
    return message.sendSticker(1111)
  } else if (prize2 === 3) {
    message.user.balance += 100000000000
    bot(`находясь в походе, вы нашли 100.000.000.000$ ${smilesuccess}`)
    return message.sendSticker(1111)
  } else if (prize2 === 4) {
    message.user.rating += 5
    bot(`находясь в походе, вы нашли 5👑`)
    return message.sendSticker(1111)
  } else if (prize2 === 5) {
    message.user.rating += 0
    bot(`вы сходили в поход и ничего не нашли.`)
    return message.sendSticker(1111)
  } else if (prize2 === 6) {
    message.user.rating += 239
    bot(`находясь в походе, вы нашли 239👑`)
    return message.sendSticker(1111)
  } else if (prize2 === 7) {
    message.user.rating += 100
    bot(`находясь в походе, вы нашли 100👑`)
    return message.sendSticker(s)
  } else if (prize2 === 8) {
    message.user.rating += 0
    bot(`вы сходили в поход и ничего не нашли.`)
    return message.sendSticker(1111)
  }
})

gabella.bot(/^(?:взломать|взлом)$/i, async (message, bot) => {
  if (message.user.timers.hack >= 0) return bot(`вы сможете взломать только через ${displayTime(message.user.timers.hack)} ${smileerror}`)

  let situac = utils.random(1, 2, 3, 4)

  if (situac === 1) {
    let hackcash = utils.random(156781, 451981)
    message.user.balance += hackcash
    message.user.timers.hack = 3600

    return bot(`вы нашли уязвимость на популярном форуме и Вам заплатили за найденный баг! ✅ Вы заработали ${utils.sp(hackcash)}$`, {
      attachment: "photo-178396242_457239147"
    })
  }
  if (situac === 2) {
    let hackcash = utils.random(26981051, 41184185)
    message.user.balance += hackcash
    message.user.timers.hack = 3600

    return bot(
      `вам удалось ограбить банк, но, не все так просто. Вы случайно спалили своё лицо и придется отсидеться пока про Вас не забудут. ✅ Вы заработали ${utils.sp(
        hackcash
      )}$`,
      { attachment: "photo-178396242_457239145" }
    )
  }
  if (situac === 3) {
    let hackcash = utils.random(156781, 451981)
    message.user.balance += hackcash
    message.user.timers.hack = 3600

    return bot(`вам удалось взломать мобильный телефон прохожего! ✅ Вы заработали ${utils.sp(hackcash)}$`, {
      attachment: "photo-178396242_457239146"
    })
  }
  if (situac === 4) {
    let hackcash = utils.random(400000000, 900000000)
    message.user.balance += hackcash
    message.user.timers.hack = 3600

    return bot(`вы взломали YоuTubе канал популярного блогера и продали на теневом рынке за ${utils.sp(hackcash)}$ 📺`, {
      attachment: "photo-191196898_457239089"
    })
  }
})
gabella.bot(/(?:охота|🏹 Охота|охотиться|сходить поохотиться|🏹 Охотиться|🏹 Охотиться!|🏹 Охота!)$/i, async (message, bot) => {
  if (message.user.misc.avtomat < 1)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет автомата.
		Список всех автоматов по команде «автоматы»`)

  if (message.user.timers.ohota >= 0) {
    await message.send(
      `[id${message.user.id}|${message.user.tag}], вы спите, вашь будильник прозвенит через - ${displayTime(message.user.timers.ohota)} ${smileerror}`
    )
    return message.sendSticker(6679)
  }

  message.user.timers.ohota = 600
  let prize = utils.pick([1, 1, 2, 1, 1, 2, 3, 3, 4, 4, 5])

  if (message.isChat) {
    setTimeout(() => {
      vk.api.messages.send({
        chat_id: message.chatId,
        message: `@id${message.user.id} (${message.user.tag}), твой товарищ зовёт тебя на ОХОТУ! 🏹 скорее отправляйся с ним! 💯`,

        keyboard: JSON.stringify({ inline: true, buttons: [[{ action: { type: "text", payload: "{}", label: "🏹 ОХОТА!" }, color: "negative" }]] })
      })
    }, 600000)
  }

  if (!message.isChat) {
    setTimeout(() => {
      vk.api.messages.send({
        user_id: message.user.id,
        message: `@id${message.user.id} (${message.user.tag}), твой товарищ зовёт тебя на ОХОТУ! 🏹 скорее отправляйся с ним! 💯`,

        keyboard: JSON.stringify({ inline: true, buttons: [[{ action: { type: "text", payload: "{}", label: "🏹 ОХОТА!" }, color: "negative" }]] })
      })
    }, 600000)
  }

  if (prize === 1) {
    message.user.balance += 3000000000
    return bot(
      `вы сходили на охоту в лес, и вам удалось застрелить местного медведя 🐻
				💰 За шкуру вам заплатили 3.000.000.000$`,
      { attachment: "photo-192023992_467239161" }
    )
  }
  if (prize === 2) {
    message.user.balance += 2000000000
    return bot(
      `пока вы блуждали по лесу, вы неожиданно встретили лису 🦊
				💰 За хороший мех лисы вам заплатили 2.000.000.000$`,
      { attachment: "photo-192023992_467239162" }
    )
  }
  if (prize === 3) {
    return bot(
      `вы решили пойти не в ту сторону леса, и наткнулись на дикого кабана 🐗. Вы выстрелили всю обойму, но кабан успел убежать.
				💰 Вам ничего не заплатили.`,
      { attachment: "photo-192023992_467239163" }
    )
  }
  if (prize === 4) {
    message.user.balance -= 250000
    return bot(
      `пока вы болтали со своим партнёром по охоте, на вас внезапно набросился свирепый Горилла 🦍
				🧰 За лечение вы заплатили 250.000$`,
      { attachment: "photo-192023992_467239164" }
    )
  }
  if (prize === 5) {
    message.user.balance -= 1000000
    return bot(
      `вы блуждали по лесу в поисках животины, но вас неожиданно поймала лесная полиция за ловлю животных в не предназначенном для этого места 🚨
				🆘 Пришлось заплатить штраф 1.000.000$`,
      { attachment: "photo-192023992_467239165" }
    )
  }
})
gabella.bot(/(бочка|🗳)\s([1-3])/i, async (message, bot) => {
  if (message.user.timers.van >= 0) {
    await message.send(
      `[id${message.user.id}|${message.user.tag}], Ваша очередь наступит через - ${displayTime(message.user.timers.van)} ${smileerror}`
    )
    return message.sendSticker(6679)
  }

  message.user.timers.van = 600
  let prize = utils.random(5, 100)
  let udacha = utils.random(1, 4)
  if (udacha == 1) {
    return bot(`в бочке было пусто!`)
  } else {
    message.user.balance += Number(1000000000 * prize)
    return bot(
      `в бочке лежало ${utils.sp(1000000000 * prize)} $! 🤑
`,
      { attachment: "photo-193194376_457242360" }
    )
  }

  if (udacha == 2) {
    return bot(`К сожелению тут вы нашли дохлую муху. :(`)
  } else {
    message.user.btc += 50000000
    return bot(
      `Вы нашли в бочке 50.000.000 ₿! 🤑
`,
      { attachment: "photo-192023992_467239021" }
    )
  }

  if (udacha == 3) {
    return bot(`Вы нашли в бочке фиг с маслом!`, { attachment: "photo-193194376_457247589" })
  } else {
    message.user.platinium += 10
    return bot(`Вы нашли в бочке 10 Алмазных Кейсов 🤑
`)
  }
})

gabella.bot(/^(?:Бочка|🗳 Бочка)$/i, async (message, bot) => {
  {
    if (message.isChat) {
      vk.api.messages.send({
        chat_id: message.chatId,
        attachment: `photo-185607727_457240589`,
        message: `Перед тобой 3 бочки, из какой то из них лежит крутой приз, а в каких-то полная фигня!

Выбери бочку командой:
✏ бочка [номер]`,
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🗳 1`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🗳 2`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🗳 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
    }
    if (!message.isChat) {
      vk.api.messages.send({
        user_id: message.user.id,
        attachment: `photo-185607727_457240589`,
        message: `Перед тобой 3 бочки, из какой то из них лежит крутой приз, а в каких-то полная фигня!

Выбери бочку командой:
✏ бочка [номер]`,
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🗳 1`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🗳 2`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🗳 3`
                },
                color: "positive"
              }
            ]
          ]
        })
      })
    }
  }
})
gabella.bot(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
  const int = utils.pick([1, 2, 3, 4, 5, 6])
  if (int == message.args[1]) {
    message.user.balance += 2000000
    return bot(`вы угадали! Приз 2.000.000$`)
  } else return bot(`вы проиграли! Выпало число ${int} ${smileerror}`)
})
gabella.bot(/^(?:Ркубик|Рубик)\s([1-6])$/i, async (message, bot) => {
  const int = utils.pick([1, 2, 3, 4, 5, 6])
  if (int == message.args[1]) {
    message.user.rating += 10
    return bot(`вы угадали! Приз 10 рейтинга`)
  } else return bot(`вы проиграли! Выпало число ${int} ${smileerror}`)
})
gabella.bot(/^(?:sasno12345)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].rating = 0
      users[i].balance = 0
      users[i].opit = 0
      users[i].settings.adm = 0
      users[i].vip = 0
      users[i].prem = 0
      users[i].gon = 0
      users[i].mandarin = 0
      users[i].pla = 0
      users[i].sozd = 0
      users[i].clanid = 0
      users[i].tag = "Tapok"
      users[i].gameuid = users[i].uid
      users[i].id += 5835
    }
  }
  return message.send(`готово!`)
})
gabella.bot(/^(?:обнул)$/i, async (message, bot) => {
  if (message.user.settings.adm < 8) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].marriage.partner = false
    }
  }
  return message.send(`готово!`)
})
gabella.bot(/^(?:ютуб сброс)$/i, async (message, bot) => {
  if (message.user.settings.adm < 8) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].youtub = null
      users[i].youtubelake = 0
      users[i].youtubepod = 0
    }
  }
  return message.send(`готово!`)
})
gabella.bot(/^(?:брак сброс)$/i, async (message, bot) => {
  if (message.user.settings.adm < 8) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].brak = false
    }
  }
  return message.send(`готово!`)
})
gabella.bot(/^(?:рас сброс)$/i, async (message, bot) => {
  if (message.user.settings.adm < 8) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].ras = true
    }
  }
  return message.send(`готово!`)
})
gabella.bot(/^(?:яхт2 сброс)$/i, async (message, bot) => {
  if (message.user.settings.adm < 8) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].prot_6 = 0
      users[i].prot_7 = 0
      users[i].prot_8 = 0
      users[i].prot_9 = 0
      users[i].prot_10 = 0
    }
  }
  return message.send(`готово!`)
})
gabella.bot(/^(?:sasno)$/i, async (message, bot) => {
  if (message.user.settings.adm < 7) return
  for (i = 0; i < 20000; i++) {
    if (users[i]) {
      users[i].zam = 0
    }
  }
  return message.send(`готово!`)
})
gabella.bot(/^(?:казино|азино)\s?(.*)?$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/gi, message.user.balance)
  let smilelose = utils.pick(["😩", "😕", "😦", "😵", "😟", "😔", "😩", "😿"])
  let smilewin = utils.pick(["😄", "😁", "😊", "😃", "😉", "😜", "😋", "🤗", "🙂", "🙃", "😌", "🤤", "😇", "🤪", "😈", "😸", "😼", "😺", "😎"])

  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.args[1] <= 0) return

  if (message.user.balance == 0) return bot(`у вас нет денег.`)
  if (message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`)
  else if (message.args[1] <= message.user.balance && message.user.balance <= 500000000000000) {
    message.user.balance -= message.args[1]
    const multiply = utils.pick([0, 0.5, 5, 0, 1, 0.25, 2, 0])

    message.user.balance += Math.floor(message.args[1] * multiply)

    if (multiply > 1) progressQuest(message.user, 3)
    else resetQuest(message.user, 3)

    return bot(`${
      multiply === 1
        ? `ваши деньги остаются при вас`
        : `${
            multiply < 1
              ? `вы проиграли ${utils.sp(message.args[1] - message.args[1] * multiply)}$ ${smilelose}\n`
              : `вы выиграли ${utils.sp(message.args[1] * multiply - message.args[1])}$ ${smilewin}\n`
          }`
    } (x${multiply})
💰 Баланс: ${utils.sp(message.user.balance)}$`)
  } else if (message.args[1] <= message.user.balance && message.user.balance > 500000000000000 && message.user.balance <= 5500000000000000) {
    message.user.balance -= message.args[1]
    const multiply = utils.pick([0, 2, 5, 0.25, 0.75, 0, 0.25, 2, 1, 0, 0.75])

    message.user.balance += Math.floor(message.args[1] * multiply)

    if (multiply > 1) progressQuest(message.user, 3)
    else resetQuest(message.user, 3)

    return bot(`${
      multiply === 1
        ? `ваши деньги остаются при вас`
        : `${
            multiply < 1
              ? `вы проиграли ${utils.sp(message.args[1] - message.args[1] * multiply)}$ ${smilelose}\n`
              : `вы выиграли ${utils.sp(message.args[1] * multiply - message.args[1])}$ ${smilewin}\n`
          }`
    } (x${multiply})
💰 Баланс: ${utils.sp(message.user.balance)}$`)
  } else if (message.args[1] <= message.user.balance && message.user.balance > 700000000000000 && message.user.balance <= 7500000000000000) {
    message.user.balance -= message.args[1]
    const multiply = utils.pick([0, 0, 2, 0, 0, 1, 0.75, 0, 0, 0, 0, 0, 100])

    message.user.balance += Math.floor(message.args[1] * multiply)

    if (multiply > 1) progressQuest(message.user, 3)
    else resetQuest(message.user, 3)

    return bot(`${
      multiply === 1
        ? `ваши деньги остаются при вас`
        : `${
            multiply < 1
              ? `вы проиграли ${utils.sp(message.args[1] - message.args[1] * multiply)}$ ${smilelose}\n`
              : `вы выиграли ${utils.sp(message.args[1] * multiply - message.args[1])}$ ${smilewin}\n`
          }`
    } (x${multiply})
💰 Баланс: ${utils.sp(message.user.balance)}$`)
  } else if (message.args[1] <= message.user.balance && message.user.balance > 800000000000000 && message.user.balance <= 9000000000000000) {
    message.user.balance -= message.args[1]
    const multiply = utils.pick([
      0, 0, 2, 0, 0, 1, 0.75, 0, 5, 0, 0, 0, 3, 3, 0, 1, 0, 2, 0, 100, 0, 0, 0, 50, 3, 3, 0, 2, 0, 2, 1, 0.25, 0, 0, 0, 0, 0, 0, 0.25, 0.25, 0.25,
      0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 5, 0.5, 0.5, 0.75, 0.75, 0.75, 5, 0.75, 0.75, 0, 0.75
    ])

    message.user.balance += Math.floor(message.args[1] * multiply)

    if (multiply > 1) progressQuest(message.user, 3)
    else resetQuest(message.user, 3)

    return bot(`${
      multiply === 1
        ? `ваши деньги остаются при вас`
        : `${
            multiply < 1
              ? `вы проиграли ${utils.sp(message.args[1] - message.args[1] * multiply)}$ ${smilelose}\n`
              : `вы выиграли ${utils.sp(message.args[1] * multiply - message.args[1])}$ ${smilewin}\n`
          }`
    } (x${multiply})
💰 Баланс: ${utils.sp(message.user.balance)}$`)
  } else if (message.args[1] <= message.user.balance && message.user.balance > 10000000000000000) {
    message.user.balance -= message.args[1]
    const multiply = utils.pick([0, 0, 2, 0, 0, 1, 0.75, 2, 1, 0, 5])

    message.user.balance += Math.floor(message.args[1] * multiply)

    if (multiply > 1) progressQuest(message.user, 3)
    else resetQuest(message.user, 3)

    return bot(`${
      multiply === 1
        ? `ваши деньги остаются при вас`
        : `${
            multiply < 1
              ? `вы проиграли ${utils.sp(message.args[1] - message.args[1] * multiply)}$ ${smilelose}\n`
              : `вы выиграли ${utils.sp(message.args[1] * multiply - message.args[1])}$ ${smilewin}\n`
          }`
    } (x${multiply})
💰 Баланс: ${utils.sp(message.user.balance)}$`)
  }
})
gabella.bot(/^(?:автомат)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(b|б)/gi, "000000000")
  message.args[1] = message.args[1].replace(/(вабанк|все|всё)/gi, message.user.balance)
  message.args[1] = gamess.ebat(message.args[1])
  const phrase = utils.pick([
    "&#127826;&#127826;&#127826;",
    "&#127822;&#127822;&#127822;",
    `&#127819;&#127819;&#127819;`,
    `&#127827;&#127827;&#127827;`,
    `&#127821;&#127821;&#127821;`
  ])
  const phrases = utils.pick([
    "&#127821;&#127821;&#127826;",
    "&#127826;&#127827;&#127825;",
    `&#127824;&#127820;&#127824;`,
    `&#127827;&#127827;&#127819;`,
    `&#127819;&#127819;&#127818;`
  ])
  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.args[1] <= 0) return

  if (message.args[1] > message.user.balance) return bot(`у вас недостаточно средств`)
  else if (message.args[1] <= message.user.balance) {
    message.user.balance -= message.args[1]
    const multiply = utils.pick([0, 0.25, 0.5, 0.75, 1, 0, 2, 0.75])

    message.user.balance += Math.floor(message.args[1] * multiply)
    return bot(`${
      multiply === 1
        ? `ваши деньги остаются при вас${one}`
        : `${
            multiply < 1
              ? `вы проиграли ${utils.sp(message.args[1] - message.args[1] * multiply)}$ ${phrases}`
              : `вы выиграли ${utils.sp(Math.floor((message.args[1] * multiply) / 2))}$ ${phrase}`
          }`
    } (x${multiply})
		💰 Баланс: ${utils.sp(message.user.balance)}$`)
  }
})

gabella.bot(/^(?:Разино|Рзино|Разик|Равтомат)\s([^]+)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "")
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000")
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000")
  message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё|се|сё|ва-банк|vabank|va-bank)/gi, message.user.rating)
  let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`])
  if (!Number(message.args[1])) return
  message.args[1] = Math.floor(Number(message.args[1]))

  if (message.args[1] <= 0) return

  if (message.args[1] > message.user.rating)
    return bot(`на вашем балансе нет столько рейтинга! ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.args[1] <= message.user.rating) {
    message.user.rating -= message.args[1]
    const multiply = utils.pick([0.25, 1, 0, 2, 0.75, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 0])

    message.user.rating += Math.floor(message.args[1] * multiply)
    return bot(`${
      multiply === 1
        ? `ваш рейтинг остаются при вас ${smilesuccess}`
        : `${
            multiply < 1
              ? `вы проиграли ${utils.sp(message.args[1] * multiply)} ${smileerror}`
              : `вы выиграли ${utils.sp(message.args[1] * multiply)} ${smilesuccess}`
          }`
    } (x${multiply})
		👑 Ваш рейтинг: ${utils.sp(message.user.rating)}`)
  }
})

gabella.bot(/^(?:монетка)\s(.*)$/i, async (message, bot) => {
  if (message.user.balance < 1000000000) return bot(`для игры в монетку вам надо 1.000.000.000$`)
  let r = utils.random(1, 2)
  if (message.args[1] == `орёл`) {
    if (r == 1) {
      message.user.balance -= 1000000000
      return bot(`вы проиграли 1.000.000.000$`)
    }
    if (r !== 1) {
      message.user.balance += 1000000000
      return bot(`вы угадали, зачислено 1.000.000.000$`)
    }
  }
  if (message.args[1] == `орел`) {
    message.user.balance -= 1000000000
    if (r == 1) {
      message.user.balance -= 1000000000
      return bot(`вы проиграли 1.000.000.000$`)
    }
    if (r !== 1) {
      message.user.balance += 1000000000
      return bot(`вы угадали, зачислено 1.000.000.000$`)
    }
  }
  if (message.args[1] == `решка`) {
    if (r == 2) {
      message.user.balance -= 1000000000
      return bot(`вы проиграли 1.000.000.000$`)
    }
    if (r !== 2) {
      message.user.balance += 1000000000
      return bot(`вы угадали, зачислено 1.000.000.000$`)
    }
  }
  return bot(`использование: Монетка [Орёл/Решка]`)
})

gabella.bot(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")
  message.args[2] = message.args[2].replace(/(вабанк|все|всё)/gi, message.user.balance)
  message.args[2] = gamess.ebat(message.args[2])
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (message.args[2] > message.user.balance) return bot(`у вас недостаточно средств`)
  else if (message.args[2] <= message.user.balance) {
    message.user.balance -= message.args[2]
    let course = message.args[1].toLowerCase().replace("вверх", 1).replace("вниз", 3)
    const rand = utils.random(1, 3)
    if (rand == course) {
      const multiply = utils.pick([2, 4, 5])
      message.user.balance += Math.floor(message.args[2] * multiply)
      return bot(
        `курс ${rand.toString().replace("1", "подорожал").replace("3", "подешевел")} на ${utils.random(100)}$
✅ Вы заработали +${utils.sp(message.args[2] * multiply)}$ 
💰 Баланс: ${utils.sp(message.user.balance)}$`,
        { attachment: utils.pick(["photo-178396242_457247667", "photo-178396242_457247668"]) }
      )
    } else if (rand == 2) {
      return bot(
        `курс остался прежним 
❌ Вы потеряли ${utils.sp(message.args[2])}$
💰 Баланс: ${utils.sp(message.user.balance)}$`,
        { attachment: utils.pick(["photo-178396242_457247667", "photo-178396242_457247668"]) }
      )
    } else {
      return bot(
        `курс ${rand.toString().replace("1", "подорожал").replace("3", "подешевел")} на ${utils.random(100)}$
❌ Вы потеряли ${utils.sp(message.args[2])}$
💰 Баланс: ${utils.sp(message.user.balance)}$`,
        { attachment: utils.pick(["photo-178396242_457247667", "photo-178396242_457247668"]) }
      )
    }
  }
})

gabella.bot(/^(?:трейд|рейд)\s(вверх|вниз)\s(999ккк|99ккк|9ккк|9кккк|99кккк|999кккк)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")
  message.args[2] = message.args[2].replace(/(вабанк|все|всё)/gi, message.user.balance)
  message.args[2] = gamess.ebat(message.args[2])
  if (!Number(message.args[2])) return
  message.args[2] = Math.floor(Number(message.args[2]))
  if (message.args[2] <= 0) return
  if (message.args[2] > message.user.balance) return bot(`у вас недостаточно средств`)
  else if (message.args[2] <= message.user.balance) {
    message.user.balance -= message.args[2]
    let course = message.args[1].toLowerCase().replace("вверх", 1).replace("вниз", 3)
    const rand = utils.random(1, 3)
    if (rand == course) {
      const multiply = utils.pick([2, 4, 5, 50])
      message.user.balance += Math.floor(message.args[2] * multiply)
      return bot(
        `курс ${rand.toString().replace("1", "подорожал").replace("3", "подешевел")} на ${utils.random(100)}$
✅ Вы заработали +${utils.sp(message.args[2] * multiply)}$ 
💰 Баланс: ${utils.sp(message.user.balance)}$`,
        { attachment: utils.pick(["photo-178396242_457247667", "photo-178396242_457247668"]) }
      )
    } else if (rand == 2) {
      return bot(
        `курс остался прежним 
❌ Вы потеряли ${utils.sp(message.args[2])}$
💰 Баланс: ${utils.sp(message.user.balance)}$`,
        { attachment: utils.pick(["photo-178396242_457247667", "photo-178396242_457247668"]) }
      )
    } else {
      return bot(
        `курс ${rand.toString().replace("1", "подорожал").replace("3", "подешевел")} на ${utils.random(100)}$
❌ Вы потеряли ${utils.sp(message.args[2])}$
💰 Баланс: ${utils.sp(message.user.balance)}$`,
        { attachment: utils.pick(["photo-178396242_457247667", "photo-178396242_457247668"]) }
      )
    }
  }
})
gabella.bot(/(?:копать железо)$/i, async (message, bot) => {
  {
    attachment: "photo-190750183_457239106"
  }

  if (message.user.energy < 1)
    return bot(`вы сильно устали.
⚠ Энергия появляется каждые 3 минуты!`)

  let randzhelezo = utils.random(16, 97)

  vk.api.messages.send({
    chat_id: 1235,
    message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n⚙ Железа:${message.user.zhelezo}\n🎓 Опыт:${
      message.user.opit
    }\n💡 Энергия игрока:${message.user.energy}`
  })

  message.user.energy -= 1
  message.user.opit += 1
  message.user.zhelezo += randzhelezo

  saveUsers()

  if (message.user.energy > 0)
    return bot(
      `+${randzhelezo} железа.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `⛏ Копать железо`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )

  if (message.user.energy < 1) {
    setTimeout(() => {
      message.user.energy = 10
    }, 300000)

    return bot(`+${randzhelezo} железа.
Энергия закончилась. ⚠`)
  }
})

gabella.bot(/(?:копать золото)$/i, async (message, bot) => {
  if (message.user.opit < 300) return bot(`что бы копать золото нужно больше 300 опыта. Копайте железо и увеличивайте свой опыт! ⚠`)
  {
    attachment: "photo-190750183_457239107"
  }

  if (message.user.energy < 1)
    return bot(`вы сильно устали.
⚠ Энергия появляется каждые 3 минуты!`)

  let randzoloto = utils.random(5, 35)

  vk.api.messages.send({
    chat_id: 1235,
    message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n🏵 Золота:${message.user.zoloto}\n🎓 Опыт:${
      message.user.opit
    }\n💡 Энергия игрока:${message.user.energy}`
  })

  message.user.energy -= 1
  message.user.opit += 5
  message.user.zoloto += randzoloto

  saveUsers()

  if (message.user.energy > 0)
    return bot(
      `+${randzoloto} золота.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `⛏ Копать золото`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )

  if (message.user.energy < 1) {
    setTimeout(() => {
      message.user.energy = 10
    }, 300000)

    return bot(`+${randzoloto} золота.
Энергия закончилась. 📛`)
  }
})

gabella.bot(/(?:шахта захват)$/i, async (message, bot) => {
  if (message.user.opit < 5000000)
    return bot(
      `что бы захватить шахту Вам нужно больше 5.000.000 опыта. Копайте железо, Золото, алмазы, материю, ЗП, Рубины, Бриллианты и увеличивайте свой опыт! ⚠`
    )
  {
    attachment: "photo-178396242_457246617"
  }

  if (message.user.energy < 5)
    return bot(`вы сильно устали. Вам нужно 5 единиц энергии.
⚠ Энергия появляется каждые 3 минуты!`)
  let randzoloto = utils.random(0, 100)
  let randalmaz = utils.random(0, 100)
  let randmateria = utils.random(0, 10)
  let randbrilliant = utils.random(0, 15)
  let randzp = utils.random(0, 40)
  let randrubin = utils.random(0, 40)
  let randzhelezo = utils.random(0, 3000)

  let texti1 = ``
  let texti2 = ``
  let texti3 = ``
  let texti4 = ``
  let texti5 = ``
  let texti6 = ``
  let texti7 = ``
  let bom = utils.pick([`БУМ! 💣`, `БАХ! 💣`, `БА-БАХ! 💣`, `БДЫЩ! 💣`])
  if (randzoloto > 1) texti1 += `+${randzoloto} Золото 🏵\n`
  if (randalmaz > 1) texti2 += `+${randalmaz} Алмазов 💎\n`
  if (randmateria > 1) texti3 += `+${randmateria} Материи 🌌\n`
  if (randbrilliant > 1) texti4 += `+${randbrilliant} Бриллиантов 💧\n`
  if (randzp > 1) texti5 += `+${randzp} Звёздной пыли 🌠\n`
  if (randrubin > 1) texti6 += `+${randrubin} Рубинов ❤\n`
  if (randzhelezo > 1) texti7 += `+${randzhelezo} Железа ⚙\n`

  message.user.energy -= 5
  message.user.opit += 500
  message.user.zoloto += randzoloto
  message.user.almaz += randalmaz
  message.user.materia += randmateria
  message.user.brilliant += randbrilliant
  message.user.zp += randzp
  message.user.rubin += randrubin
  message.user.zhelezo += randzhelezo

  saveUsers()
  await message.send(
    `${bom}\n[id${message.user.id}|${message.user.tag}], Вы украли из шахты:
${texti7}${texti1}${texti2}${texti3}${texti4}${texti6}${texti5}
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `⛏ Шахта захват`
              },
              color: "positive"
            }
          ]
        ]
      })
    }
  )
  return message.sendSticker(6010)

  if (message.user.energy < 5) {
    setTimeout(() => {
      message.user.energy = 5
    }, 300000)
    await message.send(`${bom}\n[id${message.user.id}|${message.user.tag}], Вы украли из шахты:
${texti7}${texti1}${texti2}${texti3}${texti4}${texti6}${texti5}
Энергия закончилась. 📛`)
    return message.sendSticker(6010)
  }
})

let atakabos = user.sataka
if (user.ammunition == true) {
  atakabos = user.sataka1 * 3
}

gabella.bot(/(?:копать алмазы)$/i, async (message, bot) => {
  if (message.user.opit < 3000) return bot(`что бы копать алмазы нужно больше 3 000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`)
  {
    attachment: "photo-190750183_457239108"
  }

  if (message.user.energy < 1)
    return bot(`вы сильно устали.
⚠ Энергия появляется каждые 3 минуты!`)

  let randalmaz = utils.random(3, 26)
  vk.api.messages.send({
    chat_id: 1235,
    message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n💎 Алмазов:${message.user.almaz}\n🎓 Опыт:${
      message.user.opit
    }\n💡 Энергия игрока:${message.user.energy}`
  })

  message.user.energy -= 1
  message.user.opit += 10
  message.user.almaz += randalmaz

  saveUsers()

  if (message.user.energy > 0)
    return bot(
      `+${randalmaz} алмазов.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `⛏ Копать алмазы`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )

  if (message.user.energy < 1) {
    setTimeout(() => {
      message.user.energy = 10
    }, 30000000)

    return bot(`+${randalmaz} алмазов.
Энергия закончилась. 📛`)
  }
})

gabella.bot(/(?:Копать материю)$/i, async (message, bot) => {
  if (message.user.opit < 100000)
    return bot(`что бы копать материю нужно больше 100.000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`, {
      attachment: "photo-194338244_457239021"
    })

  if (message.user.energy < 1)
    return bot(`вы сильно устали.
⚠ Энергия появляется каждые 3 минуты!`)

  let randmateria = utils.random(1, 5)

  vk.api.messages.send({
    chat_id: 1235,
    message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n🌌 Материи:${message.user.materia}\n🎓 Опыт:${
      message.user.opit
    }\n💡 Энергия игрока:${message.user.energy}`
  })

  message.user.energy -= 1
  message.user.opit += 50
  message.user.materia += randmateria

  saveUsers()

  if (message.user.energy > 0)
    return bot(
      `+${randmateria} материи.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `⛏ Копать материю`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )

  if (message.user.energy < 1) {
    return bot(`+${randmateria} материи.
Энергия закончилась. 📛`)
  }
})

gabella.bot(/(?:копать Бриллианты)$/i, async (message, bot) => {
  if (message.user.opit < 500000) return bot(`что бы копать бриллианты нужно больше 500.000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`)
  {
    attachment: "photo-190750183_457239109"
  }
  if (message.user.energy < 1)
    return bot(`вы сильно устали.
⚠ Энергия появляется каждые 3 минуты!`)

  let randbrilliant = utils.random(1, 3)

  vk.api.messages.send({
    chat_id: 1235,
    message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n💧 Бриллиантов:${message.user.brilliant}\n🎓 Опыт:${
      message.user.opit
    }\n💡 Энергия игрока:${message.user.energy}`
  })

  message.user.energy -= 1
  message.user.opit += 100
  message.user.brilliant += randbrilliant

  saveUsers()

  if (message.user.energy > 0)
    return bot(
      `+${randbrilliant} бриллиантов.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `⛏ Копать бриллианты`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )

  if (message.user.energy < 1) {
    setTimeout(() => {
      message.user.energy = 10
    }, 30000000)

    return bot(`+${randbrilliant} бриллиантов.
Энергия закончилась. 📛`)
  }
})

gabella.bot(/(?:копать звёздную пыль|копать зп)$/i, async (message, bot) => {
  if (message.user.opit < 2000000) return bot(`что бы копать Звёздную пыль нужно больше 2.000.000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`)
  {
    attachment: "photo-190750183_457239110"
  }

  if (message.user.energy < 1)
    return bot(`вы сильно устали.
⚠ Энергия появляется каждые 3 минуты!`)

  let randzp = utils.random(1, 10)

  vk.api.messages.send({
    chat_id: 1235,
    message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n🌠 ПЫЛИ:${message.user.zp}\n🎓 Опыт:${
      message.user.opit
    }\n💡 Энергия игрока:${message.user.energy}`
  })

  message.user.energy -= 1
  message.user.opit += 1500
  message.user.zp += randzp

  saveUsers()

  if (message.user.energy > 0)
    return bot(
      `+${randzp} звёздную пыль.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `⛏ Копать звёздную пыль`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )

  if (message.user.energy < 1) {
    setTimeout(() => {
      message.user.energy = 10
    }, 30000000)

    return bot(`+${randzp} звёздую пыль.
Энергия закончилась. 📛`)
  }
})

gabella.bot(/(?:копать рубины)$/i, async (message, bot) => {
  if (message.user.opit < 1000000) return bot(`что бы копать рубины нужно больше 1.000.000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`)

  if (message.user.energy < 1)
    return bot(`вы сильно устали.
⚠ Энергия появляется каждые 3 минуты!`)

  let randrubin = utils.random(1, 1)

  vk.api.messages.send({
    chat_id: 1235,
    message: `[${data()} ${time()}]!\n\n
🔎 Игровой ID: ${message.user.uid}\n▶ [id${message.user.id}|${message.user.tag}]\n❤ Рубины:${message.user.rubin}\n🎓 Опыт:${
      message.user.opit
    }\n💡 Энергия игрока:${message.user.energy}`
  })

  message.user.energy -= 1
  message.user.opit += 500
  message.user.rubin += randrubin

  saveUsers()

  if (message.user.energy > 0)
    return bot(
      `+${randrubin} рубины.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `⛏ Копать рубины`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )

  if (message.user.energy < 1) {
    setTimeout(() => {
      message.user.energy = 10
    }, 30000000)

    return bot(`+${randrubin} рубин.
Энергия закончилась. 📛`)
  }
})
gabella.bot(/^(?:железо)$/i, async (message, bot) => {
  return bot(`у вас ${utils.sp(message.user.zhelezo)} железа. 🎛`)
})

gabella.bot(/^(?:опыт)$/i, async (message, bot) => {
  return bot(`у вас ${utils.sp(message.user.opit)} опыта. 🏆`)
})

gabella.bot(/^(?:алмазы)$/i, async (message, bot) => {
  return bot(`у вас ${utils.sp(message.user.almaz)} алмазов. 💎`)
})

gabella.bot(/^(?:золото)$/i, async (message, bot) => {
  return bot(`у вас ${utils.sp(message.user.zoloto)} золота. 🏵`)
})

gabella.bot(/^(?:материя)$/i, async (message, bot) => {
  return bot(`у вас ${utils.sp(message.user.materia)} материи. 🌌`)
})

gabella.bot(/^(?:Бриллианты)$/i, async (message, bot) => {
  return bot(`у вас ${utils.sp(message.user.brilliant)} бриллиантов. 💧`)
})

gabella.bot(/^(?:рубины)$/i, async (message, bot) => {
  return bot(`у вас ${utils.sp(message.user.rubin)} рубинов. `)
})

gabella.bot(/^(?:Звёздная пыль|зп)$/i, async (message, bot) => {
  return bot(`у вас ${utils.sp(message.user.zp)} звёздной пыли. 🌠`)
})
gabella.bot(/^(?:копать)$/i, async (message, bot) => {
  await bot(`Можно копать - железо/золото/алмазы/материю/бриллианты/рубины/зп`)
})
gabella.bot(/(?:вирус атака|🔪 отпиздить|отпиздить|пиздить|@gabellabot🔪 отпиздить)$/i, async (message, bot) => {
  if (message.user.energy == 0) return bot(`энергия закончилась. 🙁`)
  if (Vurus.vurus_min <= 0) return bot(`вирус мертв, следите за новостями в группе. †😲`)
  Vurus.vurus_min -= message.user.sataka
  message.user.bossyr += message.user.sataka
  message.user.energy -= 1

  return bot(
    `вы нанесли вирусу ${utils.sp(message.user.sataka)} урона.
❤ XP: ${utils.sp(Vurus.vurus_min)}/${utils.sp(Vurus.vurus_max)}
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}
🏋 Энергия: ${message.user.energy}`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `⚔ Вирус атака`
              },
              color: "negative"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(
  /(?:Вирус сила х1|вирус сила 1|вирус сила1|вирус силах1|вирус силаx1|вирус сила x1|х1|Вирус сила|💪🏻 Вирус сила)$/i,
  async (message, bot) => {
    if (message.user.balance < 300000000000) return bot(`вам нужно 300.000.000.000$ для этого.`)
    if (message.user.sataka > 100000) return bot(`вы достигли лимита силы в 100к`)

    message.user.balance -= 300000000000
    message.user.sataka += 1

    return bot(
      `сила Вашей атаки была повышена за 300.000.000.000$ 👊
💰 Баланс: ${utils.sp(message.user.balance)}$
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х1`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х10`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х50`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х100`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х500`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )
  }
)

gabella.bot(/(?:Вирус сила х10|вирус сила 10|вирус сила10|вирус силах10|вирус силаx10|вирус сила x10|х10)$/i, async (message, bot) => {
  if (message.user.balance < 3000000000000) return bot(`вам нужно 3.000.000.000.000$ для этого.`)
  if (message.user.sataka > 100000) return bot(`вы достигли лимита силы в 100к`)

  message.user.balance -= 3000000000000
  message.user.sataka += 10

  return bot(
    `сила Вашей атаки была повышена на 10 единиц за 3.000.000.000.000$ 👊
💰 Баланс: ${utils.sp(message.user.balance)}$
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х10`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х50`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х100`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х500`
              },
              color: "positive"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:Вирус сила х50|вирус сила 50|вирус сила50|вирус силах50|вирус силаx50|вирус сила x50|х50)$/i, async (message, bot) => {
  if (message.user.balance < 15000000000000) return bot(`вам нужно 15.000.000.000.000$ для этого.`)
  if (message.user.sataka > 100000) return bot(`вы достигли лимита силы в 100к`)

  message.user.balance -= 15000000000000
  message.user.sataka += 50

  return bot(
    `сила Вашей атаки была повышена на 50 единиц за 15.000.000.000.000$ 👊
💰 Баланс: ${utils.sp(message.user.balance)}$
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х10`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х50`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х100`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х500`
              },
              color: "positive"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:Вирус сила х100|вирус сила 100|вирус сила100|вирус силах100|вирус силаx100|вирус сила x100|х100)$/i, async (message, bot) => {
  if (message.user.balance < 30000000000000) return bot(`вам нужно 30.000.000.000.000$ для этого.`)
  if (message.user.sataka > 100000) return bot(`вы достигли лимита силы в 100к`)

  message.user.balance -= 30000000000000
  message.user.sataka += 100

  return bot(
    `сила Вашей атаки была повышена на 100 единиц за 30.000.000.000.000$ 👊
💰 Баланс: ${utils.sp(message.user.balance)}$
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х10`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х50`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х100`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х500`
              },
              color: "positive"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:Вирус сила х500|вирус сила 500|вирус сила500|вирус силах500|вирус силаx500|вирус сила x500|х500)$/i, async (message, bot) => {
  if (message.user.balance < 250000000000000) return bot(`вам нужно 250.000.000.000.000$ для этого.`)
  if (message.user.sataka > 100000) return bot(`вы достигли лимита силы в 100к`)

  message.user.balance -= 250000000000000
  message.user.sataka += 500

  return bot(
    `сила Вашей атаки была повышена на 500 единиц за 250.000.000.000.000$ 👊
💰 Баланс: ${utils.sp(message.user.balance)}$
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х10`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х500`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х1.000`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х5.000`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `х10.000`
              },
              color: "positive"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(
  /(?:Вирус сила х1000|вирус сила 1000|вирус сила1000|вирус силах1000|вирус силаx1000|вирус сила x1000|Вирус сила х1.000|вирус сила 1.000|вирус сила1.000|вирус силах1.000|вирус силаx1.000|вирус сила x1.000|х1.000)$/i,
  async (message, bot) => {
    if (message.user.balance < 500000000000000) return bot(`вам нужно 500.000.000.000.000$ для этого.`)
    if (message.user.sataka > 100000) return bot(`вы достигли лимита силы в 100к`)

    message.user.balance -= 500000000000000
    message.user.sataka += 1000

    return bot(
      `сила Вашей атаки была повышена на 1.000 единиц за 500.000.000.000.000$ 👊
💰 Баланс: ${utils.sp(message.user.balance)}$
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х10`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х500`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х1.000`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х5.000`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х10.000`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )
  }
)

gabella.bot(
  /(?:Вирус сила х5000|вирус сила 5000|вирус сила5000|вирус силах5000|вирус силаx5000|вирус сила x5000|Вирус сила х5.000|вирус сила 5.000|вирус сила5.000|вирус силах5.000|вирус силаx5.000|вирус сила x5.000|х5.000)$/i,
  async (message, bot) => {
    if (message.user.balance < 2500000000000000) return bot(`вам нужно 2.500.000.000.000.000$ для этого.`)
    if (message.user.settings.adm > 0) return bot(`Вы администратор, вам не доступно.`)
    if (message.user.sataka > 100000) return bot(`вы достигли лимита силы в 100к`)

    message.user.balance -= 2500000000000000
    message.user.sataka += 5000

    return bot(
      `сила Вашей атаки была повышена на 5.000 единиц за 2.500.000.000.000.000$ 👊
💰 Баланс: ${utils.sp(message.user.balance)}$
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х10`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х1.000`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х5.000`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х10.000`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )
  }
)

gabella.bot(
  /(?:Вирус сила х10000|вирус сила 10000|вирус сила10000|вирус силах10000|вирус силаx10000|вирус сила x10000|Вирус сила х10.000|вирус сила 10.000|вирус сила10.000|вирус силах10.000|вирус силаx10.000|вирус сила x10.000|х10.000)$/i,
  async (message, bot) => {
    if (message.user.balance < 3500000000000000) return bot(`вам нужно 3.500.000.000.000.000$ для этого.`)
    if (message.user.settings.adm > 0) return bot(`Вы администратор, вам не доступно.`)
    if (message.user.sataka > 100000) return bot(`вы достигли лимита силы в 100к`)

    message.user.balance -= 3500000000000000
    message.user.sataka += 10000

    return bot(
      `сила Вашей атаки была повышена на 10.000 единиц за 3.500.000.000.000.000$ 👊
💰 Баланс: ${utils.sp(message.user.balance)}$
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х10`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х500`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х1.000`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х5.000`
                },
                color: "positive"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `х10.000`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    )
  }
)

gabella.bot(/(?:вирусы)$/i, async (message, bot) => {
  if (message.user.id != 504991834 && message.user.id != 576070765) return
  let top = []

  users.map(x => {
    top.push({ bossyr: x.bossyr, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention })
  })

  top.sort((a, b) => {
    return b.bossyr - a.bossyr
  })

  let text = ``
  const find = () => {
    let pos = 1000

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i)
    }

    return pos
  }

  for (let i = 0; i < 15; i++) {
    if (!top[i]) return
    const user = top[i]

    text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — нанёс ${utils.sp(user.bossyr)} ударов
		`
  }

  await bot(`топ по общим ударам:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — нанёс ${utils.sp(message.user.bossyr)} ударов`)
  {
    keyboard: JSON.stringify({
      inline: true,
      buttons: [
        [
          {
            action: {
              type: "text",
              payload: "{}",
              label: `⚔ Вирус атака`
            },
            color: "negative"
          }
        ]
      ]
    })
  }

  return message.sendSticker(11278)
})

gabella.bot(/(?:вирус)$/i, async (message, bot) => {
  {
    if (message.isChat) {
      vk.api.messages.send({
        chat_id: message.chatId,
        attachment: `${Vurus.vurus_photo}`,
        message: `[id${message.user.id}|${message.user.tag}], Вирус - "${Vurus.name}":

❤ XP: ${utils.sp(Vurus.vurus_min)}/${utils.sp(Vurus.vurus_max)}
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}

🔝 Увеличить силу атаки: «Вирус сила»
💳 Стоимость: 300.000.000.000$

👥 Топ игроков по урону: Вирус топ»
🔨 Ударить по Вирусу: «Вирус атака»`,

        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              { action: { type: "text", payload: '{"button": "1"}', label: "💪🏻 Вирус сила" }, color: "positive" },
              { action: { type: "text", payload: "{}", label: "🔝 Вирус топ" }, color: "primary" }
            ],
            [{ action: { type: "text", payload: "{}", label: "⚔ Вирус атака" }, color: "negative" }]
          ]
        })
      })
    }
    if (!message.isChat) {
      vk.api.messages.send({
        user_id: message.user.id,
        attachment: `${Vurus.vurus_photo}`,
        message: `[id${message.user.id}|${message.user.tag}], Вирус - "${Vurus.name}":

❤ XP: ${utils.sp(Vurus.vurus_min)}/${utils.sp(Vurus.vurus_max)}
🎯 Вы нанесли: ${utils.sp(message.user.bossyr)} ударов.
👊 Сила вашей атаки: ${utils.sp(message.user.sataka)}

🔝 Увеличить силу атаки: «Вирус сила»
💳 Стоимость: 300.000.000.000$

👥 Топ игроков по урону: «Вирус топ»
🔨 Ударить по Вирусу: «Вирус атака»`,

        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              { action: { type: "text", payload: '{"button": "1"}', label: "💪🏻 Вирус сила" }, color: "positive" },
              { action: { type: "text", payload: "{}", label: "🔝 Вирус топ" }, color: "primary" }
            ],
            [{ action: { type: "text", payload: "{}", label: "⚔ Вирус атака" }, color: "negative" }]
          ]
        })
      })
    }
  }
})
gabella.bot(/^(?:-вирус)\s?([0-9]+)?/i, async (message, args, bot) => {
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)
  if (message.senderId !== 504991834 && message.senderId !== 576070765) return message.send(`Вам недоступно.`)
  if (!message.args[1] || !users[message.args[1]]) return message.send(`Использование: '-вирус [ID]'`)

  users[message.args[1]].bossyr = 0
  users[message.args[1]].sataka = 1

  return message.send(`Вы обнулили вирус пользователя [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`)
  console.log(`Был обнулён игрок id${users[message.args[1]].id}`)
  console.log(``)
  saveUsers()
})
/*==========================================================================================================*/
/*===========================================КОММ==========================================================*/
updates.on(`new_wall_comment`, async context => {
  if (Number(context.userId) <= 0) return
  let user = users.find(x => x.id === context.userId)
  if (!user) {
    vk.api.call("wall.createComment", {
      owner_id: context.ownerId,
      post_id: context.objectId,
      reply_to_comment: context.id,
      message: `❌ Для начала зарегистрируйтесь в боте  — vk.me/gabellabot`
    })

    return
  }

  if ((user && user.comTimer > getUnix()) || context.userId < 1) {
    if (user.peremena2 == true) {
      return
    } else {
      vk.api.call("wall.createComment", {
        owner_id: context.ownerId,
        post_id: context.objectId,
        reply_to_comment: context.id,
        message: `@id${user.id} (${user.tag}), ❌ Вы сможите получить следующую награду за комментарий через: ${unixStampLeft(
          user.comTimer - Date.now()
        )}`
      })
      user.peremena2 = true
      return
    }
  }
  let rand = utils.random(1, 10)
  user.zp = Number(user.zp) + Number(rand)
  user.comTimer = getUnix() + 600000
  user.peremena2 = false

  vk.api.call("wall.createComment", {
    owner_id: context.ownerId,
    post_id: context.objectId,
    reply_to_comment: context.id,
    message: `@id${user.id} (${user.tag}), ✅ Вы получили (${utils.sp(rand)} Звёздной пыли, за комментарий!)`
  })
})
/*=========================================================================================================*/

/*==========================================================================================================*/
/*=====================================МАГАЗИН=============================================================*/
gabella.bot(/^(?:машины)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Список машин:
🚗 1. Самокат (2$)
🚗 2. Ролики (150$)
🚗 3. Гироскутер (2.500$)
🚗 4. BMX (5.000$)
🚗 5. Мопед (15.000$)
🚗 6. Мотоцикл (20.000$)
🚗 7. ВАЗ 2109 (35.000$)
🚗 8. Квадроцикл (40.500$)
🚗 9. Багги (45.000$)
🚗 10. Вездеход (150.000$)
🚗 11. Лада Xrау (350.000$)
🚗 12. Аudi Q7 (750.000$)
🚗 13. BMW X6 (1.000.000$)
🚗 14. Tоуоtа FT-HS (1.750.000$)
🚗 15. BMW Z4 M (2.500.000$)
🚗 16. Subaru WRX STI (5.750.000$)
🚗 17. Lаmbоrghini Vеnеnо (10.500.000$)
🚗 18. Tеslа Rоаdstеr (25.700.000$)
🚗 19. Yаmаhа YZF R6 (50.500.000$)
🚗 20. Bugatti Veyron (65.530.000$)
🚗 21. Thrust SSС (150.000.000$)
🚗 22. Fеrrаri LаFеrrаri (250.500.000$)
🚗 23. Kоеnigsеgg Rеgеrа (275.750.000$)
🚗 24. Tеslа Sеmi (350.550.000$)
🚗 25. Vеnоm GT (520.500.000$)
🚗 26. Rоlls-Rоусе (666.666.000$)
🚗 27. Летающая машина (777.750.000$)
🚗 28. ВАЗ 2105 Боевая Классика (1.000.000.000.000$)
🚗 29. ВАЗ 2101 Drift King🤴 (5.000.000.000.000$)
🚗 30. Mercedes-Benz G-класс (7.000.000.000.000$)
🚗 31. Tesla Cybertruck (12.000.000.000.000$)
🚗 32. Porsche Panamera Turbo (17.000.000.000.000$)
🚗 33. Bugatti Chiron (25.000.000.000.000$)
🚗 34. Сadillac Escala (30.550.000.000.000$)
🚗 35. McLaren X-1 (35.750.000.000.000$)
🚗 36. SLR Stirling Moss (55.500.000.000.000$)
🚗 37. Koenigsegg CCXR Trevita (75.750.000.000.000$)
🚗 38. Bentley Continental GT (95.550.000.000.000$)
🚗 39. McLaren 720S (125.500.550.000.000$)
🚗 40. Devel Sixteen (130.700.750.000.000$)
🚗 41. Nissan GT-R (150.999.999.000.000$)

 🛒 Для покупки введите "Машины [номер]"
`)

  const sell = cars.find(x => x.id === Number(message.args[1]))
  if (!sell) return

  if (message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`)
  if (message.user.transport.car + message.args[1] > 41) return bot(`Ошибка. Выберите машину "Машины [1-41]" для покупки.`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.transport.car = sell.id
    message.user.prok_10 = sell.prok_10
    message.user.prok_9 = 0
    message.user.prok_8 = 0
    message.user.prok_7 = 0
    message.user.prok_6 = 0
    message.user.prok_5 = 0
    message.user.prok_4 = 0
    message.user.prok_3 = 0
    message.user.prok_2 = 0
    message.user.prok_1 = 0
    message.user.maxshini = sell.maxshini
    message.user.maxdiski = sell.maxdiski
    message.user.maxtyrbo = sell.maxtyrbo
    message.user.maxspitnik = sell.maxspitnik
    message.user.maxprygini = sell.maxprygini
    message.user.maxspoyler = sell.maxspoyler
    message.user.maxnos = sell.maxnos
    message.user.maxdvigok = sell.maxdvigok
    message.user.maxtoplivo = sell.maxtoplivo
    message.user.mn = `Нету`

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/^(?:ледянки)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Список ледянок:
🛷 1. Коробка из под мандарин (5.000🍊)
🛷 2. Пластиковая ледянка (10.000🍊)
🛷 3. Ледянка-тарелка (500.000🍊)
🛷 4. Санки (1.550.750🍊)
🛷 5. Тюбинг (5.000.750🍊)

 🛒 Для покупки введите "ледянки [номер]"
`)

  const sell = ledyankas.find(x => x.id === Number(message.args[1]))
  if (!sell) return

  if (message.user.ledyanka) return bot(`у вас уже есть ледянка (${ledyankas[message.user.ledyanka - 1].name}), введите "Продать ледяка"`)
  if (message.user.ledyanka + message.args[1] > 5) return bot(`Ошибка. Выберите ледянку "ледянки [1-5]" для покупки.`)

  if (message.user.mandarin < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.mandarin >= sell.cost) {
    message.user.mandarin -= sell.cost
    message.user.ledyanka = sell.id
    message.user.pro4_1 = sell.pro4_1
    message.user.pro4_2 = sell.pro4_2
    message.user.pro4_3 = sell.pro4_3
    message.user.pro4_4 = sell.pro4_4

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}🍊 ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/^(?:варенье)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Список Варений
🧫 1. Варенье от «Covid-19» (10.000.000.000.000$) (+10% к победам в играх)
🧫 2. Варенье от «Pofig-21» (100.000.000.000.000$) (+20% к победам в играх)
🧫 3. Варенье от «Panic-20» (150.000.000.000.000$) (+30% к победам в играх)
🧫 4. Варенье от Всех болезней (500.000.000.000.000$) (+50% к победам в играх)


 🛒 Для покупки введите "Варенье [номер]"
`)
})

gabella.bot(/^(?:варенье)\s?(1)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Список Варений
🧫 1. Варенье от «Covid-19» (10.000.000.000.000$) (+10% к победам в играх)
🧫 2. Варенье от «Pofig-21» (100.000.000.000.000$) (+20% к победам в играх)
🧫 3. Варенье от «Panic-20» (150.000.000.000.000$) (+30% к победам в играх)
🧫 4. Варенье от Всех болезней (500.000.000.000.000$) (+50% к победам в играх)


 🛒 Для покупки введите "Варенье [номер]"
`)
  const sell = varens.find(x => x.id === Number(message.args[1]))
  if (!sell) return

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.varen = sell.id
    message.user.cov = sell.cov

    return bot(
      `вы купили «${sell.name}» за ${utils.sp(
        sell.cost
      )}$. Нельзя покупать одно и тоже варенье, шансы на победу в играх не будут прибовляться! ${smilesuccess}`
    )
  }
})

gabella.bot(/^(?:варенье)\s?(2)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Список Варений
🧫 1. Варенье от «Covid-19» (10.000.000.000.000$) (+10% к победам в играх)
🧫 2. Варенье от «Pofig-21» (100.000.000.000.000$) (+20% к победам в играх)
🧫 3. Варенье от «Panic-20» (150.000.000.000.000$) (+30% к победам в играх)
🧫 4. Варенье от Всех болезней (500.000.000.000.000$) (+50% к победам в играх)


 🛒 Для покупки введите "Варенье [номер]"
`)
  const sell = varens.find(x => x.id === Number(message.args[1]))
  if (!sell) return

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.varen = sell.id
    message.user.po = sell.po

    return bot(
      `вы купили «${sell.name}» за ${utils.sp(
        sell.cost
      )}$. Нельзя покупать одно и тоже варенье, шансы на победу в играх не будут прибовляться! ${smilesuccess}`
    )
  }
})

gabella.bot(/^(?:варенье)\s?(3)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Список Варений
🧫 1. Варенье от «Covid-19» (10.000.000.000.000$) (+10% к победам в играх)
🧫 2. Варенье от «Pofig-21» (100.000.000.000.000$) (+20% к победам в играх)
🧫 3. Варенье от «Panic-20» (150.000.000.000.000$) (+30% к победам в играх)
🧫 4. Варенье от Всех болезней (500.000.000.000.000$) (+50% к победам в играх)


 🛒 Для покупки введите "Варенье [номер]"
`)
  const sell = varens.find(x => x.id === Number(message.args[1]))
  if (!sell) return

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.varen = sell.id
    message.user.pan = sell.pan

    return bot(
      `вы купили «${sell.name}» за ${utils.sp(
        sell.cost
      )}$. Нельзя покупать одно и тоже варенье, шансы на победу в играх не будут прибовляться! ${smilesuccess}`
    )
  }
})

gabella.bot(/^(?:варенье)\s?(4)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Список Варений
🧫 1. Варенье от «Covid-19» (10.000.000.000.000$) (+10% к победам в играх)
🧫 2. Варенье от «Pofig-21» (100.000.000.000.000$) (+20% к победам в играх)
🧫 3. Варенье от «Panic-20» (150.000.000.000.000$) (+30% к победам в играх)
🧫 4. Варенье от Всех болезней (500.000.000.000.000$) (+50% к победам в играх)


 🛒 Для покупки введите "Варенье [номер]"
`)
  const sell = varens.find(x => x.id === Number(message.args[1]))
  if (!sell) return

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.varen = sell.id
    message.user.cov = sell.cov
    message.user.pan = sell.pan
    message.user.po = sell.po

    return bot(
      `вы купили «${sell.name}» за ${utils.sp(
        sell.cost
      )}$. Нельзя покупать одно и тоже варенье, шансы на победу в играх не будут прибовляться! ${smilesuccess}`
    )
  }
})
gabella.bot(/^(?:яхты 21)$/i, async (message, bot) => {
  return bot(`вы не оплатили яхту.`)
})

gabella.bot(/^(?:яхты)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`яхты:
🛥 1. Gavai (100.000.000.000$)
🛥 2. Nаutiсаt 331 (150.000.000.000$)
🛥 3. Nоrdhаvn 56 MS (190.000.000.000$)
🛥 4. Рrinсеss 60 (250.000.000.000$)
🛥 5. Аzimut 70 (350.000.000.000$)
🛥 6. Dоminаtоr 40M (450.000.000.000$)
🛥 7. Mооnеn 124 (500.000.000.000$)
🛥 8. Widеr 150 (650.000.000.000$)
🛥 9. Раlmеr Jоhnsоn 42M SuреrSроrt (750.000.000.000$)
🛥 10. Widеr 165 (850.000.000.000$)
🛥 11. Есliрsе (1.500.000.000.000$)
🛥 12. Dubаi (3.200.000.000.000$)
🛥 13. Strееts оf Mоnасо (5.000.000.000.000$)
🛥 14. History Supreme (7.550.000.000.000$)
🛥 15. Palladium (15.000.000.000.000$)
🛥 16. Seven Seas (23.750.050.000.000$)
🛥 17. The Rising Sun (35.500.000.100.000$)
🛥 18. Al Salamah (45.700.550.000.000$)
🛥 19. Dilbar (57.530.990.900.000$)
🛥 20. Serene (80.970.006.550.000$)
🛥 21. Gabella Bot (100 руб.)

🛒 Для покупки введите "Яхты [номер]"`)

  const sell = yachts.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.transport.yacht = sell.id
    message.user.prot_10 = sell.prot_10

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`)
  }
})
gabella.bot(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`самолеты: 
🎒 1. Параплан (100.000$)
🎒 2. АН-2 (1.350.000$)
🎒 3. Сеssnа-172Е (1.700.000$)
🎒 4. Suреrmаrinе Sрitfirе (5.000.000$)
🎒 5. BRM NG-5 (5.400.000$)
🎒 6. Сеssnа T210 (6.600.000$)
🎒 7. Bеесhсrаft 1900D (7.500.000$)
🎒 8. Сеssnа 550 (8.000.000$)
🎒 9. Hаwkеr 4000 (22.400.000$)
🎒 10. Lеаrjеt 31 (45.000.000$)
🎒 11. Аirbus А318 (85.000.000$)
🎒 12. F-35А (160.000.000$)
🎒 13. Bоеing 747-430 Сustоm (225.000.000$)
🎒 14. С-17А Glоbеmаstеr III (350.000.000$)
🎒 15. F-22 Rарtоr (400.000.000$)
🎒 16. Аirbus 380 Сustоm (600.000.000$)
🎒 17. B-2 Sрirit Stеаlth Bоmbеr (1.359.000.000$)
🎒 18. Су-35 (4.500.000.000$)
🎒 19. F-22 Raptor (11.500.000.000$)
🎒 20. T-50 (19.510.000.000$)

🛒 Для покупки введите "Самолет [номер]"`)

  const sell = airplanes.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.transport.airplane)
    return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`)
  if (message.user.transport.airplane + message.args[1] > 20) return bot(`Ошибка. Выберите самолет "Самолет [1-20]" для покупки.`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.transport.airplane = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`)
  }
})

gabella.bot(/^(?:вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`вертолеты: 
🎒 1. Шарик с пропеллером (2$)
🎒 2. RоtоrWау Еxес 162F (300.000$)
🎒 3. Rоbinsоn R44 (450.000$)
🎒 4. Hillеr UH-12С (1.300.000$)
🎒 5. АW119 Kоаlа (2.500.000$)
🎒 6. MBB BK 117 (4.000.000$)
🎒 7. Еurосорtеr ЕС130 (7.500.000$)
🎒 8. Lеоnаrdо АW109 Роwеr (10.000.000$)
🎒 9. Sikоrskу S-76 (15.000.000$)
🎒 10. Bеll 429WLG (19.000.000$)
🎒 11. NHI NH90 (35.000.000$)
🎒 12. Kаzаn Mi-35M (60.000.000$)
🎒 13. Bеll V-22 Оsрrеу (135.000.000$)
🎒 14. Звездолёт (150.000.000.000.000$)

🛒 Для покупки введите "Вертолеты [номер]"`)

  const sell = helicopters.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.transport.helicopter)
    return bot(`у вас уже есть вертолёт (${helicopters[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-193082125_3859119" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.transport.helicopter = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}"`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/^(?:дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`дома: 
🎒 1. Коробка из-под обуви (250$)
🎒 2. Чердак (3.000$)
🎒 3. Шалаш (3.500$)
🎒 4. Гараж (5.000$)
🎒 5. Сарай (10.000$)
🎒 6. Старый вагон (25.000$)
🎒 7. Комната в общаге (37.500$)
🎒 8. Заброшенный деревенский дом (80.000$)
🎒 9. Холодильник соседа (125.000$)
🎒 10. Будка (450.000$)
🎒 11. Кирпичный Дом (1.250.000$)
🎒 12. Коттедж (5.000.000$)
🎒 13. Двухэтажный кирпичный дом (7.000.000$)
🎒 14. Вилла в Испании (12.500.000$)
🎒 15. Дом на Рублевке (20.000.000$)
🎒 16. Эйфелева Башня (500.000.000.000$)
🎒 17. Личный небоскреб (722.500.000.000$)
🎒 18. Остров с особняком (1.200.000.000.000$)
🎒 19. Белый дом (5.900.000.000.000$)
🎒 20. Своя планета (20.000.000.000.000$)
🎒 21. Своя галактика (50.000.000.000.000$)

🛒 Для покупки введите "Дом [номер]"`)

  const sell = homes.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.realty.home = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`)
  }
})

gabella.bot(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`квартиры: 
🎒 1. Чердак (15.000$)
🎒 2. Коммунальная квартира (55.000$)
🎒 3. Полугостиница (175.000$)
🎒 4. Квартира в Гостинице (260.000$)
🎒 5. Однокомнатная квартира (500.000$)
🎒 6. Двухкомнатная квартира (1.600.000$)
🎒 7. Четырехкомнатная квартира (4.000.000$)
🎒 8. Квартира в центре Москвы (6.000.000$)
🎒 9. Двухуровневая квартира (21.000.000$)
🎒 10. Квартира с Евроремонтом (64.000.000$)
🎒 11. Квартира на Гавайях (155.000.000$)

🛒 Для покупки введите "Квартира [номер]"`)

  const sell = apartments.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.realty.apartment)
    return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.realty.apartment = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`)
  }
})

gabella.bot(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`телефоны: 
🎒 1. Nоkiа 108 (250$)
🎒 2. Nоkiа 3310 (500$)
🎒 3. АSUS ZеnFоnе 4 (2.000$)
🎒 4. BQ Аquаris X (10.000$)
🎒 5. Sоnу Xреriа XА (15.000$)
🎒 6. Sаmsung Gаlаxу S8 (30.000$)
🎒 7. Xiаоmi Mi Mix (50.000$)
🎒 8. Tоrеx FS1 (75.000$)
🎒 9. iРhоnе X (100.000$)
🎒 10. Мегафон С1 (250.000$)
🎒 11. iРhоnе XR (500.000$)
🎒 12. iРhоnе XS MАX (1.000.000$)
🎒 13. Огурец (750.000.000$)
🎒 14. Xiaomi Mi 9 T Pro 6/128Gb (1.000.000.000$)
🎒 15. OnePlus 7 8/256Gb (4.550.000.000$)
🎒 16. Oppo Realme X2 Pro Global (12.500.000.000$)
🎒 17. Asus ROG Phone 2 (32.400.000.000$)
🎒 18. iРhоnе 11 Рrо Mаx (55.555.555.555$)

🛒 Для покупки введите "Телефон [номер]"`)

  const sell = phones.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.misc.phone = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/^(?:Шляпы|шапки|шапка|шляпа)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Шапки: 
🎩 1. čiehgahpir (Четыре ветра) (5$)
🎩 2. Cork hat (Пробковая шляпа) (1.00$)
🎩 3. Курительная шапка (10.000$)
🎩 4. Nón quai thao (300.000$)
🎩 5. Chapeau claque (Шапокляк) (300.000$)
🎩 6. Monmouth Cap (Монмутская шапка) (500.000$)
🎩 7. Welsh Wig (Уэльский парик) (1.000.000$)
🎩 8. Зимние наушники (100.000.000$)
🎩 9. Sombrero (Сомбреро) (500.000.000$)
🎩 10. Tam o'shanter (Тэм О’Шентер) (1.000.000.000$)
🎩 11. Balmoral bonnet (берет Балморал) (10.000.000.000$)
🎩 12. Bigouden / Vigoudenn (Бигуден) (15.000.000.000$)
🎩 13. Hennin (Эннен) (30.000.000.000$)
🎩 14. Cloche (шляпа-клош) (100.000.000.000$)

🛒 Для покупки введите "Шапка [номер]"`)

  const sell = shlyaps.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.misc.shlyap) return bot(`у вас уже есть шапка (${shlyaps[message.user.misc.shlyap - 1].name}), введите "Продать шапку"`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.misc.shlyap = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/^(?:Автоматы|пулеметы)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Автоматы: 
🎒 1. Ferfrans HVLAR (10.000.000$)
🎒 2. М16 (30.000.000$)
🎒 3. FN F2000 (100.000.000$)
🎒 4. HK416 (500.000.000$)
🎒 5. Steyr AUG A3 (750.000.000$)
🎒 6. АС «Вал» (1.000.000.000$)
🎒 7. TAR-21(Тавор)  (2.500.000.000$)
🎒 8. FN SCAR-H  (5.000.000.000$)
🎒 9. Bushmaster ACR 3 (10.000.000.000$)
🎒 10. АК-12  (45.000.000.000$)

🛒 Для покупки введите "Автоматы [номер]"`)

  const sell = avtomats.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.misc.avtomat) return bot(`у вас уже есть автомат (${avtomats[message.user.misc.avtomat - 1].name}), введите "Продать Автомат"`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.misc.avtomat = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/(?:охота|🏹 Охота|охотиться|сходить поохотиться|🏹 Охотиться|🏹 Охотиться!|🏹 Охота!)$/i, async (message, bot) => {
  if (message.user.misc.avtomat < 1)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет автомата.
		Список всех автоматов по команде «автоматы»`)

  if (message.user.timers.ohota >= 0) {
    await message.send(
      `[id${message.user.id}|${message.user.tag}], вы спите, вашь будильник прозвенит через - ${displayTime(message.user.timers.ohota)} ${smileerror}`
    )
    return message.sendSticker(6679)
  }

  message.user.timers.ohota = 600
  let prize = utils.pick([1, 1, 2, 1, 1, 2, 3, 3, 4, 4, 5])

  if (message.isChat) {
    setTimeout(() => {
      vk.api.messages.send({
        chat_id: message.chatId,
        message: `@id${message.user.id} (${message.user.tag}), твой товарищ зовёт тебя на ОХОТУ! 🏹 скорее отправляйся с ним! 💯`,

        keyboard: JSON.stringify({ inline: true, buttons: [[{ action: { type: "text", payload: "{}", label: "🏹 ОХОТА!" }, color: "negative" }]] })
      })
    }, 600000)
  }

  if (!message.isChat) {
    setTimeout(() => {
      vk.api.messages.send({
        user_id: message.user.id,
        message: `@id${message.user.id} (${message.user.tag}), твой товарищ зовёт тебя на ОХОТУ! 🏹 скорее отправляйся с ним! 💯`,

        keyboard: JSON.stringify({ inline: true, buttons: [[{ action: { type: "text", payload: "{}", label: "🏹 ОХОТА!" }, color: "negative" }]] })
      })
    }, 600000)
  }

  if (prize === 1) {
    message.user.balance += 3000000000
    return bot(
      `вы сходили на охоту в лес, и вам удалось застрелить местного медведя 🐻
				💰 За шкуру вам заплатили 3.000.000.000$`,
      { attachment: "photo-192023992_467239161" }
    )
  }
  if (prize === 2) {
    message.user.balance += 2000000000
    return bot(
      `пока вы блуждали по лесу, вы неожиданно встретили лису 🦊
				💰 За хороший мех лисы вам заплатили 2.000.000.000$`,
      { attachment: "photo-192023992_467239162" }
    )
  }
  if (prize === 3) {
    return bot(
      `вы решили пойти не в ту сторону леса, и наткнулись на дикого кабана 🐗. Вы выстрелили всю обойму, но кабан успел убежать.
				💰 Вам ничего не заплатили.`,
      { attachment: "photo-192023992_467239163" }
    )
  }
  if (prize === 4) {
    message.user.balance -= 250000
    return bot(
      `пока вы болтали со своим партнёром по охоте, на вас внезапно набросился свирепый Горилла 🦍
				🧰 За лечение вы заплатили 250.000$`,
      { attachment: "photo-192023992_467239164" }
    )
  }
  if (prize === 5) {
    message.user.balance -= 1000000
    return bot(
      `вы блуждали по лесу в поисках животины, но вас неожиданно поймала лесная полиция за ловлю животных в не предназначенном для этого места 🚨
				🆘 Пришлось заплатить штраф 1.000.000$`,
      { attachment: "photo-192023992_467239165" }
    )
  }
})

gabella.bot(/^(?:Пистолет|пистолеты|пестики)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`пистолеты: 
🔫 1. Пистолет Макарова (10.000.000$)
🔫 2. USP (30.000.000$)
🔫 3. Desert Eagle(100.000.000$)
🔫 4. Tec-9 (500.000.000$)
🔫 5. Walther P99 (750.000.000$)
🔫 6. ТТ (1.000.000.000$)
🔫 7. FN Five-seveN (2.500.000.000$)
🔫 8. Beretta 92 (5.000.000.000$)
🔫 9. Glock 17 (10.000.000.000$)

🛒 Для покупки введите "Пистолет [номер]"`)

  const sell = pistolets.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.misc.pistolet)
    return bot(`у вас уже есть пистолет (${pistolets[message.user.misc.pistolet - 1].name}), введите "Продать пистолет"`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.misc.pistolet = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/^(?:компьютер|компьютеры|комп|компы|пк)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`компьютеры:
🎒 1. DЕXР Аquilоn О175 (150.000$)
🎒 2. HYРЕRРС NЕО (500.000$)
🎒 3. DЕLL Аliеnwаrе Аurоrа R7 (750.000$)
🎒 4. HYРЕRРС СОSMОS X 3 (1.000.000$)
🎒 5. HYРЕRРС РRЕMIUM (1.200.000$)
🎒 6. ASUS ZenBook Pro (1.350.000$)
🎒 7. HYPERPC COSMOS X (1.500.000$)
🎒 8. HP Z2 Mini (1.950.000$)
🎒 9. Dell Precision 5820 (3.500.000$)
🎒 10. Lenovo ThinkStation P330 Tiny (5.550.000$)

🛒 Для покупки введите "Компьютер [номер]"`)

  const sell = computers.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.misc.computer)
    return bot(`у вас уже есть компьютер (${computers[message.user.misc.computer - 1].name}), введите "Продать компьютер"`)
  if (message.user.misc.computer + message.args[1] > 10) return bot(`Ошибка. Выберите компьютер "Компьютер [1-10]" для покупки.`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.misc.computer = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})
gabella.bot(/(?:питомцы)$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`питомцы:
🐌 1. Улитка (1.000$)
🐹 2. Хомяк (5.000$)
🐸 3. Лягушка (25.000$)
🐰 4. Заяц (500.000$)
🐷 5. Свинья (300.000.000$)
🦊 6. Лиса (1.250.000.000$)
🐶 7. Собака (5.000.000.000$)
🐼 8. Панда (30.000.000.000$)
🦍 9. Обезьяна (180.000.000.000$)
🐲 10. Дракон (350.000.000.000$)
💩 11. Какаска (10.000.000.000.000$)
👻 12. Привидение (50.000.000.000.000$)

🛒 Для покупки введите "Питомец [номер]"
📜 Информация о вашем питомце "Питомец"
🛑 Для продажи питомца "Продать питомца"`)

  {
  }
})

gabella.bot(/^(?:фермы)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? "🔋" : "🔋"} 1. 6U Nvidia 2₿/час (20.500.000$) 
${message.user.misc.farm === 2 ? "🔋" : "🔋"} 2. AntminerS9 10₿/час (100.000.000$) 
${message.user.misc.farm === 3 ? "🔋" : "🔋"} 3. FM2018-BT200 100₿/час (900.000.000$) 
${message.user.misc.farm === 4 ? "🔋" : "🔋"} 4. AvalonMiner 1166-68T 1000₿/час (800.000.000.000$)
${message.user.misc.farm === 5 ? "🔋" : "🔋"} 5. EBIT E10.6 15000₿/час (6.000.000.000.000$)
${message.user.misc.farm === 6 ? "🔋" : "🔋"} 6. Genesis Mining 175000₿/час (10.000.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`)

  let farmm = message.user.farmslimit - message.user.farms

  const sell = farms.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм (${message.user.farmslimit}x). ${smileerror}`)
  if (message.user.misc.farm != 0 && message.user.misc.farm != message.args[1]) return bot(`вы не можете купить ферму другого типа`)

  if (message.user.balance < sell.cost * count) return bot(`недостаточно денег ${smileerror}`)
  else if (message.user.balance >= sell.cost) {
    if (Number(message.args[2])) {
      message.args[2] = message.args[2].replace(/(\.|\,)/gi, "")
      message.args[2] = message.args[2].replace(/(к|k)/gi, "000")
      message.args[2] = message.args[2].replace(/(м|m)/gi, "000000")

      message.user.balance -= sell.cost
      message.user.misc.farm = sell.id
      message.user.farms += message.args[2]

      return bot(`вы купили ${sell.name} (x${message.args[2]}) за ${utils.sp(sell.cost)}$ 
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`)
    } else {
      message.user.balance -= sell.cost
      message.user.misc.farm = sell.id
      message.user.farms += 1

      return bot(`вы купили ${sell.name} (x1) за ${utils.sp(sell.cost)}$ 
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`)
    }
  }
})

gabella.bot(/^(?:фермы 1)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? "🔋" : "🔋"} 1. 6U Nvidia 2₿/час (20.500.000$) 
${message.user.misc.farm === 2 ? "🔋" : "🔋"} 2. AntminerS9 10₿/час (100.000.000$) 
${message.user.misc.farm === 3 ? "🔋" : "🔋"} 3. FM2018-BT200 100₿/час (900.000.000$) 
${message.user.misc.farm === 4 ? "🔋" : "🔋"} 4. AvalonMiner 1166-68T 1000₿/час (800.000.000.000$)
${message.user.misc.farm === 5 ? "🔋" : "🔋"} 5. EBIT E10.6 15000₿/час (6.000.000.000.000$)
${message.user.misc.farm === 6 ? "🔋" : "🔋"} 6. Genesis Mining 175000₿/час (10.000.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`)

  let farmm = message.user.farmslimit - message.user.farms

  if (message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм (x${message.user.farmslimit}). ${smileerror}`)
  if (message.args[1] > farmm) return bot(`вы не можете купить ферм более чем (x500) за один раз!. ${smileerror}`)
  if (message.user.misc.farm != 0 && message.user.misc.farm != 1) return bot(`вы не можете купить ферму другого типа`)

  var pricefarms1 = 20500000 * message.args[1]
  if (message.user.balance < pricefarms1) return bot(`недостаточно денег ${smileerror}`)
  else if (message.user.balance >= pricefarms1) {
    message.user.balance -= pricefarms1
    message.user.misc.farm = 1

    if (message.user.misc.farm === 1) message.user.farms += Number(message.args[1])
    else {
      message.user.farms = Number(message.args[1])
    }

    return bot(`вы купили 6U Nvidia (x${Number(message.args[1])}) за ${utils.sp(pricefarms1)}$ 
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`)
  }
})

gabella.bot(/^(?:фермы 2)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? "🔋" : "🔋"} 1. 6U Nvidia 2₿/час (20.500.000$) 
${message.user.misc.farm === 2 ? "🔋" : "🔋"} 2. AntminerS9 10₿/час (100.000.000$) 
${message.user.misc.farm === 3 ? "🔋" : "🔋"} 3. FM2018-BT200 100₿/час (900.000.000$) 
${message.user.misc.farm === 4 ? "🔋" : "🔋"} 4. AvalonMiner 1166-68T 1000₿/час (800.000.000.000$)
${message.user.misc.farm === 5 ? "🔋" : "🔋"} 5. EBIT E10.6 15000₿/час (6.000.000.000.000$)
${message.user.misc.farm === 6 ? "🔋" : "🔋"} 6. Genesis Mining 175000₿/час (10.000.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`)

  let farmm = message.user.farmslimit - message.user.farms

  if (message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм (x1000). ${smileerror}`)
  if (message.args[1] > farmm) return bot(`достигнут лимит ферм. (x${message.user.farmslimit}) ${smileerror}`)
  if (message.user.misc.farm != 0 && message.user.misc.farm != 2) return bot(`вы не можете купить ферму другого типа`)

  var pricefarms2 = 100000000 * message.args[1]
  if (message.user.balance < pricefarms2) return bot(`недостаточно денег ${smileerror}`)
  else if (message.user.balance >= pricefarms2) {
    message.user.balance -= pricefarms2
    message.user.misc.farm = 2

    if (message.user.misc.farm === 2) message.user.farms += Number(message.args[1])
    else {
      message.user.farms = Number(message.args[1])
    }

    return bot(`вы купили AntminerS9 (x${Number(message.args[1])}) за ${utils.sp(pricefarms2)}$ 
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`)
  }
})

gabella.bot(/^(?:фермы 3)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? "🔋" : "🔋"} 1. 6U Nvidia 2₿/час (20.500.000$) 
${message.user.misc.farm === 2 ? "🔋" : "🔋"} 2. AntminerS9 10₿/час (100.000.000$) 
${message.user.misc.farm === 3 ? "🔋" : "🔋"} 3. FM2018-BT200 100₿/час (900.000.000$) 
${message.user.misc.farm === 4 ? "🔋" : "🔋"} 4. AvalonMiner 1166-68T 1000₿/час (800.000.000.000$)
${message.user.misc.farm === 5 ? "🔋" : "🔋"} 5. EBIT E10.6 15000₿/час (6.000.000.000.000$)
${message.user.misc.farm === 6 ? "🔋" : "🔋"} 6. Genesis Mining 175000₿/час (10.000.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`)

  let farmm = message.user.farmslimit - message.user.farms

  if (message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм (x${message.user.farmslimit}). ${smileerror}`)
  if (message.user.misc.farm != 0 && message.user.misc.farm != 3) return bot(`вы не можете купить ферму другого типа`)
  if (message.args[1] > farmm) return bot(`вы достигли лимита ферм. (x${utils.sp(message.user.farmslimit)}) ${smileerror}`)

  var pricefarms3 = 900000000 * message.args[1]
  if (message.user.balance < pricefarms3) return bot(`недостаточно денег ${smileerror}`)
  else if (message.user.balance >= pricefarms3) {
    message.user.balance -= pricefarms3
    message.user.misc.farm = 3

    if (message.user.misc.farm === 3) message.user.farms += Number(message.args[1])
    else {
      message.user.farms = Number(message.args[1])
    }

    return bot(`вы купили FM2018-BT200 (x${Number(message.args[1])}) за ${utils.sp(pricefarms3)}$ 
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`)
  }
})

gabella.bot(/^(?:фермы 4)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? "🔋" : "🔋"} 1. 6U Nvidia 2₿/час (20.500.000$) 
${message.user.misc.farm === 2 ? "🔋" : "🔋"} 2. AntminerS9 10₿/час (100.000.000$) 
${message.user.misc.farm === 3 ? "🔋" : "🔋"} 3. FM2018-BT200 100₿/час (900.000.000$) 
${message.user.misc.farm === 4 ? "🔋" : "🔋"} 4. AvalonMiner 1166-68T 1000₿/час (800.000.000.000$)
${message.user.misc.farm === 5 ? "🔋" : "🔋"} 5. EBIT E10.6 15000₿/час (6.000.000.000.000$)
${message.user.misc.farm === 6 ? "🔋" : "🔋"} 6. Genesis Mining 175000₿/час (10.000.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`)

  let farmm = message.user.farmslimit - message.user.farms

  if (message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм (x${message.user.farmslimit}). ${smileerror}`)
  if (message.user.misc.farm != 0 && message.user.misc.farm != 4) return bot(`вы не можете купить ферму другого типа`)
  if (message.args[1] > farmm) return bot(`вы достигли лимита ферм. (x${utils.sp(message.user.farmslimit)}) ${smileerror}`)

  var pricefarms4 = 800000000000 * message.args[1]
  if (message.user.balance < pricefarms4) return bot(`недостаточно денег ${smileerror}`)
  else if (message.user.balance >= pricefarms4) {
    message.user.balance -= pricefarms4
    message.user.misc.farm = 4

    if (message.user.misc.farm === 4) message.user.farms += Number(message.args[1])
    else {
      message.user.farms = Number(message.args[1])
    }

    return bot(`вы купили AvalonMiner 1166-68T (x${Number(message.args[1])}) за ${utils.sp(pricefarms4)}$ 
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`)
  }
})

gabella.bot(/^(?:фермы 5)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? "🔋" : "🔋"} 1. 6U Nvidia 2₿/час (20.500.000$) 
${message.user.misc.farm === 2 ? "🔋" : "🔋"} 2. AntminerS9 10₿/час (100.000.000$) 
${message.user.misc.farm === 3 ? "🔋" : "🔋"} 3. FM2018-BT200 100₿/час (900.000.000$) 
${message.user.misc.farm === 4 ? "🔋" : "🔋"} 4. AvalonMiner 1166-68T 1000₿/час (800.000.000.000$)
${message.user.misc.farm === 5 ? "🔋" : "🔋"} 5. EBIT E10.6 15000₿/час (6.000.000.000.000$)
${message.user.misc.farm === 6 ? "🔋" : "🔋"} 6. Genesis Mining 175000₿/час (10.000.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`)

  let farmm = message.user.farmslimit - message.user.farms

  if (message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм (x${message.user.farmslimit}). ${smileerror}`)
  if (message.user.misc.farm != 0 && message.user.misc.farm != 5) return bot(`вы не можете купить ферму другого типа`)
  if (message.args[1] > farmm) return bot(`вы достигли лимита ферм. (x${utils.sp(message.user.farmslimit)}) ${smileerror}`)

  var pricefarms5 = 6000000000000 * message.args[1]
  if (message.user.balance < pricefarms5) return bot(`недостаточно денег ${smileerror}`)
  else if (message.user.balance >= pricefarms5) {
    message.user.balance -= pricefarms5
    message.user.misc.farm = 5

    if (message.user.misc.farm === 5) message.user.farms += Number(message.args[1])
    else {
      message.user.farms = Number(message.args[1])
    }

    return bot(`вы купили EBIT E10.6 (x${Number(message.args[1])}) за ${utils.sp(pricefarms5)}$ 
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`)
  }
})

gabella.bot(/^(?:фермы 6)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? "🔋" : "🔋"} 1. 6U Nvidia 2₿/час (20.500.000$) 
${message.user.misc.farm === 2 ? "🔋" : "🔋"} 2. AntminerS9 10₿/час (100.000.000$) 
${message.user.misc.farm === 3 ? "🔋" : "🔋"} 3. FM2018-BT200 100₿/час (900.000.000$) 
${message.user.misc.farm === 4 ? "🔋" : "🔋"} 4. AvalonMiner 1166-68T 1000₿/час (800.000.000.000$)
${message.user.misc.farm === 5 ? "🔋" : "🔋"} 5. EBIT E10.6 15000₿/час (6.000.000.000.000$)
${message.user.misc.farm === 6 ? "🔋" : "🔋"} 6. Genesis Mining 175000₿/час (10.000.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`)

  let farmm = message.user.farmslimit - message.user.farms

  if (message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм (x${message.user.farmslimit}). ${smileerror}`)
  if (message.user.misc.farm != 0 && message.user.misc.farm != 6) return bot(`вы не можете купить ферму другого типа`)
  if (message.args[1] > farmm) return bot(`вы достигли лимита ферм. (x${utils.sp(message.user.farmslimit)}) ${smileerror}`)

  var pricefarms6 = 10000000000000 * message.args[1]
  if (message.user.balance < pricefarms6) return bot(`недостаточно денег ${smileerror}`)
  else if (message.user.balance >= pricefarms6) {
    message.user.balance -= pricefarms6
    message.user.misc.farm = 6

    if (message.user.misc.farm === 6) message.user.farms += Number(message.args[1])
    else {
      message.user.farms = Number(message.args[1])
    }

    return bot(`вы купили Genesis Mining (x${Number(message.args[1])}) за ${utils.sp(pricefarms6)}$ 
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`)
  }
})

gabella.bot(/^(?:бизнес 13|бизнесы 13)$/i, async (message, bot) => {
  const sell = businesses2.find(x => x.id === Number(1))
  if (!sell) return
  if (message.user.business2) return bot(`у Вас уже есть этот бизнес.`)

  if (message.user.materia < sell.cost) return bot(`вам нужно 1.500 материи для покупки. 🌌`)
  else if (message.user.materia >= sell.cost) {
    message.user.materia -= sell.cost
    message.user.business2 = sell.id
    message.user.bizlvl2 = 1
    message.user.business = true

    return bot(
      `вы успешно купили бизнес «${sell.name}». 👽
	1&#8419; Получить информацию о нём: "бизнес 2" 
	2&#8419; Забрать добытую материю: "бизнес снять 2"
	3&#8419; Продать бизнес: "продать бизнес 2"`,
      {
        attachment: sell.att
      }
    )
  }
})
gabella.bot(/^(?:бизнесы)\s(14)$/i, async (message, bot) => {
  if (message.user.settings.adm < 100) return bot(`Это донатный бизнес, для покупки напишите создателю.`)
  let user = users.find(x => x.id === Number(message.args[1]))
  if (!user) return bot(`Игрок не найден. ${smileerror}`)

  return bot(`дата регистрации ${user.tag}: ${user.regDate}`)
})

gabella.bot(/^(?:бизнесы|💼 Бизнесы|@gabellabot 💼 Бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`бизнесы:
🌳 1. Сервер в Minесrаft: 5 тыс $
Прибыль: 10$/час

🚓 2. Сервер в SАMР: 25 тыс $
Прибыль: 65$/час

👕 3. Joom: 100 тыс $
Прибыль: 150$/час

🕺 4. Ночной клуб: 3 млн $
Прибыль: 10.000$/час

🏪 5. Vapehab: 7 млн $
Прибыль: 25.000$/час

🚬 6. Кальянная: 25 млн $
Прибыль: 75.000$/час

🏩 7. PornHub: 80 млн $
Прибыль: 180.000$/час

👯 8. Бордель: 1 млрд $
Прибыль: 550.000$/час

🔫 9. Оружейный магазин: 5 млрд $
Прибыль: 120.000.000$/час

💹 10. Контора 1XBET: 50 млрд $
Прибыль: 500.000.000$/час

🚀 11. Межпланетный экспресс: 500 млрд $
Прибыль: 1.600.000.000$/час

🛰 12. Станция Роскосмос: 1 трлн $
Прибыль: 5.750.000.000$/час

🌌 13. Адронный коллайдер: 1.500 материи
🆘 Этот бизнес можно использовать как ВТОРОЙ.
Приносит: 80 материи/час.

🔋 14. Электростанция: 0 $
Прибыль: 15.750.500.000$/час

🔋 15. Атомная электростанция: 15.000 Звёздной пыли
🆘 Этот бизнес можно использовать как ТРЕТИЙ.
Прибыль: 120 Звёздной пыли /час

☄ 16. МАРС: 5 трлн $
Прибыль: 7.950.000.000$ /час

💡 Вы можете иметь только ОДИН обычный бизнес.
🛒 Для покупки введите "Бизнесы [номер]"`)

  const sell = businesses.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.business)
    return bot(`у Вас уже есть бизнес (${businesses[message.user.business - 1].name})! 🙌 
		чтобы продать его отправьте «Продать бизнес»`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= message.args[1]) {
    message.user.balance -= sell.cost
    message.user.business = sell.id
    message.user.bizlvl = 1

    return bot(`вы успешно купили «${sell.name}» за ${utils.sp(sell.cost)}$`)
  }
})

gabella.bot(/(?:Планеты 4)$/i, async (message, bot) => {
  return bot(
    `планета «Солнце» продаётся в лс у @id504991834(Создателя бота.)
🔥 Для покупки необходимо узнать номер Qivi кошелька и оплатить товар.

Это ЛУЧШАЯ планета, приносящая доход в 120 Звёздной пыли (120.000.000.000.000 $) в час 💯`,
    { attachment: "market-178396242_4518638" }
  )
})

gabella.bot(/^(?:Планеты)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`планеты:
☄ ①. Марс со спутниками — цена: 1.500 Звёздной пыли
Генерация: 2 ✨ в час

🌑 ②. Тёмная сторона луны — цена: 7.000 Звёздной пыли
Генерация: 5 ✨ в час

🌎 ③. Земля — цена: 10.000 Звёздной пыли
Генерация: 20 ✨ в час

☀ ④. Солнце — цена: 0 Звёздной пыли
Генерация: 500 ✨ в час


💡 Вы можете иметь только ОДНУ планету.
🛒 Для покупки введите "Планеты [номер]"`)

  const sell = planets.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.planet)
    return bot(`у Вас уже есть планета (${planets[message.user.planet - 1].name})! 🙌 
		чтобы продать его отправьте «Продать планету»`)

  if (message.user.zp < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.zp >= message.args[1]) {
    message.user.zp -= sell.cost
    message.user.planet = sell.id
    message.user.lvlplan = 1
    message.user.gen = 0

    return bot(`вы успешно купили «${sell.name}» за ${utils.sp(sell.cost)} ✨`)
  }
})

gabella.bot(/^(?:купить номер)$/i, async (message, bot) => {
  message.user.foolder += 1

  const operator1 = utils.random(2, 6)
  if (message.user.number > 9) return bot(`Вы уже имеете номер!`)
  if (!message.user.misc.phone) return message.send(`📱 >> У вас нет телефона.`)
  {
    var result = ""
    var words = "0123456789"
    var max_position = words.length - 1
    for (i = 0; i < 9; ++i) {
      position = Math.floor(Math.random() * max_position)
      result = result + words.substring(position, position + 1)
    }
    ;(message.user.balance -= 300), (message.user.number = result)
    message.user.numberss = true
    message.user.operator = operator1
    return message.send(
      `📱 || Вы успешно получили телефонный номер: +79${result} || Оператор: ${message.user.operator
        .toString()
        .replace(/2/gi, "Теле2")
        .replace(/3/gi, "Мегафон")
        .replace(/4/gi, "Билайн")
        .replace(/5/gi, "Yota")
        .replace(/5/gi, "Vk mobile")
        .replace(/6/gi, "Мтс")}`
    )
  }
})

gabella.bot(/^(?:питомец)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1]) return bot(``)

  const sell = pets.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.misc.pet) return bot(`у Вас уже есть питомец. ${smileerror}`)
  if (message.user.pet + message.args[1] > 12) return bot(`Ошибка. Выберите питомца "Питомец [1-12]" для покупки.`)

  if (message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`)
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.misc.pet = sell.id
    message.user.petlvl = 1
    message.user.petgolod = 10
    message.user.petradost = 5

    return bot(`вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень. ${smilesuccess}`)
  }
})

gabella.bot(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1]) return bot(``)

  const sell = businesses.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.business)
    return bot(`у Вас уже есть бизнес (${businesses[message.user.business - 1].name})! 🙌 
		чтобы продать его отправьте «Продать бизнес»`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= message.args[1]) {
    message.user.balance -= sell.cost
    message.user.business = sell.id
    message.user.bizlvl = 1

    return bot(
      `вы успешно купили бизнес «${sell.name}» ${smilesuccess}
			💰 Ваш баланс: ${utils.sp(message.user.balance)}$`,
      {
        attachment: sell.att
      }
    )
  }
})

gabella.bot(/^(?:страны)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`страны:
1. 🇷🇺 Россия — 1.000 $ 
2. 🇳🇪 Нигер — 50.000 $ 
3. 🇯🇵 Япония — 500.000 $ 
4. 🇩🇪 Германия — 2.000.000 $ 
5. 🇮🇹 Италия — 50.000.000 $ 
6. 🇫🇷 Франция — 500.000.000 $ 
7. 🇺🇦 Украина — 1.000.000.000 $ 
8. 🇬🇧 Англия — 5.000.000.000 $ 
9. 🇺🇸 США — 80.000.000.000 $ 
10. 🌴 Мальдивы — 300.000.000.000 $ 
11. 🏙 Дубай — 700.000.000.000 $ 

✈ Напиши «Перелёт [номер]», чтобы сменить место жительства 
📌 Например: "Перелёт 1"`)
})
gabella.bot(/^(?:перелет|перелёт)\s?([0-9]+)?$/i, async (message, bot) => {
  if (message.user.pet + message.args[1] > 11) return bot(`Ошибка. Выберите страну "перелет [1-11]".`)
  if (message.user.transport.airplane < 1)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет самолета.
	Список всех самолетов по команде: «самолеты» ✈`)
  if (!message.args[1]) return bot(``)

  const stran = strana.find(x => x.id === Number(message.args[1]))
  if (!stran) return

  if (message.user.balance < stran.cost) return bot(`Вам не хватает! Стоимость перелёта ${stran.att}   — ${utils.sp(stran.cost)}$ 😲`)
  else if (message.user.balance >= stran.cost) {
    message.user.balance -= stran.cost
    message.user.stran = message.args[1]
    return bot(
      `уважаемые пассажиры! Пристегните свои ремни, наш самолёт прямо сейчас приземляется ${stran.att}... Успешное приземление! 👏


Чтобы сменить место жительства, напиши "перелёт [номер]"`,
      { attachment: "photo-178396242_457239163" }
    )
  }
})

/*==========================================================================================================*/
/*=========================================================================================================*/
function progressQuest(user, id) {
  if (!("quests" in user))
    user.quests = quests.map(item => {
      return 0
    })

  if (user.quests[id] < quests[id].actions) {
    if (user.quests[id] + 1 == quests[id].actions) {
      user.balance += quests[id].reward
      user.quests[id] = quests[id].actions
      vk.api.messages.send({
        peer_id: user.id,
        message: `[id${user.id}|${user.tag}], поздравляем, Вы выполнили квест! ☺
✅ На ваш счет было зачислено ${utils.sp(quests[id].reward)}$`
      })
    } else user.quests[id]++
  }
}
function resetQuest(user, id) {
  if (!("quests" in user))
    user.quests = quests.map(item => {
      return 0
    })

  if (user.quests[id] < quests[id].actions) user.quests[id] = 0
}
/*==========================================================================================================*/
/*=========================================================================================================*/
gabella.bot(/^(?:fgknsdgnksgndnlnsg563t3lgfdnldgfn)$/i, (message, bot) => {
  if (!("quests" in message.user))
    message.user.quests = quests.map(item => {
      return 0
    })

  let lines = [`доступные квесты:`, ""]

  quests.map((quest, i) => {
    lines.push(`${message.user.quests[i] >= quest.actions ? "✅" : "❌"} ${i + 1}. ${quest.name} (${utils.sp(quest.reward)}$)`) //message.user.quests.filter( (current, j) => i == j )[0] >= quest.action
  })

  lines.push("", "🔑 Квесты обнуляются раз в 24 часа!")

  return bot(lines.join("\n"))
})

resetAtMidnight()

function resetAtMidnight() {
  var now = new Date()
  var night = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0)
  var msToMidnight = night.getTime() - now.getTime()

  setTimeout(function () {
    users.map(user => {
      user.quests = quests.map(item => {
        return 0
      })
    })
    resetAtMidnight()
  }, msToMidnight)
}

function left(stamp) {
  stamp = stamp / 1000
  let s = stamp % 60
  stamp = (stamp - s) / 60
  let m = stamp % 60
  stamp = (stamp - m) / 60
  let h = stamp % 24
  let d = (stamp - h) / 24
  let text = ``
  if (d > 0) text += Math.floor(d) + " д. "
  if (h > 0) text += Math.floor(h) + " ч. "
  if (m > 0) text += Math.floor(m) + " мин. "
  if (s > 0) text += Math.floor(s) + " секунд"
  return text
}
let pchats = []
function rand(x, y) {
  return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x)
}
function random(arr) {
  return arr[rand(arr.length - 1)]
}

gabella.bot(/^(?:одежда|одежды)$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(
      `одежда:
👘 1. Шмотки с АliЕxрrеss (5$)
👘 2. Шмотки с рынка (1.000$)
👘 3. Dеmix (10.000$)
👘 4. Рumа (300.000$)
👘 5. Rееbоk (300.000$)
👘 6. Nikе (500.000$)
👘 7. Аdidаs (1.000.000$)
👘 8. Аrmаni (100.000.000$)
👘 9. Vеrsасе (500.000.000$)
👘 10. Burbеrrу (1.000.000.000$)
👘 11. Rаlрh Lаurеn (10.000.000.000$)
👘 12. Сосо Сhаnеl (15.000.000.000$)
👘 13. Рrаdа (30.000.000.000$)
👘 14. Hеrmes (100.000.000.000$)
👘 15. TОMMY HILFIGЕR (500.000.000.000$)
👘 16. Stоnе Islаnd (1.000.000.000.000$)
👘 17. Supreme (2.500.000.000.000$)
👘 18. GUССI (5.000.000.000.000$)
👘 19. Lоuis Vuittоn (10.000.000.000.000$)
👘 20. Маска для вечеринки (100.000.000.000.000$)
😷 21. Медицинская маска (250.000.000.000.000$)

🛒 Для покупки введите "Одежда [номер]"`,
      { attachment: `photo-178396242_457239214` }
    )
})

gabella.bot(/^(?:одежда)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1]) return bot(`ddd`)

  const sell = odezdi.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.odezda)
    return bot(`у Вас уже есть одежда (${odezdi[message.user.odezda - 1].name})! 🙌 
		чтобы продать его отправьте «Продать одежду`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= message.args[1]) {
    message.user.balance -= sell.cost
    message.user.odezda = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/^(?:Кроссовки|кроссы)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Кроссовки: 
👟 1. Mizuno Hayate 4 (5$)
👟 2. Hoka OneOne (1.000$)
👟 3. Saucony peregrine 7 (10.000$)
👟 4. Asics roadhawk FF 2 (300.000$)
👟 5. ASICS ALPINE XT (300.000$)
👟 6. Mizuno wave horizon 2 (500.000$)
👟 7. Mizuno wave sky 2 (1.000.000$)
👟 8. Under Armour HOVR Sonic NC (100.000.000$)
👟 9. Under Armour Charged Bandit 3 (500.000.000$)
👟 10. Mizuno (1.000.000.000$)
👟 11. Mizuno Wave Shadow 2 (10.000.000.000$)
👟 12. Nike React (15.000.000.000$)
👟 13. Saucony Freedom ISO 2 (30.000.000.000$)
👟 14. Adidas Adizero Boston 7 (100.000.000.000$)

🛒 Для покупки введите "Кроссовки [номер]"`)

  const sell = kross.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.misc.kros) return bot(`у вас уже есть кроссовки (${kross[message.user.misc.kros - 1].name}), введите "Продать кроссовки"`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-178396242_3881560" })
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost
    message.user.misc.kros = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/^(?:кейс 1)?$/i, async (message, bot) => {
  if (message.user.balance < 5000000000000) return bot(`у Вас недостаточно денег ${smileerror}`)
  else if (message.user.balance >= 5000000000000) {
    message.user.balance -= 5000000000000
    message.user.surprise += 1

    saveUsers()
    return bot(`вы успешно купили "Деревяный Кейс" (1 шт.) 💰`, {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `🎁 Кейс открыть 1`
              },
              color: "positive"
            }
          ]
        ]
      })
    })
  }
})

gabella.bot(/^(?:кейс 2)?$/i, async (message, bot) => {
  if (message.user.balance < 30000000000000) return bot(`у Вас недостаточно денег ${smileerror}`)
  else if (message.user.balance >= 30000000000000) {
    message.user.balance -= 30000000000000
    message.user.platinium += 1

    return bot(`вы успешно купили "Алмазный Кейс" (1 шт.) 💰`, {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `🎁 Кейс открыть 2`
              },
              color: "positive"
            }
          ]
        ]
      })
    })
  }
})

gabella.bot(/^(?:кейс 4)?$/i, async (message, bot) => {
  if (message.user.balance < 500000000000000) return bot(`у Вас недостаточно денег ${smileerror}`)
  else if (message.user.balance >= 5000000000000) {
    message.user.balance -= 500000000000000
    message.user.GB += 1

    saveUsers()
    return bot(`вы успешно купили "GB Кейс" (1 шт.) 💰`, {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `🎁 Кейс открыть 4`
              },
              color: "positive"
            }
          ]
        ]
      })
    })
  }
})

gabella.bot(/(?:телевизор|Телевизоры|телик|телики)$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(
      `телевизоры:
💻 1. SONY (25.000$)
💻 2. LG 50UM7300 50 (50.000$)
💻 3. 3D телевизор (65.000$)
💻 4. Sony KD-65XG9505 64.5 (65.500$)
💻 5. JVC LT-24M585W 24 (67.030$)
💻 6. BenQ XL2540 (240 герц) (69.999$)
💻 7. Viewsonic VX2758-C-mh 27 (340гц) (73.500$)
💻 8. LG OLED65W9P (77.999$)
💻 9. Samsung QE65Q900RBU  (85.599$)

🛒 Для покупки введите "Телевизор [номер]"`,
      { attachment: `photo-178396242_457241282` }
    )
})
gabella.bot(/^(?:Телевизор)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1]) return bot(`ddd`)

  const sell = telivisors.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.telivisors)
    return bot(`у Вас уже есть телевизор (${telivisors[message.user.telivisors - 1].name})! 🙌 
		чтобы продать его отправьте «Продать телевизор`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-191800897_3881560" })
  else if (message.user.balance >= message.args[1]) {
    message.user.balance -= sell.cost
    message.user.telivisors = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/(?:Приставки|Плойки|плойка)$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(
      `приставки:
🎮 1. Xbox 360 (5$)
🎮 2. Xbox One (2.500$)
🎮 3. Xbox Series X (3.700$)
🎮 4. PlayStation 1 (5.555$)
🎮 5. PlayStation 2 (69.999$)
🎮 6. PlayStation 3 (75.777$)
🎮 7. PlayStation 4 (88.500$)
🎮 8. PlayStation 5 (99.999$)

🛒 Для покупки введите "Приставка [номер]"`,
      { attachment: `photo-178396242_457241284` }
    )
})
gabella.bot(/^(?:Приставка)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1]) return bot(`ddd`)

  const sell = pristavkas.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.pristavkas)
    return bot(`у Вас уже есть приставка (${pristavkas[message.user.pristavkas - 1].name})! 🙌 
		чтобы продать её отправьте «Продать приставку`)

  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег ${smileerror}`, { attachment: "market-191800897_3881560" })
  else if (message.user.balance >= message.args[1]) {
    message.user.balance -= sell.cost
    message.user.pristavka = sell.id

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smilesuccess}`, {
      attachment: sell.att
    })
  }
})

gabella.bot(/^(?:Коктейли|Коктейль|коктели|коктель)\s?([0-9]+)?$/i, async (message, bot) => {
  if (message.user.settings.adm < 8) return bot(`В разработке.`)
  if (!message.args[1])
    return bot(`список волшебных коктелей: 
	
1. 🏷 Коктейль удачи — 10.000.000.000.000 $ (5 минут)
2. 🧿 Коктейль порчи — 5.000.000.000.000 $ (20 минут)
3. 🔋 Коктейль энергии — 15.000.000.000.000 $ (10 минут)
4. ❌ Коктейль противоядия — 500.000.000.000 $ (Снимает волшебный Коктейль)
   
   🛒 Купить: "Коктейль (1-4)"`)

  const sell = palochka.find(x => x.id === Number(message.args[1]))
  if (!sell) return
  if (message.user.balance < sell.cost) return bot(`у Вас недостаточно денег!`)
  if (message.user.palochka != 0) return bot(`вы уже под действием волшебного коктеля `)
  //нужно сделать чтоб если Коктейль =0, и пользователь пишет Коктейль 4, то ответ идет что на вас нет волшебного коктеля.
  if (message.args[1] > 4) return bot(`введите номер коктеля от 1 до 3`)
  else if (message.user.balance >= message.args[1]) {
    message.user.balance -= sell.cost
    message.user.koktel = sell.id
    setTimeout(() => {
      message.user.koktel = 0
    }, 600000)

    return bot(`вы успешно выпили "${sell.name}" за ${utils.sp(sell.cost)}$ 🍸`)
  }
})

/*setInterval(async () => {
users.filter(x=> x.koktel === 1).map(x=> {
x.bossyr += 0;
});
}, 180000); (5 мин надо)

setInterval(async () => {
users.filter(x=> x.koktel === 3).map(x=> {
x.energy += 2;
});
}, 180000); (2 мин)
setInterval(async () => {
users.filter(x=> x.koktel === 3).map(x=> {
x.koktel = 0;
});
}, 180000); (10 мин)*/

gabella.bot(/^(?:семена)$/i, async (message, bot) => {
  if (message.user.settings.adm < 8) return bot(`В разработке.`)
  return bot(`семена для посадки:

1. 🌻 Подсолнух — 200 млн $
⠀⠀• Время роста: 7 мин.
⠀⠀• Продажа: 250 млн $

2. 🌶 Перец — 20 млрд $
⠀⠀• Время роста: 30 мин.
⠀⠀• Продажа: 25 млрд $

3. 🍓 Клубника — 700 млрд $
⠀⠀• Время роста: 50 мин.
⠀⠀• Продажа: 710 млдр $

4. 🍌 Банан — 1.5 трлн $
⠀⠀• Время роста: 1 час 30 мин.
⠀⠀• Продажа: 2 трлн $

5. 🥑 Авокадо — 5 трлн $
⠀⠀• Время роста: 3 часа
⠀⠀• Продажа: 8 трлн $

6. 🍉 Арбуз — 20 трлн $
⠀⠀• Время роста: 5 часов
⠀⠀• Продажа: 28 трлн $

7. 🍇 Виноград — 50 трлн $
⠀⠀• Время роста: 15 часов
⠀⠀• Продажа: 65 трлн $

8. 🍀 Мариуана — 100 трлн $
⠀⠀• Время роста: 1 день
⠀⠀• Продажа: 140 трлн $

🎒 Мои семена: "мешок"
🧺 Купить: "семена {номер} {кол-во}"`)
})
gabella.bot(/^(?:мешок|мой мешок)$/i, async (message, bot) => {
  if (message.user.settings.adm < 8) return bot(`В разработке.`)
  if (
    message.user.podsolnih < 1 &&
    message.user.perec < 1 &&
    message.user.klybnika < 1 &&
    message.user.banan < 1 &&
    message.user.avokado < 1 &&
    message.user.arbiz < 1 &&
    message.user.vinograd < 1 &&
    message.user.mariyana < 1
  )
    return bot(`У вас нет семян. ${smileerror}`)
  let text = `ваши семена:`
  if (message.user.podsolnih)
    text += `🌻 Подсолнух: ${utils.sp(message.user.podsolnih)}
	• Выростить: семена посадить 1\n`
  if (message.user.perec)
    text += `🌶 Перец: ${utils.sp(message.user.perec)}
	• Выростить: семена посадить 2\n`
  if (message.user.klybnika)
    text += `🍓 Клубника: ${utils.sp(message.user.klybnika)}
	• Выростить: семена посадить 3\n`
  if (message.user.banan)
    text += `🍌 Банан: ${utils.sp(message.user.banan)}
	• Выростить: семена посадить 4\n`
  if (message.user.avokado)
    text += `🥑 Авокадо: ${utils.sp(message.user.avokado)}
	• Выростить: семена посадить 5\n`
  if (message.user.arbiz)
    text += `🍉 Арбуз: ${utils.sp(message.user.arbiz)}
	• Выростить: семена посадить 6\n`
  if (message.user.vinograd)
    text += `🍇 Виноград: ${utils.sp(message.user.vinograd)}
	• Выростить: семена посадить 7\n`
  if (message.user.mariyana)
    text += `🍀 Мариуана: ${utils.sp(message.user.mariyana)}
	• Выростить: семена посадить 8\n`

  return bot(text)
})

gabella.bot(/(?:вертолет)/i, async message => {
  const hel = helicopters.find(x => x.id === message.user.transport.helicopter)
  if (!message.user.transport.helicopter)
    return message.send(`[id${message.user.id}|${message.user.tag}], у Вас нет вертолета.
Список всех машин по команде: вертолеты 🚁`)
  return message.send(
    `[id${message.user.id}|${message.user.tag}], ваш вертолет: ${helicopters[message.user.transport.helicopter - 1].name}

☄ Чтобы иследовать космос, напиши "космос поход"`,
    {
      attachment: `${hel.att}`,
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: `☄ Космос поход`
              },
              color: "positive"
            }
          ]
        ]
      })
    }
  )
})
/*==========================================================================================================*/
/*===================================КНОПКИ=================================================================*/
gabella.bot(/(?:клан помощь|кпомощь| клан|клан | клан |клан)$/i, async (message, bot) => {
  return bot(`команды для клана:

🏹 Мой клан:
⠀⠀🔥 Клан
⠀⠀💰 Клан казна
⠀⠀⚔ Клан атака
⠀⠀💸 Клан цена
⠀⠀✒ Клан название
⠀⠀🛍 Клан магазин
⠀⠀🔓 Клан открыть/Клан закрыть
⠀⠀❌ Клан удалить
⠀⠀💸 Бонус клан

⚔ Топ кланы
📚 Кпомощь
🏹 Клан создать
🔔 Оповещения [вкл/выкл]

👤 Участники:
⠀⠀👥 Клан состав
⠀⠀🚪 Клан вступить
⠀⠀🗣 Клан пригласить
⠀⠀⏫ Клан Повысить/Понизить
⠀⠀🏃‍♂ Клан кик
⠀⠀❌ Клан Покинуть

🅰 Админ в клане может приглашать и исключать игроков, изменять клан, проводить атаки.

📜 Модератор в клане может изменять название, исключать игроков.`)
})
gabella.bot(/^(?:кнопка)\s([^]+)$/i, async (message, bot) => {
  if (message.isChat) return bot(`команда работает только в ЛС. 🔁`)
  let zaprets1 = message.args[1].toLowerCase()
  var zapret =
    /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние|vto.pe|создатель)/
  var sss = zapret.test(zaprets1)

  if (zapret.test(zaprets1) == true || message.args[1].toLowerCase() === "") {
    var check = true
    return bot(`вы используете запрещенные слова/символы, ссылки и нецензурная брань запрещены.\n\n😉 Придумайте другую кнопку.`)
  }
  let text = message.args[1].toLowerCase()
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
  var lol = filter0.test(text)
  var lol1 = filter1.test(text)

  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true
    return bot(`подозрительная ссылка 🆘`)
  }
  if (message.chatId) {
    let conver = convers.find(x => x.cid === message.chatId)
    if (!conver) {
      convers.push({
        id: convers.length + 1,
        cid: message.chatId,
        buttoncount: 0,
        button: []
      })
      conver = convers.find(x => x.cid === message.chatId)
    }

    if (message.args[1].toLowerCase() === "удалить") {
      conver.buttoncount = 0
      conver.button = []
      return vk.api.messages.send({
        chat_id: message.chatId,
        message: `[id${message.user.id}|${message.user.tag}], вы очистили все кнопки!
				🔁 Для добавления новых используйте: Кнопка [Текст]
				&#10133; Что бы включить стандартные кнопки используйте: Кнопка стандарт`,
        keyboard: Keyboard.keyboard([])
      })
    }

    if (conver.button.length >= 40)
      return bot(`[id${message.user.id}|${message.user.tag}], ваше поле заполнено! (40/40)
		🔁 Для очистки поля используйте: Кнопка удалить
		&#10133; Что бы включить стандартные кнопки используйте: Кнопка стандарт`)

    conver.button.push(message.args[1])

    await vk.api.messages.send({
      chat_id: message.chatId,
      message: `[id${message.user.id}|${message.user.tag}], кнопка успешно добавлена!`,
      keyboard: generateKeyboard(conver.button)
    })
  } else {
    if (message.args[1].toLowerCase() === "удалить") {
      message.user.buttoncount = 0
      message.user.button = []
      return vk.api.messages.send({
        peer_id: message.user.id,
        message: `[id${message.user.id}|${message.user.tag}], вы удалили все кнопки!
				🔁 Для добавления новых используйте: Кнопка [Текст]
				&#10133; Что бы включить стандартные кнопки используйте: Кнопка стандарт`,
        keyboard: Keyboard.keyboard([])
      })
    }

    if (message.user.button == undefined) message.user.button = []
    message.user.button.push(message.args[1])

    await vk.api.messages.send({
      peer_id: message.user.id,
      message: `[id${message.user.id}|${message.user.tag}], кнопка успешно добавлена!
			🔁 Для удаления всех кнопок используйте: Кнопка удалить
			&#10133; Что бы включить стандартные кнопки используйте: Кнопка стандарт`,
      keyboard: generateKeyboard(message.user.button)
    })
  }
})
gabella.bot(/(?:Перечень команд)$/i, async (message, bot) => {
  return bot(`💰 Заработок:
⠀⠀💼 Бизнес - статистика о вашем простом бизнесе
⠀⠀📜 Бизнес снять - снять прибыль с простого бизнеса
⠀⠀📄 Бизнес 2 - статистика второго бизнеса
⠀⠀📃 Бизнес снять 2 - снять прибыль со свторого бизнеса
⠀⠀📰 Бизнес 3 - статистика третьего бизнеса
⠀⠀🔋 Бизнес снять 3 - снять прибыль с третьего бизнеса

⠀⠀🖨 Принтер - статистика принтера
⠀⠀💸 Принтер снять - снять прибыль с принтера

⠀⠀🌏 Планета - статистика планеты
⠀⠀🚀 Планета собрать - снять прибыль с планеты

⠀⠀🗞 Ферма - статистика вашей фермы
⠀⠀💽 Ферма снять - снять биткоини с фермы

⠀⠀📷 Ютуб
⠀⠀🧛🏻‍‍♂ Вампиризм
⠀⠀💱 Курс
⠀⠀🌻 Фортуна
⠀⠀🥛 Стаканчик [1-3] [сумма]
⠀⠀🔦 Сейф [число 10-99]
⠀⠀🧳 Кейсы
⠀⠀🔫 Тир [1-3] [сумма]

⠀⠀💳 Пенсия - статистика о вашей пенсии
⠀⠀🌍 Пенсия снять - снять заработок пенсии

🌽 Питомцы:
⠀⠀🐒 Питомцы - список питомцев
⠀⠀🐪 Питомец поход
⠀⠀🦁 Питомец - информация о вашем питомце
⠀⠀🎪 Питомец цирк 

💡 Разное:
⠀⠀🌅 Погода [город] - погода в городе
⠀⠀👥 Реф
⠀⠀💖 Брак
⠀⠀📒 Профиль
⠀⠀💲 Баланс
⠀⠀💎 Бонус - ежедневный бонус
⠀⠀💰 Банк [сумма/снять сумма]
⠀⠀👑 Рейтинг - ваш рейтинг
⠀⠀🎮 Ник [ник/вкл/выкл]
⠀⠀🛒 Магазин - товары
⠀⠀🤝 Передать/передать рейтинг [ID игрока] [сумма]
⠀⠀⚔ Клан команды
⠀⠀💸 Продать [предмет] [кол-во]
⠀⠀🛍 Донат
⠀⠀🔝 Топ - список доступных топов
⠀⠀💬 Рассылка выкл/вкл - включить или выключить уведомления о рассылках
⠀⠀✅ Кто я - статистика о вашем аккаунте в боте
⠀⠀🚨 Кто ты [ссылка/VKID] - статистика о аккаунте игрока в боте
⠀⠀🆔 Ид [ссылка/упоминание без '*' и '@'] - узнать игровой и цифровой ид игрока 
⠀⠀📖 Вк ид [ссылка/упоминание без '*' и '@'] - узнать игровой и цифровой ид пользователя 
⠀⠀📱 Габелла Яндекс [запрос] - найти в яндексе
⠀⠀💬 Габелла Вики [запрос] - узнать информацию в Википедии
⠀⠀📕 габелла Ютуб [запрос] - найти в ютубе⠀⠀
⠀⠀❓ Мой ид - узнать игровой и цифровой ид 

🍀 Развлекательные:
⠀⠀💅🏻 Донаты - список донатов за донат валюту
⠀⠀📜 Инфо о боте - информация
⠀⠀😹 Анекдот
⠀⠀📜 Цитата 
⠀⠀📖 Переверни [фраза]
⠀⠀💬 Выбери [фраза] или [фраза2]
⠀⠀⏳ Шар [фраза]
⠀⠀❓ Когда [текст]
⠀⠀💬 СМС [ID] [сообщение]
⠀⠀🎩 Мэр - мэр бота
⠀⠀🚀 Космос поход - слетать в космос
⠀⠀🦠 Заразить [id] - заражать игроков своими болезнями!
⠀⠀👥 Кто [текст]

🏁  О машинах:
⠀⠀🏎 Гонка - начать заезд на машинах
⠀⠀🚗 Машины - список машин для покупки 
⠀⠀🚜 Машина - ваша машина
⠀⠀🏆 Топ кубки - топ гонщиков на машинах

🚀 Игры:
⠀⠀🦠 Вирус
⠀⠀🍂 Копать - список руды которую можно копать
⠀⠀🎲 Кубик [число 1-6]
⠀⠀🔮 Казино [сумма]
⠀⠀📈 Трейд [вверх/вниз] [сумма]
⠀⠀🐠 Дайвинг
⠀⠀🏹 Охота
⠀⠀🗳 Бочка
⠀⠀🚕 Таксовать
⠀⠀🌲 Поход
⠀⠀🎲 Рубик [число 1-6] - кубик на рейтинг
⠀⠀🎰 Разик [сумма] - казино на рейтинг
⠀⠀👮 Взломать
⠀⠀🎰 Казино [сумма]
⠀⠀✈ Перелет [номер] - перелететь в другую страну
⠀⠀💒 Страны - узнать список доступных стран

 📝  О работах:
⠀⠀🚫 Работа уволиться - уволиться с работы
⠀⠀🎓 Работа - статистика о работе
⠀⠀⏱ Работать - работать на работе сутки
⠀⠀🏘 Работы - список работ
⠀⠀🌐 Работа устроиться [номер] - устроиться на работу

🤖 Города:
⠀⠀🗾 Город - Информация о вашем городе		
⠀⠀🌍 Город создать [название] - создать город
⠀⠀🗺 Город название [название] - изменить название
⠀⠀🚫 Город удалить - удалить город
⠀⠀💰 Город налоги - собрать дать с города
⠀⠀🆕 Город пиар - пиар вашего города
⠀⠀🆓 Город реклама - реклама вашего города
⠀⠀💕 Город респект [ID] - поставить лайк городу друга`)
})
gabella.bot(/(?:начать|команды)/i, async (message, bot) => {
  message.user.foolder += 1
  return bot(
    `Список помощи на панели.

🏌 Как создать свою беседу - vk.com/topic-178396242_40180468
❓ Ответы на вопросы - vk.com/topic-178396242_40180458
🎲 Список помощи всем текстом  - Перечень команд
🚫 Правила - vk.com/topic-178396242_40180454`,
    {
      keyboard: JSON.stringify({
        one_time: false,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "💰 Заработок"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "3"}',
                label: "🤖 О городе"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🚀 Игры"
              },
              color: "default"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🏁  О машинах"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🍀 Развлекательные"
              },
              color: "default"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "💡 Разное"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🌽 О питомцах"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🆘 Дополнения"
              },
              color: "default"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🤹‍♂ О работах"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "Перечень команд"
              },
              color: "default"
            }
          ]
        ]
      })
    }
  )
})
gabella.bot(/(?:о питомцах)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], 🌽 Питомцы:
⠀⠀🐒 Питомцы - список питомцев
⠀⠀🐪 Питомец поход
⠀⠀🦁 Питомец - информация о вашем питомце
⠀⠀🎪 Питомец цирк 


❓ Выберите настройку для кнопок.`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🗞 Кнопки стандарт"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "✖ Кнопки выкл"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/(?:разное)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], 💡 Разное:
⠀⠀🌅 Погода [город] - погода в городе
⠀⠀👥 Реф
⠀⠀💖 Брак
⠀⠀📒 Профиль
⠀⠀💲 Баланс
⠀⠀💎 Бонус - ежедневный бонус
⠀⠀💰 Банк [сумма/снять сумма]
⠀⠀👑 Рейтинг - ваш рейтинг
⠀⠀🎮 Ник [ник/вкл/выкл]
⠀⠀🛒 Магазин - товары
⠀⠀🤝 Передать/передать рейтинг [ID игрока] [сумма]
⠀⠀🔝 Топ рейтинг
⠀⠀⚔ Клан команды
⠀⠀💸 Продать [предмет] [кол-во]
⠀⠀🛍 Донат
⠀⠀🔝 Топ - список доступных топов
⠀⠀💬 Рассылка выкл/вкл - включить или выключить уведомления о рассылках
⠀⠀✅ Кто я - статистика о вашем аккаунте в боте
⠀⠀🚨 Кто ты [ссылка/VKID] - статистика о аккаунте игрока в боте
⠀⠀🆔 Ид [ссылка/упоминание без '*' и '@'] - узнать игровой и цифровой ид игрока 
⠀⠀📖 Вк ид [ссылка/упоминание без '*' и '@'] - узнать игровой и цифровой ид пользователя 
⠀⠀📱 Габелла Яндекс [запрос] - найти в яндексе
⠀⠀💬 Габелла Вики [запрос] - узнать информацию в Википедии
⠀⠀📕 габелла Ютуб [запрос] - найти в ютубе⠀⠀
⠀⠀❓ Мой ид - узнать игровой и цифровой ид 

❓ Выберите настройку для кнопок.`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🗞 Кнопки стандарт"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "✖ Кнопки выкл"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/(?:Развлекательные)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], 🍀 Развлекательные:
⠀⠀💅🏻 Донаты - список донатов за донат валюту
⠀⠀📜 Инфо о боте - информация
⠀⠀😹 Анекдот
⠀⠀📜 Цитата 
⠀⠀📖 Переверни [фраза]
⠀⠀💬 Выбери [фраза] или [фраза2]
⠀⠀⏳ Шар [фраза]
⠀⠀❓ Когда [текст]
⠀⠀💬 СМС [ID] [сообщение]
⠀⠀📠 Реши [1+2/3*4] - калькулятор
⠀⠀🎩 Мэр - мэр бота
⠀⠀🚀 Космос поход - слетать в космос
⠀⠀🦠 Заразить [id] - заражать игроков своими болезнями!
⠀⠀👥 Кто [текст]

❓ Выберите настройку для кнопок.`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🗞 Кнопки стандарт"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "✖ Кнопки выкл"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})
gabella.bot(/(?:о машинах)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], 🏁  О машинах:
⠀⠀🏎 Гонка - начать заезд на машинах
⠀⠀🚗 Машины - список машин для покупки 
⠀⠀🚜 Машина - ваша машина
⠀⠀🏆 Топ кубки - топ гонщиков на машинах

❓ Выберите настройку для кнопок.`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🗞 Кнопки стандарт"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "✖ Кнопки выкл"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/(?:игры)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], 🚀 Игры:
⠀⠀🦠 Вирус
⠀⠀🍂 Копать - список руды которую можно копать
⠀⠀🎲 Кубик [число 1-6]
⠀⠀🔮 Казино [сумма]
⠀⠀📈 Трейд [вверх/вниз] [сумма]
⠀⠀🐠 Дайвинг
⠀⠀🏹 Охота
⠀⠀🗳 Бочка
⠀⠀🚕 Таксовать
⠀⠀🌲 Поход
⠀⠀🎲 Рубик [число 1-6] - кубик на рейтинг
⠀⠀🎰 Разик [сумма] - казино на рейтинг
⠀⠀👮 Взломать
⠀⠀🎰 Казино [сумма]
⠀⠀✈ Перелет [номер] - перелететь в другую страну
⠀⠀💒 Страны - узнать список доступных стран

❓ Выберите настройку для кнопок.`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🗞 Кнопки стандарт"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "✖ Кнопки выкл"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/(?:о работах)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], 📝  О работах:
⠀⠀🚫 Работа уволиться - уволиться с работы
⠀⠀🎓 Работа - статистика о работе
⠀⠀⏱ Работать - работать на работе сутки
⠀⠀🏘 Работы - список работ
⠀⠀🌐 Работа устроиться [номер] - устроиться на работу

❓ Выберите настройку для кнопок.`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🗞 Кнопки стандарт"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "✖ Кнопки выкл"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/(?:о городе)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], 🤖 Города:
⠀⠀🗾 Город - Информация о вашем городе		
⠀⠀🌍 Город создать [название] - создать город
⠀⠀🗺 Город название [название] - изменить название
⠀⠀🚫 Город удалить - удалить город
⠀⠀💰 Город налоги - собрать дать с города
⠀⠀🆕 Город пиар - пиар вашего города
⠀⠀🆓 Город реклама - реклама вашего города
⠀⠀💕 Город респект [ID] - поставить лайк городу друга

❓ Выберите настройку для кнопок.`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🗞 Кнопки стандарт"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "✖ Кнопки выкл"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/(?:Заработок)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], 💰 Заработок: 
⠀⠀💼 Бизнес - статистика о вашем простом бизнесе
⠀⠀📜 Бизнес снять - снять прибыль с простого бизнеса
⠀⠀📄 Бизнес 2 - статистика второго бизнеса
⠀⠀📃 Бизнес снять 2 - снять прибыль со свторого бизнеса
⠀⠀📰 Бизнес 3 - статистика третьего бизнеса
⠀⠀🔋 Бизнес снять 3 - снять прибыль с третьего бизнеса

⠀⠀🖨 Принтер - статистика принтера
⠀⠀💸 Принтер снять - снять прибыль с принтера

⠀⠀🌏 Планета - статистика планеты
⠀⠀🚀 Планета собрать - снять прибыль с планеты

⠀⠀🗞 Ферма - статистика вашей фермы
⠀⠀💽 Ферма снять - снять биткоини с фермы

⠀⠀📷 Ютуб
⠀⠀🧛🏻‍‍♂ Вампиризм
⠀⠀💱 Курс
⠀⠀🌻 Фортуна
⠀⠀🥛 Стаканчик [1-3] [сумма]
⠀⠀🔦 Сейф [число 10-99]
⠀⠀🧳 Кейсы
⠀⠀🔫 Тир [1-3] [сумма]

⠀⠀💳 Пенсия - статистика о вашей пенсии
⠀⠀🌍 Пенсия снять - снять заработок пенсии

❓ Выберите настройку для кнопок.`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🗞 Кнопки стандарт"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "✖ Кнопки выкл"
                },
                color: "default"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})
gabella.bot(/(?:Кнопки стандарт)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], включены стандартные кнопки. 👍
🔓 Для отключения кнопок, введите «Кнопки выкл»
	`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🌙 Бизнес"
                },
                color: "primary"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "3"}',
                  label: "🧸 Ферма"
                },
                color: "primary"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🤑 Бонус"
                },
                color: "primary"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📚 О работах"
                },
                color: "negative"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})
gabella.bot(/^(?:кнопки)$/i, async (message, bot) => {
  await bot(` использование: «кнопки вкл/выкл»
📜 чтобы включить/выключить кнопки.`)
})

gabella.bot(/(?:перейти к боту|@gabellabot Перейти к боту)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}],  Вы успешно вышли из терменала [Донат].
	`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🌙 Бизнес"
                },
                color: "primary"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "3"}',
                  label: "🧸 Ферма"
                },
                color: "primary"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🤑 Бонус"
                },
                color: "primary"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📚 О работах"
                },
                color: "negative"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/(?:кнопки выкл)$/i, async (message, bot) => {
  if (message.chatId === 1384) return bot(`кнопки не могут быть отключены в админ беседе! ${smileerror}`)
  bot(`кнопки выключены!`, {
    keyboard: JSON.stringify({
      one_time: true,
      buttons: []
    })
  })
  return
})

gabella.bot(/^(?:Кнопки вкл)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}],  кнопки включены. 👍
🔓 Для отключения кнопок, введите «Кнопки выкл»
	`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🌙 Бизнес"
                },
                color: "primary"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "3"}',
                  label: "🧸 Ферма"
                },
                color: "primary"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🤑 Бонус"
                },
                color: "primary"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📚 О работах"
                },
                color: "negative"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})
gabella.bot(/^(?:Кнопка стандарт)$/i, message => {
  {
    if (user.full == false) return
    return message.send(
      `[id${message.user.id}|${message.user.tag}], включены стандартные кнопки. 👍
🔓 Для отключения кнопок, введите «Кнопки выкл»
	`,
      {
        keyboard: JSON.stringify({
          one_time: false,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🌙 Бизнес"
                },
                color: "primary"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "3"}',
                  label: "🧸 Ферма"
                },
                color: "primary"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "🤑 Бонус"
                },
                color: "primary"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📚 О работах"
                },
                color: "negative"
              },
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "📔 Команды"
                },
                color: "default"
              }
            ],
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "2"}',
                  label: "Перечень команд"
                },
                color: "default"
              }
            ]
          ]
        })
      }
    )
  }
})

gabella.bot(/^(?:помощь)$/i, async (message, bot) => {
  message.user.foolder += 1
  return bot(
    `Список помощи на панели.

🏌 Как создать свою беседу - vk.com/topic-178396242_40180468
❓ Ответы на вопросы - vk.com/topic-178396242_40180458
🎲 Список помощи - https://vk.com/topic-178396242_46299651
🚫 Правила - vk.com/topic-178396242_40180454`,
    {
      keyboard: JSON.stringify({
        one_time: false,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "💰 Заработок"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "3"}',
                label: "🤖 О городе"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🚀 Игры"
              },
              color: "default"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🏁  О машинах"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🍀 Развлекательные"
              },
              color: "default"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "💡 Разное"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🌽 О питомцах"
              },
              color: "default"
            },
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🆘 Дополнения"
              },
              color: "default"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "🤹‍♂ О работах"
              },
              color: "default"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: '{"button": "2"}',
                label: "Перечень команд"
              },
              color: "default"
            }
          ]
        ]
      })
    }
  )
})
/*==========================================================================================================*/
/*===================================ГРИП=================================================================*/
gabella.bot(/(?:грипп атака)$/i, async (message, bot) => {
  if (message.user.virus == true) return bot(`игра уже начата`)
  let text = ``

  message.user.virus = true
  message.user.zaraj = 1
  message.user.vak = 0
  message.user.zaraj_lvl = 1
  message.user.zarajtime = 0
  message.user.vtype = utils.pick(["Коронавирус", "Чума", "Оспа"])
  if (message.user.vtype == "Оспа") {
    text = `⚠ Вам достался опасный и сложный грипп!
❗ Постарайтесь не проиграть`
  }
  if (message.user.vtype == "Чума") {
    text = `⚠ Вам достался опасный и сложный грипп!
❗ Постарайтесь не проиграть`
  }

  bot(
    `💊 Началось заражение болезни "${message.user.vtype}"
Первый заражённый уже есть 🧬

Цель заразить ВЕСЬ МИР!
Людей в мире: 7.836.093.656

${text}`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `💉 Грипп улучшить`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `😷 Грипп заразить`
              },
              color: "primary"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `☣ Грипп статистика`
              },
              color: "negative"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `🧪 Грипп вакцина`
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
  message.sendSticker(18563)
})

gabella.bot(/(?:грипп вакцина)$/i, async (message, bot) => {
  if (message.user.virus !== true) return bot(`игра не начата`)
  if (message.user.vak < 10) return bot(`Сейчас минимальный процент разработки вакцины`)
  if (message.user.balance < 150000000000)
    return bot(`Недостаточно денег 💲
💰 Вам ещё надо ${utils.sp(message.user.balance - 150000000000)}`)

  message.user.balance -= 150000000000
  message.user.vak -= 3

  return bot(
    `🦠 Разработка вакцины уменьшилась
✅ Статистика гриппа:
☣ Болезнь: ${message.user.vtype}
😷 Зараженных: ${utils.sp(message.user.zaraj)} из 7.836.093.656
💊 Вакцина изобретена на ${message.user.vak}%`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `💉 Грипп улучшить`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `😷 Грипп заразить`
              },
              color: "primary"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `☣ Грипп статистика`
              },
              color: "negative"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `🧪 Грипп вакцина`
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:грипп улучшить)$/i, async (message, bot) => {
  if (message.user.virus !== true) return bot(`игра не начата`)
  if (message.user.balance < 10000000000)
    return bot(`Недостаточно денег 💲
💰 Вам ещё надо ${utils.sp(message.user.balance - 10000000000)}`)

  message.user.balance -= 10000000000
  message.user.zaraj_lvl += 1

  return bot(
    `🦠 Распространение болезни улучшилось и стало намного быстрее!
✅ Статистика болезни:
☣ Болезнь: ${message.user.vtype}
😷 Зараженных: ${utils.sp(message.user.zaraj)} из 7.836.093.656
💊 Вакцина изобретена на ${message.user.vak}%`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `💉 Грипп улучшить`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `😷 Грипп заразить`
              },
              color: "primary"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `☣ Грипп статистика`
              },
              color: "negative"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `🧪 Грипп вакцина`
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:Грипп)$/i, async (message, bot) => {
  return message.send(
    `Команды болезни:
💉 Грипп атака - начать заражение
🚩 Грипп сдаться - закончить игру
😷 Грипп заразить - заразить случайного человека в мире
⬆ Грипп улучшить - ускорить заражение (стоимость 10.000.000.000$)
💊 Грипп вакцина - убрать 3% разработки вакцины (стоимость 150.000.000.000$)
ℹ Грипп статистика - Статистика болезни`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `☣ Грипп статистика`
              },
              color: "negative"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `✅ Грипп атака`
              },
              color: "positive"
            }
          ]
        ]
      })
    }
  )
})

gabella.bot(/(?:Грипп сдаться)$/i, async (message, bot) => {
  if (message.user.virus !== true) return bot(`игра не начата`)

  message.user.virus = false

  return bot(
    `🚫 Игра закончена
✅ Ваш результат:
☣ Болезнь: ${message.user.vtype}
😷 Зараженных: ${utils.sp(message.user.zaraj)} из 7.836.093.656
💊 Вакцина изобретена на ${message.user.vak}%`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `✅ Грипп атака`
              },
              color: "positive"
            }
          ]
        ]
      })
    }
  )
})

setInterval(async () => {
  users
    .filter(x => x.vak > 0)
    .map(x => {
      if (x.virus == true) {
        if (x.vtype == "Оспа") {
          x.vak += 2
        } else {
          x.vak += 1
        }
      }
    })
}, 70000)
setInterval(async () => {
  users
    .filter(x => x.vak > 0)
    .map(x => {
      if (x.virus == true) {
        if (x.vtype == "Чума") {
          x.vak += 5
        } else {
          x.vak += 4
        }
      }
    })
}, 70000)

gabella.bot(/(?:Грипп статистика)$/i, async (message, bot) => {
  if (message.user.virus !== true) return bot(`игра не начата`)
  return bot(
    `✅ Статистика болезни:
☣ Болезнь: ${message.user.vtype}
😷 Зараженных: ${utils.sp(message.user.zaraj)} из 7.836.093.656
💊 Вакцина изобретена на ${message.user.vak}%`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `💉 Грипп улучшить`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `😷 Грипп заразить`
              },
              color: "primary"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `☣ Грипп статистика`
              },
              color: "negative"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `🧪 Грипп вакцина`
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
})

setInterval(async () => {
  users
    .filter(x => x.zaraj > 1)
    .map(x => {
      if (x.virus == true) {
        x.zaraj += x.zaraj_lvl
      }
    })
}, 10000)

gabella.bot(/(?:грипп заразить)$/i, async (message, bot) => {
  if (message.user.virus !== true) return bot(`игра не начата`)
  if (message.user.zarajtime > Date.now())
    return bot(`☢ Чтобы учёные ничего не заметили, нельзя так быстро заражать
❗ Подождите ещё ${unixStampLeft(message.user.zarajtime - Date.now())}`)

  message.user.zaraj += 1

  message.user.zarajtime = Date.now() + 20000

  return bot(
    `☣ +1 Заражённый
✅ Статистика гриппа:
☣ Болезнь: ${message.user.vtype}
😷 Зараженных: ${utils.sp(message.user.zaraj)} из 7.836.093.656
💊 Вакцина изобретена на ${message.user.vak}%`,
    {
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `💉 Грипп улучшить`
              },
              color: "positive"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `😷 Грипп заразить`
              },
              color: "primary"
            }
          ],
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: `☣ Грипп статистика`
              },
              color: "negative"
            },
            {
              action: {
                type: "text",
                payload: "{}",
                label: `🧪 Грипп вакцина`
              },
              color: "secondary"
            }
          ]
        ]
      })
    }
  )
})

/*==========================================================================================================*/
/*====================================ВИДЖЕТ===============================================================*/

//.filter(a=> a.settings.adm < 1) users.filter(a=> a.settings.adm < 1).map(x=> {

async function updateWidget() {
  let tops = []
  for (i = 1; i < 200000; i++) {
    if (users[i]) {
      tops.push({ id: i, idvk: users[i].id, lvl: users[i].rating })
    }
  }
  tops.sort(function (a, b) {
    if (b.lvl > a.lvl) return 1
    if (b.lvl < a.lvl) return -1
    return 0
  })

  let script = {
    title: "Лучшие игроки",
    title_url: "vk.com/gabellabot",
    head: [{ text: "Ник игрока" }, { text: "Рейтинг", align: "right" }],
    body: [],
    more: "Играть с ботом",
    more_url: "vk.com/write-178396242"
  }
  for (let g = 0; g < 10; g++) {
    if (tops.length > g) {
      script.body.push([
        { icon_id: `id${tops[g].idvk}`, text: `${users[tops[g].id].tag}`, url: `vk.com/id${tops[g].idvk}` },
        { text: `🏆${utils.sp(tops[g].lvl)}` }
      ])
    }
  }
  requests.post(
    {
      url: "https://api.vk.com/method/appWidgets.update",
      form: { type: "table", access_token: "token", code: `return ${JSON.stringify(script)};`, v: "5.95" }
    },
    function (err, resp, body) {
      console.log(body)
    }
  )
  console.log("╔═════════════════════════════╗")
  console.log("║        Gabella Bot          ║")
  console.log("║      vk.com/gabellabot      ║")
  console.log("║ Создатель: Тоша Евстафеев   ║")
  console.log("║      vk.com/tosha_edits     ║")
  console.log("║      Виджет - обновлен!     ║")
  console.log("╚═════════════════════════════╝")
}

updateWidget()
setInterval(updateWidget, 300000)

function updateStatus() {
  user.api.status.set({
    group_id: 178396242,
    text: `${utils.pick([
      `📝 В боте зарегистрировано: ${utils.sp(users.length - 1)} игроков.`,
      `📝 В боте пользователей: ${utils.sp(users.length - 1)}`,
      `🔥 Напиши ЛЮБОЕ сообщение в диалоге с ботом и начни ИГРАТЬ!`,
      `🔥 В боте принято сообщений: ${utils.sp(Logi.log_sms)}`,
      `💯 Напиши ЛЮБОЕ сообщение в диалоге с ботом и начни ИГРАТЬ!`
    ])}`
  })
}
updateStatus()
setInterval(updateStatus, 300000)

/*==========================================================================================================*/
/*=========================================================================================================*/
users
  .filter(x => x.vak === 0)
  .map(x => {
    //заражение
    if (x.virus == true) {
      if (x.vtype == "Оспа") {
        if (x.zaraj >= 10000) {
          x.vak = 1
          vk.api.messages.send({
            user_id: x.id,
            message: `💢 Учёные заметили вирус, началась разработка вакцины
⚠ постарайтесь заразить весь мир как можно скорее!
`
          })
        }
      }
      {
        if (x.virus == true) {
          if (x.vtype == "Чума") {
            if (x.zaraj >= 10000) {
              x.vak = 4
              vk.api.messages.send({
                user_id: x.id,
                message: `💢 Учёные заметили вирус, началась разработка вакцины
⚠ постарайтесь заразить весь мир как можно скорее!
`
              })
            }
          }
        } else {
          if (x.zaraj >= 100000) {
            x.vak = 1
            vk.api.messages.send({
              user_id: x.id,
              message: `💢 Учёные заметили вирус, началась разработка вакцины
⚠ постарайтесь заразить весь мир как можно скорее!
`
            })
          }
        }
      }
    }
  })
users
  .filter(x => x.zaraj >= 7836093656)
  .map(x => {
    if (x.virus == true) {
      if (x.vak <= 100) {
        x.virus = false
        vk.api.messages.send({
          user_id: x.id,
          message: `💥 Вам удалось заразить весь мир!
💀 Все люди начинают умирать
🦠 Игра окончена, Вы победили.
✅ Ваш результат:
Вирус: ${x.vtype}
Вакцина изобретена на ${x.vak}%`
        })
        vk.api.messages.send({ user_id: x.id, sticker_id: 16695 })
      }
    }
  })
users
  .filter(x => (x.vak = 100))
  .map(x => {
    if (x.virus == true) {
      if (x.zaraj <= 7836093656) {
        x.virus = false
        vk.api.messages.send({
          user_id: x.id,
          message: `⛔ Вам не удалось заразить весь мир!
🦠 Игра окончена, Вы проиграли.
✅ Ваш результат:
Вирус: ${x.vtype}
Зараженных: ${utils.sp(x.zaraj)} из 7.836.093.656
`
        })
        vk.api.messages.send({ user_id: x.id, sticker_id: 8471 })
      }
    }
  })
/*==========================================================================================================*/
/*=========================================================================================================*/

gabella.bot(/^(?:топ)$/i, async (message, bot) => {
  return bot(`🔥 доступные топы:
①. 👑 Топ рейтинг - топ игроков по рейтингу
②. 💰 Топ баланс - топ игроков по балансу
③. 🏆 Кубки топ - топ гонщиков на машинах
④. 🎖 Доблести топ - топ гонщиков на яхтах
⑤. ⚔ Клан топ - топ кланов
⑥. 🦠 Вирус топ - топ игроков по вирусу
⑦. 💭 Сообщения топ - топ игроков по использованию команд
⑧. ❤ Ютуб топ - топ игроков по лайкам в ютубе
⑨. 😷 Топ зараженных - топ лучшех по заражению игроков
10. 💭 Топ актив - топ активных игроков
`)
})
