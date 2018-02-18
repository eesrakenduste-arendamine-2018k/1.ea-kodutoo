let clockContainer
let language = 'est'
let bgColor
let clockFormat
let amPm
let settingsBarStatus
let hours
let minutes
let seconds
let hours12h
let selectedFormat

window.onload = function () {
    init()
}

function init () {
    timeContainer = document.querySelector('#time')
    dayContainer = document.querySelector('#day')
    dateContainer = document.querySelector('#dateText')
    langButton = document.querySelector('#langBut')
    colorText = document.querySelector('#colorText')
    colorBgText = document.querySelector('#colorBg')
    settingsSetButtonText = document.querySelector('#settingsSet')
    settingsButtonText = document.querySelector('#settingsButton')
    settingsBarArrow = document.querySelector('#settingsBarButton')
    timeFormatText = document.querySelector('#timeFormat')
    settingsBarArrow.innerHTML = '<i class="fas fa-angle-down"></i>'
    langButton.innerHTML = '<img src="images/estonian.png" alt="Eesti">'
    colorText.innerHTML = 'Taustavärv'
    colorBg.innerHTML = 'Taustavärv'
    document.getElementById('backgroundImgText').innerHTML = 
            'Link taustapildile'
    settingsSetButtonText.innerHTML = 'Säti'
    timeFormatText.innerHTML = 'Ajaformaat'
    bgColor = '#65b869'
    selectedFormat = '24'
    settingsBarStatus = 'closed'
    document.getElementById('bgSelector').value = '#65b869'
    document.getElementById('textSelector').value = '#FFFFFF'
    console.log(clockContainer)

    startClock()
}

function startClock () {
    window.setInterval(function () {
        const date = new Date()
        hours = date.getHours()
        minutes = date.getMinutes()
        seconds = date.getSeconds()
        hours12h
        const day = date.getDay()
        
        let dayName
        let dateDay = date.getDate()
        let dateMonth = date.getMonth()
        let dateYear = date.getFullYear()

        dayName = dayText(day, language)
        if(hours < 10){
            hours = '0' + hours
        }
        if(minutes < 10){
            minutes = '0' + minutes
        }
        if(seconds < 10){
            seconds = '0' + seconds
        }
        if(hours < 12){
            amPm = 'AM'
        } else {
            amPm = 'PM'
        }
        if(amPm == 'PM'){
            hours12h = hours - 12
        } else {
            hours12h = hours
        }
        if (selectedFormat == '24'){
            time = hours + ':' + minutes + ':' + seconds
        } else {
            time = hours12h + ':' + minutes + ':' + seconds + ' ' + 
                amPm
        }
        timeContainer.innerHTML = time
        dateText = dateDay + '. ' + monthText(dateMonth, language) + 
            ' ' + dateYear
        dateContainer.innerHTML = dateText
        dayContainer.innerHTML = dayName
    }, 1000)
}

function dayText(dayNumber, language){
    const daysEst = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 
        'Neljapäev', 'Reede', 'Laupäev'
    ]
    const daysEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday"
    ]
    
    if (language == "est"){
        return daysEst[dayNumber]
    } else if (language == "eng"){
        return daysEng[dayNumber]
    } 
}

function monthText(monthNumber, language){
    const monthsEst = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni',
        'juuli', 'august', 'september', 'november', 'detsember'
    ]
    const monthsEng = ['January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'November', 'December'
    ]
    if (language == 'est'){
        return monthsEst[monthNumber]
    } else if (language == 'eng'){
        return monthsEng[monthNumber]
    } 
}

function changeLang(){
    if (language == 'est'){
        language = 'eng'
        colorBg.innerHTML = 'Colour'
        colorText.innerHTML = 'Text colour'
        document.getElementById('backgroundImgText').innerHTML = 
            'Link to background'
        settingsSetButtonText.innerHTML = 'Set'
        langButton.innerHTML = '<img src="images/english.png" alt="Inglise">'
    } else if (language == 'eng'){
        language = 'est'
        colorBg.innerHTML = 'Taustavärv'
        colorText.innerHTML = 'Tekstivärv'
        document.getElementById('backgroundImgText').innerHTML = 
            'Link taustapildile'
        settingsSetButtonText.innerHTML = 'Säti'
        langButton.innerHTML = '<img src="images/estonian.png" alt="Eesti">'
    }
}

function dropdown(){
    document.getElementById('dropdown').classList.toggle('show')
}

function settingsSet(){
    bgColor = document.getElementById('bgSelector').value
    textColor = document.getElementById('textSelector').value
    document.body.style.color = textColor
    document.body.style.backgroundColor = bgColor
    document.body.style.backgroundImage = "url(" + 
        document.getElementById("backgroundImgInput").value + ")" 
    document.getElementById('settingsBarButton').style.color = textColor
    if (document.getElementById('formatText24h').checked){
        selectedFormat = '24'
    } else if (document.getElementById('formatText12h').checked){
        selectedFormat = '12'
    }
}

function goToUrl(url){
    let win = window.open(url, '_blank')
    win.focus()
}

function displaySettings(){
    if (settingsBarStatus == 'open'){
        settingsBarStatus = 'closed'
        settingsBarArrow.innerHTML = '<i class="fas fa-angle-down"></i>'
        document.getElementById("header").classList.add("noshow")
    } else {
        settingsBarStatus = 'open'        
        settingsBarArrow.innerHTML = '<i class="fas fa-angle-up"></i>'
        document.getElementById('header').classList.remove('noshow') 
    }
}