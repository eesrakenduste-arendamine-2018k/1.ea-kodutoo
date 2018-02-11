
let clockContainer 
let dateContainer
let changeColorButton 


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
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
}

function changeColor () {
  console.log('muudan värvi')
  var x = document.getElementById("myColor").value;

  clockContainer.style.color = x;
  dateContainer.style.color = x;
}
function changeStyle(){



  var fontType = [ "Arial", "Verdana", "Helvetica","Times New Roman", "Tahoma","Courier"];
  var num;
  num=Math.floor(Math.random()*6);
  
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
