const words = [
  "Tokyo",
  "Delhi",
  "Shanghai",
  "São Paulo",
  "Mumbai",
  "Mexico City",
  "Osaka",
  "New York City",
  "Cairo",
  "Los Angeles",
  "Calcutta",
  "Beijing",
  "Karachi",
  "Buenos Aires",
  "Chicago",
  "Moscow",
  "Istanbul",
  "Seoul",
  "Paris",
  "Lagos",
  "Jakarta",
  "Seattle",
  "Bangkok",
  "Tehran",
  "Lima",
  "Bogotá",
  "Hong Kong",
  "Toronto",
  "Sydney",
  "Singapore",
  "Melbourne",
  "Madrid",
  "San Francisco",
  "Taipei",
  "Rio de Janeiro",
  "Dallas",
  "Philadelphia",
  "Houston",
  "Manila",
  "Toronto",
  "Kinshasa",
  "Montreal",
  "Tianjin",
  "Guangzhou",
  "Santiago",
  "Belo Horizonte",
  "Chengdu",
  "Baghdad",
  "Lahore",
  "Bangalore",
  "Miami",
  "Barcelona",
  "Riyadh",
  "Washington",
  "Las Vegas",
  "Milan",
  "Athens",
  "Kyoto",
  "Lisbon",
  "Barcelona",
  "Kolkata",
  "Ho Chi Minh",
  "Toronto",
  "Brisbane",
  "Toronto",
  "Vancouver",
  "Taipei",
  "Toronto",
];

let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      let elem = document.getElementById("search-box");
      elem.setAttribute(
        "placeholder",
        elem.getAttribute("placeholder") + word.shift()
      );
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document
        .getElementById("search-box")
        .setAttribute("placeholder", word.join(""));
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 80);
  };
  loopDeleting();
}

typingEffect();
