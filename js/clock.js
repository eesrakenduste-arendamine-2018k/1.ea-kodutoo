let clockContainer
let language = "est";

window.onload = function () {
    init()
}

function init () {
    hoursContainer = document.querySelector('#hours')
    minutesContainer = document.querySelector('#minutes')
    secondsContainer = document.querySelector('#seconds')
    dayContainer = document.querySelector('#day')
    dateDayContainer = document.querySelector('#dateDay')
    dateMonthContainer = document.querySelector('#dateMonth')
    dateYearContainer = document.querySelector('#dateYear')
    langButton = document.querySelector('#langBut')
    console.log(clockContainer)
    console.log(language)

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
        let dateDay = date.getDate()
        let dateMonth = date.getMonth()
        let dateYear = date.getFullYear()

        dayName = dayText(day, language)
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
        dateDayContainer.innerHTML = dateDay
        dateMonthContainer.innerHTML = monthText(dateMonth, language)
        dateYearContainer.innerHTML = dateYear
    }, 1000)
}

function dayText(dayNumber, language){
    const daysEst = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
    const daysEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    if (language == "est"){
        return daysEst[dayNumber]
    } else if (language == "eng"){
        return daysEng[dayNumber]
    } 
}

function monthText(monthNumber, language){
    const monthsEst = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "november", "detsember"]
    const monthsEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    if (language == "est"){
        return monthsEst[monthNumber]
    } else if (language == "eng"){
        return monthsEng[monthNumber]
    } 
}

function changeLang(){
    if (language == "est"){
        language = "eng"
    } else if (language == "eng"){
        language = "est"
    }
}