import React from 'react'

const Roombox = ({handleInput, playerName, name, handleCreateRoom, handleJoinRoom, handlePlayerName, handleSubmit}) => {
  return (
    <div className="fixed bottom-4 left-4 w-72">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg">
        <div className="space-y-3">
          {/* Player Name Input */}
          <div>
            <input
              type="text"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter player name"
              value={playerName}
              onChange={handlePlayerName}
            />
          </div>
          
          {/* Submit Button */}
          <button 
            onClick={handleSubmit} 
            className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded font-medium"
          >
            Submit
          </button>
          
          {/* Room Actions */}
          <div className="space-y-2 pt-2">
            <button 
              onClick={handleCreateRoom} 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded"
            >
              Create Room
            </button>
            <button 
              onClick={handleJoinRoom} 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded"
            >
              Join Room
            </button>
            <input
              type="text"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter room code"
              name={name}
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roombox