// Avalikud muutujad
let clockContainer // = null


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()
  document
  .querySelector("#change-position")
  .addEventListener("Click", change-location)
}

function changeLocation (event) {
	console.log(event)
}

function startClock () {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)
}

function updateClock () {
  const date = new Date()

  clockContainer.innerHTML = date
}