const intervall = setInterval(function() {
  myClock();
}, 1000);

function myClock() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var y = d.getFullYear();
  var day = d.getDate();
  
  var days = new Array(7);
  days[0] = "pühapäev";
  days[1] = "esmaspäev";
  days[2] = "teisipäev";
  days[3] = "kolmapäev";
  days[4] = "neljapäev";
  days[5] = "reede";
  days[6] = "laupäev";
  var n = days[d.getDay()];
  
  var months = new Array(12);
  months[0] = "jaanuar";
  months[1] = "veebruar";
  months[2] = "märts";
  months[3] = "aprill";
  months[4] = "mai";
  months[5] = "juuni";
  months[6] = "juuli";
  months[7] = "august";
  months[8] = "september";
  months[9] = "oktoober";
  months[10] = "november";
  months[11] = "detsember";
  var k = months[d.getMonth()];
  
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s + "<br>" + n + "<br>" +  day + "." + k + "." + y;
  
  const inputs = [].slice.call(document.querySelectorAll('.controls input'));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  
  function handleUpdate(e) {    
	const suffix = (this.id === 'base' ? '' : 'px');
	document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
  }
} 
function hideClock() {
	var x = document.getElementById("clock");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
function bigger() {
	var y = document.getElementById("clock");
    console.log('+')
    y.style.fontSize = '60px'
}

function smaller() {
	var y = document.getElementById("clock");
    console.log('-')
    y.style.fontSize = '25px'
}


