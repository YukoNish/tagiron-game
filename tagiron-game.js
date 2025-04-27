const numberCards = [
    "赤0", "赤1", "赤2", "赤3", "赤4", "赤6", "赤7", "赤8", "赤9",
    "青0", "青1", "青2", "青3", "青4", "青6", "青7", "青8", "青9",
    "黄5", "黄5"
];

const questionCards = [
    "あなたのカードの合計は？",
    "赤いカードの合計は？",
    "青いカードの合計は？",
    "最大の数字は？",
    "最小の数字は？",
];

let currentTurn = 'player'; // 最初はプレイヤーのターン
let playerHand = [];
let cpuHand = [];
let availableQuestions = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateTurnDisplay() {
  const turnDisplay = document.getElementById("turn-display");
  turnDisplay.innerText = currentTurn === 'player' ? 'あなたのターン' : 'CPUのターン';
}

function playerTurn() {
  let selectedCard = playerHand[0]; // 仮に最初のカードを選ぶ
  playerHand = playerHand.filter(card => card !== selectedCard);

  currentTurn = 'cpu';
  updateTurnDisplay();
  cpuTurn(); // 次はCPUのターン
}

function cpuTurn() {
  let selectedCard = cpuHand[0]; // 仮に最初のカードを選ぶ
  cpuHand = cpuHand.filter(card => card !== selectedCard);

  currentTurn = 'player';
  updateTurnDisplay();
  playerTurn(); // 次はプレイヤーのターン
}

function checkGameOver() {
  if (playerHand.length === 0 || cpuHand.length === 0) {
    alert("ゲーム終了");
  }
}

function startGame() {
  const shuffledNumbers = shuffle([...numberCards]);
  const shuffledQuestions = shuffle([...questionCards]);

  playerHand = shuffledNumbers.slice(0, 5);
  cpuHand = shuffledNumbers.slice(5, 10);
  availableQuestions = shuffledQuestions.slice(0, 6);

  document.getElementById("player-cards").innerHTML = `<h2>あなたのカード</h2><p>${playerHand.join(", ")}</p>`;
  document.getElementById("cpu-cards").innerHTML = `<h2>CPUのカード（デバッグ用）</h2><p>${cpuHand.join(", ")}</p>`;
  document.getElementById("question-cards").innerHTML = `<h2>場の質問カード</h2><p>${availableQuestions.join(", ")}</p>`;

  updateTurnDisplay();
  playerTurn(); // 最初はプレイヤーのターン
}

startGame();
