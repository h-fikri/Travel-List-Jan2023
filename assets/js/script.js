'use strict';

var currentCity = ''; // local state of current city for easier use in all event listeners

// * EVENT LISTENER FOR PAGE LOAD - anything happening on PAGE LOAD should be in here

$(document).ready(function () {
	getCitiesFromLocalStorage(); //displays cities from localStorage - in console for now
});

// * EVENT LISTENER FOR USER INPUT IN FORM - anything that happens when SEARCH is clicked should be here

$('#search-btn').on('click', function (event) {
	event.preventDefault();
	var cityInput = $('#search-box').val().trim();
	if (cityInput === '' || cityInput === undefined) {
		alert('Please, input a city name'); //we need to change this to a MODAL
		return;
	}

	createMap(cityInput);
	getUnsplashImages(cityInput);
	addCityToCities(cityInput);
	addToLocalStorage();
	getCitiesFromLocalStorage();
	displayCurrentCityName(cityInput);
	$('#search-box').val(''); // empty input display
});

// * EVENT LISTENER FOR RANDOM CITY BUTTON - anything that happens when RANDOM pressed should be in here
$('#random-btn').on('click', function () {
	console.log('random clicked');
	var randomCity = getRandomCity();

	createMap(randomCity);
	getUnsplashImages(randomCity);
	addCityToCities(randomCity);
	addToLocalStorage();
	getCitiesFromLocalStorage();
	displayCurrentCityName(randomCity);
});

// * EVENT LISTENER FOR FAVORITES BUTTON - anything that happens when ADD TO FAVORITES clicked should be in here

$('#save-btn').on('click', function () {
	addCityToCities(currentCity);
	addToLocalStorage();
	renderFavoritesButtons();
});

// * EVENT LISTENER FOR CITY BUTTONS IN FAVORITES

$(document).on('click', '.faves', function () {
	var city = $(this).attr('data-city');
	currentCity = city;

	createMap(currentCity);
	getUnsplashImages(currentCity);
	displayCurrentCityName(currentCity);
});

// * HELPER FUNCTIONS

// function displaying city in #current-city element
function displayCurrentCityName(cityName) {
	var capitalizedCity = capitalizeCityName(cityName);
	$('#current-city').text(capitalizedCity);
}
