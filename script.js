function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.currentTarget.classList.remove('playing');
    
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const spacebar = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    spacebar.classList.add('playing');
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
const space = document.querySelector('.spacebar')
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
space => space.addEventListener('transitioned', removeTransition);

window.addEventListener('keydown', playSound);