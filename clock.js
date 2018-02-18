// Avalikud muutujad
let clockContainer // = null


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  currentDate()
}

function currentDate () {
	var d = new Date();
	var sec = d.getSeconds();
	var min = d.getMinutes();
	var h = d.getHours();
	min = checkTime(min);
	sec = checkTime(sec);
	document.getElementById("clock").innerHTML = h + " : " + min + " : " + sec;
	var time = setTimeout(function (){ currentDate() }, 1000);
	
	var months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	var mon = months[d.getMonth()];
	var days = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
	var weekDay = days[d.getDay()];
	var day = d.getDate();
	var year = d.getFullYear();
	var date = weekDay+", "+day+"."+mon+" "+year;
	document.getElementById("date").innerHTML = date;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function changeColorNight() {
  document.body.style.backgroundColor = "black";
}

function changeColorDay() {
  document.body.style.backgroundColor = "white";
}

function changeSizeBigger() {
  document.getElementById("clock").style.height="200px";
  document.getElementById("clock").style.width="200px";
}

function changeSizeSmaller() {
  document.getElementById("clock").style.height="100%";
  document.getElementById("clock").style.width="100%";
}

function changeColor() {
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);

  document.getElementById("clock").style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}