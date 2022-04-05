function menorValor(arrProdutos, posicaoInicial) {
    //o mais barato vai ser o primeiro pois o index é 0 e esta vazio por enquanto 
    let maisBarato = posicaoInicial;
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;

}

module.exports = menorValor;
