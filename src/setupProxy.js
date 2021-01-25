const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/yahoo/',
    createProxyMiddleware({
        target: 'https://www.yahoo.com/news/_tdnews/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api/yahoo/': ''
        },
      })
  );

  app.use(
    '/api/owm/', 
    createProxyMiddleware({
      target: 'https://api.openweathermap.org/data/2.5',
      changeOrigin: true,
      pathRewrite: { '^/api/owm/': '' },
    })
  );
};