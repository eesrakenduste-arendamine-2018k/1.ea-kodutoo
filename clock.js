// Avalikud muutujad
let clockContainer // = null
let dateContaier

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  dateContainer = document.querySelector('#date')
  console.log(clockContainer)
  console.log(dateContainer)
  startClock()
  startDate()
}

function startClock () {
  window.setInterval(function () {
    const date = new Date()
    const hours = date.getHours();
    const minutes = ('0'+date.getMinutes()).slice(-2);
    const seconds = date.getSeconds();

    clockContainer.innerHTML = hours + ":" + minutes + ":" + seconds
  }, 1000)
}

function startDate(){
  let date = new Date()
  let kuud = ['jaanuar', '  veebruar  ', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
  dateContainer.innerHTML =date.getDate()+" "+kuud[date.getMonth()]+" "+date.getFullYear()
}


/*https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API*/

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}


function toggleBackgroundNight () {
  let body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(assets/bg-photoBW.jpg)';
  body.style.backgroundSize = 'cover';
  
}

function toggleBackgroundDay () {
  let body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(assets/bg-photo40.jpg)';
  body.style.backgroundSize = 'cover';
  
}

function myFunction() {
  document.getElementById("demo").style.color = "#b2ffff";
}

function dateTransaprent() {
  document.getElementById("date").style.color = "transparent";
}