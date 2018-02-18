var dateDefaultSize = 3; //Global start variable for Date text size
var clockDefaultSize = 6; //Global start variable for Clock text size

// Clock size + function
$(document).ready(function() {
    $("#dateLarger").click(function(){
        dateDefaultSize++;
        $(".date1").css("font-size", dateDefaultSize+"vw" );
        $("#dateLarger").text(counter);
    });
});

// Date size -
$(document).ready(function() {
    $("#dateSmaller").click(function(){
        dateDefaultSize--;
        $(".date1").css("font-size", dateDefaultSize+"vw" );
        $("#dateSmaller").text(counter);
    });
});

// Clock size +
$(document).ready(function() {
    $("#clockLarger").click(function(){
        clockDefaultSize++;
        $(".clockClass").css("font-size", clockDefaultSize+"vw" );
        $("#clockLarger").text(counter);
    });
});

// Clock size -
$(document).ready(function() {
    $("#clockSmaller").click(function(){
        clockDefaultSize--;
        $(".clockClass").css("font-size", clockDefaultSize+"vw" );
        $("#clockSmaller").text(counter);
    });
});

// Global date position variables at startup
var dateDefaultPositionVertical = 50;
var dateDefaultPositionHorizontal = 50;

// Move date up
$(document).ready(function() {
    $("#dateUp").click(function(){
        dateDefaultPositionVertical--;
        $(".date1").css("top", dateDefaultPositionVertical+"%" );
        $("#dateUp").text(counter);
    });
});

// Move date down
$(document).ready(function() {
    $("#dateDown").click(function(){
        dateDefaultPositionVertical++;
        $(".date1").css("top", dateDefaultPositionVertical+"%" );
        $("#dateDown").text(counter);
    });
});

// Move date left
$(document).ready(function() {
    $("#dateLeft").click(function(){
        dateDefaultPositionHorizontal--;
        $(".date1").css("left", dateDefaultPositionHorizontal+"%" );
        $("#dateLeft").text(counter);
    });
});

// Move date right
$(document).ready(function() {
    $("#dateRight").click(function(){
        dateDefaultPositionHorizontal++;
        $(".date1").css("left", dateDefaultPositionHorizontal+"%" );
        $("#dateRight").text(counter);
    });
});

// Global clock position variables at startup
var clockDefaultPositionVertical = 65;
var clockDefaultPositionHorizontal = 50;

// Move clock up
$(document).ready(function() {
    $("#clockUp").click(function(){
        clockDefaultPositionVertical--;
        $(".clockClass").css("top", clockDefaultPositionVertical+"%" );
        $("#clockUp").text(counter);
    });
});

// Move clock down
$(document).ready(function() {
    $("#clockDown").click(function(){
        clockDefaultPositionVertical++;
        $(".clockClass").css("top", clockDefaultPositionVertical+"%" );
        $("#clockDown").text(counter);
    });
});

// Move clock left
$(document).ready(function() {
    $("#clockLeft").click(function(){
        clockDefaultPositionHorizontal--;
        $(".clockClass").css("left", clockDefaultPositionHorizontal+"%" );
        $("#clockLeft").text(counter);
    });
});

// Move clock right
$(document).ready(function() {
    $("#clockRight").click(function(){
        clockDefaultPositionHorizontal++;
        $(".clockClass").css("left", clockDefaultPositionHorizontal+"%" );
        $("#clockRight").text(counter);
    });
});

// Red Eyes/Date/Clock
function redEyes() {
    $("body").css("background-color", "rgb(255,0,0)");
}

function redDate() {
    $(".date1").css("text-shadow", "0px 0px 20px rgb(255, 0, 0)");
}
function pulsateRedClock() {
    $(".clockClass").css("animation", "pulsateRed 1s ease infinite");
}

// Green Eyes/Date/Clock
function greenEyes() {
    $("body").css("background-color", "rgb(0,255,0)");
}

function greenDate() {
    $(".date1").css("text-shadow", "0px 0px 20px rgb(0, 255, 0)");
}
function pulsateGreenClock() {
    $(".clockClass").css("animation", "pulsateGreen 1s ease infinite");
}

// Blue Eyes/Date/Clock
function blueEyes() {
    $("body").css("background-color", "rgb(0,0,255)");
}

function blueDate() {
    $(".date1").css("text-shadow", "0 0 20px rgb(0, 0, 255)");
}
function pulsateBlueClock() {
    $(".clockClass").css("animation", "pulsateBlue 1s ease infinite");
}

// White Eyes/Date/Clock
function whiteEyes() {
    $("body").css("background-color", "rgb(255,255,255)");
}

function whiteDate() {
    $(".date1").css("text-shadow", "0 0 20px rgb(255, 255, 255)");
}
function pulsateWhiteClock() {
    $(".clockClass").css("-animation", "pulsateWhite 1s ease infinite");
}


function menuHiding() {
    var x = document.getElementById("div2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}