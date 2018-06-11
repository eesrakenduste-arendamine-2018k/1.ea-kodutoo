var clock = document.getElementById('clock');

function startTime() {

  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  
  var day = today.getDay();
  var month = today.getMonth();
  var year = today.getFullYear();

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  document.getElementById("clock").innerHTML =
  hours + ":" + minutes + ":" + seconds;
  var t = setTimeout(startTime, 500);

  document.getElementById("date").innerHTML =
  day + "/" + month + "/" + year;

}

function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

//Change Background
function changeBackground() {
  document.body.style.backgroundImage="url(images/image1.jpg)"
  var bgimages = ["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg"];
  var imag = bgimages[Math.floor(Math.random()*bgimages.length)];
  //var showimage = '<img src="' + imag + '"';
  document.getElementById("button-a").style.backgroundImage = showimage;
}

//Write some text on the page
function writeMessage() {
  var message = document.getElementById("Message").value;
    if (message == "Write a Message"){
      alert("You didn't write anything!")
    }
    else{
      document.getElementById("msg").innerHTML = message;
    }
}




function increaseClockSize() {
  clock = document.getElementById('clock');
  size = window.getComputedStyle(clock, null).getPropertyValue('font-size');
  currentSize = parseFloat(size);
  clock.style.fontSize = (currentSize + 50) + 'px';
}

function decreaseClockSize() {
  clock = document.getElementById('clock');
  size = window.getComputedStyle(clock, null).getPropertyValue('font-size');
  currentSize = parseFloat(size);
  clock.style.fontSize = (currentSize - 50) + 'px';
}

 /*change text color
  function changeTextColor(){

    document.getElementById('time').style.color = "white";
    var text = document.getElementById("clock").color;
    var textColor = text.fontcolor("white");
    document.getElementById("clock").innerHTML = textColor;
    if (textColor == black){
      document.getElementById("time").style.color = 'white';
    } else {
      document.getElementById("time").style.color = 'black';
    }  
}*/
