
var isclicked = true;

window.onload = function load (){
    startTime();
    startDate();
    document.getElementById('clock').onmouseover = function()
    {
        changeTimeColor();
                
    };

   
    document.getElementById('date').onclick = function()
    {
        if(isclicked)
        {
            $("#date").animate({               
                fontSize: "+=20px"              
            });
            isclicked = false;
        }
        else
        {
            $("#date").animate({                
                fontSize: '-=20px'               
            });
            isclicked = true;
        }     
    };    
}



function startDate(){
    
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var dayofweek = getDayOfWeek(today.getDay());
    document.getElementById('date').innerHTML =
    dayofweek+" " +date + "/" + month + "/" + year;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}

function getDayOfWeek(number){
    var days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", 
    "Neljapäev", "Reede", "Laupäev"];
    return days[number];
}

function changeTimeColor(){
    document.getElementById('clock').style.color = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 


  function hideShowText() {
    var hideShow = document.getElementById("hide");
    if (hideShow.style.display === "none") {
        hideShow.style.display = "block";
    } else {
        hideShow.style.display = "none";
    }
}
  

