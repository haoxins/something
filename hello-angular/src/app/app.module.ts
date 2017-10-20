
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule }   from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'
import { AppRoutingModule } from './app-routing.module'

import { HeroSearchComponent } from './hero-search.component'
import { HeroDetailComponent } from './hero-detail.component'
import { DashboardComponent } from './dashboard.component'
import { HeroesComponent } from './heroes.component'
import { AppComponent } from './app.component'
import { HeroService } from './hero.service'

@NgModule({
  declarations: [
    HeroSearchComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    AppComponent
  ],
  imports: [
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
