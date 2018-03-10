
let time = new Date();
let clock = document.getElementById("clock");
let dateTime = document.getElementById("date_time");
let colorButton = document.getElementById("date_time");
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getFullYear());
console.log(time.getDay());
console.log(time.getMonth());



function hexClock(){
  let time = new Date();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDay();
  const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
  const days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');



  if(hours.length < 2){
    hours = "0" + hours;
  }

  if(minutes.length < 2){
    minutes = "0" + minutes;
  }

  if(seconds.length < 2){
    seconds = "0" + seconds;
  }
  
  clockStr = hours + " : " + minutes + " : "+ seconds;

  clock.textContent = clockStr;

  dateTimeStr = ''+days[day]+' '+months[month]+' '+year;

  dateTime.textContent = dateTimeStr;

  setInterval(hexClock, 1000);

  

}
hexClock();
setInterval(hexClock, 1000);
document.body.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBts4IIj-YsBaGiQgIOX56tneVU4nkRPVj6-0-rjtpy7IKsOUt3A)";

function fontSizeBigger(){
  element = document.getElementById("clock");
  style = window.getComputedStyle(element, null).getPropertyValue("font-size");
  fontSize = parseFloat(style);

  element.style.fontSize = (fontSize + 5) + "px";

  document.getElementById("clock").style.fontSize = fontSize;
}

function fontSizeSmaller(){
  element = document.getElementById("clock");
  style = window.getComputedStyle(element, null).getPropertyValue("font-size");
  fontSize = parseFloat(style);

  element.style.fontSize = (fontSize - 5) + "px";

  document.getElementById("clock").style.fontSize = fontSize;
}

function changeColor(){
  element = document.getElementById("date_time");
  color = "#"+((1<<24)*Math.random()|0).toString(16);

  element.style.color = color;

  document.getElementById("colorChange").style.color = color;
}