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

        scene2.classList.remove("active");

        document.getElementById("birthdayScene").classList.add("active");

    },1200);

}
