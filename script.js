const startBtn = document.getElementById("startBtn");
const giftBox = document.getElementById("giftBox");

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");

startBtn.addEventListener("click", () => {
    scene1.classList.remove("active");
    scene2.classList.add("active");
});

giftBox.addEventListener("click", () => {

    giftBox.style.transform = "scale(1.2)";
    giftBox.style.transition = ".5s";

    setTimeout(() => {

        scene2.classList.remove("active");
        scene3.classList.add("active");

        createHearts();

    },800);

});

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize=(20+Math.random()*25)+"px";
        heart.style.animation="fly 5s linear";

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),5000);

    },300);

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fly{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-120vh);
opacity:0;
}
}
`;

document.head.appendChild(style);
