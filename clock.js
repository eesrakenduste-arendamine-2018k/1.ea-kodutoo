var intervall = setInterval(function() {
  minukell();
}, 1000);

function minukell() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var y = d.getFullYear();
  var day = d.getDate();
  
  var nadalapaev = new Array(7);
  nadalapaev[0] = "pühapäev";
  nadalapaev[1] = "esmaspäev";
  nadalapaev[2] = "teisipäev";
  nadalapaev[3] = "kolmapäev";
  nadalapaev[4] = "neljapäev";
  nadalapaev[5] = "reede";
  nadalapaev[6] = "laupäev";
  var n = nadalapaev[d.getDay()];
  
  var kuud = new Array(12);
  kuud[0] = "jaanuar";
  kuud[1] = "veebruar";
  kuud[2] = "märts";
  kuud[3] = "aprill";
  kuud[4] = "mai";
  kuud[5] = "juuni";
  kuud[6] = "juuli";
  kuud[7] = "august";
  kuud[8] = "september";
  kuud[9] = "oktoober";
  kuud[10] = "november";
  kuud[11] = "detsember";
  var k = kuud[d.getMonth()];
  
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s + "<br>" + n + "<br>" +  day + "." + k + "." + y;
  
  const inputs = [].slice.call(document.querySelectorAll('.controls input'));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  
  function handleUpdate(e) {    
	const suffix = (this.id === 'base' ? '' : 'px');
	document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
  }
} 
function peidaKell() {
	var x = document.getElementById("clock");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
function suuremaks() {
	var y = document.getElementById("clock");
    console.log('+')
    y.style.fontSize = '60px'
}

function vaiksemaks() {
	var y = document.getElementById("clock");
    console.log('-')
    y.style.fontSize = '25px'
}


