// Select buttons
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

// Function to calculate computer's move
function calculateComputerMove() {
    let moves = ["rock", "paper", "scissor"];
    const value = Math.floor(Math.random() * moves.length);
    return moves[value];
}

// Add event listeners
rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissor.addEventListener("click", () => game("scissor"));
let scoreval = document.querySelector(".score")
let curentscore =0
// Game function
function game(playerMove) {
    let computerMove = calculateComputerMove();

    if (computerMove === playerMove) {
        alert(`Match Tie! Both chose ${playerMove}.`);
    } else if (
        (playerMove === "rock" && computerMove === "scissor") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissor" && computerMove === "paper")
    ) {
        alert(`You win! ${playerMove} beats ${computerMove}.`);
        curentscore++
    } else {
        alert(`You lose! ${computerMove} beats ${playerMove}.`);
        curentscore--
    }
    scoreval.textContent=curentscore
}
let reset = document.querySelector(".reset")
reset.addEventListener("click",()=>resetscore())
function resetscore()
{
    scoreval.textContent=0;
}
