"use strict";
var currentCity = ""; // local state of current city for easier use in all event listeners

// EVENT LISTENER FOR PAGE LOAD - anything happening on PAGE LOAD should be in here

$(document).ready(function () {
  getCitiesFromLocalStorage(); //displays cities from localStorage - in console for now
});

// EVENT LISTENER FOR USER INPUT IN FORM - anything that happens when SEARCH is clicked should be here

$("#search-btn").on("click", function (event) {
  event.preventDefault();
  var cityInput = $("#search-box").val().trim();
  if (cityInput === "" || cityInput === undefined) {
    alert("Please, input a city name"); //we need to change this to a MODAL
    return;
  }
  getUnsplashImages(cityInput);
  currentCity = cityInput;
  getCitiesFromLocalStorage();
  displayCurrentCityName(cityInput);
  $("#search-box").val(""); // empty input display
});

//* EVENT LISTENER FOR RANDOM CITY BUTTON - anything that happens when RANDOM pressed should be in here

$("#random-btn").on("click", function () {
  console.log("random clicked");
  var randomCity = getRandomCity();
  // console.log(randomCity);
  currentCity = randomCity;
  getUnsplashImages(randomCity);
  getCitiesFromLocalStorage();
  displayCurrentCityName(randomCity);
});

// EVENT LISTENER FOR FAVORITES BUTTON - anything that happens when ADD TO FAVORITES clicked should be in here

$("#save-btn").on("click", function () {
  console.log("favorites clicked");
  addCityToCities(currentCity);
  addToLocalStorage();
});

// // * EVENT LISTENER FOR SEARCH BUTTON
// $('#search-btn').click(function (e) {
// 	e.preventDefault();

// 	const searchInputEL = $('#search-box');

// 	if (searchInputEL.val() === '' || searchInputEL.val() === undefined) {
// 		alert('Please, input a city name');
// 	}
// });

// $('#search-box').submit(initMap);

// ---------------------------

// HELPER FUNCTIONS

// function displaying city in #current-city element
function displayCurrentCityName(cityName) {
  var capitalizedCity = capitalizeCityName(cityName);
  $("#current-city").text(capitalizedCity);
}
