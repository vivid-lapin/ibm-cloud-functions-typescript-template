import esbuild from "rollup-plugin-esbuild"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"

export default ["src/webhook.ts"].map((filepath) => ({
  input: filepath,
  output: {
    dir: "dist",
    format: "cjs",
    preferConst: true,
    inlineDynamicImports: true,
  },
  plugins: [
    resolve({
      browser: false,
      exportConditions: ["node"],
    }),
    esbuild(),
    commonjs({
      include: [/node_modules/],
    }),
    json(),
  ],
}))
