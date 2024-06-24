import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { db } from "@/config/firebase"; // Sesuaikan path import sesuai struktur proyek Anda

interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
}

interface ChatModalProps {
  show: boolean;
  onHide: () => void;
  userId: string;
  psychologistId: string;
  psychologistName: string;
}

const ChatModal: React.FC<ChatModalProps> = ({
  show,
  onHide,
  userId,
  psychologistId,
}) => {
  const [psychologists, setPsychologists] = useState<any[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchPsychologists = async () => {
      const q = query(collection(db, "user"), where("role", "==", "psikologi"));

      try {
        const querySnapshot = await getDocs(q);
        const psychologistsList: any[] = [];
        querySnapshot.forEach((doc) => {
          psychologistsList.push({
            id: doc.id,
            name: doc.data().name,
          });
        });
        setPsychologists(psychologistsList);

        if (psychologistsList.length > 0) {
          setActiveChat(psychologistsList[0].id);
          fetchMessages(psychologistsList[0].id);
        }
      } catch (error) {
        console.error("Error fetching psychologists:", error);
      }
    };

    if (show) {
      fetchPsychologists();
    }

    return () => {
      // Cleanup jika diperlukan
    };
  }, [show]);

  const fetchMessages = async (psychologistId: string) => {
    if (!userId) return;

    const q = query(
      collection(db, "ChatAhli"),
      where("psychologistId", "==", psychologistId),
      where("userId", "==", userId),
      orderBy("timestamp"),
    );

    try {
      const querySnapshot = await getDocs(q);
      const messageList: ChatMessage[] = [];
      querySnapshot.forEach((doc) => {
        messageList.push({
          id: doc.id,
          senderId: doc.data().senderId,
          text: doc.data().text,
          timestamp: doc.data().timestamp,
        });
      });
      setMessages(messageList);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    if (newMessage.trim() === "") {
      console.error("Pesan tidak boleh kosong");
      return;
    }

    if (activeChat && userId) {
      try {
        const chatRef = collection(db, "ChatAhli");
        const docRef = await addDoc(chatRef, {
          psychologistId: activeChat,
          userId,
          senderId: userId,
          text: newMessage,
          timestamp: Date.now(),
        });

        const newMessageObj: ChatMessage = {
          id: docRef.id,
          senderId: userId,
          text: newMessage,
          timestamp: Date.now(),
        };

        // Menambahkan pesan baru ke state messages hanya jika psikolog yang sedang aktif sesuai dengan psikolog yang dipilih saat ini
        if (activeChat === psychologistId) {
          setMessages([...messages, newMessageObj]);
        }

        setNewMessage(""); // Mengosongkan input setelah berhasil mengirim
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center pb-6 ${show ? "block" : "hidden"}`}
    >
      <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between bg-primary-purple px-6 py-3">
          <h3 className="text-lg font-bold text-white">Chat Psikolog</h3>
          <button onClick={onHide} className="text-white focus:outline-none">
            &#x2715;
          </button>
        </div>
        <div className="flex h-80">
          <div className="w-[30%] border-r">
            <div className="h-full overflow-y-auto">
              {psychologists.map((psychologist) => (
                <button
                  key={psychologist.id}
                  className={`w-full px-4 py-2 text-left text-text-s hover:bg-gray-100 ${activeChat === psychologist.id ? "bg-gray-200 font-bold" : ""}`}
                  onClick={() => {
                    setActiveChat(psychologist.id);
                    fetchMessages(psychologist.id);
                  }}
                >
                  {psychologist.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex w-[70%] flex-col">
            <div className="h-full overflow-y-auto px-4 py-2">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`mb-3 ${message.senderId === userId ? "text-right" : "text-left"}`}
                >
                  <p className="inline-block rounded-lg bg-gray-100 px-4 py-2">
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center bg-gray-100 px-6 py-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Tulis pesan..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none"
              />
              <button
                onClick={sendMessage}
                className="ml-3 rounded-lg bg-primary-purple px-6 py-2 text-white hover:bg-primary-purple focus:outline-none"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
