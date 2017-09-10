
const thrift = require('thrift')
const helloSvc = require('./gen-nodejs/HelloSvc.js')

const options = {
  transport: thrift.TBufferedTransport,
  protocol: thrift.TJSONProtocol,
  path: '/hello',
  headers: {'Connection': 'close'},
  https: false
}

const connection = thrift
  .createHttpConnection('localhost', 9090, options)
const client = thrift.createHttpClient(helloSvc, connection)

connection.on('error', function(err) {
  console.log('Error: ' + err)
})

client.hello_func(function(error, result) {
  console.log('Msg from server: ' + result)
})
