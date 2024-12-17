console.log("Rock Paper Scissor Game Best of 5");

let computerScore = 0;
let humanScore= 0;

function getComputerChoice(){

  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0){
    return 'rock';
  }else if (computerChoice === 1) {
    return 'paper';
  }else {
    return 'scissor';
  }
}

function getHumanChoice(){

    // Normalize the humanChoice to make it case-insensitive
    let humanChoice = prompt("Enter your pick").toLowerCase();


    // Check if the humanChoice is valid
    while(!['rock','paper','scissor'].includes(humanChoice)){
      console.log('Invalid choice! Please select rock, paper, or scissors.');
      humanChoice = prompt("Enter your pick").toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice,computerChoice){

  if(humanChoice === computerChoice) {
    return "It's a Tie";
  }else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ){
    console.log("You Win!");  
    return "human";
  }else{
    console.log("You Lose!");
    return "computer";
  }
}

function playGame(){
  
  for(let i = 0; i = 5; i++){
    const humanSelection  = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Player :  ${humanSelection}`);
    console.log(`Computer : ${computerSelection}`);
    console.log(playRound(humanSelection, computerSelection));

    let result = playRound(humanSelection, computerSelection);
    if (result === "human") {
      humanScore++;
    }else if (result === "computer"){
      computerScore++;
    }
    console.log(`Player Score:  ${humanScore} Computer Score: ${computerScore} `);

    if (humanScore === 3){
      console.log("Congrats! Player Won");
      break;
    }else if(computerScore === 3){
      console.log("You Lose! Computer Won");
      break;
    }
  }


}

playGame();
