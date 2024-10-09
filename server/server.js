const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173"
    }})

  
io.on("connection", (socket) => {
    socket.on("createRoom",(room,Name,cb) =>{
        socket.join(room)
        cb({room:room , name:Name})
    })
    socket.on("joinRoom",(room,Name, cb) =>{
        socket.join(room)
        cb({room:room , name:Name})
    })
})

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000")
})    