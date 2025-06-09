/*

--- The Problem

Create a rock, paper, scissors game. 

The game is played between a human and the computer.
The game is 5 rounds.

In each round, the human chooses "rock", "paper", or "scissors".
The computer randomly chooses "rock", "paper", or "scissors".
The winner of the round is determined as follows:
    - Rock beats scissors
    - Scissors beats paper
    - Paper beats rock

After 5 rounds, the winning player is declared.


--- The Algorithm

global variable: humanScore, # of rounds won by the human player.
global variable: computerScore, # of rounds won by the computer player.
1. Initialize score trackers for the players.

function: getComputerChoice()
1. Randomly generate an integer from 1 - 3.
2. RETURN "rock", "paper", or "scissors" based on the integer.

function: getHumanChoice()
1. PROMPT human for choice of "rock", "paper", or "scissors". 
2. RETURN human's string input.

function: playRound( humanChoice, computerChoice )
parameter: humanChoice, output of getHumanChoice()
parameter: computerChoice, output of getComputerChoice() 
1. Compare the human and computer choices to determine the winner.
   Comparison should be case insensitive.
2. LOG the outcome of the round in the console.
3. INCREMENT the score for the winning player.

function: playGame()
1. FOR each round out of 5, 
        CALL getHumanChoice() and store the result in humanChoice.
        CALL getComputerChoice() and store the result in computerChoice
        CALL playRound()
2. After 5 rounds have been played, 
   LOG the winner of the game in the console.
   The winner has higher score after 5 rounds.

*/

// Initialize total rounds
const ROUNDS = 5;

// Initialize score trackers for players
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random()*3) + 1;
    if (num == 1) {
        return "rock";
    } else if (num == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Pick your hand:", "'Rock', 'Paper' or 'Scissors'");
    return input;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Rock get beaten by paper.");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Scissors gets beaten by rock.");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Paper gets beaten by scissors.");
        computerScore++;
    } else {
        console.log("It's a draw.");
    }
}

// function playGame() {
//     for (let i = 0; i < ROUNDS; i++) {
//         console.log(`-- Round ${i + 1} of ${ROUNDS} --
//             Human: ${humanScore}
//             Computer: ${computerScore}`)

//         const humanPick = getHumanChoice();
//         const computerPick = getComputerChoice();
       
//         playRound(humanPick, computerPick);
//     }
//     let result = "Game over..." + (humanScore > computerScore ? "You win!" : "You lose :(");
//     console.log(result);
// }

// playGame();

const choice = document.querySelector(".choices");

choice.addEventListener("click", (e) => {
    playRound(e.target.textContent, getComputerChoice());
})

