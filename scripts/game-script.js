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
        let gameResult = "You loose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection;
        return gameResult;
    }
    else {
        let gameResult = "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
        return gameResult;
    }
}

// function validateInput (userInput) {  // Don't need anymore as user inputs are fixed by button clicks
//     if ((userInput.toLowerCase() !== "rock") && (userInput.toLowerCase() !== "paper") && (userInput.toLowerCase() !== "scissors"))
//     {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

const goButton = document.getElementById('start-game');     //Start of the game, introduce the rules and initiate with buttonclick
goButton.addEventListener('click', function(){ gameImproved() });


function gameImproved() {           //main game function
    document.getElementById('selections').style.display="flex";
    document.getElementById('temp-text').style.display="none";

    const rockBttn = document.getElementById('rock');
    const paperBttn = document.getElementById('paper');
    const scissorsBttn = document.getElementById('scissors');
    const responseP = document.getElementById('response-label-player');
    const responseC = document.getElementById('response-label-computer');
    const selections = document.getElementById('selections');
    const footer = document.getElementById('footer');
    let computerScore = 0
    let userScore = 0

        if (rockBttn.addEventListener('click', () => {
            paperBttn.classList.add("fade-out");
            scissorsBttn.classList.add("fade-out");
            paperBttn.addEventListener('animationend', () => paperBttn.style.display="none");
            scissorsBttn.addEventListener('animationend', () => {
                scissorsBttn.style.display="none";
                let userSelection = "rock"
                responseP.textContent = "You chose\r\nrock";
                responseC.textContent = "Computer chose\r\n..."
                const computerDiv = document.createElement('div');
                selections.appendChild(computerDiv);
                let computerSelection = computerChoice();
                let computerDivImage = document.createElement('button');
                computerDivImage.innerHTML = `<image src="./img/${computerSelection}.png"/>`;
                computerDiv.appendChild(computerDivImage);
                computerDivImage.classList.add("fade-in");
                computerDivImage.addEventListener('animationend', () => {
                    responseC.textContent = "Computer chose\r\n" + computerSelection
                    let result = (playRound(computerSelection, userSelection));
                    if (result.slice(0,5) == "You l") {
                            footer.textContent = result;
                            computerDivImage.style.border = "20px solid green"
                            rockBttn.style.border = "20px solid red"
                            userScore ++;
                        }
                    else  if (result.slice(0,5) == "You w") {
                        footer.textContent = result;
                        rockBttn.style.border = "20px solid green"
                        computerDivImage.style.border = "20px solid red"
                        computerScore ++;
                        }
                    else {
                        footer.textContent = result; 
                    }
            });
                });
        



        })) {}

        else if (paperBttn.addEventListener('click', () => {
            rockBttn.classList.add("fade-out");
            scissors.classList.add("fade-out");
            rockBttn.addEventListener('animationend', () => rockBttn.style.display="none");
            scissorsBttn.addEventListener('animationend', () => {
                scissorsBttn.style.display="none";
                let userSelection = "paper"
                responseP.textContent = "You chose\r\npaper";
                responseC.textContent = "Computer chose\r\n..."
                const computerDiv = document.createElement('div');
                selections.appendChild(computerDiv);
                let computerSelection = computerChoice();
                let computerDivImage = document.createElement('button');
                computerDivImage.innerHTML = `<image src="./img/${computerSelection}.png"/>`;
                computerDiv.appendChild(computerDivImage);
                computerDivImage.classList.add("fade-in");
                computerDivImage.addEventListener('animationend', () => {
                    responseC.textContent = "Computer chose\r\n" + computerSelection
                    let result = (playRound(computerSelection, userSelection));
                    if (result.slice(0,5) == "You l") {
                            footer.textContent = result;
                            computerDivImage.style.border = "20px solid green"
                            paperBttn.style.border = "20px solid red"
                            userScore ++;
                        }
                    else  if (result.slice(0,5) == "You w") {
                        footer.textContent = result;
                        paperBttn.style.border = "20px solid green"
                        computerDivImage.style.border = "20px solid red"
                        computerScore ++;
                        }
                    else {
                        footer.textContent = result; 
                    }
            });
                });
        
        })) {}
 
        else if (scissorsBttn.addEventListener('click', () => {
            rockBttn.classList.add("fade-out");
            paperBttn.classList.add("fade-out");
            rockBttn.addEventListener('animationend', () => rockBttn.style.display="none");
            paperBttn.addEventListener('animationend', () => {
                paperBttn.style.display="none";
                let userSelection = "scissors"
                responseP.textContent = "You chose\r\nscissors";
                responseC.textContent = "Computer chose\r\n..."
                const computerDiv = document.createElement('div');
                selections.appendChild(computerDiv);
                let computerSelection = computerChoice();
                let computerDivImage = document.createElement('button');
                computerDivImage.innerHTML = `<image src="./img/${computerSelection}.png"/>`;
                computerDiv.appendChild(computerDivImage);
                computerDivImage.classList.add("fade-in");
                computerDivImage.addEventListener('animationend', () => {
                    responseC.textContent = "Computer chose\r\n" + computerSelection
                    let result = (playRound(computerSelection, userSelection));
                    if (result.slice(0,5) == "You l") {
                            footer.textContent = result;
                            computerDivImage.style.border = "20px solid green"
                            scissorsBttn.style.border = "20px solid red"
                            userScore ++;
                        }
                    else  if (result.slice(0,5) == "You w") {
                        footer.textContent = result;
                        scissorsBttn.style.border = "20px solid green"
                        computerDivImage.style.border = "20px solid red"
                        computerScore ++;
                        }
                    else {
                        footer.textContent = result; 
                    }
            });
                });
        
        })) {}
};

// old code - may be re-factored
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
                        alert(result);
                        alert("The score is \nComputer: " + computerScore + "\nUser: " + userScore);
                    }
                    else if (i==5 && (computerScore>userScore)) {
                        alert(result);
                        alert("The final score is ***DRUMROLL*** \nComputer: " + computerScore + "\nUser: " + userScore +"\nBetter luck next time!");
                    }
                    else if (i==5 && (computerScore<userScore)) {
                        alert(result);
                        alert("The final score is ***DRUMROLL*** \nComputer: " + computerScore + "\nUser: " + userScore +"\nCongratulations! Well played!");
                    }
                    else if (i==5 && (computerScore=userScore)) {
                        alert(result);
                        alert("The final score is ***DRUMROLL*** \nComputer: " + computerScore + "\nUser: " + userScore +"\nNeck in neck!What a game!");
                    }
            }

        } catch (e) {
            if (e instanceof TypeError) {
                alert("Thanks for playing!!");
                break
              }
        } 
        
    }
    let replayPrompt = prompt("Type yes if you would like to play another game");
    if (replayPrompt.toLowerCase() === "yes") {
        game();
    }
    else {
        alert("Until next time!");
    }
}

