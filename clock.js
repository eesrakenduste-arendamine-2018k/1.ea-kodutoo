// Avalikud muutujad
let clockContainer // = null
let size = 40;
let topMargin = 5;
let date;
let string = "0:0:0";
let weekdays = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev", "Pühapäev"];
let months = ["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","Detsember","Oktoober","November","Detsember"];

window.onload = function () {
  init();
}

function init () {
  clockContainer = document.querySelector('#clock');
  console.log(clockContainer);

  startClock()
  document.querySelector('#size-up').addEventListener('click', sizeUp);
  document.querySelector('#size-down').addEventListener('click', sizeDown);
  document.querySelector('#clockColor').addEventListener('input', changeColor);

}
function changeColor() {
	document.getElementById("clock").style.color = document.getElementById("clockColor").value;
}

function sizeUp() {
	size= size+5;
	topMargin= topMargin+5;
	console.log('+');
	clockContainer.style.fontSize = size+'px';
	clockContainer.style.marginTop = topMargin+'px';
}
function sizeDown() {
	size= size-5;
	topMargin= topMargin-5;
	console.log('-');
	clockContainer.style.fontSize = size+'px';
	clockContainer.style.marginTop = topMargin+'px';
}

function startClock() {
  updateClock();

  window.setInterval(function () { updateClock(); }, 1000)};

function updateClock () {
	date= new Date();
	string = ('0' + date.getHours()).slice(-2)+":"+('0' + date.getMinutes()).slice(-2)+":"+('0' + date.getSeconds()).slice(-2)+ "<br>" + weekdays[date.getDay()]+ " - " + date.getDate() + ". " + months[date.getMonth()];
	clockContainer.innerHTML = string;
}