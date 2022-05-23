game = new EventController();

const playerOne = document.querySelector(".playerOne");
const playerTwo = document.querySelector(".playerTwo");
const container = document.querySelector(".container");
const display = document.querySelector(".display");

// container limits, the movement has restricted by dimensions
const maxPosition = display.clientHeight - playerOne.clientHeight;
const minPosition = 0;

//player position x & y cords;
const initialPositionPO = [maxPosition, 0]
const initialPositionPT = [0, display.clientWidth - playerTwo.clientWidth]

let playerOnePosition = initialPositionPO;
let playerTwoPosition = initialPositionPT;

game.moveCharacterOne = (position, speed = 0, shouldBroadcast = false)=>{
    // console.log(player);
    position[0] += speed;
    playerOne.style.top = position[0] + "px";
    playerOne.style.left = position[1] + "px";
    shouldBroadcast && game.emit("positionUpdateOne", position, speed);
}


game.moveCharacterTwo = (position, speed = 0, shouldBroadcast = false)=>{
    position[0] += speed;
    playerTwo.style.top = position[0] + "px";
    playerTwo.style.left = position[1] + "px";
    shouldBroadcast && game.emit("positionUpdateTwo", position, speed);
}


game.moveCharacterOne(playerOnePosition);
game.moveCharacterTwo(playerTwoPosition);



let movementSpeed = 15;


document.addEventListener("keydown", (e) => {
    // e.preventDefault();
    if(e.key == "w") {
        if(playerOnePosition[0] > minPosition){
            game.moveCharacterOne(playerOnePosition, -movementSpeed, true);
        }      
    }
    if(e.key == "s") {
        if(playerOnePosition[0] < maxPosition){
            game.moveCharacterOne(playerOnePosition, movementSpeed, true);
       
        }
    }

    if(e.key == "i") {
        if(playerTwoPosition[0] > minPosition){
            game.moveCharacterTwo(playerTwoPosition, -movementSpeed, true);
       
        }      
    }
    if(e.key == "k") {playerTwoPosition
        if(playerTwoPosition[0] < maxPosition){
            game.moveCharacterTwo(playerTwoPosition, movementSpeed, true);
       
        }
    }
});