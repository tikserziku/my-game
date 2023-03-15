let score = 0;
const scoreElement = document.getElementById('score');
const movingSquareElement = document.querySelector('.moving-square');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveSquare() {
  const squareElement = document.querySelector('.square');
  const squareWidth = squareElement.offsetWidth;
  const squareHeight = squareElement.offsetHeight;
  const movingSquareWidth = movingSquareElement.offsetWidth;
  const movingSquareHeight = movingSquareElement.offsetHeight;
  const maxLeft = squareWidth - movingSquareWidth;
  const maxTop = squareHeight - movingSquareHeight;
  const left = getRandomNumber(0, maxLeft);
  const top = getRandomNumber(0, maxTop);
  movingSquareElement.style.left = left + 'px';
  movingSquareElement.style.top = top + 'px';
}

function incrementScore() {
  score++;
  scoreElement.innerText = score;
}

movingSquareElement.addEventListener('click', function() {
  incrementScore();
  moveSquare();
});

moveSquare();