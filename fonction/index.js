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