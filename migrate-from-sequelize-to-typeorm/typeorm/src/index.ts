
import 'reflect-metadata'

import {createConnection} from 'typeorm'
import {User} from './entity/User'
import {Item} from './entity/Item'

createConnection().then(async connection => {

  // const user = new User()
  // user.firstName = "hx"
  // user.lastName = "ms"
  // user.age = 18

  // await connection.manager.save(user)

  // console.log("Saved a new user with id: " + user.id)

  const users = await connection
    .getRepository(User)
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.items', 'item')
    .where('user.age > :age', {age: 17})
    .orderBy({
      'user.id': 'DESC'
    })
    .limit(2)
    .offset(1)
    .getMany()

  console.log('users:', users)
}).catch(error => console.log(error))

async function createUserWithItem() {

}
