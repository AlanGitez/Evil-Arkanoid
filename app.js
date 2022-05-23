const express = require('express')
const path = require("path");
const socketio = require("socket.io");


const app = express()
const port = 3000


const server = app.listen(port, () => console.log(`Server levantado y escuchando papá! ${port}!`))

const io = socketio(server);

let movesPlayerOne = [];
let movesPlayerTwo = [];
const usersConected = [];
io.on("connection", (socket) => {
    console.log("se establecio la conexion bilateral");
    console.log(usersConected);
    usersConected.push({id:socket.id});

    socket.emit("usersConeceted", usersConected);

    socket.on("positionUpdateOne", (position, speed) => {
        console.log("actualizando player one");
        // movesPlayerOne.map(move => socket.emit("positionUpdate", move.position, move.speed));

        socket.broadcast.emit("positionUpdateOne", position, speed)

        //movesPlayerOne.push({position, speed})
    })

    socket.on("positionUpdateTwo", (position, speed) => {
        console.log("actualizando player two");
        //movesPlayerTwo.map(move => socket.emit("positionUpdate", move.position, move.speed));

        socket.broadcast.emit("positionUpdateTwo", position, speed)

        //movesPlayerTwo.push({position, speed})
    })

})

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});