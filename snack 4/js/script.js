
/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */


 function myFunction(num1, num2) {
    const randomNumber = Math.random() * ((num1 - num2) + num2);

    return  randomNumber;
  }

  let myNumber = myFunction(4,8);


  console.log(myNumber);





























