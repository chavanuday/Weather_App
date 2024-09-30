const apikey = "ae9e4e3a8102aa61bff13d1368ed69b5";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metrics&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name + " city";
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " degree";
  document.querySelector(".humidity").innerHTML = data.main.humidity;
}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
