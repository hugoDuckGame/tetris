/* Largeur de la grille en nombre de cellules */
const WIDTH = 12;
/* Hauteur de la grille en nombre de cellules */
const HEIGHT = 18;

/* Largeur de chaque cellule en pixels */
const SIDE = 50;
/* Epaisseur du trait de chaque cellule en pixels */
const LINE = 5;

/* Temps de déplacement des pièces */
const TIME = 200;
/* Types de toutes les pièces possibles du jeu */
const PIECE_TYPES = {
    1: {
        id: 1,
        cells: [
            [[true, true],[true,true] ]
        ],
        fillColor: '#55FF33',
        strokeColor: '#000'
    },
    2: {
        id: 2,
        cells: [
            [[true, true,true,true]],
            [[true],[true],[true],[true]]

        ],
        fillColor: '#EB33FF',
        strokeColor: '#000'
    },
    3: {
        id: 3,
        cells: [
            [[true],[true],[true,true]],
            [[false, false, true], [true, true, true]],
            [[true, true], [false, true], [false, true]],
            [[true, true, true], [false, false, true]]
        ],
        fillColor: '#FFB933',
        strokeColor: '#000'
    },
    4: {
        id: 4,
        cells: [
            [[true, false],[true, true],[false,true]],
            [[false, true,true],[true, true, false]],
        ],
        fillColor: '#FF3353',
        strokeColor: '#000'
    },
    5: {
        id: 5,
        cells: [
            [[true, true, true],[false, true, false]],
            [[true, false], [true, true], [true, false]],
            [[false, true,false],[true, true, true]],
            [[false, true], [true, true], [false, true]],
        ],
        fillColor: '#F533FF',
        strokeColor: '#000'
    },
    6: {
        id: 6,
        cells: [
            [[true, true],[true, false]],
            [[true, false], [true, true]],
            [[false, true],[true, true]],
            [[true, true],[false, true]],
        ],
        fillColor: '#33A1FF',
        strokeColor: '#000'
    },
	// TODO: Ajouter et modifier les pièces du jeu
};

/* Démarrage du jeu */
function start() {
    var grid = {};
    initializeModel(grid);
    initializeView(grid);
    initializeController(grid);
}
start();