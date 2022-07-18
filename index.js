
let searchBar = document.querySelector("#search-bar");
let searchBtn = document.querySelector("#search-btn");
let mainCity = document.querySelector("#main-city");
let mainTemp = document.querySelector("#main-temp");
let mainMaxTemp = document.querySelector("#main-max-temp");
let mainMinTemp = document.querySelector("#main-min-temp");
let mainImg = document.querySelector("#main-img");
let mainDesc = document.querySelector("#main-desc");
let mainPressure = document.querySelector("#main-pressure");
let mainWind = document.querySelector("#main-wind");

//Main cities container
let mainCity1 = document.querySelector("#main-city-1");
let mainCityImg1 = document.querySelector("#main-city-img-1");
let mainCityDesc1 = document.querySelector("#main-city-desc-1");
let mainCityMaxTemp1 = document.querySelector("#main-city-max-temp-1");
let mainCityMinTemp1 = document.querySelector("#main-city-min-temp-1");
let mainCityPressure1 = document.querySelector("#main-city-pressure-1");
let mainCityWind1 = document.querySelector("#main-city-wind-1");

let mainCity2 = document.querySelector("#main-city-2");
let mainCityImg2 = document.querySelector("#main-city-img-2");
let mainCityDesc2 = document.querySelector("#main-city-desc-2");
let mainCityMaxTemp2 = document.querySelector("#main-city-max-temp-2");
let mainCityMinTemp2 = document.querySelector("#main-city-min-temp-2");
let mainCityPressure2 = document.querySelector("#main-city-pressure-2");
let mainCityWind2 = document.querySelector("#main-city-wind-2");

let mainCity3 = document.querySelector("#main-city-3");
let mainCityImg3 = document.querySelector("#main-city-img-3");
let mainCityDesc3 = document.querySelector("#main-city-desc-3");
let mainCityMaxTemp3 = document.querySelector("#main-city-max-temp-3");
let mainCityMinTemp3 = document.querySelector("#main-city-min-temp-3");
let mainCityPressure3 = document.querySelector("#main-city-pressure-3");
let mainCityWind3 = document.querySelector("#main-city-wind-3");


let API_KEY = "d8a798bdd72784c3835a67544b5c5e25";
const CONVERTION_CONSTANT = 273.15;
let URL = `https://api.openweathermap.org/data/2.5/weather?q=Japan&appid=${API_KEY}`;

//Valores por defecto en el cuadro principal
fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        mainCity.innerHTML = data.name;
        mainTemp.innerHTML = (data.main.temp - CONVERTION_CONSTANT).toFixed(1);
        mainMaxTemp.innerHTML = (data.main.temp_max - CONVERTION_CONSTANT).toFixed(1);
        mainMinTemp.innerHTML = (data.main.temp_min - CONVERTION_CONSTANT).toFixed(1);
        mainWind.innerHTML = data.wind.speed;
        mainPressure.innerHTML = data.main.pressure;
        mainImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        mainDesc.innerHTML = data.weather[0].description;
    });



//Agregando un listener al boton search
//Nuevos valores en el cuadro principal
searchBtn.addEventListener('click', function(){

    let ciudad = searchBar.value;

    URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`
    // URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        mainCity.innerHTML = data.name;
        mainTemp.innerHTML = (data.main.temp - CONVERTION_CONSTANT).toFixed(1);
        mainMaxTemp.innerHTML = (data.main.temp_max - CONVERTION_CONSTANT).toFixed(1);
        mainMinTemp.innerHTML = (data.main.temp_min - CONVERTION_CONSTANT).toFixed(1);
        mainWind.innerHTML = data.wind.speed;
        mainPressure.innerHTML = data.main.pressure;
        mainImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        mainDesc.innerHTML = data.weather[0].description;
    });

});

//Main cities containers

let URL1 = `https://api.openweathermap.org/data/2.5/weather?q=Mexico&appid=${API_KEY}`
let URL2 = `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=${API_KEY}`
let URL3 = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${API_KEY}`

fetch(URL1)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        mainCity1.innerHTML = data.name;
        mainCityMaxTemp1.innerHTML = (data.main.temp_max - CONVERTION_CONSTANT).toFixed(1);
        mainCityMinTemp1.innerHTML = (data.main.temp_min - CONVERTION_CONSTANT).toFixed(1);
        mainCityWind1.innerHTML = data.wind.speed;
        mainCityPressure1.innerHTML = data.main.pressure;
        mainCityImg1.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        mainCityDesc1.innerHTML = data.weather[0].description;
    });

fetch(URL2)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        mainCity2.innerHTML = data.name;
        mainCityMaxTemp2.innerHTML = (data.main.temp_max - CONVERTION_CONSTANT).toFixed(1);
        mainCityMinTemp2.innerHTML = (data.main.temp_min - CONVERTION_CONSTANT).toFixed(1);
        mainCityWind2.innerHTML = data.wind.speed;
        mainCityPressure2.innerHTML = data.main.pressure;
        mainCityImg2.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        mainCityDesc2.innerHTML = data.weather[0].description;
    });

fetch(URL3)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        mainCity3.innerHTML = data.name;
        mainCityMaxTemp3.innerHTML = (data.main.temp_max - CONVERTION_CONSTANT).toFixed(1);
        mainCityMinTemp3.innerHTML = (data.main.temp_min - CONVERTION_CONSTANT).toFixed(1);
        mainCityWind3.innerHTML = data.wind.speed;
        mainCityPressure3.innerHTML = data.main.pressure;
        mainCityImg3.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        mainCityDesc3.innerHTML = data.weather[0].description;
    });