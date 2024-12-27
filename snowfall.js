// Winter Update
var snowToggle = true;

function loadButton() {
    if (localStorage.getItem("snowToggle")) {
        snowToggle = JSON.parse(localStorage.getItem("snowToggle"));

        if (snowToggle) {
            let button = document.getElementById("snow-toggle");
            button.style.justifyContent = "flex-start";
            button.style.background = "green";
        } else {
            let button = document.getElementById("snow-toggle");
            button.style.justifyContent = "flex-end";
            button.style.background = "red";
        }
    } else {
        localStorage.setItem("snowToggle", snowToggle);
    }
}

// Extra notes for Joesph
let all_snowflake = ["snowflake.png", "snowflake1.png", "fieri.png", "yamaka.png"];

function createSnowFlake() {
    // Creates a new div using js
    let snowflake = document.createElement("div");

    // Add the class snowflake for animation and css
    snowflake.classList.add("snowflake");

    // Where the snowflake will live
    let page = document.getElementById("main");
    const scrolled = window.scrollY;

    // Randomly generate a number for the size and position
    snowflake.style.top = scrolled - 50 + "px";
    snowflake.style.left = Math.floor(Math.random() * 100) + "%";
    const flake_size = Math.floor(Math.random() * 100) + 100 + "px";
    const snowflake_type = all_snowflake[Math.floor(Math.random() * all_snowflake.length)];
    snowflake.style.height = flake_size;
    snowflake.style.width = flake_size;

    // 50/50 shot of a snowflake image
    snowflake.style.backgroundImage = `url(Assests/${snowflake_type})`;

    // Add the snowflake to container
    page.appendChild(snowflake);

    setTimeout(function () {
        snowflake.style.opacity = 0;
    }, 4000);

    // Remove the snowflake after the css animation is finish
    snowflake.addEventListener("animationend", function () {
        snowflake.remove();
    });
}

function setSnowToggle(button) {
    localStorage.setItem("snowToggle", !snowToggle);
    snowToggle = !snowToggle;

    if (snowToggle) {
        button.style.justifyContent = "flex-start";
        button.style.background = "green";
    } else {
        button.style.justifyContent = "flex-end";
        button.style.background = "red";
    }
}

// Set how fast a snowflake will spawn
setInterval(function () {
    if (snowToggle) {
        createSnowFlake();
    }
}, 300);

loadButton();
