var score = 0;
var currentPlayer = 1;

function openDoor(doorNumber) {
    var prizeDoor = Math.floor(Math.random() * 8) + 1;
    var result = document.getElementById('result');
    var scoreDisplay = document.getElementById('score');
    
    if (doorNumber === prizeDoor) {
        result.textContent = 'Поздравляем! Вы нашли приз!';
        score += 10;
    } else {
        result.textContent = 'К сожалению, за этой дверью ничего нет. Попробуйте еще раз!';
        score -= 5;
    }
    
    scoreDisplay.textContent = 'Очки: ' + score;
}

function changePlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    var result = document.getElementById('result');
    result.textContent = 'Ход игрока ' + currentPlayer;
}