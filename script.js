const promises = [
  "I promise you to never ever ignore you.",
  "I promise you to always respect you.",
  "I promise It will always be.. Us vs the issues.",
  "I promise you'll never feel alone Until i am with you.",
  "I promise Nobody will take your place ever in my heart and life.",
  "I promise to never cheat on you & no 3rd person will come between us.",
  "I Promise to be your chat partner when you cant sleep.",
  "I promise you to take care of you at the most.",
  "I Promise you will always be my first priority.",
  "I Promise to never hide anything from you whatsoever.",
  "I promise I will always be the ears which will listen to your thoughts",
  "I Promise my efforts towards you will never get old or slow.",
  "I Promise I will always be there to overcome your overthinking.",
  "I Promise You'll never have to prove me anything about you.",
  "I promise Your opinion will always matter to me the most.",
  "I promise to understand you more than anyone else.",
  "I promise to entertain your every mood swings",
  "I Promise no 3rd person will ever know about us.",
  "I Promise I will try my best to become your safest space."
];

let revealed = 0;

/* Typewriter effect */
function typeWriter(el, text, i = 0) {
  if (!el) return;
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(el, text, i + 1), 55);
  }
}

/* Landing typing */
typeWriter(document.getElementById("landingText"), "Happy Promise Day ❤️");
setTimeout(() => {
  typeWriter(document.getElementById("landingSub"), "Tap a balloon to know mere dil ki baat...");
}, 1200);

/* NEW: Falling hearts / sparkles */
function spawnHearts() {
  const wrap = document.getElementById("hearts");
  if (!wrap) return;

  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";

    // Random heart/sparkle
    h.innerText = Math.random() > 0.45 ? "💗" : "✨";

    // Random position + size + speed
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (14 + Math.random() * 18) + "px";
    h.style.animationDuration = (4 + Math.random() * 4) + "s";

    wrap.appendChild(h);

    // Cleanup
    setTimeout(() => h.remove(), 9000);
  }, 250);
}

spawnHearts();

/* Start: hide landing, show balloons, start music */
function start() {
  // Play music after user click (mobile-friendly)
  const bgm = document.getElementById("bgm");
  if (bgm) bgm.play().catch(() => {});

  document.querySelector(".landing")?.classList.add("hidden");

  const scene = document.getElementById("scene");
  if (!scene) return;
  scene.classList.remove("hidden");

  promises.forEach((p) => {
    const b = document.createElement("div");
    b.className = "balloon";

    // Random placement
    b.style.left = Math.random() * 80 + "%";
    b.style.top = Math.random() * 40 + 15 + "%";

    b.innerHTML = 
      <svg viewBox="0 0 512 512">
        <path fill="#ff4d6d"
        d="M256 464s-64-56-120-112C64 280 32 232 32 176 32 97 97 32 176 32c44 0 80 24 80 24s36-24 80-24c79 0 144 65 144 144 0 56-32 104-104 176-56 56-120 112-120 112z"/>
      </svg>
      <div class="thread"></div>
    ;

    b.onclick = () => showCard(p, b);
    scene.appendChild(b);
  });
}

/* Popup card */
function showCard(text, balloon) {
  balloon.remove();
  revealed++;

  const c = document.createElement("div");
  c.className = "card";
  c.innerHTML = 
    <div class="card-inner">
      ${text}
      <br><br>
      <button onclick="this.closest('.card').remove()">Close</button>
    </div>
  ;
  document.body.appendChild(c);

  if (revealed === promises.length) {
    setTimeout(showFinal, 1200);
  }
}

/* Final message */
function showFinal() {
  document.getElementById("final")?.classList.remove("hidden");
  typeWriter(
    document.getElementById("finalText"),
    "I may have missed some but I'll not forget to fulfill them. I'll always be yours best partner.❤️"
  );
}
