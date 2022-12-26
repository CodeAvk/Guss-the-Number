'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Number!';

// document.querySelector('.score').textContent = 19;
// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess);

  // When there is no Input!!
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number !';
    displayMessage('⛔ No Number !');

    // When Players Win !
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Number!';
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
  // When guess is Wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? ' 📉Too High !' : '📈 Too Low!';
      displayMessage(guess > secretNumber ? ' 📉Too High !' : '📈 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😔 You lost the game !';
      displayMessage('😔 You lost the game !');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   // When Player choose Higher number
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📉Too High !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔 You lost the game !';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  //   // When Player Choose Loer Number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔 You lost the game !';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = '🤔Start guessing...';
  displayMessage('🤔Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log('ok');
});

//////////////////////////////////////
// Coding Challenege #1

/*
Impliment a game rest functionality ,
so that the player can make a new guess ! Here is how :

1- Select the element with the "agian"class and attach 
a click event handler.

2-In the handler function restore initial values of the 
score and number variables.

3-Restore the initial conditions of the message,number,
score and guess input field

4-Also restore the original background color(#222)
a nd number width(15rem)



*/
