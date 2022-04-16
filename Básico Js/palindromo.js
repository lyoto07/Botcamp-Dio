//solução 1
// function recebeString(string){
//     return string.split("").reverse().join("") === string; 
// }

// console.log(recebeString("gato"));


function verificaPalindromo2(string) {
     if (!string) return "string inexistente";
                         //esta dividindo pois ele verifica a primeira e a ultima ao mesmo tempo
     for (let i = 0; i < string.length / 2; i++){
          if(string[i] !== string[string.length - 1 - i]){
               return false;
          }
     }
     return true;
}

console.log(verificaPalindromo2("abba"));