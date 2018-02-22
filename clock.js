// Avalikud muutujad
let clockContainer // = null
let changeColorButton
let fontSizeValue = 15

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  changeColorButton = document.querySelector('#change-color')

  startClock()
  changeColorButton.addEventListener('click', changeBackgroundColour)
  document.querySelector('#sizeUp').addEventListener('click',sizeUp)
  document.querySelector('#sizeDown').addEventListener('click',sizeDown)
}

function sizeUp(){
  fontSizeValue += 5
  console.log('"'+fontSizeValue+'px"')
  clockContainer.style.fontSize = fontSizeValue +"px"

}
function sizeDown(){
fontSizeValue -= 5
console.log(fontSizeValue)
clockContainer.style.fontSize=fontSizeValue +"px"

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

