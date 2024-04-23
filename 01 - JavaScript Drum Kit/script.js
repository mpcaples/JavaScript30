function keyPlaying(event) {
    playSound(event.keyCode)
}

function keyNotPlaying(event) {
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!key) return;
    key.classList.remove('playing');
}

function playSound(keyCode) {
    let key = document.querySelector(`.key[data-key="${keyCode}"]`); 
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return; //stop the function from running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();
    //add playing class
    key.classList.add('playing'); 
}

window.addEventListener('keydown', keyPlaying);  // apparently keydown and keyup are events on the window object which is why nothing was happening before 
window.addEventListener('keyup', keyNotPlaying); 