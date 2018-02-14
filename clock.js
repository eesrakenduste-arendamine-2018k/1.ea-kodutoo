// aken laetud
window.addEventListener('load', function(){

    var clockContainer = document.getElementById('clock');
    var dateContainer = document.getElementById('date');  

//kohe kirjutab aja
    clockContainer.innerHTML = getCurrentDateTime();
    dateContainer.innerHTML = getCurrentDate();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
        dateContainer.innerHTML = getCurrentDate();
    }, 1000);
});

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var timeString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return timeString;
};

function addZeroBefore(dateNumber){
    if(dateNumber < 10){
        dateNumber = '0' + dateNumber;
    }
    return dateNumber;
}

var getCurrentDate = function(){
    var currentDate = new Date();

    var date = currentDate.getDate();
    var day = currentDate.getDay();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var days = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];
    var months = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];

    var dateString = days[day] + ' ' + date + '. ' + months[month] + ' ' + year;

    return dateString;
};

var textSize = '60px';
function changeClockSize(){
 	if(textSize == '60px'){
 		document.getElementById('clock').style['font-size'] = '30px';
 		document.getElementById('date').style['font-size'] = '30px';
 		textSize = '30px';
 	}else if(textSize == '30px'){
 		document.getElementById('clock').style['font-size'] = '60px';
 		document.getElementById('date').style['font-size'] = '30px';
 		textSize = '60px';
 	}
 	return 0;
 }

 var textPos = 'down/left';
 function changeClockPos(){
     if(textPos == 'down/left'){
        document.getElementById('sun').style.right = '15px';
        document.getElementById('sun').style.left = 'auto';
        document.getElementById('text').style.top = '20px';
        document.getElementById('text').style.bottom = 'auto';
        textPos = 'up/right';
     }else if(textPos == 'up/right'){
        document.getElementById('sun').style.right = 'auto';
        document.getElementById('sun').style.left = '15px';
        document.getElementById('text').style.top = 'auto';
        document.getElementById('text').style.bottom = '150px';
        textPos = 'down/left';
     }
     return 0;
 }
