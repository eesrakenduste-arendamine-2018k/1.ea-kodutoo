var backgrounds = ['bg2.jpeg', 'bg3.jpeg', 'bg4.jpeg', 'bg5.jpeg', 'bg6.jpeg']
var fonts = ["Verdana", "Arial", "Helvetica", "Courier", "Bookman"];
var radios = ["http://stream.radioreklama.bg/nrj_low.ogg", "http://vm1357.cust.netio.cz:8002/live.ogg", "http://revolutionradio.ru/live.ogg"];

window.onload = function () {
    init()
}

function init() {
    timeContainer = document.querySelector('#time')
    console.log(timeContainer)
    dateContainer = document.querySelector('#date')
    console.log(dateContainer)

    startClock()

    // <button class="change-btn" id="change-font-btn">Change font</button>
    // <button class="change-btn" id="change-background-btn">Change background</button>
    // <button class="change-btn" id="change-music-btn">Change music</button>

    document.querySelector('#change-font-btn').addEventListener('click', changeFont)
    document.querySelector('#change-background-btn').addEventListener('click', changeBackground)
    document.querySelector('#change-music-btn').addEventListener('click', changeMusic)
}

function startClock() {
    window.setInterval(function() {
        const date = new Date()

        timeContainer.innerHTML = date.toLocaleTimeString()
        dateContainer.innerHTML = date.toDateString()
    }, 1000)
}

function changeFont() {
    console.log('change font')
    var newFont = Math.floor(Math.random() * (fonts.length));
    timeContainer.style.fontFamily = fonts[newFont]
    dateContainer.style.fontFamily = fonts[newFont]
}

function changeBackground() {
    console.log('change background')
    var newBackground = Math.floor(Math.random() * (backgrounds.length));
    document.body.style.backgroundImage = "url(" + backgrounds[newBackground] +")"
}

function changeMusic() {
    console.log('change music')
    var newRadio = Math.floor(Math.random() * (radios.length))
    document.querySelector('#radio').src = radios[newRadio]
}


