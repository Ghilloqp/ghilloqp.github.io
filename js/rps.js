let userScore = 0;
let computerScore = 0;
let userScoreElement = document.getElementById('userScore');
let computerScoreElement = document.getElementById('computerScore');
let scoreboardElement = document.querySelector('.score-board');
let resultElement = document.querySelector('.result > p');
let gameNum = 0;

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let ranNum = Math.floor(Math.random() * 3);
    return choices[ranNum];
}

function shootRock() {
    game('Rock');
}

function shootScissors() {
    game('Scissors');
}

function shootPaper() {
    game('Paper');
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, computerChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, computerChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            tie(userChoice, computerChoice);
            break;
    }
}

function win(userChocie, computerChoice) {
    userScore++;
    gameNum++;
    userScoreElement.innerHTML = userScore.toString();
    resultElement.innerHTML = "<sup class='badge user-badge'>user</sup>" +
        userChocie + " beats " + "<sup class='badge comp-badge'>comp</sup>" +
        computerChoice + ". You've played " + gameNum + " games.";
}

function lose(userChocie, computerChoice) {
    computerScore++;
    gameNum++;
    computerScoreElement.innerHTML = computerScore.toString();
    resultElement.innerHTML = "<sup class='badge comp-badge'>comp</sup>" +
        computerChoice + " beats " + "<sup class='badge user-badge'>user</sup>" +
        userChocie + ". You've played " + gameNum + " games.";
}

function tie(userChocie, computerChoice) {
    gameNum++;
    resultElement.innerHTML = "<sup class='badge user-badge'>user</sup>" +
        userChocie + " ties " + "<sup class='badge comp-badge'>comp</sup>" +
        computerChoice + ". You've played " + gameNum + " games.";
}

function reset() {
    resultElement.innerHTML = "You've played " + gameNum + " games.";
    userScore = 0;
    computerScore = 0;
    userScoreElement.innerHTML = userScore.toString();
    computerScoreElement.innerHTML = computerScore.toString();
}