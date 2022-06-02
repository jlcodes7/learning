const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
}

// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', startGame);