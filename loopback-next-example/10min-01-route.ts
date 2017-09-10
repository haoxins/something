
import {
  OperationObject,
  ParameterObject,
  ResponseObject,
  Application,
  Route
} from '@loopback/core'

const app = new Application()

const spec = <OperationObject> {
  parameters: [<ParameterObject> {
    name: 'name',
    type: 'string',
    // 可以是: formData, body, query, header, path
    in: 'query'
  }],
  responses: {
    '200': <ResponseObject> {
      description: 'greeting',
      schema: {
        type: 'string'
      }
    }
  }
}

function hello(name: string) {
  return `hello, ${name}`
}

const route = new Route('get', '/', spec, hello)

app.route(route)

app.start()
