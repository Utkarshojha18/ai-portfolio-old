function ChatWindow({ messages = [] }) {
  return (
    <div className="flex-1 overflow-y-auto bg-white px-8 py-8">
      <div className="max-w-5xl mx-auto">

        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-20">

            <div className="w-16 h-16 rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
              U
            </div>

            <h1 className="text-3xl font-bold text-slate-800 mt-6">
              How can I help you?
            </h1>

            <p className="text-base text-slate-500 mt-3 text-center">
              Ask about Utkarsh's education, skills, projects,
              experience or resume.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
              {[
                "Tell me about Utkarsh",
                "What are his main skills?",
                "Explain his projects",
                "What experience does he have?",
                "Can I download his resume?",
                "Why should I hire him?",
              ].map((question) => (
                <button
                  key={question}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-5 text-left text-sm font-medium text-slate-700 hover:border-blue-400 hover:shadow-sm transition"
                >
                  {question}
                </button>
              ))}
            </div>

          </div>
        ) : (
          <div className="space-y-8">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                {msg.role === "assistant" && (
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    U
                  </div>
                )}

                <div
                  className={`max-w-4xl rounded-xl px-6 py-5 ${
                    msg.role === "user"
                      ? "bg-slate-100 text-slate-800"
                      : "bg-white text-slate-700"
                  }`}
                >

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold">
                      {msg.role === "user"
                        ? "You"
                        : "Candidate AI"}
                    </h3>

                    {msg.role === "assistant" && (
                      <span className="text-xs text-green-600 font-medium ml-8">
                        Resume grounded
                      </span>
                    )}
                  </div>

                  <p className="text-[15px] leading-7 whitespace-pre-wrap">
                    {msg.content}
                  </p>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default ChatWindow;