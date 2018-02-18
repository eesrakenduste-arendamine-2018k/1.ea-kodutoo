// Avalikud muutujad
let clockContainer // = null


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('.clock')
  console.log(clockContainer)
}

function changeClockColorRandom(){
	var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    clockContainer.style.color="#"+color;
	
}

function changeFontItalic() {
	clockContainer.style.fontStyle= 'italic';
}

	function showPicture() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('http://greeny.cs.tlu.ee/~piibraun/1.ea-kodutoo/1_kodutoo_test/pics/wallpaper.jpg')";
}
	function goNightmode() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('http://greeny.cs.tlu.ee/~piibraun/1.ea-kodutoo/1_kodutoo_test/pics/nightmode.jpg')";
}


function clock() {
var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),  
    seconds = time.getSeconds(),
	day = time.getDate(),
	month = time.getMonth(),
	year = time.getFullYear();

document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds) + "   "+harold(day)+ "/" + harold(month)+"/" + harold(year);
  
  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);

/*Rauno Piibor 
if17
*/

