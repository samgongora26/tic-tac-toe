let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let w; // = width / 3;
let h; // = height / 3;

let ai = 'o';
let human = 'x';
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

function eleccion(id) {
    console.log("turno de humano");
    var id;
    //console.log(id);
    if (currentPlayer == human) {
        human_move(id);
        currentPlayer = ai;
        bestMove();
    }
}

function human_move(id) {
    var id;
    switch (id) {
        case 1:
            if (board[0][0] == '') {
                board[0][0] = human;
            }
            break;
        case 2:
            if (board[0][1] == '') {
                board[0][1] = human;
            }
            break;
        case 3:
            if (board[0][2] == '') {
                board[0][2] = human;
            }
            break;
        case 4:
            if (board[1][0] == '') {
                board[1][0] = human;
            }
            break;
        case 5:
            if (board[1][1] == '') {
                board[1][1] = human;
            }
            break;
        case 6:
            if (board[1][2] == '') {
                board[1][2] = human;

            }
            break;
        case 7:
            if (board[2][0] == '') {
                board[2][0] = human;
            }
            break;
        case 8:
            if (board[2][1] == '') {
                board[2][1] = human;
            }
            break;
        case 9:
            if (board[2][2] == '') {
                board[2][2] = human;
            }
            break;
    }

}



/*
function mousePressed() {
    if (currentPlayer == human) {
        // Human make turn
        let i = floor(mouseX / w);
        let j = floor(mouseY / h);
        // If valid turn
        if (board[i][j] == '') {
            board[i][j] = human;
            currentPlayer = ai;
            bestMove();
        }
    }
}
*/

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


/*
<div id = "cell1"
onclick = "eleccion_row_1(0)"
class = "box" > < span id = "cell_span00"
class = "" > < /span></div >
    <
    div id = "cell2"
onclick = "eleccion_row_1(1)"
class = "box" > < span id = "cell_span01"
class = "" > < /span></div >
    <
    div id = "cell3"
onclick = "eleccion_row_1(2)"
class = "box" > < span id = "cell_span02"
class = "" > < /span></div >
    <
    div id = "cell4"
onclick = "eleccion_row_2(0)"
class = "box" > < span id = "cell_span10"
class = "" > < /span></div >
    <
    div id = "cell5"
onclick = "eleccion_row_2(1)"
class = "box" > < span id = "cell_span11"
class = "" > < /span></div >
    <
    div id = "cell6"
onclick = "eleccion_row_2(2)"
class = "box" > < span id = "cell_span12"
class = "" > < /span></div >
    <
    div id = "cell7"
onclick = "eleccion_row_3(0)"
class = "box" > < span id = "cell_span20"
class = "" > < /span></div >
    <
    div id = "cell8"
onclick = "eleccion_row_3(1)"
class = "box" > < span id = "cell_span21"
class = "" > < /span></div >
    <
    div id = "cell9"
onclick = "eleccion_row_3(2)"
class = "box" > < span id = "cell_span22"
class = "" > < /span></div >*/