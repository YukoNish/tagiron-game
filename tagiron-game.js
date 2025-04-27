document.addEventListener('DOMContentLoaded', function () {
    // ゲームスタートボタンがクリックされた時にイベントを設定
    document.getElementById("start-game").addEventListener("click", function () {
        startGame();
    });

    // ゲームスタート時のセットアップ
    function startGame() {
        // ゲームカードの定義
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
            return numA - numB || a[0] === '赤' ? -1 : 1; // 同じ数字なら赤を左に
        });

        // プレイヤーのカード表示
        document.getElementById("player-cards").innerHTML = `
            <h2>あなたのカード</h2>
            <p>${sortedPlayerHand.join(", ")}</p>
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
