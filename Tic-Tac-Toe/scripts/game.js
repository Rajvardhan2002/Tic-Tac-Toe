function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set Player Name for both the players to start the game");
    return;
  }

  resetGameStatus();
  activePlayerNameDuringGame.textContent = players[activePlayer].name;
  gamingarea.style.display = "block";
}

function changeActivePlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameDuringGame.textContent = players[activePlayer].name;
}

function setSymbol(event) {
  //storing row and columns of selected boxes
  if (gameIsOver) {
    return;
  }
  const selectedRow = event.target.dataset.row;
  const selectedColumn = event.target.dataset.col;

  if (gamingFieldBoxes[selectedRow - 1][selectedColumn - 1] === 0) {
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add("disabled");
    gamingFieldBoxes[selectedRow - 1][selectedColumn - 1] = activePlayer + 1; //Storing 1 for player 1 and storing 2 for player 2
  } else {
    alert("Please select an empty box.");
    return;
  }
  winnerPlayerId = checkWinner();
  numberOfRounds++;
  if (winnerPlayerId !== 0) {
    declaringWinner(winnerPlayerId);
    return;
  }
  changeActivePlayer();
}

function checkWinner() {
  //Checking for rows
  for (let i = 0; i < 3; i++) {
    if (
      gamingFieldBoxes[i][0] > 0 &&
      gamingFieldBoxes[i][0] === gamingFieldBoxes[i][1] &&
      gamingFieldBoxes[i][1] === gamingFieldBoxes[i][2]
    ) {
      return gamingFieldBoxes[i][0];
    }
  }
  //Checking for columns
  for (let i = 0; i < 3; i++) {
    if (
      gamingFieldBoxes[0][i] > 0 &&
      gamingFieldBoxes[0][i] === gamingFieldBoxes[1][i] &&
      gamingFieldBoxes[1][i] === gamingFieldBoxes[2][i]
    ) {
      return gamingFieldBoxes[0][i];
    }
  }
  //checking for diagonal 1
  if (
    gamingFieldBoxes[0][0] > 0 &&
    gamingFieldBoxes[0][0] === gamingFieldBoxes[1][1] &&
    gamingFieldBoxes[1][1] === gamingFieldBoxes[2][2]
  ) {
    return gamingFieldBoxes[0][0];
  }
  //Checking for diagobal 2
  if (
    gamingFieldBoxes[0][2] > 0 &&
    gamingFieldBoxes[0][2] === gamingFieldBoxes[1][1] &&
    gamingFieldBoxes[1][1] === gamingFieldBoxes[2][0]
  ) {
    return gamingFieldBoxes[2][0];
  }
  if (numberOfRounds === 9) {
    return -1;
  } else {
    return 0;
  }
}

function declaringWinner(winnerPlayerId) {
  gameIsOver = true;
  gameOverArticle.style.display = "block";
  if (winnerPlayerId > 0) {
    const winnerPlayerName = players[winnerPlayerId - 1].name;
    gameOverArticle.firstElementChild.firstElementChild.textContent =
      winnerPlayerName;
  } else {
    gameOverArticle.firstElementChild.textContent = "It's a draw!!";
  }
}

function resetGameStatus() {
  activePlayer = 0;
  editedPlayer = 0;
  gameIsOver = false;
  winnerPlayerId = 0;
  numberOfRounds = 1;
  gameOverArticle.firstElementChild.innerHTML =
    'You won, <span id="winnerName">PLAYER NAME</span>!!';
  gameOverArticle.style.display = "none";

  for (const gameFieldElement of gamingFieldListItems) {
    gameFieldElement.textContent = "";
    gameFieldElement.classList.remove("disabled");
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gamingFieldBoxes[i][j] = 0;
    }
  }
}
