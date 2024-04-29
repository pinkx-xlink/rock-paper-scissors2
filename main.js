const options = document.querySelector("#options");
options.addEventListener("click", playRound);
const scoreBoard = document.querySelector("#scoreBoard");
// create variables to keep track of player scores
let playerScore = 0;
playerScoreCount = document.createElement('p');
playerScoreCount.classList.add('p');
playerScoreCount.textContent = `Player score: ${playerScore}`;
scoreBoard.appendChild(playerScoreCount);
let computerScore = 0;
computerScoreCount = document.createElement('p');
computerScoreCount.classList.add('p');
computerScoreCount.textContent = `Computer's score: ${computerScore}`;
scoreBoard.appendChild(computerScoreCount);
    
let winner = document.querySelector("#winner");
winner.textContent = "And the winner is..."
winner.innerHTML = `<p>And the winner is.....</p>`;

function resetScores() {
  newPlayerScore = 0;
  playerScore = 0;
  newComputerScore = 0;
  computerScore = 0;
  computerScoreCount.innerHTML = '0';
  playerScoreCount.innerHTML = '0';
}
    
let newPlayerScore;
function win() {
  console.log("You win!");
  let newPlayerScore = (++playerScore);
  //console.log(newPlayerScore);
  playerScoreCount.textContent = `Player's score: ${newPlayerScore}`;
  winner.innerHTML = `<p> You Win! </p>`;
  return;
}

let newComputerScore;
function lose() {
  console.log("you lose lol");
  let newComputerScore = (++computerScore);
  //console.log(newComputerScore);
  computerScoreCount.textContent = `Computer's score: ${newComputerScore}`;
  winner.innerHTML = `<p>You LOST! ):</p>`;
  return;
}

// create the variables for rock, paper, and scissors
const rock = document.createElement('button');
rock.setAttribute('name', 'rock');
rock.setAttribute('id', 'rock');
rock.addEventListener("click", getPlayerSelection);
rock.classList.add('button');
rock.innerHTML = `<image src="/img/rock.png" height="55px"/> `;
options.appendChild(rock);

const paper = document.createElement('button');
paper.setAttribute('name', 'paper');
paper.addEventListener("click", getPlayerSelection);
paper.classList.add('button');
paper.innerHTML = `<image src="./img/paper.png" height="55px"/>`;
options.appendChild(paper);

const scissors = document.createElement('button');
scissors.setAttribute('name', 'scissors');
scissors.addEventListener("click", getPlayerSelection);
scissors.classList.add('button');
scissors.innerHTML = `<image src="./img/scissors.png" height="55px" />`;
options.appendChild(scissors);


const turn = document.querySelector("#turn");
turn.innerHTML = `<p>make your move...</p>`;
let playerSelection;
function getPlayerSelection() {
  console.log(`Player chose ${this.name}`);
  const playerChose = document.createElement('p');
  playerChose.classList.add('p');
  playerChose.textContent = `Player chose: ${this.name}`;
  playerSelection = this.name;
  return playerSelection;
}

let rounds = 0;
function playRound() {
  ++rounds;
  // const roundCounter = document.createElement('p');
  // roundCounter.classList.add('p');
  // roundCounter.innerHTML = `<p>Round: ${rounds}</p>`;
  // scoreBoard.appendChild(roundCounter);
  let loop = function () {
    if (rounds < 3) { 
      console.log("play again");
    } else if (rounds = 3) {
      const gameOverAlert = alert(`GAME OVER~ Player score: ${playerScore}~ Computer score: ${computerScore}`);
      //gameOverAlert.addEventListener(, resetScores());
      //onsole.log(`Player score: ${playerScore}`);
      //console.log(`Computer score: ${computerScore}`);
      rounds = 0;
      playerScore = 0;
      computerScore = 0;
      newPlayerScore = 0;
      newComputerScore = 0;
      playerScoreCount.textContent = `Player score: 0`;
      computerScoreCount.textContent = `Player score: 0`;
      return resetScores();
    } else if (rounds = 0) {
      playerScore = 0;
      computerScore = 0;
      newPlayerScore = 0;
      newComputerScore = 0;
      playerScoreCount.textContent = `Player score: 0`;
      computerScoreCount.textContent = `Player score: 0`;
      return resetScores();
    }
  };
  loop();

  console.log(rounds);
  function getComputerChoice() {
    return array[Math.floor(Math.random() * array.length)];
  }
  const array = ["rock", "paper", "scissors"];
  const computerSelection = getComputerChoice();
  const computerChose = document.createElement('p');
  computerChose.classList.add('p');
  computerChose.textContent = `Computer chose: ${computerSelection}`;
  console.log(`Computer chose ${computerSelection}`);
  //randomly choose 1
  //use return, not console.log
  turn.innerHTML = `
            <p>Player chose ${playerSelection}
            <p>Computer chose ${computerSelection}`;
  if (rounds > 3) {
                
  }
  if ((playerSelection) == "rock" && computerSelection == "scissors") {
    return win();
    displayWinner();
  } else if ((playerSelection) == "paper" && computerSelection == "rock") {
    return win();
    displayWinner();
  } else if ((playerSelection) == "scissors" && computerSelection == "paper") {
    return win();
    displayWinner();
  } else if ((playerSelection) == "scissors" && computerSelection == "rock") {
    return lose();
    displayWinner();
  } else if ((playerSelection) == "rock" && computerSelection == "paper") {
    return lose();
    displayWinner();
  } else if ((playerSelection) == "paper" && computerSelection == "scissors") {
    return lose();
    displayWinner();
  } else { 
    winner.innerHTML = `<p>it's a tie :p</p>`;
    console.log("TIE!");
  }; 
}; 