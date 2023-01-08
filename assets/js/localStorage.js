var cities = [];

// function that ADDS city to cities state (array above)
function addCityToCities(city) {
  let cityExists = false;
  cities.map((ct) => {
    if (ct.cityName === city) {
      console.log(`city already exists`);
      cityExists = true;
      return;
    }
  });
  if (!cityExists) {
    console.log("It doesnt exist so I add it!");
    cities.push(city);
  }
}

// function that ADDS cities to localstorage
function addToLocalStorage() {
  localStorage.setItem("cities", JSON.stringify(cities));
}

// function that READS cities from localStorage
function getCitiesFromLocalStorage() {
  var storedCities = JSON.parse(localStorage.getItem("cities"));
  if (storedCities !== null) {
    cities = storedCities;
  }
  console.log(`Cities: ${cities}`);
}