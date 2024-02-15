/* Initialise le controller du jeu */
/** grid : grille du jeu */
function initializeController(grid) {
    onKeyDown(grid);
    onClick(grid);
}

/* Contrôle de la pièce avec les flèches du clavier */
/** grid : grille du jeu */
function onKeyDown(grid) {
    window.onkeydown = function (event) {
        switch (event.keyCode ? event.keyCode : event.which) {
            case 37: // gauche
                decX(grid);
                break;
            case 38: // haut
                incOrientation(grid);
                break;
            case 39: // droite
                incX(grid);
                break;
            case 40: // bas
                update(grid);
        }
    };
}

/* Contrôle le clic de la souris */
/** grid : grille du jeu */
function onClick(grid) {
	document.querySelector('canvas').onclick = function (event) {
		var delta = HEIGHT / event.target.offsetHeight;
        var x = Math.trunc(event.offsetX * delta);
        var y = Math.trunc(event.offsetY * delta);
        // TODO: Supprimer la case (x, y) de la grille
	};
}