import React from 'react'

const Roombox = ({handleInput , name , handleCreateroom , handleJoinroom}) => {
  return (
      <div className="w-70 bg-gray-800 border border-gray-700 rounded-lg p-4">
        <h3 className="text-lg text-white mb-2">Start</h3>
        <div className="space-y-2">
          <button onClick={handleCreateroom} className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded">
            Create Room
          </button>
          <button onClick={handleJoinroom} className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded">
            Join Room
          </button>
          <input
            type="text"
            id="changeName"
            className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter room code"
            name={name}
            onChange={handleInput}
          />
          
        </div>
       </div>
  )
}

export default Roombox