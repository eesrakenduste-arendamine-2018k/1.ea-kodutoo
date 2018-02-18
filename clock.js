// Avalikud muutujad
let clockContainer 

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
 startClock()
}

function changeBackground(time){
  if (time.value == "day"){
    document.body.style.backgroundImage = url("pics/kosk.jpg") ;

  } 
  if (time.value == "night") {
    document.body.style.backgroundImage = url("pics/haapsalukallas.jpg");
  }
}

function changeColor(color){
  document.getElementById("color").style.color = color.value;
}

let defaultFontSize = 100;
function changeSizeBigger(){
    defaultFontSize += 10;
    document.getElementById("bigger").style.fontSize = defaultFontSize + "px";
  }
  function changeSizeSmaller(){
    defaultFontSize -= 10;
    document.getElementById("smaller").style.fontSize = defaultFontSize + "px";
  }

function addZero(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

function startClock () {
  window.setInterval(function () { 
    const date = new Date();
      let hours= date.getHours(); 
      let minutes = date.getMinutes(); 
      let seconds = date.getSeconds(); 

      let day= date.getDate(); 
      let months = new Array("January","February","March","April","May","June","July","August","September","October"," November", "December");
      let month = months[date.getMonth()];

      let year = date.getFullYear();

      let weekdays = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
      let weekday = weekdays[date.getDay()];

      hours = addZero(hours);
      minutes = addZero(minutes);
      seconds = addZero(seconds);
      day = addZero(day);

      clockContainer.innerHTML = hours+':'+minutes+':'+seconds+'<br>'+day+'.'+month+'.'+year+'<br>'+weekday
  })
}

