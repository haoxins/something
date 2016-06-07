
import { Injectable } from '@angular/core'
import Hero from '../model/hero'

@Injectable()
export class HeroService {
  getHeroes() {
    const heroes: Hero[] = [{
      id: 1,
      name: 'one'
    }, {
      id: 2,
      name: 'two'
    }, {
      id: 3,
      name: 'three'
    }, {
      id: 4,
      name: 'four'
    }]

    return Promise.resolve(heroes)
  }
}
