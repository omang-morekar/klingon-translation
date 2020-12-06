const buttonTranslate = document.querySelector("#btn-translate")
const inputText = document.querySelector("#ip")
const outputText = document.querySelector("#op")

const url = 'https://api.funtranslations.com/translate/klingon.json'

function errorHandler() {
  console.log('An error has occured.');

  alert('It seems an error has occured, please try again after sometime.')
}



function translate() {

  var ipTx = inputText.value

  function translateUrl(ipTx) {
    return url + "?" + "text=" + ipTx
  }

  fetch(translateUrl(ipTx))
  .then(serRepsonse => serRepsonse.json())
  .then(json => {
    outputText.innerText = json.contents.translated
  })

  .catch(errorHandler)
}

buttonTranslate.addEventListener('click', translate)