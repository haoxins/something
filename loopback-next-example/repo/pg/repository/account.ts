
import {DefaultCrudRepository} from '@loopback/repository';
import {Account} from '../model/account'
import {db} from '../db'

export class AccountRepository extends DefaultCrudRepository<Account, typeof Account.prototype.id> {
  constructor() {
    super(Account, db)
  }
}
