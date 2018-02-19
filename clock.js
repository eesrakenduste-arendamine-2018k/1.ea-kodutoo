let clockContainer

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
    .querySelector('#firstBackground')
    .addEventListener('click', firstBackground)
	
   document
    .querySelector('#secondBackground')
    .addEventListener('click', secondBackground)

   document
    .querySelector('#thirdBackground')
    .addEventListener('click', thirdBackground)	
	
   window.addEventListener('keypress', hideClock)
   
}

function showClock() {
    var x = document.getElementById("clock");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/*function hideClock(event){
  console.log(event)
  if(event.key =='h'){
    clockContainer.style.display='none'
  }
}*/


function sizeUp () {
  clockContainer.style.fontSize = '60px'
}

function sizeDown () {
  clockContainer.style.fontSize = '40px'
}

function firstBackground(){
	document.body.style.backgroundImage = "url('taust.jpg')";
}	

function secondBackground(){
	document.body.style.backgroundImage = "url('taust1.jpg')";
}

function thirdBackground(){
	document.body.style.backgroundImage = "url('taust2.jpg')";
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

