import "../css/is_level_dry.css";
import "./basic";
// import "../resources/weather_icons"
// const axios = require('axios');


// function importAll(r) {
//     return r.keys().map(r);
// }
  
// const weather_icons = importAll(require.context('../resources/weather_icons/PNG', false, /\.(png|jpe?g|svg)$/));

const selectSymbol = (symbolCode) => {
    // create a obj with the src and alt of needed img
    let obj = {
        src: '',
        alt: ''
    }
    switch(symbolCode) {
        case 0: 
            obj.src = '../resources/weather_icons/0.png';
            obj.alt = 'Clear Night';
            break;
        case 1: 
            obj.src = '../resources/weather_icons/1.png';
            obj.alt = 'Sunny Day';
            break;
        case 2: 
            obj.src = '../resources/weather_icons/2.png';
            obj.alt = 'Partly Cloudy Night';
            break;
        case 3: 
            obj.src = '../resources/weather_icons/3.png';
            obj.alt = 'Partly Cloudy Day';
            break;
        case 5: 
            obj.src = '../resources/weather_icons/5.png';
            obj.alt = 'Mist';
            break;
        case 6: 
            obj.src = '../resources/weather_icons/5.png';
            obj.alt = 'Mist';
            break;
        case 7: 
            obj.src = '../resources/weather_icons/7.png';
            obj.alt = 'Cloudy Day';
            break;
        case 8: 
            obj.src = '../resources/weather_icons/8.png';
            obj.alt = 'Overcast Day';
            break;
        case 9: 
            obj.src = '../resources/weather_icons/9.png';
            obj.alt = 'Partly Rainy Night';
            break;
        case 10: 
            obj.src = '../resources/weather_icons/10.png';
            obj.alt = 'Partly Rainy Day';
            break;
        case 11: 
            obj.src = '../resources/weather_icons/10.png';
            obj.alt = 'Partly Rainy Day';
            break;
        case 12: 
            obj.src = '../resources/weather_icons/10.png';
            obj.alt = 'Partly Rainy Day';
            break;
        case 13: 
            obj.src = '../resources/weather_icons/13.png';
            obj.alt = 'Heavy Rain Night';
            break;
        case 14: 
            obj.src = '../resources/weather_icons/14.png';
            obj.alt = 'Heavy Rain';
            break;
        case 15: 
            obj.src = '../resources/weather_icons/14.png';
            obj.alt = 'Heavy Rain';
            break;
        case 16: 
            obj.src = '../resources/weather_icons1/16.png';
            obj.alt = 'Sleet Night';
            break;
        case 17: 
            obj.src = '../resources/weather_icons/17.png';
            obj.alt = 'Sleet Day';
            break;
        case 18: 
            obj.src = '../resources/weather_icons/17.png';
            obj.alt = 'Sleet';
            break;
        case 19: 
            obj.src = '../resources/weather_icons1/16.png';
            obj.alt = 'Sleet Night';
            break;
        case 20: 
            obj.src = '../resources/weather_icons/17.png';
            obj.alt = 'Sleet Day';
            break;
        case 21: 
            obj.src = '../resources/weather_icons/17.png';
            obj.alt = 'Sleet';
            break;
        case 22: 
            obj.src = '../resources/weather_icons1/16.png';
            obj.alt = 'Light Snow Night';
            break;
        case 23: 
            obj.src = '../resources/weather_icons/17.png';
            obj.alt = 'Light Snow Day';
            break;
        case 24: 
            obj.src = '../resources/weather_icons/17.png';
            obj.alt = 'Light Snow';
            break;
        case 25: 
            obj.src = '../resources/weather_icons1/16.png';
            obj.alt = 'Snow Night';
            break;
        case 26: 
            obj.src = '../resources/weather_icons/23.png';
            obj.alt = 'Snow Day';
            break;
        case 27: 
            obj.src = '../resources/weather_icons/23.png';
            obj.alt = 'Snow';
            break;
        case 28: 
            obj.src = '../resources/weather_icons1/28.png';
            obj.alt = 'Thunder Night';
            break;
        case 29: 
            obj.src = '../resources/weather_icons/29.png';
            obj.alt = 'Thunder Day';
            break;
        case 30: 
            obj.src = '../resources/weather_icons/29.png';
            obj.alt = 'Thunder';
            break;
        default:
            obj.src = '../resources/weather_icons/8.png';
            obj.alt = 'Overcast Day';
            break;
    }
    return obj;
}

const getStartIndex = (weatherArray) => {
    var today = new Date();
    var time = today.getHours();
    for (let i=0;i<weatherArray.length;i++) {
        if (weatherArray[i].time.substring(11, 13) == time) {
            return i;
        }
    }
}
function round5(x)
{
    return Math.ceil(x/5)*5;
}
const populateWeather = weatherArray => {
    console.log(weatherArray);
    let startIndex = getStartIndex(weatherArray);
    $('.step-time th').each(function() {
        $(this).text(weatherArray[startIndex].time.substring(11,16));
        startIndex = startIndex + 1;
    })
    
    // filling in precipation chance 
    $('.step-precipation td').each(function() {
        $(this).text(weatherArray[startIndex].probOfPrecipitation + '%');
        startIndex = startIndex + 1;
    })
    
    $('.step-symbol td').each(function() {
        const img = document.createElement('img');
        let symbolInfo = selectSymbol(weatherArray[startIndex].significantWeatherCode);
        img.src = symbolInfo.src;
        img.alt = symbolInfo.alt;
        startIndex = startIndex + 1;
        $(this).append(img);
    })

    // switch (weatherType) {
    //     case 'sunny': 
    //         return '../resources/weather_icons/SVG/danieledesantis-weather-icons-cloudy-2.svg'; 
    //     case 'wet':
    //         return '../resources/weather_icons/SVG/danieledesantis-weather-icons-night-rainy-2.svg';
    // }
}

$(document).ready(function() {
    const options = {
        method: 'GET',
        // qs: {
        //     excludeParameterMetadata: false,
        //     includeLocationName: true,
        //     latitude: 50,
        //     longitude: 1},
        headers: {
            accept: 'application/json',
            'x-ibm-client-secret': 'U7aO6pC0vT5iU7hB6wR4kS7fM6aR7gJ0iI5yN7pX0mP6bV6bT8',
            'x-ibm-client-id': '59a3f28a-5555-4a8a-8a4c-16e07bf414c1'
        }
    };

    fetch('https://api-metoffice.apiconnect.ibmcloud.com/metoffice/production/v0/forecasts/point/hourly?excludeParameterMetadata=false&includeLocationName=false&latitude=50.8311&longitude=0.1333', options)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res);populateWeather(res.features[0].properties.timeSeries)})
    .catch(error=>console.log(error))

    // request(options, (err, res, body) => {
    //     if (err) {
    //         console.log('yo')
    //         next(err);
    //     } else {
    //         console.log('yo wagaain itnit')
    //         console.log(JSON.parse(body));
    //     }
    // })
})