const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=";

//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=fe165455b310e5bf4e5e5456418f15eb&units=metric

//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=fe165455b310e5bf4e5e5456418f15eb

//https://api.openweathermap.org/data/2.5/weather?units=metric&q=[object%20HTMLInputElement]&appid=fe165455b310e5bf4e5e5456418f15eb
const apiKey = "fe165455b310e5bf4e5e5456418f15eb";
const searchBox = document.querySelector(".card input");
const btn = document.querySelector(".card button");
const weatherImage = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`+"&units=metric");
  let data = await response.json();
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
   
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

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

btn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
