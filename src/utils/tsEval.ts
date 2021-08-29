import { exec } from "child_process"
import path from "path"
import { promisify } from "util"
import fs from "fs"

const compliteOptions: CompliteOptions = {
  target: "ES2019",
  module: "commonjs",
  esModuleInterop: true,
  skipLibCheck: true,
  forceConsistentCasingInFileNames: true,
  allowUnreachableCode: false,
  noImplicitReturns: true,
  emitDecoratorMetadata: true,
  experimentalDecorators: true
}

export const tsEval = async (option: string) => {
  const file = path.join(__dirname + "/../../tsEvalProcess.ts")
  const replaceJS = file.replace(".ts", ".js")

  const deleteFile = () => [file, replaceJS].forEach(x => fs.unlinkSync(x))

  await promisify(fs.writeFile)(file, option)

  await new Promise((resovle, reject) =>
    exec(
      `tsc ${file} ${Object.entries(compliteOptions)
        .map(([key, value]) => `--${key} ${value}`)
        .join(" ")}`,
      (_, result) =>
        result
          ? (() => {
              deleteFile()
              reject(result)
            })()
          : resovle(0)
    )
  )

  const save = await promisify(fs.readFile)(replaceJS, { encoding: "utf-8" })
  deleteFile()
  return save
}

type CompliteOptions = Record<
  | "esModuleInterop"
  | "skipLibCheck"
  | "forceConsistentCasingInFileNames"
  | "allowUnreachableCode"
  | "noImplicitReturns"
  | "emitDecoratorMetadata"
  | "experimentalDecorators",
  boolean
> & { target: "ES2019"; module: "commonjs" }
