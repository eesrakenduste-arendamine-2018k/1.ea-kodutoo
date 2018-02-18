// Avalikud muutujad
let clockContainer // = null
let dateContainer

window.onload = function () {
  init()
}

//Clock displayed seperately

function init() {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  startClock()

  dateContainer = document.querySelector('#date')
  console.log(dateContainer)
  currentDate()
//https://stackoverflow.com/questions/10867503/change-background-image-in-body
  window.addEventListener('mousedown', changeBackgroundColor)
  window.addEventListener('mousedown', changeTextColor)
  document.querySelector('#size-down').addEventListener('click',sizeDown)
  document.querySelector('#size-up').addEventListener('click',sizeUp)
}


function changeBackgroundColor () {
  let background =[ 'url(https://wallpaperscraft.com/image/man_road_marking_asphalt_119554_1920x1080.jpg)',
   'url(https://wallpaperscraft.com/image/firewood_timber_woodpile_119540_1920x1080.jpg)']
   currentbackground =Math.round(Math.random())
    // console.log(currentbackground)
    document.body.style.background = background[currentbackground]
    document.body.style.backgroundSize = 'cover'



}

function changeTextColor () {
  let color = document.getElementsByTagName('div')[0];
  let color2 = document.getElementsByTagName('div')[1];
  let color3 = document.getElementsByTagName('small')[0];
  color.style.color = 'black';
  color2.style.color = 'black';
  color3.style.color = 'black';
}


function startClock() {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)
}

function updateClock() {
  const date = new Date()

  let currentHours = date.getHours()
  let currentMinutes = date.getMinutes()

  currentHours = (currentHours < 10 ? "0" : "") + currentHours
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes


  clockContainer.innerHTML = currentHours+":"+currentMinutes
}

//date displayed seperately
function currentDate(){
  const date = new Date()

  let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  dateContainer.innerHTML =  days[date.getDay()]+" "+date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()

}

function sizeUp(){
	console.log('+')
	clockContainer.style.fontSize='110px'

}
function sizeDown(){
	clockContainer.style.fontSize='50px'
	console.log('-')
}
