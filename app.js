
let clockContainer 
let dateContainer 

window.onload = function () {
	init()
}

function init () {
	clockContainer = document.querySelector('#clock')
	console.log(clockContainer)
	dateContainer = document.querySelector('#date')
	console.log(dateContainer)
	 
	startClock()
	todaysDate()
}


function startClock () {
	updateClock()

	window.setInterval(function () {
	updateClock()
	}, 1000)
}

function updateClock () {
	const time = new Date();
	var hours = (time.getHours()).toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();
	if (hours.length < 2) {
		hours = '0' + hours;
	}

	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}

	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}
		  
	clockContainer.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
}

function todaysDate(){
	const time = new Date();
	var day = time.getDate();
	var month = time.getMonth();
	var year = time.getFullYear();
	var weekday = time.getDay();
	var weekdays = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
	var todaysday = weekdays[weekday];
	
	dateContainer.innerHTML = todaysday + ",  " + day + "/" + (month+1) + "/" + year;
}

function randomBg(){
	var random= Math.floor(Math.random() * 6) + 0;
	var bigSize = ["url('https://www.hdwallpapers.in/walls/beach_fun-wide.jpg')",
	"url('https://www.hdwallpapers.in/walls/beach_resort_sunset-wide.jpg')",
	"url('https://www.hdwallpapers.in/walls/ocean_sunset-wide.jpg')",
	"url('https://www.hdwallpapers.in/walls/alamanos_beach-wide.jpg')",
	"url('https://www.hdwallpapers.in/walls/thailand_beach_sunset-wide.jpg')",
	"url('https://www.hdwallpapers.in/walls/starfish_along_the_coral_coast_beach-normal.jpg')"];
	document.getElementById("random").style.backgroundImage=bigSize[random];
}
 
function changeColor(){
	var random= Math.floor(Math.random() * 3) + 0;
	var bigSize = ["white", "black", "gray"];
	document.getElementById("change").style.color=bigSize[random];
}

function changeFont() {
	var random= Math.floor(Math.random() * 4) + 0;
	var bigSize = ["Verdana", "Georgia", "FreeMono", "Courier New"];
	document.getElementById("clock").style.fontFamily=bigSize[random];
}

/*Kasutatud maretjal: 
	https://websitesetup.org/web-safe-fonts-html-css/
	https://www.sitepoint.com/community/t/code-to-enlarge-webpage-content-font-size/70260/5
	https://stackoverflow.com/questions/26652595/javascript-onclick-text-size-increase-with-eventlistener
	https://css-tricks.com/forums/topic/how-to-change-text-color-when-clicking-in-another-div/
	https://codepen.io/rm89/pen/aNOmzQ
*/






