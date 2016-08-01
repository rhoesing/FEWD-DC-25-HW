/*
Project Name: lesson-05-hw-ryanhoesing
Client: CitiPix
Author: Ryan Hoesing
Developer @GA in DC
*/

$(document).ready(function(){

//--Use $().submit() to varify when user clicks 'submit'--//
    $("form").submit(function(e) {
				e.preventDefault();
//--Call values + store input into var city--//
        var city = $('#city-type').val().trim().toLowerCase();
//--Remove class from body + make #message blank--//
        $('body').removeClass();
				$('#message').text('');

//--Create if/else if/else conditionals--//
//##--If a user submits--##//
	// "New York" or "New York City" or "NYC" or "New York, NY" change the background of the page nyc.jpg //
        if (city === 'new york' || city === 'new york city' || city === 'nyc' || city === 'new york, ny') {
            $('body').addClass('nyc');
        }
	// "San Francisco" or "SF" or "Bay Area" or "San Francisco, CA" change the background of the page sf.jpg //
        else if (city === 'san francisco' || city === 'bay area' || city === 'sf' || city === 'san francisco, ca') {
            $('body').addClass('sf');
				}
	// "Omaha" or "O-Town" or "OMA" change the background of the page omaha.jpg //
				else if (city === 'omaha' || city === 'o-town' || city === 'oma') {
						$('body').addClass('oma');
        }
	// "Los Angeles" or "LA" or "LAX" change the background of the page la.jpg //
        else if (city === 'los angeles' || city === 'la' || city === 'lax') {
            $('body').addClass('la');
        }
	// "Austin" or "ATX" change the background of the page austin.jpg //
        else if (city === 'austin' || city === 'atx' || city === 'austin, tx') {
            $('body').addClass('austin');
        }
	// "Sydney" or "SYD" change the background of the page sydney.jpg //
        else if (city === 'sydney' || city === 'syd') {
            $('body').addClass('sydney');
        }
	// If none of cities above, display text "City not found. Try again!"
				else {
					$('#message').text('City not found. Try again!');
				}
    });
}); //closing out READY
