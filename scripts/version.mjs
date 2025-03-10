import * as Fs from "node:fs"
import Package from "../packages/core/package.json" with { type: "json" }

const tpl = Fs.readFileSync("./scripts/version.template.txt").toString("utf8")

Fs.writeFileSync(
  "packages/core/src/internal/version.ts",
  tpl.replace("VERSION", Package.version)
)
