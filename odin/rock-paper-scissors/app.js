const optionsToComputer = ['rock', 'paper', 'scissors']


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  let computerChoice = optionsToComputer[randomNumber]

  return computerChoice
}

function playRound(playerSelection, computerSelection){

  let playerSelectionLowerCase = playerSelection.toLowerCase();

  if(playerSelectionLowerCase === 'rock' && computerSelection === 'paper'){
    computerHasWon++
    return 'You Lose! Paper beats Rock'
  } else if(playerSelectionLowerCase === 'rock' && computerSelection === 'scissors'){
    userHasWon++
    return 'You Won! Rock beats Scissors'
  } else if(playerSelectionLowerCase === 'paper' && computerSelection === 'rock') {
    userHasWon++
    return 'You Won! Paper beats Rock'
  } else if(playerSelectionLowerCase === 'paper' && computerSelection === 'scissors'){
    computerHasWon++
    return 'You Lose! Scissors beats Paper'
  } else if(playerSelectionLowerCase === 'scissors' && computerSelection === 'rock'){
    computerHasWon++
    return 'You Lose! Rock beats Scissors'
  } else if(playerSelectionLowerCase === 'scissors' && computerSelection === 'paper'){
    userHasWon++
    return 'You Won! Scissors beats Paper'
  } else {
    return 'Draw, try again!'
  }

}





let numberOfRounds = 5;
let userHasWon = 0;
let computerHasWon = 0;

function game(){
  for(let i = 1; i <= numberOfRounds; i++){

    const playerSelection = prompt(`Let's play!`);
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

  }

  if(userHasWon > computerHasWon){
    console.log('You won the game!!');
  } else if(computerHasWon > userHasWon){
    console.log('You lost the game!!');
  } else {
    console.log('You Draw!!');
  }

  console.log(userHasWon);
  console.log(computerHasWon);
}

game()

// run game() function to start the game

  // create a variable to keep count of how many games we've played
  // create a variable to keep the score to report a winner or a loser at the end
  // ask the user for the selection
  // store the selection in playerSelection
  // inside game() function run playRound function to run the game
  // show the result in the console
  // if user won then sum the result to the variable to keep the score otherwise sum to the computer
  // after 5 games show the winner