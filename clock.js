
let clockContainer
let authorName
let dateContainer

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  dateContainer = document.querySelector('#date')
  authorName = document.querySelector('#authorName')
  authorName.innerHTML = "Sergei Frolov"
  console.log(clockContainer)

  startClock()

  document
    .querySelector('#size-up')
    .addEventListener('click', sizeUp)

  document
    .querySelector('#size-down')
    .addEventListener('click', sizeDown)

  window.addEventListener('keypress', hideClock)
  window.addEventListener('keypress', changeColor)

    
}

function hideClock (event) {
  console.log(event)
  if (event.key == 'h') {
    if (clockContainer.style.display === "none" && dateContainer.style.display === "none") {
        clockContainer.style.display = "block";
        dateContainer.style.display = "block";

    } else {
        clockContainer.style.display = "none";
        dateContainer.style.display = "none";
    }
  }
}

function changeColor (event){
  console.log(event)
  if (event.key == 'j') {
    if (clockContainer.style.color === "black" && dateContainer.style.color === "black") {
      clockContainer.style.color = "white";
      dateContainer.style.color = "white";
  } else {
      clockContainer.style.color = "black";
      dateContainer.style.color = "black";
    }
  }
}
function sizeUp () {
  console.log('+')
  if (clockContainer.style.fontSize === "3em" && dateContainer.style.fontSize == "3em") {
    clockContainer.style.fontSize = "4.5em";
    dateContainer.style.fontSize = "4.5em";
} else {
    clockContainer.style.fontSize = "3em";
    dateContainer.style.fontSize = "3em";
}
}
function sizeDown () {
  console.log('-')
  if (clockContainer.style.fontSize === "3em" && dateContainer.style.fontSize == "3em") {
    clockContainer.style.fontSize = "2em";
    dateContainer.style.fontSize = "2em";
} else {
    clockContainer.style.fontSize = "3em";
    dateContainer.style.fontSize = "3em";
}
}

function startClock () {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)

  clockContainer.style.color = 'black'
  dateContainer.style.color = 'black'
}

function updateClock() {
  const date = new Date()
  let m, h, s
  if (date.getHours() < 10){h = "0" + date.getHours()}
  else {h = date.getHours()}

  if (date.getMinutes() < 10){m = "0" + date.getMinutes()}
  else {m = date.getMinutes()}
  
  if (date.getSeconds() < 10){s = "0" + date.getSeconds()}
  else {s = date.getSeconds()}
  
  newDate = h + ":" + m + ":" +  s

  clockContainer.innerHTML = newDate
  dateContainer.innerHTML = date.toDateString()

}
