let round = 0;
let humanScore = 0;
let computerScore = 0;
const totalRounds = 5;

function play() {
    while (round < totalRounds) {
        round++;
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        
}

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const randomInput = Math.floor(Math.random() * 3);
    return moves[randomInput];
}

function getHumanChoice() {
    const humanInput = prompt("Enter your move: rock, paper, or scissors");
    return humanInput;
}

var humanScore = 0;
var computerScore = 0;

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
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

function game() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
}

game();
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);








