// Avalikud muutujad
let clockContainer // = null


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()
}

function startClock () {

  window.setInterval(function () {
    const date = new Date()
	const y = date.getFullYear();
	const m = date.getDay();
	const h = date.getHours();
	const mon = date.getMonth();
	const min = ('0'+date.getMinutes()).slice(-2);
	const p = date.getDate();
	//if (min > 10) {min = "0" + min};
	// const min = ('0'+date.getMinutes()).slice(-2);
	
	var day = new Array();
	day[0] = "Pühapäev";
	day[1] = "Esmaspäev";
	day[2] = "Teisipäev";
	day[3] = "Kolmapäev";
	day[4] = "Neljapäev";
	day[5] = "Reede";
	day[6] = "Laupäev";
	
	var month = new Array();
	month[0] = "Jaanuar";
	month[1] = "Veebruar";
	month[2] = "Märts";
	month[3] = "Aprill";
	month[4] = "Mai";
	month[5] = "Juuni";
	month[6] = "Juuli";
	month[7] = "August";
	month[8] = "September";
	month[9] = "Oktoober";
	month[10] = "November";
	month[11] = "Detsember";
	var d = day[date.getDay()];
	var mont = month[date.getMonth()];
	

	
	

    clockContainer.innerHTML = h + ":" + min + "<br>" + d + "," + " " + p + "." + " " + mont + "<br>" + y
  }, 1000)
  
  document.getElementById('clock').style.color = "white";
  document.getElementById('clock').style.font = "italic bold 35px arial,serif";
}


function changePosition(event) {
    console.log(event)

    fullDateContainer.style.left = Math.round(Math.random()*w-365) + 'px';
    fullDateContainer.style.top = Math.round(Math.random()*h-450) + 'px';;
}

function toggleClock() {
	var x = document.getElementById("clock");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

	
function randomizeColor() {
  document.getElementById("clock").style.color = randomColor();
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


function smaller() {
    document.getElementById("clock").style.height="20px";
    document.getElementById("clock").style.width="20px";
}

function resetsize() {
    document.getElementById("clock").style.height="500px";
    document.getElementById("clock").style.width="300px";
}

/*Kasutatud materjal:
https://www.w3schools.com/jsref/jsref_obj_date.asp
https://stackoverflow.com/questions/14529381/leading-zeros-in-minutes
https://stackoverflow.com/questions/3260939/month-array-in-javascript-not-pretty
https://www.w3schools.com/jsref/prop_style_display.asp
https://stackoverflow.com/questions/29356866/change-color-of-the-text-on-click-to-random-color-button
*/
