import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Button } from "../../components/ui/button";
import openAIImage from "../../assets/images/logo/openAI.png";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi", sender: "user" },
    { id: 2, text: "Hello! How can I assist you today?", sender: "ai" },
    // ...additional messages
  ]);
  const [input, setInput] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  // Scroll to the latest message whenever the messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-auto flex flex-col-reverse"
      >
        {/* We reverse the messages array for display but maintain the original order for state management */}
        {[...messages].reverse().map((message) => (
          <div
            key={message.id}
            className={`flex items-end space-x-2 py-4 px-40 ${
              message.sender === "ai" ? "bg-gray-200" : "bg-gray-100"
            }`}
          >
            <img
              src={
                message.sender === "ai"
                  ? openAIImage
                  : "https://github.com/shadcn.png"
              }
              alt={`${message.sender} Avatar`}
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex flex-col flex-1">
              <div className="p-2 rounded text-black">{message.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-4 px-40 border-t border-gray-200">
        <form onSubmit={sendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Send a message"
          />
          <Button type="submit">
            <AiOutlineSend />
          </Button>
        </form>
        <p className="text-xs text-center text-slate-500 mt-4">
          QuickGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
