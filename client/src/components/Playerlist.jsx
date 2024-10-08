import React from 'react'

const Playerlist = () => {
  return (
    <div className=" max-w-[calc(50%-1.5rem)] bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg text-white mb-2">Players</h3>
          <div className="flex flex-wrap gap-2">
            {/* You can map through your players array here */}
            <div className="bg-gray-700 text-white px-3 py-1 rounded">Player 1</div>
            <div className="bg-gray-700 text-white px-3 py-1 rounded">Player 2</div>
            <div className="bg-gray-700 text-white px-3 py-1 rounded">Player 3</div>
            <div className="bg-gray-700 text-white px-3 py-1 rounded">Player 3</div>
            <div className="bg-gray-700 text-white px-3 py-1 rounded">Player 3</div>
            <div className="bg-gray-700 text-white px-3 py-1 rounded">Player 3</div>
            
            {/* Add more players as needed */}
          </div>
    </div>
  )
}

export default Playerlist