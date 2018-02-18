let clockContainer 

window.onload = function () {
	init()
}

function init () {
	clockContainer = document.querySelector('#clock');
	fontCounter = 1;
	document.getElementById("change-font").addEventListener('click', changeFont);
	changeColorButton = document.getElementById('change-color');
	changeColorButton.addEventListener('click', changeBackgroundColor);
	changeColorButton1 = document.getElementById('change-color1');
	changeColorButton1.addEventListener('click', changeBackgroundColor1);
	changeColorButton2 = document.getElementById('change-color2');
	changeColorButton2.addEventListener('click', changeBackgroundColor2);
	console.log(clockContainer)

	startClock()
	window.addEventListener('keypress', hideClock)
}

function changeBackgroundColor() {
		document.getElementsByTagName("body")[0].style.backgroundColor = 'rgb(' + 101 + ',' + 78 + ',' + 163 + ')';
}
function changeBackgroundColor1() {
		document.getElementsByTagName("body")[0].style.backgroundColor = 'rgb(' + 136 + ',' + 176 + ',' + 75 + ')';
}
function changeBackgroundColor2() {
		document.getElementsByTagName("body")[0].style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
}

function startClock () {
	updateClock()

	window.setInterval(function () {
		updateClock()
	}, 1000)
}

function changeFont() {
    webSafeFonts = ['Georgia, serif','Arial, Helvetica, sans-serif', '"Arial Black", Gadget, sans-serif',
		'Impact, Charcoal, sans-serif', 'Tahoma, Geneva, sans-serif','Verdana, Geneva, sans-serif'];

    if (fontCounter == webSafeFonts.length) {
        fontCounter = 0;
    }
    clockContainer.style.fontFamily = webSafeFonts[fontCounter];
    fontCounter++;
}

function updateClock() {
    const now = new Date();
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const digits = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
    const weekdays = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
    const time = (now.getHours() < 10 ? digits[now.getHours()] : now.getHours()) + ':' +
			   (now.getMinutes() < 10 ? digits[now.getMinutes()] : now.getMinutes()) + ':' +
		       (now.getSeconds() < 10 ? digits[now.getSeconds()] : now.getSeconds());
    const date = [now.getDate(),
        months[now.getMonth()],
        now.getFullYear()
    ].join('.');
    const weekday = [weekdays[now.getDay()]];
    document.getElementById('time').innerHTML = [time];
    document.getElementById('date').innerHTML = [date];
    document.getElementById('weekday').innerHTML = [weekday];
    setTimeout(updateClock, 1000);
}
