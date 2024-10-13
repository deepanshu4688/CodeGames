import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroImage = "https://mrwallpaper.com/images/hd/a-triangle-with-a-pink-background-jhe2mv7y6arz9c4o.jpg";

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-cover bg-center p-10" style={{ backgroundImage: `url(${heroImage})` }}>

        <div className="flex flex-col bg-gray-800 w-full h-full bg-opacity-50 backdrop-blur-md flex items-center rounded-xl border border-white">
          <div className='flex flex-col items-center mt-12'>
            <h1 className="text-8xl text-white font-stencil font-bold mb-4">CODEGAMES</h1>
            <p className="text-xl text-white mb-8">Compete and improve your skills.</p>
          </div>

          <div className="flex flex-col items-center gap-4 mt-20">
            <Link to="/quiz">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out">
                START GAME
              </button>
            </Link>

            <div className="mt-16 bg-white bg-opacity-10 backdrop-blur-md text-slate-100 p-8 rounded-lg shadow-md ">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
