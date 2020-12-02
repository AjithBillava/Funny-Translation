var btnTransaltor=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");

function clickEventHandler(){
    console.log("clicked");
    console.log(txtInput.value);

}


btnTransaltor.addEventListener("click",clickEventHandler)