const MIN_SIZE = 20;
const MAX_SIZE = 35;
const RATE = 100;

const text = document.querySelector(".sparkle-text");
const header = document.getElementById("header");

let sparkleInterval = null;

function randomBetween(min, max) {
    return Math.random() * (max-min) + min;
}

// dark light toggle
function getSparkleSrc() {
    return document.body.classList.contains("light-mode")
        ? "assets/Lightsparkle.svg"
        : "assets/Darksparkle.svg";
}

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle-container");

    const svg = document.createElement("img");
    svg.src = getSparkleSrc();
    svg.style.width = `${randomBetween(MIN_SIZE, MAX_SIZE)}px`;
    svg.style.height = svg.style.width;

    sparkle.style.top = `${randomBetween(-40, 40)}%`;
    sparkle.style.left = `${randomBetween(0, 100)}%`;

    sparkle.appendChild(svg);
    text.appendChild(sparkle);
}

function randomInterval(min, max, callback) {
    const next = randomBetween(min, max);
    setTimeout(() => {
        callback();
        randomInterval(min, max, callback);
    }, next);
}

header.addEventListener("mouseenter", () => {
    if (sparkleInterval) return;
    sparkleInterval = setInterval(createSparkle, 300);
});

header.addEventListener("mouseleave", () => {
    clearInterval(sparkleInterval);
    sparkleInterval = null;
});