var cities = [];

// function that stores cities to localstorage
function addToLocalStorage(cities) {
  localStorage.setItem("cities", JSON.stringify(cities));
}

// function that adds city cities state
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
