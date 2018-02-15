// Avalikud muutujad
let clockContainer // = null

let dateContainer
var size = 171
var r= 0
var g= 0
var b= 0

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  dateContainer = document.querySelector('#date')
  
  
  startClock()
  
  clockContainer.style.left= parseInt(clockContainer.style.left) + 40 +'px';
  clockContainer.style.top= parseInt(clockContainer.style.top) + 40 +'px';
  clockContainer.style.fontSize = 171+'px';
  window.addEventListener('mousemove', changeBackgroundColor)
  //window.addEventListener('ondblclick', changeRClockSize)
  //window.addEventListener('click', changeClockSize)
  
  window.setInterval(function () {
   changeBackBackgroundColor()
  }, 10)
  
  
}

//Kuna ei saanud EventListeneri tööle kasutasin internetist leitud varianti
//https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37://Left
            clockContainer.style.left= parseInt(clockContainer.style.left) - 5 +'px';
			//console.log("Liigutan")
            break;
        case 38://Up
            clockContainer.style.top= parseInt(clockContainer.style.top) - 5 +'px';
            break;
        case 39://Right
            clockContainer.style.left= parseInt(clockContainer.style.left) + 5 +'px';
            break;
        case 40://Down
            clockContainer.style.top= parseInt(clockContainer.style.top) + 5 +'px';
            break;
    }
};

document.onmousedown = function(f) {
	switch (f.which) {
		case 1://Left click
			changeClockSize();
			break;
		case 2://Right click
			changeRClockSize();
			break;
	}
};



function changeBackBackgroundColor () {
  console.log('muudan värvi')
  var darken = 1
  r = r+darken
  g = g+darken
  b = b+darken

  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
}

function changeBackgroundColor () {
  console.log('muudan värvi')
  
  r = Math.round(Math.random() * 255)
  g = Math.round(Math.random() * 255)
  b = Math.round(Math.random() * 255)

  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
}

function changeClockSize (){
	console.log('Suuruse muutmine')
	
	
	var adding = 10
	size=adding+ size
	console.log(size)
	
	
	clockContainer.style.fontSize = size+'px';
}

function changeRClockSize (){
	console.log('Suuruse vähendamine')
	
	var decrease = 5
	size= size - decrease
	console.log(size)
	
	
	clockContainer.style.fontSize = size+'px';
}

function startClock () {
  updateClock()

  window.setInterval(function () {
   updateClock()
  }, 1000)
}

function updateClock () {
	const date = new Date()
  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
  
	var day = new Array();
	day[0] = "Monday";
	day[1] = "Tuesday";
	day[2] = "Wednesday";
	day[3] = "Thursday";
	day[4] = "Friday";
	day[5] = "Saturday";
	day[6] = "Sunday";
	
	var d = day[date.getDay()];
	
	var month = new Array();
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
	
	var n = month[date.getMonth()];
	var y = date.getFullYear();
	yearAndMonth(y, n, d);
	
	
	
	
	var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
	m = checkTime(m);
    s = checkTime(s);
    clockContainer.innerHTML = h + ":" + m + ":" + s;
}

function yearAndMonth(year, month, day){
	dateContainer.innerHTML = day+"  "+month +"  "+ year;
}

function checkTime(i){
	if (i < 10) {i = "0" + i};
	return i;
}