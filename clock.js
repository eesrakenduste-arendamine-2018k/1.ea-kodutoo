// Avalikud muutujad 

let changeBackgroundContainer = document.querySelector('.changeColor');
let changeFontContainer = document.querySelector('.changeFont');

let dayOfWeekContainer = document.querySelector('.dayOfWeek');
let dateContainer = document.querySelector('.date');

changeBackgroundContainer.addEventListener('click', changeBackgroundColor);
changeFontContainer.addEventListener('click', changeFont);

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}
  return i
}

function date () {
  const date = new Date()

  const dayOfWeek = new Array('Pühapäev','Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede', 'Laupäev')
  const getDayOfWeek = dayOfWeek[date.getDay()]
  dayOfWeekContainer.innerHTML = getDayOfWeek

  const month = new Array('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12')
  let getMonth = month[date.getMonth()]
  let getDay = date.getDate()

  let getDate = getDay+'/'+getMonth
  dateContainer.innerHTML = getDate

}

function startClock () {
  startTime();
  date();

  window.setInterval(function () {
    startTime();
    date();
  }, 1000)
}

startClock();

function changeBackgroundColor () {
  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)

  document.querySelector('body').style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
}

function changeFont () {
  document.querySelector('body').style.fontFamily = 'Comic-sans, sans-serif';
  document.querySelector('.changeColor').style.fontFamily = 'Comic-sans, sans-serif';
  document.querySelector('.changeFont').style.fontFamily = 'Comic-sans, sans-serif';
}

//

var MouseEffects = (function(){
	var popCount = 4;
	var dotCount = 7;
	var dotFill = 'rgba(255, 0, 0, 0.8)';
	var dotStroke = 'rgba(0, 0, 0, 0.8)';
	var dotRadius = 4;
	var dotRadiusJitter = 0.75;
	var dotThetaJitter = 0.1;
	var popSize = 100;
	var popCenter = popSize * 0.5;
	var popRadius = popSize * 0.4;
	var popRadiusJitter = 0.25;
	var popDuration = 0.25; //seconds
	var popEasingFunction = 'ease';
	var svgNamespace = 'http://www.w3.org/2000/svg';
	var tau = Math.PI * 2;

	function applyJitter(n, jitter){
	  var j = (Math.random() * jitter) - (jitter * 0.5);
	  return n + n*j;
	}

	function generatePopAtCoordinates(x, y){
		for(var i=0; i<popCount; i++){
			popFactory(x, y);
		}
	}

	function popFactory(x, y){
	  var i, dot, theta;
	  var container = popContainerFactory(popSize, x, y);

	  for(i=0; i<dotCount; i++){
	    dot = popDotFactory(dotFill);
	    dot.setAttribute('cx', popCenter);
	    dot.setAttribute('cy', popCenter);
	    var dotRadius = applyJitter(popRadius, popRadiusJitter);

	    container.appendChild(dot);

	    theta = applyJitter(tau * (i / dotCount), dotThetaJitter);
	    var dx = Math.cos(theta) * dotRadius;
	    var dy = Math.sin(theta) * dotRadius;
	    movePopDot(dot, dx, dy);
	  }

	  document.body.appendChild(container);
	  setTimeout(function(){
	    document.body.removeChild(container);
	  }, popDuration * 1000);
	}

	function movePopDot(dot, dx, dy){
	  var style = 'transition: all '+popDuration+'s '+popEasingFunction+'; transform: translate('+dx+'px, '+dy+'px); opacity: 0;';

	  setTimeout(function(){
	    dot.setAttribute('style', style);
	  }, 0)
	}

	function popContainerFactory(size, x, y, border){
	  var container = document.createElementNS(svgNamespace, 'svg');
	  var style = '';
	  var containerStyle = {
	    position: 'fixed',
	    width: size + 'px',
	    height: size + 'px',
	    left: (x - (size / 2)) + 'px',
	    top: (y - (size / 2)) + 'px',
	    transform: 'rotate('+(Math.random() * 360)+'deg)',
	    'pointer-events': 'none',
	    'mix-blend-mode': 'overlay'
	  };

	  if(border){
	    containerStyle.border = '1px solid red';
	  }

	  for(var key in containerStyle){
	    style += (key + ': ' + containerStyle[key] + '; ');
	  }

	  container.setAttribute('viewBox', '0 0 100 100');
	  container.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	  container.setAttribute('style', style);

	  return container;
	}

	function popDotFactory(color){
	  var dot = document.createElementNS(svgNamespace, 'circle');
	  var r = applyJitter(dotRadius, dotRadiusJitter);

	  dot.setAttribute('fill', color);
	  dot.setAttribute('r', r);
	  dot.setAttribute('stroke', dotStroke);
	  dot.setAttribute('style', 'transition: all '+popDuration+'s '+popEasingFunction+'; transform: translate(0, 0); opacity: 1;');

	  return dot;
	}

	return {
		generatePopAtCoordinates: generatePopAtCoordinates
	};
})()

document.getElementById('btnEffectColor').addEventListener('click', function(e){
  MouseEffects.generatePopAtCoordinates(e.clientX, e.clientY);
})

document.getElementById('btnEffectFont').addEventListener('click', function(e){
  MouseEffects.generatePopAtCoordinates(e.clientX, e.clientY);
})