
import {Application} from '@loopback/core'

const app = new Application()

app.handler(async (sequence, request, response) => {
  sequence.send(response, `hello, world`)
})

app.start()
