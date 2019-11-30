//LAB 10-DATA STORAGE: INDEX PAGE
//alert("home");//DELETE AFTER CONFIRMING CONNECTION
window.onload = function(){

var inputName = localStorage.getItem("name");
var welcomeMessage = document.getElementById("newMsgBox");
var inputColor = localStorage.getItem("color");

welcomeMessage.innerHTML += inputName;
document.body.style.background = inputColor;


var formHandle = document.forms[0];
formHandle.onsubmit = processForm;




function processForm(){
 var userName = document.getElementById("inName").value;


localStorage.setItem("name", userName);





console.log(inputName);

var userColor = document.getElementById("inColor").value;



localStorage.setItem("color", userColor);
//console.log(inputColor);

}

}
