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

function changeLocation (event) {
  console.log(event)
  clockContainer.style.left = Math.round(Math.random() * window.innerWidth) + 'px';
  clockContainer.style.top = Math.round(Math.random() * window.innerHeight) + 'px';
}

function startClock () {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)
}

function LargeFont(){
	document.getElementById("clock").style.fontSize = "50px";
}

function SmallFont(){
	document.getElementById("clock").style.fontSize = "10px";
}

function RegularFont(){
	document.getElementById("clock").style.fontSize = "medium";
}

function RandomColor(){
	var colors = ['#ff0000', '#00ff00', '#0000ff'];
	var random_color = colors[Math.floor(Math.random() * colors.length)];
	document.getElementById("clock").style.color = random_color;
}

  


function updateClock () {
  const date = new Date()

  clockContainer.innerHTML = date
}
