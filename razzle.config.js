/* eslint-disable */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  modify: (config) => {
    config.module.rules.push(
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: {
              sourceMap: true,
              modules: true,
              importLoaders: true,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            } },
            { loader: 'postcss-loader', options: { sourceMap: true, plugins: () => [autoprefixer] } },
            { loader: 'less-loader', options: { sourceMap: true } },
          ]
        }),
      },
      {
        test: /\.ant$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader',
        }),
      }
    );

    config.plugins.push(
      new ExtractTextPlugin('static/css/styles.css')
    );

    return config;
  },
};
