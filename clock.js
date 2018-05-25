// Avalikud muutujad
let clockContainer // = null
let changeColorButton
let dateContainer


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  dateContainer = document.querySelector('#date')
  console.log(clockContainer)
  changeColorButton = document.querySelector('#change-color')
  changeFontButton = document.querySelector('#change-font')
  
  startClock()
  startTime()
  
  changeColorButton.addEventListener('click', changeColor)
}

function changeFont(font) {
	console.log('muudan fonti')
    document.getElementById("clock").style.fontFamily = font.value
}

function changeColor () {
	console.log('muudan värvi')
	
	const r = Math.round(Math.random() * 255)
	const g = Math.round(Math.random() * 255)
	const b = Math.round(Math.random() * 255)
	clockContainer.style.color = 'rgb('+ r +', '+ g +', '+ b +')'
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

function startTime () {
  window.setInterval(function () {
    const time = new Date()
    const dateContainer = document.getElementById("date")
    const weekday = new Array(7)
    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"
    const n = weekday[time.getDay()]
    document.getElementById("date").innerHTML = n

    const day = time.getDate()
    const month = addZero(time.getMonth())
    const year = time.getFullYear()

    dateContainer.innerHTML = n + ", " + day + "." + month + "." + year
  },1000)
}


function startClock () {
	updateClock
  window.setInterval(function () {
    const time = new Date()
    const clockContainer = document.getElementById("clock")
    const h = addZero(time.getHours())
    const m = addZero(time.getMinutes())
    const s = addZero(time.getSeconds())
    clockContainer.innerHTML = h + ":" + m + ":" + s

  }, 1000)
  
}
function updateClock () {
	
}
