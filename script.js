const mainScreen = document.getElementById("main-screen");
const labScreen = document.getElementById("lab-screen");

const startButton = document.getElementById("start-button");
const labButton = document.getElementById("lab-button");
const aboutButton = document.getElementById("about-button");

const backButton = document.getElementById("back-button");


/* =========================
   OPEN LAB
========================= */

function openLab() {

    mainScreen.style.display = "none";

    labScreen.style.display = "block";

}


/* =========================
   GO BACK
========================= */

function goBack() {

    labScreen.style.display = "none";

    mainScreen.style.display = "flex";

}


/* =========================
   BUTTON EVENTS
========================= */

startButton.addEventListener("click", openLab);

labButton.addEventListener("click", openLab);

backButton.addEventListener("click", goBack);


/* =========================
   ABOUT
========================= */

aboutButton.addEventListener("click", function () {

    alert(
        "MEMBRANE\n\n" +
        "A Virtual Cell Membrane Laboratory\n\n" +
        "Explore how molecules cross the cell membrane."
    );

});
