const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack"); // для работы с env

module.exports = {
  mode: "production", // или 'production' "development"
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new Dotenv(),
  ],
};
