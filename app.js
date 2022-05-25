const express = require('express');
const path = require("path");
const socketio = require("socket.io");


const app = express()
const port = 3000


const server = app.listen(port, () => console.log(`Server levantado y escuchando papá! ${port}!`))

const io = socketio(server,{ 
    cors: {
        origin: "http://localhost:3000"
  }});

const usersConected = [0, {id: "", adress: ""}];

io.on("connection", (socket) => {
    console.log("se establecio la conexion bilateral");
    usersConected[0] > 2 ? socket.disconnect() : usersConected[0]++;
    
    socket.emit("usersUpdate", usersConected[0]); // esto esta bien 
    io.on("newInstancePlayer", (posIni, id) => {
        socket.broadcast.emit("newInstancePlayer",posIni, id )
    })
    socket.on("disconnect", () => {
        usersConected[0]--;
        io.emit("actualizar", usersConected);
    })
    socket.on("userRefresh", () => {
        socket.disconnect();
    })
    console.log(usersConected[0]);

    // socket.on("positionUpdateOne", (position, speed) => {
    //     console.log("actualizando player one");
    //     // movesPlayerOne.map(move => socket.emit("positionUpdate", move.position, move.speed));

    //     socket.broadcast.emit("positionUpdateOne", position, speed)

    //     //movesPlayerOne.push({position, speed})
    // })

    // socket.on("positionUpdateTwo", (position, speed) => {
    //     console.log("actualizando player two");
    //     //movesPlayerTwo.map(move => socket.emit("positionUpdate", move.position, move.speed));

    //     socket.broadcast.emit("positionUpdateTwo", position, speed)

    //     //movesPlayerTwo.push({position, speed})
    // })

})

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});