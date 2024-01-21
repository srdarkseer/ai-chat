import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Sidebar";
import { Button } from "../../components/ui/button";

const ChatInterface = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef<null | HTMLDivElement>(null); // Reference to the dummy div at the end of the messages

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, input]);
      setInput("");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 flex flex-col bg-gray-100 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="flex-1 p-4 overflow-auto space-y-4 flex flex-col justify-end">
          {/* Display messages */}
          {messages.map((message, index) => (
            <div key={index} className="flex justify-end items-end">
              <div className="bg-white p-2 rounded-md shadow max-w-xs">
                {message}
              </div>
              <img
                src="https://github.com/shadcn.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full ml-2"
              />
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
