// Jumbotron buttons functionality

// random city event listener - returning 4 images
$("#random-btn").on("click", function () {
  console.log("random clicked");
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
