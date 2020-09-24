  'use strict';

/**
 * Exercice 1
 */

 // My digital School Forever

/**
 * Exercice 2
 */

/**
 * My Digital School forever every day
*/

/**
 * Exercice 3
 */

var string = '42';
var number = 42; 
var float = 42.0,
boolean = true;
var array = [42];
var date = new Date (20,9,23);
var objet = {'42' : 42,}
var und = undefined;
var und2;

var empty = null;

console.log(string, number, float, boolean, array, date, objet, undefined, toto)

/**
 * Exercice 4
 */

 var my42count = 'quarante-deux'.length;

 console.log(my42count)

/**
 * Exercice 5
 */

var value =0;
var check = value || 42;

console.log(check);

 /**
 * Exercice 6
 */

var myArray42 = ['Q', 'U', 'A', 'R', 'A', 'N', 'T', 'E', '-', 'D', 'E', 'U', 'X']

console.log (myArray42)

 /**
 * Exercice 7
 */

console.log (myArray42.length);

 /**
 * Exercice 8
 */

console.log(myArray42.join('')+'La grande réponse sur la vie, l\'univers et le reste !');

 /**
 * Exercice 9
 */

var rand = Math.floor ((Math.random() * (42)) + 1)=== 42;
console.log(rand);

 /**
 * Exercice 10
 */

var my42Type = typeof string;

console.log(my42Type);

 /**
 * Exercice 11
 */

var computer42 = 7 * 6;
// var computer43 = 7 - 6;
// var computer44 = 7 / 6;
// var computer45 = 7 + 6;
// var computer46 = 7 % 6;

console.log(typeof computer42.toString());

 /**
 * Exercice 12
 */

 var myVar = '42424242';
 myVar .replace (/42/gi, 'quarante-deux')

 /**
 * Exercice 13
 */

var a = 24; 
var b = 42;
var c = a;
a=b;
b=c;

console.log(a,b);