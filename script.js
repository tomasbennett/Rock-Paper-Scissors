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

        if(humanScore > computerScore){
            roundTotalDisplay.textContent += "\nCONGRATULATIONS!!! You beat the computer!";

        } else {
            roundTotalDisplay.textContent += "\nSorry, the computer has won this time!";

        }

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

    }

    switch (user) {
        case "rock":
            if (computer == "rock") {

                roundTotalDisplay.textContent += draw;

            } else if (computer == "paper") {

                computerScore++;

            } else {

                humanScore++;

            }

            break;

        case "paper":

            if (computer == "rock") {
                    
                humanScore++;
                
            } else if (computer == "paper") {

                roundTotalDisplay.textContent += draw;

            } else {

                computerScore++;

            }

            break;

        case "scissors":
            
            if (computer == "rock") {
                        
                computerScore++;
                
            } else if (computer == "paper") {

                humanScore++;

            } else {

                roundTotalDisplay.textContent += draw;

            }
        
            break;
    }
}


function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}