let clockContainer
let dateContainer


window.onload = function () {
  init()
}

function init () {
    clockContainer = document.querySelector('#clock')
    dateContainer = document.querySelector('#time')
    console.log(clockContainer)
    document.getElementById('changeBG').addEventListener('click', displayBG)
    document.getElementById('changeAudio').addEventListener('click', changeAudio)
    startClock()
    window.setInterval(function () {
        startClock()
    }, 1000)
}

function startClock () {
    const date = new Date()
    const d = new Array('Pühapäev','Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede', 'Laupäev')
    
    

    day = d[date.getDay()]
    clockContainer.innerHTML = date.toLocaleTimeString('it-IT')
    dateContainer.innerHTML = day + ", " + date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear()
}

var textSize = '625%';
function changeSize(){
 	if(textSize == '625%'){
 		document.getElementById('clock').style['font-size'] = '313%';
 		document.getElementById('time').style['font-size'] = '156%';
 		textSize = '313%';
 	}else if(textSize == '313%'){
 		document.getElementById('clock').style['font-size'] = '625%';
 		document.getElementById('time').style['font-size'] = '313%';
 		textSize = '625%';
 	}
 	return 0;
 }

const BGArray = [
"url('BG/desk.jpg')", "url('BG/bonfire.jpg')", "url('BG/coffee.jpg')", 
"url('BG/fire.jpg')", "url('BG/fishy.jpg')", "url('BG/forest.jpg')", 
"url('BG/kitty.jpg')", "url('BG/mountains.jpg')", "url('BG/rain.jpg')", 
"url('BG/stream.jpg')", "url('BG/waves.jpg')"]
function displayBG(path) {
		var num = Math.floor(Math.random() * 11) + 0;
    	document.getElementById(BGArray[num]);
    	document.body.style.backgroundImage = BGArray[num];
    	document.body.style.backgroundSize = "cover";
}

var audioArray = [
"sound/desk.mp3", "sound/bonfire.mp3", "sound/coffee.mp3", 
"sound/fire.mp3", "sound/fishy.mp3", "sound/forest.mp3", 
"sound/kitty.mp3", "sound/mountains.mp3", "sound/rain.mp3", 
"sound/stream.mp3", "sound/waves.mp3"]
function changeAudio() {
    console.log('change audio')
    var newAudio = Math.floor(Math.random() * (audioArray.length))
    document.getElementById('audio').src = audioArray[newAudio]
}

