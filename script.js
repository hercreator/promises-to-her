
const promises = [
  "I promise you to never ever ignore you.❤️",
  "I promise you to always respect you.❤️",
  "I promise I will try my best to relief you from all your pain.❤️",
  "I promise you'll never feel alone Until i am with you.❤️",
  "I promise Nobody will ever take your place in my heart and life.❤️",
  "I promise to never cheat on you by talking about us to others.❤️",
  "I Promise to be your always chat partner whenever you can't sleep.❤️",
  "I promise you to take care of you always at the most.❤️",
  "I Promise you will always be my firstest priority.❤️",
  "I Promise to never hide anything from you whatsoever.❤️",
  "I promise I will always be the ears which will listen to your thoughts.❤️",
  "I Promise my efforts towards you will never get old or slow.❤️",
  "I Promise I will always be there to overcome your overthinking.❤️",
  "I Promise You'll never have to prove me anything to trust you.❤️",
  "I promise I will try my best to be give you emotional support.❤️",
  "I promise to understand you more than anyone else.❤️",
  "I promise to entertain your every mood swings❤️",
  "I Promise no 3rd person will ever come between us.❤️",
  "I Promise I will try my best to become your safest space.❤️"
];

let revealed = 0;

function typeWriter(el, text, i = 0) {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(el, text, i + 1), 55);
  }
}

typeWriter(document.getElementById("landingText"), "Happy Promise Day Mohtarmaaa ❤️");
setTimeout(() => {
  typeWriter(document.getElementById("landingSub"), "Tap a balloon to know my Commitment to you 🫣🤝");
}, 1200);

function start() {
  document.querySelector(".landing").classList.add("hidden");
  const scene = document.getElementById("scene");
  scene.classList.remove("hidden");

  promises.forEach((p) => {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 80 + "%";
    b.style.top = Math.random() * 40 + 15 + "%";

    b.innerHTML = `
      <svg viewBox="0 0 512 512">
        <path fill="#ff4d6d"
        d="M256 464s-64-56-120-112C64 280 32 232 32 176 32 97 97 32 176 32c44 0 80 24 80 24s36-24 80-24c79 0 144 65 144 144 0 56-32 104-104 176-56 56-120 112-120 112z"/>
      </svg>
      <div class="thread"></div>
    `;

    b.onclick = () => showCard(p, b);
    scene.appendChild(b);
  });
}

function showCard(text, balloon) {
  balloon.remove();
  revealed++;

  const c = document.createElement("div");
  c.className = "card";
  c.innerHTML = `<div class="card-inner">${text}<br><br><button onclick="this.closest('.card').remove()">Close</button></div>`;
  document.body.appendChild(c);

  if (revealed === promises.length) {
    setTimeout(showFinal, 1200);
  }
}

function showFinal() {
  document.getElementById("final").classList.remove("hidden");
  typeWriter(
    document.getElementById("finalText"),
    "I may have missed some but I'll not forget to fulfill them. I'll always be yourssss. ❤️"
  );
}
