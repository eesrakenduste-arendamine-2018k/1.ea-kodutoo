var time = new Date();
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getFullYear());
console.log(time.getDay());
console.log(time.getMonth());

var clock = document.getElementById("clock");
var dateTime = document.getElementById("date_time");
var colorButton = document.getElementById("date_time");


function hexClock(){
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();
  var year = time.getFullYear();
  var month = time.getMonth();
  var day = time.getDay();
  var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
  var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');



  if(hours.length < 2){
    hours = "0" + hours;
  }

  if(minutes.length < 2){
    minutes = "0" + minutes;
  }

  if(seconds.length < 2){
    seconds = "0" + seconds;
  }
  
  var clockStr = hours + " : " + minutes + " : "+ seconds;

  clock.textContent = clockStr;

  var dateTimeStr = ''+days[day]+' '+months[month]+' '+year;

  dateTime.textContent = dateTimeStr;

  setInterval(hexClock, 1000);

  

}
hexClock();
setInterval(hexClock, 1000);
document.body.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBts4IIj-YsBaGiQgIOX56tneVU4nkRPVj6-0-rjtpy7IKsOUt3A)";

function fontSizeBigger(){
  var element = document.getElementById("clock");
  var style = window.getComputedStyle(element, null).getPropertyValue("font-size");
  var fontSize = parseFloat(style);

  element.style.fontSize = (fontSize + 5) + "px";

  document.getElementById("clock").style.fontSize = fontSize;
}

function fontSizeSmaller(){
  var element = document.getElementById("clock");
  var style = window.getComputedStyle(element, null).getPropertyValue("font-size");
  var fontSize = parseFloat(style);

  element.style.fontSize = (fontSize - 5) + "px";

  document.getElementById("clock").style.fontSize = fontSize;
}

function changeColor(){
  var element = document.getElementById("date_time");
  var color = "#"+((1<<24)*Math.random()|0).toString(16);

  element.style.color = color;

  document.getElementById("colorChange").style.color = color;
}







