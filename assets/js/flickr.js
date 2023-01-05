// Notes
// getFlickrImages function is called with a city name and creates 4 img elements inside an images class div
// -------------------------------

var API_KEY = "af8b14f5d63c1d15f94a974b1e37ffb7";
var SECRET = "d88fb2bc3f7b2a07"; // not in use

// function called with a cityName parameter
function getFlickrImages(cityName) {
  // query url
  var URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${cityName}&per_page=4&format=json&nojsoncallback=1`;

  // AJAX call
  $.ajax({
    type: "GET",
    url: URL,
  }).then(function (response) {
    var photoArray = response.photos.photo;

    // array that stores the 4 image urls
    var imagesLinks = [];

    // building img urls from the response of flickr API
    photoArray.map(function (photo) {
      var imageDetails = {
        id: photo.id,
        secret: photo.secret,
        server: photo.server,
      };
      var imageURL = `https://live.staticflickr.com/${imageDetails.server}/${imageDetails.id}_${imageDetails.secret}.jpg`;
      imagesLinks.push(imageURL);
    });

    displayImages(imagesLinks);
  });
}

// function that displays images by creating img element in images div
function displayImages(imagesLinksArray) {
  imagesLinksArray.map(function (link) {
    imgEl = $("<img>").attr("src", link);
    $(".images").append(imgEl);
  });
}

// testing example
getFlickrImages("London");
