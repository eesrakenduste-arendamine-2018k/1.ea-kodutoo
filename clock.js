
let clockContainer 
let dateContainer
let changeColorButton 
let buttons1
let buttons3

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  buttons1 = document.querySelector('#buttons1') 
  buttons3 = document.querySelector('#buttons3')
  console.log(clockContainer)
  dateContainer = document.querySelector('#date')
  console.log(dateContainer)
  currentDate()
  changeColorButton = document.querySelector('#change-color')
  
  startClock()

  changeColorButton.addEventListener('click', changeColor)
  
  document.querySelector('#size-down').addEventListener('click',sizeDown) 
  document.querySelector('#size-up').addEventListener('click',sizeUp)
  document.querySelector('#font-style').addEventListener('click',changeStyle)
  window.addEventListener('keypress', hideClock)
  window.addEventListener('keypress', showClock)
}
function hideClock(event){
    console.log(event)
    if(event.key =='h'){
  clockContainer.style.display = 'none'
  dateContainer.style.display = 'none'
  buttons1.style.display = 'none'
  buttons3.style.display = 'none'
}
  }
  function showClock(event){
    console.log(event)
    if(event.key =='s'){
  clockContainer.style.display = 'block'
  dateContainer.style.display = 'block'
  buttons1.style.display = 'block'
  buttons3.style.display = 'block'}
  }
  
function changeColor () {
  console.log('muudan värvi')
  var x = document.getElementById("myColor").value;

  clockContainer.style.color = x;
  dateContainer.style.color = x;
}
function changeStyle(){



  var fontType = [ "Impact", "Comic Sans MS", "Times New Roman", "Courier"];
  var num;
  num=Math.floor(Math.random()*4);
  
dateContainer.style.fontFamily =  fontType[num];
clockContainer.style.fontFamily =  fontType[num]; 
}


function sizeUp(){
  
  style = window.getComputedStyle(clockContainer, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  console.log('+')
  clockContainer.style.fontSize = currentSize + 5 + 'px';
  dateContainer.style.fontSize = currentSize + 5 + 'px';
	
	
}
function sizeDown(){
  style = window.getComputedStyle(clockContainer, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  clockContainer.style.fontSize= currentSize - 5 + 'px';
  dateContainer.style.fontSize= currentSize - 5 + 'px';
	console.log('-')

}

function startClock () {
  updateClock()
  
  window.setInterval(function () {
   updateClock()
  }, 1000)
}

function updateClock () {
  const date = new Date()
  var currentHours = date.getHours()
  var currentMinutes = date.getMinutes()

  currentHours = (currentHours < 10 ? "0" : "") + currentHours
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes


  clockContainer.innerHTML = currentHours+":"+currentMinutes
}
function currentDate(){
  const date = new Date()

  var kuud = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 

  dateContainer.innerHTML =date.getDate()+". "+kuud[date.getMonth()]+" "+date.getFullYear()
}
