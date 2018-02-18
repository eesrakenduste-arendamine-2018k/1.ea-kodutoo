// Avalikud muutujad 

let changeBackgroundContainer = document.querySelector('body');
let dayOfWeekContainer = document.querySelector('.dayOfWeek');
let dateContainer = document.querySelector('.date');

changeBackgroundContainer.addEventListener('click', changeBackgroundColor);

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}
  return i
}

function date () {
  const date = new Date()

  const dayOfWeek = new Array('Pühapäev','Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede', 'Laupäev')
  const getDayOfWeek = dayOfWeek[date.getDay()]
  dayOfWeekContainer.innerHTML = getDayOfWeek

  const month = new Array('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12')
  let getMonth = month[date.getMonth()]
  let getDay = date.getDate()

  let getDate = getDay+'/'+getMonth
  dateContainer.innerHTML = getDate

}

function startClock () {
  startTime();
  date();

  window.setInterval(function () {
    startTime();
    date();
  }, 1000)
}

startClock();

function changeBackgroundColor () {
  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)

  changeBackgroundContainer.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
}

