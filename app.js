var btnTransaltor=document.querySelector("#btn-translate");
var btnTag=document.querySelector("h1");
var txtInput=document.querySelector("#txt-input");

var outputDiv=document.querySelector("#output");


// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" //tanay sir's server

//var serverUrl="https://api.funtranslations.com/translate/yoda.json"  //yodish language

var serverUrl="https://api.funtranslations.com/translate/minion.json"

// outputDiv.innerText="Ajith Billava"

function getTranslationUrl( txt ){
    return serverUrl + "?"+"text="+ txt
}

function getError(error){
    console.log("Error occured ",error)
    alert("Something wrong with server, try again after sometime")
}

function clickEventHandler(){

    var inputText=txtInput.value;
    

   fetch(getTranslationUrl(inputText))
   .then(response => response.json())
   .then(json => {
       var translatedText=json.contents.translated;
       outputDiv.innerText=translatedText;
   })
   .catch(getError)


};


btnTransaltor.addEventListener("click",clickEventHandler)