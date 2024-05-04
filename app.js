
let wins = 0;
let losses = 0;
let ties = 0;

function playRound(humanChoice) {
    // Assuming humanChoice is 1 for Rock, 2 for Paper, and 3 for Scissors
    // And computerChoice is generated before calling this function
    const computerChoice = Math.ceil(Math.random() * 3);

    if(humanChoice === computerChoice) {
        console.log("It's a tie");
        ties++;
        console.log(`Ties: ${ties}`);
        const showResult = document.querySelector('#resultsDisplay').textContent = 'It is a tie'
        document.querySelector('#ties').textContent = `ties: ${ties}`

    } else if (
        (humanChoice === 1 && computerChoice === 3) || // Rock crushes Scissors
        (humanChoice === 2 && computerChoice === 1) || // Paper covers Rock
        (humanChoice === 3 && computerChoice === 2)    // Scissors cuts Paper
    ) {
        console.log('You win');
        wins++;
        console.log(`Wins: ${wins}`);
        const showResult = document.querySelector('#resultsDisplay').textContent = 'You won'
        document.querySelector('#wins').textContent = `wins: ${wins}`
    } else {
        console.log('You lose');
        losses++;
        console.log(`Losses: ${losses}`);
        const showResult = document.querySelector('#resultsDisplay').textContent = 'You lose'
        document.querySelector('#losses').textContent = `losses: ${losses}`

    }
}
