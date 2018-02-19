// kuulame lehe valmis laadimist
	window.onload = function () {
	
//alert('Leht on laetud.');
	console.log('Leht on laetud.')
		
	trukiKell();
		
	setInterval(function () {
			
		trukiKell();
			
	}, 5);
	var algSuurus = 16;
	var Suurus = algSuurus;
	
	document.getElementById('suurus').addEventListener('click', function (event) {
				
	Suurus = Suurus * 1.2;
	//console.log(event);
	document.getElementById('asukoht').style.fontSize = Suurus + "px";
	});
	document.getElementById('algneSuurus').addEventListener('click', function (event) {
				
	Suurus = algSuurus;
	//console.log(event);
	document.getElementById('asukoht').style.fontSize = Suurus + "px";
	
	});
}		

		var juhu_varv = function () {
		
		var r = Math.round(Math.random()*255); //1-255
		var g = Math.round(Math.random()*255); //1-255
		var b = Math.round(Math.random()*255); //1-255

		var juhuslik_varv = "rgb("+r+","+g+","+b+")";
		document.body.style.color = juhuslik_varv
		
		
		}
		// kella tr�kkimis funktsioon p#asukoht
		
		
		var trukiKell = function () {
		
		var kell = new Date();
			
		var kuud = kell.getMonth();
		var kuupaevad = kell.getDate();
		var tunnid = kell.getHours();
		var minutid = kell.getMinutes();
		var sekundid = kell.getSeconds();
		var millisekundid = kell.getMilliseconds();
		var kuunimetused =  ["jaanuar", 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
			
		var np = kell.getDay()
	 
		var ilusKell = nullEtte(kuupaevad) + '. ' + kuunimetused[kuud] + ', ' + nullEtte(tunnid) + ':' + nullEtte(minutid) + ':' + nullEtte(sekundid) 
	
		document.getElementById('asukoht').innerHTML = ilusKell;
			
		}
		
		var nullEtte = function (number) {
		
			if (number < 10) {
			
					number = "0" + number;
			
			}
		
			return number;
		
		}
		
		document.getElementById('suurus');