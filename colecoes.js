//estrutra possui: entradas no formato chave e valor(uma coleção de arrays [chave,valor]) , pode ser interado num loop for of

//metodos Adicionar, ler e deletar 

const myMap = new Map()
    myMap.set('apple', 'fruit');
    //map(1) {"apple" => "fruit"}

    myMap.get("apple");
    //"fruit"

    myMap.delete("apple")
    //true

    myMap.get("apple")
    //undefined

//maps vs obj

//maps podem ter chaves de qualquer tipo
//maps possuem a propriedade length
//maps são mais faceis de iterar
//utilizado quando o valor das chaves é desconhecido
//os valores tem o mesmo tipo 

//SET
//Estrutura
//são estruturas que armazenam valores unicos (uma coleção de valores unicos que nao se repetem nunca)

//adicionar, consultar e deletar

const mySet = new Set();
mySet.add(1);
mySet.add(5);

mySet.has(1);
//true
mySet.has(3);
//false
mySet.delete(5)

//possui valores unicos
//em vez da propriedade length, consulta-se o numero de registros pela propriedade size
//não possui os metodos map,filter,reduce etc





