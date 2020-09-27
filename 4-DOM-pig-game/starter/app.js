/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activeplayer;
init();
//document.querySelector('#current-' + activeplayer).textContent = dice;
//document.querySelector('#current-' + activeplayer).innerHTML =
//'<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

document
  .querySelector('.btn-roll')
  .addEventListener(
    'click',
    function () //here addEventListener is a function which will call the function whenever click event happens
    {
      //1. Random number generate
      var dice = Math.floor(Math.random() * 6) + 1;

      //Display the result
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';

      //Update the round score if rolled is not a 1
      if (dice != 1) {
        roundScore += dice;
        document.querySelector(
          '#current-' + activeplayer
        ).textContent = roundScore;
      } else {
        nextPlayer();
      }
    }
  );

document.querySelector('.btn-hold').addEventListener('click', function () {
  //add current score to global score
  scores[activeplayer] += roundScore;
  //check if player has won
  if (scores[activeplayer] >= 20) {
    document.querySelector('#name-' + activeplayer).textContent = 'WINNER !';
    document.querySelector('#score-' + activeplayer).textContent =
      scores[activeplayer];
    document.querySelector('.dice').style.display = 'None';
    document
      .querySelector('.player-' + activeplayer + '-panel')
      .classList.add('winner');
    document
      .querySelector('.player-' + activeplayer + '-panel')
      .classList.remove('active');
  } else {
    nextPlayer();
  }
  //update the UI
});

function nextPlayer() {
  document.querySelector('#score-' + activeplayer).textContent =
    scores[activeplayer];
  activeplayer === 0 ? (activeplayer = 1) : (activeplayer = 0);
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init);
function init() {
  scores = [0, 0];
  activeplayer = 0;
  roundScore = 0;
  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
