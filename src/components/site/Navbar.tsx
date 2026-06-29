import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Volume2, VolumeX, Mic } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Smart Kiosk", href: "#kiosk" },
  { label: "Mobile App", href: "#mobile" },
  { label: "Architecture", href: "#architecture" },
  { label: "Technology", href: "#technology" },
  { label: "Future", href: "#future" },
  { label: "Contact", href: "#contact" },
];

const languages = [
  { name: "English", code: "EN" },
  { name: "Select Language", code: "SELECT" },
  { name: "Hindi (हिंदी)", code: "HI" },
  { name: "Marathi (मराठी)", code: "MR" },
  { name: "Tamil (தமிழ்)", code: "TA" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Select Language");
  const [micActive, setMicActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-md rounded-2xl flex items-center justify-between transition-all duration-300 ${
            scrolled ? "px-4 py-2" : "px-5 py-3"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-gradient-to-br from-[#FD8008] to-orange-500 grid place-items-center shadow-lg shadow-orange-500/30">
              <span className="font-bold text-white text-sm">SU</span>
            </div>
            <div className="leading-tight">
              <div className="text-slate-900 font-extrabold tracking-tight">SUVIDHA</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold">
                Smart Civic Platform
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-slate-700 hover:text-[#FD8008] hover:bg-slate-100/70 font-semibold rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Managed Language dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="h-10 px-4 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 border border-slate-200/80 rounded-full flex items-center justify-between gap-2.5 hover:bg-slate-100 transition shadow-sm w-36 sm:w-40"
              >
                <span className="truncate">{selectedLang}</span>
                <ChevronDown className="size-4 text-slate-500 shrink-0" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-40 bg-white border border-slate-200/80 rounded-2xl shadow-lg py-1.5 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setSelectedLang(l.name);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#FD8008] transition-colors font-semibold"
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Managed Speaker Button */}
            <button
              onClick={() => setSoundOn(!soundOn)}
              className={`size-10 rounded-full flex items-center justify-center border border-slate-200/80 shadow-sm transition ${
                soundOn
                  ? "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  : "bg-red-50 text-red-500 border-red-200 hover:bg-red-100/70"
              }`}
              title={soundOn ? "Mute Speech" : "Unmute Speech"}
            >
              {soundOn ? <Volume2 className="size-4.5" /> : <VolumeX className="size-4.5" />}
            </button>

            {/* Managed Mic Button */}
            <button
              onClick={() => setMicActive(!micActive)}
              className={`size-10 rounded-full flex items-center justify-center border border-slate-200/80 shadow-sm transition ${
                micActive
                  ? "bg-orange-50 text-[#FD8008] border-orange-200 hover:bg-orange-100/70 animate-pulse"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              }`}
              title={micActive ? "Stop Voice Recognition" : "Start Voice Recognition"}
            >
              <Mic className="size-4.5" />
            </button>

            <button
              aria-label="Menu"
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-xl rounded-2xl p-3 grid grid-cols-2 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-slate-700 font-semibold rounded-lg hover:bg-slate-100/60 hover:text-[#FD8008]"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.header>
  );
}
