
// Avalikud muutujad
let clockContainer // = null
let dateContainer
let changeColorButton 



window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  dateContainer = document.querySelector('#date')
  fullDateContainer = document.querySelector('#fullDate')
  console.log(clockContainer)

  changeColorButton = document.querySelector('#change-color')
  changeColorButton.addEventListener('click', changeBackgroundColor)
  
  

  startClock()

  document
    .querySelector('#change-position')
    .addEventListener('click', changeLocation)

  document
    .querySelector('#size-up')
    .addEventListener('click', sizeUp)

  document
    .querySelector('#size-down')
    .addEventListener('click', sizeDown)

    window.addEventListener('keypress', hideButtons)

}

function changeLocation (event) {
  console.log(event)
  fullDateContainer.style.left = Math.round(Math.random() * window.innerWidth) + 'px';
  fullDateContainer.style.top = Math.round(Math.random() * window.innerHeight) + 'px';
  console.log(event)  
}

function changeBackgroundColor () {
  console.log('muudan värvi')

  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)

  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
}

function sizeUp () {
  console.log('+')
  if (clockContainer.style.fontSize === "56px" && dateContainer.style.fontSize == "38px") {
    clockContainer.style.fontSize = "62px";
    dateContainer.style.fontSize = "42px";
} else {
  clockContainer.style.fontSize = "56px";
  dateContainer.style.fontSize = "38px";
}
}

function sizeDown () {
  console.log('-')
  if (clockContainer.style.fontSize === "56px" && dateContainer.style.fontSize == "38px") {
    clockContainer.style.fontSize = "48";
    dateContainer.style.fontSize = "34px";
} else {
    clockContainer.style.fontSize = "56px";
    dateContainer.style.fontSize = "38px";
}
}

function hideButtons (event) {
  console.log(event)
  if (event.key == 'h') {
    if (document.getElementById('useButtons').style.display === "none") {
          document.getElementById('useButtons').style.display = "block";
     } else {
       document.getElementById('useButtons').style.display = "none";
    }
  }
}

function startClock () {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)
}

function updateClock(){
  const date = new Date()
  
  let newClock = date.getHours() + ":" + ("0"+date.getMinutes()).slice(-2)
  + ":" + ("0"+date.getSeconds()).slice(-2)

  monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"]

  dayNames = ["Sunday", "Monday", "Tuesday", 
  "Wednesday", "Thursday", "Friday", 
  "Saturday"]

  let newDate = dayNames[date.getDay()] + " " + date.getDate()  + " " + monthNames[date.getMonth()] + " " + date.getFullYear()
  
  clockContainer.innerHTML = newClock
  dateContainer.innerHTML = newDate
} 