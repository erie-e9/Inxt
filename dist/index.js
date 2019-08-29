"use strict";
// @ts-ignore
const next = require("next");
const http2 = require("http2");
const fs = require("fs");
const { parse } = require("url");
const path = require("path");
const mime = require("mime");
// @ts-ignore
const port = parseInt(process.env.PORT, 10) || 3000;
const isDev = process.env.NODE_ENV !== "production";
const isProd = !isDev;
const ngrok = isDev && process.env.ENABLE_TUNNEL ? require("ngrok") : null;
const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || "localhost";
// Init the Next app:
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
/******************* push archivos https ****************** */
// read and send file content in the stream
// @ts-ignore
const sendFile = (stream, fileName) => {
    // console.log("aqui we: /", fileName)
    const fd = fs.openSync(fileName, "r");
    const stat = fs.fstatSync(fd);
    const headers = {
        "content-length": stat.size,
        "last-modified": stat.mtime.toUTCString(),
        "content-type": mime.getType(fileName)
    };
    stream.respondWithFD(fd, headers);
    // stream.on("close", () => {
    //   console.log("closing file", fileName);
    //   fs.closeSync(fd);
    // });
    stream.end();
};
// @ts-ignore
const pushFile = (stream, path, fileName) => {
    // @ts-ignore
    stream.pushStream({ ":path": path }, (err, pushStream) => {
        if (err) {
            console.log(`Error running pushStream: ${err}`);
        }
        sendFile(pushStream, fileName);
    });
};
/******************* /push archivos https ****************** */
// Create the secure HTTPS server:
// Don´t forget to create the keys for your development
const server = http2.createSecureServer(serverOptions);
app.prepare().then(() => {
    // @ts-ignore
    server.on("error", err => console.error(err));
    // Process the various routes based on `req`
    // `/`      -> Render index.js
    // `/about` -> Render about.js
    // @ts-ignore
    server.on("request", (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;
        switch (pathname) {
            case "/about":
                return app.render(req, res, "/about", query);
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
    // @ts-ignore
    server.listen(port, host, (err) => {
        if (err) {
            console.log(`Error running app: ${err}`);
        }
        else {
            console.log(`🚀 Server ready at https://${prettyHost}:${port}`);
        }
    });
})
    // @ts-ignore
    .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});
//# sourceMappingURL=index.js.map