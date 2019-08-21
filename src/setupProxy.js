const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://192.168.0.220:9000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })
  )
  app.use(proxy('/vehicle', { target: 'https://evaluatepre.jd.com' }))
  app.use(
    proxy('/user', {
      target: 'https://test.com'
    })
  )
}
