// gets locally stored variables if the site is refreshed
var playerScore = localStorage.getItem('localPlayer');
var houseScore = localStorage.getItem('localHouse');
if(playerScore == undefined || null) {
    playerScore = 0;
}
if (houseScore == undefined || null) {
    houseScore = 0;
}

if (playerScore && houseScore == undefined || null) {
    houseScore = 0;
    playerScore = 0;
};

// this section declares all variables that will trigger a game start
document.getElementById('player-score').innerHTML = playerScore;
document.getElementById('house-score').innerHTML = houseScore;
var x = '';
const iconBox = document.querySelectorAll('.outer-icon-box');
const bottomBox = document.getElementById('bottom-box');
const gameBox = document.getElementById('game-box');
const choiceLizard = document.getElementById('lizard-button');
const choiceScissor = document.getElementById('scissors-button');
const choicePaper = document.getElementById('paper-button');
const choiceSpock = document.getElementById('spock-button');
const choiceRock = document.getElementById('rock-button');
document.getElementById('reset').addEventListener('click', scoreReset);
choiceLizard.addEventListener('click', () => {
    var elem = document.getElementById('lizard');
    var elemClone = elem.cloneNode(true);
    elemClone.id = 'clonedId';
    document.getElementById('player-pick').appendChild( elemClone  );
    game_start(choiceLizard.id);
    
});
choicePaper.addEventListener('click', () => {
    var elem = document.getElementById('paper');
    var elemClone = elem.cloneNode(true);
    elemClone.id = 'clonedId';
    document.getElementById('player-pick').appendChild( elemClone  );
    game_start(choicePaper.id);
    
})
choiceRock.addEventListener('click', () => {
    var elem = document.getElementById('rock');
    var elemClone = elem.cloneNode(true);
    elemClone.id = 'clonedId';
    document.getElementById('player-pick').appendChild( elemClone  );
    game_start(choiceRock.id);
})
choiceScissor.addEventListener('click', () => {
    var elem = document.getElementById('scissors');
    var elemClone = elem.cloneNode(true);
    elemClone.id = 'clonedId';
    document.getElementById('player-pick').appendChild( elemClone  );
    game_start(choiceScissor.id);
})
choiceSpock.addEventListener('click', () => {
    var elem = document.getElementById('spock');
    var elemClone = elem.cloneNode(true);
    elemClone.id = 'clonedId';
    
    document.getElementById('player-pick').appendChild( elemClone  );
    game_start(choiceSpock.id);
})
// initializes game and sets the players choice. also starts the house's game 
function game_start(x) {
    gameBox.classList.add('show');
    bottomBox.classList.add('hide');
    playerChoice = x;
    house_choice();
};

function house_choice() {
    let houseChoice = Math.random();
    if(houseChoice < .2) {
        y = choiceLizard.id;
    }else if (houseChoice < .4) {
        y = choicePaper.id;
    }else if(houseChoice < .6) {
        y = choiceSpock.id;
    }else if (houseChoice < .8) {
        y = choiceRock.id;
    }else if(houseChoice < 1) {
        y = choiceScissor.id;
    }
    game_rules();
}

//randomizes house choice,  begins comparing results
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
    localStorage.setItem('localPlayer', playerScore);
    localStorage.setItem('localHouse', houseScore);
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('house-score').innerHTML = houseScore;

}

//resets all page data and clears local storage / also resets the game state to default
function scoreReset() {
    playerScore = 0;
    houseScore = 0;
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('house-score').innerHTML = houseScore;
    gameBox.classList.remove('show');
    bottomBox.classList.remove('hide');
    localStorage.clear();
    
}

//this function controls the 'rules' modal
const rules = document.getElementById('rules');
const modalContainer = document.getElementById('modal-container');
const modalClose = document.getElementById('modal-close');
rules.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

modalClose.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

//this function will control the bottom box and the gameplay box


