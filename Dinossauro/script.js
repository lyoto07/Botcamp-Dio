const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event) {
    //keyCode é o codigo da tecla que a pessoa pressionou é a 32 (espaço) / keycode.ingo site de keycodes
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true

    let upInterval = setInterval(() => {
        if (position > 150) {
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }

            }, 20)
        } else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }


    }, 20) // velocidade em que ele desce ou sobe
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if (isGameOver) return;

    cactus.classList.add('cactus'); //adicionando uma class no html
    background.appendChild(cactus); //adicionar um filho
    cactus.style.left = 1000 + 'px';

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            //saiu da tela
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //game over
            clearInterval(leftInterval);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {
            cactusPosition -= 10; //velocidade do cacto
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)

    setTimeout(createCactus, randomTime)
}


createCactus();
document.addEventListener('keyup', handleKeyUp)