// import functions and grab DOM elements

import { getRandomThrow } from './get-random-throw.js';

import { didUserWin } from './did-user-win.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');

const computerPickArea = document.querySelector('#computer-pick');
const resultArea = document.getElementById('result');
const winsArea = document.getElementById('wins');
const lossesArea = document.getElementById('losses');
const drawsArea = document.getElementById('draws');
const totalArea = document.getElementById('total');
const resetsArea = document.getElementById('resets');

// initialize state


let wins = 0;
let losses = 0;
let draws = 0;
let total = wins + losses + draws;
let resets = 0;

winsArea.textContent = wins;
drawsArea.textContent = draws;
lossesArea.textContent = losses;
totalArea.textContent = total;

// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    computerPickArea.innerHTML = '';
    const randomNum = Math.random();
    const computerPick = getRandomThrow(randomNum);
    const userSelectedRadioButton = document.querySelector('input:checked');
    const userPick = userSelectedRadioButton.value;

    if (computerPick === 'rock') {
        let image = new Image();
        image.src = './assets/simpsons-war-rocks.jpeg';
        computerPickArea.appendChild(image);
        computerPickArea.height = '100px';
    } else if (computerPick === 'paper') {
        let image = new Image();
        image.src = './assets/simpsons-squirrel-paper.jpeg';
        computerPickArea.appendChild(image);
        computerPickArea.height = '100px';
    } else if (computerPick === 'scissors') {
        let image = new Image();
        image.src = './assets/simpsons-bart-scissors.jpeg';
        computerPickArea.appendChild(image);
        computerPickArea.height = '100px';
    }

    //ccomputerPickArea.textContent = computerPick;

    const result = didUserWin(userPick, computerPick);
    

    if (result === 'win') {
        wins++;
        resultArea.textContent = 'You win!';
    } else if (result === 'lose') {
        losses++;
        resultArea.textContent = 'You lose';
    } else if (result === 'draw') {
        draws++;
        resultArea.textContent = 'It\'s a draw';
    }

    let total = wins + draws + losses;
    winsArea.textContent = wins;
    drawsArea.textContent = draws;
    lossesArea.textContent = losses;
    totalArea.textContent = total;
});

resetButton.addEventListener('click', () => {
    resets++;
    resetsArea.textContent = resets;
    computerPickArea.innerHTML = '';
    wins = 0;
    draws = 0;
    losses = 0;
    total = 0;
    winsArea.textContent = wins;
    drawsArea.textContent = draws;
    lossesArea.textContent = losses;
    totalArea.textContent = total;
    resultArea.textContent = '';
});