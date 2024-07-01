const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiKey = "fe165455b310e5bf4e5e5456418f15eb";
const searchBox = document.querySelector(".card input");
const btn = document.querySelector(".card button");
const weatherImage = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const repsponse = await fetch(apiUrl + city + "&appid=${apiKey}");

  if (Response.status == 404) {
    document.querySelector(".error").computedStyleMap.display = "block";
    document.querySelector(".weather").computedStyleMap.display = "none";
  } else {
    var data = await Response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

    if (data.weather[0].main == "Clouds") {
      weatherImage.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImage.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImage.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImage.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImage.src = "images/Mist.png";
    }

    document.querySelector(".weather").computedStyleMap.display = "block";
    document.querySelector(".error").computedStyleMap.display = "none";
  }
}

btn.addEventListener("click", () => {
  checkWeather(searchBox);
});
