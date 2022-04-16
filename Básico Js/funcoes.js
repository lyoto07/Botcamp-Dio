// estrutura
function nomeDaFuncao(parametro) {
    console.log(parametro);
}
//função anonima
const valor = function (parametro1, parametro2) {
    return parametro1 + parametro2;
}

//função autoinvocavel / pode receber parametros ou não
(
    function (a, b) {
        let name = "Digital innovation one";
        return name;
    }
)(1, 2);

const soma3 = (
    function () {
        return a + b;
    }
)();

console.log(soma3);

// call back é uma função passada como argumento para outra
// é possivel controlar as ordem de chamada
const calc = function (operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma = function (num1, num2) {
    return num1 + num2;
}

const sub = function (num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 1)

console.log(resultSoma);
console.log(resultSub);
//valores padrão
//antes teria que fazer um if para o num ter um numero padrão
function exponencial(array, num = 1)

//arrays
//spread: uma forma de lidar separadamento com elementos, o que rea parte de um array se torna um elemento independente colocar 3 pontinho

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

//rest
//o que era um elemento independentes se torna parte de um array
function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(3, 4, 5);

//object destructuring
//entre chaves {} podemos filtrar apenas os dados que nos interessam em um objeto

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: "john",
        lastNAme: "dow"
    }

};

function userId({
    id
}) {
    return id;
}

function getFullName({
    fullName: {
        firstName: first,
        lastName: last
    }
}) {
    return `${first} ${last}`
}

userId(user);

getFullName(user);

//IF/ Else
//é uma boa prtaica fazer desse 
function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if (ehNegativo) {
        return false;
    }
    return true;
}

//switch

function getAnimal(id) {
    switch (id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        default:
            return "peixe";
    }
}
//for

//for in loop entre propriedades enumeraveis de um objeto

// function forInExemplo(obj){
//     for(prop in obj){
//         console.log(prop);
//     }
// }

// const meuObjeto = {
//     nome:"João",
//     idade:"20",
//     cidade: "salvador"
// }

// forInExemplo(meuObjeto);

function forInExemplo(obj) {
    for (prop in obj) {
        console.log(obj[prop])
    }
}

const meuObjeto = {
    nome: "joão",
    idade: "20",
    cidade: "salvador"
}

forInExemplo(meuObjeto);

//for of
//loop entre estruturas interaveis (arrays, string)

function logLetras(palavras) {
    for (letra of palavra) {
        console.log(letra);
    }
}

const palavra = 'abacaxi';
logLetras(palavra);

function logNumeros(nums) {
    for (num of nums) {
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];
logLetras(nums);

//manipulando valor do this
//call

// const pessoa = {
//     nome: 'miguel'
// };

// const animal = {
//     nome: 'murphy'
// }

// function getSomething() {
//     console.log(this.nome);
// }

// getSomething.call(pessoa);


const myObj = {
    num1: 2,
    num2: 4
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj,1,5);
//apply
soma.apply(myObj,[1,5]);

//apply
//é possivel passar parametro para essa função dentro de um array 

const pessoa = {
    nome: 'miguel',
};

const animal = {
    nome: 'godi',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(pessoa);

//bind
//clona a estrutura da função onde ele foi chamado e aplica o valor do objeto passado como parametro

const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({nome:'Bruno'});

bruno();