let startX = 100;
let startY = 220; 
let size = 100;
let buffer = 10;

let cell1 = null;
let cell2 = null;
let cell3 = null;
let cell4 = null;
let cell5 = null;
let cell6 = null;
let cell7 = null;
let cell8 = null;
let cell9 = null;

let currentPlayer = 1;
let gameOver = false;
let winner = null;

function setup() {
  createCanvas(1100, 1200);

  let resetButton = createButton('Restart');
  resetButton.position(startX, 150);
  resetButton.size(120, 40);
  resetButton.style('font-size', '18px');
  resetButton.style('border-radius', '8px');
  resetButton.style('cursor', 'pointer');
  resetButton.mousePressed(resetGame);
}

function draw() {
  background(245, 243, 235); // soft off-white background

  drawTitle();
  drawStatus();
  drawBoard();
}

function drawTitle() {
  fill(30, 30, 30);
  noStroke();
  textSize(48);
  textStyle(BOLD);
  text("Tic Tac Toe", startX, 90);
}

function drawStatus() {
  textStyle(NORMAL);
  textSize(28);

  if (winner === 1) {
    fill(0, 0, 255);
    text("Player 1 wins!", startX + 160, 178);
  } else if (winner === 2) {
    fill(255, 0, 0);
    text("Player 2 wins!", startX + 160, 178);
  } else if (winner === "draw") {
    fill(80);
    text("It's a draw!", startX + 160, 178);
  } else {
    if (currentPlayer === 1) {
      fill(0, 0, 255);
    } else {
      fill(255, 0, 0);
    }
    text("Player " + currentPlayer + "'s turn", startX + 160, 178);
  }
}

function drawBoard() {
  let cellX = startX;
  let cellY = startY;

  drawCell(cell1, cellX, cellY);
  cellX = cellX + size + buffer;
  drawCell(cell2, cellX, cellY);
  cellX = cellX + size + buffer;
  drawCell(cell3, cellX, cellY);

  cellX = startX;
  cellY = cellY + size + buffer;
  drawCell(cell4, cellX, cellY);
  cellX = cellX + size + buffer;
  drawCell(cell5, cellX, cellY);
  cellX = cellX + size + buffer;
  drawCell(cell6, cellX, cellY);

  cellX = startX;
  cellY = cellY + size + buffer;
  drawCell(cell7, cellX, cellY);
  cellX = cellX + size + buffer;
  drawCell(cell8, cellX, cellY);
  cellX = cellX + size + buffer;
  drawCell(cell9, cellX, cellY);
}

function drawCell(value, x, y) {
  stroke(200);
  strokeWeight(2);

  if (value === 1) {
    fill(80, 110, 255); // softer blue
  } else if (value === 2) {
    fill(255, 100, 90); // softer red
  } else {
    fill(255); // empty
  }
  rect(x, y, size, size, 12); // rounded corners
}

function mousePressed() {
  if (gameOver) return;

  if (mouseX > startX && mouseX < startX + size &&
      mouseY > startY && mouseY < startY + size && cell1 === null) {
    cell1 = currentPlayer;
    afterMove();
  }

  if (mouseX > startX + size + buffer && mouseX < startX + size + buffer + size &&
      mouseY > startY && mouseY < startY + size && cell2 === null) {
    cell2 = currentPlayer;
    afterMove();
  }

  if (mouseX > startX + 2 * size + 2 * buffer && mouseX < startX + 2 * size + 2 * buffer + size &&
      mouseY > startY && mouseY < startY + size && cell3 === null) {
    cell3 = currentPlayer;
    afterMove();
  }

  if (mouseX > startX && mouseX < startX + size &&
      mouseY > startY + size + buffer && mouseY < startY + size + buffer + size && cell4 === null) {
    cell4 = currentPlayer;
    afterMove();
  }

  if (mouseX > startX + size + buffer && mouseX < startX + size + buffer + size &&
      mouseY > startY + size + buffer && mouseY < startY + size + buffer + size && cell5 === null) {
    cell5 = currentPlayer;
    afterMove();
  }

  if (mouseX > startX + 2 * size + 2 * buffer && mouseX < startX + 2 * size + 2 * buffer + size &&
      mouseY > startY + size + buffer && mouseY < startY + size + buffer + size && cell6 === null) {
    cell6 = currentPlayer;
    afterMove();
  }

  if (mouseX > startX && mouseX < startX + size &&
      mouseY > startY + 2 * size + 2 * buffer && mouseY < startY + 2 * size + 2 * buffer + size && cell7 === null) {
    cell7 = currentPlayer;
    afterMove();
  }

  if (mouseX > startX + size + buffer && mouseX < startX + size + buffer + size &&
      mouseY > startY + 2 * size + 2 * buffer && mouseY < startY + 2 * size + 2 * buffer + size && cell8 === null) {
    cell8 = currentPlayer;
    afterMove();
  }

  if (mouseX > startX + 2 * size + 2 * buffer && mouseX < startX + 2 * size + 2 * buffer + size &&
      mouseY > startY + 2 * size + 2 * buffer && mouseY < startY + 2 * size + 2 * buffer + size && cell9 === null) {
    cell9 = currentPlayer;
    afterMove();
  }
}

function afterMove() {
  checkWin();
  if (!gameOver) {
    switchPlayer();
  }
}

function switchPlayer() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
}

function checkWin() {
  if (cell1 !== null && cell1 === cell2 && cell2 === cell3) {
    gameOver = true; winner = cell1; return;
  }
  if (cell4 !== null && cell4 === cell5 && cell5 === cell6) {
    gameOver = true; winner = cell4; return;
  }
  if (cell7 !== null && cell7 === cell8 && cell8 === cell9) {
    gameOver = true; winner = cell7; return;
  }
  if (cell1 !== null && cell1 === cell4 && cell4 === cell7) {
    gameOver = true; winner = cell1; return;
  }
  if (cell2 !== null && cell2 === cell5 && cell5 === cell8) {
    gameOver = true; winner = cell2; return;
  }
  if (cell3 !== null && cell3 === cell6 && cell6 === cell9) {
    gameOver = true; winner = cell3; return;
  }
  if (cell1 !== null && cell1 === cell5 && cell5 === cell9) {
    gameOver = true; winner = cell1; return;
  }
  if (cell3 !== null && cell3 === cell5 && cell5 === cell7) {
    gameOver = true; winner = cell3; return;
  }

  if (cell1 !== null && cell2 !== null && cell3 !== null &&
      cell4 !== null && cell5 !== null && cell6 !== null &&
      cell7 !== null && cell8 !== null && cell9 !== null) {
    gameOver = true;
    winner = "draw";
  }
}

function resetGame() {
  cell1 = null; cell2 = null; cell3 = null;
  cell4 = null; cell5 = null; cell6 = null;
  cell7 = null; cell8 = null; cell9 = null;
  currentPlayer = 1;
  gameOver = false;
  winner = null;
}