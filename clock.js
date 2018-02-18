// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);
	var dateContainer = document.getElementById('date');
	console.log(dateContainer);
	
    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentTime();
    dateContainer.innerHTML = getCurrentDate();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentTime();
    }, 1000);

 

};

var getCurrentTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
	var day = currentDate.getDay();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();
	var date = currentDate.getDate();
	
    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + '<br>';

	
    return dateString;
};

var getCurrentDate = function(){
	var currentDate = new Date();
	
	var day = currentDate.getDay();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();
	var date = currentDate.getDate();
	
	var dateString = myDays(day) + '<br>' + addZeroBefore(date) + "." + 
	myMonths(month) + '<br>' + addZeroBefore(year);
	
	return dateString;
	
};

function myDays(day){
    if(day==0){day="Pühapäev";}
	if(day==1){day="Esmaspäev";}
	if(day==2){day="Teisipäev";}
	if(day==3){day="Kolmapäev";}
	if(day==4){day="Neljapäev";}
	if(day==5){day="Reede";}
	if(day==6){day="Laupäev";}
    return day;
}

function myMonths(month){
    if(month==0){month="jaanuar";}
    if(month==1){month="veebruar";}
    if(month==2){month="märts";}
    if(month==3){month="aprill";}
    if(month==4){month="mai";}
    if(month==5){month="juuni";}
    if(month==6){month="juuli";}
    if(month==7){month="august";}
    if(month==8){month="september";}
    if(month==9){month="oktoober";}
    if(month==10){month="november";}
    if(month==11){month="detsember";}
    return month;
}

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}


function musicOn() {
	document.getElementById("mp3").play();}

function musicOff() {
	document.getElementById("mp3").pause();}


	var color = 1;
	var colors = [
		"red", "yellow", "green", "blue", "black", "red"
	];

	var ran = Math.round(Math.random()*6);

	

function changeClockColor(){	
		switch(color) {
		case 1:
			document.getElementById('clock').style.color = colors[1];
			color=2;
			break;
		case 2:
			document.getElementById('clock').style.color = colors[2];
			color=3;
			break;
		case 3:
			document.getElementById('clock').style.color = colors[3];
			color=4;
			break;
		case 4:
			document.getElementById('clock').style.color = colors[4];
			color=5;
			break;			
		case 5:
			document.getElementById('clock').style.color = colors[0];
			color=1;
			break;
		}
	}
	function changeDateColor(){	
		switch(color) {
		case 1:
			document.getElementById('date').style.color = colors[1];
			color=2;
			break;
		case 2:
			document.getElementById('date').style.color = colors[2];
			color=3;
			break;
		case 3:
			document.getElementById('date').style.color = colors[3];
			color=4;
			break;
		case 4:
			document.getElementById('date').style.color = colors[4];
			color=5;
			break;			
		case 5:
			document.getElementById('date').style.color = colors[0];
			color=1;
			break;
		}
	}

	var font = 1;
	var fonts = ["2vmax 'Verdana, Geneva, sans-serif'", "3vmax 'Verdana, Geneva, sans-serif'", "5vmax 'Verdana, Geneva, sans-serif'",
	"6.5vmax 'Verdana, Geneva, sans-serif'"	];

	var ran = Math.round(Math.random()*4);

function changeDateSize(){	
		switch(font) {
		case 1:
			document.getElementById('date').style.font = fonts[1];
            document.getElementById('date').style.fontStyle='italic';
			font=2;
			break;
		case 2:
			document.getElementById('date').style.font = fonts[2];
            document.getElementById('date').style.fontStyle='italic';
			font=3;
			break;
		case 3:
			document.getElementById('date').style.font = fonts[3];
            document.getElementById('date').style.fontStyle='italic';
			font=4;
			break;
		case 4:
			document.getElementById('date').style.font = fonts[4];
            document.getElementById('date').style.fontStyle='italic';
			font=5;
			break;
		case 5:
			document.getElementById('date').style.font = fonts[0];
            document.getElementById('date').style.fontStyle='italic';
			font=1;
			break;
			}
}
function changeClockSize(){	
		switch(font) {
		case 1:
			document.getElementById('clock').style.font = fonts[1];
            document.getElementById('clock').style.fontStyle='italic';
			font=2;
			break;
		case 2:
			document.getElementById('clock').style.font = fonts[2];
            document.getElementById('clock').style.fontStyle='italic';
			font=3;
			break;
		case 3:
			document.getElementById('clock').style.font = fonts[3];
            document.getElementById('clock').style.fontStyle='italic';
			font=4;
			break;
		case 4:
			document.getElementById('clock').style.font = fonts[4];
            document.getElementById('clock').style.fontStyle='italic';
			font=5;
			break;
		case 5:
			document.getElementById('clock').style.font = fonts[0];
            document.getElementById('clock').style.fontStyle='italic';
			font=1;
			break;
			}
}

