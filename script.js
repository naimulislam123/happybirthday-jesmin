const startBtn = document.getElementById("startBtn");
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  scene1.classList.remove("active");
  scene2.classList.add("active");

  if (music) {
    music.play().catch(() => {});
  }
});
