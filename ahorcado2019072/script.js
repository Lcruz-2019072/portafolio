const canvas = document.getElementById('hangmanCanvas');
const ctx = canvas.getContext('2d');

const words = ['javascript', 'programming', 'coding', 'computer', 'algorithm', 'developer', 'web'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let wrongGuesses = 0;

function drawHangman() {
    ctx.beginPath();
    switch (wrongGuesses) {
        case 1:
            ctx.moveTo(20, canvas.height - 20);
            ctx.lineTo(100, canvas.height - 20);
            ctx.stroke();
            break;
        case 2:
            ctx.moveTo(60, canvas.height - 20);
            ctx.lineTo(60, 20);
            ctx.stroke();
            break;
        case 3:
            ctx.moveTo(60, 20);
            ctx.lineTo(150, 20);
            ctx.stroke();
            break;
        case 4:
            ctx.moveTo(150, 20);
            ctx.lineTo(150, 50);
            ctx.stroke();
            break;
        case 5:
            ctx.beginPath();
            ctx.arc(150, 70, 20, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 6:
            ctx.moveTo(150, 90);
            ctx.lineTo(150, 180);
            ctx.stroke();
            break;
        case 7:
            ctx.moveTo(150, 120);
            ctx.lineTo(120, 150);
            ctx.stroke();
            break;
        case 8:
            ctx.moveTo(150, 120);
            ctx.lineTo(180, 150);
            ctx.stroke();
            break;
        case 9:
            ctx.moveTo(150, 180);
            ctx.lineTo(120, 210);
            ctx.stroke();
            break;
        case 10:
            ctx.moveTo(150, 180);
            ctx.lineTo(180, 210);
            ctx.stroke();
            break;
    }
}



function checkWin() {
    for (let char of selectedWord) {
        if (!guessedLetters.includes(char)) {
            return false;
        }
    }
    return true;
}


function handleGuess(e) {
    let guess = e.key.toLowerCase();
    if (/[a-z]/.test(guess) && !guessedLetters.includes(guess)) {
        guessedLetters.push(guess);
        if (!selectedWord.includes(guess)) {
            wrongGuesses++;
        }
        drawWord();
        drawLetters();
        drawHangman();
        if (checkWin()) {
            alert('¡Has ganado!');
            resetGame();
        }
        if (checkLose()) {
            alert('¡Has perdido! La palabra era: ' + selectedWord);
            resetGame();
        }
    }
}


document.addEventListener('keydown', handleGuess);

drawWord();
drawLetters();
drawHangman();
