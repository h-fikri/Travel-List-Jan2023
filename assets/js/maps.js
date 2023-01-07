'use strict';

// Empty string the store the searched input value
let searchInputEl;
// Empty variable for the map constructor
let map;
// Object to store the lat and lng
let coordinates;
// Name of the location
let locationName;

const key = 'AIzaSyCxxgDfu2qDm0BdsQyrxeBQnPOtJWJO1RU';

$('#search-btn').click(function (e) {
	e.preventDefault();

	// # GEOLOCATION API
	searchInputEl = $('#search-box').val();
	const geoLocationURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchInputEl}&key=${key}
`;

	console.log(searchInputEl);

	$.ajax({
		type: 'GET',
		url: geoLocationURL,
		success: function (response) {
			// console.log(response);
			// console.log(response.results);
			// console.log(response.results[0]);
			// The name of the city
			// console.log(response.results[0].formatted_address);
			// Coordinates of the city
			// console.log(response.results[0].geometry.location);

			locationName = response.results[0].formatted_address;
			coordinates = response.results[0].geometry.location;
			console.log(locationName);
			console.log(coordinates);
		},

		// # MAPS API
	}).then(function initMap() {
		// coordinates of the location
		// ! ----------------------------------------------------------
		const location = new google.maps.LatLng(coordinates);
		// ! ----------------------------------------------------------

		// Properties of the map
		let mapProperties = {
			// Position to be centred at
			center: location,
			// Default zoom when map renders
			zoom: 6,
		};

		// Creates the map with the properties passed
		map = new google.maps.Map(
			document.querySelector('#google-map'),
			mapProperties
		);

		// * FEATURES FOR THE MAP
		// The marker, positioned at given coordinates
		const marker = new google.maps.Marker({
			position: location,
			map: map,
		});
		// Zoom to 9 when clicking on marker
		google.maps.event.addListener(marker, 'click', function () {
			var pos = map.getZoom();
			map.setZoom(10);
			map.setCenter(marker.getPosition());
		});
	});
});
