let ampm=document.getElementById("ampm")
function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let minutes=padZero(dateTime.getMinutes());
    let sec=dateTime.getSeconds();
    let date=dateTime.getDate();
    let month=dateTime.getMonth()+1;
    let year=dateTime.getFullYear();
    let day=dateTime.getDay();
    var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
  greet = 'Good Morning!! Ruban';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon!! Ruban';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening!! Ruban';

document.getElementById('greetings').innerHTML ='<b>' + greet + '</b>';

    switch(day){
        case 1:
            day="Monday"
            break;
        case 2:
            day="Tuesday"
            break;
        case 3:
            day="Wednesday"
            break;
        case 4:
            day="Thursday"
            break;
        case 5:
            day="Friday"
            break;
        case 6:
            day="Saturday"
            break;
        case 7:
            day="Sunday"
            break;
    }
    if(hr>12){
        hr=hr-12;
        ampm.innerHTML='PM'
    }
    document.getElementById("hr").innerHTML=padZero(hr);
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=padZero(sec);
    document.getElementById("date").innerHTML=`${date}-${padZero(month)}-${year}`;
    document.getElementById("day").innerHTML=day;
}
function padZero(num){
    return num <10?"0"+num:num;
}
setInterval(displayTime,1000)




let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
 
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
 
      // API URL
      const base =
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;
 
      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent = 
              Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
          let icon1 = data.weather[0].icon;
          document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        });
    });
  }
});