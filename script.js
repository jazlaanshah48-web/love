const heart = document.querySelector(".heart");

const totalWords = 70;

function heartPoint(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

    return {
        x: x,
        y: -y
    };
}

for (let i = 0; i < totalWords; i++) {

    const word = document.createElement("span");

    word.className = "love-word";
    word.textContent = "I love you";

    const t = (Math.PI * 2 * i) / totalWords;

    const point = heartPoint(t);

    const x = 210 + point.x * 11;
    const y = 210 + point.y * 11;

    word.style.left = x + "px";
    word.style.top = y + "px";

    // Har text ko curve ke direction mein rotate karo
    const angle = Math.atan2(
        16 * Math.pow(Math.cos(t), 3),
        13 * Math.sin(t)
        - 10 * Math.sin(2 * t)
        - 6 * Math.sin(3 * t)
        - 4 * Math.sin(4 * t)
    ) * (180 / Math.PI);

    word.style.transform =
        `translate(-50%, -50%) rotate(${angle}deg)`;

    heart.appendChild(word);
}
