window.onload = function() {
	function updateClock() {
		var now = new Date(), 
			months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']; 
			weekdays = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev']; 
			time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(), 

			date = [now.getDate(), 
					months[now.getMonth()],
					now.getFullYear()].join('.');
					
			weekday = [weekdays[now.getDay()]]

		document.getElementById('time').innerHTML = [date, time].join(' ');
		document.getElementById('week').innerHTML = [weekday];

		setTimeout(updateClock, 1000);		
	}
	updateClock(); 
}