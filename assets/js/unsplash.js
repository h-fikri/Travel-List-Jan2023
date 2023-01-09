// Notes - Description
// - getUnsplashImages function is called with a city name and creates 4 img elements inside 4 elements with specific targetIds.
// - The targeted element IDs can be changed by changing targetIds variable
// -------------------------------

var API_KEY = "6KNhdCaJ8Ct-wL5wW3cjzWPIC-Os2V-DTAJxL1-u2HA";
var targetIds = ["img-1-div", "img-2-div", "img-3-div", "img-4-div"]; // change the IDs of the html element where the images will be appended to (don't include the # in the name)

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

// function that displays images by creating an img element in each #targetId div (with src and alt attributes filled in)
function displayImages(imagesInfoArray) {
  imagesInfoArray.map(function (image, i) {
    $(`#${targetIds[i]}`).empty(); // empty previous content of each
    imgEl = $("<img>").attr("src", image.url);
    imgEl.attr("alt", image.alt);
    var classes = "img-fluid rounded";
    imgEl.attr("class", classes);
    $(`#${targetIds[i]}`).append(imgEl);
  });
}
// testing example
// getUnsplashImages("London");
