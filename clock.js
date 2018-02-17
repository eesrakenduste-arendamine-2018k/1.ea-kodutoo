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

function changeColor () {
  console.log('muudab värvi')
  clock.style.transition = "color 0.6s ease-out 0s";
  clock.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16) 
}

function dayMode() {
	if (day == 'True') {
		console.log('Switching to night mode');
		cont.style.transition = "all 1s ease-in-out 0s";
		cont.style.filter = "blur(5px) grayscale(50%)";
		cont.style.transform = "scale(1.1)";
		document.getElementById('day').innerHTML = "Unblur";
		day = 'False'
	} else {
		console.log('Switching to day mode');
		cont.style.transition = "all 1s ease-in-out 0s";
		cont.style.transform = "scale(1.01)";
		cont.style.filter = "blur(0px) grayscale(0%)";
		document.getElementById('day').innerHTML = "Blur";
		day = 'True'
	}
}

//Viide https://stackoverflow.com/questions/15195209/how-to-get-font-size-in-html
function sizeUp () {
	var style = window.getComputedStyle(clock, null).getPropertyValue('font-size');
	var size = parseFloat(style);
	if (size<175){
		console.log('Suurendan kella')
		clock.style.transition = "font 0.3s linear 0s";
		size = size +5;
		clock.style.fontSize = size + 'px';
	} else {
		alert("Enam suuremaks kella teha ei saa");
		console.log('Limiteeritud')
	}
}

function sizeDown () {
	var style = window.getComputedStyle(clock, null).getPropertyValue('font-size');
	var size = parseFloat(style);
	if (size>20) {
		size = size-5;
		console.log('Vähendan kella') 
		clock.style.transition = "font 0.3s linear 0s";
		clock.style.fontSize = size + 'px'
	} else {
		alert("Enam väiksemaks kella teha ei saa");
		console.log('Limiteeritud')
	}
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
	if (d.getMinutes()>9){
		var displayTime = d.getHours() + ":" + d.getMinutes();
	} else {
		var displayTime = d.getHours() + ":" + "0" + d.getMinutes();
	}
	//document.getElementById("clock").innerHTML = d.toLocaleTimeString('et-et');
	document.getElementById("clock").innerHTML = displayTime;
	//clockContainer.innerHTML = new Date.getSeconds();
}