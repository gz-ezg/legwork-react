const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/test', { target: 'https://evaluatepre.jd.com' }))
  app.use(proxy('/vehicle', { target: 'https://evaluatepre.jd.com' }))
  app.use(
    proxy('/user', {
      target: 'https://test.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })
  )
}
