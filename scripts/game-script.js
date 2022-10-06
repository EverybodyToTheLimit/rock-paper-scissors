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



const goButton = document.getElementById('start-game');     //Start of the game, introduce the rules and initiate with buttonclick
goButton.addEventListener('click', function(){ gameImproved() });


function gameImproved() {           //main game function



    document.getElementById('selections').style.display="flex";     //Prepare screen for first game by hiding welcome message
    document.getElementById('temp-text').style.display="none";
    document.getElementById('next-round').style.display="none";

    const rockBttn = document.getElementById('rock');       //Declare variables for DOM components used in the project + score and iteration counters
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

    rockBttn.addEventListener('click', () => {rockIsClicked(); setTimeout(function() {computerBits("rock")},3000);});       //Add event listeners for each selection button with 3 sec wait to allow animation to coplete
    paperBttn.addEventListener('click', () => {paperIsClicked(); setTimeout(function() {computerBits("paper")},3000);});
    scissorsBttn.addEventListener('click', () => {scissorsIsClicked(); setTimeout(function() {computerBits("scissors")},3000);});
    nextRound.addEventListener('click', () => nextRoundClick());


    function nextRoundClick() {         //Cleanup function returning all components to original state. To be used at the end of a single game
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

    function rockIsClicked() {          //Rock selection function
        rockBttn.disabled = true;
        paperBttn.disabled = true;
        scissorsBttn.disabled = true;
        paperBttn.classList.add("fade-out");
        scissorsBttn.classList.add("fade-out");
        paperBttn.addEventListener('animationend', () => paperBttn.style.display="none");
        scissorsBttn.addEventListener('animationend', () => {scissorsBttn.style.display="none";});
    }

    function paperIsClicked() {         //Paper selection function
        rockBttn.disabled = true;
        paperBttn.disabled = true;
        scissorsBttn.disabled = true;
        rockBttn.classList.add("fade-out");
        scissorsBttn.classList.add("fade-out");
        rockBttn.addEventListener('animationend', () => rockBttn.style.display="none");
        scissorsBttn.addEventListener('animationend', () => {scissorsBttn.style.display="none";});
    }

    function scissorsIsClicked() {      //Scissors selection function
        rockBttn.disabled = true;
        paperBttn.disabled = true;
        scissorsBttn.disabled = true;
        paperBttn.classList.add("fade-out");
        rockBttn.classList.add("fade-out");
        paperBttn.addEventListener('animationend', () => paperBttn.style.display="none");
        rockBttn.addEventListener('animationend', () => {rockBttn.style.display="none";});
    }


    function computerBits(userSelection) {      //Function to display computer selection, calculate score and track progress of the game
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
        if (itirations == 4) {nextRound.textContent = "THE LAST ROUND"}     //Game progress tracker if statement, captures when it's the last round
        else if(itirations > 4) {
            // nextRoundClick();
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
            tempText.appendChild(endButton);
            const goText = document.getElementById('welcome-text');
            goText.textContent = "";
            if (computerScore > userScore) {
                goText.innerHTML = "Hope you enjoyed playing the game!<br>The final score is: <br><br>You: " + userScore + "<br>Computer: " + computerScore + "<br><br>YOU ARE A LOOOOOOOOOOOSER!!! :)";
                nextRound.style.display="none";
                footer.textContent="";
            }
            else if (computerScore < userScore) {
                goText.innerHTML = "Hope you enjoyed playing the game!<br>The final score is: <br><br>You: " + userScore + "<br>Computer: " + computerScore + "<br><br>YOU ARE THE WINNER!!! :)";
                nextRound.style.display="none";
                footer.textContent="";
            }
            else if (computerScore = userScore) {
                goText.innerHTML = "Hope you enjoyed playing the game!<br>The final score is: <br><br>You: " + userScore + "<br>Computer: " + computerScore + "<br><br>Neck in neck! Try again!";
                nextRound.style.display="none";
                footer.textContent="";
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