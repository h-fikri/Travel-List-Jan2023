'use strict';

// // * EVENT LISTENER FOR SEARCH BUTTON
// $('#search-btn').click(function (e) {
// 	e.preventDefault();

// 	const searchInputEL = $('#search-box');

// 	if (searchInputEL.val() === '' || searchInputEL.val() === undefined) {
// 		alert('Please, input a city name');
// 	}
// });

// $('#search-box').submit(initMap);

//* EVENT LISTENER FOR RANDOM CITY BUTTON

$('#random-btn').on('click', function () {
	console.log('random clicked');
	var randomCity = getRandomCity();
	console.log(randomCity);
	getUnsplashImages(randomCity);
});

// user input form event listener - returning 4 images based on input
$("#search-btn").on("click", function (event) {
  event.preventDefault();
  var cityInput = $("#search-box").val().trim();
  getUnsplashImages(cityInput);
  $("#search-box").val(""); // empty input display
});

// ---------------------------
