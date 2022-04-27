const moves = ['rock', 'paper', 'scissors'];

const results = document.getElementById('results');
const buttons = document.querySelectorAll('#buttons button')

let playerScore = 0;
let computerScore = 0;

let flag = true;

buttons.forEach((button) => button.addEventListener(
    'click',
    () => round(button.id),
));

function computerPlay() {
    return (Math.random() * moves.length) >> 0;
}

function playRound(playerSelection, computerSelection) {

    // 0 = tie, 1 = win, 2 = lose
    return (playerSelection - computerSelection + 3) % 3;
}

function round(playerSelectionString) {  
    if(!flag) return;

    playerSelection = moves.findIndex((a) => (a === playerSelectionString));
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);

    updateScore(result);
}

function updateScore(result) {
    if(result === 1) {
        playerScore++;
    } else if(result === 2) {
        computerScore++;
    }

    results.textContent = `${playerScore} - ${computerScore} `;

    if(playerScore >= 5 || computerScore >= 5) {
        results.textContent += `${playerScore >= 5? 'You win' : 'Computer wins'}!`

        flag = false;
        return;
    }

    if(result === 0) {
        results.textContent += ("It's a tie");
    } else if(result === 1) {
        results.textContent += (`You win! ${moves[playerSelection]} beats ${moves[computerSelection]}`);
    } else if(result === 2) {
        results.textContent += (`You lose! ${moves[computerSelection]} beats ${moves[playerSelection]}`);
    }
}