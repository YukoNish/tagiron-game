// ここにあなたのゲームのJavaScriptコードを書く
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
  // ...続きはあとで
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame() {
  const shuffledNumbers = shuffle([...numberCards]);
  const shuffledQuestions = shuffle([...questionCards]);

  const playerHand = shuffledNumbers.slice(0, 5);
  const cpuHand = shuffledNumbers.slice(5, 10);
  const availableQuestions = shuffledQuestions.slice(0, 6);

  document.getElementById("player-cards").innerHTML = `<h2>あなたのカード</h2><p>${playerHand.join(", ")}</p>`;
  document.getElementById("cpu-cards").innerHTML = `<h2>CPUのカード（デバッグ用）</h2><p>${cpuHand.join(", ")}</p>`;
  document.getElementById("question-cards").innerHTML = `<h2>場の質問カード</h2><p>${availableQuestions.join(", ")}</p>`;
}

// スタート！
startGame();
let currentTurn = 'player'; // ゲーム開始時はプレイヤーのターン
let playerHand = ["赤3", "青5", "黄5", "赤7", "青1"];  // プレイヤーの手札
let cpuHand = ["赤2", "青8", "黄5", "青3", "赤9"];    // CPUの手札

function startGame() {
  // 初期化処理
  updateTurnDisplay();
  playerTurn(); // ゲーム開始 → プレイヤーのターン
}

function playerTurn() {
  console.log("プレイヤーのターン");
  // プレイヤーがカードを選ぶ処理（仮）
  playerHand.pop();  // 例えば1枚カードを使う
  checkGameOver();   // ゲーム終了判定
  currentTurn = 'cpu';
  updateTurnDisplay();
  cpuTurn(); // 次はCPUのターン
}

function cpuTurn() {
  console.log("CPUのターン");
  cpuHand.pop();  // CPUもカードを1枚使う仮の処理
  checkGameOver();
  currentTurn = 'player';
  updateTurnDisplay();
  playerTurn(); // 次はプレイヤーのターン
}

function checkGameOver() {
  if (playerHand.length === 0 || cpuHand.length === 0) {
    alert("ゲーム終了");
  }
}

function updateTurnDisplay() {
  const turnDisplay = document.getElementById("turn-display");
  turnDisplay.innerText = currentTurn === 'player' ? 'あなたのターン' : 'CPUのターン';
}

// 初期化
startGame();
