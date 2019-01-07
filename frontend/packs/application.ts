/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// import {Component} from "@angular/core";
// import {NgModule} from "@angular/core";
// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
// import {BrowserModule} from "@angular/platform-browser";


// https://medium.com/@avatsaev/angular-2-and-ruby-on-rails-user-authentication-fde230ddaed8
// https://github.com/alenteria/rails-angular4

import "reflect-metadata";
import 'zone.js';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './main/app-routing.module';
import { HeroesComponent }      from './heroes/heroes.component';
import { ExercisesComponent }      from './exercises/exercises.component';
import {APP_BASE_HREF} from '@angular/common';
// import { AppComponent } from './app.component';

import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
import 'plugins/chartkick'
import 'plugins/flatpickr'

import React from 'react'
import ReactDOM from 'react-dom'
import uirouter from 'angular-ui-router'
import './main/_home.html'



console.log('Hello World from Webpacker')
import './application.scss'


// Support component names relative to this directory:
// var componentRequireContext = require.context("components", true)
// var ReactRailsUJS = require("react_ujs")
// ReactRailsUJS.useContext(componentRequireContext)

// function renderGroups() {
//    ReactDOM.render(
//       <App/>,
//     document.querySelector('#app')
//   );
// }
// window.renderGroups = renderGroups;

// document.addEventListener('DOMContentLoaded', () => {
//   console.log(React.version);

//   ReactDOM.render(
//       <App/>,
//     document.querySelector('#app')
//   );
// });


@Component({
  selector: 'app-root',
  template: require('./main/_home.html')
})
export class AppComponent {
  title = 'app works!';
}

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ExercisesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
