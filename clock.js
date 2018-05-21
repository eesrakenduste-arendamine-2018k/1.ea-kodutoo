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

 
function changeColor(){
	var random= Math.floor(Math.random() * 6);  
	var colors = ["red", "black", "gray", "blue", "cyan", "magenta"];
    document.getElementById("bigPic").style.color=colors[random];
    document.getElementById("clock").style.color=colors[random];
}

function changeBgCol(){
    var random= Math.floor(Math.random() * 5);  
    var colors = ["red", "black", "gray", "blue", "cyan", "magenta"];
    document.body.style.backgroundColor = colors[random]
}

function changeFont() {
	var random= Math.floor(Math.random() * 4);
	var fonts = ["Comic Sans MS", "Georgia", "FreeMono", "Courier New"];
    document.getElementById("clock").style.fontFamily=fonts[random];
    document.getElementById("bigPic").style.fontFamily=fonts[random];
}

function changeClockPos(){
	var random = Math.floor(Math.random() * 4);
	var pos = ["left", "right", "center", "justify"]
	document.body.style.textAlign = pos[random]
}

/*Kasutatud maretjal: 
	https://websitesetup.org/web-safe-fonts-html-css/
	https://www.sitepoint.com/community/t/code-to-enlarge-webpage-content-font-size/70260/5
	https://stackoverflow.com/questions/26652595/javascript-onclick-text-size-increase-with-eventlistener
	https://css-tricks.com/forums/topic/how-to-change-text-color-when-clicking-in-another-div/
	https://codepen.io/rm89/pen/aNOmzQ
*/
