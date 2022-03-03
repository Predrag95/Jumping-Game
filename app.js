const character = document.querySelector(".character");
const obsticle = document.querySelector(".obsticle");

function actionClick() {
    if (character.classList != "jump") {
        character.classList.add("jump");
    }

    setTimeout(() => {
        character.classList.remove("jump");
    }, 500)
};

const checkDead = setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(character).top);
    const obsticleLeft = parseInt(window.getComputedStyle(obsticle).left);
    
    if (obsticleLeft <= 50 && obsticleLeft > 0 && characterTop >= 146) {
        obsticle.style.animation = 'none';
        obsticle.style.display = 'none';
        alert('hit')
    }
}, 10)
