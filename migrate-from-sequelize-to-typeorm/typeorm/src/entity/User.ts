
import {
  PrimaryGeneratedColumn,
  OneToMany,
  Entity,
  Column
} from 'typeorm'

import {Item} from './Item'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  age: number

  @OneToMany(type => Item, item => item.user)
  items: Item[]
}
