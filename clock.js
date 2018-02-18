// Avalikud muutujad
let clockContainer // = null
let colorButton  // = null
var months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember']
var days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev']

window.onload = function () {
  init()
}


function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  colorButton = document.querySelector('#change-color')
  startClock()

  colorButton.addEventListener('click', changeColor)
  //document.querySelector('#change-location').addEventListener('click', changeLocation)
}

function changeColor (event) {
  console.log(event)
  color = "#"+((1<<24)*Math.random()|0).toString(16)
  clock.style.color = color;
  date.style.color = color;
	
}

function startClock () {
  updateClock()
  window.setInterval(function () {
    updateClock()
  }, 0)
  
}

function updateClock () {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  min = lisaNull(min);
  sec = lisaNull(sec);
  var displayDate = days[date.getDay()] +", "+date.getDate() + ". " +months[date.getMonth()] + ". 2018"
  document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
  document.getElementById("date").innerHTML = displayDate;

}

function lisaNull(i) {
  if(i < 10){
    i = "0" + i;
  }
  return i;
}

