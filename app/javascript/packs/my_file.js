// console.log('my file js')
//
// $(document).ready(function() {
//     console.log( " my file ready !" );
// });

$(function() {
	console.log('my file js4');
	


  $(".show-history").click(function(){  
  	$('.loader').show();
    $.ajax({
      type: "GET",
      url: "/exercises/load_exercise"
    }).done(function(data) {

 $('#history').html(data);
    }).fail(function() {
      alert('error occured');
    }).always(function() {
      $('.loader').hide();   
    })
    ;
})



  return $('form').on('click', '.add_fields', function(event) {
    var regexp, time;
	
    if($('.add_fields').is(":visible")) {
    		$('.add_fields').removeClass('add_fields2');
    		
    		$('.add_fields').first().text('add new set');
        $('.complete-exercise-form').show(); 
    		
    }
    time = new Date().getTime();
    regexp = new RegExp($(this).data('id'), 'g');
    $(this).before($(this).data('fields').replace(regexp, time));
	
	
	  // alert( $(".exdata").length);
		
    return event.preventDefault();
	

  });
});