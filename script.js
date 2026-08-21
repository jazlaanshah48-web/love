const heart = document.querySelector(".heart");

const totalWords = 260;

// Heart formula
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

// Words ko heart ke outline par place karna
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

    heart.appendChild(word);
}
