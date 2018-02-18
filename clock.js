// Avalikud muutujad
let clockContainer  //= null
let changeColorButton


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  changeColorButton = document.querySelector('#change-color')

  startClock()
  changeColorButton.addEventListener('click', changeBackgroundColor)
  //window.addEventListener('mousemove', changeBackgroundColor)
}
function changeBackgroundColor(){
	console.log('muudan värvi')
	const r = Math.round(Math.random()) *255
	const g = Math.round(Math.random()) *255
	const b = Math.round(Math.random()) *255
	clockContainer.style.backgroundColor = 'rgb(' + [r,g,b].join(',') + ')'
}


function startClock () {
  window.setInterval(function () {
    const date = new Date()

    clockContainer.innerHTML = date
  }, 1000)
}

function colorred() {
    'use strict';
var red = document.getElementById("colors").innerHTML="Sulle meeldib punane";

}

function colorgreen() {
    'use strict';
var green = document.getElementById("colors").innerHTML="Sulle meeldib roheline";

}

function colorblue() {
    'use strict';
var blue = document.getElementById("colors").innerHTML="Sulle meeldib sinine";

}
/*function startClock () {
    updateClock()

	window.setInterval(function () {
		updateClock()
  }, 1000)
}

function updateClock () {
	const date= new Date()
	}
*/



