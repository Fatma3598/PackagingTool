const pathPackage = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
module.exports = {
    entry: pathPackage.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js'
        , path: pathPackage.resolve(__dirname, './dist')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [

            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] }

            ,{
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    },
                    {
                      loader: ImageMinimizerPlugin.loader,
                      options: {
                        severityError: 'warning', // Ignore errors on corrupted images
                        minimizerOptions: {
                          plugins: ['gifsicle',['mozjpeg', { quality: 60 }],'svgo','optipng']
                        },
                      },
                    },
                ]
            },
            { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'] }
        ]
    }
    , plugins: [
        new HtmlWebpackPlugin({ title:'output',filename:'index.html', inject: 'body' }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
            format: {
                comments: false,
            },
        },
        extractComments: false,
    }),
      new CssMinimizerPlugin(),
    ],
  },
}