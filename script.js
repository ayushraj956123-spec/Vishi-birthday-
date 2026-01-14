function playSong() {
  var song = document.getElementById("song");
  if (song) {
    song.play();
  }
  launchConfetti();
}

function launchConfetti() {
  for (var i = 0; i < 40; i++) {
    var confetti = document.createElement("div");
    confetti.innerText = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.fontSize = "20px";
    confetti.style.animation = "fall 3s linear";
    confetti.style.zIndex = "9999";

    document.body.appendChild(confetti);

    setTimeout(function () {
      confetti.remove();
    }, 3000);
  }
}

/* CONFETTI ANIMATION */
var style = document.createElement("style");
style.innerHTML =
  "@keyframes fall {" +
  "to { transform: translateY(110vh); opacity: 0; }" +
  "}";

document.head.appendChild(style);