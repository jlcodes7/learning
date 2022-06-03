const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (compChoice, playChoice) => 
compChoice === playChoice
    ? RESULT_DRAW
    : (compChoice === ROCK && playChoice === PAPER) ||
      (compChoice === PAPER && playChoice === SCISSORS) ||
      (compChoice === SCISSORS && playChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

    // if (compChoice === playChoice) {
    //     return RESULT_DRAW;
    // } else if (
    //     compChoice === ROCK && playChoice === PAPER ||
    //     compChoice === PAPER && playChoice === SCISSORS ||
    //     compChoice === SCISSORS && playChoice === ROCK
    // ) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }

// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice}, the computer picked ${computerChoice}, therefore you`
  if (winner === RESULT_DRAW) {
      message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
      message = message + 'won!'
  } else {
      message = message + 'lost.'
  }
  console.log(winner);
});
