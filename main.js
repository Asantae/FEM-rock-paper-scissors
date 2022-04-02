// this section declares all variables that will trigger a game start
var playerScore = 0;
var houseScore = 0;
document.getElementById('player-score').innerHTML = playerScore;
document.getElementById('house-score').innerHTML = houseScore;
var x = '';
const choiceLizard = document.getElementById('lizard-button');
const choiceScissor = document.getElementById('scissors-button');
const choicePaper = document.getElementById('paper-button');
const choiceSpock = document.getElementById('spock-button');
const choiceRock = document.getElementById('rock-button');
document.getElementById('reset').addEventListener('click', scoreReset);
choiceLizard.addEventListener('click', () => {
    game_start(choiceLizard.id);
});
choicePaper.addEventListener('click', () => {
    game_start(choicePaper.id);
})
choiceRock.addEventListener('click', () => {
    game_start(choiceRock.id);
})
choiceScissor.addEventListener('click', () => {
    game_start(choiceScissor.id);
})
choiceSpock.addEventListener('click', () => {
    game_start(choiceSpock.id);
})

// initializes game and sets the players choice. also starts the house's game 
function game_start(x) {
    playerChoice = x;
    house_choice();
};

function house_choice() {
    let random = Math.random();
    if(random < .2) {
        y = choiceLizard.id;
    }else if (random < .4) {
        y = choicePaper.id;
    }else if(random < .6) {
        y = choiceSpock.id;
    }else if (random < .8) {
        y = choiceRock.id;
    }else if(random < 1) {
        y = choiceScissor.id;
    }
    game_rules();
}

//randomizes house choice,  begins comparing results



// this function controls the 'rules' modal
const rules = document.getElementById('rules');
const modalContainer = document.getElementById('modal-container');
const modalClose = document.getElementById('modal-close');
rules.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

modalClose.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

function game_rules() {
    if (playerChoice === y){
        console.log('tie game');
    }else if(playerChoice == choiceRock.id){
        if(y == choicePaper.id || y == choiceSpock.id){
            console.log('YOU LOSE');
            houseScore++;
        }else{
            console.log('You win!');
            playerScore++;
        }
    }else if(playerChoice == choiceScissor.id){
        if(y == choiceRock.id || y == choiceSpock.id){
            console.log('YOU LOSE');
            houseScore++;
        }else{
            console.log('You win!');
            playerScore++;
        }
    }else if(playerChoice == choicePaper.id){
        if(y == choiceScissor.id || y == choiceLizard.id){
            console.log('YOU LOSE');
            houseScore++;
        }else{
            console.log('You win!');
            playerScore++;
        }
    }else if(playerChoice == choiceSpock.id){
        if(y == choicePaper.id || y == choiceLizard.id){
            console.log('YOU LOSE');
            houseScore++;
        }else{
            console.log('You win!');
            playerScore++;
        }
    }else if(playerChoice == choiceLizard.id){
        if(y == choiceScissor.id || y == choiceRock.id){
            console.log('YOU LOSE');
            houseScore++;
        }else{
            console.log('You win!');
            playerScore++;
        }
    }
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('house-score').innerHTML = houseScore;
    console.log('PLAYER CHOICE: ' + playerChoice);
    console.log('HOUSE CHOICE: ' + y);
}


function scoreReset() {
    playerScore = 0;
    houseScore = 0;
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('house-score').innerHTML = houseScore;
    
}

