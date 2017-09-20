
import {
  property,
  Entity,
  model
} from '@loopback/repository'

@model()
export class Account extends Entity {
  @property({type: 'number', id: true})
  id: number

  @property({type: 'string', required: true})
  name: string
}
