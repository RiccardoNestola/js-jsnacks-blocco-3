
// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto




let number = 0;

while((number < 1) || (number > 10)){
    number =  parseInt(prompt('Inserisci un numero da 1 a 10'));
}
console.log(number)