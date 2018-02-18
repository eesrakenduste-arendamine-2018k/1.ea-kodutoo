let clockContainer
let dateContainer
let count_c = 0
let count_s = 0
let count_t = 0

window.onload = function () {
    init()
}

function init () {
    clockContainer = document.querySelector('#clock')
    dateContainer = document.querySelector('#time')
    console.log(clockContainer)

    BackroundPic()
    startClock()
    window.setInterval(function () {
        startClock()
    }, 1000)
}

function startClock () {
    const date = new Date()
    const d = new Array()
    d[0] = "Pühapäev"
    d[1] = "Esmaspäev"
    d[2] = "Teisipäev"
    d[3] = "Kolmapäev"
    d[4] = "Neljapäev"
    d[5] = "Reede"
    d[6] = "Laupäev"

    day = d[date.getDay()]
    clockContainer.innerHTML = date.toLocaleTimeString('it-IT')
    dateContainer.innerHTML = day + ", " + date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear()
}

function textColor() {

    if(count_c === 0){
        document.getElementById("clock").style.color = "blue"
        document.getElementById("time").style.color = "blue"
    }else if(count_c === 1){
        document.getElementById("clock").style.color = "red"
        document.getElementById("time").style.color = "red"
    }else if(count_c === 2){
        document.getElementById("clock").style.color = "black"
        document.getElementById("time").style.color = "black"
    }else if(count_c === 3){
        document.getElementById("clock").style.color = "green"
        document.getElementById("time").style.color = "green"
    }else if(count_c === 4){
        document.getElementById("clock").style.color = "white"
        document.getElementById("time").style.color = "white"
    }

    count_c ++
    if (count_c >= 5) {
        count_c = 0
    }
}


function textType() {

    if(count_t === 0){
        document.getElementById("clock").style.fontFamily = "Times"
        document.getElementById("time").style.fontFamily = "Times"
    }else if(count_t === 1){
        document.getElementById("clock").style.fontFamily = "Courier"
        document.getElementById("time").style.fontFamily = "Courier"
    }else if(count_t === 2){
        document.getElementById("clock").style.fontFamily = "Arial"
        document.getElementById("time").style.fontFamily = "Arial"
    }

    count_t++
    if (count_t >= 3) {
        count_t = 0
    }
}

function textSize() {

    if(count_s === 0){
        document.getElementById("clock").style.fontSize = 130
        document.getElementById("time").style.fontSize = 70
    }else if(count_s === 1){
        document.getElementById("clock").style.fontSize = 140
        document.getElementById("time").style.fontSize = 80
    }else if(count_s === 2){
        document.getElementById("clock").style.fontSize = 100
        document.getElementById("time").style.fontSize = 40
    }else if(count_s === 3){
        document.getElementById("clock").style.fontSize = 110
        document.getElementById("time").style.fontSize = 50
    }else if(count_s === 4){
        document.getElementById("clock").style.fontSize = 120
        document.getElementById("time").style.fontSize = 60
    }

    count_s ++
    if (count_s >= 5) {
        count_s = 0
    }
}

function BackroundPic() {

    
}