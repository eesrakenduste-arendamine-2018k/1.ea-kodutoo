let counter = 0

window.onload = function () {
  window.setInterval(function () { startTime() }, 500)
  // console.log(startTime)
  // startTime();
  document.getElementById('myButtonFont').addEventListener('click', changeFont)
  document.getElementById('myButtonColor').addEventListener('click', changeFontColor)
  document.getElementById('myButtonSize').addEventListener('click', changeLocation)
}

function startTime () {
  // console.log('siin');
  let d = new Date()
  let h = d.getHours()
  let m = d.getMinutes()
  let s = d.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  document.getElementById('time').innerHTML = h + ':' + m + ':' + s
  const days = ['P&uuml;hap&auml;ev', 'Esmasp&auml;ev', 'Teisip&auml;ev', 'Kolmap&auml;ev', 'Neljap&auml;ev', 'Reede', 'Laup&auml;ev']
  const months = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember']
  document.getElementById('date').innerHTML = d.getDate() + '. ' + months[d.getMonth()] + ' ' + d.getFullYear()
  document.getElementById('day').innerHTML = days[d.getDay()]
}
function checkTime (i) {
  if (i < 10) { i = '0' + i }; // null numbritele ette
  return i
}

function changeFont () {
  let main = document.getElementById('main')
  fontName = window.getComputedStyle(main).getPropertyValue('font-family')

  if (fontName === 'Ubuntu') {
    console.log('font change')
    main.style.fontFamily = 'Parisienne'
  } else if (fontName === 'Parisienne') {
    console.log('font change2')
    main.style.fontFamily = 'Abel'
  } else if (fontName === 'Abel') {
    console.log('font change3')
    main.style.fontFamily = 'Ubuntu'
  }
}

function changeFontColor () {
  if (counter === 0) {
    console.log('siin')
    document.getElementById('time').style.color = '#bca4ae'
    document.getElementById('date').style.color = '#bca4ae'
    document.getElementById('day').style.color = '#bca4ae'
  } else if (counter === 1) {
    console.log('siin2')
    document.getElementById('time').style.color = '#fc8c7e'
    document.getElementById('date').style.color = '#fc8c7e'
    document.getElementById('day').style.color = '#fc8c7e'
  } else if (counter === 2) {
    console.log('siin3')
    document.getElementById('time').style.color = '#a0d0d0'
    document.getElementById('date').style.color = '#a0d0d0'
    document.getElementById('day').style.color = '#a0d0d0'
  }
  counter++
  if (counter >= 3) {
    counter = 0
  }
}

function changeLocation () {
  /* let element = document.getElementById('time')
    style = window.getComputedStyle(element)
	alignment = style.getPropertyValue('text-align')
	console.log(alignment) */

  alignment = window.getComputedStyle(document.getElementById('time')).getPropertyValue('text-align')
  alignmentDate = window.getComputedStyle(document.getElementById('date')).getPropertyValue('text-align')
  alignmentDay = window.getComputedStyle(document.getElementById('day')).getPropertyValue('text-align')

  if (alignment === 'center' && alignmentDate === 'center' && alignmentDay === 'center') {
    console.log('is center')
    document.getElementById('time').style.textAlign = 'left'
    document.getElementById('date').style.textAlign = 'left'
    document.getElementById('day').style.textAlign = 'left'
  } else if (alignment === 'left' && alignmentDate === 'left' && alignmentDay === 'left') {
    console.log('is left')
    document.getElementById('time').style.textAlign = 'right'
    document.getElementById('date').style.textAlign = 'right'
    document.getElementById('day').style.textAlign = 'right'
  } else if (alignment === 'right' && alignmentDate === 'right' && alignmentDay === 'right') {
    console.log('is right')
    document.getElementById('time').style.textAlign = 'center'
    document.getElementById('date').style.textAlign = 'center'
    document.getElementById('day').style.textAlign = 'center'
  }
}
