var cities = []; //temporary local state

// function that ADDS city to cities state (array above)
function addCityToCities(city) {
  let cityExists = false;
  // capitalize city name before comparing with previous searches
  city = capitalizeCityName(city);
  cities.map((ct) => {
    if (ct === city) {
      // console.log(`city already exists`);
      cityExists = true;
      return;
    }
  });
  if (!cityExists) {
    // console.log("It doesnt exist so I add it!");
    cities.push(city);
  }
}

// function that ADDS cities to localStorage
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

// helper function that Capitalizes city name

function capitalizeCityName(city) {
  city = city.toLowerCase();
  // for cities with many words capitalize each one below
  cityArray = city.split(" ");
  var newCityArray = [];
  cityArray.map((word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    newCityArray.push(word);
  });
  return newCityArray.join(" ");
}

// add function that renders buttons of cities from LS in #favorites
