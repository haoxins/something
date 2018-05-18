
const thrift = require('thrift')
const ttransport = require('thrift/transport')

const UserStorage = require('./gen-nodejs/UserStorage')

const users = {}

const store = function(user, result) {
  console.log('stored:', user.uid)
  users[user.uid] = user
  result(null)
}

const retrieve = function(uid, result) {
  console.log('retrieved:', uid)
  result(null, users[uid])
}

const server_framed = thrift.createServer(UserStorage, {
  store: store,
  retrieve: retrieve
})

server_framed.listen(9090)

const server_buffered = thrift.createServer(UserStorage, {
  store: store,
  retrieve: retrieve
}, {transport: ttransport.TBufferedTransport})

server_buffered.listen(9091)
