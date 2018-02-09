// Avalikud muutujad
let clockContainer // = null

window.onload = function () {
  init()
}

//Clock displayed seperately

function init() {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()
}

function startClock() {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)
}

function updateClock() {
  const date = new Date()

  var currentHours = date.getHours();
  var currentMinutes = date.getMinutes();

  currentHours = (currentHours < 10 ? "0" : "") + currentHours;
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;


  clockContainer.innerHTML = currentHours+":"+currentMinutes;
}



