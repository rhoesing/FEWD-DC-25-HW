/*
Project Name: lesson-04-hw-ryanhoesing
Client: Relaxr
Author: Ryan Hoesing
Developer @GA in DC
*/

$(document).ready(function() {	

$("a").click(function(event) {
	event.preventDefault();
});

// Your code
$("p.readmore").click(function() {
	$("p.readmore").hide();
		$("#show-this-on-click").slideDown(function(){
	  $("p.readless").show();
		});	
});	

// Answer code
// Note that slideDown doesn't need an anonymous function to work right
// This is why your code skips when you click - you were super close to getting this perfect though
  $('.readmore').click(function(){
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
    event.preventDefault();
  });

$("p.readless").click(function(){
	$("p.readless").hide();
		$("#show-this-on-click").slideUp(function(){
		$("p.readmore").show();
		});
});

$("a.learnmore").click(function(){
	$("a.learnmore").hide();
	$("#learnmoretext").slideDown();
});

$("#learnmoretext").click(function(){
	$("#learnmoretext").slideUp(function(){
		$("a.learnmore").show();
	});
});


}); //closing out READY
