let clockContainer
let dateContainer
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('.time')
  dateContainer = document.querySelector(".date")

  startClock()

  clockContainer.addEventListener("click", changeTimeFormat)
}

function changeTimeFormat() {
  console.log("Muudan aja 12-tunniseks")
  let time = new Date()
  time = time.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
  clockContainer.innerHTML = time
}

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