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

function createScoresAndValuesArr(round, player) {

    let moves = {
        1: [
            [playerOneMoveOneType, playerOneMoveOneValue], 
            [playerOneMoveTwoType,playerOneMoveTwoValue], 
            [playerOneMoveThreeType, playerOneMoveThreeValue]
        ],
        2: [
            [playerTwoMoveOneType, playerTwoMoveOneValue], 
            [playerTwoMoveTwoType, playerTwoMoveTwoValue], 
            [playerTwoMoveThreeType, playerTwoMoveThreeValue]
        ]
    }

    if ((round < 1 || round > 3) || (moves[player][round-1].includes(undefined))) return null;

    return moves[player][round-1];
}

function getRoundWinner(round) {

    let p1 = createScoresAndValuesArr(round, 1);
    let p2 = createScoresAndValuesArr(round, 2);
    let winner;


    // Check that all values exist
    if (!p1 || !p2) return null


    if (p1[0] === 'rock') {
        if (p2[0] === 'paper') winner = 2;
        else if (p2[0] === 'scissors') winner = 1;
        else {
            if(p1[1] > p2[1]) winner = 1;
            else if (p2[1] > p1[1]) winner = 2;
            else winner = 0;
        }
    } else if (p1[0] === 'paper') {
        if (p2[0] === 'rock') winner = 1;
        else if (p2[0] === 'scissors') winner = 2;
        else {
            if(p1[1] > p2[1]) winner = 1;
            else if (p2[1] > p1[1]) winner = 2;
            else winner = 0;
        }
    } else {
        if (p2[0] === 'rock') winner = 2;
        else if (p2[0] === 'paper') winner = 1;
        else {
            if(p1[1] > p2[1]) winner = 1;
            else if (p2[1] > p1[1]) winner = 2;
            else winner = 0;
        }
    }

    // Increment player score or return Tie
    if (winner === 1) {
        playerOneScore++;
        return 'Player One';
    }

    else if(winner === 2) {
        playerTwoScore++;
        return 'Player Two';

    } else return 'Tie';

}



// setPlayerMoves('Player One', 'rock', 1, 'scissors', 20, 'paper', 29);
// setPlayerMoves('Player Two', 'scissors', 20, 'rock', 1, 'paper', 1);


// console.log('Player 1: ', playerOneMoveOneType, playerOneMoveOneValue, playerOneMoveTwoType, playerOneMoveTwoValue, playerOneMoveThreeType, playerOneMoveThreeValue);

// console.log('Player 2: ', playerTwoMoveOneType, playerTwoMoveOneValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);

// getRoundWinner(1);

// console.log(`\nWinner: ${getRoundWinner(1)}\nP1 Score: ${playerOneScore}\nP2 Score: ${playerTwoScore}\n\nWinner: ${getRoundWinner(2)}\nP1 Score: ${playerOneScore}\nP2 Score: ${playerTwoScore}\n\nWinner: ${getRoundWinner(3)}\nP1 Score: ${playerOneScore}\nP2 Score: ${playerTwoScore}\n\n`);
