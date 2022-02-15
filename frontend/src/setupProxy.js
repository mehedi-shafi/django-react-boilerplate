let { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config({ path: __dirname + '/./../../.env' });

module.exports = function(app) {
    app.use(
        [
            '/api',
            '/media',
        ],
        createProxyMiddleware({
            target: process.env.API_PROXY,
            changeOrigin: true,
        })
    );
};