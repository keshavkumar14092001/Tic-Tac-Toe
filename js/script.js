console.log('Tic Tac Toe Game');
const turnMusic = new Audio('./music/move.mp3');
const gameFinished = new Audio('./music/gameover.mp3');
let myTurn = 'X';
let gameWon = false;

// Turn Logic:
const checkTurn = () => {
    if (myTurn === 'X') {
        return '0';
    }
    else {
        return 'X';
    }
}
// Game Winning Logic
const gameWin = () => {
    let gameWinningPosition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let boxes = document.getElementsByClassName('boxText');
    gameWinningPosition.forEach(e => {
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[1]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText !== '')) {
            gameWon = true;
            document.getElementsByClassName('info')[0].innerText = boxes[e[0]].innerText + ' Won';
            let name = boxes[e[0]].innerText;
            gameFinished.play();
            setTimeout(() => {
                callAlert(name);
            }, 500);
        }
    });
}
function callAlert(name) {
    alert(`${name} Won Please Reset To Restart The Game`);
}

// Game Logic:
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = myTurn;
            myTurn = checkTurn();
            turnMusic.play();
            gameWin();
            if (!gameWon) {
                document.getElementsByClassName('info')[0].innerText = 'Turn For ' + myTurn;
            }
        }
    })
})

// Reset Logic:
const resetGame = document.getElementById('reSet');
resetGame.addEventListener('click', () => {
    let textToBeDeleted = document.getElementsByClassName('boxText');
    Array.from(textToBeDeleted).forEach(element => {
        element.innerText = "";
    })
    myTurn = 'X';
    gameWon = false;
    if (!gameWon) {
        document.getElementsByClassName('info')[0].innerText = 'Turn For ' + myTurn;
    }
})