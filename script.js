let changeColorButton;
let clockContainer;

window.onload = function() {
	init();
}

function init() {
	changeColorButton = document.getElementById('change-color');
	clockContainer = document.getElementById('clock');
	updateClock(); 
	changeColorButton.addEventListener('click', changeBackgroundColor);
}

function changeBackgroundColor() {
	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);
	clockContainer.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

function updateClock() {
	var now = new Date(), 
		months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']; 
		weekdays = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev']; 
		time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(), 
		date = [now.getDate(), 
				months[now.getMonth()],
				now.getFullYear()].join('.');	
		weekday = [weekdays[now.getDay()]];

	document.getElementById('time').innerHTML = [time];
	document.getElementById('date').innerHTML = [date];
	document.getElementById('week').innerHTML = [weekday];

	setTimeout(updateClock, 1000);		
}

