
// Crea due array che hanno un numero di elementi diversi. 
//Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.



const shoppingCart = [
    "pane",
    "pasta",
    "latte",
    "uova",
    
];

const shoppingList = [
    "caffe",
    "zucchero",
];

let products = 0;

while ((shoppingList.length != shoppingCart.length)){
    let product = prompt('inserisci dei prodotti');

    if(shoppingList.length < shoppingCart.length){
        shoppingList.push(product);
    } else if(shoppingList.length > shoppingCart.length){
        shoppingCart.push(product);
    }
    product += products;
}








































