import os from "os"
import { delay } from ".."

const getCPUInfo = () => {
  const cpus = os.cpus()

  let idle = 0

  const total = cpus
    .map<number[]>(({ times }, index) => {
      // @ts-expect-error
      if (!cpus.hasOwnProperty(index)) return
      idle += times.idle
      return Object.keys(times).map(x => times[x])
    })
    .flatMap(x => x)
    .reduce((a, b) => a + b)

  return { idle, total }
}

export const getCPUUsage = async (free: boolean = false) => {
  const { idle: startIdle, total: startTotal } = getCPUInfo()

  await delay(10000)
  const { idle: endIdle, total: endTotal } = getCPUInfo()

  const perc = (endIdle - startIdle) / (endTotal - startTotal)

  return free ? perc : 1 - perc
}
