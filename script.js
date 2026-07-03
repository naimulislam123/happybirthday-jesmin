const startBtn = document.getElementById("startBtn");
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const giftBox = document.querySelector(".giftBox");

startBtn.onclick = () => {
    scene1.classList.remove("active");
    scene2.classList.add("active");
};

giftBox.onclick = () => {

    giftBox.classList.add("open");

    setTimeout(() => {
        document.body.innerHTML = `
        <div class="birthday">
            <h1>🎂</h1>
            <h2>Happy Birthday</h2>
            <h3>Jesmin 💖</h3>
        </div>
        `;
    },1200);

}
