function validaArr(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parametros");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if (typeof num !== 'number') throw new TypeError("num precisa ser do tipo number");

        if (arr.length !== num) throw new RangeError("Tamanho Invalido");

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("este erro é um ReferenceErro");
            console.log(e.message)
        }else if (e instanceof TypeError){
            console.log("este erro é um TypeError");
            console.log(e.message)
        }else{
            console.log("Tipo de erro não esperado" + e);
        }
    }

}


console.log(validaArr([], "a"));


// if (arr === undefined || number === undefined) {
//     throw MeuErro;
// } else if (typeof arr != Object || typeof number != Number) {
//     throw ErroTipo;
// }

// const MeuErro = new Error('ReferenceError');
// MeuErro.name = 'ReferenceError';
// const ErroTipo = new Error("TypeError")
// ErroTipo.name = 'TypeError';