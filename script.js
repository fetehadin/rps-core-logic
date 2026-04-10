let humanScore = 0;
let computerScore = 0;

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
// console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("enter ur choice");
    return humanChoice.toLowerCase()
}


// console.log(getHumanChoice())

function playRound(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if(humanSelection=="rock"&&computerSelection=="rock"){
        console.log("It's a tie! Rock ties with Rock");
    }
    else if (humanSelection=="rock"&&computerSelection=="paper") {
        computerScore += 1;
        console.log("You lose! Paper beats Rocks");
    }
    else if (humanSelection=="rock"&&computerSelection=="scissor") {
        humanScore += 1;
        console.log("You Won! Rock beats Scissors");
    }
    else if (humanSelection=="paper"&&computerSelection=="paper") {
        console.log("It's a tie! Paper ties with Paper");
    }
    else if (humanSelection=="paper"&&computerSelection=="scissor") {
        computerScore += 1;
        console.log("You Lose! Scissor beats Papers");
    }
    else if (humanSelection=="paper"&&computerSelection=="rock") {
        humanScore += 1;
        console.log("You Won! Paper beats Scissors");
    }
    else if (humanSelection=="scissor"&&computerSelection=="scissor") {
        console.log("It's a tie! Scissors ties with Scissors");
    }
    else if (humanSelection=="scissor"&&computerSelection=="paper") {
        humanScore += 1;
        console.log("You Won! Scissor beats Papers");
    }
    else if (humanSelection=="scissor"&&computerSelection=="rock") {
        computerScore += 1;
        console.log("You Lose! Rock beats Scissors");
    }
}
// playRound = playRound(humanSelection,computerSelection);

function playGame(){
    let i = 0;
    while(i++ < 5){
        playRound();
    }
    if(humanScore > computerScore){
        console.log("You won!");
    }
    else if(humanScore < computerScore){
        console.log("You loss!");
    }
    else{
        console.log("It's a tie!");
    }
}

console.log(playGame());
