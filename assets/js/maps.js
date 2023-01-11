"use strict";

// Name of the location
let locationName;
// Status of the Geocoding response
let _status;
// Object to store the lat and lng
let coordinates;

const key = "AIzaSyCxxgDfu2qDm0BdsQyrxeBQnPOtJWJO1RU";

function createMap(city) {
  // # GEOCODING API
  const geoLocationURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${key}`;

  $.ajax({
    type: "GET",
    url: geoLocationURL,
    success: function (response) {
      _status = response.status;

      switch (_status) {
        case "OK":
          locationName = response.results[0].formatted_address;
          coordinates = response.results[0].geometry.location;
          localStorage.setItem("location", JSON.stringify(coordinates));
          results = true;
          break;
        case "ZERO_RESULTS":
          // if this happens modal is shown and results is set to false so no scrolling happens
          $("#search-modal").modal("show");
          results = false;
          break;
        case "OVER_DAILY_LIMIT":
          // if this happens modal is shown and results is set to false so no scrolling happens
          $("#search-modal").modal("show");
          results = false;
          break;
        case "OVER_QUERY_LIMIT":
          // if this happens modal is shown and results is set to false so no scrolling happens
          $("#search-modal").modal("show");
          results = false;
          break;
        case "REQUEST_DENIED":
          // if this happens modal is shown and results is set to false so no scrolling happens
          $("#search-modal").modal("show");
          results = false;
          break;
        case "INVALID_REQUEST":
          // if this happens modal is shown and results is set to false so no scrolling happens
          $("#search-modal").modal("show");
          results = false;
          break;
        case "UNKNOWN_ERROR":
          // if this happens modal is shown and results is set to false so no scrolling happens
          $("#search-modal").modal("show");
          results = false;
          break;

        default:
          break;
      }
    },

    // # MAPS API
  }).then(() => {
    const location = new google.maps.LatLng(coordinates);

    let mapProperties = {
      center: location,
      zoom: 4,
      mapTypeId: "terrain",
      disableDefaultUI: true,
      scrollwheel: false,
    };

    // Creates the map with the properties passed
    let map = new google.maps.Map(
      document.querySelector("#google-map"),
      mapProperties
    );

    // * FEATURES FOR THE MAP
    // The marker, positioned at given coordinates
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
    // Zoom to 8 when clicking on marker
    google.maps.event.addListener(marker, "click", function () {
      var pos = map.getZoom();
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    });
  });
}
