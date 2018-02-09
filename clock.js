// Avalikud muutujad

let clockContainer
let colour = 0
let size = 0
let lspace = 0

window.onload = function() {
    init()

}

function init() {
    clockContainer = document.querySelector('#clock')

    startClock()
}

function clockDisplay(){
    const date = new Date()
    clockContainer.innerHTML = date.toLocaleTimeString()
}

function startClock() {
        clockDisplay()
    window.setInterval(function () {
        clockDisplay()
    }, 1000)
}

function changeColour() {
    colour = colour+1
    if(colour == 4){
        colour = 0
    }
    if(colour == 0){
        out_colour = "white"
    }
    else if(colour == 1){
        out_colour = "red"
    }
    else if(colour == 2){
        out_colour = "blue"
    }
    else if(colour == 3){
        out_colour = "green"
    }
    document.getElementById("clock").style.color = out_colour
}

function changeSize(){
    size = size+1
    if(size == 4){
        size = 0
    }
    if(size == 0){
        out_size = "50px"
    }
    else if(size == 1){
        out_size = "70px"
    }
    else if(size == 2){
        out_size = "15px"
    }
    else if(size == 3){
        out_size = "30px"
    }
    document.getElementById("clock").style.fontSize = out_size
}

function changeLspace(){
    lspace = lspace+1
    if(lspace == 4){
        lspace = 0
    }
    if(lspace == 0){
        out_lspace= "10px"
    }
    else if(lspace == 1){
        out_lspace= "15px"
    }
    else if(lspace == 2){
        out_lspace= "25px"
    }
    else if(lspace == 3){
        out_lspace= "3px"
    }
    document.getElementById("clock").style.letterSpacing = out_lspace
}



