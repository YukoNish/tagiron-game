document.addEventListener('DOMContentLoaded', function () {
    // ゲームスタートボタンがクリックされた時にイベントを設定
    document.getElementById("start-game").addEventListener("click", function () {
        startGame();
    });

    // ゲームスタート時のセットアップ
    function startGame() {
        const numberCards = [
            "赤0", "赤1", "赤2", "赤3", "赤4", "赤6", "赤7", "赤8", "赤9",
            "青0", "青1", "青2", "青3", "青4", "青6", "青7", "青8", "青9",
            "黄5", "黄5"
        ];

        const shuffledNumbers = shuffle([...numberCards]);

        // プレイヤーとCPUの手札の配分
        const playerHand = shuffledNumbers.slice(0, 5);
        const cpuHand = shuffledNumbers.slice(5, 10);
        
        // プレイヤーのカードを小さい順に並べる
        const sortedPlayerHand = playerHand.sort((a, b) => {
            const numA = parseInt(a.match(/\d+/)[0]);
            const numB = parseInt(b.match(/\d+/)[0]);

            if (numA === numB) {
                if (a[0] === "赤" && b[0] !== "赤") {
                    return -1;
                } else if (a[0] !== "赤" && b[0] === "赤") {
                    return 1;
                } else {
                    return 0;
                }
            }
            return numA - numB;
        });

        // プレイヤーのカードを色付きの数字で表示
        const playerCardsHTML = sortedPlayerHand.map(card => {
            const [color, num] = card.split(/(?=\d)/);
            let colorClass = '';
            
            if (color === "赤") colorClass = "red-card";
            if (color === "青") colorClass = "blue-card";
            if (color === "黄") colorClass = "yellow-card";

            return `<span class="${colorClass}">${num}</span>`;
        }).join(", ");

        document.getElementById("player-cards").innerHTML = `
            <h2>あなたのカード</h2>
            <p>${playerCardsHTML}</p>
        `;
    }

    // シャッフル関数
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
