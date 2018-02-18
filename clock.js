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
    .querySelector('#size-up')
    .addEventListener('click', sizeUp)

  document
    .querySelector('#size-down')
    .addEventListener('click', sizeDown)
	
  document
    .querySelector('#size-normal')
    .addEventListener('click', sizeNormal)	
	
  document
    .querySelector('#firstBackground')
    .addEventListener('click', firstBackground)
	
  document
    .querySelector('#secondBackground')
    .addEventListener('click', secondBackground)

  document
    .querySelector('#thirdBackground')
    .addEventListener('click', thirdBackground)	
	
  document
    .querySelector('#colorBlack')
    .addEventListener('click', colorBlack)

document
    .querySelector('#colorWhite')
    .addEventListener('click', colorWhite)	

document
    .querySelector('#colorBlue')
    .addEventListener('click', colorBlue)	

document
    .querySelector('#colorRed')
    .addEventListener('click', colorRed)	

document
    .querySelector('#colorGreen')
    .addEventListener('click', colorGreen)

}



function sizeUp () {
  clockContainer.style.fontSize = '150px'
}

function sizeNormal () {
  clockContainer.style.fontSize = '108px'
}
function sizeDown () {
  clockContainer.style.fontSize = '80px'
}

function firstBackground(){
	document.body.style.backgroundImage = "url('taust1.jpg')";
}	

function secondBackground(){
	document.body.style.backgroundImage = "url('taust3.jpg')";
}

function thirdBackground(){
	document.body.style.backgroundImage = "url('taust4.jpg')";
}	
	
function colorBlue(){
	colorBlue = document.getElementById("colorBlue");
	clock.style.color = 'blue';
}

function colorBlack(){
	colorBlack = document.getElementById("colorBlack");
	clock.style.color = 'black';
}	

function colorWhite(){
	colorWhite = document.getElementById("colorWhite");
	clock.style.color = 'white';
}	

function colorRed(){
	colorRed = document.getElementById("colorRed");
	clock.style.color = 'red';
}	

function colorGreen(){
	colorGreen = document.getElementById("colorGreen");
	clock.style.color = 'green';
}		
	
	
function startClock () {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)
}

function updateClock() {
  const date = new Date()

  clockContainer.innerHTML = date  
}