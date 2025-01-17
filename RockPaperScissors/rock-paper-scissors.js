const choices = ['rock', 'paper', 'scissors']
const playersMove = process.argv[2].toLowerCase()
const computerMove = choices[Math.floor(Math.random() * 3)]

// Error Handling for invalid input
if (!choices.includes(playersMove)) {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    process.exit(1);
}

let result;
if (
    (playersMove === 'rock' && computerMove === 'scissors') ||
    (playersMove === 'scissors' && computerMove === 'paper') ||
    (playersMove === 'paper' && computerMove === 'rock')) {
    result = "You won the game!!";
} else if (playersMove === computerMove) {
    result = "It's a Tie!!";
} else {
    result = "Computer won the game!!";
}

console.log(`\n\n Player's choice:${playersMove}, Computer's choice:${computerMove}, Result:${result} \n\n`);
