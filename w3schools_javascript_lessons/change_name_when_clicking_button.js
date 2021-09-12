var nameButton=document.getElementById('r');
var myHeading=document.getElementById('head');

function setUserName () {
    'use strict';
    var myName= window.prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent='Have a nice day, '+myName;
}

if(!localStorage.getItem('name')){
    setUserName()
}else{
    var storedName=localStorage.getItem('name');
    myHeading.textContent='Have a nice day, '+storedName;
}

nameButton.onclick=function(){
    'use strict';
    setUserName();
};