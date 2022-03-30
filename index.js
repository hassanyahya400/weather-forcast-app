let searchValue = document.querySelector('[name="city"]');
let btn = document.querySelector('[type="submit"]');

let cityName = document.querySelector('.city-name')
let avgTemp = document.querySelector('.avg-temp')
let minTemp = document.querySelector('.min-temp')
let maxTemp = document.querySelector('.max-temp')
let cityDesc = document.querySelector('.city-desc')
let descImg = document.querySelector('.city-desc-img')


btn.addEventListener('click', function(e) {
     e.preventDefault()

     console.log(searchValue.value)
     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchValue.value + '&units=metric&appid=5b5c22b2a37c739de81cb8a92cabf530')
          .then(response => response.json())
          .then(data => {
               console.log(data);
               const dataName = data.name;
               const dataAvg = data.main.temp;
               const dataMin = data.main.temp_min;
               const dataMax = data.main.temp_max;
               const dataImg = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` 

               cityName.innerHTML = dataName;
               avgTemp.innerHTML = dataAvg + ' °C';
               minTemp.innerHTML = dataMin + ' °C';
               maxTemp.innerHTML = dataMax + ' °C';
               descImg.setAttribute('src', dataImg)
          })
          .catch(err => {
               alert('pls input a correct city name or check your connection')
          })
})