Number.prototype.pad = function(n) {
	for (var r = this.toString(); r.length < n; r = 0 + r);
	return r;
};

function updateClock() {
	var now = new Date();
	sec = now.getSeconds(),
	min = now.getMinutes(),
	hou = now.getHours(),
	mo = now.getMonth(),
	dy = now.getDate(),
	yr = now.getFullYear(),
	day = now.getDay();
	var months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
	var days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
	var tags = ["mon", "d", "y", "h", "m", "s", "dayy"],
	corr = [dy, months[mo], yr, hou.pad(2), min.pad(2), sec.pad(2), days[day]];
	for (var i = 0; i < tags.length; i++)
	document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
	updateClock();
	window.setInterval("updateClock()", 1);
}

function SunFlower() {
    document.getElementById("timedate").style.fontFamily = "Sunflower,sans-serif"; 
}

function Lato() {
    document.getElementById("timedate").style.fontFamily = "Lato,sans-serif";
}

function Bowlby() {
    document.getElementById("timedate").style.fontFamily = "Bowlby One SC,cursive";
}

function fontSize50() {
    document.getElementById("timedate").style.fontSize = "50px";
}

function fontSize75() {
    document.getElementById("timedate").style.fontSize = "75px";
}

function fontSize100() {
    document.getElementById("timedate").style.fontSize = "100px";
}

function black() {
    document.getElementById("timedate").style.color = "#000000";
}

function white() {
    document.getElementById("timedate").style.color = "#ffffff";
}

function green() {
    document.getElementById("timedate").style.color = "#9ACD32";
}

var audio = document.getElementById('music');

document.getElementById('mute').addEventListener('click', function (e) {
	e = e || window.event;
	audio.muted = !audio.muted;
	e.preventDefault();
}, false);