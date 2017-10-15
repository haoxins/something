
import { Component, OnInit } from '@angular/core'

import { HeroService } from './hero.service'
import { Hero } from './hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) {
  }

  title = '哇塞'

  selectedHero: Hero
  heroes: Hero[]

  ngOnInit(): void {
    this.getHeroes()
  }

  async getHeroes() {
    this.heroes = await this.heroService.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
