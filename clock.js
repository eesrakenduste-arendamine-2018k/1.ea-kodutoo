let clockContainer
let dateContainer
let backgroundContainer
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('.time')
  dateContainer = document.querySelector(".date")
  backgroundContainer = document.body
  startClock()
  
  window.addEventListener("click", changeBgColor)
  window.addEventListener("keypress", changeFontSize)
  //clockContainer.addEventListener("click", changeTimeFormat)
}

function changeBgColor() {
  console.log("Muudan taustavärvi")
  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)
  backgroundContainer.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
}

function changeFontSize(e) {
  if (e.charCode == 119) {
  console.log("Muudan kirjastiili suuremaks")
  document.querySelector(".date").style.fontSize = "48px"
  document.querySelector(".time").style.fontSize = "160px"
  document.querySelector(".text").style.fontSize = "24px"
  }
  if (e.charCode == 115) {
    console.log("Muudan kirjastiili väiksemaks")
    document.querySelector(".date").style.fontSize = "24px"
    document.querySelector(".time").style.fontSize = "80px"
    document.querySelector(".text").style.fontSize = "12px"
  }
}

/*function changeTimeFormat() {
  console.log("Muudan aja 12-tunniseks")
  let time = new Date()
  time = time.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
  clockContainer.innerHTML = time
}*/

function startClock () {
  window.setInterval(function () {
    function addZero(digit) {
      if (digit < 10) {
        digit = '0' + digit
      }
      return digit
    }

    const date = new Date()
    const newDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + week[date.getDay()]
    const newTime = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds())

    clockContainer.innerHTML = newTime
    dateContainer.innerHTML = newDate
  }, 1000)
}