"use strict"; 

// Exercice 1 
var toMutiply = [1,2,3,5,8];
   for(var key in toMutiply){
       for(var i = 0; i<=10; i++){
           var result = toMutiply[key] * i;
            console.log(result);
       }

   }

// Exercice 1 correction 
var ar = [1, 2, 3, 5, 8];
for(var key in ar){
   for(var i = 0; i <= 10; i++) {
     var result = ar[key] * i
     console.log(i + " x " + ar[key] + " = " + result);
    }
}

}
// Exercice 2 
var toMutiply2 = [5];
   for(var key in toMutiply2){
       for(var i = 0; i<=10; i++){
           var result = toMutiply2[key] * i;
            console.log(i, "x", toMutiply2,"=", result);

  var body = document.querySelector(body);
  Element.querySelector(li)
  <ul> 
    <li>console.log(i, "x", toMutiply2,"=", result);</li>
  </ul>
       }

   }

// Exercice 2 correction
var multiplyList = document.createElement('ul');
for(var i = 1; i <= 10; i++){
    var listElement = document.createElement('li');
    listElement.textContent = 5 + " x " + i + " = " + 5 * i;
    multiplyList.appendChild(listElement);
    document.querySelector('body').appendChild(multiplyList);
}

// Exercice 3
// top -o -cup repérer le PPID et utiliser la commande kill suivie du numéro PPID pour arrêter le prosses

// Exercice 4 correction 
var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multi5 = table.map(function(x) {
    return x * 5;
});
console.log(multi5);

// Exercice 5 correction 
var obj = {
  'name': 42,
  'age': 42
}
var compute = 1;
for (var key in obj){
  compute *= obj[key];
}
console.log(compute)

// Exercice 6 correction 
var nbr = [45, 86, 1, 4, -9];
for (var i = 0; i < nbr.length; i++) {
    for (var j = 0; j < nbr.length; j++) {
        if (nbr[i] < nbr[j]) {
            var tmp = nbr[i];
            nbr[i] = nbr[j];
            nbr[j] = tmp;
            j = 0;
        }
    }
}
console.log(nbr);

// Exercice 7
