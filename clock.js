



var clock = document.getElementById('clock');
var date = document.getElementById('date');

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


function Clock(){
	var time = new Date();
	var hours = addZero(time.getHours());
	var minutes = addZero(time.getMinutes());
	var seconds = addZero(time.getSeconds());
	

	
	
	if (hours > 05 && hours < 11) {
		document.body.style.backgroundImage = "url('early.jpg')";
		document.body.style.backgroundSize="100%";
	}
	if (hours => 00 && hours < 06) {
		document.body.style.backgroundImage = "url('night.jpg')";
		document.body.style.color = "white";
	}
	
	if (hours > 10 && hours < 17) {
		document.body.style.backgroundImage = "url('day.jpg')";
		document.body.style.color = "white";

	}
	
	if (hours > 16 && hours < 24) {
		document.body.style.backgroundImage = "url('evening.jpg')";
		document.body.style.backgroundSize="100%";
		document.body.style.color = "#DBFA19";

	}
	

	
		
	
	var clockStr = hours + ':' + minutes + ':' + seconds;
	
	clock.textContent = clockStr;
}

var months = new Array(12);
months[0] = "Jaanuar";
months[1] = "Veebruar";
months[2] = "Märts";
months[3] = "Aprill";
months[4] = "Mai";
months[5] = "Juuni";
months[6] = "Juuli";
months[7] = "August";
months[8] = "September";
months[9] = "Oktoober";
months[10] = "November";
months[11] = "Detsember";

var dayNames = new Array(7);
dayNames[0] = "Pühapäev";
dayNames[1] = "Esmaspäev";
dayNames[2] = "Teisipäev";
dayNames[3] = "Kolmapäev";
dayNames[4] = "Neljap";
dayNames[5] = "Reede";
dayNames[6] = "Laupäev";


function dateTime(){
	var dmy = new Date();
	var weekDays = dmy.getDay().toString();
	var day = dmy.getDate().toString();
	var month = dmy.getMonth().toString();
	var year = dmy.getFullYear().toString();
	
	var timeStr = dayNames[weekDays] + ', ' + day + '. ' + months[month] + ' ' + year;
	
	date.textContent = timeStr;
	
	
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
	color = getRandomColor()
    document.getElementById("clock").style.color = color;
	document.getElementById("date").style.color = color;
}

function changeFont(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("clock").style.fontFamily = listValue;
}
Clock();
dateTime();
setInterval(Clock, 1000);



































































