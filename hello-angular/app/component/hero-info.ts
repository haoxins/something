
import { ActivatedRoute } from '@angular/router'
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
  sub: any

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  goBack() {
    window.history.back()
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero)
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
