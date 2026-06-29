import { Fingerprint, QrCode, Mic, Printer, Bell, FileText, Ticket, ChevronRight } from "lucide-react";

export function KioskMockup() {
  return (
    <div className="relative">
      {/* Landscape Kiosk frame */}
      <div className="relative mx-auto w-full aspect-[16/10] rounded-2xl glass-strong p-2 shadow-2xl glow-blue border border-white/20">
        {/* screen containing the actual dashboard image */}
        <div className="w-full h-full rounded-xl bg-slate-950 overflow-hidden relative border border-white/10 group">
          <img
            src="/images/kiosk_home.png"
            className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-103"
            alt="SUVIDHA Kiosk Dashboard"
          />
          {/* Subtle sheen highlight effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
        </div>
      </div>
      {/* Pedestal stand for Kiosk */}
      <div className="mx-auto -mt-0.5 h-1.5 w-[40%] bg-slate-700/80 rounded-t" />
      <div className="mx-auto h-12 w-[10%] bg-gradient-to-b from-slate-800 to-slate-900 border-x border-slate-750 relative shadow-inner">
        {/* Status indicator led */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 size-1 rounded-full bg-green-500 animate-pulse" />
      </div>
      <div className="mx-auto h-2 w-[35%] bg-slate-950 rounded-t shadow" />
    </div>
  );
}

export function PhoneMockup({ screen = "/images/mobile_home.png" }: { screen?: string }) {
  return (
    <div className="relative mx-auto w-full aspect-[9/19] rounded-[36px] glass-strong p-2 shadow-2xl glow-blue">
      {/* Phone Camera Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 h-3.5 w-20 rounded-full bg-black/75 z-20 border border-white/5" />
      
      {/* Screen container */}
      <div className="h-full w-full rounded-[28px] bg-slate-950 overflow-hidden relative border border-white/10 group">
        <img
          src={screen}
          className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-103"
          alt="SUVIDHA Companion App Screen"
        />
        {/* Subtle sheen highlight effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
      </div>
    </div>
  );
}
