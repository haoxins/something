
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule }   from '@angular/router'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppRoutingModule }     from './app-routing.module'

import { HeroDetailComponent } from './hero-detail.component'
import { DashboardComponent } from './dashboard.component'
import { HeroesComponent } from './heroes.component'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
