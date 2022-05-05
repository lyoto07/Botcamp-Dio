let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment() {

    if (currentNumber < 10) {
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
        trocarCor();
    }
}

function decrement() {
    if (currentNumber > 0) {
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
        trocarCor();
    }
}

function trocarCor() {
    if(currentNumber % 2 === 0){
        
    currentNumberWrapper.style.color = 'green';
    } else{
        currentNumberWrapper.style.color = 'red';
    }

}
