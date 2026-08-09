/* =========================
   ANIME BACKGROUND PARALLAX
========================= */

const background = document.querySelector(".anime-bg");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const moveX = Math.sin(scroll * 0.002) * 20;

    const moveY = scroll * 0.08;

    const zoom = 1.1 + scroll * 0.00005;

    background.style.transform =
        `translate(${moveX}px, ${-moveY}px) scale(${zoom})`;

});


/* =========================
   SAKURA PETALS
========================= */

const petals = document.getElementById("petals");

for (let i = 0; i < 35; i++) {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.animationDuration =
        5 + Math.random() * 8 + "s";

    petal.style.animationDelay =
        Math.random() * 8 + "s";

    petal.style.opacity =
        0.3 + Math.random() * 0.7;

    petal.style.transform =
        `scale(${0.5 + Math.random()})`;

    petals.appendChild(petal);
}


/* =========================
   MOUSE MOVEMENT
========================= */

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

    background.style.marginLeft = x + "px";

    background.style.marginTop = y + "px";

});