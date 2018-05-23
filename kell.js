//kella script
// Avalikud muutujad
let clockContainer // = null


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  changeFontBoldButton = document.querySelector('#change-bold') 
  changeFontItalicsButton = document.querySelector('#change-italics')
  changeFontNormalButton = document.querySelector('#change-normal')

  startClock()

  window.addEventListener('wheel', changeFontSize)

  changeFontBoldButton.addEventListener('click', changeFontStyleBold)
  changeFontItalicsButton.addEventListener('click', changeFontStyleItalics)
  changeFontNormalButton.addEventListener('click', changeFontStyleNormal)
  // window.addEventListener('mousemove', changeBackgroundColor)
  
}

// function changeBackgroundColor () {
//   console.log('värvi muutmine')

//   const r = Math.round(Math.random() * 255)
//   const g = Math.round(Math.random() * 255)
//   const b = Math.round(Math.random() * 255)

//   clockContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'

// }

// fontide muutmine

//font size muutmine
function changeFontSize () {
  console.log('scrollitud')
  clockContainer.style.fontSize = "30px";
}
//font stiilide muutmine
function changeFontStyleItalics (){
  console.log('italic');
  clockContainer.style.fontStyle = "italic";
}
function changeFontStyleBold (){
  console.log('bold');
  clockContainer.style.fontWeight = "bold";
}
function changeFontStyleNormal (){
  console.log('normal');
  clockContainer.style.fontStyle = "normal";
  clockContainer.style.fontWeight = "normal";
}

// kella lohistamine
function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}
}
function allowDrop(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data)); 
}

function startClock () {
  window.setInterval(function () {
    const date = new Date()

    clockContainer.innerHTML = date
  }, 1000)
}

// function change() { 
//   document.getElementById("button").style.backgroundImage = "url(img/anotherImage.png)"
// }