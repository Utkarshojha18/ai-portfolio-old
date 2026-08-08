import { useState } from "react";
import { FaPaperPlane, FaMicrophone, FaPlus } from "react-icons/fa";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    if (onSend) {
      onSend(message);
    }

    setMessage("");
  };

  return (
    <div className="bg-white border-t border-gray-200 px-10 py-6">

      <div className="max-w-6xl mx-auto">

        <div className="rounded-3xl border border-gray-200 bg-white shadow-lg px-6 py-4">

          <div className="flex items-center gap-4">

            {/* Add Button */}
            <button className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
              <FaPlus className="text-gray-600" />
            </button>

            {/* Input */}
            <input
              type="text"
              placeholder="Ask anything about Utkarsh..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              className="flex-1 bg-transparent outline-none text-lg text-gray-800 placeholder:text-gray-400"
            />

            {/* Mic */}
            <button className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
              <FaMicrophone className="text-gray-600" />
            </button>

            {/* Send */}
            <button
              onClick={handleSend}
              className="w-12 h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition"
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          AI answers are generated from the active resume and conversation context.
        </p>

      </div>

    </div>
  );
}

export default ChatInput;