const livros = require('./listaLivros.js')
const menorValor = require('./menorValor')

for(let atual = 0; atual < livros.length - 1; atual++){
//chamando menorValor e passando os parametros  
    let menor = menorValor(livros, atual);
    //acessa o  array e passa o index atual
    let livroAtual = livros[atual];
    // pegando o index do menor valor e acessa o array com o index
    let livroMenorPreco = livros[menor];
//index do livro com menor preço é saLVO    
    livros[atual] = livroMenorPreco;
    
    livros[menor] = livroAtual;
}

console.log(livros)