// Avalikud muutujad
let clockContainer // = null

window.onload = function () {
  init()
}

function init() {
  clockContainer = document.querySelector('#clock')
  dayContainer = document.querySelector('#day')
  dateContainer = document.querySelector('#date')
  dateTimeContainer = document.querySelector('#dateTime')
  console.log(clockContainer)

  startClock()
  document
    .querySelector('#change-position')
    .addEventListener('click', changeLocation)

    document
    .querySelector('#increase-size')
    .addEventListener('click', increaseSize)

    document
    .querySelector('#decrease-size')
    .addEventListener('click', decreaseSize)

    document
    .querySelector('#change-color')
    .addEventListener('click', changeColor)
}

function changeLocation(event) {
  console.log(event)
  dateTimeContainer.style.left = Math.random() * Math.round(Math.random()*window.innerWidth-365) + 'px';
  dateTimeContainer.style.top = Math.random() * Math.round(Math.random()*window.innerHeight-495) + 'px';

}

function startClock() {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)
}

function increaseSize(){
  let change = 3
  let element = document.getElementById("clock");
  let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  let fontSize = parseInt(style);
  document.getElementById('clock').style.fontSize = 
  (fontSize+change).toString() + "px"
  document.getElementById('date').style.fontSize = 
  (fontSize+change).toString() + "px"
  document.getElementById('day').style.fontSize = 
  (fontSize+change).toString() + "px"
}

function decreaseSize(){
  let change = 3
  let element = document.getElementById("clock");
  let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  let fontSize = parseInt(style);
  document.getElementById('clock').style.fontSize = 
  (fontSize-change).toString() + "px"
  document.getElementById('date').style.fontSize = 
  (fontSize-change).toString() + "px"
  document.getElementById('day').style.fontSize = 
  (fontSize-change).toString() + "px"
}

function changeColor(){
  let element = document.getElementById("clock");
  let style = window.getComputedStyle(element, null).getPropertyValue('color');
  r = Math.floor((Math.random() * 255) + 1);
	g = Math.floor((Math.random() * 255) + 1);
  b = Math.floor((Math.random() * 255) + 1);

  document.getElementById('clock').
  style.color = 'rgb(' + r + ',' + g + ',' + b + ')'
  document.getElementById('date').
  style.color = 'rgb(' + r + ',' + g + ',' + b + ')'
  document.getElementById('day').
  style.color = 'rgb(' + r + ',' + g + ',' + b + ')'
}

function updateClock() {
  const date = new Date()
  dateTime(date)
  dayTimeColor(date)
}

function dayTimeColor(dateTime){
  var time=dateTime.getHours();
  if (time > 6 && time < 22){
    document.body.style.backgroundColor = "SkyBlue";
  }
  else {
    document.body.style.backgroundColor = "SlateGray";
  }
}

function dateTime(dateTime) {
  let time = dateTime.getHours() + ":" + ("0" + dateTime.getMinutes()).slice(-2)
  const months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"]
  let date = dateTime.getDate() + ". " + months[dateTime.getMonth()] + " " + dateTime.getFullYear()
  let days = ["Pühapäev","Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
  let day = dateTime.getDay();
  clockContainer.innerHTML = time
  dateContainer.innerHTML = date
  dayContainer.innerHTML = days[day];
}