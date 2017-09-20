
import {
  DataSourceConstructor,
  juggler
} from '@loopback/repository'

export const db = new DataSourceConstructor({
  connector: 'postgresql',
  host: 'localhost',
  port: 5432,
  database: 'loopback',
  password: '',
  user: 'hx',
})
