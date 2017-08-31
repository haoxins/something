
import {Application} from '@loopback/core'

const app = new Application()

app.handler((sequence, request, response) => {
  sequence.send(response, 'hello world')
});

(async function start() {
  await app.start()
  const port = app.getSync('http.port')
  console.log(`running on port ${port}`)
})()
