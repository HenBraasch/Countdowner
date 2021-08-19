module.exports = {
    lintOnSave: true,
    publicPath: process.env.NODE_ENV === 'production' ? '':'/',
    devServer: {
        proxy:{
            "^/events":{
                changeOrigin: true,
                logLevel: "debug",
                target: 'http://127.0.0.1:64450/'
            }
        }
   }
}