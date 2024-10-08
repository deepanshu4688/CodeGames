import React from 'react'

const Profilebox = ({handleInput , name , handleUpdate}) => {
  return (
      <div className="w-90 bg-gray-800 border border-gray-700 rounded-lg p-4">
        <h3 className="text-lg text-white mb-2">Profile</h3>
        <div className="space-y-2">
          <label htmlFor="changeName" className="block text-sm text-gray-400">Change Name</label>
          <input
            type="text"
            id="changeName"
            className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter new name"
            name={name}
            onInput={handleInput}
          />
          <button onClick={handleUpdate} className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded">
            Enter Name
          </button>
        </div>
       </div>
  )
}

export default Profilebox