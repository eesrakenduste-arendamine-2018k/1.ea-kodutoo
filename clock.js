// Avalikud muutujad
let clockContainer // = null


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()
  
  document
  .querySelector('#change-position')
  .addEventListener('click', changeLocation)
  
}

function changeLocation(event){
	console.log(event)
	clockContainer.style.left = Math.round(Math.random() * window.innerWidth)+'px';
	clockContainer.style.top = Math.round(Math.random() * window.innerHeight)+'px';

}

function startClock () {
	const date = new Date()

    clockContainer.innerHTML = date
  window.setInterval(function () {
    const date = new Date()

    clockContainer.innerHTML = date
  }, 1000)
}