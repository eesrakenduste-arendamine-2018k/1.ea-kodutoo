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



