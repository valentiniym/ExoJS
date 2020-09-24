"use strict";

// Exercice 1 : 

var ageClient = prompt ("Le physio : Votre age ?")
if (ageClient<=17) { 
  alert ("Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez " + ageClient + " ans"); 
} else if (ageClient>=42) {
  alert ("Vous devenez le patron de la boite ");
} else {
  alert ("Vous pouvez entrer vous êtes majeur vous avez " + ageClient + " ans") ; 
};

// Excercice 2 : 

var nombreAleatoire = Math.floor((Math.random() * 30) + 0);
  if (nombreAleatoire <=10) {
    alert ("Cool");
  } else if (nombreAleatoire <=20) {
    alert ("Tepid");
  } else  {
    alert ("Warm");
  }
  console.log(nombreAleatoire);

// Excercice 3 : 

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Dimanche";
    break;
  case 1:
    day = "Lundi";
    break;
  case 2:
     day = "Mardi";
    break;
  case 3:
    day = "Mercredi";
    break;
  case 4:
    day = "Jeudi";
    break;
  case 5:
    day = "Vendredi";
    break;
  case 6:
    day = "Samedi";
}

  console.log(day);

// Excercice 4 :

var histoireFun = prompt ("Quelle fin souhaitez-vous ? 1: Fin heureuse, 2: Fin attroce, 3: Fin neutre ")
if (histoireFun==1) {
  window.alert("Ils vécurent heureux, riche et botoxé");
} else if (histoireFun==2) {
  window.alert("Ils vécurent malheureux et il oublia sa sacoche");
} else if (histoireFun==3) {
  window.alert("La grande réponse sur la vie, l’univers et le reste !");
} else {
  window.alert("mauvaise saisie");
};

// Exercice 6 :

var ternaire = ternaire != undefined ? "cette variable n'existe pas" : 42;

// Exercice 7 :

var family = Math.floor((Math.random() * 41));
var parent;
switch(family-family%10){
    case 10:
        var parent = 10;
        break;
    case 20:
        var parent = 20;
        break;
    case 30:
        var parent = 30;
        break;
    case 40:
        var parent = 40;
        break;
    default:
        var parent = "unités";
        break;
}
alert('Ce chiffre ('+family+') fait partie de la famille des '+parent);