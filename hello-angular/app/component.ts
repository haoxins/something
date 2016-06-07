
import { Component } from '@angular/core'

class Hero {
  id: number
  name: string
}

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

@Component({
  selector: 'app',
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
    <selected-hero *ngIf="selectedHero">
      <h2>selected hero</h2>
      <p>
        <span>{{selectedHero.id}}</span>
        <span>{{selectedHero.name}}</span>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
      </p>
    </selected-hero>
  `
})

export class AppComponent {
  title = 'hello'
  heroes = heroes
  selectedHero: Hero
  hero: Hero = {
    id: 1,
    name: 'haoxin'
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero
  }
}
