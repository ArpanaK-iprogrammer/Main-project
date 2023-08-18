//https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid={API key}

//https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=a357d61c1da50d705184c505ca330263

//https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=a357d61c1da50d705184c505ca330263

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const api_key = "3ba0e5eedae49070b51c85ad8c30def0";

const serach_box = document.getElementById("serach-box");
const serach_btn = document.getElementById("serach-btn");
const display_card = document.getElementById("weatherCard");
const weather_Conatiner = document.getElementById("days_forecast");

serach_btn.addEventListener("click", async (event) => {
    console.log("clicked");
    event.preventDefault();
    const city = serach_box.value;
    const response = await fetch('/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ city })
    });
    const data = await response.json();
    console.log(data);

    let locationIcon = document.getElementById("weather-icon");
    const { icon } = data.weather[0];
    locationIcon.innerHTML = `<img src="icons/${icon}.png">`;

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp + "°C";
    document.getElementById("min_temp").innerHTML = "Min Temperature:" + data.main.temp_min + "°C";
    document.getElementById("max_temp").innerHTML = "Max Temperature:" + data.main.temp_max + "°C";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
    document.getElementById("description").innerHTML = data.weather[0].description;

    serach_box.value = "";
    display_card.style.display = "block"; 
});
