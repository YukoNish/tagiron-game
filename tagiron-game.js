function startGame() {
  console.log("Game started");
  const shuffledNumbers = shuffle([...numberCards]);
  const shuffledQuestions = shuffle([...questionCards]);

  playerHand = shuffledNumbers.slice(0, 5);
  cpuHand = shuffledNumbers.slice(5, 10);
  availableQuestions = shuffledQuestions.slice(0, 6);

  document.getElementById("player-cards").innerHTML = `<h2>あなたのカード</h2><p>${playerHand.join(", ")}</p>`;
  document.getElementById("cpu-cards").innerHTML = `<h2>CPUのカード（デバッグ用）</h2><p>${cpuHand.join(", ")}</p>`;
  document.getElementById("question-cards").innerHTML = `<h2>場の質問カード</h2><p>${availableQuestions.join(", ")}</p>`;

  updateTurnDisplay();
  playerTurn(); // プレイヤーのターン開始
}
