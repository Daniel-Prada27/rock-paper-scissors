const options = ["Rock", "Paper", "Scissors"];
// let computerChoice;
let userChoice;

let userWinCount = 0;
let computerWinCount = 0;

function getUserChoice() {
    userChoice = window.prompt("Enter your choice: ");
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
    if (userChoice != "Rock" && userChoice != "Paper" && userChoice != "Scissors"){
        alert("Try again");
        getUserChoice();
    }

    return userChoice;
}

function getComputerChoice(){
    let optionPicker = Math.floor(Math.random()*options.length);
    let computerChoice = options[optionPicker];
    return computerChoice;
}

function round(){
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log("User choice: " + userChoice);
    console.log("Computer choice: " + computerChoice);

    if (userChoice == computerChoice){
        console.log("Draw");
    } else if (userChoice == "Rock") {
        if (computerChoice == "Paper") {
            console.log("Computer wins");
            computerWinCount++;
        } else if (computerChoice == "Scissors"){
            console.log("User wins");
            userWinCount++;
        }
    } else if (userChoice == "Scissors"){
        if (computerChoice == "Rock"){
            console.log("Computer wins");
            computerWinCount++;
        } else if (computerChoice == "Paper"){
            console.log("User wins");
            userWinCount++;
        }
    } else if (userChoice == "Paper"){
        if (computerChoice == "Rock"){
            console.log("User wins");
            userWinCount++;
        } else if (computerChoice == "Scissors"){
            console.log("Computer wins");
            computerWinCount++;
        }
    }
}

function game(numberOfRounds){
    for (i=1; i <= numberOfRounds; i++ ){
        round();
    }

    console.log("User wins: " + userWinCount);
    console.log("Computer wins: " + computerWinCount);
    console.log(WhoWon() + " is the winner!!!");
}

function WhoWon(){
    let finalWinner;
    if (userWinCount > computerWinCount){
        finalWinner = "User";
    } else if (userWinCount < computerWinCount){
        finalWinner = "Computer";
    } else {
        finalWinner = "Draw"
    }
    return finalWinner;
}



