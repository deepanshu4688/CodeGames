import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-700 to-red-900 text-white">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">CODEGAMES</h1>
        <p className="text-xl mb-8">Compete and improve your skills.</p>
      </div>
      <div className="flex flex-col items-center gap-4">
      <Link to="/quiz">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out">
         START GAME
      </button>
      </Link>     
      
</div>

      

      {/* How to play Section */}
      <div className="mt-16 bg-yellow-100 text-black p-8 rounded-lg shadow-md w-11/12 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">How to play:</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Click on the START GAME button.</li>
          <li>Select the preferred game settings and start the game.</li>
          <li>Share the room URL with your friends.</li>
          <li>Enjoy the game!</li>
        </ol>
        <p className="mt-4 text-right">Vlaada & CGE Team</p>
      </div>
    </div>
  )
}

export default Home