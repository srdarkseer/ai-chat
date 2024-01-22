import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";

const ChatInterface = () => {
  // Updated state to include sender information
  const [messages, setMessages] = useState([
    { text: "How can I help you?", sender: "ai" },
    { text: "Can you summarize how AI works?", sender: "user" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null); // Reference to the dummy div at the end of the messages

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
      ]);
      setInput("");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex h-screen ">
      <div
        className={`flex-1 flex flex-col bg-gray-100 transition-all duration-300 w-full
        }`}
      >
        <div className="flex-1 p-4 overflow-auto space-y-4 flex flex-col justify-end">
          {/* Display messages with conditional rendering based on the sender */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "ai" ? "justify-start" : "justify-end"
              } items-end`}
            >
              {message.sender === "ai" && (
                <img
                  src="https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg"
                  alt="AI Avatar"
                  className="w-10 h-10 object-cover rounded-full mr-2"
                />
              )}
              <div
                className={`p-2 rounded-md shadow max-w-xs ${
                  message.sender === "ai" ? "bg-blue-100" : "bg-white"
                }`}
              >
                {message.text}
              </div>
              {message.sender === "user" && (
                <img
                  src="https://github.com/shadcn.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full ml-2"
                />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* Dummy div for scrolling to bottom */}
        </div>
        <div className="border-t-2 border-gray-200 p-4 mt-auto">
          <form onSubmit={sendMessage} className="flex gap-5">
            <input
              type="text"
              className="w-full p-2 border-2 border-gray-300 rounded-md"
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="default">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
