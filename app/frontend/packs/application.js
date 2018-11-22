/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'plugins/chartkick'
import 'plugins/flatpickr'

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

// import {Provider} from 'react-redux'
// import {applyMiddleware, createStore} from "redux"
// import thunk from "redux-thunk"
// import reducers from '../reducers/index'
// import {fromJS} from 'immutable';

document.addEventListener('DOMContentLoaded', () => {
  console.log(React.version);

  ReactDOM.render(
      <App/>,
    document.querySelector('#app')
  );
});

console.log('Hello from application js ')

