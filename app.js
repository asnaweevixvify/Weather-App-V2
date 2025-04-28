let feelTempText =  document.getElementById('feelTemp')
let tempText = document.getElementById('mainTemp')
let highLowTemp = document.getElementById('highLowTemp')
let sunRise = document.getElementById('sunRise')
let sunSet = document.getElementById('sunSet')
let humidText = document.getElementById('humidText')
let windText = document.getElementById('windText')
let weatherText = document.getElementById('weatherdes')
let weatherIcon = document.getElementById('weathericon')
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
        if(json.cod==='404'){
            Swal.fire({
                icon: "error",
                title: "City not found",
                text: "Please try again",
              });
        }
        else{
            feelTempText.innerHTML=`${json.main.feels_like}°C`
            tempText.innerHTML=`${json.main.temp}°C`
            highLowTemp.innerHTML=`H:${json.main.temp_max}°C L:${json.main.temp_min}°C`
            humidText.innerHTML=`${json.main.humidity}%`
            windText.innerHTML=`${json.wind.speed}km/h`
            weatherText.innerHTML=`${json.weather[0].description}`
            if(json.weather[0].description.toLowerCase().includes('cloud')){
                weatherIcon.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffda5e" class="bi bi-cloud-sun" viewBox="0 0 16 16">
                <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
                <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
              </svg>`
            }
            if(json.weather[0].description.toLowerCase().includes('overcast')){
                weatherIcon.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffda5e" class="bi bi-clouds" viewBox="0 0 16 16">
                <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.5 3.5 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.6 5.6 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5"/>
                <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.5 4.5 0 0 1 7 5m3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492z"/>
              </svg>`
            }
            if(json.weather[0].description.toLowerCase().includes('rain')){
                weatherIcon.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffda5e" class="bi bi-cloud-drizzle" viewBox="0 0 16 16">
                <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2"/>
              </svg>`
            }
            if(json.weather[0].description.toLowerCase().includes('sun')){
                weatherIcon.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="156" height="156" fill="#ffda5e" class="bi bi-sun" id="weathericon" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
            </svg>`
            }
            if(json.weather[0].description.toLowerCase().includes('clear')){
                weatherIcon.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="156" height="156" fill="#ffda5e" class="bi bi-sun" id="weathericon" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
            </svg>`
            }
            if(json.weather[0].description.toLowerCase().includes('thunderstorm')){
                weatherIcon.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-lightning" viewBox="0 0 16 16">
                <path d="M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973M8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 1M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724z"/>
              </svg>`
            }
            let sunriseTimestamp = json.sys.sunrise;
            let sunsetTimestamp = json.sys.sunset;
            const sunriseDate = new Date(sunriseTimestamp * 1000);
            const localSunriseTime = new Date(sunriseDate.getTime());
            const hours = String(localSunriseTime.getHours()).padStart(2, '0');
            const minutes = String(localSunriseTime.getMinutes()).padStart(2, '0');
            const formattedSunriseTime = `${hours}:${minutes}`;
            const sunsetDate = new Date(sunsetTimestamp * 1000);
            const localSunsetTime = new Date(sunsetDate.getTime());
            const hours2 = String(localSunsetTime.getHours()).padStart(2, '0');
            const minutes2 = String(localSunsetTime.getMinutes()).padStart(2, '0');
            const formattedSunsetTime = `${hours2}:${minutes2}`;
            sunRise.innerHTML=`Sunrise ${formattedSunriseTime} AM`
            sunSet.innerHTML=`Sunset ${formattedSunsetTime} PM`
            const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
            cityTextEl.innerText = capitalizedCity
        }
    })
})
       
  
   
      

   
