
import {
  OperationObject,
  ParameterObject,
  ResponseObject,
  Application,
  OpenApiSpec,
  PathsObject,
  api
} from '@loopback/core'

const app = new Application()

const spec = <OpenApiSpec> {
  basePath: '/',
  paths: <PathsObject> {
    '/': {
      get: <OperationObject> {
        'x-operation-name': 'hello',
        parameters: [<ParameterObject> {
          name: 'name',
          type: 'string',
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
    }
  }
}

@api(spec)
class MyController {
  hello(name: string) {
    return `hello, ${name}`
  }
}

app.controller(MyController)

app.start()
