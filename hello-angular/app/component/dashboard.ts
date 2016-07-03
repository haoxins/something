
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { HeroService } from '../service/hero'
import Hero from '../model/hero'

@Component({
  selector: 'dashboard',
  template: `
    <h3>Top Heroes</h3>
    <div>
      <div *ngFor="let hero of heroes" (click)="gotoDetail(hero)">
        <h4>{{hero.name}}</h4>
      </div>
    </div>
  `
})

export class DashboardCom implements OnInit {
  heroes: Hero[] = []

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes)
  }

  gotoDetail(hero: Hero) {
    const link = ['HeroInfo', {id: hero.id}]
    this.router.navigate(link)
  }
}
