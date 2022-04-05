// let numb = [1,3,4,6,80,33,23,90]
// codigo inicial 
// for(let i = 0; i < numb.length;i++){
    
//     if(numb[i] % 2 === 0){
//         console.log(`${numb[i]} é divisivel por 2`);
//         numb[i] = 0;
//     }

//     console.log("deu ruim");

//     console.log(numb[i]);
// }


function substituiPar(array){
    if(!array) return -1;
    if(!array.length) return -1;
    for(let i = 0; i < array.length;i++ ){
        if(array[i] === 0){
            return "Esse numero ja é zero ";
        }
        else if(numb[i] % 2 === 0){
            console.log(`Substituindo o numero  ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let numb = [1,3,4,6,80,33,23,90]

console.log(substituiPar(numb))

let sonho = 124;
sonho =123;

