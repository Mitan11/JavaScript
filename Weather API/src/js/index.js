console.log("Har Har Mahadev");

const apiKey = '4425138e3ca6358e076ebf81048ef293';
searchCountry.focus();
sbtn.addEventListener('click', () => {
    const city = document.getElementById("searchCountry")

    if (city.value != '' && city.value != ' ') {
        console.log(city.value);
        getWeather(city.value);
        city.value = '';
    } else {
        alert('Please enter a city name');
    }
});

async function getWeather(city) {
    let cityName = city || 'ahmedabad';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    if (data.cod === 200) {
        document.getElementById('temp').innerHTML = `${data.main.temp}°C`;
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('humidity').innerHTML = `${data.main.humidity}% Humidity`;
        document.getElementById('windSpeed').innerHTML = `${data.wind.speed} Km/h`;
        document.getElementById('dis').innerHTML = `${data.weather[0].main}`;

        const weatherIcon = data.weather[0].icon;
        console.log(weatherIcon);

        document.getElementById('weatherIcon').className = `fas fa-${mapWeatherIcon(weatherIcon)} fa-3x mb-2`;
    } else {
        alert("City not found");
    }
}

getWeather();

function mapWeatherIcon(iconCode) {
    const iconMap = {
        '01d': 'sun',
        '01n': 'moon',
        '02d': 'cloud-sun',
        '02n': 'cloud-moon',
        '03d': 'cloud',
        '03n': 'cloud',
        '04d': 'cloud-meatball',
        '04n': 'cloud-meatball',
        '09d': 'cloud-showers-heavy',
        '09n': 'cloud-showers-heavy',
        '10d': 'cloud-sun-rain',
        '10n': 'cloud-moon-rain',
        '11d': 'bolt',
        '11n': 'bolt',
        '13d': 'snowflake',
        '13n': 'snowflake',
        '50d': 'smog',
        '50n': 'smog'
    };
    return iconMap[iconCode] || 'cloud-sun-rain';
}