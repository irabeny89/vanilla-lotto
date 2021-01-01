let winningNumbers;
let picks;
let correctPicks;
let pick1 = document.getElementById('pick1');
let pick2 = document.getElementById('pick2');
let pick3 = document.getElementById('pick3');
let pick4 = document.getElementById('pick4');
let pick5 = document.getElementById('pick5');
let showNumbers = document.querySelector('#win_num');
let playButton = document.querySelector('#play_btn');
let resetButton = document.querySelector('#try_again_btn');
let winningNumbersTag = document.getElementById('win_num');
let picksTag = document.querySelector('#picks');
let correctPicksTag = document.querySelector('#correct_picks');

function generateWinningNumbers() {
    winningNumbers = [];
    for(let i = 5; i > 0; i--) {
        winningNumbers.push(Math.round(1 + Math.random() * 89));
    }
    return winningNumbers;
}

function showWinningNumbers() {
    winningNumbersTag.textContent = winningNumbers;
    setTimeout(() => showNumbers.textContent = 'show number?', 1500);
}

function getInputs() {
    picks = [];
    picks = [
        +pick1.value, 
        +pick2.value, 
        +pick3.value, 
        +pick4.value, 
        +pick5.value
    ];
    return picks;
}

function getCorrectPicks() {
    correctPicks = [];
    let picksCopy = [...getInputs()];
    const winningNumbersCopy = [...winningNumbers];
    for (const pick of picksCopy) {
        if (winningNumbersCopy.includes(pick)) {
            correctPicks.push(winningNumbersCopy.splice(winningNumbersCopy.indexOf(pick), 1));
        }
    }
    if (correctPicks.length === 0) {
        return 'All wrong!';
    }else if(correctPicks.length === 5) {
        return 'JACKPOT!!!';
    } else return correctPicks;
}

function reset() {
    return location.reload();
}

function play() {
    showNumbers.textContent = 'show number?';
    correctPicksTag.textContent = getCorrectPicks();
    showNumbers.addEventListener('click', showWinningNumbers);
    playButton.style.backgroundColor = '#33a';
    picksTag.textContent = picks;
    
}

generateWinningNumbers();
setInterval(generateWinningNumbers,300000);
resetButton.addEventListener('click', reset);
playButton.addEventListener('click', play);
