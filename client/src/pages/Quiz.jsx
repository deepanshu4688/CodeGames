import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
import Playerprofile from '../components/Playerprofile'
import roomCodeGenerator from '../constants/RoomCodeGenerator'
import Roombox from '../components/Roombox'
import { Share2, Users } from "lucide-react"

// Basic UI components
const Button = ({ children, className, onClick }) => (
  <button className={`px-4 py-2 rounded ${className}`} onClick={onClick}>
    {children}
  </button>
)

const Input = ({ placeholder, value, onChange, className }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`px-3 py-2 rounded ${className}`}
  />
)

const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md ${className}`}>
    {children}
  </div>
)

const CardHeader = ({ children }) => (
  <div className="p-4 border-b">
    {children}
  </div>
)

const CardTitle = ({ children, className }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
)

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
)

const Quiz = () => {
  const [inputcode, setInputcode] = useState("")
  const [playerName, setPlayerName] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [roomCode, setRoomcode] = useState('')
  const socket = io("localhost:3000")

  function socketConnect() {
    socket.on("connect", () => {
      console.log("Connected to server")
      console.log(socket.id)
    })
  }

  useEffect(() => {
    socketConnect()
  }, [])

  function handleInput(event) {
    const { name, value } = event.target
    setInputcode(prev => ({ ...prev, [name]: value }))
  }

  function handleCreateroom() {
    console.log("room created")
    const room = roomCodeGenerator(6)
    const name = playerName
    socket.emit("createRoom", room, name, message => {
      setRoomcode(message.room)
      setDisplayName(message.name)
      console.log(`Created room ${message.room} as ${message.name}`)
    })
  }

  function handleJoinroom() {
    console.log("room joined")
    const room = inputcode.name
    const name = playerName
    socket.emit("joinRoom", room, name, message => {
      setRoomcode(message.room)
      setDisplayName(message.name)
      console.log(`Joined room ${message.room} as ${message.name}`)
    })
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center p-6 text-white"
      style={{
        backgroundImage: "url('https://mrwallpaper.com/images/hd/a-triangle-with-a-pink-background-jhe2mv7y6arz9c4o.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          CODEGAMES
        </h1>
        <h2 className="text-2xl text-center mb-12 font-light">Compete and improve your skills</h2>
        
        <Card className="bg-black/50 backdrop-blur-md border-gray-800 mb-8">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Share2 className="w-5 h-5 mr-2 text-pink-500" />
              <span className="font-semibold">Room Code:</span>
            </div>
            <span className="text-xl font-mono">{roomCode || 'XXXXXX'}</span>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Red Team */}
          <Card className="bg-red-900/30 border-red-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Red Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-400 text-sm mb-4">Players: -</p>
              <Button className="w-full bg-red-700 hover:bg-red-600 transition-colors duration-300">
                Join Red Team
              </Button>
            </CardContent>
          </Card>

          {/* Quiz Box */}
          <Card className="bg-purple-900/30 border-purple-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-purple-300">QUIZ</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Users className="w-16 h-16 text-yellow-500 mb-4" />
              <p className="mb-4 text-purple-200">Select game options:</p>
              <Button className="w-full bg-green-700 hover:bg-green-600 transition-colors duration-300">
                Start Game
              </Button>
            </CardContent>
          </Card>

          {/* Blue Team */}
          <Card className="bg-blue-900/30 border-blue-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Blue Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-400 text-sm mb-4">Players: -</p>
              <Button className="w-full bg-blue-700 hover:bg-blue-600 transition-colors duration-300">
                Join Blue Team
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Room Controls */}
        <div className="flex justify-center mt-8">
          <Card className="bg-gray-900/80 backdrop-blur-md border-gray-800 max-w-sm mx-auto">
            <CardContent className="p-4">
              <Input
                placeholder="Enter player name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full mb-3 bg-gray-800/90 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full mb-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300" onClick={handleCreateroom}>
                Create Room
              </Button>
              <Button className="w-full mb-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300" onClick={handleJoinroom}>
                Join Room
              </Button>
              <Input
                placeholder="Enter room code"
                value={inputcode.name || ''}
                onChange={handleInput}
                name="name"
                className="w-full bg-gray-800/90 border-gray-700 text-white placeholder-gray-400"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Quiz