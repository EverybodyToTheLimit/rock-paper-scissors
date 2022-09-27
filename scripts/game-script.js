function computerChoice () {
    arr = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomItem = arr[randomIndex];
    return randomItem;
}

function playRound (computerSelection, playerSelection) {
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

function game() {
    alert("Welcome to Rock, Paper and Scissors. This game will take your through 5 rounds of the game. Each round you will be asked to enter Rock, Paper or Scissors. See if you can beat the computer! Good luck!");
    for(let i=1; i<6; i++) {
        try {    
            let userSelection = prompt("Round " + i + " please enter rock, paper or scissors!").toLowerCase;
            while ((userSelection !== "rock") && (userSelection !== "paper") && (userSelection !== "scissors")) 
            {
                userSelection = prompt("Wrong input. Please only enter: rock, paper or scissors");
            }
        } catch (e) {
            if (e instanceof TypeError) {
                alert("Thanks for playing!!");
                break
              }
        }    
    }
}

