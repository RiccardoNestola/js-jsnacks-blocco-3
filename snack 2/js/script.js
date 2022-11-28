
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.



const numbersList = [];

sum = 0;

while (sum<50){
    let number = parseInt(prompt('inserisci dei numeri'));
    numbersList.push(number);
    sum += number;
}

console.log(sum);



















