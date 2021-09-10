/* global document,window,localStorage*/
/*photo changing function*/
var billgates = document.querySelector('img');
billgates.onclick = function () {
    'use strict';
    var myImages = billgates.getAttribute('src');
    if (myImages === 'bill gates.jfif') {
        billgates.setAttribute('src', 'steve jobs.jfif');
    } else {
        billgates.setAttribute('src', 'bill gates.jfif');
    }
};

// personalized welcome message code

var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = window.prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Have a nice day,' + myName;
}

nameButton.onclick = function () {
    'use strict';
    setUserName();
};