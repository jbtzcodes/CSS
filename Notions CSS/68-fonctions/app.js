//  FUNCTION CLASSIQUE

function presentation(){
  console.log('hello');
}

presentation();


// RETURN

let prenom = "Jonathan"

function pren(){
  return prenom
}

console.log(pren());


// PARAMETRES

function calcul(nb1, nb2){
  return nb1 + nb2;
}

console.log(calcul(2,4));


//  FUNCTION FLECHE

const funcFlech = () => prenom;

const op = (nb1, nb2) => nb1 + nb2;

console.log(funcFlech());
console.log(op(4,6));