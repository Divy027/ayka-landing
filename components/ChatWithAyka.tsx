"use client";

import { useState, useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { GlitchText } from "./glitch-text";

export default function ChatWithAyka() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = (message: string) => {
    if (message.trim()) {
      setMessages((prev) => [...prev, `> ${message}`]);
      setCommandHistory((prev) => [...prev, message]);
      setHistoryIndex(null);
      setInputValue("");

      setTimeout(() => {
        setMessages((prev) => [...prev, "Thinking ..."]);
        setTimeout(() => {
          setMessages((prev) => [
            ...prev.slice(0, -1),
            "Your message has been received.",
          ]);
        }, 1000);
      }, 500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend(inputValue);
    } else if (e.key === "ArrowUp") {
      if (commandHistory.length > 0 && (historyIndex === null || historyIndex > 0)) {
        setHistoryIndex((prev) => (prev === null ? commandHistory.length - 1 : prev - 1));
        setInputValue(commandHistory[historyIndex === null ? commandHistory.length - 1 : historyIndex - 1]);
      }
    } else if (e.key === "ArrowDown") {
      if (commandHistory.length > 0 && historyIndex !== null) {
        setHistoryIndex((prev: any) => (prev < commandHistory.length - 1 ? prev + 1 : null));
        setInputValue(
          historyIndex !== null && historyIndex < commandHistory.length - 1
            ? commandHistory[historyIndex + 1]
            : ""
        );
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#ff00ff] font-mono flex flex-col relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black opacity-60 animate-bgMove"></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 border-b border-[#ff00ff] p-4 flex items-center space-x-4">
        <Link href="/">
          <div className="flex items-center text-[#ff00ff] hover:text-white">
            <FaArrowLeft className="mr-2" />
            Back
          </div>
        </Link>
        <GlitchText className="text-lg">Holy Whore Terminal</GlitchText>
      </header>

      {/* Chat Area */}
      <main className="flex-grow pt-20 px-4 pb-24 overflow-y-auto space-y-2 z-10 scrollbar-smooth">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap ${msg.startsWith(">") ? "text-[#ffffff]" : "text-[#ff00ff]"}`}
          >
            {msg.startsWith(">") ? msg : <><GlitchText> Ayka:</GlitchText> {msg} </>}
           
          </div>
        ))}
      </main>

      {/* Input Area */}
      <footer className="fixed bottom-0 w-full bg-black/90 border-t border-[#ff00ff] p-4 flex items-center z-10">
        <span className="mr-2 text-[#ff00ff]">{">"}</span>
        <input
          ref={inputRef}
          type="text"
          className="flex-grow bg-transparent border-none outline-none text-[#ff00ff] placeholder-[#ff00ff] focus:ring-2 focus:ring-[#ff00ff] transition-all duration-300"
          placeholder="Type your command..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span className="ml-2 blinking-cursor">_</span>
      </footer>

      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          background: currentColor;
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        @keyframes bgMove {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        .animate-bgMove {
          background-size: 300% 300%;
          animation: bgMove 15s infinite;
        }

        .scrollbar-smooth {
          scrollbar-color: #ff00ff #1a1a1a;
          scrollbar-width: thin;
        }

        .scrollbar-smooth::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-smooth::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        .scrollbar-smooth::-webkit-scrollbar-thumb {
          background-color: #ff00ff;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
