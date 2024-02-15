/* Initialise la zone de dessin du jeu */
/** grid : grille du jeu */
/** id : identifiant de la zone de dessin */
function initializeView(grid) {
    var canvas = document.querySelector('canvas');
    canvas.width = WIDTH * SIDE;
    canvas.height = HEIGHT * SIDE;
    draw(grid, canvas);
}

/* Dessine la grille du jeu */
/** grid : grille du jeu */
/** canvas : zone de dessin */
function draw(grid, canvas) {
    var context = canvas.getContext('2d');
    context.fillStyle = '#eee';
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawCells(grid, context);
    drawPiece(grid, context);
    drawScore(grid, context);
    window.requestAnimationFrame(() => draw(grid, canvas));
}

/* Dessine une cellule de la grille */
/** context : contexte de la zone de dessin */
/** x : position en x de la cellule */
/** y : position en y de la cellule */
/** fillColor : couleur de fond de la cellule */
/** strokeColor : couleur du trait de la cellule */
function drawCell(context, x, y, fillColor, strokeColor) {
    context.fillStyle = fillColor;
    context.fillRect(x * SIDE, y * SIDE, SIDE, SIDE);
    context.strokeStyle = strokeColor;
    context.lineWidth = LINE;
    context.strokeRect(x * SIDE, y * SIDE, SIDE, SIDE);
}

/* Dessine toutes les cellules de la grille */
/** grid : grille du jeu */
/** context : contexte de la zone de dessin */
function drawCells(grid, context) {
    for (var i = 0; i < HEIGHT; i++) {
        for (var j = 0; j < WIDTH; j++) {
            var cell = grid.cells[i][j];
            if (cell > 0) {
                drawCell(context, j, i, PIECE_TYPES[cell].fillColor, PIECE_TYPES[cell].strokeColor);
            }
        }
    }
}

/* Dessine la pièce dans la grille */
/** grid : grille du jeu */
/** context : contexte de la zone de dessin */
function drawPiece(grid, context) {
    var piece = grid.piece;
    var orientation = grid.orientation;
    if (piece) {
        for (var i = 0; i < piece.cells[orientation].length; i++) {
            for (var j = 0; j < piece.cells[orientation][i].length; j++) {
                if (piece.cells[orientation][i][j]) {
                    drawCell(context, grid.x + j, grid.y + i, piece.fillColor, piece.strokeColor);
                }
            }
        }
    }
}

/* Dessine le score dans la grille */
/** grid : grille du jeu */
/** context : contexte de la zone de dessin */
function drawScore(grid, context) {
    context.fillStyle = '#000';
    context.font = '30px Arial';
    context.fillText("Score : " + grid.score, 20, 50); // TODO: Afficher le score
}