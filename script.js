// Avalikud muutujad
let clockContainer // = null
let rgb = []
let w = window.innerWidth
let h = window.innerHeight
let sizeChange = 5
 
window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  dateContainer = document.querySelector('#date')
  fullDateContainer = document.querySelector('#fullDate')
  console.log(clockContainer)

  startClock()
  document.querySelector('#changePosition').addEventListener('click', changePosition)
  document.querySelector('#enlarge').addEventListener('click', increaseSize)
  document.querySelector('#decrease').addEventListener('click', decreaseSize)
  document.querySelector('#container').addEventListener('mousemove', 
  function(event) {
      color(event)

  })
}

function color(e){
	r = Math.round(e.pageX/w * 255)
	g = Math.round((h-e.pageY)/h * 255)
	b = 160
    rgb = [r, g, b]

    document.body.style.backgroundColor = 'rgb(' + 
    [rgb[0],rgb[1],rgb[2]].join(',') + ')';

    console.log(e)
}

function increaseSize(){
    let el = document.getElementById("clock");
    let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    document.getElementById('clock').style.fontSize = 
    (fontSize+sizeChange).toString() + "px"
}

function decreaseSize(){
    let el = document.getElementById("clock");
    let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    document.getElementById('clock').style.fontSize = 
    (fontSize-sizeChange).toString() + "px"
}


function resetSize(){
    sizeChange = 0
    document.getElementById('clock').style.fontSize = clockFont.toString() + "px"
}
function changePosition(event) {
    console.log(event)

    fullDateContainer.style.left = Math.round(Math.random()*w-365) + 'px';
    fullDateContainer.style.top = Math.round(Math.random()*h-450) + 'px';;
}

function startClock () {
    updateClock();

    window.setInterval(function () {
        updateClock();
    }, 1000)
}

function updateClock(){
    const date = new Date()
    dateStyle(date)
} 

function dateStyle(date){
    let time = date.getHours() +":"+("0"+date.getMinutes()).slice(-2)//+":"+("0"+date.getSeconds()).slice(-2)

    const monthsNames = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"]

    let longDate = date.getDate()+". "+monthsNames[date.getMonth()]+" "+date.getFullYear()

    clockContainer.innerHTML = time
    dateContainer.innerHTML = longDate
}