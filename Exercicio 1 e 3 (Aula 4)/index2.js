const readline = require("readline-sync")
const fs = require("fs")
var cont = 1, teste = 0;
var lista= [];
while (cont != 0){
    varLocal = readline.question("Qual palavra deseja adicionar?\n>> ");
    lista.forEach(element => {
        if(element === varLocal){
            teste++;
        }else if(varLocal == null){
            teste++;
        }
    });
    if(teste === 0){
        lista.push(varLocal)
    }
    cont = readline.question("Deseja continuar? \n [0 - Nao/1 - Sim]\n>> ");
    teste = 0
}
lista.forEach(element => {
    console.log(`\n${element}`);
});
const conteudo = JSON.stringify(lista);
fs.writeFileSync('./teste.json', conteudo, {encoding: 'utf-8'});