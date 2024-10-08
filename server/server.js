const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5174"
    }})

let Players = []    
io.on("connection", (socket) => {
    socket.on("nameChanged", (nameChanged)=>{
        Players.push({...nameChanged, id: socket.id})
        socket.emit("Players", Players)
    })
})

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000")
})    