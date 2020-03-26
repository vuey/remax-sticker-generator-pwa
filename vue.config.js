const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin')

module.exports = {
  pwa: {
    name: 'RE/MAX Kontor Sticker Generator',
    themeColor: '#0054a4',
    msTileColor: '#0054a4',
    manifestOptions: {
      name: 'RE/MAX Kontor Sticker Generator',
      background_color: '#0054a4'
    }
  },
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin(),
      new GoogleFontsPlugin({
        fonts: [
          { family: 'Roboto', variants: ['400', '600', '700'] }
        ]
      })
    ]
  }
}
