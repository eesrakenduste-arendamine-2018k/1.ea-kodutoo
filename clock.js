// Avalikud muutujad
let clockContainer // = null
let changeColorButton


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  changeColorButton = document.querySelector('#change-color')

  startClock()
  changeColorButton.addEventListener('click', changeBackgroundColour)
}
function changeBackgroundColour(){
    console.log('muudan varvi')
    const r= Math.round(Math.random())*255
    const g= Math.round(Math.random())*255
    const b= Math.round(Math.random())*255
    clockContainer.style.backgroundColor='rgb('+[r,g,b].join(',')+')'
}

function startClock () {
  window.setInterval(function () {
    const date = new Date()

    clockContainer.innerHTML = date
  }, 1000)
}

