function computerChoice () {  //generate computer answer from array
    arr = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomItem = arr[randomIndex];
    return randomItem;
}

function playRound (computerSelection, playerSelection) {  //function to run a single round of game
    if (playerSelection.toLowerCase() == computerSelection) {
        let gameResult = "It's a stalemate! You both drew " + playerSelection;
        return gameResult;
    }
    else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "paper") || ((playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")) || (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")) {
        let gameResult = "You loose! " + computerSelection + " beats " + playerSelection;
        return gameResult;
    }
    else {
        let gameResult = "You win! " + playerSelection + " beats " + computerSelection;
        return gameResult;
    }
}

function validateInput (userInput) {  //function to validate correct input
    if ((userInput.toLowerCase() !== "rock") && (userInput.toLowerCase() !== "paper") && (userInput.toLowerCase() !== "scissors"))
    {
        return false;
    }
    else {
        return true;
    }
}

let computerScore = 0
let userScore = 0

function game() {               //main game function
    alert("Welcome to Rock, Paper and Scissors. This game will take your through 5 rounds of the game. Each round you will be asked to enter Rock, Paper or Scissors. See if you can beat the computer! Good luck!");

    for(let i=1; i<6; i++) {
        try {               //try catch to capture Cancel button
            let userSelection = prompt("Round " + i + " please enter rock, paper or scissors!");
            
            if (validateInput(userSelection) == false) {
                while (validateInput(userSelection) == false)  {
                    alert("Incorrect input, please ONLY enter rock, paper or scissors!");
                    i --;
                    break;
                }
            }
            else {

                let result = (playRound(computerChoice(), userSelection));
                    if (result.slice(0,5) == "You l") {
                        computerScore ++;  
                    }
                    else  if (result.slice(0,5) == "You w") {
                        userScore ++;      
                    }
                
                    if (i<5) {
                        console.log(result);
                        console.log("The score is \nComputer: " + computerScore + "\nUser: " + userScore);
                    }
                    else if (i==5 && (computerScore>userScore)) {
                        console.log(result);
                        console.log("The final score is ***DRUMROLL*** \nComputer: " + computerScore + "\nUser: " + userScore +"\nBetter luck next time!");
                    }
                    else if (i==5 && (computerScore<userScore)) {
                        console.log(result);
                        console.log("The final score is ***DRUMROLL*** \nComputer: " + computerScore + "\nUser: " + userScore +"\nCongratulations! Well played!");
                    }
                    else if (i==5 && (computerScore=userScore)) {
                        console.log(result);
                        console.log("The final score is ***DRUMROLL*** \nComputer: " + computerScore + "\nUser: " + userScore +"\nNeck in neck!What a game!");
                    }
            }

        } catch (e) {
            if (e instanceof TypeError) {
                alert("Thanks for playing!!");
                break
              }
        } 
        
    }
}

