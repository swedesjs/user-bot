import fetch from "node-fetch"

export const ipCommand: commandTypes = {
  hearConditions: /^(?:ip)\s(.*)$/i,
  handler: async ctx => {
    const response = await fetch(
      `http://ip-api.com/json/${ctx.$match[1]}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query&lang=ru`
    ).then<IpResponse>(res => res.json())

    if (response.status === "fail") return

    ctx.editDelete(
      `Информация об IP-адресе:
🃏 IP: ${response.query}
⛵ Континент: ${response.continent}
🌍 Страна: ${response.country}
🗽 Регион: ${response.regionName}
🌆 Город: ${response.city}

🛰 Провайдер: ${response.isp}
🖥 Организация: ${response.district || "Неизвестно"}
🔎 AS: ${response.as}
📋 AS-NAME: ${response.asname}
🧲 DNS сервер: ${response.reverse}
📲 Мобильная сеть: ${response.mobile ? "Используется" : "Не используется"}
🔒 Прокси/VPN: ${response.proxy ? "Используется" : "Не используется"}
🚀 Хостинг: ${response.hosting ? "Используется" : "Не используется"}`,
      60000,
      { lat: response.lat, long: response.lon }
    )
  }
}

type IpResponse =
  | ({ status: "success" } & Record<
      | "continent"
      | "continentCode"
      | "country"
      | "countryCode"
      | "region"
      | "regionName"
      | "city"
      | "district"
      | "zip"
      | "timezone"
      | "currency"
      | "isp"
      | "org"
      | "as"
      | "asname"
      | "reverse"
      | "query",
      string
    > &
      Record<"lat" | "lon" | "offset", number> &
      Record<"mobile" | "proxy" | "hosting", boolean>)
  | ({ status: "fail" } & Record<"message" | "query", string>)
