
const ttransport = require('thrift/transport')
const thrift = require('thrift')

const UserStorage = require('./gen-nodejs/UserStorage')
const types = require('./gen-nodejs/user_types')

const f_conn = thrift.createConnection('localhost', 9090) // default: framed
const f_client = thrift.createClient(UserStorage, f_conn)

const b_conn = thrift.createConnection('localhost', 9091, {
  transport: ttransport.TBufferedTransport
})

const b_client = thrift.createClient(UserStorage, b_conn)

const user1 = new types.UserProfile({
  uid: 1,
  name: 'Mark Slee',
  blurb: 'I\'ll find something to put here.'
})

const user2 = new types.UserProfile({
  uid: 2,
  name: 'Satoshi Tagomori',
  blurb: 'ok, let\'s test with buffered transport.'
})

f_conn.on('error', function(err) {
  console.error('framed:', err)
})

f_client.store(user1, function(err, response) {
  if (err) { console.error(err); return }

  console.log('stored:', user1.uid, ' as ', user1.name)
  b_client.retrieve(user1.uid, function(err, responseUser) {
    if (err) { console.error(err); return }
    console.log('retrieved:', responseUser.uid, ' as ', responseUser.name)
  })
})

b_client.store(user2, function(err, response) {
  if (err) { console.error(err); return }

  console.log('stored:', user2.uid, ' as ', user2.name)
  f_client.retrieve(user2.uid, function(err, responseUser) {
    if (err) { console.error(err); return }
    console.log('retrieved:', responseUser.uid, ' as ', responseUser.name)
  })
})
