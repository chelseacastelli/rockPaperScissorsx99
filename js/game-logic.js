// All code should be written in this file.


let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;

let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

let playerOneScore = 0;
let playerTwoScore = 0;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

    let movesMap = {
        'rock': true,
        'paper': true,
        'scissors': true
    }

    let userMoves = [moveOneType, moveTwoType, moveThreeType];

    /* Edge Cases */
    // If any argument is undefined
    if([...arguments].includes(undefined)) return; 

    // If an argument is missing
    if (arguments.length < 7) return;
    
    // If invalid player is given
    if ((player !== 'Player One') && (player !== 'Player Two')) return;

    // If invalid move is given
    for (let i = 0; i < userMoves.length; i++) {
        if (!movesMap[userMoves[i]]) return;
    }

    // If any move value is less than 1 
    // or total is greater than 99
    if ((moveOneValue + moveTwoValue + moveThreeValue > 99) || (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1)) return;


    switch(player) {
        case 'Player One':
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
            break;

        case 'Player Two':
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
            break;
    }
}

setPlayerMoves('Player One', 'rock', 50, 'scissors', 20, 'paper', 29);
setPlayerMoves('Player Two', 'paper', 30, 'scissors', 20, 'scissors', 49);

console.log(playerOneMoveOneType, playerOneMoveOneValue, playerOneMoveTwoType, playerOneMoveTwoValue, playerOneMoveThreeType, playerOneMoveThreeValue);

console.log(playerTwoMoveOneType, playerTwoMoveOneValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);