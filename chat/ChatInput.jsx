import { useState } from "react";
import {
  FaPlus,
  FaMicrophone,
  FaPaperPlane,
} from "react-icons/fa";

function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("Message:", message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 px-8 pt-4 pb-3">

      <div className="max-w-5xl mx-auto">

        {/* Input box */}
        <div className="border border-gray-300 rounded-2xl bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition">

          {/* Top label */}
          <div className="px-5 pt-3 flex items-center justify-between">

            <div className="flex items-center gap-2">
              <span className="text-blue-600 text-sm">✦</span>

              <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-gray-500">
                Ask Candidate AI
              </span>
            </div>

            <span className="text-[11px] text-gray-400">
              Press Enter to send
            </span>

          </div>

          {/* Input area */}
          <div className="flex items-center gap-3 px-4 pb-3 pt-2">

            <button
              type="button"
              className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
            >
              <FaPlus />
            </button>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about Utkarsh..."
              className="flex-1 bg-transparent outline-none text-[15px] text-gray-800 placeholder:text-gray-400"
            />

            <button
              type="button"
              className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
            >
              <FaMicrophone />
            </button>

            <button
              type="button"
              onClick={handleSend}
              className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
            >
              <FaPaperPlane className="text-sm" />
            </button>

          </div>

        </div>

        {/* Bottom text */}
        <div className="flex items-center justify-center gap-2 mt-2">

          <span className="text-[11px] text-gray-400">
            ⛨
          </span>

          <p className="text-[11px] text-gray-400">
            Responses are generated only from the active candidate resume and profile.
          </p>

        </div>

      </div>

    </div>
  );
}

export default ChatInput;