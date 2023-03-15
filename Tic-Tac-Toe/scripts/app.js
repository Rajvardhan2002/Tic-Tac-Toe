const modal = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

const editPlayer1Btn = document.getElementById("editPlayer1Btn");
const editPlayer2Btn = document.getElementById("editPlayer2Btn");

const cancelBtn = document.getElementById("cancelBtn");
const tapAnywhereToClose = document.getElementById("backdrop");

const formElement = document.querySelector("form");

const errorOutputElement = document.getElementById("errorMessage");

let editedPlayer = 0;

let activePlayer = 0;

let winnerPlayerId = 0;

let numberOfRounds = 1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const gamingFieldBoxes = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let activePlayerNameDuringGame = document.getElementById("activePlayerName");

const startGameBtn = document.getElementById("start-game-Btn");

const gamingarea = document.getElementById("active-game");

const gamingFieldListItems = document.querySelectorAll("#gameBoard li");

const gameOverArticle = document.getElementById("game-over");

let gameIsOver = false;
//fxn
editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelBtn.addEventListener("click", closeOpenPlayerConfig);
tapAnywhereToClose.addEventListener("click", closeOpenPlayerConfig);

formElement.addEventListener("submit", avoidFormSubmissionAndSettingUserName);

startGameBtn.addEventListener("click", startNewGame);

for (const gameFieldElement of gamingFieldListItems) {
  gameFieldElement.addEventListener("click", setSymbol);
}
