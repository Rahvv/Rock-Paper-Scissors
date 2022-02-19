let score = 0;
let round = 0;
const container = document.querySelector('#container');
const rock = document.createElement('button');
rock.setAttribute('id', 'rock')
rock.textContent = 'Rock';
container.appendChild(rock);
const paper = document.createElement('button');
paper.setAttribute('id', 'paper');
paper.textContent = 'Paper';
container.appendChild(paper);
const scissors = document.createElement('button');
scissors.setAttribute('id', 'scissors');
scissors.textContent = 'Scissors';
container.appendChild(scissors);
const roundResult = document.createElement('div');
const finalScore = document.createElement('div');
container.appendChild(roundResult);
container.appendChild(finalScore);



function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    switch (randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}



function playRound(playerSelection, computerSelection) {
    round++;
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        score++;
        roundResult.textContent = "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        roundResult.textContent = "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        score++;
        roundResult.textContent = "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        roundResult.textContent = "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        score++;
        roundResult.textContent = "You Win! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        roundResult.textContent = "You Lose! Rock beats Scissors";
    } else {roundResult.textContent = "It's a tie!";
    };
    finalScore.textContent = 'You\'re current score is: ' + score + ' out of ' + round;
    if (round == 5) {
        if (score >= 3) {
            alert('You Win!');
        } alert('You Lose :(');
        round = 0;
        score = 0;
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});




//function game() {
//    score = 0
//    let playerSelection = window.prompt("What do you choose: Rock, Paper or Scissors?")
//    console.log(playRound(playerSelection, computerPlay()));
//    playerSelection = window.prompt("What do you choose: Rock, Paper or Scissors?")
//    console.log(playRound(playerSelection, computerPlay()));
//    playerSelection = window.prompt("What do you choose: Rock, Paper or Scissors?")
//    console.log(playRound(playerSelection, computerPlay()));
//    playerSelection = window.prompt("What do you choose: Rock, Paper or Scissors?")
//    console.log(playRound(playerSelection, computerPlay()));
//    playerSelection = window.prompt("What do you choose: Rock, Paper or Scissors?")
//    console.log(playRound(playerSelection, computerPlay()));
//    console.log("You got a score of " + score + " out of 5!");
//    if (score >= 3) {
//        console.log('You win!');
//    } else {
//        console.log('You lose!');
//    }
//}