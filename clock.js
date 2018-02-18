// Avalikud muutujad
let clockContainer // = null
let dayContainer
let dateContainer


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  dayContainer = document.querySelector('#day')
  dateContainer = document.querySelector('#date')
  console.log(clockContainer)
  console.log(dayContainer)
  console.log(dateContainer)
  document.getElementById('change-color').addEventListener('click', changeClockColor);
  document.getElementById('change-winpic').addEventListener('click', displayWinterImage)
  document.getElementById('change-spripic').addEventListener('click', displaySpringImage)
  document.getElementById('change-sumpic').addEventListener('click', displaySummerImage)
  document.getElementById('change-fallpic').addEventListener('click', displayFallImage)
  startClock()
}

function startClock () {
	updateClock()
	
  window.setInterval(function () {

	updateClock()
	
	}, 1000)
}

function updateClock() {
	const date = new Date()
	const hour=date.getHours()
	const minute=date.getMinutes()
	const second=date.getSeconds()
	const days=['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev',
	'Neljapäev', 'Reede', 'Laupäev']
	const day = days[date.getDay()]
	const dateday = date.getDate()
	const months =['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 
	'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember']
	const month = months[date.getMonth()]
	const year=date.getFullYear()
	h=checkTime(hour)
	m=checkTime(minute)
	s=checkTime(second)
	clockContainer.innerHTML = h+":"+m+":"+s
	dayContainer.innerHTML = day
	dateContainer.innerHTML = dateday+". "+month+" "+year
	
}
function checkTime(i)
{
if (i<10)
{ i="0" + i}
return i
}

function changeClockColor() {
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    clockContainer.style.color="#"+color;
    dayContainer.style.color="#"+color;
    dateContainer.style.color="#"+color;
}
const winterImagesArray = ["url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/winter1.jpeg')", 
"url(''http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/winter2.jpg')", 
"url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/winter3.jpg')"] 
const springImagesArray = ["url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/spring1.jpg')", 
"url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/spring2.jpg')", 
"url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/spring3.jpg')"]
const summerImagesArray = ["url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/summer1.jpg')", 
"url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/summer2.jpg')", 
"url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/summer3.jpg')"] 
const fallImagesArray = ["url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/fall1.jpeg')", 
"url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/fall2.jpg')", 
"url('http://greeny.cs.tlu.ee/~rooselin/1.ea-kodutoo/Pics/fall3.jpg')"]
function displayWinterImage(path) {
		var num = Math.floor(Math.random() * 3) + 0;
    	document.getElementById(winterImagesArray[num]);
  document.body.style.backgroundImage = winterImagesArray[num];
  document.body.style.backgroundSize = "cover";
}
function displaySpringImage(path) {
		var num = Math.floor(Math.random() * 3) + 0;
    	document.getElementById(springImagesArray[num]);
  document.body.style.backgroundImage = springImagesArray[num];
  document.body.style.backgroundSize = "cover";
}
function displaySummerImage(path) {
		var num = Math.floor(Math.random() * 3) + 0;
    	document.getElementById(summerImagesArray[num]);
  document.body.style.backgroundImage = summerImagesArray[num];
  document.body.style.backgroundSize = "cover";
}
function displayFallImage(path) {
		var num = Math.floor(Math.random() * 3) + 0;
    	document.getElementById(fallImagesArray[num]);
  document.body.style.backgroundImage = fallImagesArray[num];
  document.body.style.backgroundSize = "cover";
}

