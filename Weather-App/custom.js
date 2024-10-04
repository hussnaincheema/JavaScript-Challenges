const apiKey = "b24a83dc4371008b2372669c7468942d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temperature = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const image = document.querySelector(".weather_img");
const errorMessage = document.querySelector(".error");
const weatherDisplay = document.querySelector(".weather");

const checkWeather = async (city) => {
  try{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    temperature.innerHTML = Math.round(data.main.temp) + " °C";
    cityName.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + " %";
    windSpeed.innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        image.src = "Images/clouds.png";
        break;
      case "Clear":
        image.src = "Images/clear.png";
        break;
      case "Rain":
        image.src = "Images/rain.png";
        break;
      case "Drizzle":
        image.src = "Images/drizzle.png";
        break;
      case "Mist":
        image.src = "Images/mist.png";
        break;
      case "Smoke":
        image.src = "Images/snow.png";
        break;

      default:
        break;
    }

    errorMessage.style.display = "none";
    weatherDisplay.style.display = "block";

  } catch{
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    errorMessage.style.fontWeight = "bold";
    weatherDisplay.style.display = "none";
  }
  
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
