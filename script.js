const apiKey = "25b70fecddd02e4a0e18b80e91004a9c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBoxx = document.querySelector(".searchArea");
const searchButtonn = document.querySelector(".searchButton");
const weatherImage = document.querySelector("#clear");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.ok) {
        document.querySelector(".box2").style.display = "block";
        document.querySelector(".box3").style.display = "flex";


        var data = await response.json();

        document.querySelector("#cityName").innerHTML = data.name;
        document.querySelector("#degrees").innerHTML = Math.round(data.main.temp) + ("°C");
        document.querySelector("#humidityPercentage").innerHTML = data.main.humidity + ("%");
        document.querySelector("#windSpeed").innerHTML = data.wind.speed + (" km/h");

        if (data.weather[0].main == "Clear") {
            weatherImage.src = "images/clear.png"
        } else if (data.weather[0].main == "Snow") {
            weatherImage.src = "images/snow.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherImage.src = "images/mist.png"
        } else if (data.weather[0].main == "Rain") {
            weatherImage.src = "images/rain.png"
        } else if (data.weather[0].main == "Clouds") {
            weatherImage.src = "images/clouds.png"
        } else if (data.weather[0].main == "Haze"){
            weatherImage.src="images/haze.png"
        } else if (data.weather[0].main == "Fog"){
            weatherImage.src = "images/fog.png"
        }

        console.log(data)

    } else {
        alert("City not found, Please check your spelling")
    }
}


searchButtonn.addEventListener("click", function () {
    checkWeather(searchBoxx.value);

})

