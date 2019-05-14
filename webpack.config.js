const webpack = require("webpack");
const path = require("path");
const libraryName = "DataUtils";
const filename = "DataUtils";

const config = {
  entry: __dirname + "/lib/index.js",
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist",
    library: libraryName,
    libraryTarget: "umd",
    filename: filename + ".umd.js",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["env"],
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
};
module.exports = config;
