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
    document.getElementById('next-round').style.display="none";

    const rockBttn = document.getElementById('rock');
    const paperBttn = document.getElementById('paper');
    const scissorsBttn = document.getElementById('scissors');
    const responseP = document.getElementById('response-label-player');
    const responseC = document.getElementById('response-label-computer');
    const selections = document.getElementById('selections');
    const footer = document.getElementById('footer');
    const playerScoreLabel = document.getElementById('player-score');
    const computerScoreLabel = document.getElementById('computer-score');
    const nextRound = document.getElementById('next-round');
    let computerScore = 0;
    let userScore = 0;
    let itirations = 0;

    rockBttn.addEventListener('click', () => {rockIsClicked(); setTimeout(function() {computerBits("rock")},3000);});
    paperBttn.addEventListener('click', () => {paperIsClicked(); setTimeout(function() {computerBits("paper")},3000);});
    scissorsBttn.addEventListener('click', () => {scissorsIsClicked(); setTimeout(function() {computerBits("scissors")},3000);});
    nextRound.addEventListener('click', () => nextRoundClick());


    function nextRoundClick() {
        responseP.textContent = "";
        responseC.textContent = "";
        paperBttn.classList.remove("fade-out");
        scissorsBttn.classList.remove("fade-out");
        rockBttn.classList.remove("fade-out");
        paperBttn.style.display="flex"
        scissorsBttn.style.display="flex"
        rockBttn.style.display="flex"
        paperBttn.disabled = false;
        rockBttn.disabled = false;
        scissorsBttn.disabled = false;
        userSelection = "";
        const computerDiv = document.getElementById('resultImage');
        // computerDiv.removeChild(computerDivImage);
        selections.removeChild(computerDiv);
        document.getElementById('next-round').style.display="none";
        rockBttn.style.border = "";
        footer.textContent = "";
        nextRound.style.display = "none"


    }

    function rockIsClicked() {
        rockBttn.disabled = true;
        paperBttn.disabled = true;
        scissorsBttn.disabled = true;
        paperBttn.classList.add("fade-out");
        scissorsBttn.classList.add("fade-out");
        paperBttn.addEventListener('animationend', () => paperBttn.style.display="none");
        scissorsBttn.addEventListener('animationend', () => {scissorsBttn.style.display="none";});
    }

    function paperIsClicked() {
        rockBttn.disabled = true;
        paperBttn.disabled = true;
        scissorsBttn.disabled = true;
        rockBttn.classList.add("fade-out");
        scissorsBttn.classList.add("fade-out");
        rockBttn.addEventListener('animationend', () => rockBttn.style.display="none");
        scissorsBttn.addEventListener('animationend', () => {scissorsBttn.style.display="none";});
    }

    function scissorsIsClicked() {
        rockBttn.disabled = true;
        paperBttn.disabled = true;
        scissorsBttn.disabled = true;
        paperBttn.classList.add("fade-out");
        rockBttn.classList.add("fade-out");
        paperBttn.addEventListener('animationend', () => paperBttn.style.display="none");
        rockBttn.addEventListener('animationend', () => {rockBttn.style.display="none";});
    }


    function computerBits(userSelection) {
        responseP.textContent = "You chose\r\n" + userSelection;
        responseC.textContent = "Computer chose\r\n..."
        const computerDiv = document.createElement('div');
        computerDiv.setAttribute("id", "resultImage")
        selections.appendChild(computerDiv);
        let computerSelection = computerChoice();
        let computerDivImage = document.createElement('button');
        computerDivImage.innerHTML = `<image src="./img/${computerSelection}.png"/>`;
        computerDivImage.disabled = true;
        computerDivImage.classList.add("fade-in");
        computerDivImage.addEventListener('animationend', () => {responseC.textContent = "Computer chose\r\n" + computerSelection;
        setTimeout(function() {        
        let nextRound = document.getElementById('next-round');
        nextRound.style.display="flex";
        footer.textContent = result;},2000)
        if (itirations == 4) {nextRound.textContent = "THE LAST ROUND"}
        else if(itirations > 4) {
            nextRoundClick();
            document.getElementById('selections').style.display = "none";
            footer.textContent = "";
            nextRound.style.display = "none"
            const tempText = document.getElementById('temp-text');
            tempText.style.display="flex";
            const welcomeText = document.getElementById('welcome-text').style.display="flex";
            welcomeText.textContent = "Hope you enjoyed the game\r\nTo play again, click the button below"
            goButton.style.display = "none";
            let endButton = document.createElement('button');
            endButton.setAttribute("id", "try-again");
            endButton.textContent = "Try Again";
            endButton.addEventListener('click', () => {
                location.reload()});
                // computerScore = 0;
                // userScore = 0;
                // itirations = 0;
                // responseP.textContent = "";
                // responseC.textContent = "";
                // paperBttn.classList.remove("fade-out");
                // scissorsBttn.classList.remove("fade-out");
                // rockBttn.classList.remove("fade-out");
                // paperBttn.style.display="flex"
                // scissorsBttn.style.display="flex"
                // rockBttn.style.display="flex"
                // userSelection = "";
                // // const computerDiv = document.getElementById('resultImage');
                // // selections.removeChild(computerDiv);
                // document.getElementById('next-round').style.display="none";
                // rockBttn.style.border = "";
                // footer.textContent = "";
                // document.getElementById('selections').style.display="flex";
                // document.getElementById('temp-text').style.display="none";
                // endButton.style.display="none";
                // gameImproved()});

            tempText.appendChild(endButton);
            const goText = document.getElementById('welcome-text');
            goText.textContent = "";
            if (computerScore > userScore) {
                goText.innerHTML = "Hope you enjoyed playing the game<br>The final score is: <br><br>You: " + userScore + "<br>Computer: " + computerScore + "<br><br>YOU ARE A LOOOOOOOOOOOSER!!! :)";
            }
            else if (computerScore < userScore) {
                goText.innerHTML = "Hope you enjoyed playing the game<br>The final score is: <br><br>You: " + userScore + "<br>Computer: " + computerScore + "<br><br>YOU ARE THE WINNER!!! :)";
            }
            else if (computerScore = userScore) {
                goText.innerHTML = "Hope you enjoyed playing the game<br>The final score is: <br><br>You: " + userScore + "<br>Computer: " + computerScore + "<br><br>Neck in neck! Try again!";
            }
        }

    });


        let result = (playRound(computerSelection, userSelection));
        if (result.slice(0,5) == "You l") {
                
                computerScore ++;
                itirations ++;
            }
        else  if (result.slice(0,5) == "You w") {
         
            userScore ++;
            itirations ++;
            }
        else {
            itirations ++;
        }
        
        computerDiv.appendChild(computerDivImage);
        playerScoreLabel.textContent = "Your score is: \r\n" + userScore;
        computerScoreLabel.textContent = "Computer score is: \r\n" + computerScore;
        return(result);
    }
}
        // rockBttn.addEventListener('click', () => {
        //     paperBttn.classList.add("fade-out");
        //     scissorsBttn.classList.add("fade-out");
        //     paperBttn.addEventListener('animationend', () => paperBttn.style.display="none");
        //     scissorsBttn.addEventListener('animationend', () => {
        //         scissorsBttn.style.display="none";
        //         let userSelection = "rock"
        //         responseP.textContent = "You chose\r\nrock";
        //         responseC.textContent = "Computer chose\r\n..."
        //         const computerDiv = document.createElement('div');
        //         selections.appendChild(computerDiv);
        //         let computerSelection = computerChoice();
        //         let computerDivImage = document.createElement('button');
        //         computerDivImage.innerHTML = `<image src="./img/${computerSelection}.png"/>`;
        //         computerDiv.appendChild(computerDivImage);
        //         computerDivImage.classList.add("fade-in");
        //         computerDivImage.addEventListener('animationend', () => {
        //             responseC.textContent = "Computer chose\r\n" + computerSelection
        //             let result = (playRound(computerSelection, userSelection));
        //             if (result.slice(0,5) == "You l") {
        //                     footer.textContent = result;
        //                     computerDivImage.style.border = "20px solid rgba(0,128,0,0.5)"
        //                     rockBttn.style.border = "20px solid rgba(255,0,0,0.5)"
        //                     computerScore ++;
        //                 }
        //             else  if (result.slice(0,5) == "You w") {
        //                 footer.textContent = result;
        //                 rockBttn.style.border = "20px solid rgba(0,128,0,0.5)"
        //                 computerDivImage.style.border = "20px solid rgba(255,0,0,0.5)"
        //                 userScore ++;
        //                 }
        //             else {
        //                 footer.textContent = result; 
        //             }

        //             playerScoreLabel.textContent = "Your score is: \r\n" + userScore;
        //             computerScoreLabel.textContent = "Computer score is: \r\n" + computerScore;
        //             document.getElementById('next-round').style.display="flex";

                    
        //     }); 
        //         }); 

        // })
