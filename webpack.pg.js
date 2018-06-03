const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const glob = require("glob-all");
const PurifyCSSPlugin = require("purifycss-webpack");
const buildPath = path.join(__dirname, 'pg');
const devMode = process.env.NODE_ENV !== 'production';
const staticSourcePath = path.join(__dirname, 'pg');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var OfflinePlugin = require('offline-plugin');


module.exports = {
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  entry: {
    app: './src/index.tsx',
    recoil: './recoil/src/index.ts',
    styles: './src/styles.ts',
  },
  output: {
    library: '[name]',
    libraryTarget: 'var',
    filename: "[name].js",
    path: path.resolve(__dirname, 'pg'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [/src/, '/recoil/src'],
        exclude: '/recoil/docs/**/*'
      },
      {
        test: /\.(css?.+|less?.+)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          { loader: "style-loader" },
          "css-loader",
          'less-loader',
        ]
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: 'file-loader?name=assets/[name]-[hash].[ext]'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: 'file-loader?name=assets/[name]-[hash].[ext]'
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
        ],
        include: staticSourcePath
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/phonegap.html",
      filename: "./index.html",
      path: buildPath,
      inlineSource: '.(js|css)$',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, "recoil/**/*.cshtml"),
        path.join(__dirname, "recoil/**/*.html"),
        path.join(__dirname, "recoil/**/*.tsx"),
        path.join(__dirname, "recoil/**/*.ts"),

        path.join(__dirname, "src/**/*.cshtml"),
        path.join(__dirname, "src/**/*.html"),
        path.join(__dirname, "src/**/*.tsx"),
        path.join(__dirname, "src/**/*.ts"),

        path.join(__dirname, "pg/**/*.html"),
        path.join(__dirname, "pg/**/*.js"),
      ]),
      styleExtensions: ['.css', '.less'],
      purifyOptions: {
        minify: true,
        info: true,
        rejected: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin(
      [{ from: 'static/config.xml', to: 'config.xml', toType: 'file' },]
    )
  ],
  optimization: {

    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          compress: {
            drop_console: true,
            warnings: false, // Suppress uglification warnings
            pure_getters: true
          },
          output: {
            comments: false
          }
        },
        sourceMap: false
      })
    ]
  }
};