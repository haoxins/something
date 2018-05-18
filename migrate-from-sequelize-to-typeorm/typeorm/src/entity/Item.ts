
import {
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Entity
} from 'typeorm'

import {User} from './User'

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => User, user => user.items)
  user: User

  @Column()
  name: string
}