//         paperBttn.addEventListener('click', () => {
//             rockBttn.classList.add("fade-out");
//             scissors.classList.add("fade-out");
//             rockBttn.addEventListener('animationend', () => rockBttn.style.display="none");
//             scissorsBttn.addEventListener('animationend', () => {
//                 scissorsBttn.style.display="none";
//                 let userSelection = "paper"
//                 responseP.textContent = "You chose\r\npaper";
//                 responseC.textContent = "Computer chose\r\n..."
//                 const computerDiv = document.createElement('div');
//                 selections.appendChild(computerDiv);
//                 let computerSelection = computerChoice();
//                 let computerDivImage = document.createElement('button');
//                 computerDivImage.innerHTML = `<image src="./img/${computerSelection}.png"/>`;
//                 computerDiv.appendChild(computerDivImage);
//                 computerDivImage.classList.add("fade-in");
//                 computerDivImage.addEventListener('animationend', () => {
//                     responseC.textContent = "Computer chose\r\n" + computerSelection
//                     let result = (playRound(computerSelection, userSelection));
//                     if (result.slice(0,5) == "You l") {
//                             footer.textContent = result;
//                             computerDivImage.style.border = "20px solid green"
//                             paperBttn.style.border = "20px solid red"
//                             computerScore ++;
//                         }
//                     else  if (result.slice(0,5) == "You w") {
//                         footer.textContent = result;
//                         paperBttn.style.border = "20px solid green"
//                         computerDivImage.style.border = "20px solid red"
//                         userScore ++;
//                         }
//                     else {
//                         footer.textContent = result; 
//                     }
//                     playerScoreLabel.textContent = "Your score is: \r\n" + userScore;
//                     computerScoreLabel.textContent = "Computer score is: \r\n" + computerScore;
//             });
//                 });
        
