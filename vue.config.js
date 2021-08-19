module.exports = {
    lintOnSave: true,
    publicPath: process.env.NODE_ENV === 'production' ? '':'/',
    pluginOptions: {
        proxy: {
            context: ['/countdowner'],
            options:{
                target: '',
                changeOrigin: true
            }
        }
    }
}