var cities = [];

// function that ADDS city to cities state (array above)
function addCityToCities(city) {
  let cityExists = false;
  cities.map((ct) => {
    if (ct === city) {
      // console.log(`city already exists`);
      cityExists = true;
      return;
    }
  });
  if (!cityExists) {
    // console.log("It doesnt exist so I add it!");
    cities.push(capitalizeCityName(city));
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
  console.log(`LocalStorage Cities: ${cities}`);
}

// helper function that Captalises city name
function capitalizeCityName(city) {
  return city.charAt(0).toUpperCase() + city.slice(1);
}

// add function that renders buttons of cities from LS in #favorites
