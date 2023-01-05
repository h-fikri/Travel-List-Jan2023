// Notes - Description
// - getUnsplashImages function is called with a city name and creates 4 img elements inside an .images class element.
// - The targeted element ID can be changed by changing targetId variable
// -------------------------------

var API_KEY = "6KNhdCaJ8Ct-wL5wW3cjzWPIC-Os2V-DTAJxL1-u2HA";
var SECRET = "IB9Isji_B6sbWfFns8-N_4eeOnn4NLBAK4BjZKZlqEc"; // not in use
var targetId = "images";

// function called with a cityName parameter
function getUnsplashImages(cityName) {
  // query url
  // var URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${cityName}&per_page=4&format=json&nojsoncallback=1`;
  var URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}&query=${cityName}`;
  console.log(cityName);
  // AJAX call
  $.ajax({
    type: "GET",
    url: URL,
  }).then(function (response) {
    // console.log(response[0].urls.regular);
    //     var photoArray = response.photos.photo;
    var imagesLinks = [];
    response.map(function (el) {
      var imageUrl = el.urls.regular;
      imagesLinks.push(imageUrl);
    });

    displayImages(imagesLinks);
    //   });
    // }
  });
}

// function that displays images by creating img element in images div
function displayImages(imagesLinksArray) {
  imagesLinksArray.map(function (link) {
    imgEl = $("<img>").attr("src", link);
    $(`#${targetId}`).append(imgEl);
  });
}

// testing example
getUnsplashImages("London");
