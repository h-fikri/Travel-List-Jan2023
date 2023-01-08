var cities = [];

// function that stores cities to localstorage
function addToLocalStorage(cities) {
  localStorage.setItem("cities", JSON.stringify(cities));
}
