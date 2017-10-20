
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [{
      id: 1,
      name: '素还真'
    }, {
      id: 2,
      name: '谈无欲'
    }, {
      id: 3,
      name: '青阳子'
    }, {
      id: 4,
      name: '一页书'
    }, {
      id: 5,
      name: '莫召奴'
    }, {
      id: 6,
      name: '蝴蝶君'
    }, {
      id: 7,
      name: '公孙月'
    }]
    return heroes
  }
}
