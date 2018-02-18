// Avalikud muutujad
let clockContainer // = null



window.onload = function () {
  init()
}

function init () {
  changeColorButton = document.querySelector('#change-color')
  changePicButton = document.querySelector('#change-pic')
  enlargeButton = document.querySelector('#enlarge')
  decreaseButton = document.querySelector('#decrease')
  currentDay = document.querySelector('#day')
  currentTime = document.querySelector('#time')
  currentMonth = document.querySelector('#month')

  day()
  time()
  month()
  
  changeColorButton.addEventListener('click', changeColor )
  changePicButton.addEventListener('click', changePic )
  enlargeButton.addEventListener('click', larger )
  decreaseButton.addEventListener('click', smaller )
}

function changePic () {
	console.log('Changing picture')

	var pics = Array("url('https://wallpaperbrowse.com/media/images/skyline-buildings-new-york-skyscrapers.jpg')",
	"url('https://wallpaperbrowse.com/media/images/city_of_love-wallpaper-5120x3200.jpg')", 
	"url('https://wallpaperbrowse.com/media/images/b807c2282ab0a491bd5c5c1051c6d312_rP0kQjJ.jpg')")
	var pic = pics[Math.floor(Math.random()*pics.length)]
	document.body.style.backgroundImage = pic
}

function changeColor (){
	console.log('changing color')
	var colors = Array("Aqua", "BlueViolet", "ForestGreen", "OrangeRed")
	var color = colors[Math.floor(Math.random()*colors.length)]
	
	currentDay.style.color = color
	currentTime.style.color = color
	currentMonth.style.color = color
}

function larger(){
	console.log('making text bigger')

	currentDay.style.fontSize = "larger"
	currentTime.style.fontSize = "larger"
	currentMonth.style.fontSize = "larger"
}

function smaller(){
	console.log('making text smaller')

	currentDay.style.fontSize = "smaller"
	currentTime.style.fontSize = "smaller"
	currentMonth.style.fontSize = "smaller"
}

function day (){
	var d = new Date()
	var weekday = new Array(7)
	weekday[0] =  "Sunday"
	weekday[1] = "Monday"
	weekday[2] = "Tuesday"
	weekday[3] = "Wednesday"
	weekday[4] = "Thursday"
	weekday[5] = "Friday"
	weekday[6] = "Saturday"

	var n = weekday[d.getDay()]
	
	currentDay.innerHTML = n	
}

function time (){
	var time = new Date().toLocaleTimeString()

	currentTime.innerHTML = time
	
}

function month (){
	var d = new Date()
	var month = new Array(12)
	month[0] = "January"
	month[1] = "February"
	month[2] = "March"
	month[3] = "April"
	month[4] = "May"
	month[5] = "June"
	month[6] = "July"
	month[7] = "August"
	month[8] = "September"
	month[9] = "October"
	month[10] = "November"
	month[11] = "December"
	var n = month[d.getMonth()]

	currentMonth.innerHTML = n
}
