import path from "path"
import { ESBuildMinifyPlugin } from "esbuild-loader"
import webpack from "webpack"

const config: webpack.Configuration = {
  target: "node16",
  entry: {
    webhook: "./src/webhook.ts",
    caller: "./src/caller.ts",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          target: "es2020",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [],
  externals: {
    // skip openwhisk bundle because environment already has it
    openwhisk: "commonjs openwhisk",
  },
  optimization: {
    minimizer: [new ESBuildMinifyPlugin({ target: "es2020" })],
  },
}

export default config
