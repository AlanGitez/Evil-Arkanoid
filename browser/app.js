const socket = io(window.location.origin);

let usersConected = [];
socket.on("connect", () => {
    console.log("conexion bilateral permanente establecida.");
    socket.on("usersConeceted", (res) => console.log(res));
    console.log(usersConected.length)
})

game.on("positionUpdateOne", ( position, speed) => {
    console.log("actualizando player One")
    socket.emit("positionUpdateOne",  position, speed);
})

game.on("positionUpdateTwo", ( position, speed) => {
    console.log("actualizando player Two")
    socket.emit("positionUpdateTwo",  position, speed);
})

socket.on("positionUpdateOne", ( position, speed) => {
    game.moveCharacterOne(position, speed);
});

socket.on("positionUpdateTwo", ( position, speed) => {
    game.moveCharacterTwo(position, speed);
});