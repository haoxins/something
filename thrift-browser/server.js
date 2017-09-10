
const thrift = require('thrift')

const UserStorage = require('./gen-nodejs/UserStorage.js')

const users = {}

const server = thrift.createServer(UserStorage, {
  store: function(user, result) {
    console.log('server stored:', user.uid)
    users[user.uid] = user
    result(null)
  },

  retrieve: function(uid, result) {
    console.log('server retrieved:', uid)
    result(null, users[uid])
  },
})

server.listen(9090)
