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
  renderFavoritesButtons();
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

// function that renders buttons of cities from LS in #favorites
function renderFavoritesButtons() {
  $("#favourites-list").empty();

  cities.map(function (ct) {
    var btnEl = $("<button>");
    btnEl.addClass("btn rounded-pill col-12 col-sm-6 col-lg-12 m-1 faves");
    btnEl.attr("data-city", ct);
    btnEl.text(ct);
    $("#favourites-list").append(btnEl);
  });
}
