let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
}

function compareGuesses(human, computer, target) {
  let humanToTarget = getAbsoluteDistance(target, human);
  let computerToTarget = getAbsoluteDistance(target, computer);
  if (humanToTarget <= computerToTarget) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}