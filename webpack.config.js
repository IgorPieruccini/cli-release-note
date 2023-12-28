const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = require('./webpack.development.config');
const prodConfig = require('./webpack.production.config');

const rootBundlePath = path.resolve(__dirname, 'bin');

module.exports = (webpackEnv) => {
  const { mode } = webpackEnv;
  const isProd = mode === "production";
  const environmentConfig = isProd ? prodConfig : devConfig;
  const envRules = environmentConfig.module.rules || [];
  const envPlugins = environmentConfig.plugins || [];

  return {
    ...environmentConfig,
    entry: {
      main: './src/index.tsx',
      "git-log": './src/git-log.js',
    },
    output: {
      filename: '[name].js',
      path: rootBundlePath,
      publicPath: 'auto',
      clean: {
        dry: false,
      }
    },
    module: {
      rules: [
        ...envRules,
        {
          test: /\.jsx$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties'
              ]
            }
          }
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'ts-loader',
          }
        },
        {
          test: /\.(png|jpg)$/,
          type: 'asset/resource'
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      extensionAlias: {
        '.js': ['.js', '.ts'],
        '.jsx': ['.jsx', '.tsx']
      }
    },
    plugins: [
      ...envPlugins,
      new HtmlWebpackPlugin({
        minify: isProd,
        template: "./src/index.html"
      }),
    ]
  }
}  
