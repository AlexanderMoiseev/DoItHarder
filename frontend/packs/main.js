/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb



// https://medium.com/@avatsaev/angular-2-and-ruby-on-rails-user-authentication-fde230ddaed8
// https://github.com/alenteria/rails-angular4



import "reflect-metadata";
import 'zone.js';

// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

import 'plugins/chartkick'
import 'plugins/flatpickr'

console.log('Hello World from Webpacker')
import './application.scss'

import Vue from 'vue'
import App from '../app.vue'
import Slider from '../slider.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

$( document ).ready(function() {
  console.log( "document ready2!" );
});



// document.addEventListener('DOMContentLoaded', () => {
//   const el1 = document.body.appendChild(document.createElement('hello'))
//   const app = new Vue({
//     el:el1,
//     render: h => h(App)
//   });


//   // var app = new Vue({
//   //   el: '#app',
//   //   data: {
//   //     message: 'Hello Vue!'
//   //   }
//   // })

//   const slider_element = document.getElementById("sliderElementData")
//   // Next we want to grab and parse the json from 
//   // the mounting element's data attribute
//   const props = JSON.parse(slider_element.getAttribute('data'))

//   const el2 = document.body.appendChild(document.createElement('slider'))
  
//   const slider = new Vue({
//     el:el2,
//     render: h => h(Slider, { props })
//   });

//   console.log(app)

//   // console.log(slider)
// })
