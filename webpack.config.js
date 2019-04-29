const webpack = require("webpack");
const path = require("path");
const libraryName = "DataUtils";

const config = {
  entry: __dirname + "/lib/index.js",
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist",
    library: libraryName,
    libraryTarget: "umd",
    filename: "DataUtils.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  }
};
module.exports = config;
