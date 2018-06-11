
let clockContainer 


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()
  
  document
  .querySelector('#change-position')
  .addEventListener('click', changeLocation)
  
}


function startClock () {
	const date = new Date()

    clockContainer.innerHTML = date
  window.setInterval(function () {
    const date = new Date()

    clockContainer.innerHTML = date
  }, 1000)
}