
import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
import Profilebox from '../components/Profilebox'
import Playerlist from '../components/Playerlist'
const Quiz = () => {
    const [name,setName] = useState({})
    const socket = io("localhost:3000")
    function socketConnect() {
        socket.on("connect", () => {
            console.log("Connected to server")
        })
    }
    useEffect(() => {
        socketConnect()
    }, [])
    function handleInput(event){
      let {name , value} = event.target;
      let currentName = {[name]:value}
      setName({currentName})
    }
    function handleNameChanged(){
      socket.emit("nameChanged",name)
      socket.on("Players", (Players) => {
        console.log(Players)
    })
    }
    return (
        <div className="min-h-screen bg-neutral-900 p-6">
        <div className=" mx-auto">
          <h1 className="text-2xl text-center text-white mb-8">Set up a game</h1>
          
          <div className="flex gap-6">
            {/* Red Team */}
            <div className="w-1/4 bg-red-900/50 border border-red-800 rounded-lg p-4 ml-0 h-[400px] ">     
                <h2 className="text-xl text-red-400 mb-4">Red Team</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-red-400 text-sm">Players: -</p>
                </div>
                <button className="w-full bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded">
                  Join Red Team
                </button>
              </div>
            </div>
  
            {/* Quiz Box */}
            <div className="w-2/4 bg-neutral-800 border border-neutral-700 rounded-lg p-4 h-[600px]">
              <div className="mb-4">
                <h2 className="text-xl text-center text-white">QUIZ</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="space-y-2 text-center text-white">
                  <p>Select game options:</p>
                  <button className="w-full bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded">
                    Start Game
                  </button>
                </div>
              </div>
            </div>
  
            {/* Blue Team */}
            <div className="w-1/4 bg-blue-900/50 border border-blue-800 rounded-lg p-4 h-[400px]">
              <div className="mb-4">
                <h2 className="text-xl text-blue-400">Blue Team</h2>
              </div>
              <div className="space-y-4">
                <div >
                  <p className="text-blue-400 text-sm">Players: -</p>
                </div>
                <button className="w-full bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Join Blue Team
                </button>
              </div>
            </div>
            {/* Profile Box */}
           <div className="absolute bottom-6 flex left-6 gap-6 w-full">
              <Profilebox name='name' handleInput={handleInput} handleUpdate={handleNameChanged} />
              <Playerlist />
            </div>
            
          </div>
        </div>
      </div>
    );
}

export default Quiz