let currentGameType;

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');
    
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        });
    }
    runGame('addition');
});



function runGame(gameType) {
    currentGameType = gameType;
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
        runGame('addition');
    } else if (gameType === 'subtract') {
        displaySubtractionQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplicationQuestion(num1, num2);
    } else if (gameType === 'division') {
        displayDivisionQuestion(num1, num2);
    }

    
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let correctAnswer = calculateCorrectAnswer()[0];
    if (userAnswer === correctAnswer) {
        alert('correct answer');
        incrementScore();
        
    } else {
        alert(`wrong answer,correct answer is ${correctAnswer}`);
        incrementWrongAnswer()
       
    }
    runGame(currentGameType)
}

    


    function calculateCorrectAnswer() {
        let num1 = parseInt(document.getElementById('operand1').innerText)
        let num2 = parseInt(document.getElementById('operand2').innerText)
        let operator = document.getElementById('operator').innerText;

        if (operator === '+') {
            return [num1 + num2, 'addition'];
        } else if (operator === '-') {
            return [num1 - num2, 'subtract'];
        } else if (operator === 'x') {
            return [num1 * num2,'multiply'];
        } else if (operator === '/') {
            return [num1 / num2, 'division'];
        }
        
    }

    function incrementScore() {
        let scoreElement = document.getElementById('score');
        let score = parseInt(scoreElement.innerText);
        score++;
        scoreElement.innerText = score; 
    }
    
    


function incrementWrongAnswer() {
    let wronganswer = document.getElementById('Incorrect');
    let wrong = parseInt(wronganswer.innerText);
    wrong++;
    wronganswer.innerText = wrong;
    
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplicationQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
    
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '/';
}