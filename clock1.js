// Avalikud muutujad
let clockContainer // = null
let dateContainer

window.onload = function () {
  init()
}

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

window.onload = function () {
  init()
}

function init() {
  dateContainer = document.querySelector('#date')
  console.log(dateContainer)

  currentDate()
}

function currentDate(){
  const date = new Date()

  var kuud = ['Jaanuar', 'veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'];
  var paevad = ['','Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev'];

  dateContainer.innerHTML = paevad[date.getDay()]+" "+date.getDate()+". "+kuud[date.getMonth()]+" "
  +date.getFullYear();
}