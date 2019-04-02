clickCount = 0;

let board = document.getElementById('board');

board.onclick = function (event) {
    clickCount = clickCount + 1;
    if (event.target.classList.contains('box')) {
        if (clickCount % 2 != 0) {
            event.target.innerHTML = "X"
            checkWin("X")

        }
        else {
            event.target.innerHTML = "O"
            checkWin("O")

        }
    }
}

let winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let fill = new RegExp("X||O");
// let drawCheck = fill.test(board.getElementsByTagName(div));


function checkWin(currentPlayer) {
    for (i = 0; i < winCombo.length; i++) {
        let boardState = winCombo[i].map(function (index) {
            return board.children[index].innerHTML;
        }
        ).join('')

        if (boardState === currentPlayer.repeat(3)) {
            alert(`${currentPlayer} wins!`);
        }

        else if (clickCount == 9) {
            alert('Draw!');
            break;
        }



    }
}



// ((board.getElementsByClassName(".box")[0] == "X" || "O"
        //     && board.getElementsByClassName(".box")[1] == "X" || "O"
        //     && board.getElementsByClassName(".box")[2] == "X" || "O"
        //     && board.getElementsByClassName(".box")[3] == "X" || "O"
        //     && board.getElementsByClassName(".box")[4] == "X" || "O"
        //     && board.getElementsByClassName(".box")[5] == "X" || "O"
        //     && board.getElementsByClassName(".box")[6] == "X" || "O"
        //     && board.getElementsByClassName(".box")[7] == "X" || "O"
        //     && board.getElementsByClassName(".box")[8] == "X" || "O")
        // && boardState !== currentPlayer.repeat(3)) 
// else if (board.children[0, 1, 2, 3, 4, 5, 6, 7, 8] = true && boardState !== currentPlayer.repeat(3)) {
        //     alert("Draw!")
        // }

        // if (document.querySelectorAll(".box").chilren = "X" || "O" && boardState !== currentPlayer.repeat(3)) {
        //     alert("Draw!")
        // }


//  else if (board.getElementsByTagName(div)[0 && 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8] !== false && boardState !== currentPlayer.repeat(3)) {
//             alert("Draw!")













    // board[2].innerHTML="O"

    // for (i=0;i<board[i].length;i++){
//     if (board[i]=""){
//         board[i].innerHTML="X"
//     }
// }
// }

// let i = [0,1,2,3,4,5,6,7,8]

// function show() {
//     board[i].innerHTML = "X"
// }

// function input() {
//     if(move % 2 == 0) {
//         board[i].innerHTML = "X";
//         move++;
//         show()
//     }
//     else(){
//         board[i].innerHTML = "O";
//         move++;
//     }

// }














// function input() {
//    let board[i] = document.getElementById("board").childNodes; 



// //     }






// if (board[i]=false)
