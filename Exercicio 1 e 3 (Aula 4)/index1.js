const readline = require("readline-sync")
const value = [1, 2, 3, 4, 5, 6];
var soma = 0;

value.forEach(element => {
    if (element%2 === 0){
        soma += element;
    }
});
console.log(`A soma dos valores divisíveis por 2 é: ${soma}`);

