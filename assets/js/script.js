// event listener for random city button

$("#random-btn").on("click", function () {
  console.log("random clicked");
  var randomCity = getRandomCity();
  console.log(randomCity);
  getUnsplashImages(randomCity);
});
