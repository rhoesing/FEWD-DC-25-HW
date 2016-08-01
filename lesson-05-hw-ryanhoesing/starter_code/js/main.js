/*
Project Name: lesson-05-hw-ryanhoesing
Client: CitiPix
Author: Ryan Hoesing
Developer @GA in DC
*/

/*
## Pseudocode:
1) Call values
2) Store input into var city
3) Use $.on(submit) to varify when user clicks 'submit'
4) Create if/else if/else conditionals
5) Call action

## If a user submits:
//
// "New York" or "New York City" or "NYC" or "New York, NY" change the background of the page nyc.jpg
// "San Francisco" or "SF" or "Bay Area" or "San Francisco, CA" change the background of the page sf.jpg
// "Omaha" or "O-Town" or "OMA" change the background of the page omaha.jpg
// "Los Angeles" or "LA" or "LAX" change the background of the page la.jpg
// "Austin" or "ATX" change the background of the page austin.jpg
// "Sydney" or "SYD" change the background of the page sydney.jpg
*/

$(document).ready(function(){

    $("form").submit(function(e) {
				e.preventDefault();

        var city = $('#city-type').val().trim().toLowerCase();

        $('body').removeClass();
				$('#message').text('');

        if (city === 'new york' || city === 'new york city' || city === 'nyc' || city === 'new york, ny') {
            $('body').addClass('nyc');
        }
        else if (city === 'san francisco' || city === 'bay area' || city === 'sf' || city === 'san francisco, ca') {
            $('body').addClass('sf');
				}
				else if (city === 'omaha' || city === 'o-town' || city === 'oma') {
						$('body').addClass('oma');
        }
        else if (city === 'los angeles' || city === 'la' || city === 'lax') {
            $('body').addClass('la');
        }
        else if (city === 'austin' || city === 'atx' || city === 'austin, tx') {
            $('body').addClass('austin');
        }
        else if (city === 'sydney' || city === 'syd') {
            $('body').addClass('sydney');
        }
				else {
					$('#message').text('City not found. Try again!');
				}
    });
}); //closing out READY
