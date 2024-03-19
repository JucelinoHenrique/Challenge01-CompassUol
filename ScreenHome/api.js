import axios from "https://cdn.skypack.dev/axios";
const localStorageString = localStorage.getItem("dataUser");
const dataUser = JSON.parse(localStorageString);
const cityName = dataUser.city;
const countryCode = dataUser.country;
const apiKey = "548224b444cb0d98238a1fa5d20a50cf";

axios
  .get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: `${cityName},${countryCode}`,
      appid: apiKey,
      units: "metric",
    },
  })
  .then((response) => {
    console.log(response.data);
    document.getElementById("city").textContent =
      response.data.name + " - " + response.data.sys.country;
    document.getElementById("weather").textContent =
      response.data.main.temp.toFixed(0) + "°";
    const iconCode = response.data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("icon").src = iconUrl;
  })
  .catch((error) => {
    console.error(error);
  });
