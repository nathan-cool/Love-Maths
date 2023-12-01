
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');
    
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                alert(" clicked the submit button");
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked the ${gameType} button`);
            }
        });
    }
});



function runGame() {
    let num1 = math.floor(math.random() * 25) + 1;
    let num2 = math.floor(math.random() * 25) + 1;

}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
}

function incrementScore() {
}

function incrementWrongAnswer() {
    
}

function displayAdditionQustion() {
}

function displaySubtractionQustion() {
}

function displayMultiplicationQustion() {
}