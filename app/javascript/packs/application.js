/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// import jQuery from 'jquery'

// window.jQuery = jQuery

import $ from 'jquery';
window.jQuery = $;
window.$ = $;


require("my_file")

console.log('Hello ')

$(function() {
	  console.log( "ready!" );
	  
	$('[data-form-prepend]').click( function(e) {
	    var obj = $( $(this).attr('data-form-prepend') );
	    obj.find('input, select, textarea').each( function() {
	      $(this).attr( 'name', function() {
	        return $(this).attr('name').replace( 'new_record', (new Date()).getTime() );
	      });
	    });
	    obj.insertBefore( this );
		e.preventDefault();
	    return false;
	  }); 
	  
  
});




// require('script')
//
//
// console.log('Hello World from Webpacker')
//
