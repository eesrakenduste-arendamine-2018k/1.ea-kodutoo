const clock = document.getElementById('clock');
const hexColor = document.getElementById('hex-color');
const dayContatainer = document.getElementById('day');

function hexClock() {
  const time = new Date();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  const day = time.getDay();
  const days = new Array("Pühapäev", "Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Lauäev");
  
  
  if (hours.length < 2) {
    hours = "0" + hours;
  }
  
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  
  
  const clockStr = hours + " : " + minutes + " : " + seconds;
  const hexColorStr = "#" + hours + minutes + seconds;
  const dayStr = days[day];
  
  clock.textContent = clockStr
  hexColor.textContent = hexColorStr
  dayContatainer.textContent = dayStr
  
  document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);

 function increaseClockSize(){
    var element = document.getElementById("clock");
    var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    element.style.fontSize = (fontSize + 10) + 'px';
    }
	
function decreaseClockSize(){
    var element = document.getElementById("clock");
    var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    element.style.fontSize = (fontSize - 10) + 'px';
    }

 function fontColor(){
    r = Math.round(Math.random() * 255)
    g = Math.round(Math.random() * 255)
    b = Math.round(Math.random() * 255)
    document.getElementById("clock").style.color='rgb('+ r +','+ g +','+ b +')';
    document.getElementById("day").style.color='rgb('+ r +','+ g +','+ b +')';
	document.getElementById("hex-color").style.color='rgb('+ r +','+ g +','+ b +')';
    }
	