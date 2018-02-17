window.onload = function (){
    startTime();
}
// Create time
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
// Check if time needs 0 in front
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // function for adding zero in front of numbers < 10
    return i;
}
// Add names for months and days
$(document).ready(function() {
    var monthNames = [ "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember" ]; 
    var dayNames= ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"]

    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    // Output of the day, date, month and year  
    $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
    
}); 