// Avalikud muutujad
let clockContainer // = null
let changeColorButton
let changeLocationButtonDown
let changeLocationButtonRigtht
let changeFontSize

window.onload = function (){
  init()
}



function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  changeColorButton = document.querySelector('#change-color')
  changeLocationButtonDown = document.querySelector('#change-location-down')
  changeLocationButtonRigth = document.querySelector('#change-location-rigth')
  changeFontSize = document.querySelector('#change-font')
  
  
  startClock()
  
  changeColorButton.addEventListener('click', changeBackgroundColor)
  changeLocationButtonDown.addEventListener('click', moveClockDown)
  changeLocationButtonRigth.addEventListener('click', moveClockRigth)
  changeFontSize.addEventListener('click', changeFonts)
  
}

function changeFonts() {
	console.log('muudan fonti')
	
	document.getElementById("clock").style.font = "italic bold 20px aria";
	
}

function moveClockDown() {
	console.log('muudan asukohta')
	
	clockContainer.style.top = (clockContainer.offsetTop + Math.random() * 45) + 'px';

}

function moveClockRigth() {
	console.log('muudan asukohta')
	
	clockContainer.style.left = (clockContainer.offsetLeft + Math.random() * 45) + 'px';

}

function changeBackgroundColor () {
	console.log('muudan värvi')
	
	const r = Math.round(Math.random() * 255)
	const g = Math.round(Math.random() * 255)
	const b = Math.round(Math.random() * 255)
	
	clockContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
}


function startClock (){
  window.setInterval(function () {
    const date = new Date()

    clockContainer.innerHTML = date
  }, 100);
}