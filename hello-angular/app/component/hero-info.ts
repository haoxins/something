
import { RouteParams } from '@angular/router-deprecated'
import { Component, OnInit, Input } from '@angular/core'

import { HeroService } from '../service/hero'
import Hero from '../model/hero'

@Component({
  selector: 'hero-info',
  template: `
    <div *ngIf="hero">
      <h2>selected hero</h2>
      <p>
        <span>{{hero.id}}</span>
        <span>{{hero.name}}</span>
        <input [(ngModel)]="hero.name" placeholder="name">
      </p>
      <button (click)="goBack()">Back</button>
    </div>
  `
})

export class HeroInfoCom implements OnInit {
  @Input()
  hero: Hero

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {

  }

  goBack() {
    window.history.back()
  }

  ngOnInit() {
    let id = +this.routeParams.get('id')
    this.heroService.getHero(id)
      .then(hero => this.hero = hero)
  }
}
