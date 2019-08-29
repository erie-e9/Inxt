const next = require('next')
const http2 = require('http2')
const fs = require('fs')
const path = require('path')

const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'
const isProd = !dev

// Init the Next app:
const app = next({ 
    isProd,
    conf: {
      compress: false
    } })

// Create the secure HTTPS server:
// Don't forget to create the keys for your development
const server = http2.createSecureServer({
    cert: fs.readFileSync(path.join(__dirname, '/server.crt')),
    key: fs.readFileSync(path.join(__dirname, '/key.pem'))
})

app.prepare().then(() => {
  server.on('error', err => console.error(err))

  // Process the various routes based on `req`
  // `/`      -> Render index.js
  // `/about` -> Render about.js
  server.on('request', (req, res) => {
    switch (req.url) {
      case '/about':
        return app.render(req, res, '/about', req.query)
      default:
        return app.render(req, res, '/', req.query)
    }
  })

  server.listen(port)

  console.log(`Listening on HTTPS port ${port}`)
})