"use client";
import { FormEvent, useState } from "react";

export const ChatForm = ({
    onSendMessage
}: {
    onSendMessage: (message: string) => void

}) => {

    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (message.trim() !== "") {
            onSendMessage(message);
            setMessage("");
        }

    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
            <input
                className="flex-1 px-4 border-2 py-2 rounded-lg focus:outline-none"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your messsage here..."
            />
            <button type="submit" className="px-4 py-2 text-white rounded-lg bg-blue-500">Enviar</button>
        </form>
    );
};

