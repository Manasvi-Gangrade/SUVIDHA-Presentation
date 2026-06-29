import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { KioskMockup, PhoneMockup } from "./Mockups";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-6 lg:pt-40 lg:pb-8">
      {/* background decorations */}
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-32 left-1/4 size-[500px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-40 right-0 size-[420px] rounded-full bg-orange/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2.5 bg-[#FD8008] text-white rounded-full px-5 py-2 text-sm font-bold shadow-lg shadow-orange-500/20 border border-orange-500/30">
            <span className="size-2 rounded-full bg-white animate-pulse" />
            National Grand Finale · Government Technology
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            <span className="text-gradient-blue">Modernizing Citizen Services</span>{" "}
            <span className="text-white">Through </span>
            <span className="text-gradient-orange">AI-Powered</span>{" "}
            <span className="text-white">Smart Kiosks</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            One ecosystem. Two connected platforms. One seamless citizen experience —
            built for India&apos;s Smart Cities and digital governance.
          </p>


        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative h-[560px] sm:h-[600px]"
        >
          {/* soft circles */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 right-10 size-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-10 left-0 size-64 rounded-full bg-orange/15 blur-3xl" />
          </div>

          {/* Sync SVG between kiosk and phone */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600" fill="none">
            <defs>
              <linearGradient id="syncGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fb923c" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path d="M 280 220 Q 400 180 480 300" stroke="url(#syncGrad)" strokeWidth="1.5" />
            <path d="M 280 240 Q 400 360 480 320" stroke="url(#syncGrad)" strokeWidth="1.5" />
            <path d="M 280 230 Q 400 270 480 310" stroke="#60a5fa" strokeWidth="1.5" className="animate-dash" />
          </svg>

          {/* Kiosk */}
          <div className="absolute left-0 top-[20%] w-[62%] z-10 animate-float">
            <KioskMockup />
          </div>

          {/* Phone */}
          <div className="absolute right-0 top-[10%] w-[32%] z-20 animate-float-slow">
            <PhoneMockup />
          </div>

          {/* Real-time sync label */}
          <div className="absolute left-[65%] top-[40%] z-30 -translate-x-1/2 glass-strong rounded-full px-3 py-1.5 text-[11px] text-white/90 inline-flex items-center gap-2 shadow-xl border border-white/10">
            <span className="size-1.5 rounded-full bg-orange animate-pulse" />
            Real-Time Sync
          </div>
        </motion.div>
      </div>
    </section>
  );
}
