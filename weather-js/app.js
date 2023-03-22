const ls = new LS();
const weatherLocation = ls.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-change-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);

  ls.setLocationData(city, state);

  getWeather();

  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((res) => ui.paint(res))
    .catch((err) => console.log(err));
}
