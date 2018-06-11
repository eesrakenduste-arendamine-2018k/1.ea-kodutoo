// Avalikud muutujad
let clockContainer
let dateContainer


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
 
  document.querySelector('#size-up').addEventListener('click', sizeUp)
  document.querySelector('#size-down').addEventListener('click', sizeDown)
  
  dateContainer = document.querySelector('#date')
  console.log(dateContainer)
  
  startClock()
  
  todaysDate()

 
}

// muudab fondi suurust 

function sizeUp () {
	console.log('+')
	clockContainer.style.fontSize = '70px'
}
function sizeDown () {
	console.log('-')
	clockContainer.style.fontSize = '50px'
}

// muudab fonti

function changeFont() {
	var random = Math.floor(Math.random()*6);
	var fonts = ["Courier New", "Garamond", "Bookman", "Allerta Stencil", "Gruppo", "Arial"];
	document.getElementById("clock").style.fontFamily=fonts[random];
}

// muudab taustavärvi

window.onclick = changeBackgroundColor;

function changeBackgroundColor () {
  console.log('muudan värvi')

  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)

  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
}

function startClock () {
	updateClock()

	window.setInterval(function () {
		updateClock()
	}, 1000)
}

function updateClock () {
	const time = new Date();
	var hours = (time.getHours()).toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();
	if (hours.length < 2) {
		hours = '0' + hours;
	}

	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}

	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}
		  
	clockContainer.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
	}
	
function todaysDate(){
	const time = new Date();
	var day = time.getDate();
	var month = time.getMonth();
	var year = time.getFullYear();
	var weekday = time.getDay();
	var weekdays = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
	var todaysday = weekdays[weekday];
	
	dateContainer.innerHTML = todaysday + ",  " + day + "." + (month+1) + "." + year;
}