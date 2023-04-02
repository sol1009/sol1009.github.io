const API_KEY = "cebfa58e3043eab34d56dd70179e6711";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.name, data.weather[0].main);
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name + " 시의 날씨";
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        });
}
function onGeoError() {
    alert("can't find you. No weater for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



