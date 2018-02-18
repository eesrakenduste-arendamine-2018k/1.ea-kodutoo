
let clockLocalContainer
let clockNyContainer
let clockPiterContainer
let dateLocal
let dateNy
let datePiter
let activeClock

window.onload = function () {
    init()
}

function init () {
    clockLocalContainer = document.querySelector('#clock-local')
    clockNyContainer = document.querySelector('#clock-ny')
    clockPiterContainer = document.querySelector('#clock-piter')
    //console.log(clockContainer)

    buttonLocal = document.querySelector('#button-local')
    buttonNy = document.querySelector('#button-ny')
    buttonPiter = document.querySelector('#button-piter')

    startClock()

    clockLocalContainer.style.display = "block"
    activeClock = "Tallinn"

    buttonLocal.addEventListener("click", showLocalTime)
    buttonNy.addEventListener("click", showNyTime)
    buttonPiter.addEventListener("click", showPiterTime)

}

function startClock () {
    updateClock()

    window.setInterval(function () {
        updateClock()
    },1000)
}

function updateClock () {
    //dateLocal = new Date() + "<div>Tallinn</div>"
    dateLocal = calcTime("Tallinn", "+2")
    dateNy = calcTime("New York", "-5")
    datePiter = calcTime("Peterburi", "+3")

    clockLocalContainer.innerHTML = dateLocal
    clockNyContainer.innerHTML = dateNy
    clockPiterContainer.innerHTML = datePiter

    setBackgroundImage()
}

// mõte leitud: https://stackoverflow.com/a/8207708
function calcTime(city, offset) {
    const d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    const utc = d.getTime() - (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    const nd = new Date(utc + (3600000*offset));

    // return time as a string
    return nd.toUTCString() + "<div>" + city + "</div>";
}

function setBackgroundImage () {
    if (activeClock == "Tallinn") {
        document.body.style.backgroundImage = "url(images/Tallinn.jpg)"
    } else if (activeClock == "NewYork") {
        document.body.style.backgroundImage = "url(images/NewYork.jpg)"
    } else if (activeClock == "Piter") {
        document.body.style.backgroundImage = "url(images/Piter.jpg)"
    }
}

function showNyTime () {
    //console.log("Tekst, mis ta logisse kirjutab")
    clockLocalContainer.style.display = "none"
    clockPiterContainer.style.display = "none"
    clockNyContainer.style.display = "block"
    activeClock = "NewYork"
}

function showPiterTime () {
    //console.log("Tekst, mis ta logisse kirjutab")
    clockLocalContainer.style.display = "none"
    clockNyContainer.style.display = "none"
    clockPiterContainer.style.display = "block"
    activeClock = "Piter"
}

function showLocalTime () {
   // console.log("Tekst, mis ta logisse kirjutab")
    clockPiterContainer.style.display = "none"
    clockNyContainer.style.display = "none"
    clockLocalContainer.style.display = "block"
    activeClock = "Tallinn"
}

