// 数字カードのデータ（色＋数字）
const numberCards = [
  "赤0", "赤1", "赤2", "赤3", "赤4", "赤6", "赤7", "赤8", "赤9",
  "青0", "青1", "青2", "青3", "青4", "青6", "青7", "青8", "青9",
  "黄5", "黄5"
];

// 質問カード（仮のリスト）
const questionCards = [
  "あなたのカードの合計は？",
  "赤いカードの合計は？",
  "青いカードの合計は？",
  "最大の数字は？",
  "最小の数字は？"
];

// シャッフル関数
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ゲームスタート時のセットアップ
function startGame() {
  // 数字カードと質問カードをシャッフル
  const shuffledNumbers = shuffle([...numberCards]);
  const shuffledQuestions = shuffle([...questionCards]);

  // プレイヤーとCPUの手札の配分
  const playerHand = shuffledNumbers.slice(0, 5);
  const cpuHand = shuffledNumbers.slice(5, 10);
  const availableQuestions = shuffledQuestions.slice(0, 6);

  // プレイヤーのカードを小さい順に並べる
  const sortedPlayerHand = playerHand.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB || a[0] === '赤' ? -1 : 1; // 同じ数字なら赤を左に
  });

  // CPUのカードを小さい順に並べる（デバッグ用に表示）
  const sortedCpuHand = cpuHand.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB || a[0] === '赤' ? -1 : 1;
  });

  // 質問カードを表示
  document.getElementById("question-cards").innerHTML = `<h2>場の質問カード</h2><p>${availableQuestions.join(", ")}</p>`;

  // プレイヤーのカード表示
  const playerCardsHtml = sortedPlayerHand.map(card => {
    const color = card.split('')[0]; // 赤、青、黄
    return `<div class="card ${color}">${card}</div>`;
  }).join('');
  document.getElementById("player-cards").innerHTML = `<h2>あなたのカード</h2><div class="card-container">${playerCardsHtml}</div>`;

  // CPUのカード表示（デバッグ用）
  const cpuCardsHtml = sortedCpuHand.map(card => {
    const color = card.split('')[0]; // 赤、青、黄
    return `<div class="card ${color}">${card}</div>`;
  }).join('');
  document.getElementById("cpu-cards").innerHTML = `<h2>CPUのカード（デバッグ用）</h2><div class="card-container">${cpuCardsHtml}</div>`;
}

// ゲームスタートのボタンにイベントを追加
document.getElementById("start-game").addEventListener("click", () => {
  startGame();
});
