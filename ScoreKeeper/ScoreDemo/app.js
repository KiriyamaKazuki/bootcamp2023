const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    scoreSpan: document.querySelector('#p1Score')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    scoreSpan: document.querySelector('#p2Score')
}

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');

let isGameOver = false;
let winningScore = 3;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        player.scoreSpan.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.scoreSpan.classList.add('has-text-success');
            opponent.scoreSpan.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}


p1.button.addEventListener('click', () => {
    updateScores(p1,p2);
});

p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
});

resetBtn.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.scoreSpan.textContent = 0;
        p.scoreSpan.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.scoreSpan.textContent = 0;
    // p2.scoreSpan.textContent = 0;
    // p1.scoreSpan.classList.remove('has-text-success', 'has-text-danger');
    // p2.scoreSpan.classList.remove('has-text-success', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}