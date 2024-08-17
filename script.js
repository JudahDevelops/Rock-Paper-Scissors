const playerScore = document.getElementById("player-score");
const compScore = document.getElementById("comp-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const update = document.getElementById("update");
const resultBox = document.getElementById("results");
const matchResult = document.getElementById("match-result");
const reset = document.getElementById("reset");
const game = document.getElementById("game");

let option = "";
let compCount = 0;
let playerCount = 0;

const generateComp = () => {
    const random  = Math.floor((Math.random() * 3) + 1);
    switch (random) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3: 
            return "scissors";
            break
    }
}

rock.addEventListener("click", () => {
    option = "rock";
    playGame();
});

paper.addEventListener("click", () => {
    option = "paper";
    playGame();
});

scissors.addEventListener("click", () => {
    option = "scissors";
    playGame();
});

const updatePlayerScore = (count) => {
    
}

const updateCompScore = (count) => {
    update.textContent = "Computer socres a point!";
    count ++;
    compScore.textContent = count;
}

const playGame = () => {
    const compChoice = generateComp();
    const playerChoice = option;

        if (playerChoice === "rock" && compChoice === "scissors" || 
        playerChoice === "paper" && compChoice === "rock" || 
        playerChoice === "scissors" && compChoice === "paper") {

            update.textContent = "Player socres a point!";   
            playerCount++;
            playerScore.textContent = playerCount;

    } else if (playerChoice === compChoice) {
        update.textContent = "It's a tie!";
    } else {
        update.textContent = "Computer socres a point!";
        compCount++;
        compScore.textContent = compCount;
    }

    if (playerCount === 2 || compCount === 2) {
        if (playerCount > compCount) {
            matchResult.textContent = "Player Wins!";
            results.style.display = "block";
            game.style.display = "none";
        } else if (compCount > playerCount) {
            matchResult.textContent = "Computer Wins!";
            results.style.display = "block";
            game.style.display = "none";
        }
    }
}

reset.addEventListener("click", () => {
    playerCount = 0;
    compCount = 0;
    playerScore.textContent = 0;
    compScore.textContent = 0;
    update.textContent = "Pick an option!";
    results.style.display = "none";
    game.style.display = "block";
})

    
