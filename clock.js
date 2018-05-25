// Avalikud muutujad
let clockContainer // = null
let changeColorButton
let changeFontButton

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  changeColorButton = document.querySelector('#change-color')
  changeFontButton = document.querySelector('#change-font')
  
  startClock()
  
  changeColorButton.addEventListener('click', changeColor)
  changeFontButton.addEventListener('click', changeFont)
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

function startClock () {
	updateClock
  window.setInterval(function () {
    const date = new Date()
    const clockContainer = document.getElementById("clock")
    const h = addZero(date.getHours())
    const m = addZero(date.getMinutes())
    const s = addZero(date.getSeconds())
    clockContainer.innerHTML = h + ":" + m + ":" + s
  }, 1000)
  
}
function updateClock () {
	
}
