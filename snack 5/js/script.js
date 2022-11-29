
/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */
 

 const myArray = [2,4,7,9,6,4,"casa", 57, "computer"];





 function myFunction(num1) {
  let sum = 0;
  for (let i = 0; i < num1.length; i++) {
      if(!Number.isNaN(parseInt(num1[i],10))){
          sum += num1[i];
      }
  }
  return sum;
  }

  let myNumber = myFunction(19,8);


  console.log(myFunction(myArray));


















