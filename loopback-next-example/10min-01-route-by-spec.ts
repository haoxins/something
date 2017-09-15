
import {
  OperationObject,
  ParameterObject,
  ResponseObject,
  Application,
  OpenApiSpec,
  PathsObject
} from '@loopback/core'

const app = new Application()

const spec = <OpenApiSpec> {
  basePath: '/',
  paths: <PathsObject> {
    '/': {
      get: <OperationObject> {
        'x-operation': hello,
        parameters: [<ParameterObject> {
          name: 'name',
          type: 'string',
          in: 'query' // 可以是: formData, body, query, header, path
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

function hello(name: string) {
  return `hello, ${name}`
}

app.api(spec)

app.start()
