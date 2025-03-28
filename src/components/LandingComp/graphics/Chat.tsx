"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  delay?: number;
  image?: string; // Added for the image at the end
}

const initialMessages: Message[] = [
  { id: "1", text: "Did you get the concept?", sender: "bot", delay: 1500 },
  { id: "3", text: "Yes, it's based on the principle of the maximum height of a projectile.", sender: "user", delay: 2500 },
  { id: "2", text: "That's Correct", sender: "bot",  delay: 2000 },
  { id: "4", text: "But I forgot the formula.", sender: "user",  delay: 2000 },
  { id: "5", text: "Okay, Hmax=u²/2g or us²sin²θ/2g", sender: "bot",delay: 3000 ,image: "/images/diag.svg"  },
  { id: "6", text: "Let me calculate the answers", sender: "user", delay: 2000 },
  
];

const TypingIndicator = ({ isBot }: { isBot: boolean }) => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + "." : "."));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "max-w-[80%] p-2 rounded-lg flex items-center gap-1",
        isBot ? "mr-auto bg-gray-200" : "ml-auto bg-gray-200"
      )}
    >
      <span className={` text-gray-800 text-xs`}>Typing{dots}</span>
    </div>
  );
};

const SimpleChatBox = ({ className }: { className?: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < initialMessages.length) {
      const nextMessage = initialMessages[currentIndex];
      setIsTyping(true);

      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, nextMessage]);
        setCurrentIndex(prev => prev + 1);
      }, nextMessage.delay || 1500);

      return () => clearTimeout(typingTimer);
    }
  }, [currentIndex]);

  return (
    <div className={cn(
      "flex flex-col h-auto sm:h-[325px]  max-w-md  mx-auto p-4",
      "bg-gray-50 rounded-xl border border-gray-100",
      className
    )}>
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
        {messages.map(message => (
          <div key={message.id}>
            <div
              className={cn(
                "max-w-fit p-1.5 px-2 rounded-lg flex items-center gap-2",
                message.sender === "user" ? "ml-auto bg-blue-500 text-white" : "mr-auto bg-white shadow-md"
              )}
            >
              <div className="flex flex-col">
                {message.text && <span className="text-[11px]">{message.text}</span>}
                {message.image && (
                  <img 
                    src={message.image} 
                    alt="Projectile Motion Diagram" 
                    className="mt-2 max-w-[157.43px] max-h-[68.62px] rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        {isTyping && <TypingIndicator isBot={initialMessages[currentIndex]?.sender === "bot"} />}
      </div>
    </div>
  );
};

// const SimpleChatBox = () => {
// return <p>j</p>
//  }
export default SimpleChatBox;