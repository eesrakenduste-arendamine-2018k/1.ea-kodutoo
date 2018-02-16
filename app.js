var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.background = "./pattern.png";
    }
}
else {
    if (document.body) {
        document.body.background = "./pattern2.png";
    }
}

var name = prompt("What is your name?");
if(name != null){
    document.getElementById("helloname").innerHTML = "Welcome, " + name;
} else {
    alert("Please enter your name");
}

document.getElementById("youtube").onclick = function(event) {
    window.location.href = "https://www.youtube.com/";}

function clock() {
    
    const fullDate = new Date();
    var hours = fullDate.getHours();
    if(hours < 10) {
        hours = "0" + hours;
    }
    var mins = fullDate.getMinutes();
    if(mins < 10) {
        mins = "0" + mins;
    }
    var secs = fullDate.getSeconds();
    if(secs < 10) {
        secs = "0" + secs;
    }
    var year = fullDate.getYear();
        if(year < 1000){
            year += 1900
        }
    var month = fullDate.getMonth();
    var day = fullDate.getDate();
    var weekday = fullDate.getDay();
    var wd_array = new Array("SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY");
    var m_array = new Array("Jan","Feb","March","April","May","June","July","Sep","Oct","Dec");
    

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + mins;
    document.getElementById('second').innerHTML = ":" + secs;
    document.getElementById('date').innerHTML = day + " " + m_array[month] + ". " + year;
    document.getElementById('wday').innerHTML = wd_array[weekday];
}

setInterval(clock, 100);

