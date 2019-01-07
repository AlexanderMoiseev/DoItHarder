import { Component, OnInit } from '@angular/core';
require ('./greetings.component.css');



@Component({
    // moduleId:module.id.toString(),
  selector: 'app-greetings',
  template:  require('./greetings.component.html'),
//   styleUrls: ['./heroes.component.css']
})

export class GreetingsComponent implements OnInit {
  heroes: string[];

  constructor() { }

  ngOnInit() {
      
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = ['12312', '123123', '9989898']
  }
}