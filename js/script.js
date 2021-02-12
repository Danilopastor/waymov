const throttle = _.throttle;


const players = 
    Array.from(document.querySelectorAll('.play-on-scroll'));


function isOnScreen(el) {
    let rect = el.getBoundingClientRect() 
    return rect.top > 0 && rect.bottom < window.innerHeight;
}

function playAnimation(el) {
    if(isOnScreen(el)) el.style.animationPlayState = 'running';
}


const render = throttle(() => players.forEach(playAnimation), 200);

render();
window.addEventListener('scroll', render);