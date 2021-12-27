const searchBtn = document.getElementById("btn-search");
const weatherData = document.getElementById("weather-data");
const apiKey = "832a3a54be2daaa13cd23fcb2031baef";

searchBtn.addEventListener("click", LoadWeather);


function LoadWeather() {
    let cityName = document.getElementById("search-input").value;  
    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    fetch(urlAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data.weather[0].description);
        let html = "";
        html = `
            <h3> ${cityName} </h3>
            <h3> ${data.weather[0].description} </h3>
            <h4> Temperature: ${data.main.temp} C </h4>
            <h4> Humidity: ${data.main.humidity} %</h4>
            <h4> Wind: ${data.wind.speed} kmph </h4>
        `;
        weatherData.innerHTML = html ;

    }) 
    .catch(err => console.log(err))
}