// Avalikud muutujad
let clockContainer // = null


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  
  startClock()
  
  document{  //document on klass
	.querySelector('#change-position')
	.addEventListener('click', changeLocation)}
}
function changeLocation (event){
	console.log(event)
	colockContainer.left=Math.round(Math.random()*Window.innerWith)+'px';  //suvalt see toimib
	clockContainer.top=Math.round(Math.random()*Window.innerHight)+'px';

function startClock () {
  updateClock()

  window.setInterval(function () {
    updateClock()
	changeLocation()
  }, 1000)
}

function updateClock () {
  const date = new Date()

  clockContainer.innerHTML = date
}