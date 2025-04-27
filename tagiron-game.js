document.getElementById("start-game").addEventListener("click", function() {
  // ゲーム開始
  startGame();
});

function startGame() {
  const shuffledNumbers = shuffle([...numberCards]);
  const shuffledQuestions = shuffle([...questionCards]);

  // プレイヤーとCPUの手札を分ける
  const playerHand = shuffledNumbers.slice(0, 5);
  const cpuHand = shuffledNumbers.slice(5, 10);

  // プレイヤーのカードを小さい順に並べ、同じ数字は赤を左に
  const sortedPlayerHand = playerHand.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    if (numA === numB) {
      // 数字が同じ場合、赤を左に
      if (a.includes("赤") && !b.includes("赤")) return -1;
      if (!a.includes("赤") && b.includes("赤")) return 1;
    }
    return numA - numB;
  });

  // プレイヤーのカード表示
  document.getElementById("player-cards").innerHTML = `<h2>あなたのカード</h2><p>${sortedPlayerHand.join(", ")}</p>`;

  // CPUのカードは表示しない（デバッグ用コメント）
  // document.getElementById("cpu-cards").innerHTML = `<h2>CPUのカード（デバッグ用）</h2><p>${cpuHand.join(", ")}</p>`;

  // 質問カード表示
  const availableQuestions = shuffledQuestions.slice(0, 6);
  document.getElementById("question-cards").innerHTML = `<h2>場の質問カード</h2><p>${availableQuestions.join(", ")}</p>`;
}

// シャッフル関数
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
