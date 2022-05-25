
const socket = io(window.location.origin);

let usersCounter;
socket.on("connect", () => {
    console.log("conexion bilateral permanente establecida.");

    socket.on("usersUpdate", (usuariosConectados) => {
        game.emit("userConected", usuariosConectados)
    });

    game.on("newInstancePlayer", (posIni, id) => {
        socket.emit("newInstancePlayer", posIni, id )
    })
    socket.on("newInstancePlayer", (posIni, id) => {
        const newDiv = game.playerFactory();
        game.players.push(new Player(newDiv, posIni, id));
    })

    game.on("userRefresh", (playerId) => {
        socket.emit("userRefresh", playerId);
    })
    
})




// game.on("positionUpdateOne", ( position, speed) => {
//     console.log("actualizando player One")
//     socket.emit("positionUpdateOne",  position, speed);
// })

// game.on("positionUpdateTwo", ( position, speed) => {
//     console.log("actualizando player Two")
//     socket.emit("positionUpdateTwo",  position, speed);
// })

// socket.on("positionUpdateOne", ( position, speed) => {
//     game.moveCharacterOne(position, speed);
// });

// socket.on("positionUpdateTwo", ( position, speed) => {
//     game.moveCharacterTwo(position, speed);
// });