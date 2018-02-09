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

    document.querySelector('#sizeUp').addEventListener('click',sizeUp)
    document.querySelector('#sizeDown').addEventListener('click',sizeDown)
    window.addEventListener('keypress', hideClock)
}

function hideClock(event){
    if(event.key == 'h'){
        clockContainer.style.display = 'none'
    }   
    console.log(event)
}

function sizeUp(){
    console.log('+')
    clockContainer.style.fontSize = '25px'
}
function sizeDown(){
    console.log('-')
    clockContainer.style.fontSize = '5px'
}

function changeBackgroundColor () {
  console.log('muudan värvi')

  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)

  clockContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
}

function startClock () {
  updateClock()

  window.setInterval(function () {
   updateClock()
  }, 1000)
}

function updateClock () { 

  clockContainer.innerHTML = new Date()
}