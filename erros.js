// //todos os parametros são opcionais

// new Error(message, fileName, LineNumber);

// const MeuErro = new Error('mensagem invalida')

// throw MeuErro;

const MeuErro = new Error('mensagem invalida');
MeuErro.name = 'invalidMEssage';

throw MeuErro;

MeuErro.stack;