import React from 'react'
import { User } from 'lucide-react'

const PlayerProfile = ({ playerName }) => {
  return (
    <div className="fixed bottom-4 right-4 w-64">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-700 p-2 rounded-full">
            <User className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <div className="text-gray-400 text-sm font-medium">Player</div>
            <div className="text-white font-semibold truncate">
              {playerName || 'Anonymous'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerProfile