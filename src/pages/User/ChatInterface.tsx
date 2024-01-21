import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Button } from "../../components/ui/button";

const ChatInterface = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

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
        <div className="flex-1 p-4 overflow-auto">
          {/* Display messages */}
          {messages.map((message, index) => (
            <div key={index} className="bg-white p-2 my-2 rounded-md shadow">
              {message}
            </div>
          ))}
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
