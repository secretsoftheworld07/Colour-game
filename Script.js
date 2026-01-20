let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let currentColor;

function changeColor() {
    currentColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("color-box").style.background = currentColor;
}

document.getElementById("guess-btn").addEventListener("click", function() {
    let guess = document.getElementById("guess-input").value.toLowerCase();
    let resultEl = document.getElementById("result");

    if (guess === currentColor) {
        resultEl.innerText = "बरोबर! 🎉";
        changeColor();
    } else {
        resultEl.innerText = "चुकीचं! पुन्हा प्रयत्न करा.";
    }

    document.getElementById("guess-input").value = "";
});

changeColor(); // पहिलं रंग सेट