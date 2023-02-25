var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickHandler() {
    outputDiv.innerText = "dhdhdhdh" + txtInput.value
};

btnTranslate.addEventListener("click",clickHandler)
