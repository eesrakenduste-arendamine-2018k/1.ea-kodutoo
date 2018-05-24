// Avalikud muutujad
let clockContainer // = null
let colorButton  // = null
let enlargeButton
let shrinkButton
let fontButton
const months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember']
const days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev']
const fontStyles = ['Calibri', 'Tahoma', 'trebuchet MS', 'Verdana', 'Georgia', 'Lucida Bright', 'Palatino', 'Baskerville', 'Courier New']

window.onload = function () {
  init()
}


function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  colorButton = document.querySelector('#change-color')
  enlargeButton = document.querySelector('#enlarge-size')
  shrinkButton = document.querySelector('#shrink-size')
  fontButton = document.querySelector('#change-font')
  startClock()

  enlargeButton.addEventListener('click', enlargeSize)
  shrinkButton.addEventListener('click', shrinkSize)
  colorButton.addEventListener('click', changeColor)
  fontButton.addEventListener('click', changeFont)
  //document.querySelector('#change-location').addEventListener('click', changeLocation)
}

function changeColor (Ccolor) {
  console.log(Ccolor)
  color = "#"+((1<<24)*Math.random()|0).toString(16)
  clock.style.color = color;
  date.style.color = color;
	
}

function enlargeSize (enlargeSize){
  console.log(enlargeSize)
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("date");
  let clockStyle = window.getComputedStyle(clockElement, null).getPropertyValue("font-size");
  let clockFontSize = parseFloat(clockStyle);
  let dateStyle = window.getComputedStyle(dateElement, null).getPropertyValue("font-size");
  let dateFontSize = parseFloat(dateStyle);
  
  if (clockFontSize <= 150){
    clockFontSize = clockFontSize + 3 + "px";
    dateFontSize = dateFontSize + 2 + "px";
  } else {
    clockFontSize = clockFontSize;
    dateFontSize = dateFontSize;
  }
  
  
  document.getElementById("clock").style.fontSize = clockFontSize;
  document.getElementById("date").style.fontSize = dateFontSize;
  

}

function shrinkSize (shrinkSize){
  console.log(shrinkSize)
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("date");
  let clockStyle = window.getComputedStyle(clockElement, null).getPropertyValue("font-size");
  let clockFontSize = parseFloat(clockStyle);
  let dateStyle = window.getComputedStyle(dateElement, null).getPropertyValue("font-size");
  let dateFontSize = parseFloat(dateStyle);
  
  if (dateFontSize > 15){
    clockFontSize = clockFontSize - 3 + "px";
    dateFontSize = dateFontSize - 2 + "px";
  } else {
    clockFontSize = clockFontSize;
    dateFontSize = dateFontSize;
  }
  
  document.getElementById("clock").style.fontSize = clockFontSize;
  document.getElementById("date").style.fontSize = dateFontSize;

}

function changeFont () {
  console.log(changeFont)
  let bodyElement = document.getElementById("mainbody");
  let randomNr = Math.floor(Math.random() * 9);
  let newFont = fontStyles[randomNr];
  document.getElementById("mainbody").style.fontFamily = newFont;

}

function startClock () {
  updateClock()
  window.setInterval(function () {
    updateClock()
  }, 0)
  
}

function updateClock () {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  min = lisaNull(min);
  sec = lisaNull(sec);
  let displayDate = days[date.getDay()] +", "+date.getDate() + ". " +months[date.getMonth()] + ". 2018"
  document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
  document.getElementById("date").innerHTML = displayDate;

}

function lisaNull(i) {
  if(i < 10){
    i = "0" + i;
  }
  return i;
}
