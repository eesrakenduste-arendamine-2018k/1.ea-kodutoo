let changeColorButton;
let clockContainer;
let fontCounter;

window.onload = function() {
    init();
}

function init() {
    changeColorButton = document.getElementById('change-color');
    clockContainer = document.getElementById('clock');
    updateClock();
    fontCounter = 1;
    changeColorButton.addEventListener('click', changeBackgroundColor);
    document.getElementById("change-font").addEventListener('click', changeFont);
    document.getElementById("show_weekday").addEventListener("click", hideWeekdays);
    document.getElementById("show_date").addEventListener("click", hideDate);
}

function hideWeekdays() {
    var item = document.getElementById("weekday");
    if (document.getElementById("show_weekday").checked) {
        item.style.display = "none";
    } else {
        item.style.display = "inline-block";
    }
}

function hideDate() {
    var item = document.getElementById("date");
    if (document.getElementById("show_date").checked) {
        item.style.display = "none";
    } else {
        item.style.display = "inline-block";
    }
}

function changeBackgroundColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.getElementsByTagName("body")[0].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

function changeFont() {
    webSafeFonts = ['"Times New Roman", Times, serif', 'Georgia, serif', '"Palatino Linotype", "Book Antiqua", Palatino, serif',
		'Arial, Helvetica, sans-serif', '"Arial Black", Gadget, sans-serif', '"Comic Sans MS", cursive, sans-serif',
		'Impact, Charcoal, sans-serif', '"Lucida Sans Unicode", "Lucida Grande", sans-serif', 'Tahoma, Geneva, sans-serif',
		'"Trebuchet MS", Helvetica, sans-serif', 'Verdana, Geneva, sans-serif', '"Courier New", Courier, monospace',
		'"Lucida Console", Monaco, monospace'
	];

    if (fontCounter == webSafeFonts.length) {
        fontCounter = 0;
    }
    clockContainer.style.fontFamily = webSafeFonts[fontCounter];
    fontCounter++;
}

function updateClock() {
    var now = new Date();
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var digits = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
    var weekdays = ['Täna on pühapäev', 'Täna on esmaspäev', 'Täna on teisipäev', 'Täna on kolmapäev', 'Täna on neljapäev', 'Täna on reede', 'Täna on laupäev'];
    var time = (now.getHours() < 10 ? digits[now.getHours()] : now.getHours()) + ':' +
			   (now.getMinutes() < 10 ? digits[now.getMinutes()] : now.getMinutes()) + ':' +
		       (now.getSeconds() < 10 ? digits[now.getSeconds()] : now.getSeconds());
			   
    var date = [now.getDate(),
        months[now.getMonth()],
        now.getFullYear()
    ].join('.');
	
    var weekday = [weekdays[now.getDay()]];

    document.getElementById('time').innerHTML = [time];
    document.getElementById('date').innerHTML = [date];
    document.getElementById('weekday').innerHTML = [weekday];

    setTimeout(updateClock, 1000);
}