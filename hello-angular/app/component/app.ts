
import { Component } from '@angular/core'
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouteConfig,
  RouteParams
} from '@angular/router-deprecated'

import { HeroService } from '../service/hero'
import { DashboardCom } from './dashboard'
import { HeroInfoCom } from './hero-info'
import { HeroListCom } from './hero-list'
import Hero from '../model/hero'

@Component({
  selector: 'app',

  directives: [
    ROUTER_DIRECTIVES,
    HeroInfoCom
  ],

  providers: [
    HeroService,
    RouteParams,
    ROUTER_PROVIDERS
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
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>

    <hero-info [hero]="selectedHero"></hero-info>
  `
})

@RouteConfig([{
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardCom,
  useAsDefault: true
}, {
  path: '/heroes/:id',
  name: 'HeroInfo',
  component: HeroInfoCom
}, {
  path: '/heroes',
  name: 'Heroes',
  component: HeroListCom
}])

export class App {
  constructor(private heroService: HeroService) {
  }

  title = 'hello'

  hero: Hero = {
    id: 1,
    name: 'haoxin'
  }
}
