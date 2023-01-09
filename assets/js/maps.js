'use strict';

// Object to store the lat and lng
let coordinates;
// Name of the location
let locationName;

const key = 'AIzaSyCxxgDfu2qDm0BdsQyrxeBQnPOtJWJO1RU';

function createMap(city) {
	// # GEOLOCATION API
	const geoLocationURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${key}`;

	$.ajax({
		type: 'GET',
		url: geoLocationURL,
		success: function (response) {
			locationName = response.results[0].formatted_address;
			coordinates = response.results[0].geometry.location;
		},

		// # MAPS API
	}).then(() => {
		const location = new google.maps.LatLng(coordinates);

		let mapProperties = {
			center: location,
			zoom: 4,
			mapTypeId: 'terrain',
			disableDefaultUI: true,
			scrollwheel: false,
		};

		// Creates the map with the properties passed
		let map = new google.maps.Map(
			document.querySelector('#google-map'),
			mapProperties
		);

		// * FEATURES FOR THE MAP
		// The marker, positioned at given coordinates
		const marker = new google.maps.Marker({
			position: location,
			map: map,
		});
		// Zoom to 8 when clicking on marker
		google.maps.event.addListener(marker, 'click', function () {
			var pos = map.getZoom();
			map.setZoom(8);
			map.setCenter(marker.getPosition());
		});
	});
}
