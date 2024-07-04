let humanScore = 0;
let computerScore = 0;

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
// delete the getHumanChoice() function

// take the human choice as an argument and generate the computer's choice within the function.
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const scoreDisplay = document.querySelector('#score');
    const roundResult = document.querySelector('#roundResult');
    const gameResult = document.querySelector('#gameResult');

    if (humanChoice === computerChoice) {
        roundResult.textContent = `It\'s a draw. Both chose ${computerChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    scoreDisplay.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            gameResult.textContent = `Congrats! You won the game with a score of ${humanScore} to ${computerScore}.`;
        } else {
            gameResult.textContent = `Sorry! You lost the game with a score of ${humanScore} to ${computerScore}.`;
        }
        // Disable buttons after game ends
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
    }
}


// Event listeners for the buttons
document.querySelector('#rock').addEventListener('click', () => playRound('rock'));
document.querySelector('#paper').addEventListener('click', () => playRound('paper'));
document.querySelector('#scissors').addEventListener('click', () => playRound('scissors'));


//delete the playGame()funciton
