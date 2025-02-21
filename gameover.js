export default function displayGameOverScreen() {
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