import {
  FaPlus,
  FaUpload,
  FaClipboardList,
  FaBullseye,
  FaMagic,
  FaFilePdf,
  FaDownload,
  FaComments,
  FaLinkedin,
  FaGithub,
  FaChevronRight,
} from "react-icons/fa";

const Sidebar = () => {
  const recruiterTools = [
    {
      icon: <FaUpload />,
      title: "Upload new resume",
      desc: "Switch the active profile",
    },
    {
      icon: <FaClipboardList />,
      title: "Interview questions",
      desc: "Generate role-specific prompts",
    },
    {
      icon: <FaBullseye />,
      title: "Job match score",
      desc: "Compare resume and job",
    },
    {
      icon: <FaMagic />,
      title: "Why hire this candidate?",
      desc: "Create recruiter summary",
    },
    {
      icon: <FaFilePdf />,
      title: "Export chat as PDF",
      desc: "Save this conversation",
    },
    {
      icon: <FaDownload />,
      title: "Download resume",
      desc: "Open current PDF",
    },
  ];

  return (
    <aside className="w-[360px] h-screen bg-[#111827] text-white border-r border-[#1f2937] flex flex-col">

      {/* ================= PROFILE ================= */}

      <div className="px-8 pt-8 pb-7">

        <div className="flex items-center gap-5">

          <div className="relative">

            <img
              src="/profile.jpg"
              alt="profile"
              className="w-16 h-16 rounded-2xl object-cover"
            />

            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#111827]" />

          </div>

          <div>

            <p className="uppercase tracking-[3px] text-[11px] text-slate-400 font-semibold">
              AI REPRESENTATIVE
            </p>

            <h1 className="text-[34px] leading-none font-bold mt-2">
              Candidate AI
            </h1>

            <p className="text-slate-400 text-lg mt-1">
              Utkarsh Ojha
            </p>

          </div>

        </div>

      </div>

      {/* ================= NEW CHAT ================= */}

      <div className="px-6">

        <button className="w-full flex items-center gap-5 border border-[#374151] rounded-2xl px-5 py-5 hover:bg-[#1E293B] duration-200">

          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black text-2xl">

            <FaPlus />

          </div>

          <span className="text-xl font-semibold">
            Start new conversation
          </span>

        </button>

      </div>

      {/* ================= SCROLL ================= */}

      <div className="flex-1 overflow-y-auto px-8 py-8">

        <div className="flex justify-between items-center mb-6">

          <h3 className="text-xs tracking-[3px] text-slate-500 font-semibold">
            RECRUITER TOOLS
          </h3>

          <div className="bg-slate-700 text-xs rounded-full w-7 h-7 flex items-center justify-center">
            6
          </div>

        </div>

        <div className="space-y-6">

          {recruiterTools.map((tool) => (

            <div
              key={tool.title}
              className="flex items-center justify-between cursor-pointer group"
            >

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-[#1F2937] flex items-center justify-center text-xl">

                  {tool.icon}

                </div>

                <div>

                  <h4 className="text-[18px] font-semibold">
                    {tool.title}
                  </h4>

                  <p className="text-[14px] text-slate-400 leading-5">
                    {tool.desc}
                  </p>

                </div>

              </div>

              <FaChevronRight className="text-slate-500 group-hover:text-white" />

            </div>

          ))}

        </div>

        {/* ================= CONVERSATIONS ================= */}

        <div className="flex justify-between items-center mt-12 mb-5">

          <h3 className="text-xs tracking-[3px] text-slate-500 font-semibold">
            RECENT CONVERSATIONS
          </h3>

          <div className="bg-slate-700 text-xs rounded-full w-7 h-7 flex items-center justify-center">
            1
          </div>

        </div>

        <div className="bg-[#263246] hover:bg-[#2F3B52] rounded-2xl px-5 py-5 flex items-center justify-between transition cursor-pointer">

          <div className="flex items-center gap-4">

            <FaComments className="text-lg" />

            <span className="text-lg">
              Tell me about Utkarsh
            </span>

          </div>

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <div className="border-t border-[#243042] px-8 py-6">

        <div className="flex gap-6 text-2xl mb-6">

          <FaLinkedin className="cursor-pointer hover:text-blue-400" />

          <FaGithub className="cursor-pointer hover:text-gray-300" />

        </div>

        <div className="flex gap-3">

          <div className="w-3 h-3 bg-green-400 rounded-full mt-2"></div>

          <div>

            <h4 className="font-semibold text-lg">
              AI representative online
            </h4>

            <p className="text-slate-400 text-sm">
              Grounded in the active resume
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;