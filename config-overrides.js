const { resolve } = require('path')
const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  addWebpackAlias
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  addDecoratorsLegacy(),

  addWebpackAlias({
    '@U': resolve(__dirname, 'src/utils'),
    '@C': resolve(__dirname, 'src/components'),
    '@S': resolve(__dirname, 'src/services')
  })
)
