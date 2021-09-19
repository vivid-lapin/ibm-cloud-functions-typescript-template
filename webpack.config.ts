import path from "path"
import webpack from "webpack"

const config: webpack.Configuration = {
  target: "node12",
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
          target: "es2018",
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
    minimize: true,
  },
}

export default config
