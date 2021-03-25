window.addEventListener('load', () => {
    const date = new Date();
    const day = date.getDate();
    let weatherDescription = document.querySelector('.weather-description');
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone');
    let locationTimezone3 = document.querySelector('.location-timezone3')
    let temperatureType = document.querySelector('.temperature-type');
    let weatherTemperature = document.querySelector('.weather-temperature');
    let windSection= document.querySelector('.wind');
    let humiditySection= document.querySelector('.humidity');
    let todayButton = document.querySelector('.today');
    let threeButton = document.querySelector('.threeDay');
    let threeDay = document.querySelector('.weather3');
    let oneDay = document.querySelector('.weather');
    let location = document.querySelector('.location');
    let high1 = document.querySelector('.one-high');
    let high2 = document.querySelector('.two-high');
    let high3 = document.querySelector('.three-high');
    let low1 = document.querySelector('.one-low');
    let low2 = document.querySelector('.two-low');
    let low3 = document.querySelector('.three-low');
    let description1 = document.querySelector('.description-one');
    let description2 = document.querySelector('.description-two');
    let description3 = document.querySelector('.description-three'); 
    let temperatureType1 = document.querySelector('.temperature-type1');
    let temperatureType2 = document.querySelector('.temperature-type2');
    let temperatureType3 = document.querySelector('.temperature-type3');
    let home = document.querySelector('.button');
    let icon2 = document.querySelector('.icon2');
    let icon3 = document.querySelector('.icon3');
    let day1 = document.querySelector('.dayOne');
    let day2 = document.querySelector('.dayTwo');
    let day3 = document.querySelector('.dayThree');
    let weather3 = document.querySelector('.weather3');
    const daysGraph = () => {
        if(day === 1)
        {
            day1.textContent = 'Tuesday';
            day2.textContent = 'Wednesday';
            day3.textContent = 'Thursday';
            return;
        }
        if(day === 2)
        {
            day1.textContent = 'Wednesday';
            day2.textContent = 'Thursday';
            day3.textContent = 'Friday';
            return;
        }
        if(day === 3)
        {
            day1.textContent = 'Thursday';
            day2.textContent = 'Friday';
            day3.textContent = 'Saturday';
            return;
        }
        if(day === 4)
        {
            day1.textContent = 'Friday';
            day2.textContent = 'Saturday';
            day3.textContent = 'Sunday';
            return;
        }
        if(day === 5)
        {
            day1.textContent = 'Saturday';
            day2.textContent = 'Sunday';
            day3.textContent = 'Monday';
            return;
        }
        if(day === 6)
        {
            day1.textContent = 'Sunday';
            day2.textContent = 'Monday';
            day3.textContent = 'Tuesday';
            return;
        }
        if(day === 7)
        {
            day1.textContent = 'Monday';
            day2.textContent = 'Tuesday';
            day3.textContent = 'Wednesday';
            return;
        }
    };
    const weatherSwitch = () => {
        threeButton.addEventListener('click', () => {
            threeDay.classList.add('fadeIn');
            threeDay.classList.remove('fadeOut');
            oneDay.classList.add('fadeOut');
            oneDay.classList.remove('fadeIn');
            location.classList.add('fadeOut');
            location.classList.remove('fadeIn');
        });
        todayButton.addEventListener('click', () => {
            threeDay.classList.add('fadeOut');
            threeDay.classList.remove('fadeIn');
            oneDay.classList.add('fadeIn');
            oneDay.classList.remove('fadeOut');
            location.classList.add('fadeIn');
            location.classList.remove('fadeOut');
        });
    }
    let long = geolocationCoordinatesInstance.longitude
    console.log(lat, long);
    console.log("hello1");
    daysGraph ();
    weatherSwitch ();
});