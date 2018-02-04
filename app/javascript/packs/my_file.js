// console.log('my file js')
//
// $(document).ready(function() {
//     console.log( " my file ready !" );
// });

$(function() {
	console.log('my file js4')
	
  return $('form').on('click', '.add_fields', function(event) {
    var regexp, time;
    time = new Date().getTime();
    regexp = new RegExp($(this).data('id'), 'g');
    $(this).before($(this).data('fields').replace(regexp, time));
    return event.preventDefault();
  });
});