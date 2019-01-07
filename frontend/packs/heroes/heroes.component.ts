import { Component, OnInit } from '@angular/core';
require ('./heroes.component.css');

// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';

@Component({
    // moduleId:module.id.toString(),
  selector: 'app-heroes',
  template:  require('./heroes.component.html'),
//   styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: string[];

  constructor() { }

  ngOnInit() {
      
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = ['12312', '123123', '9989898']
    // this.heroService.getHeroes()
    // .subscribe(heroes => this.heroes = heroes);
  }
}