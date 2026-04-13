// // core logic of the game
// import swal from 'sweetalert';

let humanScore = 0;
let computerScore = 0;
let roundMessage1 = "Coose your weapon"
let roundMessage2 = "first to score 5 points wins game"
let HumanChoosenSign = "?"
let ComputerChoosenSign = "?"

const playerSign = document.querySelector(".playerSign");
const computerSign = document.querySelector(".computerSign");

const playerResult = document.querySelector(".playerResult");
const computerResult = document.querySelector(".computerResult");

const roundMess1 = document.querySelector("#roundMess1");
const roundMess2 = document.querySelector("#roundMess2");
const roundResult = document.querySelector(".roundResult")



// HumanCurrentScore = "Player: " + humanScore;
// computerCurrentScore = "Computer: " + computerScore;

// const roundMess1 = document.getElementById(roundMess1)
// roundMess1.textContent = "roundMess1"
// roundMess1.append(roundMess1)
function getComputerChoice(){ 
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };
    let randomNo = getRandomInt(3);
    if(randomNo==0){
        return "rock";
    }
    else if (randomNo==1) {
        return "paper";
    } else {
        return "scissor";
    }
};

const rockBtn = document.getElementById("rockBtn"); // Select button
    rockBtn.addEventListener("click", ()=> playRound("rock")); // Assign new valu;
const paperBtn = document.getElementById("paperBtn"); 
    paperBtn.addEventListener("click", ()=>playRound("paper"));
const scissorBtn = document.getElementById("scissorBtn");
    scissorBtn.addEventListener("click", ()=> playRound("scissor"));
    // return humanChoice
// }



function playRound(humanSelection){
    // let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    if(humanSelection=="rock"&&computerSelection=="rock"){
        roundMessage1 = "It's a tie!"
        roundMessage2 = "Rock ties with Rock";
        HumanChoosenSign = "✊";
        ComputerChoosenSign = "✊";
    }
    else if (humanSelection=="rock"&&computerSelection=="paper") {
        computerScore ++ ;
        roundMessage1 = "You lose!" 
        roundMessage2 = "Paper beats Rocks";
        HumanChoosenSign = "✊";
        ComputerChoosenSign = "✋";
    }
    else if (humanSelection=="rock"&&computerSelection=="scissor") {
        humanScore ++;
        roundMessage1 = "You Won!"
        roundMessage2 = "Rock beats Scissors";
        HumanChoosenSign = "✊";
        ComputerChoosenSign = "✌";
    }
    else if (humanSelection=="paper"&&computerSelection=="paper") {
        roundMessage1 = "It's a tie!"
        roundMessage2 = "Paper ties with Paper";
        HumanChoosenSign = "✋";
        ComputerChoosenSign = "✋";
    }
    else if (humanSelection=="paper"&&computerSelection=="scissor") {
        computerScore ++;
        roundMessage1 = "You Lose!"
        roundMessage2 = "Scissor beats Papers";
        HumanChoosenSign = "✋";
        ComputerChoosenSign = "✌";
    }
    else if (humanSelection=="paper"&&computerSelection=="rock") {
        humanScore ++;
        roundMessage1 = "You Won!"
        roundMessage2 = "Paper beats Scissors";
        HumanChoosenSign = "✋";
        ComputerChoosenSign = "✊";
    }
    else if (humanSelection=="scissor"&&computerSelection=="scissor") {
        roundMessage1 = "It's a tie!";
        roundMessage2 = "Scissors ties with Scissors";
        HumanChoosenSign = "✌";
        ComputerChoosenSign = "✌";
    }
    else if (humanSelection=="scissor"&&computerSelection=="paper") {
        humanScore ++;
        roundMessage1 = "You Won!";
        roundMessage2 = "Scissor beats Papers";
        HumanChoosenSign =  "✌";
        ComputerChoosenSign = "✋";
    }
    else if (humanSelection=="scissor"&&computerSelection=="rock") {
        computerScore ++;
        roundMessage1 = "You Lose!";
        roundMessage2 = "Rock beats Scissors";
        HumanChoosenSign =  "✌";
        ComputerChoosenSign = "✊";
    }
    playerSign.textContent = HumanChoosenSign
    computerSign.textContent = ComputerChoosenSign
    roundResult.textContent =  `Player: ${humanScore} Computer: ${computerScore}`;
    roundMess1.textContent = roundMessage1
    roundMess2.textContent = roundMessage2

    checkGameEnd();
    // document.writeln(`Player: ${humanScore} Computer: ${computerScore}`);

}

function checkGameEnd(){ 
    if(humanScore===5||computerScore===5)
        {if(humanScore > computerScore){
            swal("You Won!", "Play again", "success");
        }
        else if(humanScore < computerScore){
            swal("You Loss!", "Play again", "error");
        }
        humanScore = 0;
        computerScore = 0;
}}

// const body = document.body
// const div = document.querySelector("div")

roundMess1.textContent = roundMessage1
roundMess2.textContent = roundMessage2


playerSign.textContent = HumanChoosenSign
computerSign.textContent = ComputerChoosenSign
roundResult.textContent =  `Player: ${humanScore} Computer: ${computerScore}`;

























