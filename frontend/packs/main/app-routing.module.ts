import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from '../heroes/heroes.component';
import { ExercisesComponent }      from '../exercises/exercises.component';
import { GreetingsComponent }      from '../greetings/greetings.component';
// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'greetings', component: GreetingsComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}