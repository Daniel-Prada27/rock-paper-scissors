const options = ["Rock", "Paper", "Scissors"];
let optionPicker = Math.floor(Math.random()*options.length);
let computerChoice = options[optionPicker];
let userChoice;

function getUserChoice() {
    userChoice = window.prompt("Enter your choice: ");
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
    if (userChoice != "Rock" && userChoice != "Paper" && userChoice != "Scissors"){
        alert("Try again");
        getUserChoice();
    }

    return userChoice;
}

function round(){
    let userChoice = getUserChoice();

    console.log("User choice: " + userChoice);
    console.log("Computer choice: " + computerChoice);

    if (userChoice == computerChoice){
        console.log("Draw");
    } else if (userChoice == "Rock") {
        if (computerChoice == "Paper") {
            console.log("Computer wins");
        } else if (computerChoice == "Scissors"){
            console.log("User wins");
        }
    } else if (userChoice == "Scissors"){
        if (computerChoice == "Rock"){
            console.log("Computer wins");
        } else if (computerChoice == "Paper"){
            console.log("User wins");
        }
    } else if (userChoice == "Paper"){
        if (computerChoice == "Rock"){
            console.log("User wins");
        } else if (computerChoice == "Scissors"){
            console.log("Computer wins");
        }
    }
}





