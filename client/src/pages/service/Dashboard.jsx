import { useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import ChatWindow from "../../components/chat/ChatWindow";
import ChatInput from "../../components/chat/ChatInput";

function Dashboard() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello 👋 I am your AI Resume Assistant. Ask me anything about Utkarsh.",
    },
  ]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
      },
      {
        role: "assistant",
        content: "This is a temporary AI response.",
      },
    ]);
  };

  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <ChatWindow messages={messages} />

        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}

export default Dashboard;