const APIKEY = "41b5d592eb9f7f9d28b005b56b7ebea0";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(APIURL + city + `&appid=${APIKEY}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        let data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src ="images/clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src ="images/rain.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src ="images/clear.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src ="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src ="images/mist.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src ="images/snow.png";
        }
    } catch (error) {
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".humidity").innerHTML = "";
        document.querySelector(".wind").innerHTML = "";
        weatherIcon.src ="";
    }
}
searchBox.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})