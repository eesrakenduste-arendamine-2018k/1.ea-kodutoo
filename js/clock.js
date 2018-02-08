let clockContainer

window.onload = function () {
    init()
}

function init () {
    hoursContainer = document.querySelector('#hours')
    minutesContainer = document.querySelector('#minutes')
    secondsContainer = document.querySelector('#seconds')
    dayContainer = document.querySelector('#day')
    console.log(clockContainer)

    startClock()
}

function startClock () {
    window.setInterval(function () {
        const date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        const day = date.getDay()
        let dayName

        dayName = dayText(day)
        if(hours < 10){
            hours = "0" + hours
        }
        if(minutes < 10){
            minutes = "0" + minutes
        }
        if(seconds < 10){
            seconds = "0" + seconds
        }
        hoursContainer.innerHTML = hours
        minutesContainer.innerHTML = minutes
        secondsContainer.innerHTML = seconds
        dayContainer.innerHTML = dayName
    }, 1000)
}

function dayText(dayNumber){
    const daysEst = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
    
    return daysEst[dayNumber]
}