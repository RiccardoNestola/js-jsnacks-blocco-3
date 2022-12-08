
/**
 * Crea due tag div con due id diversi.
 * 
 * Un div avrà il testo colorato di rosso mentre l'altro di verde.
 * 
 * Partendo da un array di numeri,
 * 
 * creiamo un nuovo elemento p e lo stampiamo nell'div rosso  se è un numero dispari
 * e nel div verde se è un numero pari.
 *
 *
 */
    const array = [1,32,55,64,23,1,33,55,64,33,22,10,44,78,23,45,98,127];
    
    const box = document.querySelector('div.box');
    const green = document.createElement('div');
    const listGreen = document.createElement('ul');
    
    
    green.append(listGreen);
    green.classList.add('green');
    box.append(green);

    const red = document.createElement('div');
    const listRed = document.createElement('ul');

    red.append(listRed);
    red.classList.add('red');
    box.append(red);




        for(let i = 0 ; i < array.length; i++){

            if(array[i] % 2 == 0 ){
                const elementEven = document.createElement('li');
                elementEven.innerHTML = array[i]
                listGreen.append(elementEven);
            }
            else if(array[i] % 2 == 1) {
                const elementOdd = document.createElement('li');
                elementOdd.innerHTML = array[i]
                listRed.append(elementOdd)
            }
        };










































