import React from 'react'

const Playerlist = ({Players}) => {
  return (
    <div className=" max-w-[calc(50%-1.5rem)] bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg text-white mb-2">Player Board</h3>
          <div className="flex flex-wrap gap-2">
          {Players.map((player,index) => (
            <div key={index} className="bg-gray-700 text-white px-3 py-1 rounded">
              {player.currentName.name}
            </div>
           ))}
          </div>
    </div>
  )
}

export default Playerlist
