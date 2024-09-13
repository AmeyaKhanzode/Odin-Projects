let round = 0;
let humanScore = 0;
let computerScore = 0;
const totalRounds = 5;

const choices = document.querySelectorAll(".choice");
const score = document.querySelector(".score");
const resultDiv = document.getElementById('result');
const restart = document.querySelector(".restart");
const humanScorePrint = document.getElementById('human-score');
const computerScorePrint = document.getElementById('computer-score');
const roundCounter = document.getElementById('roundCounter');
const resetButton = document.getElementById('reset');

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const randomInput = Math.floor(Math.random() * 3);
    return moves[randomInput];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `Computer chose ${computerChoice}. You chose ${humanChoice}. You win!`;
    } else {
        computerScore++;
        return `Computer chose ${computerChoice}. You chose ${humanChoice}. You lose :(`;
    }
}

function updateScore() {
    humanScorePrint.textContent = humanScore;
    computerScorePrint.textContent = computerScore;
}

function updateRound() {
    roundCounter.textContent = `Round ${round + 1} / ${totalRounds}`;
}

function finalResults() {
    if (humanScore > computerScore) {
        resultDiv.textContent = "You win the game!";
    } else if (humanScore < computerScore) {
        resultDiv.textContent = "You lose the game!";
    } else {
        resultDiv.textContent = "It's a tie!";
    }
    resetButton.style.display = 'block';
    choices.forEach(button => button.disabled = true);
}

function resetGame() {
    round = 0;
    humanScore = 0;
    computerScore = 0;
    updateScore();
    updateRound();
    resetButton.style.display = 'none';
    choices.forEach(button => button.disabled = false);
}

function game(humanChoice) {
    if (round <= totalRounds) {
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        resultDiv.textContent = result;
        updateScore();
        updateRound();
        round++;
    }

    if (round === totalRounds) {
        finalResults();
    }
}

updateScore();
updateRound();
resetButton.style.display = 'none';