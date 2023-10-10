// 移動先のページの URL を取得する
const url = "https://pp-pixel.github.io/abus/3/";

// 10秒後に移動するイベントを割り当てる
setTimeout(() => {
  window.location.href = url;
}, 10000);

const audio = new Audio('sound.mp3');
audio.volume = 0.4; // 音量を40%に設定
 
document.getElementById('b-audio').addEventListener('mouseenter', () => {
  audio.play();
});

document.getElementById('info-audio').addEventListener('click', () => {
  audio.play();
});