// Avalikud muutujad
let clockContainer // = null
let changeColorButton 
var day = 'True'
var months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember']
var days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev']

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
	date.style.transition = "color 0.6s ease-out 0s";
	var color = '#' + Math.floor(Math.random() * 16777215).toString(16)
	clock.style.color = color
	date.style.color = color
	name.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
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
	var clockSize = parseFloat(style);
	style = window.getComputedStyle(date, null).getPropertyValue('font-size');
	var dateSize = parseFloat(style);
	if (clockSize<155){
		console.log('Suurendan kella')
		clock.style.transition = "font 0.3s linear 0s";
		date.style.transition = "font 0.3s linear 0s";
		clockSize = clockSize +5;
		dateSize = dateSize +5;
		clock.style.fontSize = clockSize + 'px';
		date.style.fontSize = dateSize + 'px';
	} else {
		clock.style.fontSize = 155 + 'px';
		date.style.fontSize = 65 +'px';
		alert("Enam suuremaks kella teha ei saa");
		console.log('Limiteeritud')
	}
}

function sizeDown () {
	var style = window.getComputedStyle(clock, null).getPropertyValue('font-size');
	var clockSize = parseFloat(style);
	style = window.getComputedStyle(date, null).getPropertyValue('font-size');
	var dateSize = parseFloat(style);
	if (clockSize>65) {
		clockSize = clockSize-5;
		dateSize = dateSize -5;
		console.log('Vähendan kella') 
		clock.style.transition = "font 0.3s linear 0s";
		date.style.transition = "font 0.3s linear 0s";
		clock.style.fontSize = clockSize + 'px'
		date.style.fontSize = dateSize + 'px';
	} else {
		clock.style.fontSize = 65 + 'px';;
		alert("Enam väiksemaks kella teha ei saa");
		console.log('Limiteeritud')
	}
}

function hideClock (event) {
	console.log(event)
	if (event.key == 'h') {
		if (clock.style.display != 'none') {
		console.log('peidan kella');
		innercont.style.display = 'none';
		} else {
		innercont.style.display = 'normal';
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
	if (d.getMinutes()>9 && d.getHours()>9){
		var displayTime = d.getHours() + ":" + d.getMinutes();
	}
	if (d.getMinutes()>9 && d.getHours()<9)	{
		var displayTime = "0"+d.getHours() + ":" + d.getMinutes();
	}
	if (d.getMinutes()<9 && d.getHours()<9)	{
		var displayTime = "0"+d.getHours() + ":0" + d.getMinutes();
	}
	if (d.getMinutes()<9 && d.getHours()>9) {
		var displayTime = d.getHours() + ":" + "0" + d.getMinutes();
	}
	//document.getElementById("clock").innerHTML = d.toLocaleTimeString('et-et');
	var displayDate = days[d.getDay()] +", "+d.getDate() + ". " +months[d.getMonth()] 
	document.getElementById("clock").innerHTML = displayTime;
	document.getElementById("date").innerHTML = displayDate;
	//clockContainer.innerHTML = new Date.getSeconds();
}