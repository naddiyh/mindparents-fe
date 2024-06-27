"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

type AybuBotProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type Message = {
  type: string;
  content: string;
  timestamp: number;
};

const DEFAULT_TIMEOUT = 30000; // 30 seconds

export const AybuBot: React.FC<AybuBotProps> = ({ isOpen, handleClose }) => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [showDefaultMessage, setShowDefaultMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userMessage = {
      type: "user",
      content: prompt,
      timestamp: Date.now(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setPrompt(""); // Clear input field

    try {
      setIsLoading(true);
      const res = await axios.post("/api/aybu", { prompt });
      const botResponse = res.data.completion;

      const botMessage = {
        type: "bot",
        content: botResponse,
        timestamp: Date.now(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setShowDefaultMessage(false); // Hide default message after bot response

      // Reset the timeout for the default message
      clearTimeout(timeoutId as NodeJS.Timeout);
      const id = setTimeout(() => {
        handleTimeout();
      }, DEFAULT_TIMEOUT);
      setTimeoutId(id);
    } catch (error) {
      console.error("Error generating response:", error);
      const errorMessage = {
        type: "bot",
        content: "Maaf, saya tidak paham. Apakah bisa diulangi?",
        timestamp: Date.now(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTimeout = () => {
    const defaultMessage = "Apakah ada hal lain yang ingin kamu ketahui?";
    const botMessage = {
      type: "bot",
      content: defaultMessage,
      timestamp: Date.now(),
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setShowDefaultMessage(true); // Show default message after timeout
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleCloseComponent = () => {
    handleClose(); // Call parent component's handleClose function
    clearTimeout(timeoutId as NodeJS.Timeout);
  };

  useEffect(() => {
    const initialResponse =
      "Hello, Selamat datang di MindParents. Saya Aybu, ada yang bisa saya bantu?.";
    const botMessage = {
      type: "bot",
      content: initialResponse,
      timestamp: Date.now(),
    };
    setMessages([botMessage]);

    const id = setTimeout(() => {
      handleTimeout();
    }, DEFAULT_TIMEOUT);
    setTimeoutId(id);

    return () => {
      clearTimeout(id);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <section className="fixed -bottom-8 right-4 z-40 flex h-screen items-center justify-end">
      <div className="flex w-[380px] flex-col gap-6 rounded-md bg-white shadow-2xl">
        <div className="flex items-center justify-between gap-4 rounded-t-md bg-primary-purple p-3 pl-4 text-white">
          <div className="flex items-center gap-2">
            <Image
              src="/images/ayb.webp"
              width={30}
              height={30}
              alt="Aybu Avatar"
              className="rounded-full"
            />
            <p className="font-semibold">Aybu</p>
          </div>
          <button onClick={handleCloseComponent} className="text-white">
            <FaTimes className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-10 overflow-y-auto rounded-b-md p-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/images/ayb.webp"
              width={65}
              height={65}
              alt="Aybu Logo"
              className="rounded-full"
            />
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-bold">Aybu</h2>
              <p className="text-sm text-gray-600">Sahabat Orang Tua</p>
            </div>
          </div>
          <div className="flex h-[360px] flex-col gap-2 px-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : " justify-start"}`}
              >
                <div
                  className={`${
                    message.type === "user"
                      ? "bg-primary-purple text-white"
                      : "bg-gray-100 text-black"
                  } w-fit rounded p-3 text-sm`}
                >
                  <span>{message.content}</span>
                  <span className="flex justify-end text-xs text-white">
                    {formatTimestamp(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between p-3"
        >
          <input
            type="text"
            placeholder="Ketik pesan Anda..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full rounded border p-2 pl-3 text-sm text-gray-700 outline-none"
          />
          <button
            type="submit"
            className="rounded bg-primary-purple px-4 py-2 text-text-s font-bold text-white hover:bg-primary-purple-hover"
            disabled={isLoading}
          >
            {isLoading ? "..." : "Kirim"}
          </button>
        </form>
      </div>
    </section>
  );
};
