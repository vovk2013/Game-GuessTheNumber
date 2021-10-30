'use strict';


const guessNum = document.querySelector('.guess');
const check = document.querySelector('.check');
let scoreNum = 20;
const body = document.querySelector('body');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score');

const message = function (message) {
    document.querySelector('.message').textContent = message
}
const number = function (number) {
    document.querySelector('.number').textContent = number;
}

check.addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);



    if (!guess) {
        message('⛔ No number');

    } else if (guess !== secretNumber) {
        if (scoreNum > 1) {
            scoreNum--;
            score.textContent = scoreNum;
            message(guess > secretNumber ? '🔽 Too high' : '🔽 Too low');

            console.log(scoreNum);
        }
    }

    else if (guess === secretNumber) {
        message('Congrats 🎉')
        number(secretNumber);
        body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        let highscore = document.querySelector('.highscore');
        highscore.textContent = scoreNum;
        if (highscore < scoreNum) {
            highscore = scoreNum;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    let guess = document.querySelector('.guess');
    body.style.backgroundColor = '#222222';
    message('Start guessing...');
    scoreNum = 20;
    score.textContent = scoreNum;
    guess.value = '';
    number('?');
    document.querySelector('.number').style.width = '15rem'
});