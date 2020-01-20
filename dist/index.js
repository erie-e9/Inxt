"use strict";
const next = require("next");
const http2 = require("http2");
const fs = require("fs");
const { parse } = require("url");
const path = require("path");
const mime = require("mime");
const port = parseInt(process.env.PORT, 10) || 3000;
const isDev = process.env.NODE_ENV !== "production";
const isProd = !isDev;
const ngrok = isDev && process.env.ENABLE_TUNNEL ? require("ngrok") : null;
const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || "localhost";
const app = next({
    isProd,
    conf: {
        compress: false
    }
});
const serverOptions = {
    cert: fs.readFileSync(path.join(__dirname, "../server.crt")),
    key: fs.readFileSync(path.join(__dirname, "../key.pem"))
};
const sendFile = (stream, fileName) => {
    const fd = fs.openSync(fileName, "r");
    const stat = fs.fstatSync(fd);
    const headers = {
        "content-length": stat.size,
        "last-modified": stat.mtime.toUTCString(),
        "content-type": mime.getType(fileName)
    };
    stream.respondWithFD(fd, headers);
    stream.end();
};
const pushFile = (stream, path, fileName) => {
    stream.pushStream({ ":path": path }, (err, pushStream) => {
        if (err) {
            console.log(`Error running pushStream: ${err}`);
        }
        sendFile(pushStream, fileName);
    });
};
const server = http2.createSecureServer(serverOptions);
app.prepare().then(() => {
    server.on("error", err => console.error(err));
    server.on("request", (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;
        switch (pathname) {
            case "/":
                return app.render(req, res, "/", query);
                break;
            case "/store":
                return app.render(req, res, "/store", query);
                break;
            case "/blog":
                return app.render(req, res, "/blog", query);
                break;
            case "/about":
                return app.render(req, res, "/about", query);
                break;
            case "/auth":
                return app.render(req, res, "/auth", query);
                break;
            case "/contact":
                return app.render(req, res, "/contact", query);
                break;
            case "private/dashboard":
                return app.render(req, res, "private/dashboard", query);
                break;
            case "/apps":
                return app.render(req, res, "/apps", query);
                break;
            case "/products":
                return app.render(req, res, "private/ecommerce/products", query);
                break;
            case "/documents":
                return app.render(req, res, "private/documents", query);
                break;
            case "/robots.txt":
                return sendFile(res.stream, path.join(__dirname, "../static/robots.txt"));
                break;
            case "/manifest.json":
                return sendFile(res.stream, path.join(__dirname, "../static/manifest.json"));
                break;
            default:
                return app.render(req, res, "/", query);
        }
    });
    server.listen(port, host, (err) => {
        if (err) {
            console.log(`Error running app: ${err}`);
        }
        else {
            console.log(`🚀 Server ready at https://${prettyHost}:${port}`);
        }
    });
})
    .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});
//# sourceMappingURL=index.js.map