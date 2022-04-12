/*
Assicrono: que nao ocorre ou nao se efetiva ao mesmo tempo, pode fazer uma coisa enquanto faz outra tambem
Sincrono:  que acontece simultaneamente 

jS roda de maneira sincrona

Promises
objeto de processamento assincrono
inicialmente seu valor é desconhecido. ela pode,entao, ser resolvida ou rejeitada

analogia com cinema
a compra do ingresso é uma promessa de que eu vou no cinema naquele dia , depois d eum determinado tempo, naquele momento que comprei o ingresso pode acontecer varias coisas dps, pode ser que eu veja o filme ou nao

a promice tem 3 estados
pending - pendente

fulfilled - completado

rejected  - rejeitado

*/

//promises

const myPromise = new Promise((resolve, reject) =>{
    window.setTimeout(()=>{
        resolve(console.log('resolvida'));
    },2000);
});

await myPromise
    //vai fazer dps caso seja resolvida a promise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou')
    .catch((err) => console.log(err.message));
//apos 2 segundos, retonará o valor
//resolvida passando pelo then e agora acabou

/* 
Assync / await existe para definir funções assincronas 
funções assincronas precisas dessas duas palavras

*/

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        },3000);
    });

//await para o codigo para mudar o jeito que o js esta vendo tudo isso / toda vez q quero o resultado da minha promise precisa do await 
    const resolved = await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou')
    .catch((err) => console.log(err.message));

    return resolved;

}


/*  
Apis
Oque são
* application programming interface
uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end
é possivel acessa-la por meio de urls

json: js object notation
é muito comum que APIS retornem seus dados no formato .json, portante precisamos tratar esses dados quando os recebemos

fetch retorna um promise necessario usar await

quando se recebe um valor de uma api ele deve ser tratado
*/

//fetch = operações no banco (post, get, put, delete e etc)
 
getch(url, option)

    .then(response => response.json())
    .then(json => console.log(json))

    //retorna uma promise


