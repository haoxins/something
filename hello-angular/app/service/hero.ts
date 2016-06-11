
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import Hero from '../model/hero'

@Injectable()
export class HeroService {

  private heroesUrl = 'app/heroes'

  constructor(private http: Http) {
  }

  private handleError(error: any) {
    console.error(error)
    return Promise.reject(error.message || error)
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError)
  }

  getHero(id: number) {
    return this.getHeroes()
      .then(heroes => heroes.filter(hero => hero.id === id)[0])
  }
}
