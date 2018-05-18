
const thrift = require('thrift')
const HelloSvc = require('./gen-nodejs/HelloSvc.js')
const TimesTwoSvc = require('./gen-nodejs/TimesTwo.js')

const helloHandler = {
	hello_func: function(result) {
		this.call_counter = this.call_counter || 0
		console.log('Client call: ' + (++this.call_counter))
		result(null, 'Hello Apache Thrift for JavaScript ' + this.call_counter)
	}
}

const timesTwoHandler = {
	dbl: function(val, result) {
		console.log('Client call: ' + val)
		result(null, val * 2)
	}
}

const helloService = {
	transport: thrift.TBufferedTransport,
	protocol: thrift.TJSONProtocol,
	processor: HelloSvc,
	handler: helloHandler
}

const dblService = {
	transport: thrift.TBufferedTransport,
	protocol: thrift.TJSONProtocol,
	processor: TimesTwoSvc,
	handler: timesTwoHandler
}

const ServerOptions = {
	files: '.',
	services: {
		'/hello': helloService,
		'/dbl': dblService,
	}
}

const server = thrift.createWebServer(ServerOptions)
const port = 8585

server.listen(port)

console.log('Http/Thrift Server running on port:', port)
