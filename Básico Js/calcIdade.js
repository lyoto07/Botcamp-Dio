function calculaIdade(anos){
    return `daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos}  anos de idade`;
}

const pessoa1 = {
    nome: 'maria',
    idade: 30
}
const pessoa2 = {
    nome:'carla',
    idade: 25
}

const animal = {
    nome:'Fiona',
    idade: 5,
    rca: 'pug'
}

console.log(calculaIdade.call(pessoa2,30));


console.log(calculaIdade.aply(pessoa1,[4]));