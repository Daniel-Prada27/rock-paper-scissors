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





