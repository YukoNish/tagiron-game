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
  playerTurn(); // Start with player's turn
}
function playerTurn() {
  console.log("Player's turn");
  let selectedCard = playerHand[0]; // Picking the first card
  playerHand = playerHand.filter(card => card !== selectedCard); // Remove the card from the hand

  currentTurn = 'cpu'; // Switch to CPU's turn
  updateTurnDisplay();
  cpuTurn(); // Call CPU's turn
}

function cpuTurn() {
  console.log("CPU's turn");
  let selectedCard = cpuHand[0]; // Picking the first card
  cpuHand = cpuHand.filter(card => card !== selectedCard); // Remove the card from the CPU's hand

  currentTurn = 'player'; // Switch to player's turn
  updateTurnDisplay();
  playerTurn(); // Call player's turn
}
function updateTurnDisplay() {
  const turnDisplay = document.getElementById("turn-display");
  turnDisplay.innerText = currentTurn === 'player' ? 'あなたのターン' : 'CPUのターン';
}
