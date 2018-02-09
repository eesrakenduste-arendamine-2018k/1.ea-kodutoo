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
    const h = date.getHours();
    const m = ('0'+date.getMinutes()).slice(-2);
    const s = date.getSeconds();
    const d = date.getDate();
    const today = date.getDay();

    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let day = new Array();
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Thursday";
    day[4] = "Wednesday";
    day[5] = "Friday";
    day[6] = "Saturday";
    


    let mo = month[date.getMonth()];
    let da = day[date.getDay()];

        clockContainer.innerHTML = h + ":" + m + ":" + s + "<br>" + d + ". " + mo + "<br>" + da
  }, 1000)
  
}


function checkBox() {
    var mode = document.getElementById("mode");
    if (mode.checked == true) {
        //nightmode
        document.getElementById("wrapper").classList.add('nightmode');
        document.getElementById("wrapper").classList.remove('daymode');
    }
    else{
        //daymode
        document.getElementById("wrapper").classList.add('daymode');
        document.getElementById("wrapper").classList.remove('nightmode');
    }
}

function changeFont() {
    var fontSelect = document.getElementById("fonts");
    console.log(fontSelect.value);
    document.getElementById("clock").removeAttribute("class");
    document.getElementById("clock").classList.add(fontSelect.value);
}

function shorcutCheckBox() {
    var mode = document.getElementById("mode");
    if (mode.checked == true) {
        //nightmode
        document.getElementById("wrapper").classList.add('nightmode');
        document.getElementById("wrapper").classList.remove('daymode');
    }
    else{
        //daymode
        document.getElementById("wrapper").classList.add('daymode');
        document.getElementById("wrapper").classList.remove('nightmode');
    }
}

function scrts() {
    var x = document.getElementById("shorcuts");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}