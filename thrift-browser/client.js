
const thrift = require('thrift')

const UserStorage = require('./gen-nodejs/UserStorage.js')
const types = require('./gen-nodejs/user_types')

const connection = thrift.createConnection('localhost', 9090)
const client = thrift.createClient(UserStorage, connection)

const user = new types.UserProfile({
  uid: 1,
  name: 'Mark Slee',
  blurb: 'I\'ll find something to put here.'
})

connection.on('error', function(err) {
  console.error(err)
})

client.store(user, function(err, response) {
  if (err) {
    console.error(err)
  } else {
    console.log('client stored:', user.uid)
    client.retrieve(user.uid, function(err, responseUser) {
      if (err) {
        console.error(err)
      } else {
        console.log('client retrieved:', responseUser.uid)
        connection.end()
      }
    })
  }
})
