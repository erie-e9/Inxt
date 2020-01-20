const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPurgeCss = require('next-purgecss')

const fs = require('fs')
const path = require('path')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withAntd = require('./next-antd.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './static/styles/theme/a-theme.less'), 'utf8')
);

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

module.exports = withBundleAnalyzer(withAntd(withCss(withSass({
  // cssModules: true,
  compress: true,
  cssLoaderOptions: {
    sourceMap: true,
    importLoaders: 1,
  },

  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables 
  },

  webpack: (config, { isServer }) => {
    // if (isServer) {
      // // ant design
      // const antStyles = /antd\/.*?\/style\/css.*?/
      // const origExternals = [...config.externals]
      // config.externals = [
      //   (context, request, callback) => {
      //     if (request.match(antStyles)) return callback()
      //     if (typeof origExternals[0] === 'function') {
      //       origExternals[0](context, request, callback)
      //     } else {
      //       callback()
      //     }
      //   },
      //   ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      // ]

      // config.module.rules.unshift({
      //   test: antStyles,
      //   use: 'null-loader',
      // })
      // // /ant design

      // rules
      config.module.rules.push({
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
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
      // /rules

      // plugins
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
           maxChunks: 25
        })
      );

      config.plugins.push(
       new webpack.optimize.MinChunkSizePlugin({
          minChunkSize: 1000
       })
      );

      config.plugins.push(
        new FilterWarningsPlugin({
          // ignore ANTD chunk styles [mini-css-extract-plugin] warning
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        }),
      );      
      // /plugins
    // }
    return config
  },
}))))