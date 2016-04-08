'use strict'

const config = require('../config')
const lusca = require('koa-lusca')
const https = require('https')
const app = require('koa')()

const port = config.pc.port

app.use(lusca({
  // csrf: true,
  csp: {},
  xframe: 'SAMEORIGIN',
  p3p: '',
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true
  },
  xssProtection: true
}))

const opts = {
  cert: config.cert,
  key: config.key
}

const server = https.createServer(opts, app.callback())
server.listen(port)

console.log('listen: %d', port)
