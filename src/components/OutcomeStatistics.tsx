import React from 'react'

const OutcomeStatistics = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Outcome Statistics</h2>
        <div className="mb-4">
          <p className="flex justify-between"><span>UP</span><span>52%</span></p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "52%" }}></div>
          </div>
        </div>
        <div className="mb-4">
          <p className="flex justify-between"><span>Subscription</span><span>21%</span></p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: "21%" }}></div>
          </div>
        </div>
        <div className="mb-4">
          <p className="flex justify-between"><span>Revenue</span><span>27%</span></p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "27%" }}></div>
          </div>
        </div>
        <div>
          <img src="/path-to-your-map-image.png" alt="Map" />
        </div>
      </div>
    );
  };


export default OutcomeStatistics
