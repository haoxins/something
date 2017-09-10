
const thrift = require('thrift')
const helloSvc = require('./gen-nodejs/HelloSvc')

//ServiceHandler: Implement the hello service
const helloHandler = {
  hello_func: function (result) {
    console.log('Received Hello call')
    result(null, 'Hello from Node.js')
  }
}

//ServiceOptions: The I/O stack for the service
const helloSvcOpt = {
  handler: helloHandler,
  processor: helloSvc,
  protocol: thrift.TJSONProtocol,
  transport: thrift.TBufferedTransport
}

//ServerOptions: Define server features
const serverOpt = {
  services: {
    '/hello': helloSvcOpt
  }
}

//Create and start the web server
const port = 9090

thrift.createWebServer(serverOpt).listen(port)
console.log('Http/Thrift Server running on port: ' + port)
