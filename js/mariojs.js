const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Definição do tempo de ação do pulo do mario (500ms)

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Definindo altura de pixel do PIPE

    if (pipePosition <= 130 && pipePosition > 0 && marioPosition < 108) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

// Troca da figura do Mario quando toca no pixel do pipe.

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/gameover.png'

        clearInterval(loop);
    }

}, 10)

// Adicionando evento para ação de qualquer tecla para executar o JUMP

document.addEventListener('keydown', jump);