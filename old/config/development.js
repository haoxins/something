'use strict'

const join = require('path').join
const fs = require('fs')

module.exports = {
  // api
  api: {
    port: 3000
    prefix: '/api'
  }

  // mobile
  mobile: {
    port: 3001,
    prefix: '/m'
  },

  // pc
  pc: {
    port: 3002
  },

  // normal
  cert: fs.readFileSync(join(__dirname, '../cert/certificate.pem')),
  key: fs.readFileSync(join(__dirname, '../cert/privatekey.pem'))
}
