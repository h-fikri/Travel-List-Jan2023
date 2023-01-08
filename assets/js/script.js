"use strict";

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

$("#random-btn").on("click", function () {
  console.log("random clicked");
  var randomCity = getRandomCity();
  console.log(randomCity);
  getUnsplashImages(randomCity);
  addCityToCities(randomCity);
  addToLocalStorage();
  getCitiesFromLocalStorage();
  displayCurrentCityName(randomCity);
});

// user input form event listener - returning 4 images based on input
$("#search-btn").on("click", function (event) {
  event.preventDefault();
  var cityInput = $("#search-box").val().trim();
  getUnsplashImages(cityInput);
  addCityToCities(cityInput);
  addToLocalStorage();
  getCitiesFromLocalStorage();
  displayCurrentCityName(cityInput);
  $("#search-box").val(""); // empty input display
});

// ---------------------------

// event listener for page Load
$(document).ready(function () {
  getCitiesFromLocalStorage(); //displays cities from localStorage - in console for now
});

// function displaying city in #current-city element
function displayCurrentCityName(cityName) {
  var capitalizedCity = capitalizeCityName(cityName);
  $("#current-city").text(capitalizedCity);
}
