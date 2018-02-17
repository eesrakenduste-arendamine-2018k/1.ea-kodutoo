// Avalikud muutujad
let clockContainer // = null


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()
  
  document
  .querySelector('#change-position')
  .addEventListener('click', changeLocation)
  
}

function changeLocation(event){
	console.log(event)
		clockContainer.style.left = Math.round(Math.random() * window.innerWidth)+'px';
		clockContainer.style.top = Math.round(Math.random() * window.innerHeight)+'px';
}
function changeSizeBig() {
	clockContainer.style.fontSize= 'xx-large';
}
function changeSizeSmall() {
	clockContainer.style.fontSize= 'xx-small';
}
function changeSizeNormal() {
	clockContainer.style.fontSize= 'medium';
}
function changeFontItalic() {
	clockContainer.style.fontStyle= 'italic';
}

function changeFontNormal() {
	clockContainer.style.fontStyle= 'normal';
}
function get_random_color() {
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    clockContainer.style.background="#"+color;
}

function changeClockColorRandom(){
	var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    clockContainer.style.color="#"+color;
	
}

function startClock () {
	const date = new Date()

    clockContainer.innerHTML = date
  window.setInterval(function () {
    const date = new Date()

    clockContainer.innerHTML = date
  }, 1000)
}
