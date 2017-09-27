
import {
  SequenceHandler,
  ParsedRequest,
  CoreBindings,
  Application,
  inject,
  Send
} from '@loopback/core'

import {
  ServerResponse
} from 'http'

const app = new Application()

class MySequence implements SequenceHandler {
  constructor(@inject(CoreBindings.SequenceActions.SEND) private send: Send) {}
  async handle(req: ParsedRequest, res: ServerResponse) {
    console.log('oh ~')
    this.send(res, 'bingo ~')
  }
}

app.sequence(MySequence)

app.start()
