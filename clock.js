// Avalikud muutujad
let clockContainer // = null
let changeColorButton 
var day = 'True'

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  changeColorButton = document.querySelector('#change-color')
  startClock()
	document
	.querySelector('#size-up')
	.addEventListener('click', sizeUp)
	
	document
	.querySelector('#size-down')
	.addEventListener('click', sizeDown)
	
	window.addEventListener('keypress', hideClock)
	
	document
	.querySelector('#day')
	.addEventListener('click', dayMode)
  
  changeColorButton.addEventListener('click', changeColor)
}
function buttonColor(){
	console.log('Ayyy')
	//clockContainer.style.backgroundColor = 'blue'
}
function changeColor () {
  console.log('muudab värvi')
  clockContainer.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16) 
}

function dayMode() {
	if (day == 'True') {
		console.log('Switching to night mode');
		(document.body).style.transition = "background 1s ease-out 0s";
		(document.body).style.backgroundPosition = "0% 60%";
		//(document.body).style.backgroundColor = 'grey';
		day = 'False'
	} else {
		console.log('Switching to day mode');
		//(document.body).style.backgroundColor = 'white';
		(document.body).style.transition = "background 1.5s ease-out 0s";
		(document.body).style.backgroundPosition = "0% 0%";
		day = 'True'
	}
}

//Viide https://stackoverflow.com/questions/15195209/how-to-get-font-size-in-html
function sizeUp () {
	console.log('Suurendan kella')
	var style = window.getComputedStyle(clock, null).getPropertyValue('font-size');
	var size = parseFloat(style);  
	clock.style.fontSize = (size + 3) + 'px'
}

function sizeDown () {
	console.log('Vähendan kella')
	var style = window.getComputedStyle(clock, null).getPropertyValue('font-size');
	var size = parseFloat(style);  
	clock.style.fontSize = (size + -3) + 'px'
}

function hideClock (event) {
	console.log(event)
	if (event.key == 'h') {
		if (clockContainer.style.display != 'none') {
		console.log('peidan kella');
		clockContainer.style.display = 'none';
		} else {
		clockContainer.style.display = 'inherit';
		console.log('leian kella');
		}
	}
}

function startClock () {
  updateClock()

  window.setInterval(function () {
   updateClock()
  }, 1000)
}

function updateClock () {
	var d =  new Date()
	document.getElementById("clock").innerHTML = d.toLocaleTimeString('et-et');
	//clockContainer.innerHTML = new Date.getSeconds();
}