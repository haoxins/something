
import { Component, OnInit } from '@angular/core'
import { HeroInfoCom } from './hero-info'

import { HeroService } from '../service/hero'
import Hero from '../model/hero'

@Component({
  selector: 'app',
  directives: [HeroInfoCom],
  providers: [HeroService],
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}}</h2>
    <div>
      <p>
        <label>id:</label>
        {{hero.id}}
      </p>
      <p>
        <label>name:</label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </p>
    </div>
    <h2>heros</h2>
    <hero-list>
      <p *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span>{{hero.id}}</span>
        <span>{{hero.name}}</span>
      </p>
    </hero-list>
    <hero-info [hero]="selectedHero"></hero-info>
  `
})

export class App {
  constructor(private heroService: HeroService) {

  }

  title = 'hello'
  heroes: Hero[]
  selectedHero: Hero
  hero: Hero = {
    id: 1,
    name: 'haoxin'
  }

  ngOnInit() {
    this.getHeroes()
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  getHeroes() {
    this.heroService
      .getHeroes()
      .then(heros => this.heroes = heros)
  }
}
