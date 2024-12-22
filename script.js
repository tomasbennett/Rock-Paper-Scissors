const choices = ["rock", "paper", "scissors"];

const humanTotalDisplay = document.querySelector('.human');
const computerTotalDisplay = document.querySelector('.computer');
const roundTotalDisplay = document.querySelector('.round-number');

let roundNumber = 1;
let humanScore = 0;
let computerScore = 0;
let computerChoice;
let endCondition;

function playGame(humanChoice) {

    computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    humanTotalDisplay.textContent = humanScore;
    computerTotalDisplay.textContent = computerScore;

    roundNumber++;

    endCondition = humanScore >= 3 || computerScore >= 3;
    if(endCondition){

        roundTotalDisplay.textContent += humanScore > computerScore ?
            "\nCONGRATULATIONS!!! You beat the computer!" :
            "\nSorry, the computer has won this time!";

        roundNumber = 1;
        humanScore = 0;
        computerScore = 0;
    }
    

}


const draw = " This round was a draw!";
function playRound(user, computer) {

    roundTotalDisplay.textContent = `Round ${roundNumber}: You chose ${user}, and the computer chose ${computer}:`;

    if(user === computer){
        roundTotalDisplay.textContent += draw;

    } else {
        switch (user) {
            case "rock":
                computer == "paper" ? computerScore++: humanScore++;
                break;
    
            case "paper":
                computer == "scissors" ? computerScore++: humanScore++;
                break;
    
            case "scissors":
                computer == "rock" ? computerScore++: humanScore++;
                break;
        }

    }

}


function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}