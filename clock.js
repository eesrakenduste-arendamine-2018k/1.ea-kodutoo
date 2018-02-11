
let clockContainer 
let changeColorButton 


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  changeColorButton = document.querySelector('#change-color')
  
  startClock()

  changeColorButton.addEventListener('click', changeColor)
  //window.addEventListener('mousemove', changeBackgroundColor)
  document.querySelector('#size-down').addEventListener('click',sizeDown) 
  document.querySelector('#size-up').addEventListener('click',sizeUp)
  window.addEventListener('keypress', hideClock)
  window.addEventListener('keypress', showClock)
  clockContainer.style.alignContent = 'center'
  document.querySelector('#font-style').addEventListener('click',changeStyle)
}

function changeColor () {
  console.log('muudan värvi')

  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)

  clockContainer.style.color = 'rgb('+ r +','+ g +','+ b +')'
}
function changeStyle(){



  var fontType = [ "Arial", "Verdana", "Helvetica","Times New Roman", "Tahoma","Courier"];
  var num;
  num=Math.floor(Math.random()*6);
  

clockContainer.style.fontFamily =  fontType[num]; 
}


function sizeUp(){
  
  style = window.getComputedStyle(clockContainer, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  console.log('+')
	clockContainer.style.fontSize = currentSize + 5 + 'px';
	
	
}
function sizeDown(){
  style = window.getComputedStyle(clockContainer, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
	clockContainer.style.fontSize= currentSize - 5 + 'px';
	console.log('-')

}
function hideClock(event){
	console.log(event)
	if(event.key =='h')
  clockContainer.style.display = 'none'
  
}
function showClock(event){
	console.log(event)
	if(event.key =='s')
  clockContainer.style.display = 'block'
  
}
function startClock () {
  updateClock()

  window.setInterval(function () {
   updateClock()
  }, 1000)
}

function updateClock () {
  const date = new Date()

  clockContainer.innerHTML = date
}