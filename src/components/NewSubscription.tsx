import React from 'react'

const NewSubscription = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">New Subscription</h2>
          <button className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">+</button>
        </div>
        <div className="flex space-x-4">
          {["John", "Henry", "Mary", "Anita", "Mary"].map((name, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-gray-200 rounded-full w-16 h-16 mb-2"></div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };


export default NewSubscription
