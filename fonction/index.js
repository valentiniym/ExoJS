"use strict"; 

// Exercice 1 

var myPutStr = function myPutStr(value){
  if (typeof value === "string") {
    return "its ok" ;
  }
  if (typeof value === "number") {
    return "et pourquoi pas 42";
  }
  }

// Exercice 1 correction 

/* myPutStr
 * @param {number || string} str
 * @return {String} toString
 */

function myPutStr(str) {
    if (typeof str !== "string") {
        return "Et pourquoi pas 42 ?";
    }
    return str;
}
console.log(myPutStr('15'));
console.log(myPutStr(15));


  myPutStr(15)
  
  // Exercice 2 

  var computeSurfaceM2 = function computeSurfaceM2 (largeur, hauteur) {
    return (largeur*hauteur + " m2 ")
  }
  
  computeSurfaceM2(2,2)

  // Exercice 3 

var detectMyAgeByNight = function detectMyAgeByNight ( age ) {
  if (age<=17) { 
      alert ("Vous ne pouvez pas entrer vous n’êtes pas majeur vous avez " + age + " ans"); 
    } else {
      alert ("Vous pouvez entrer vous êtes majeur vous avez " + age + " ans") ; 
  };
  detectMyAgeByNight = prompt 
}

detectMyAgeByNight(13)


// Exercice 3 correction 

'use strict';
/**
  * Create my button
  * @param {string} selector
  */
var createMyButton = function createMyButton(selector) {
    var targetEl = document.querySelector(selector);
    var el = document.createElement('button');
    el.textContent = 'My Button';
    targetEl.appendChild(el);
}
/**
  * Detect My Age By Night
  * @param {string} selectorButton
  */
var detectMyAgeByNight = function detectMyAgeByNight(selectorButton) {
  var btn = document.querySelector(selectorButton);
  btn.addEventListener('click', function() {
    var age = prompt('Entrez votre age :');
    if (typeof parseInt(age) !== 'number') {
      return new Error('Not is a number');
    }
    if (parseInt(age) <= 17) {
      alert('Vous n\'avez pas le droit de rentrer dans le club');
      return;
    }
    alert('Vous êtes majeur vous pouvez entrer dans le club');
    return;
  });
}
createMyButton('#app');
detectMyAgeByNight('button');

// Exercice 4 correction 

function matrixGenerator(Array){
  var matrix = document.createElement("table");
  for (var i=0;i<array.length;i++){
      var tr = document.createElement("tr");
      for(var j=0;j<array[i].length;j++){
        var td = document.createElement("td");
        td.insertAdjacentHTML("beforeend","<span>"+array[i][j]+"</span>");
        tr.appendChild(td);
      }
      matrix.appendChild(tr);
  }
  document.querySelector("body").appendChild(matrix);
}
matrixGenerator(
[[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]]
);

// Exercice 5 correction 
/**
 * Numerical Clock - Display a numerical clock
 */
var numericalClock = function numericalClock() {
    var clock = document.querySelector('.clock');
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (!clock) {
        clock = document.createElement('div');
        clock.classList.add('clock');
        document.body.appendChild(clock);
    }
    clock.textContent = hours + ':' + minutes + ':' + seconds;
};
setInterval(numericalClock, 1000);

// Exercice 6 correction 
var arrayFibonacci = [1];
var newArrayFibonacci = [];
var i = 0;
function computeFibonacci(arrayFibonacci) {
    i++;
    if (arrayFibonacci.length == 1) {
        arrayFibonacci[i] = 1;
        computeFibonacci(arrayFibonacci);
    }
    if (i < 10) {
       arrayFibonacci[i] = arrayFibonacci[i-1]+arrayFibonacci[i-2];
       computeFibonacci(arrayFibonacci);
    }
}
function saveFibonacci() {
    newArrayFibonacci = arrayFibonacci;
}
function sortFibonacci(newArrayFibonacci) {
    for (var i = 0; i < newArrayFibonacci.length; i++){
        for (var j = 0, stop = newArrayFibonacci.length-i; j < stop; j++){
            if (newArrayFibonacci[j] > newArrayFibonacci[j+1]){
                var temp = newArrayFibonacci[j];
                newArrayFibonacci[j] = items[j+1];
                newArrayFibonacci[j+1] = temp;
            }
        }
    }
    return newArrayFibonacci;
}
function totalFibonacci(arrayFibonacci) {
    var total = 0;
    for (i = 0; i < arrayFibonacci.length; i++) {
        total += arrayFibonacci[i];
    }
    return total;
}
computeFibonacci(arrayFibonacci);
console.log(arrayFibonacci);
saveFibonacci(arrayFibonacci,newArrayFibonacci);
sortFibonacci(newArrayFibonacci);
console.log(totalFibonacci(arrayFibonacci));