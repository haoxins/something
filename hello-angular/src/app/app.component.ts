
import { Component } from '@angular/core'
import { Hero } from './hero'

const HEROES: Hero[] = [{
  id: 1, name: '虫虫'
}, {
  id: 2, name: '棒棒'
}, {
  id: 3, name: '毛毛'
}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '哇塞'

  heroes = HEROES
  selectedHero: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
