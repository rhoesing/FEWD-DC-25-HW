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

$("p.readmore").click(function() {
	$("p.readmore").hide();
		$("#show-this-on-click").slideDown(function(){
	  $("p.readless").show();
		});	
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