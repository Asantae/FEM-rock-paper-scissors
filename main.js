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

// this section declares all variables that are needed to trigger a game start, restart, and end
document.getElementById('player-score').innerHTML = playerScore;
document.getElementById('house-score').innerHTML = houseScore;
var x = '';
var matchResults = document.getElementById('match-results');
const iconBox = document.querySelectorAll('.outer-icon-box');
const bottomBox = document.getElementById('bottom-box');
const gameBox = document.getElementById('game-box');
const choiceLizard = document.getElementById('lizard-button');
const choiceScissor = document.getElementById('scissors-button');
const choicePaper = document.getElementById('paper-button');
const choiceSpock = document.getElementById('spock-button');
const choiceRock = document.getElementById('rock-button');
const playerPick = document.getElementById('player-pick');
document.getElementById('rematch-button').addEventListener('click', play_again);
document.getElementById('reset').addEventListener('click', score_reset);
//these event listeners clone the outer-icon-box div puts it on the "game" page
choiceLizard.addEventListener('click', () => {
    var elem = document.getElementById('lizard');
    var elemClone = elem.cloneNode(true);
    elemClone.id = 'clonedId';
    elemClone.style.backgroundColor = "hsl(261deg 73% 63%)";
    document.getElementById('player-pick').appendChild( elemClone );
    game_start(choiceLizard.id);
    
})
choicePaper.addEventListener('click', () => {
    var elem = document.getElementById('paper');
    var elemClone = elem.cloneNode(true);
    elemClone.id = 'clonedId';
    elemClone.style.backgroundColor = "hsl(230deg 86% 63%)";
    document.getElementById('player-pick').appendChild( elemClone );
    game_start(choicePaper.id);
    
})
choiceRock.addEventListener('click', () => {
    var elem = document.getElementById('rock');
    var elemClone = elem.cloneNode(true);
    elemClone.id = 'clonedId';
    elemClone.style.backgroundColor = "hsl(349deg 69% 54%)";
    document.getElementById('player-pick').appendChild( elemClone );
    game_start(choiceRock.id);
})
choiceScissor.addEventListener('click', () => {
    var elem = document.getElementById('scissors');
    var elemClone = elem.cloneNode(true);
    elemClone.id = 'clonedId';
    elemClone.style.backgroundColor = "hsl(38deg 88% 53%)";
    document.getElementById('player-pick').appendChild( elemClone );
    game_start(choiceScissor.id);
})
choiceSpock.addEventListener('click', () => {
    var elem = document.getElementById('spock');
    var elemClone = elem.cloneNode(true);
    elemClone.id = 'clonedId';
    elemClone.style.backgroundColor = "hsl(189deg 57% 57%)";
    document.getElementById('player-pick').appendChild( elemClone );
    game_start(choiceSpock.id);
})
// initializes game and sets the players choice. also starts the house's game 
function game_start(x) {
    gameBox.classList.add('show');
    bottomBox.classList.add('hide');
    playerChoice = x;
    house_choice();
}

function house_choice() {
    let houseChoice = Math.random();
    if(houseChoice < .2) {
        var elem2 = document.getElementById('lizard');
        var elemClone2 = elem2.cloneNode(true);
        elemClone2.id = 'clonedId';
        elemClone2.style.backgroundColor = "hsl(261deg 73% 63%)";
        document.getElementById('house-pick').appendChild( elemClone2 );
        y = choiceLizard.id;
    }else if (houseChoice < .4) {
        var elem2 = document.getElementById('paper');
        var elemClone2 = elem2.cloneNode(true);
        elemClone2.id = 'clonedId';
        elemClone2.style.backgroundColor = "hsl(230deg 86% 63%)";
        document.getElementById('house-pick').appendChild( elemClone2 );
        y = choicePaper.id;
    }else if(houseChoice < .6) {
        var elem2 = document.getElementById('spock');
        var elemClone2 = elem2.cloneNode(true);
        elemClone2.id = 'clonedId';
        elemClone2.style.backgroundColor = "hsl(189deg 57% 57%)";
        document.getElementById('house-pick').appendChild( elemClone2 );
        y = choiceSpock.id;
    }else if (houseChoice < .8) {
        var elem2 = document.getElementById('rock');
        var elemClone2 = elem2.cloneNode(true);
        elemClone2.id = 'clonedId';
        elemClone2.style.backgroundColor = "hsl(349deg 69% 54%)";
        document.getElementById('house-pick').appendChild( elemClone2 );
        y = choiceRock.id;
    }else if(houseChoice < 1) {
        var elem2 = document.getElementById('scissors');
        var elemClone2 = elem2.cloneNode(true);
        elemClone2.id = 'clonedId';
        elemClone2.style.backgroundColor = "hsl(38deg 88% 53%)";
        document.getElementById('house-pick').appendChild( elemClone2 );
        y = choiceScissor.id;
    }
    game_rules();
}

//randomizes house choice,  begins comparing results
function game_rules() {
    if (playerChoice === y){
        matchResults.innerHTML = 'tie game!';
    }else if(playerChoice == choiceRock.id){
        if(y == choicePaper.id || y == choiceSpock.id){
            matchResults.innerHTML = 'YOU LOSE!';
            houseScore++;
        }else{
            matchResults.innerHTML = 'You win!';
            playerScore++;
        }
    }else if(playerChoice == choiceScissor.id){
        if(y == choiceRock.id || y == choiceSpock.id){
            matchResults.innerHTML = 'YOU LOSE!';
            houseScore++;
        }else{
            matchResults.innerHTML = 'You win!';
            playerScore++;
        }
    }else if(playerChoice == choicePaper.id){
        if(y == choiceScissor.id || y == choiceLizard.id){
            matchResults.innerHTML = 'YOU LOSE!';
            houseScore++;
        }else{
            matchResults.innerHTML = 'You win!';
            playerScore++;
        }
    }else if(playerChoice == choiceSpock.id){
        if(y == choicePaper.id || y == choiceLizard.id){
            matchResults.innerHTML = 'YOU LOSE!';
            houseScore++;
        }else{
            matchResults.innerHTML = 'You win!';
            playerScore++;
        }
    }else if(playerChoice == choiceLizard.id){
        if(y == choiceScissor.id || y == choiceRock.id){
            matchResults.innerHTML = 'YOU LOSE!';
            houseScore++;
        }else{
            matchResults.innerHTML = 'You win!';
            playerScore++;
        }
    }
    localStorage.setItem('localPlayer', playerScore);
    localStorage.setItem('localHouse', houseScore);
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('house-score').innerHTML = houseScore;

}

//this function restarts the game while retaining the score (local storage variables)
function play_again() {
    var elem2 = document.getElementById('clonedId');
    elem2.parentNode.removeChild(elem2);
    var elem = document.getElementById('clonedId');
    elem.parentNode.removeChild(elem);
    gameBox.classList.remove('show');
    bottomBox.classList.remove('hide');
    
}

//resets all page data and clears local storage / also resets the game state to default
function score_reset() {
    play_again();
    playerScore = 0;
    houseScore = 0;
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('house-score').innerHTML = houseScore;
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


