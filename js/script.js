var pacman;
var pacmanX = 10;
var pacmanY = 10;

window.addEventListener('DOMContentLoaded', function () {
    pacman = document.getElementById('pacman');

    window.addEventListener('keydown', function (event) {
        if (event.key === "ArrowLeft") {
            pacmanX -= 5;
        } else if (event.key === "ArrowRight") {
            pacmanX += 5;
        } else if (event.key === "ArrowUp") {
            pacmanY -= 5;
        } else if (event.key === "ArrowDown") {
            pacmanY += 5;
        }

        pacman.style.left = pacmanX + 'px';
        pacman.style.top = pacmanY + 'px';

        checkCollisions();
    });
});

function checkCollisions() {
    var ghost = document.getElementById('ghost');
    var cookie = document.getElementById('cookie');

    var pacmanPosition = pacman.getBoundingClientRect();
    var cookiePosition = cookie.getBoundingClientRect();
    var ghostPosition = ghost.getBoundingClientRect();

    if (pacmanPosition.left<cookiePosition.right &&
        pacmanPosition.right>cookiePosition.left && pacmanPosition.top<cookiePosition.bottom &&
        pacmanPosition.bottom>cookiePosition.top) {
        alert("¡Ganaste!");
        resetPacmanPosition();
    }

    if (pacmanPosition.left + 5 < ghostPosition.right && pacmanPosition.right - 5 > ghostPosition.left && pacmanPosition.top + 5 < ghostPosition.bottom && pacmanPosition.bottom - 5 > ghostPosition.top) {
        alert("¡Perdiste!");
        resetPacmanPosition();
    }
}

function resetPacmanPosition() {
    pacmanX = 10;
    pacmanY = 10;
    pacman.style.left = pacmanX + 'px';
    pacman.style.top = pacmanY + 'px';
}
