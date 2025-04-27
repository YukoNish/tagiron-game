// 数字カードのデータ
const numberCards = [
  { number: 0, color: "red" }, { number: 1, color: "red" }, { number: 2, color: "red" },
  { number: 3, color: "red" }, { number: 4, color: "red" }, { number: 6, color: "red" },
  { number: 7, color: "red" }, { number: 8, color: "red" }, { number: 9, color: "red" },
  { number: 0, color: "blue" }, { number: 1, color: "blue" }, { number: 2, color: "blue" },
  { number: 3, color: "blue" }, { number: 4, color: "blue" }, { number: 6, color: "blue" },
  { number: 7, color: "blue" }, { number: 8, color: "blue" }, { number: 9, color: "blue" },
  { number: 5, color: "yellow" }, { number: 5, color: "yellow" }
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
  // ボタンを非表示に
  document.getElementById("start-button").style.display = "none";
  
  const shuffledNumbers = shuffle([...numberCards]);
  const shuffledQuestions = shuffle([...questionCards]);

  const playerHand = shuffledNumbers.slice(0, 5);
  const cpuHand = shuffledNumbers.slice(5, 10);
  const availableQuestions = shuffledQuestions.slice(0, 5);

  // プレイヤーのカード表示
  const playerCardsContainer = document.getElementById("player-cards");
  playerCardsContainer.innerHTML = "<h2>あなたのカード</h2>";
  playerHand.sort((a, b) => a.number - b.number || (a.color === "red" ? -1 : 1));
  playerHand.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", card.color);
    cardElement.innerHTML = card.number;
    playerCardsContainer.appendChild(cardElement);
  });

  // 質問カード表示
  const questionCardsContainer = document.getElementById("question-cards");
  questionCardsContainer.innerHTML = "<h2>場の質問カード</h2>";
  availableQuestions.forEach(question => {
    const questionElement = document.createElement("p");
    questionElement.innerHTML = question;
    questionCardsContainer.appendChild(questionElement);
  });
}

