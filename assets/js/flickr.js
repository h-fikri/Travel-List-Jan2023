// console.log("connected");
var KEY = "af8b14f5d63c1d15f94a974b1e37ffb7";
var SECRET = "d88fb2bc3f7b2a07";

function getFlickrImage(cityName) {
  var API_KEY = KEY;
  var URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${cityName}&per_page=4&format=json&nojsoncallback=1`;

  $.ajax({
    type: "GET",
    url: URL,
  }).then(function (response) {
    var photoArray = response.photos.photo;
    console.log(response);
    console.log(response.photos);
    console.log(response.photos.photo[0].id);
    console.log(response.photos.photo[0].secret);
    console.log(response.photos.photo[0].server);

    var imagesLinks = [];

    photoArray.map(function (photo) {
      var imageDetails = {
        id: photo.id,
        secret: photo.secret,
        server: photo.server,
      };
      var imageURL = `https://live.staticflickr.com/${imageDetails.server}/${imageDetails.id}_${imageDetails.secret}.jpg`;
      imagesLinks.push(imageURL);
    });
    // console.log(imagesLinks);
    displayImages(imagesLinks);
    // $("#image").attr("src", queryURL);
  });
}

function displayImages(imagesLinksArray) {
  imagesLinksArray.map(function (link) {
    imgEl = $("<img>").attr("src", link);
    $(".images").append(imgEl);
  });
}

getFlickrImage("London");
// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=af8b14f5d63c1d15f94a974b1e37ffb7&text=london&per_page=4&format=json&nojsoncallback=1

// https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
