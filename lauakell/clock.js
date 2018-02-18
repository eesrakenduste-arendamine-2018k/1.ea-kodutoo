//Euroopa kell

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);
    
    var months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'mai', 'Juuni', 'August', 'September', 'Oktoober', 'November', 'Detsember'];
    var days = ['Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+". "+curMonth+" "+curYear+". aasta";
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//taustavärvi vahetaja

function backgroundColor(){ 
    color = prompt("Enter your background color choice:"); 
	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundColor = color;
}

//kella sisu värvi muutja

function fontColor(){ 
    colorFont = prompt("Enter your font color choice:"); 
	var font = document.getElementsByTagName('font')[0];
	font.style.fontColor = colorFont;
}