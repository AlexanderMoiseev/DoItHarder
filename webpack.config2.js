'use strict';

const webpack = require("webpack");

module.exports = {
  context: __dirname + "/app/javascript/packs/application2.js",

  entry: {
    application: "./application.ts",
  },

  output: {
    path: __dirname + "/public",
    filename: "javascripts/[name].js",
  },
};