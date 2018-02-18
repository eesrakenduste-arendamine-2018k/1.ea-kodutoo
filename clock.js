var clock = document.getElementById('clock');
var weekdayDate = document.getElementById('dayDate');
var hexColor = document.getElementById('hex-color');
var backColor = document.getElementById('back-color');

function hexClock() {
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var date = time.getDate().toString();
    var dayNr = time.getDay().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    
    var listOfDays = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev", "Pühapäev"];
    day = listOfDays[dayNr];


function reverseString(str) {
    return str.split("").reverse().join("");
}

    var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
    var weekdayDateStr = date + day;

    var hexColorStr = '#' + hours + minutes + seconds;
    var hexNr_hm = hours + minutes;
    var hexColStrRev = '#'+ seconds + reverseString(hexNr_hm); 

    var clockSize = seconds + 'px';
    

    clock.textContent = clockStr;
    weekdayDate.textcontent = weekdayDateStr;
    
    
    hexColor.textContent = "Paragraph color: " + hexColStrRev;
    backColor.textContent = "Background color: " + hexColorStr;
    
    document.body.style.backgroundColor = hexColorStr;
    document.body.style.color = hexColStrRev;
    document.body.style.fontSize = clockSize;
}

hexClock();
setInterval(hexClock, 1000);