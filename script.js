// Initialize total rounds
const ROUNDS = 5;
let played = 0;

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
    const result = document.createElement("p");

    if (humanChoice == "rock" && computerChoice == "scissors"){
        result.textContent = "You win! Rock beats scissors.";
        ++humanScore;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        result.textContent = "You lose! Rock get beaten by paper.";
        ++computerScore;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        result.textContent = "You win! Scissors beats paper.";
        ++humanScore;
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        result.textContent = "You lose! Scissors gets beaten by rock.";
        ++computerScore;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        result.textContent = "You win! Paper beats rock.";
        ++humanScore;
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        result.textContent = "You lose! Paper gets beaten by scissors.";
        ++computerScore;
    } else {
        result.textContent = "It's a draw.";
    }
    roundResults.appendChild(result);
}

const choice = document.querySelector(".choices");
const roundResults = document.querySelector(".round-results");
const human = document.querySelector(".human");
const computer = document.querySelector(".computer");

choice.addEventListener("click", (e) => {
    if (played == ROUNDS) {
        const gameResult = document.createElement("p")
        gameResult.textContent = "Game over..." + ((humanScore > computerScore ? "You win!" : 
            (humanScore == computerScore ? "It's a draw." : "You lose.")))
            + `\nFinal score: H${humanScore} - C${computerScore}`;
        roundResults.append(gameResult);
        played = humanScore = computerScore = 0;
    } else {
        playRound(e.target.textContent, getComputerChoice());
        played++;
    }
    human.textContent = humanScore;
    computer.textContent = computerScore;
})


