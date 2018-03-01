// Avalikud muutujad
let clockContainer // = null
let changeColorButton //defineerin nupu


window.onload = function() {
  init()
}

function greeting() {
var rightNow = new Date();
var currentHour = rightNow.getHours();
switch(true)
{
  case (currentHour > 8 && currentHour < 12):
    document.write("Morning, sunshine!");
    break;
  case (currentHour === 12):
    documnt.write("Lunch time!");
    break;
  case (currentHour > 12 && currentHour < 18):
    document.write("Fight the urge to siesta");
    break;
  default:
    document.write("Careful, don´t overwork!");
	
setTimeout(
	function goBack(){ alert("Go Back"); window.history.back(); }, 2000); 
	
}
}

function init() {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  changeColorButton = document.querySelector('#change-color') //ytlen, et see nupp on sellise id-ga

  startClock()
  
  changeColorButton.addEventListener('click', changeBackgroundColor) //siis ytlen, et nupule vajutades tee changeBackgroundColor
}

function changeBackgroundColor() {
	console.log('muudan värvi')
	
	const r = Math.round(Math.random() * 255)
	const g = Math.round(Math.random() * 255)
	const b = Math.round(Math.random() * 255)

	
	clockContainer.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
}

function substitute() {
	var myValue = document.getElementById('myTextBox').value;
	if (myValue.length === 0) {
		alert('Palun sisesta uus pealkiri!');
		return;
	}
	var myTitle = document.getElementById('title');
	myTitle.innerHTML = myValue;
}


function startClock() {
	updateClock()
	
	window.setInterval(function() {
		updateClock()
	}, 1000)
}

function updateClock() {
	const date = new Date()
	
	clockContainer.innerHTML = date
}
	

