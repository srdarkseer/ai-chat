import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Button } from "../../components/ui/button";
import openAIImage from "../../assets/images/logo/openAI.png";
import Loader from "../../assets/images/loading.svg";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi", sender: "user", loading: false },
    { id: 2, text: "Hello! How can I assist you today?", sender: "ai", loading: false },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    if (input.trim()) {
      setLoading(true);

      const count = messages.length;

      const newMessage = {
        id: count + 1,
        text: input.replace(/(?:\r\n|\r|\n)/g, "<br>"),
        sender: "user",
      };

      const aiMessage = {
        id: count + 2, 
        text: "Hello! How can I assist you today?", 
        sender: "ai", 
        loading: true,
      }

      const messageArr = [newMessage, aiMessage];

      setMessages([...messages, ...messageArr]);
      setInput("");

      if (textAreaRef.current) {
        textAreaRef.current.style.height = "38px";
      }

      // Simulate an asynchronous action (e.g., API call) with a delay of 2500ms
      await new Promise((resolve) => setTimeout(resolve, 2500));

      setLoading(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = "inherit";
    e.currentTarget.style.height = `${Math.min(
      e.currentTarget.scrollHeight,
      94
    )}px`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e as unknown as React.FormEvent);
    }
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const formatMessageText = (text: string) => {
    return text.split("<br>").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index !== text.split("<br>").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-auto flex flex-col-reverse"
      >
        {[...messages].reverse().map((message) => {
          if (message.sender === "user") {
            return (
              <div key={message.id}>
                <div
                  className={`flex items-end space-x-2 py-4 px-40 bg-gray-200`}
                >
                  <img
                    src={openAIImage}
                    alt={`${message.sender} Avatar`}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div className="flex flex-col flex-1">
                  {loading && message.id === messages.length && (
                    <div className="flex justify-center py-2">
                      <img src={Loader} className="w-20 h-20" alt="Loading..." />
                    </div>
                  )}
                    <div className="p-2 rounded text-black whitespace-pre-wrap">
                      {formatMessageText(message.text)}
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={message.id}>
                <div
                  className={`flex items-end space-x-2 py-4 px-40 bg-gray-100`}
                >
                  <img
                    src={"https://github.com/shadcn.png"}
                    alt={`${message.sender} Avatar`}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div className="flex flex-col flex-1">
                    {loading && message.id === messages.length && (<span className="loader"></span>)}
                    <div className="p-2 rounded text-black whitespace-pre-wrap">
                      {formatMessageText(message.text)}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="py-4 px-40 border-t border-gray-200">
        <form onSubmit={sendMessage} className="flex items-center gap-2">
          <textarea
            ref={textAreaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg resize-none overflow-hidden"
            placeholder="Send a message"
            rows={1}
            style={{ minHeight: "38px" }}
          />
          <Button type="submit" disabled={loading}>
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
