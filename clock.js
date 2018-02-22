// Avalikud muutujad
let clockContainer 

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
 startClock()
}

function changeBackground(time){
  if (time.value == "day"){
    document.body.style.backgroundImage = 'url("pics/kosk.jpg")';
	document.body.style.backgroundSize = cover;
  } 
  if (time.value == "night"){
    document.body.style.backgroundImage = 'url("pics/haapsalukallas.jpg")';
	document.body.style.backgroundSize = cover;
  }
}

function changeColor(color){
  clockContainer.style.color = color.value;
}

let defaultFontSize = 70;

function changeSizeBigger(){
    defaultFontSize += 10;
    clockContainer.style.fontSize = defaultFontSize + "px";
  }
function changeSizeSmaller(){
    defaultFontSize -= 10;
    clockContainer.style.fontSize = defaultFontSize + "px";
	
  }

function addZero(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

function startClock () {
  window.setInterval(function () { 
	  let date = new Date();
      let hours= date.getHours(); 
      let minutes = date.getMinutes(); 
      let seconds = date.getSeconds(); 

      let day= date.getDate(); 
      let months = new Array("jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober"," november", "detsember");
      let month = months[date.getMonth()];

      let year = date.getFullYear();

      let weekdays = new Array("Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev");
      let weekday = weekdays[date.getDay()];

      hours = addZero(hours);
      minutes = addZero(minutes);
      seconds = addZero(seconds);
      day = addZero(day);

      clockContainer.innerHTML = hours+':'+minutes+':'+seconds+'<br>'+day+'.'+month+' '+year+'<br>'+weekday
  })
}

