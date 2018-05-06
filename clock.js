// kuulame lehe valmis laadimist
	window.onload = function () {
	
//alert('Leht on laetud.');
	console.log('Leht on laetud.')
		
	printWatch();
		
	setInterval(function () {
			
		printWatch();
			
	}, 5);
	var beginSize = 16;
	var size = beginSize;
	
	document.getElementById('size').addEventListener('click', function (event) {
				
		size = size * 1.2;
	//console.log(event);
	document.getElementById('location').style.fontSize = size + "px";
	});
	document.getElementById('BeginningSize').addEventListener('click', function (event) {
				
		size = beginSize;
	//console.log(event);
	document.getElementById('location').style.fontSize = size + "px";
	
	});
}		

		var randcolor = function () {
		
		var r = Math.round(Math.random()*255); //1-255
		var g = Math.round(Math.random()*255); //1-255
		var b = Math.round(Math.random()*255); //1-255

		var randomcolor = "rgb("+r+","+g+","+b+")";
		document.body.style.color = randomcolor
		
		
		}
		// kella tr�kkimis funktsioon p#asukoht
		
		
		var printWatch = function () {
		
		var clock = new Date();
			
		var months = clock.getMonth();
		var dates = clock.getDate();
		var hours = clock.getHours();
		var minutes = clock.getMinutes();
		var seconds = clock.getSeconds();
		var milliseconds = clock.getMilliseconds();
		var monthnames =  ["jaanuar", 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
			
		var np = clock.getDay()
	 
		var niceWatch = zerotofront(dates) + '. ' + monthnames[months] + ', ' + zerotofront(hours) + ':' + zerotofront(minutes) + ':' + zerotofront(seconds) 
	
		document.getElementById('location').innerHTML = niceWatch;
			
		}
		
		var zerotofront = function (number) {
		
			if (number < 10) {
			
					number = "0" + number;
			
			}
		
			return number;
		
		}
		
		document.getElementById('size');