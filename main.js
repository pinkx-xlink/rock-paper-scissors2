const options = document.querySelector('#options');
options.addEventListener('click', playRound);
const scores = document.getElementById('scores');

// TRY UNCOUPLING GETCOMPCHOICE FUNC FROM INSIDE THIS LOOP
function getComputerChoice() {
  // randomly choose 1 option which will serve as the computer's choice
  const array = ['rock', 'paper', 'scissors'];
  return array[Math.floor(Math.random() * array.length)];
}

function getPlayerChoice(buttonId) {
  if (buttonId === 'rock') {
    playerSelection = 'rock';
  } else if (buttonId === 'paper') {
    playerSelection = 'paper';
  } else if (buttonId === 'scissors') {
    playerSelection = 'scissors';
  }
  console.log(`player chose ${playerSelection}`);
  // getComputerChoice();
}
// create the variables for rock, paper, and scissors
const rock = document.createElement('button');
rock.setAttribute('name', 'rock');
rock.setAttribute('id', 'rock');
rock.addEventListener('click', () => {
  const rockAudio = new Audio('./audio/rock-audio.wav');
  rockAudio.play();
  getPlayerChoice('rock');
  updateRoundCounter();
})
rock.classList.add('player-options-buttons');
rock.innerHTML = '<image src="/img/rock.png" height="55px"/> ';
options.appendChild(rock);

const paper = document.createElement('button');
paper.setAttribute('name', 'paper');
paper.addEventListener('click', () => {
  const paperAudio = new Audio('./audio/paper-audio.wav');
  paperAudio.play();
  getPlayerChoice('paper');
  updateRoundCounter();
})
paper.classList.add('player-options-buttons');
paper.innerHTML = '<image src="./img/paper.png" height="55px"/>';
options.appendChild(paper);

const scissors = document.createElement('button');
scissors.setAttribute('name', 'scissors');
scissors.addEventListener('click', () => {
  const scissorsAudio = new Audio('./audio/scissors-audio.wav');
  scissorsAudio.play();
  getPlayerChoice('scissors');
  updateRoundCounter();
})
scissors.classList.add('player-options-buttons');
scissors.innerHTML = '<image src="./img/scissors.jpg" height="55px" />';
options.appendChild(scissors);

// This is where we see which player chooses what
const turn = document.querySelector('#turn');
turn.innerHTML = '<p>make your move...</p>';

// create variables to keep track of player scores
let playerScore = 0;
const playerScoreCount = document.createElement('p');
playerScoreCount.classList.add('p');
playerScoreCount.textContent = `Player: ${playerScore}`;
scores.appendChild(playerScoreCount);
let computerScore = 0;
const computerScoreCount = document.createElement('p');
computerScoreCount.classList.add('p');
computerScoreCount.textContent = `Computer: ${computerScore}`;
scores.appendChild(computerScoreCount);
    

let currentRoundResults = document.querySelector('#current-round-results');
currentRoundResults.textContent = 'Who will win...'
// currentRoundResults.innerHTML = `<p>And the currentRoundResults is.....</p>`;

function resetScores() {
  rounds = 1;
  playerScore = 0;
  computerScore = 0;
  computerScoreCount.textContent = 'Computer: 0';
  playerScoreCount.textContent = 'Player: 0';
  roundCounter.textContent = 'Round: 1';
  turn.innerHTML = '';
  currentRoundResults.innerHTML = '';
}

function displayGameOverScreen() {
  // Get and unhide the game over screen, and display the final scores
  const gameSummary = document.getElementById('game-summary');
  document.getElementById('game-summary').hidden = false;
  const playerScoreSummary = document.getElementById('player-score-summary');
  playerScoreSummary.innerHTML = `Player score: ${playerScore}`;
  const computerScoreSummary = document.getElementById('computer-score-summary');
  computerScoreSummary.innerHTML = `Player score: ${computerScore}`;
  const playAgainButton = document.getElementById('play-again-btn');
  // Start a new game, resetting rounds and scores to 0
  playAgainButton.addEventListener('click', function playAgain(){
    gameSummary.hidden = true;
    resetScores();
  });
}
    
function win() {
  console.log('WINNER!!!');
  playerScore += 1;
  playerScoreCount.textContent = `Player's score: ${playerScore}`;
  currentRoundResults.innerHTML = `<p> You Win round ${rounds}! </p>`;
  return;
}

function lose() {
  console.log('LOSER!!!');
  computerScore += 1;
  computerScoreCount.textContent = `Computer's score: ${computerScore}`;
  currentRoundResults.innerHTML = `<p>You LOST round ${rounds}! ):</p>`;
  return;
}

let playerSelection;

let rounds = 1;
const roundCounter = document.getElementById('roundcounter');
roundCounter.innerHTML = 'Round: 1';
function updateRoundCounter() {
  roundCounter.textContent = `Round: ${rounds}`;
}

async function playRound() {
  await getPlayerChoice()
  let loop = function () {
    if (rounds === 3) {
      setTimeout(() => {
        console.log('reset that shit after 2 second');
        displayGameOverScreen();
      }, 100);
      console.log('THE END');
    } else if (rounds < 3) {
      ++rounds;
      console.log('play again');
    }
  };
  loop();
  console.log(`Round: ${rounds}`);
  
  const computerSelection = getComputerChoice();
  const computerChose = document.createElement('p');
  computerChose.classList.add('p');
  computerChose.textContent = `Computer chose: ${computerSelection}`;
  console.log(`Computer chose ${computerSelection}`);

  turn.innerHTML = `
    <p>Player chose ${playerSelection}</p>
    <p>Computer chose ${computerSelection}</p>`;
  if (rounds <= 3) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
      return win();
    } else if ((playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'paper') || 
    (playerSelection === 'paper' && computerSelection === 'scissors')) {
      return lose();
    } else {
      currentRoundResults.innerHTML = `
        <p> it's a tie :p </p>
      `;
      console.log('TIE!');
    }
  };
}; 