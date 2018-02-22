const picture = 0;
var pictureCode = new Array("picture1.jpg", "picture2.jpg", "picture3.jpg", "picture4.jpg", "picture5.jpg");
var condition = false;
var esimene;
var teine;

function starting(){						 
//document.getElementById("backPicture").style.backgroundColor = pictureCode[picture]; 
document.getElementById("backPicture").style.backgroundImage = "url(" + picturecode[picture] + ")";

/* esimene = document.getElementById("big");
 teine = document.getElementById("small");*/
	/*function remove() {
		esimene.removeChild(teine);
		}
	function bringBack() {
		esimene.appendChild(teine);
	}
	*/

}

function display() {
		if (condition == false) {
			esimene.removeChild(teine);
			document.getElementById("clockDisplay").style.fontSize = "129px";
			condition = true;
			
		}
		else if (condition == true) {
			esimene.appendChild(teine);
			document.getElementById("clockDisplay").style.fontSize = "80px";
			condition = false;
		}
	}
	

function renderTime() {
	
	//kuupäev
	var mydate = new Date();
	var year = mydate.getFullYear();
	var day = mydate.getDay();
	var month = mydate.getMonth();
	var daym = mydate.getDate();
	var dayarray = new Array("Pühapäev,", "Esmaspäev,", "Teisipäev,", "Kolmapäev,", "Neljapäev,", "Reede,", "Laupäev,");
	var montharray = new Array("jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember");
	
	
	//aeg
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	
		if(h==24) {
			h=0;
		} 
		else if(h > 12){
			h = h - 0;
		}
		
		if(h < 10) {
			h = "0" + h;
		}
		
		if(m < 10) {
			m = "0" + m;
		}
		
		if(s < 10) {
			s = "0" + s;
		}
		
		
		var myClock = document.getElementById("clockDisplay");
		
		myClock.textContent = "" + dayarray[day] + "\n " + daym + ". " + montharray[month] + " " + year + "\n  " + h + ":" + m + ":" + s;
		myClock.innerText = "" + dayarray[day] + "\n " + daym + ". " + montharray[month] + " " + year + "\n  " + h + ":" + m + ":" + s;
		
		setTimeout("renderTime()", 1000);
}


  
  
  
// change to arial
function changeFont() {
	document.getElementById("backPicture").style.fontFamily = "arial";
}





	
