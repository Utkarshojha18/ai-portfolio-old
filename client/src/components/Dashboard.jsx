import { useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import ChatWindow from "../../components/chat/ChatWindow";
import ChatInput from "../../components/chat/ChatInput";

function Dashboard() {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    const aiMessage = {
      role: "assistant",
      content:
        "This is a temporary AI response. Next we'll connect Gemini/OpenAI.",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}

export default Dashboard;