//         })
 
//         scissorsBttn.addEventListener('click', () => {
//             rockBttn.classList.add("fade-out");
//             paperBttn.classList.add("fade-out");
//             rockBttn.addEventListener('animationend', () => rockBttn.style.display="none");
//             paperBttn.addEventListener('animationend', () => {
//                 paperBttn.style.display="none";
//                 let userSelection = "scissors"
//                 responseP.textContent = "You chose\r\nscissors";
//                 responseC.textContent = "Computer chose\r\n..."
//                 const computerDiv = document.createElement('div');
//                 selections.appendChild(computerDiv);
//                 let computerSelection = computerChoice();
//                 let computerDivImage = document.createElement('button');
//                 computerDivImage.innerHTML = `<image src="./img/${computerSelection}.png"/>`;
//                 computerDiv.appendChild(computerDivImage);
//                 computerDivImage.classList.add("fade-in");
//                 computerDivImage.addEventListener('animationend', () => {
//                     responseC.textContent = "Computer chose\r\n" + computerSelection
//                     let result = (playRound(computerSelection, userSelection));
//                     if (result.slice(0,5) == "You l") {
//                             footer.textContent = result;
//                             computerDivImage.style.border = "20px solid green"
//                             scissorsBttn.style.border = "20px solid red"
//                             computerScore ++;
//                         }
//                     else  if (result.slice(0,5) == "You w") {
//                         footer.textContent = result;
//                         scissorsBttn.style.border = "20px solid green"
//                         computerDivImage.style.border = "20px solid red"
//                         userScore ++;
//                         }
//                     else {
//                         footer.textContent = result; 
//                     }
//                     playerScoreLabel.textContent = "Your score is: \r\n" + userScore;
//                     computerScoreLabel.textContent = "Computer score is: \r\n" + computerScore;
//             });
//                 });
        
//         })
//     }

// // old code - may be re-factored
// // let computerScore = 0
// // let userScore = 0

// function game() {               //main game function
//     alert("Welcome to Rock, Paper and Scissors. This game will take your through 5 rounds of the game. Each round you will be asked to enter Rock, Paper or Scissors. See if you can beat the computer! Good luck!");

//     for(let i=1; i<6; i++) {
//         try {               //try catch to capture Cancel button
//             let userSelection = prompt("Round " + i + " please enter rock, paper or scissors!");
            
//             if (validateInput(userSelection) == false) {
//                 while (validateInput(userSelection) == false)  {
//                     alert("Incorrect input, please ONLY enter rock, paper or scissors!");
//                     i --;
//                     break;
//                 }
//             }
//             else {

//                 let result = (playRound(computerChoice(), userSelection));
//                     if (result.slice(0,5) == "You l") {
//                         computerScore ++;  
//                     }
//                     else  if (result.slice(0,5) == "You w") {
//                         userScore ++;      
//                     }
                
//                     if (i<5) {
//                         alert(result);
//                         alert("The score is \nComputer: " + computerScore + "\nUser: " + userScore);
//                     }
//                     else if (i==5 && (computerScore>userScore)) {
//                         alert(result);
//                         alert("The final score is ***DRUMROLL*** \nComputer: " + computerScore + "\nUser: " + userScore +"\nBetter luck next time!");
//                     }
//                     else if (i==5 && (computerScore<userScore)) {
//                         alert(result);
//                         alert("The final score is ***DRUMROLL*** \nComputer: " + computerScore + "\nUser: " + userScore +"\nCongratulations! Well played!");
//                     }
//                     else if (i==5 && (computerScore=userScore)) {
//                         alert(result);
//                         alert("The final score is ***DRUMROLL*** \nComputer: " + computerScore + "\nUser: " + userScore +"\nNeck in neck!What a game!");
//                     }
//             }

//         } catch (e) {
//             if (e instanceof TypeError) {
//                 alert("Thanks for playing!!");
//                 break
//               }
//         } 
        
//     }
//     let replayPrompt = prompt("Type yes if you would like to play another game");
//     if (replayPrompt.toLowerCase() === "yes") {
//         game();
//     }
//     else {
//         alert("Until next time!");
//     }
// }

