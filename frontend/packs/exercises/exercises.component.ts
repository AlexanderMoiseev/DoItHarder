import { Component, OnInit } from '@angular/core';
require ('./exercises.component.css');

// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';

@Component({
    // moduleId:module.id.toString(),
  selector: 'app-exercises',
  template:  require('./exercises.component.html'),
//   styleUrls: ['./heroes.component.css']
})

export class ExercisesComponent implements OnInit {
  heroes: string[];

  constructor() { }

  ngOnInit() {
      
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = ['12312', '123123', '9989898']
    
  }
}