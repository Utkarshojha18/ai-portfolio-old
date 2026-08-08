import {
  FaGlobe,
  FaChevronDown,
  FaVolumeMute,
} from "react-icons/fa";

function Header() {
  return (
    <header className="h-[82px] bg-white border-b border-gray-200 px-8 flex items-center justify-between">

      {/* LEFT - Candidate Profile */}
      <div className="flex items-center gap-4">

        <div className="relative flex-shrink-0">

          <img
            src="/profile.jpeg"
            alt="Utkarsh Ojha"
            className="w-11 h-11 rounded-lg object-cover"
          />

          <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>

        </div>

        <div>

          <p className="uppercase tracking-[2px] text-[10px] font-semibold text-gray-400">
            Candidate Profile
          </p>

          <h1 className="mt-0.5 text-[18px] font-bold leading-none text-gray-900">
            Utkarsh Ojha
          </h1>

          <p className="mt-1 text-[14px] text-gray-500">
            AI Engineer • Resume Assistant
          </p>

        </div>

      </div>

      {/* RIGHT - Controls */}
      <div className="flex items-center gap-3">

        {/* Language */}
        <button
          type="button"
          className="h-11 px-4 rounded-xl border border-gray-200 flex items-center gap-2 hover:bg-gray-50 transition"
        >
          <FaGlobe className="text-gray-500 text-sm" />

          <span className="text-[14px] font-medium text-gray-700">
            English
          </span>

          <FaChevronDown className="text-[10px] text-gray-500" />
        </button>

        {/* Sound */}
        <button
          type="button"
          className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
        >
          <FaVolumeMute className="text-gray-500 text-sm" />
        </button>

        {/* Availability */}
        <div className="h-11 px-4 rounded-xl border border-gray-200 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>

          <span className="text-[14px] font-medium text-gray-700">
            Available
          </span>
        </div>

      </div>

    </header>
  );
}

export default Header;