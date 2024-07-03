import React from 'react'

type ChatCardProps = {
    name: string;
    message: string;
    date: string;
};

const ChatCard = ({ name, message, date }: ChatCardProps) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center mb-2">
          <div className="bg-gray-200 rounded-full w-10 h-10 mr-4"></div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-gray-500 text-sm">{message}</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    );
  };


export default ChatCard
