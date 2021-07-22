module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 4200,
    host: '0.0.0.0',
//    sockPort: 8008,

 //  headers:{'Access-Control-Allow-Origin':'*'},
//  sockPath: 'ide/4011/react-sockjs-node',
 // sockHost: '10.150.18.191',
//  public:'http://10.150.18.191:4011',
   // watchContentBase: true,
    disableHostCheck: true
  },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
    ]
  },
};