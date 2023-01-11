"use strict";

var currentCity = "London"; // local state of current city for easier use in all event listeners - London as default

// Logical variable for results
let results = false;

// EVENT LISTENER FOR PAGE LOAD - anything happening on PAGE LOAD should be in here

$(document).ready(function () {
  getCitiesFromLocalStorage();
  createMap(currentCity);
  getUnsplashImages(currentCity);
  displayCurrentCityName(currentCity);
});

// * EVENT LISTENER FOR USER INPUT IN FORM - anything that happens when SEARCH is clicked should be here

$("#search-btn").on("click", function (event) {
  event.preventDefault();
  var cityInput = $("#search-box").val().trim();
  if (cityInput === "" || cityInput === undefined) {
    $("#search-modal").modal("show");
    results = false;
    return;
  }

  currentCity = cityInput;
  createMap(cityInput); // if this returns results = false the scrollTo (below) will not run
  scrollTo(results);
  getUnsplashImages(cityInput);
  getCitiesFromLocalStorage();
  displayCurrentCityName(cityInput);
  $("#search-box").val(""); // empty input display
});

// EVENT LISTENER FOR RANDOM CITY BUTTON - anything that happens when RANDOM pressed should be in here

$("#random-btn").on("click", function () {
  results = true;
  scrollTo(results);
  var randomCity = getRandomCity();
  currentCity = randomCity;
  createMap(randomCity);
  getUnsplashImages(randomCity);
  getCitiesFromLocalStorage();
  displayCurrentCityName(randomCity);
});

// EVENT LISTENER FOR FAVORITES BUTTON - anything that happens when ADD TO FAVORITES clicked should be in here

$("#save-btn").on("click", function () {
  addCityToCities(currentCity);
  addToLocalStorage();
  renderFavoritesButtons();
});

// EVENT LISTENER FOR REMOVE BUTTON - anything that happens when REMOVE RECENT CITY is clicked should be in here

$("#remove-btn").on("click", function () {
  removeCityFromCities();
  renderFavoritesButtons();
});

//  EVENT LISTENER FOR CITY BUTTONS IN FAVORITES

$(document).on("click", ".faves", function () {
  var city = $(this).attr("data-city");
  currentCity = city;
  getUnsplashImages(currentCity);
  displayCurrentCityName(currentCity);
  createMap(currentCity);
});

// HELPER FUNCTIONS

// function displaying city in #current-city element
function displayCurrentCityName(cityName) {
  var capitalizedCity = capitalizeCityName(cityName);
  $("#current-city").text(capitalizedCity);
}

function scrollTo(results) {
  if (results !== false) {
    $("html, body").animate(
      {
        scrollTop: $("#results").first().offset().top,
      },
      2000
    );
  }
}
