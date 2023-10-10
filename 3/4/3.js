// 問題の表示
function showQuestion() {
  document.getElementById("question").textContent = "せいかいは..?";
}

// 回答のチェック
function checkAnswer() {
  const answer = document.getElementById("answer").value;
  const correctAnswer = "1";

  if (answer === correctAnswer) {
    // 正解の場合
    window.location.href = "https://pp-pixel.github.io/abus/finish/b/";
  } else {
    // 不正解の場合
    window.location.href = "https://pp-pixel.github.io/abus/finish/c/";
  }
}

// ボタン押下時の処理
document.getElementById("submit").addEventListener("click", checkAnswer);

// 初期表示
showQuestion();
const input = document.querySelector("input");
input.autocomplete = "off";
// 1~3のみ入力
input.addEventListener("input", () => {
  const value = input.value;
  if (!/^(1|2|3)$/.test(value)) {
    input.value = "";
  }
});