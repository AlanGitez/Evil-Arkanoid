/* Aca empieza la fiesta! */

// const container = document.querySelector("#container")
// const background = document.querySelector("#background")
// const sheep = document.querySelector("#sheep")

const pauseButton = document.querySelector(".pause");
const pauseText = document.querySelector(".pauseText");

const playButton = document.querySelector(".play");
const instructions = document.querySelector(".instructions");

const sheep = document.querySelector(".sheep");
const canvas = document.querySelector("#canvas");



playButton.addEventListener("click", (e) => {
    instructions.classList.toggle("enabled")
});

pauseButton.addEventListener("click", (e) => {
    pauseText.classList.toggle("enabled")
})


// const pauseMode = () => {
//     pa
// }