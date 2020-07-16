var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");
module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-async-generator-functions",
            "@babel/plugin-transform-runtime",
          ],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
