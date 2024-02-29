const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const totalResult = document.getElementById("totalResult");
let playerWins = 0;
let computerWins = 0;
function playGame(playerChoice){
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    switch(computerChoice){
        case 1:
            computerDisplay.textContent = "COMPUTER: ROCK";
            break;
        case 2:
            computerDisplay.textContent = "COMPUTER: PAPER";
            break;
        case 3:
            computerDisplay.textContent = "COMPUTER: SCISSORS";
            break;
    }
    switch(playerChoice){
        case 1:
            playerDisplay.textContent = "YOU: ROCK";
            break;
        case 2:
            playerDisplay.textContent = "YOU: PAPER";
            break;
        case 3:
            playerDisplay.textContent = "YOU: SCISSORS";
            break;
    }
    if(playerChoice === computerChoice){
        resultDisplay.classList.remove("won");
        resultDisplay.classList.remove("lost");
        resultDisplay.textContent = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case 1:
                if(computerChoice === 3){
                    resultDisplay.textContent = "YOU WON!";
                    resultDisplay.classList.remove("lost");
                    resultDisplay.classList.add("won");
                    playerWins++;
                }
                else{
                    resultDisplay.textContent = "YOU LOST!";
                    resultDisplay.classList.remove("won");
                    resultDisplay.classList.add("lost");
                    computerWins++;
                }
                break;
            case 2:
                if(computerChoice === 1){
                    resultDisplay.textContent = "YOU WON!";
                    resultDisplay.classList.remove("lost");
                    resultDisplay.classList.add("won");
                    playerWins++;
                }
                else{
                    resultDisplay.textContent = "YOU LOST!";
                    resultDisplay.classList.remove("won");
                    resultDisplay.classList.add("lost");
                    computerWins++;
                }
                break;
            case 3:
                if(computerChoice === 2){
                    resultDisplay.textContent = "YOU WON!";
                    resultDisplay.classList.remove("lost");
                    resultDisplay.classList.add("won");
                    playerWins++;
                }
                else{
                    resultDisplay.textContent = "YOU LOST!";
                    resultDisplay.classList.remove("won");
                    resultDisplay.classList.add("lost");
                    computerWins++;
                }
                break;
        }
    }
    playerResult.textContent = playerWins;
    playerResult.classList.add("won");
    computerResult.textContent = computerWins;
    computerResult.classList.add("lost");
}