window.onload = function () {
	startTime()
	startDay()
}

function startTime(){
	let today = new Date()
	let h = today.getHours()
	let m = today.getMinutes()
	let s = today.getSeconds()
	let y = today.getFullYear()
	h=checkTime(h)
	m=checkTime(m)
	s=checkTime(s)
	
	document.getElementById('clock').innerHTML=h+":"+m+":"+s+" "+y;
	let t = setTimeout(startTime, 1000)
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i
}

function startDay(){
    
    let today = new Date()
    let dayofweek = getDayOfWeek(today.getDay())
    document.getElementById('date').innerHTML =dayofweek
}

function getDayOfWeek(number){
    let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", 
    "Neljapäev", "Reede", "Laupäev"]
    return days[number]
}

function clockSizeUp() {
	document.getElementById('clock').style.fontSize = 80 +"px"
	document.getElementById('clock').style.width = 550 +"px"
	document.getElementById('date').style.width = 550 +"px"
}

function clockSizeDown() {
	document.getElementById('clock').style.fontSize = 20 + "px"
	document.getElementById('clock').style.width = 350 +"px"
	document.getElementById('date').style.width = 350 +"px"
}

function clockSizeNormal() {
	document.getElementById('clock').style.fontSize = 50 + "px"
	document.getElementById('clock').style.width = 350 +"px"
	document.getElementById('date').style.width = 350 +"px"
}

function clockColor() {
	let color= getRandomColor();
	document.getElementById('clock').style.backgroundColor = color
	document.getElementById('date').style.backgroundColor = color
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function buttonsColor() {
	let color= getRandomColor()
	document.getElementById('bigger').style.backgroundColor = color
	document.getElementById('regular').style.backgroundColor = color
	document.getElementById('smaller').style.backgroundColor = color
	document.getElementById('clockColor').style.backgroundColor = color
	document.getElementById('buttonsColor').style.backgroundColor = color
	document.getElementById('changeDay').style.backgroundColor = color
	document.getElementById('github').style.backgroundColor = color
}

function hideFunction() {
    let hideShow = document.getElementById("date")
    if (hideShow.style.display === "none") {
        hideShow.style.display = "block"
    } else {
        hideShow.style.display = "none"
    }
}


