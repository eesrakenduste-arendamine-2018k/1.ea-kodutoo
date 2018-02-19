//avalikud muutujad

let changeLocationButtonDown;
let changeLocationButtonRigtht;

//kell ja kuupäev

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);

    var months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'August', 'September', 'Oktoober', 'November', 'Detsember'];
    var days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+". "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//muuda taustavärvi leheküljel

function backgroundColor(){ 
    color = prompt("Enter your background color choice:"); 
	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundColor = color;
}

//kellavärvi muutja

status = 1;
function changeClockStyle() {
x = document.getElementById("clock", "date");

if(status==1) {
    x.style.color = 'blue';
    status = 2;
}
else if(status==2) {
    x.style.color = 'red';
    status = 3;
}
else if(status==3) {
    x.style.color = 'yellow';
    status = 1;
}

}

//kellavärvi muutja USA kellal

status = 1;
function changeClockStyleUsa() {
x = document.getElementById("clockUsa");

if(status==1) {
    x.style.color = 'blue';
    status = 2;
}
else if(status==2) {
    x.style.color = 'red';
    status = 3;
}
else if(status==3) {
    x.style.color = 'yellow';
    status = 1;
}

}

//kuupäeva värvi muutja

status = 1;
function changeDateStyle() {
x = document.getElementById("date");

if(status==1) {
    x.style.color = 'blue';
    status = 2;
}
else if(status==2) {
    x.style.color = 'red';
    status = 3;
}
else if(status==3) {
    x.style.color = 'yellow';
    status = 1;
}
}

//USA kell

function startTimeUsa() {
	var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTimeUsa(hr);
    min = checkTimeUsa(min);
    sec = checkTimeUsa(sec);
    document.getElementById("clockUsa").innerHTML = hr + " : " + min + " : " + sec + " " + ap;
    var time = setTimeout(function(){ startTimeUsa() }, 500);
  }
  function checkTimeUsa(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }