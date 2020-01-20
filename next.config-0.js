/* eslint-disable */
const webpack = require('webpack')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const withPurgeCss = require('next-purgecss');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './static/styles/theme/a-theme.less'), 'utf8')
)


const nextConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  },
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]",
  // },
  /* NextJs Config */
  compress: true,
  /* /NextJs Config */
  /* Sass */
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]",
  // },
  /* /Sass */

  webpack: (config, { dev, isServer }) => {
    if (isServer || dev) {
    // 
    config.module.rules.push(
        {
          test: /\.(css|scss)/,
          // loader: "emit-file-loader",
          // options: {
          //   name: "dist/[path][name].[ext]"
          // }
          use: ["emit-file-loader", MiniCssExtractPlugin.loader, {
              loader: "css-loader",
              options: {
                minimize: {
                  safe: true
                },
                name: "dist/[path][name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ["babel-loader", "raw-loader"]
        },
        {
          test: /\.s(a|c)ss$/,
          use: ["babel-loader", "raw-loader",
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  includePaths: ["static/styles/", "static/styles/scss", "static/styles/theme", "node_modules"]
                    .map(d => path.join(__dirname, d))
                    .map(g => glob.sync(g))
                    .reduce((a, c) => a.concat(c), [])
                }
              }
            }
          ]
        },
        // {
        //   loader: 'babel-loader',
        //   exclude: /node_modules/,
        //   test: /\.js$/,
        //   options: {
        //     presets: ['next/babel'],
        //     plugins: [
        //       ['import', { libraryName: "antd", style: "css" }]
        //     ]
        //   },
        // },
      )
    // 
    const antStyles = /antd\/.*?\/style\/css.*?/
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

    config.module.rules.unshift({
        test: antStyles,
          use: 'null-loader',
        // use: ["null-loader", "babel-loader", "raw-loader",
        // use: ['null-loader',
        // {
        //   loader: "css-loader",
        //   options: {
        //     importLoaders: 1,
        //     modules: true,
        //     localIdentName: "[hash:base64:8]",
        //     ignoreOrder: true
        //   }
        // }
        // ]
      })

    config.module.rules.push({
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        include: [
          require.resolve('@ant-design/icons/lib/dist')
        ]
      });
    
      //! pendiente probar
      // config.module.rules.push({
      //   test: /\.less$/,
      //   use: ["style-loader", {loader: 'css-loader', options: {sourceMap: 1}}, "postcss-loader", "less-loader"]
      // })

      /* ---------- */
    config.module.rules.unshift({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })
      
      /* ---------- */
    config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
           maxChunks: 1
        })
     );

    config.plugins.push(
       new webpack.optimize.MinChunkSizePlugin({
          minChunkSize: 10000
       })
     )

    //  config.plugins.push(
    //    new MiniCssExtractPlugin({
    //     filename: '[name].css',
    //     chunkFilename: '[id].css',
    //     ignoreOrder: false,
    //    })
    //  )
      /* ------/---- */

      /* ---------- */
      
      /* SVG */
      // config.module.rules.push({
        //   test: /\.svg$/,
        //   use: ['url-loader'],
        // });
        /* /SVG */
        // return config
      };
      
      /* ---------- */
      // var isProduction = config.mode === 'production';
      // if (isProduction) {
      //   return config
      // }
      /* -----/----- */

    return config
  },
}

module.exports = withBundleAnalyzer(withLess(withSass(withPurgeCss(withCss(nextConfig)))))