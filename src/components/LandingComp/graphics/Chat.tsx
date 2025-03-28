"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  time: string;
  icon: string;
  color: string;
  delay?: number;
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Did you get the concept?",
    sender: "user",
    time: "just now",
    icon: "👤",
    color: "#1E86FF",
    delay: 1500,
  },
  {
    id: "2",
    text: "That's Correct",
    sender: "bot",
    time: "just now",
    icon: "🤖",
    color: "#00C9A7",
    delay: 2000,
  },
  {
    id: "3",
    text: "Yes, it's based on the principle of the maximum height of a projectile.",
    sender: "bot",
    time: "just now",
    icon: "🤖",
    color: "#00C9A7",
    delay: 2500,
  },
  {
    id: "4",
    text: "But I forgot the formula.",
    sender: "user",
    time: "just now",
    icon: "👤",
    color: "#1E86FF",
    delay: 2000,
  },
  {
    id: "5",
    text: "Okay, Hmax=u²/2g or us²sin²θ/2g",
    sender: "bot",
    time: "just now",
    icon: "🤖",
    color: "#00C9A7",
    delay: 3000,
  },
  {
    id: "6",
    text: "Let me calculate the answers",
    sender: "user",
    time: "just now",
    icon: "👤",
    color: "#1E86FF",
    delay: 2000,
  },
];

const MessageBubble = ({ text, sender, time, icon, color }: Message) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative min-h-fit w-full max-w-[80%] overflow-hidden rounded-2xl p-4 mb-3",
        "transition-all duration-200 ease-in-out",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        sender === "user" ? "ml-auto" : "mr-auto"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-8 items-center justify-center rounded-full"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-sm">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre-wrap text-sm font-medium dark:text-white">
            <span>{text}</span>
          </figcaption>
          <p className="text-xs text-gray-500 self-end mt-1">{time}</p>
        </div>
      </div>
    </motion.figure>
  );
};

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg mt-2 w-fit mr-auto"
    >
      <div className="flex space-x-1">
        <motion.div
          className="w-2 h-2 rounded-full bg-gray-400"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-gray-400"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-gray-400"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.4 }}
        />
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-300">Typing...</span>
    </motion.div>
  );
};

export function ChatBoxDemo({ className }: { className?: string }) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < initialMessages.length) {
      setIsTyping(true);
      
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        
        const messageTimer = setTimeout(() => {
          // Add new message
          const newMessages = [...visibleMessages, initialMessages[currentIndex]];
          // Keep only the last 3 messages
          const updatedMessages = newMessages.slice(-3);
          setVisibleMessages(updatedMessages);
          setCurrentIndex(prev => prev + 1);
        }, 500); // Short delay after typing completes

        return () => clearTimeout(messageTimer);
      }, initialMessages[currentIndex].delay || 1500);

      return () => clearTimeout(typingTimer);
    }
  }, [currentIndex, visibleMessages]);

  return (
    <div
      className={cn(
        "relative flex flex-col h-[300px] w-full max-w-md mx-auto p-4",
        "bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800",
        "shadow-lg flex justify-center",
        className
      )}
    >
      <div className="w-full space-y-3">
        <AnimatePresence mode="popLayout">
          {visibleMessages.map((message) => (
            <MessageBubble key={message.id} {...message} />
          ))}
          {isTyping && <TypingIndicator />}
        </AnimatePresence>
      </div>
    </div>
  );
}