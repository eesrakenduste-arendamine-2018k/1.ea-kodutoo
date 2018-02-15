// Avalikud muutujad
let clockContainer // = null
let suurus = 40
let date;
let string="0:0:0";

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()
  document.querySelector('#size-up').addEventListener('click', sizeUp)
  document.querySelector('#size-down').addEventListener('click', sizeDown)
  window.addEventListener('keypress', hideClock)

}

function hideClock(event) {
	console.log(event)
	if (event.key == 'h') {
		clockContainer.style.display = 'none'
	}
}

function sizeUp() {
	suurus= suurus+5
	console.log('+')
	clockContainer.style.fontSize = suurus+'px'
}
function sizeDown() {
	suurus= suurus-5
	console.log('-')
	clockContainer.style.fontSize = suurus+'px'
}

function startClock () {
  updateClock()

  window.setInterval(function () {
   updateClock()
  }, 1000)
}

function updateClock () {
date= new Date()

string= ('0' + date.getHours()).slice(-2)+":"+('0' + date.getMinutes()).slice(-2)+":"+('0' + date.getSeconds()).slice(-2)
  clockContainer.innerHTML = string;
}