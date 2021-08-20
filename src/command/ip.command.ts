import os from "os"

export const ipCommand: commandTypes = {
  hearConditions: /^(?:ip)$/i,
  handler: ctx => {
    const ifaces = os.networkInterfaces()

    Object.keys(ifaces).forEach(ifname => {
      let alias = 0

      ifaces[ifname].forEach(iface => {
        if ("IPv4" !== iface.family || iface.internal !== false) return

        if (alias >= 1) ctx.editDelete(`${ifname}: ${alias} ${iface.address}`)
        else ctx.editDelete(`${ifname} ${iface.address}`)

        ++alias
      })
    })
  }
}
