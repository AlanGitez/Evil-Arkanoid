game = new EventController();

let movementSpeed = 15;
const maxPlayers = 2;

const examplePlayerDiv = document.querySelector(".player");
const container = document.querySelector(".container");
const display = document.querySelector(".display");

// container limits, the movement has restricted by dimensions
const maxPosition = display.clientHeight - 75;
const minPosition = 0;

//player position x & y cords;
const cords = {
    1: [maxPosition, 0],
    2: [0, display.clientWidth - 22]
}

const playerDraw = () => {
    return 
};

game.playerFactory = () => {
    const divPlayer = document.createElement("div");
    display.appendChild(divPlayer);
    divPlayer.classList.add("player");
    return divPlayer;    
}

game.players = [];

game.on("userConected", (usersConected) => {

    if(usersConected > maxPlayers){
        //mostrar cartel de espera, sala ocupada.
        console.log("demasiados usuarios");
    }else {
        const divPlayer = game.playerFactory();
        
        game.players.push(new Player(divPlayer, cords[usersConected], usersConected));
        
        game.emit("newPlayerInstance", cords[usersConected], usersConected)

        console.log("users conected GAME.JS", usersConected);
        console.log("PLAYER: ", game.players[usersConected].id);
        console.log("USUARIOS CONECTADOS: ", usersConected);
    }
    
    window.addEventListener("unload", (e) => {
        e.preventDefault();
        game.emit("userRefresh", playerId);
    })

});

// game.moveCharacterOne = (position, speed = 0, shouldBroadcast = false)=>{
//     // console.log(player);
//     position[0] += speed;
//     playerOne.style.top = position[0] + "px";
//     playerOne.style.left = position[1] + "px";
    // shouldBroadcast && game.emit("positionUpdateOne", position, speed);
// }


// game.moveCharacterTwo = (position, speed = 0, shouldBroadcast = false)=>{
//     position[0] += speed;
//     playerTwo.style.top = position[0] + "px";
//     playerTwo.style.left = position[1] + "px";
    // shouldBroadcast && game.emit("positionUpdateTwo", position, speed);
// }


// game.moveCharacterOne(playerOnePosition);
// game.moveCharacterTwo(playerTwoPosition);






// document.addEventListener("keydown", (e) => {
//     // e.preventDefault();
//     if(e.key == "w") {
//         if(playerOnePosition[0] > minPosition){
//             game.moveCharacterOne(playerOnePosition, -movementSpeed, true);
//         }      
//     }
//     if(e.key == "s") {
//         if(playerOnePosition[0] < maxPosition){
//             game.moveCharacterOne(playerOnePosition, movementSpeed, true);
       
//         }
//     }

//     if(e.key == "i") {
//         if(playerTwoPosition[0] > minPosition){
//             game.moveCharacterTwo(playerTwoPosition, -movementSpeed, true);
       
//         }      
//     }
//     if(e.key == "k") {playerTwoPosition
//         if(playerTwoPosition[0] < maxPosition){
//             game.moveCharacterTwo(playerTwoPosition, movementSpeed, true);
       
//         }
//     }
// });