'use strict';

const key = 'AIzaSyCxxgDfu2qDm0BdsQyrxeBQnPOtJWJO1RU';

// # GEOLOCATION API
// let locationName = $('#search-box').val();
let locationName = 'London';
const geoLocationURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=${key}
`;

// Object to store the lat and lng
let coordinates = {};

$.ajax({
	type: 'GET',
	url: geoLocationURL,
	dataType: 'json',
	success: response => {
		// console.log(response.results);

		console.log(
			`${response.results[0].address_components[0].long_name}, ${response.results[0].address_components[3].long_name}`
		);

		coordinates.Lat = parseFloat(response.results[0].geometry.location.lat);
		coordinates.Lng = parseFloat(response.results[0].geometry.location.lng);
	},
}).then(initMap);

$('#search-box').submit(initMap);

// Initialize and creates the map
function initMap() {
	// The coordinates of the location
	// const location = new google.maps.LatLng(51.508742, -0.12085);
	// const location = { lat: 51.508742, lng: -0.12085 };
	const location = new google.maps.LatLng(coordinates.Lat, coordinates.Lng);
	// const location = { lat: coordinates.Lat, lng: coordinates.Lng };

	// The map, centred at the location
	let mapProperties = {
		center: location,
		zoom: 6,
	};

	// Creates the map with the properties passed
	const map = new google.maps.Map(
		document.querySelector('#google-map'),
		mapProperties
	);

	// * ADDITIONS TO THE MAP
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
}

console.log(coordinates);
