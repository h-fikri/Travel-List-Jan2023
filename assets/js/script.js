// event listener for random city button

$("#random-btn").on("click", function () {
  console.log("random clicked");
  var randomCity = getRandomCity();
  console.log(randomCity);
  getUnsplashImages(randomCity);
});

// form event listener
$("#search-btn").on("click", function (event) {
  event.preventDefault();
  var cityInput = $("#search-box").val().trim();
  console.log(cityInput);
});
// getting user input when form is submitted
