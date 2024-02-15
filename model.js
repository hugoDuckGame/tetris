/* Données de la grille du jeu qui contient toutes les pièces posées */
/** grid : grille du jeu */
/** cells : toutes les cellules de la grille */
/** score : le score du joueur */
/** piece : la pièce qui apparait et qui descend dans la grille */
/** orientation : l'orientation de la pièce dans la grille */
/** x : la position en x de la pièce dans la grille */
/** y : la position en y de la pièce dans la grille */
/** interval : l'intervalle de temps pour la boucle de jeu */
function initializeModel(grid) {
    grid.cells = [];
    grid.score = 0;
    grid.piece = null;
    grid.orientation = -1;
    grid.x = -1;
    grid.y = -1;
    grid.interval = -1;
    for (var i = 0; i < HEIGHT; i++) {
        grid.cells.push([]);
        for (var j = 0; j < WIDTH; j++) {
            grid.cells[i][j] = 0;
        }
    }
    generatePiece(grid);
    grid.interval = setInterval(() => update(grid), TIME);
}

/* Génère une pièce aléatoire en haut de la grille */
/** grid : grille du jeu */
function generatePiece(grid) {
    grid.piece = PIECE_TYPES[Math.round(Math.random() * (Object.keys(PIECE_TYPES).length - 1)) + 1];
    grid.orientation = Math.trunc(Math.random() * grid.piece.cells.length);
    grid.x = Math.trunc(WIDTH / 2) - 1;
    grid.y = 0;
}

/* Change l'orientation de la pièce */
/** grid : grille du jeu */
function incOrientation(grid) {
    grid.orientation = (grid.orientation + 1) % grid.piece.cells.length;
}

/* Déplace la pièce vers la gauche */
/** grid : grille du jeu */
function decX(grid) {
    if (pieceCanGoThere(grid, grid.x - 1, grid.y)) {
        grid.x--;
        if (grid.x < 0) {
            grid.x = 0;
        }
    }
}

/* Déplace la pièce vers la droite */
/** grid : grille du jeu */
function incX(grid) {
    if (pieceCanGoThere(grid, grid.x + 1, grid.y)) {
        grid.x++;
        if (grid.x > WIDTH - grid.piece.cells[grid.orientation][0].length) {
            grid.x = WIDTH - grid.piece.cells[grid.orientation][0].length;
        }
    }
}

/* Met à jour l'état de la grille */
/** grid : grille du jeu */
function update(grid) {
    if (grid.y < HEIGHT - grid.piece.cells[grid.orientation].length && pieceCanGoThere(grid, grid.x, grid.y + 1)) {
        grid.y++;
    } else if (grid.y == 0) {
        clearInterval(grid.interval);
        alert('Game Over');
		initializeModel(grid);
    } else {
        updatePieceInCells(grid);
        updateCells(grid);
        generatePiece(grid);
    }
}

/* Vérifie si la pièce peut aller aux coordonnées données */
/** grid : grille du jeu */
/** x : future position en x de la pièce */
/** y : future position en y de la pièce */
function pieceCanGoThere(grid, x, y) {
    var canGoThere = true;
    for (var i = 0; i < grid.piece.cells[grid.orientation].length; i++) {
        for (var j = 0; j < grid.piece.cells[grid.orientation][i].length; j++) {
            if (grid.piece.cells[grid.orientation][i][j]) {
                canGoThere &= grid.cells[y + i][x + j] == 0;
            }
        }
    }
    return canGoThere;
}

/* Met à jour la position de la pièce dans la cellule */
/** grid : grille du jeu */
function updatePieceInCells(grid) {
    for (var i = 0; i < grid.piece.cells[grid.orientation].length; i++) {
        for (var j = 0; j < grid.piece.cells[grid.orientation][i].length; j++) {
            if (grid.piece.cells[grid.orientation][i][j]) {
                grid.cells[grid.y + i][grid.x + j] = grid.piece.id;
            }
        }
    }
};

/* Met à jour les cellules lorsqu'une ligne est pleine */
/** grid : grille du jeu */
function updateCells(grid) {
    for (var i = 0; i < grid.cells.length; i++) {
        var full = true;
        for (var j = 0; j < grid.cells[i].length; j++) {
            full &= grid.cells[i][j] > 0;
        }
        if (full) {
            updateLine(grid.cells, i);
            ++grid.score;
        }
    }
}

/* Met à jour les lignes par rapport à celles du dessus */
/** cells : cellules de la grille du jeu */
/** n : position de la dernière ligne à mettre à jour */
function updateLine(cells, n) {
    for (var i = n; i >= 1; i--) {
        for (var j = 0; j < cells[i].length; j++) {
            cells[i][j] = cells[i - 1][j];
        }
    }
}

/* Détruit la cellule donnée */
/** cells : cellules de la grille du jeu */
/** x : position en x de la cellule à détruire */
/** y : position en y de la cellule à détruire */
function destroyCell(cells, x, y) {
    // TODO: Supprimer la valeur de case (x, y)
}