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
	/*document
	.querySelector('#size-up')
	.addEventListener('mouseover', buttonColor)*/
  changeColorButton.addEventListener('click', changeColor)
  //window.addEventListener('mousemove', changeBackgroundColor)
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
		(document.body).style.transition = "background 1.5s ease-out 0s";
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

function sizeUp () {
	//console.log('muudan suurust')
	size = document.getElementById("clock").style.fontSize 
	console.log(size)
	clock.style.fontSize = (size + 3) + 'px'
}

function sizeDown () {
	console.log('muudan suurust')
	clockContainer.style.fontSize = '5px'
}

function hideClock (event) {
	console.log(event)
	if (event.key == 'h') {
		clockContainer.style.display = 'none'
		//clockContainer.style.visibility = 'hidden'
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