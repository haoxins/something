
import { Injectable } from '@angular/core'
import Hero from '../model/hero'

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

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(heroes)
  }

  getHero(id: number) {
    const hero = heroes.filter(h => h.id === id)[0]
    if (!hero) {
      throw new Error('not found')
    }
    return Promise.resolve(hero)
  }
}
