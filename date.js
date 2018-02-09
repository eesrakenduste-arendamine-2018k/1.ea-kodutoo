//Date displayed seperately
let dateContainer

window.onload = function () {
  init()
}

function init() {
  dateContainer = document.querySelector('#date')
  console.log(dateContainer)

  currentDate()
}

function currentDate(){
  const date = new Date()

  var kuud = ['Jaanuar', 'veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'];
  var paevad = ['','Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev'];

  dateContainer.innerHTML = paevad[date.getDay()]+" "+date.getDate()+". "+kuud[date.getMonth()]+" "
  +date.getFullYear();
}