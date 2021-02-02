let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

var isX = true;
let ai = 'O';
let human = 'X';

function eleccion(id) {
    console.log("turno de humano");
    var id;
    //console.log(id);
    if (isX) {
        human_move(id);
        draw_icon();
        isX = false;
    }
    let result = checkWinner();
    if (result != null) {
        //noLoop();
        if (result == 'tie') {
            console.log('Tie!');
        } else {
            console.log(`${result} wins!`);
        }
    }
    ia_move();
}


function setup() {
    bestMove();
    draw_icon();
}

function ia_move() {
    console.log("turno de ia");
    bestMove();
    draw_icon();
    let result = checkWinner();
    if (result != null) {
        noLoop();
        if (result == 'tie') {
            console.log('Tie!');
        } else {
            console.log(`${result} wins!`);
        }
    }
    isX = true;
}

function human_move(id) {
    var id;
    switch (id) {
        case 1:
            board[0][0] = 'X';
            console.log(board[0][0]);
            break;
        case 2:
            board[0][1] = 'X';
            console.log(board[0][1]);
            break;
        case 3:
            board[0][2] = 'X';
            console.log(board[0][2]);
            break;
        case 4:
            board[1][0] = 'X';
            console.log(board[1][0]);
            break;
        case 5:
            board[1][1] = 'X';
            console.log(board[1][1]);
            break;
        case 6:
            board[1][2] = 'X';
            console.log(board[1][2]);
            break;
        case 7:
            board[2][0] = 'X';
            console.log(board[2][0]);
            break;
        case 8:
            board[2][1] = 'X';
            console.log(board[2][1]);
            break;
        case 9:
            board[2][2] = 'X';
            console.log(board[2][2]);
            break;
    }

}


function draw_icon() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == 'X') {
                var span_id = "cell_span" + i + j;
                //console.log(span_id);
                var elemento = document.getElementById(span_id);
                elemento.className += "fa fa-times";
            }
            if (board[i][j] == 'O') {
                var span_id = "cell_span" + i + j;
                //console.log(span_id);
                var elemento = document.getElementById(span_id);
                elemento.className += "fa fa-circle";
            }
        }
    }
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