
import { Component } from '@angular/core'
import {
  ROUTER_DIRECTIVES,
} from '@angular/router'

import { HeroService } from '../service/hero'
import { HeroInfoCom } from './hero-info'
import Hero from '../model/hero'

@Component({
  selector: 'app',

  directives: [
    ROUTER_DIRECTIVES,
    HeroInfoCom
  ],

  providers: [
    HeroService
  ],

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

    <nav>
      <a [routerLink]="['dashboard']">Dashboard</a>
      <a [routerLink]="['heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>

    <hero-info [hero]="selectedHero"></hero-info>
  `
})

export class App {
  constructor(private heroService: HeroService) {
  }

  title = 'hello'

  hero: Hero = {
    id: 1,
    name: 'haoxin'
  }
}
