var name = prompt("What is your name?");
if(name != null){
    document.getElementById("yourname").innerHTML = "Welcome, " + name;
} else {
    alert("Please enter your name!");
}
var hexColorStr;
var timezoneNumber = 0;
document.body.style.backgroundColor = '#003399';

function displayclock() {
    var time = new Date();
    var hrs = time.getHours().toString();
    var min = time.getMinutes().toString();
    var sec = time.getSeconds().toString();
    var day = time.getDay();
    var month = time.getMonth();
    var year = time.getFullYear();
    var date = time.getDate();
    var wd_array = new Array("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");
    var m_array = new Array("Jan","Feb","March","April","May","June","July","Sep","Oct","Dec");

    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
       sec = '0' + sec
    }
    if (hrs < 10) {
        hrs = '0' + hrs
    }
    hexColorStr = '#' + hrs + min + sec;
    
    if (timezoneNumber == 0) {
        document.getElementById('hour').innerHTML = hrs;
        document.getElementById('minute').innerHTML = ":" + min;
        document.getElementById('second').innerHTML = ":" + sec;
        document.getElementById('date').innerHTML = date + " " + m_array[month] + ". " + year;
        document.getElementById('day').innerHTML = wd_array[day-1];
    }
    if (timezoneNumber == 1) {
        if (hrs > 12) {
            hrs = hrs - 12;
            document.getElementById('hour').innerHTML = hrs;
            document.getElementById('minute').innerHTML = ":" + min;
            document.getElementById('second').innerHTML = ":" + sec + ' AM';
        } else {
            document.getElementById('hour').innerHTML = hrs;
            document.getElementById('minute').innerHTML = ":" + min;
            document.getElementById('second').innerHTML = ":" + sec + ' PM';
        }
        
        
        document.getElementById('date').innerHTML = date + " " + m_array[month] + ". " + year;
        document.getElementById('day').innerHTML = wd_array[day-1];
    }
    
    
}

function halfHours() {
    timezoneNumber = 1;
}
function fullHours() {
    timezoneNumber = 0;
}

function hexColor() {
    document.body.style.backgroundColor = hexColorStr;
}
function blackColor() {
    document.body.style.backgroundColor = '#000000';
}
function randomColor() {
    var number = Math.floor((Math.random() * 999999) + 1);
    document.body.style.backgroundColor = '#' + number;
}

setInterval(displayclock, 100); 
