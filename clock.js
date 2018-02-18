let clockContainer
let fontSizeValue = 15
let fonts = ["courier", "verdana","Comic Sans MS", "Impact"]


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()
  document.querySelector('#change-color').addEventListener('click',changeBackgroundColor)
  document.querySelector('#sizeUp').addEventListener('click',sizeUp)
  document.querySelector('#sizeDown').addEventListener('click',sizeDown)
  document.querySelector('#randomFont').addEventListener('click',giveRandomFont)
  
  window.addEventListener('keypress', hideClock)
}

function giveRandomFont(){
  randomNumber = Math.floor((Math.random() * fonts.length));
  clockContainer.style.fontFamily = fonts[randomNumber]
}

function hideClock(event){
    if(event.key == 'h'){
        clockContainer.style.display = 'none'
    }   
    console.log(event)
}

function sizeUp(){
  fontSizeValue += 5
    
  console.log('"'+fontSizeValue+'px"')
  clockContainer.style.fontSize = fontSizeValue+"px"
  
}
function sizeDown(){
  fontSizeValue -= 5

    console.log(fontSizeValue)
    clockContainer.style.fontSize = fontSizeValue+"px"
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