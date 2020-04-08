module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Covid-19 Ceará'
        return args
      })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  pwa: {
    name: 'Covid-19 Ceará',
    themeColor: '#00853b',
    msTileColor: '#00853b',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      display: 'fullscreen'
    },
    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'src/registerServiceWorker.js'
    //   // ...other Workbox options...
    // }
  }
}