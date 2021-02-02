let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


let ai = 'X';
let human = 'O';
let currentPlayer = human;

function setup() {
    bestMove();
}

function equals3(a, b, c) {
    return a == b && b == c && a != '';
}

function checkWinner() {
    let winner = null;

    // horizontal
    for (let i = 0; i < 3; i++) {
        if (equals3(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
        }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
        if (equals3(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
        }
    }

    // Diagonal
    if (equals3(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
        winner = board[2][0];
    }

    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                openSpots++;
            }
        }
    }

    if (winner == null && openSpots == 0) {
        return 'tie';
    } else {
        return winner;
    }
}

function eleccion_row_1(id) {

    if (currentPlayer == human) {
        // Human make turn
        let i = 0;
        let j = id;
        // If valid turn
        if (board[i][j] == '') {
            board[i][j] = human;
            currentPlayer = ai;
            bestMove();
        }
    }
    draw();
}

function eleccion_row_2(id) {

    if (currentPlayer == human) {
        // Human make turn
        let i = 1;
        let j = id;
        // If valid turn
        if (board[i][j] == '') {
            board[i][j] = human;
            currentPlayer = ai;
            bestMove();
        }
    }
    draw();
}

function eleccion_row_3(id) {

    if (currentPlayer == human) {
        // Human make turn
        let i = 2;
        let j = id;
        // If valid turn
        if (board[i][j] == '') {
            board[i][j] = human;
            currentPlayer = ai;
            bestMove();
        }
    }
    draw();
}




function draw() {
    draw_icon();
    let result = checkWinner();
    if (result != null) {
        noLoop();
        let resultP = createP('');
        resultP.style('font-size', '32pt');
        if (result == 'tie') {
            resultP.html('Tie!');
        } else {
            resultP.html(`${result} wins!`);
        }
    }
}

function draw_icon() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == 'x') {
                var span_id = "cell_span" + i + j;
                //console.log(span_id);
                var elemento = document.getElementById(span_id);
                elemento.className += "fa fa-times";
            }
            if (board[i][j] == 'o') {
                var span_id = "cell_span" + i + j;
                //console.log(span_id);
                var elemento = document.getElementById(span_id);
                elemento.className += "fa fa-circle";
            }
        }
    }
}