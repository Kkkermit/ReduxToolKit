const express = require('express');
const app = express();
const port = 5173;
const { createProxyMiddleware } = require('http-proxy-middleware');
const regCheck = new RegExp(/^((\/container)(\/.*)?(\/todo\/))/gm)
const containerPos = process.argv.indexOf("container");
const container = process.argv[containerPos + 1];

app.use(
    "/", 
    createProxyMiddleware({
        target: container,
        changeOrigin: true,
        logLevel: "debug",
        secure: false,
        pathRewrite: function(path) {
            return path.replace(regCheck, "/todo/home/");
        },
        router: function(req) {
            if (req.originalUrl.match(regCheck)) {
                return "https://localhost:5173";
            }
            return false;
        },
    }),
);

app.listen(port)