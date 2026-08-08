import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const suggestions = [
  "Tell me about Utkarsh",
  "What are his main AI skills?",
  "Explain his main projects",
  "What experience does he have?",
  "Can I download his resume?",
];

function ChatWindow() {
  return (
    <div className="flex-1 bg-white overflow-y-auto">

      <div className="max-w-5xl mx-auto py-20">

        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-3xl bg-green-500 flex items-center justify-center text-4xl text-white font-bold">
            U
          </div>
        </div>

        <h1 className="text-6xl font-bold text-center mt-8 text-gray-900">
          How can I help you?
        </h1>

        <p className="text-center text-gray-500 mt-4 text-lg">
          Ask about Utkarsh's education, skills, projects,
          experience, certifications or resume.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-16">

          {suggestions.map((item) => (
            <button
              key={item}
              className="border rounded-3xl p-7 text-left hover:shadow-xl transition flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-800">
                {item}
              </span>

              <FaArrowUpRightFromSquare />
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ChatWindow;