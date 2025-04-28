let feelTempText =  document.getElementById('feelTemp')
let tempText = document.getElementById('mainTemp')
let highLowTemp = document.getElementById('highLowTemp')
let sunRise = document.getElementById('sunRise')
let sunSet = document.getElementById('sunSet')
let humidText = document.getElementById('humidText')
let windText = document.getElementById('windText')
let typeText = document.getElementById('typeText')
let cityTextEl = document.getElementById('citytext')
const btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    const key = 'f65dd5dbca64eead86e87f1dec1160d3'
    let city = typeText.value
    let country = 'th'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${key}`
    fetch(url)
    .then(res=>res.json())
    .then(json =>{
        console.log(json);
        feelTempText.innerHTML=`${json.main.feels_like}°C`
        tempText.innerHTML=`${json.main.temp}°C`
        highLowTemp.innerHTML=`H:${json.main.temp_max}°C L:${json.main.temp_min}°C`
        humidText.innerHTML=`${json.main.humidity}%`
        windText.innerHTML=`${json.wind.speed}km/h`
        let sunriseTimestamp = json.sys.sunrise;
        let sunsetTimestamp = json.sys.sunset;
        const sunriseDate = new Date(sunriseTimestamp * 1000);
        const localSunriseTime = new Date(sunriseDate.getTime());
        const hours = String(localSunriseTime.getHours()).padStart(2, '0');
        const minutes = String(localSunriseTime.getMinutes()).padStart(2, '0');
        const seconds = String(localSunriseTime.getSeconds()).padStart(2, '0');
        const formattedSunriseTime = `${hours}:${minutes}:${seconds}`;
        const sunsetDate = new Date(sunsetTimestamp * 1000);
        const localSunsetTime = new Date(sunsetDate.getTime());
        const hours2 = String(localSunsetTime.getHours()).padStart(2, '0');
        const minutes2 = String(localSunsetTime.getMinutes()).padStart(2, '0');
        const seconds2 = String(localSunsetTime.getSeconds()).padStart(2, '0');
        const formattedSunsetTime = `${hours2}:${minutes2}:${seconds2}`;
        sunRise.innerHTML=`Sunrise ${formattedSunriseTime} AM`
        sunSet.innerHTML=`Sunset ${formattedSunsetTime} PM`
        const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
        cityTextEl.innerText = capitalizedCity
    })
})
       
  
   
      

   
