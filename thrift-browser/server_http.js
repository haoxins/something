
const connect = require('connect')
const thrift = require('thrift')

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

const server_http = thrift.createHttpServer(UserStorage, {
  store: store,
  retrieve: retrieve
})

server_http.listen(9090)

const server_connect = connect(thrift.httpMiddleware(UserStorage, {
  store: store,
  retrieve: retrieve
}))

server_http.listen(9091)

const server_connect_json = connect(thrift.httpMiddleware(UserStorage, {
  store: store,
  retrieve: retrieve
}, {protocol: thrift.TJSONProtocol}))

server_connect_json.listen(9092)
