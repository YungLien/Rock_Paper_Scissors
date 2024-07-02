function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 2) {
        return 'scissors';
    } else {
        return 'paper';
    }
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt('What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.')); //Convert the prompt input to an integer using parseInt()
    if (humanChoice === 0) {
        return 'rock';
    } else if (humanChoice === 2) {
        return 'scissors';
    } else if (humanChoice === 1) {
        return 'paper';
    } else {
        alert('Invalid choice Please enter 0, 1, or 2.')
        return getHumanChoice(); // Ask for input again
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It\'s a draw. Both chose ${computerChoice}`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}


function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice(); // calls the function to get player's choice and stores it in the variable.
        const computerSelection = getComputerChoice(); // calls the function to get computer's choice and stores it in the variable.
        playRound(humanSelection, computerSelection); //Calls the playRound(humanSelection, computerSelection) function with the player's and computer's choices as arguments.
    }

    if (humanScore > computerScore) {
        console.log(`Congrat! You wom the game with a score of ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Sorry! You lost the game with a score of ${humanScore} to ${computerScore}`);
    } else {
        console.log(`It's a tie! Both have a score of ${humanScore}`);
    }
}

// Start the game
playGame();
