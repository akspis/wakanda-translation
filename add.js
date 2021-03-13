
window.onload = function(){

const btnTrans = document.getElementById("btn-translate");
const txtInput = document.getElementById("input-translate");

const outputDiv = document.getElementById("output-txt");


serverUrl = "	https://api.funtranslations.com/translate/german-accent.json";

function geturl(input){
    return serverUrl + "?" + "text=" + input
}


function onClickListerner(){
     const inputTxt = txtInput.value;
  
    fetch(geturl(inputTxt))

    .then(response => response.json())
    .then(json => {
        const translatedURL = json.contents.translated;
        outputDiv.innerText = translatedURL;

    })
   
}

btnTrans.addEventListener("click" , onClickListerner)
}