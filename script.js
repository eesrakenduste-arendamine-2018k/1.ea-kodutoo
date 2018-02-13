// Avalikud muutujad
let clockContainer // = null
let rgb = []
let w = window.innerWidth
let h = window.innerHeight

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  dateContainer = document.querySelector('#date')
  console.log(clockContainer)

  startClock()

  document.querySelector('#change-position').addEventListener("click", changePosition)

  document.querySelector('#container').addEventListener('mousemove',
  function(event) {
      color(event);
  });
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

function changePosition() {
    console.log(event)

    dateContainer.style.left = Math.round(Math.random()*window.innerWidth) + 'px';
    dateContainer.style.top = Math.round(Math.random()*window.innerHeight) + 'px';;
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