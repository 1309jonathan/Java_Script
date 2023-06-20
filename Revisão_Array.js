//Arrays

// * São estruturas dadas com "espaços" que podem ser acessadas e manipuladas de diferentes formas
// * Eles nos ajudam a lidar com dados "parecidos", listas, conjuntos, etc.

//Exemplos:
// * Lista de filmes de uma categoria
// * Lista de usuários
// * Lista de Ingressos

//Exemplos de criação de Array

//Exemplo 1
// const ingressos_1 = ["sexta", "sabado", "domingo"];

//Exemplo 2 - "Array infinito"
// const ingressos_2 = [];
//     cars[0]="sexta";
//     cars[1]="sabado";
//     cars[2]="domingo";

//Exemplo 3 - pode ser usado como objeto
// const ingressos_3 = new Array("sexta", "sabado", "domingo");

//Exemplo de seleção do array

//Exemplo 1 - Acessa
// const ingressos_4 = ["sexta", "sabado", "domingo"];
// let ingress1=ingressos_4[0];

//Exemplo 2
// const ingressos_5 = ["sexta", "sabado", "domingo"];
// ingressos_5[0] = "Sexta-Feira"

//Propriedades importantes do Array
// ingressos_1.length // Quantidade de ingressos - tamanho do array
// ingressos_1.sort() // Ordena o Array

//Operadores

//Operadores nos ajudam a manipular Arrays de forma eficiente para fazer uma série de ações:
// * Deslocar membros do Array
// * Acrescentar membros no Array
// * Clonar Array
// * Quebrar Array em partes
// * Entre outros

// Adicionando um novo elemento
// ingressos_1.push("Quinta-Feira") // Adiciona um valor ao final do Array
// ingressos_1.unshift("Quinta-Feira"); // Adiciona um valor ao início do Array
// ingressos_1.pop(); //Retira o ultimo valor do Array
// ingressos_1.shift(); //Retira o primeiro valor do Array
// ingressos_1.pop("2"); //Remove o elemento que está na posição correspondente (0, 1, 2 - este será removido)
// const ingressos_6 = ingressos_1.slice() //slice - Faz uma cópia do array indicado, uma cópia independente

// Array destructing - extrai dados de uma array de maneira prática quando necessário

var ingressos = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];
let [ingresso1, ingresso2] = ingressos; //cada objeto vai receber de acordo com a posição correspondente no Array
let [ing1, ...rest] = ingressos; //o rest ficou com o restante do valor
console.log(ing1);
console.log(rest);

//troca de valores entre objetos
var a;
var b;
a = 7;
console.log(a);
b = 5;
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

//Arrow Function

// Maneira alternativa de declarar uma função, mais compacta e que torna seu código mais prático e limpo.

//Ex. 1 - função sem Arrow Function

let x = function(x, y){
    return x * y;
}

//Ex. 1 - função com Arrow Function

let z = (x, y) => x * y;

//String Template

//Maneira prática e compacta de criar uma string com valores dinâmicos dentro delas. Mais prático do que outras maneiras de concatenar valores em string.

