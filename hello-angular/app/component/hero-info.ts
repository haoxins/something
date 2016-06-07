
import { Component, Input } from '@angular/core'
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
    </div>
  `
})

export class HeroInfoCom {
  @Input()
  hero: Hero
}
