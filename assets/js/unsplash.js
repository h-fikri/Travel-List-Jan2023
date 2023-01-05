// Notes - Description
// - getUnsplashImages function is called with a city name and creates 4 img elements inside an .images class element.
// - The targeted element ID can be changed by changing targetId variable
// -------------------------------

var API_KEY = "6KNhdCaJ8Ct-wL5wW3cjzWPIC-Os2V-DTAJxL1-u2HA";
var targetId = "images"; // change the ID of the html element where the images will be appended to (don't include the # in the name)

// function called with a cityName parameter
function getUnsplashImages(cityName) {
  // query url
  var URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${cityName}&per_page=4`;

  // AJAX call
  $.ajax({
    type: "GET",
    url: URL,
  }).then(function (response) {
    var dataArray = response.results;
    // array that will have 4 objects - one for each image - with url and alt info of each
    var imagesInfo = [];
    dataArray.map(function (el) {
      var imageUrl = el.urls.regular;
      var imageAlt = el.alt_description;
      var imageInfo = {
        url: imageUrl,
        alt: imageAlt,
      };
      imagesInfo.push(imageInfo);
    });
    // calling function to display images in html
    displayImages(imagesInfo);
  });
}

// function that displays images by creating img element in #targetId div (with src and alt attrubutes filled in)
function displayImages(imagesInfoArray) {
  imagesInfoArray.map(function (image) {
    imgEl = $("<img>").attr("src", image.url);
    imgEl.attr("alt", image.alt);
    $(`#${targetId}`).append(imgEl);
  });
}
// testing example
// getUnsplashImages("London");
