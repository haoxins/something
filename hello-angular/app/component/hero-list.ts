
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { HeroService } from '../service/hero'
import Hero from '../model/hero'

@Component({
  selector: 'hero-list',
  styleUrls:  ['app/component/hero-list.css'],
  template: `
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>
        {{selectedHero.name | uppercase}} is my hero
      </h2>
      <button md-raised-button (click)="gotoDetail()">
        View Details
      </button>
    </div>
  `
})

export class HeroListCom implements OnInit {
  selectedHero: Hero
  heroes: Hero[]

  constructor(
    private router: Router,
    private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  gotoDetail() {
    const id = this.selectedHero.id
    this.router.navigate(['heroes/', id])
  }
}
