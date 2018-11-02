const path = require('path')
const webpack = require('webpack')
const paths = require('./paths')
const getClientEnvironment = require('./env')

const publicPath = paths.servedPath
const publicUrl = publicPath.slice(0, -1)
const env = getClientEnvironment(publicUrl)

module.exports = {
  entry: paths.ssrJs,
  target: { // node 전용으로 번들링한다는 것을 명시
    path: paths.ssrBuild,
    filename: 'render.js', // Node.js에서 require로 불러올수 있게 함
    libraryTarget: 'commonjs32'
  },
  module: {
    rules: [
      {
        // oneOf는 내부의 모든 로더를 시도해 보고, 해당하는 것이 없다면
        // 맨 아래쪽의 file-loader를 실행시킨다
        oneOf: [
          {
            // 자바스크립트 파일은 바벨을 사용하여 변환
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true
            }
          },
          // css와 scss 파일을 불러올 때는
          // css-loader/locals를 실행하는 것이 중요하다.
          // 파일을 따로 만들지 않기 때문이다..??
          {
            test: /\.css$/,
            loader: require.resolve('css-loader/locals')
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: require.resolve('css-loader/locals'),
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              },
              {
                loader: require.resolve('sass-loader'),
                options: {
                  includePaths: [paths.globalStyles]
                }
              }
            ]
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    )
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified)
  ]
}