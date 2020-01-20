
const webpack = require('webpack')
const withCss = require("@zeit/next-css");
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const withPurgeCss = require('next-purgecss')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const glob = require('glob')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './static/styles/theme/a-theme.less'), 'utf8')
)

module.exports =
  withCss(
    withPurgeCss(
      withSass({
        cssModules: true,
        compress: true,
        ...withLess({
          dir: "static/styles",
          distDir: "./build",
          cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[folder]_[local]___[hash:base64:5]",
          },
          lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: themeVariables
          },
          webpack(config, options) {
            if (options.isServer) {
              // plugins

              config.plugins.push(new ForkTsCheckerWebpackPlugin({
                // tsconfig: './tsconfig.json',
                tsconfig: './tsconfig.server.json',
              }))

              const antStyles = /antd\/.*?\/style.*?/
              const origExternals = [...config.externals]
              config.externals = [
                (context, request, callback) => {
                  if (request.match(antStyles)) return callback()
                  if (typeof origExternals[0] === 'function') {
                    origExternals[0](context, request, callback)
                  } else {
                    callback()
                  }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
              ]

            // Rules
              config.module.rules.push({
                test: /\.(css|scss)/,
                loader: "emit-file-loader",
                options: {
                  name: "dist/[path][name].[ext]"
                }
              });

              config.module.rules.unshift({
                test: antStyles,
                use: ["null-loader", MiniCssExtractPlugin.loader],
              });

              config.module.rules.push({
                loader: 'webpack-ant-icon-loader',
                enforce: 'pre',
                include: [
                  require.resolve('@ant-design/icons/lib/dist')
                ]
              });

              config.module.rules.unshift({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 100000
                  }
                }
              });

              config.plugins.push(
                new webpack.optimize.LimitChunkCountPlugin({
                  maxChunks: 1
                })
              );
        
              config.plugins.push(
              new webpack.optimize.MinChunkSizePlugin({
                  minChunkSize: 10000
              })
              );
            
            }

            return config;
          }
        })
      })
    )
  );