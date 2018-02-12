window.onload = function(){
    startClock()
}

function startClock () {
    currentTime()

    window.setInterval(function () {
        currentTime()
    }, 1000)
}

function currentTime() {
    const currentDate = new Date()
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();

    if (currentDate.getHours()<10){
        currentHour = "0" + currentDate.getHours();
    }
    if (currentDate.getMinutes()<10){
        currentMinute = "0" + currentDate.getMinutes();
    }
    if (currentDate.getSeconds()<10){
        currentSecond = "0" + currentDate.getSeconds();
    }
    
    document.getElementById("weekday").innerHTML = weekdays[currentDate.getDay()];
    document.getElementById("month").innerHTML =  months[currentDate.getMonth()] + " " + currentDate.getDate();
    document.getElementById("clock").innerHTML =  currentHour + ":" + currentMinute + ":" + currentSecond;
}

function changeColor (i) {
    let color = document.getElementById(i).getAttribute('value')
    document.getElementById("info").style.color = color
}

function hideColor() {
    let x = document.getElementById("colors");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function changePic (i) {
    let picture = document.getElementById(i).getAttribute('value')
    document.body.style.backgroundImage = picture
}

function hidePic() {
    let x = document.getElementById("pictures");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}