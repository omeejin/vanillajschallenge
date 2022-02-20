const API_KEY = "5845849b90864ee94fb4c0d0159a24c6";
const weatherinfo = document.querySelector("#weather span");

function onGeoGood(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        weatherinfo.innerText = `City: ${data.name} | Weather: ${data.weather[0].main} | Temperature: ${data.main.temp} `;
    });
};

function onGeoBad() {
    alert("Can't locate you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoGood, onGeoBad);
