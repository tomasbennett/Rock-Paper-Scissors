const choices = ["rock", "paper", "scissors"];

let roundNumber = 1;
let humanScore = 0;
let computerScore = 0;

function getHumanChoice(userInput) {
    const humanChoice = prompt(userInput).toLowerCase();

    if (choices.includes(humanChoice)) {
        return humanChoice;
    } else {
        return getHumanChoice("Please input a valid choice, either rock, paper or scissors");
    }
}

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

const draw = "This round was a draw!";

function playRound(user, computer) {

    console.log(`You chose ${user}, and the computer chose ${computer}:`);

    switch (user) {
        case "rock":
            if (computer == "rock") {

                console.log(draw);

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

                console.log(draw);

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

                console.log(draw);

            }
        
            break;
    }
}

function playGame() {

    let humanChoice;
    let computerChoice;

    while (humanScore < 3 && computerScore < 3) {
        humanChoice = getHumanChoice("Please input your choice, either rock, paper or scissors");
        computerChoice = getComputerChoice();

        console.log(`Round ${roundNumber}:`);

        playRound(humanChoice, computerChoice);

        console.log(`Computer: ${computerScore}
You: ${humanScore}`);

        roundNumber++;
    }

    if (humanScore > computerScore) {
        console.log("CONGRATULATIONS!!! You beat the computer!");
    } else {
        console.log("Sorry, the computer has won this time!");
    }

    roundNumber = 1;
    humanScore = 0;
    computerScore = 0;
}
