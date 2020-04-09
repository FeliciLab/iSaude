module.exports = {
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
    name: 'iSaúde',
    themeColor: '#00853b',
    msTileColor: '#00853b',
    background_color: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    orientation: 'portrait',
    start_url: '/',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      display: 'fullscreen'
    },
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest'
  }
}