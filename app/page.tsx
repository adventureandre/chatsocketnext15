"use client"
import { ChatForm } from "@/components/ChartForm";
import ChartMessage from "@/components/ChartMessage";
import { useState } from "react";

export default function Home() {

  const [messages, setMessages] = useState<
    { sender: string, message: string }[]>([])
  const [roon, setRoon] = useState("")
  const [joined, setJoined] = useState(false)
  const [userName, setUserName] = useState("")

  const handleJoinRoom = () => {
    if (userName && roon) {
      setJoined(true)
    }
  }
  const handleSendMessage = (message: string) => {
    console.log("msn", message);
  }

  return (
    <div className="flex mt-24 justify-center w-full">
      {!joined ? (
        <div className="flex w-full max-w-3xl mx-auto flex-col items-center">
          <h1 className="mb-4 text-2xl font-bold">Join a Room</h1>

          <input
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-64 px-4 py-2 mb-4 border-2 rounded-lg"
          />

          <input
            type="text"
            placeholder="Enter room name"
            value={roon}
            onChange={(e) => setRoon(e.target.value)}
            className="w-64 px-4 py-2 mb-4 border-2 rounded-lg"
          />

          <button
          onClick={handleJoinRoom}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg"
          >
            Join Room
          </button>

        </div>
      ) : (
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="mb-4 text-2xl font-bold">Room: 1</h1>
          <div className="h-[500px] overflow-y-auto p-4 mb-4 bg-gray-200 border-2 rounded-lg">
            {messages.map((msn, index) => (
              <ChartMessage
                key={index}
                sender={msn.sender}
                message={msn.message}
                isOwnMessege={msn.sender === userName}
              />
            ))}
          </div>
          <ChatForm onSendMessage={handleSendMessage} />
        </div>
      )}

    </div>
  );
}
