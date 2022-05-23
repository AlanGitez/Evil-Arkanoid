const sheep = document.querySelector(".sheep");

const sheepController = () => {
    sheep.addEventListener("keydown", (e) => {
        if(e.key == "D")
        console.log(e);
    })
}