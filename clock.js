// JavaScript source code
let clockContainer
let dateContainer
let color


window.onload = function() {
    init()
}

function init() {
    clockContainer = document.querySelector('#clock')
    console.log(clockContainer)
    startClock()

    dateContainer = document.querySelector('#date')
    console.log(dateContainer)
    currentDate()

    document.querySelector('#size-up').addEventListener('click', sizeUp)
    document.querySelector('#size-down').addEventListener('click', sizeDown)
    document.querySelector('#hide-clock').addEventListener('click', hideClock)
    document.querySelector('#change-color').addEventListener('click', changeColor)
}

function changeColor (event){
    console.log(event)
<<<<<<< HEAD
    let r = Math.round(Math.random() *  255);
	let g = Math.round(Math.random() *  255);
	let b = Math.round(Math.random() *  255);
    if (clockContainer.style.color === "black" && dateContainer.style.color === "black") {
        clockContainer.style.color = "rgb(" + r + "," + g + "," + b + ")";
        dateContainer.style.color = "rgb(" + r + "," + g + "," + b + ")";
    } else {
        clockContainer.style.color = "rgb(" + r + "," + g + "," + b + ")";
        dateContainer.style.color = "rgb(" + r + "," + g + "," + b + ")";
=======
    if (clockContainer.style.color === "black" && dateContainer.style.color === "black") {
        clockContainer.style.color = "white"
        dateContainer.style.color = "white"
    } else {
        clockContainer.style.color = "black"
        dateContainer.style.color = "black"
>>>>>>> 093e0858b679b12ea650fd6c50505a011604c58f
    }
}

function hideClock(event) {
    console.log(event)
    if (clockContainer.style.visibility === "hidden" && dateContainer.style.visibility === "hidden"){
        clockContainer.style.visibility = "visible"
        dateContainer.style.visibility = "visible"
    } else {
        clockContainer.style.visibility = "hidden"
        dateContainer.style.visibility = "hidden"
    }
}

function sizeUp() {
    console.log('+')
    clockContainer.style.fontSize = '175px'
}

function sizeDown() {
    console.log('-')
    clockContainer.style.fontSize = '125px'
}

function startClock() {
    updateClock()

    window.setInterval(function() {
        updateClock()
    }, 1000)
}

function updateClock() {
    let date = new Date()

    let curHr = date.getHours()
    let curMin = date.getMinutes()

    curHr = (curHr < 10 ? "0" : "") + curHr
    curMin = (curMin < 10 ? "0": "") + curMin

    clockContainer.innerHTML = curHr + ":" + curMin
}

function currentDate() {
    let date = new Date()
    
    let months = ['Jaanuar', 'veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember']
    let days = ['','Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev']

    dateContainer.innerHTML = days[date.getDay()] + " " + date.getDate() + ". " + months[date.getMonth()] + " " + date.getFullYear()

}