import React from 'react'

interface ChatMessageProps {
  sender: string;
  message: string;
  isOwnMessege: boolean;
}

const ChartMessage = ({ isOwnMessege, message, sender }: ChatMessageProps) => {
  const isSystemMessage = sender === "system";
  return (
    <div className={`flex ${
        isSystemMessage
        ? 'justify-center'
        : isOwnMessege
        ? 'justify-end'
        : "justify-start"
      } mb-3`}
    >
      <div className={`max-w-xs px-4 py-2 rounded-lg ${isSystemMessage
          ? "bg-gray-800 text-white text-center text-xs"
          : isOwnMessege
            ? "bg-blue-500"
            : "bg-white text-black"
        }`}>
        {!isSystemMessage && <p className='text-sm font-bold'>{sender}</p>}
        <p>{message}</p>
      </div>

    </div>
  )
}

export default ChartMessage
