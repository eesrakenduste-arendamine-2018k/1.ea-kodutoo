// Avalikud muutujad
let clockContainer // = null
var day = 'True'
var months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember']
var days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev']
var bg = 1;
window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()
}

function startClock () {
  updateClock()

  window.setInterval(function () {
   updateClock()
  }, 1000)
}
//https://www.washington.edu/accesscomputing/webd2/student/unit5/module2/lesson5.html
 function toggleClock() { 
    var myClock = document.getElementById('clock');
    var displaySetting = myClock.style.display;
    var clockButton = document.getElementById('clockButton');
    if (displaySetting == 'block') { 
      myClock.style.display = 'none';
      clockButton.innerHTML = 'Näita kella';
    }
    else { 
      myClock.style.display = 'block';
      clockButton.innerHTML = 'Peida kell';
    }
  } 
  
  function changeBg() {
	  if (bg == 1){
		  document.getElementById('bg').style.backgroundImage= "url('taust2.jpg')";
		  bg = 2
	  }
	  else {
		  document.getElementById('bg').style.backgroundImage= "url('taust.jpeg')";
		  bg = 1
	  }
  }
  


function changeColor () {
	console.log('muudab värvi')
	var color = '#' + Math.floor(Math.random() * 16777215).toString(16)
	clock.style.color = color;
}  


function updateClock () {
	var d =  new Date()
	if (d.getMinutes()>9 && d.getHours()>9){
		var displayTime = d.getHours() + ":" + d.getMinutes();
	}
	if (d.getMinutes()>9 && d.getHours()<10)	{
		var displayTime = "0"+d.getHours() + ":" + d.getMinutes();
	}
	if (d.getMinutes()<10 && d.getHours()<10)	{
		var displayTime = "0"+d.getHours() + ":0" + d.getMinutes();
	}
	if (d.getMinutes()<10 && d.getHours()>9) {
		var displayTime = d.getHours() + ":" + "0" + d.getMinutes();
	}
	//document.getElementById("clock").innerHTML = d.toLocaleTimeString('et-et');
	var displayDate = days[d.getDay()] +" "+d.getDate() + ". " +months[d.getMonth()] 
	document.getElementById("clock").innerHTML = displayTime;
	document.getElementById("date").innerHTML = displayDate;
	//clockContainer.innerHTML = new Date.getSeconds();
}

