const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin')
const path = require('path')
const glob = require('glob')

const PATHS = {
    pages: path.join(__dirname, 'pages')
  }

module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  ...{
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
        );
      }

      const { dev, isServer } = options;
      const { cssModules, cssLoaderOptions, postcssLoaderOptions, lessLoaderOptions = {} } = nextConfig;

      // for all less in clint
      const baseLessConfig = {
        extensions: ['less'],
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          // {
          //   loader: 'style-loader',
          // },
          // {
          //   loader: 'css-loader', // translates CSS into CommonJS
          // },
          {
            loader: 'less-loader',
            options: lessLoaderOptions,
          },
        ],
      };

      config.module.rules.push({
        test: /\.less$/,
        exclude: /node_modules/,
        use: cssLoaderConfig(config, baseLessConfig),
      });

      // for antd less in client
      const antdLessConfig = {
        ...baseLessConfig,
        ...{ cssModules: false, cssLoaderOptions: {}, postcssLoaderOptions: {} },
      };

      config.module.rules.push({
        test: /\.less$/,
        include: /node_modules/,
        use: cssLoaderConfig(config, antdLessConfig),
      });

      // for antd less in server (yarn build)
      if (isServer) {
        const antdStyles = /antd\/.*?\/style.*?/;
        const rawExternals = [...config.externals];

        config.externals = [
          (context, request, callback) => {
            if (request.match(antdStyles)) {
              return callback();
            }

            if (typeof rawExternals[0] === 'function') {
              rawExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof rawExternals[0] === 'function' ? [] : rawExternals),
        ];

        config.module.rules.unshift({
          test: antdStyles,
          use: ['null-loader'],
        });

        config.module.rules.push({
            loader: 'webpack-ant-icon-loader',
            enforce: 'pre',
            include: [
              require.resolve('@ant-design/icons/lib/dist')
            ]
        });

        // plugins
        config.plugins.push(
            new PurgecssPlugin({
                paths: glob.sync(`${PATHS.pages}/**/*`,  { nodir: true }),
              }),
        );

        // /plugins
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  },
});
