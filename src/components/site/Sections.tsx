import { motion } from "framer-motion";
import {
  Sparkles, ScanLine, ScanFace, FileText, Ticket, Receipt, MapPin, Languages, Bell, Landmark,
  ShieldCheck, KeySquare, Database, Lock, Globe, Layers, Cloud, BarChart3, Activity, Users,
  CheckCircle2, XCircle, ArrowRight, ArrowLeftRight, Workflow, Bot, MessageSquare, Mic,
  Building2, Hospital, TramFront, GraduationCap, BusFront, Landmark as Court, MapPinned,
  Github, Linkedin, Mail, Send, Code2, Zap, Server, Map, LineChart, Smartphone, Monitor,
  CircuitBoard, Cpu, ChevronDown, Award, ClipboardCheck, CreditCard, AlertTriangle, Accessibility,
  RefreshCw, Network
} from "lucide-react";
import { useState } from "react";
import { KioskMockup, PhoneMockup } from "./Mockups";

const solidColors = [
  { bg: "bg-amber-600", text: "text-white", desc: "text-amber-100", iconBg: "bg-amber-800/40", icon: "text-white" }, // Orange
  { bg: "bg-red-600", text: "text-white", desc: "text-red-100", iconBg: "bg-red-800/40", icon: "text-white" }, // Red
  { bg: "bg-teal-600", text: "text-white", desc: "text-teal-100", iconBg: "bg-teal-800/40", icon: "text-white" }, // Teal
  { bg: "bg-blue-600", text: "text-white", desc: "text-blue-100", iconBg: "bg-blue-800/40", icon: "text-white" }, // Blue
  { bg: "bg-emerald-600", text: "text-white", desc: "text-emerald-100", iconBg: "bg-emerald-800/40", icon: "text-white" }, // Green
  { bg: "bg-indigo-600", text: "text-white", desc: "text-indigo-100", iconBg: "bg-indigo-800/40", icon: "text-white" }, // Purple
];

// ---------- SECTION 1 : WHAT IS SUVIDHA ----------
export function WhatIs() {
  const leftFeatures = [
    { I: Users, t: "Unified Citizen ID" },
    { I: RefreshCw, t: "Real-time Sync Node" },
    { I: Database, t: "Offline-First Edge" },
    { I: ShieldCheck, t: "DigiLocker Bridge" },
    { I: KeySquare, t: "Biometric Sandbox" }
  ];

  const rightFeatures = [
    { I: Bot, t: "Voice-First Guidance" },
    { I: Accessibility, t: "WCAG AA Accessible" },
    { I: Languages, t: "Vernacular Engine" },
    { I: Receipt, t: "Instant Smart Slip" },
    { I: Bell, t: "Proactive Alerts" }
  ];

  return (
    <Section id="about" eyebrow="What is SUVIDHA" title={<>One Platform. <span className="text-gradient-orange">Two Connected Experiences.</span></>}
      subtitle="SUVIDHA unifies Smart Civic Kiosks, the Citizen Companion App, and Intelligent Digital Services into one seamless ecosystem for modern governance.">
      
      {/* CSS Styles injection for connection arrows and skyline backdrop */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flow {
          to {
            stroke-dashoffset: -40;
          }
        }
        @keyframes pulse-halo {
          0% { transform: scale(0.96); opacity: 0.4; }
          50% { transform: scale(1.08); opacity: 0.7; }
          100% { transform: scale(0.96); opacity: 0.4; }
        }
        .animate-flow-line {
          stroke-dasharray: 6, 6;
          animation: flow 1.8s linear infinite;
        }
        .animate-pulse-halo {
          animation: pulse-halo 3s ease-in-out infinite;
        }
      `}} />

      {/* Main Ecosystem Layout Grid */}
      <div className="grid lg:grid-cols-12 gap-6 items-center relative z-10 w-full mt-6">
        
        {/* Left Side: 8 Solid Colored Feature Chips */}
        <div className="lg:col-span-3 flex flex-col gap-3 ordering-1 lg:order-none">
          {leftFeatures.map((item, index) => {
            const color = solidColors[index % solidColors.length];
            return (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={`${color.bg} rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-lg border border-white/10 hover:-translate-y-0.5 transition duration-300`}
              >
                <div className="p-1 rounded bg-black/20 text-white shrink-0">
                  <item.I className="size-4" strokeWidth={2.5} />
                </div>
                <span className="text-white text-xs font-extrabold tracking-tight">{item.t}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Center: Ecosystem Network Diagram */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[460px] bg-slate-950/40 rounded-3xl border border-slate-800/80 p-6 overflow-hidden shadow-inner ordering-none">
          
          {/* Subtle Glow Overlays */}
          <div className="absolute top-1/4 left-1/4 size-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 size-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Faint Grid Overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />

          {/* Smart City skyline backdrop at the bottom */}
          <svg className="absolute bottom-0 left-0 right-0 h-20 text-white/5 pointer-events-none z-0" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path d="M0,100 L0,80 L10,80 L10,90 L20,90 L20,70 L35,70 L35,100 L60,100 L60,60 L75,60 L75,80 L80,80 L80,50 L95,50 L95,100 L120,100 L120,75 L135,75 L135,90 L160,90 L160,40 L180,40 L180,100 L200,100 L200,70 L220,70 L220,100 L250,100 L250,30 L275,30 L275,50 L290,50 L290,100 L310,100 L310,75 L330,75 L330,60 L345,60 L345,100 L370,100 L370,50 L385,50 L385,80 L400,80 L400,100 Z" fill="currentColor" />
          </svg>

          {/* Animated Connecting Lines (Visible on md/lg) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" viewBox="0 0 460 460" preserveAspectRatio="none">
            {/* Center Cloud is at (230, 230) */}
            {/* Government Services top-left: (100, 75) */}
            <line x1="230" y1="230" x2="100" y2="75" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6, 6" className="animate-flow-line" />
            {/* Admin Dashboard top-right: (360, 75) */}
            <line x1="230" y1="230" x2="360" y2="75" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6, 6" className="animate-flow-line" />
            {/* Smart Civic Kiosk center-left: (70, 230) */}
            <line x1="230" y1="230" x2="70" y2="230" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6, 6" className="animate-flow-line" />
            {/* Mobile App center-right: (390, 230) */}
            <line x1="230" y1="230" x2="390" y2="230" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6, 6" className="animate-flow-line" />
            {/* Citizen Database bottom-center: (230, 385) */}
            <line x1="230" y1="230" x2="230" y2="385" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6, 6" className="animate-flow-line" />
          </svg>

          {/* Center Hub: Glowing Government Cloud */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="absolute -inset-6 rounded-full bg-blue-500/20 blur-xl animate-pulse-halo" />
            <div className="relative size-20 md:size-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 border-2 border-white/20 shadow-[0_0_40px_rgba(59,130,246,0.5)] grid place-items-center">
              <Cloud className="size-10 md:size-12 text-white animate-pulse" />
            </div>
            <span className="mt-3 px-3 py-1 rounded-full bg-indigo-900 border border-indigo-700 text-white font-extrabold text-[10px] tracking-widest uppercase shadow-md whitespace-nowrap">
              ☁️ SUVIDHA Cloud
            </span>
          </div>

          {/* Top-Left: Government Services */}
          <div className="absolute top-[8%] left-[8%] md:left-[12%] z-10 flex items-center gap-2 bg-[#112240] px-3.5 py-2 rounded-xl border border-slate-700 shadow-md">
            <Landmark className="size-4 text-orange" />
            <span className="text-white text-[10px] md:text-xs font-bold whitespace-nowrap">Govt Services</span>
          </div>

          {/* Top-Right: Admin Dashboard */}
          <div className="absolute top-[8%] right-[8%] md:right-[12%] z-10 flex items-center gap-2 bg-[#112240] px-3.5 py-2 rounded-xl border border-slate-700 shadow-md">
            <BarChart3 className="size-4 text-teal-400" />
            <span className="text-white text-[10px] md:text-xs font-bold whitespace-nowrap">Admin Panel</span>
          </div>

          {/* Center-Left: Smart Civic Kiosk */}
          <div className="absolute top-[50%] -translate-y-1/2 left-[3%] z-10 flex flex-col items-center gap-1 bg-[#112240]/90 p-3 rounded-2xl border border-slate-700 shadow-xl max-w-[90px] md:max-w-[110px]">
            <div className="w-[50px] md:w-[60px]"><KioskMockup /></div>
            <span className="text-[9px] md:text-[10px] text-white/90 font-extrabold text-center uppercase tracking-wider">Kiosk Terminal</span>
          </div>

          {/* Center-Right: Citizen Mobile App */}
          <div className="absolute top-[50%] -translate-y-1/2 right-[3%] z-10 flex flex-col items-center gap-1 bg-[#112240]/90 p-3 rounded-2xl border border-slate-700 shadow-xl max-w-[90px] md:max-w-[110px]">
            <div className="w-[40px] md:w-[50px]"><PhoneMockup /></div>
            <span className="text-[9px] md:text-[10px] text-white/90 font-extrabold text-center uppercase tracking-wider">Citizen App</span>
          </div>

          {/* Bottom-Center: Citizen Database */}
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-[#112240] px-3.5 py-2 rounded-xl border border-slate-700 shadow-md">
            <Database className="size-4 text-emerald-400" />
            <span className="text-white text-[10px] md:text-xs font-bold whitespace-nowrap">Citizen Database</span>
          </div>

        </div>

        {/* Right Side: Remaining 8 Solid Colored Feature Chips */}
        <div className="lg:col-span-3 flex flex-col gap-3 ordering-2 lg:order-none">
          {rightFeatures.map((item, index) => {
            const color = solidColors[(index + 4) % solidColors.length];
            return (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={`${color.bg} rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-lg border border-white/10 hover:-translate-y-0.5 transition duration-300`}
              >
                <div className="p-1 rounded bg-black/20 text-white shrink-0">
                  <item.I className="size-4" strokeWidth={2.5} />
                </div>
                <span className="text-white text-xs font-extrabold tracking-tight">{item.t}</span>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bottom Highlights (3 compact cards in solid theme-coded blocks) */}
      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        {[
          { I: Bot, t: "AI Powered", d: "Intelligent citizen assistance with voice and multilingual support.", bg: "bg-amber-600", desc: "text-amber-100" },
          { I: RefreshCw, t: "Connected Platform", d: "Start on mobile, continue at the kiosk, and track everything in one place.", bg: "bg-blue-600", desc: "text-blue-100" },
          { I: Accessibility, t: "Accessible by Design", d: "Built for elderly, differently-abled, and first-time digital users.", bg: "bg-teal-600", desc: "text-teal-100" }
        ].map((h, i) => (
          <motion.div
            key={h.t}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl p-6 border border-white/10 shadow-xl flex flex-col justify-between ${h.bg} text-white hover:-translate-y-1 transition duration-300`}
          >
            <div>
              <div className="size-10 rounded-xl bg-white/20 grid place-items-center mb-3">
                <h.I className="size-5 text-white" />
              </div>
              <h4 className="text-white font-extrabold text-lg tracking-tight">{h.t}</h4>
              <p className={`text-xs ${h.desc} mt-1.5 leading-relaxed font-semibold`}>{h.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ---------- SECTION 2 : BENTO ----------
const bento = [
  {
    I: Sparkles,
    t: "AI Sahayak",
    d: "Multilingual voice & chat assistant guiding every citizen through forms.",
    borderColor: "border-t-orange-500",
    badgeBg: "bg-orange-500",
    img: "/images/urban_hub.png"
  },
  {
    I: ScanLine,
    t: "Aadhaar QR Scan",
    d: "Instant identity verification via secure QR code.",
    borderColor: "border-t-blue-500",
    badgeBg: "bg-blue-500",
    img: "/images/Screenshot 2026-04-30 121222.png"
  },
  {
    I: ScanFace,
    t: "Face Authentication",
    d: "Fast biometric authentication & liveness checks.",
    borderColor: "border-t-teal-500",
    badgeBg: "bg-teal-500",
    img: "/images/image.png"
  },
  {
    I: FileText,
    t: "Digital Documents",
    d: "Secure integration with DigiLocker and direct digital document management.",
    borderColor: "border-t-indigo-500",
    badgeBg: "bg-indigo-500",
    img: "/images/digital_concept.png"
  },
  {
    I: Ticket,
    t: "Smart Queue Token",
    d: "Book slots, check status and queue position digitally.",
    borderColor: "border-t-pink-500",
    badgeBg: "bg-pink-500",
    img: "/images/image copy 3.png"
  },
  {
    I: Receipt,
    t: "Smart Receipt",
    d: "Instant printed proof and digital download.",
    borderColor: "border-t-cyan-500",
    badgeBg: "bg-cyan-500",
    img: "/images/image copy 6.png"
  },
  {
    I: MapPin,
    t: "Kiosk Locator",
    d: "Find nearest kiosk location on an interactive map.",
    borderColor: "border-t-amber-500",
    badgeBg: "bg-amber-500",
    img: "/images/smart_city_2.png"
  },
  {
    I: Languages,
    t: "Multi-language",
    d: "Full voice and UI support in English, Hindi & regional languages.",
    borderColor: "border-t-rose-500",
    badgeBg: "bg-rose-500",
    img: "/images/image copy 7.png"
  },
  {
    I: Bell,
    t: "Notifications",
    d: "Real-time updates on queue tokens and request progress.",
    borderColor: "border-t-red-500",
    badgeBg: "bg-red-500",
    img: "/images/image copy 2.png"
  },
  {
    I: Landmark,
    t: "Government Services",
    d: "15+ unified civic departments in one kiosk.",
    borderColor: "border-t-emerald-500",
    badgeBg: "bg-emerald-500",
    img: "/images/municipal.png"
  },
];

export function Bento() {
  return (
    <Section id="features" eyebrow="Feature Showcase" title={<>Everything a citizen needs, <span className="text-gradient-blue">in one tap.</span></>}
      subtitle="A premium suite of capabilities engineered for accessibility, speed and trust.">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {bento.map((b, i) => (
          <motion.div key={b.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
            className={`group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#112240] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border-t-4 ${b.borderColor} shadow-lg h-[240px]`}>
            
            {/* Top representation image - solid and 100% visible */}
            <div className="w-full relative overflow-hidden shrink-0 h-[100px]">
              <img src={b.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={b.t} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Badge overlay on top of the image */}
              <div className="absolute top-2 right-2 z-10">
                <span className={`text-[9px] uppercase tracking-wider font-extrabold text-white px-2 py-0.5 rounded shadow ${b.badgeBg}`}>
                  Active
                </span>
              </div>
            </div>

            {/* Bottom text content - solid theme colored background */}
            <div className={`p-3 flex-1 flex flex-col justify-between ${b.badgeBg} relative z-10 border-t border-white/10 text-white`}>
              <div className="flex items-center gap-1.5">
                <div className="p-1 rounded bg-black/25 text-white shrink-0">
                  <b.I className="size-3.5" />
                </div>
                <h3 className="text-white font-extrabold text-xs sm:text-sm tracking-tight leading-tight line-clamp-1">{b.t}</h3>
              </div>
              <p className="text-[10px] sm:text-[11px] text-white/90 leading-tight line-clamp-3 font-medium mt-1">{b.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ---------- SECTION 3 : KIOSK SHOWCASE ----------
const kioskFeatures = [
  { I: Sparkles, t: "AI Assistant", d: "Voice + chat guidance." },
  { I: ScanLine, t: "Aadhaar Scanner", d: "QR-based verification." },
  { I: ScanFace, t: "Face Authentication", d: "Liveness-checked biometrics." },
  { I: Receipt, t: "Receipt Printer", d: "Instant proof on paper." },
  { I: Monitor, t: "Touch Interface", d: "Large, accessible UI." },
  { I: Mic, t: "Voice Commands", d: "Hands-free interaction." },
  { I: Accessibility as any, t: "Accessibility", d: "WCAG AA compliant.", placeholder: true },
  { I: Ticket, t: "Queue Management", d: "Token & status display." },
];
export function KioskShowcase() {
  // Reuse Accessibility icon via import
  return (
    <Section id="kiosk" eyebrow="Smart Civic Kiosk" title={<>A self-service terminal, <span className="text-gradient-orange">reimagined.</span></>}
      subtitle="Public-grade hardware paired with a delightful interface — ready for municipal offices, hospitals and transport hubs.">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div className="relative grid-bg rounded-3xl p-10 glass">
          <div className="max-w-[280px] mx-auto"><KioskMockup /></div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 via-transparent to-orange/10 pointer-events-none" />
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {kioskFeatures.map((f, i) => (
            <FeatureRow key={f.t} I={f.I} t={f.t} d={f.d} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// ---------- SECTION 4 : MOBILE SHOWCASE ----------
const mobileFeatures = [
  { I: Smartphone, t: "Dashboard" },
  { I: FileText, t: "Documents" },
  { I: Ticket, t: "Queue" },
  { I: MessageSquare, t: "Complaint" },
  { I: ShieldCheck, t: "Certificates" },
  { I: Users, t: "Profile" },
];
const notifs = [
  { bg: "bg-emerald-600", t: "Queue Ready in 3 min", I: Ticket },
  { bg: "bg-blue-600", t: "Application Approved", I: CheckCircle2 },
  { bg: "bg-amber-600", t: "Document Uploaded", I: FileText },
  { bg: "bg-indigo-600", t: "Complaint Updated", I: MessageSquare },
];
export function MobileShowcase() {
  return (
    <Section id="mobile" eyebrow="Citizen Companion App" title={<>Government services <span className="text-gradient-blue">in your pocket.</span></>}
      subtitle="A clean, accessible companion that mirrors every kiosk action — wherever you go.">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {mobileFeatures.map((m, i) => {
              const color = solidColors[i % solidColors.length];
              return (
                <div key={m.t} className={`rounded-xl p-4 text-center ${color.bg} shadow-lg hover:-translate-y-0.5 transition duration-300`}>
                  <m.I className="size-5 mx-auto text-white" />
                  <div className="text-xs mt-2 font-extrabold text-white">{m.t}</div>
                </div>
              );
            })}
          </div>
          <div className="space-y-2 pt-4">
            {notifs.map((n) => (
              <motion.div key={n.t} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className={`rounded-xl ${n.bg} px-4 py-3 flex items-center gap-3 shadow-lg border border-white/10`}>
                <n.I className="size-4 text-white" />
                <span className="text-sm font-extrabold text-white">{n.t}</span>
                <span className="ml-auto text-[10px] text-white/90 font-medium">just now</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-orange/15 blur-3xl rounded-full" />
          <div className="flex gap-4 justify-center">
            <div className="w-[180px] translate-y-6 opacity-80"><PhoneMockup screen="/images/mobile_gas.png" /></div>
            <div className="w-[200px]"><PhoneMockup screen="/images/mobile_home.png" /></div>
            <div className="w-[180px] translate-y-6 opacity-80"><PhoneMockup screen="/images/mobile_track.png" /></div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---------- SECTION 5 : SYNC ----------
const syncCards = [
  { I: KeySquare, t: "Authentication", d: "User logs in once." },
  { I: FileText, t: "Documents", d: "Instant synchronization." },
  { I: Workflow, t: "Applications", d: "Continue anywhere." },
  { I: Ticket, t: "Queue Token", d: "Generated on both devices." },
  { I: Bell, t: "Notifications", d: "Instant updates." },
  { I: MessageSquare, t: "Complaint Tracking", d: "Always synchronized." },
];
export function SyncSection() {
  const flow = ["Start on Phone", "Continue at Kiosk", "Track on Phone", "Completed"];
  return (
    <Section eyebrow="Real-Time Sync" title={<>One Citizen. One Journey. <span className="text-gradient-orange">Two Connected Devices.</span></>}
      subtitle="A single Citizen ID flows seamlessly across kiosk and mobile — pause on one, resume on the other.">
      <div className="glass-strong rounded-3xl p-8 lg:p-10">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="aspect-square max-w-[160px] mx-auto"><KioskMockup /></div>
            <div className="text-xs text-white/60 mt-2 uppercase tracking-widest">Kiosk</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowLeftRight className="size-7 text-orange animate-pulse" />
            <div className="text-[10px] text-white/60 uppercase tracking-widest">Sync</div>
          </div>
          <div className="text-center">
            <div className="aspect-square max-w-[120px] mx-auto"><PhoneMockup /></div>
            <div className="text-xs text-white/60 mt-2 uppercase tracking-widest">Mobile</div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {syncCards.map((s, i) => <FeatureRow key={s.t} I={s.I} t={s.t} d={s.d} index={i} />)}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {flow.map((step, i) => {
            const stepColors = [
              "bg-amber-600",  // Orange
              "bg-teal-600",   // Teal
              "bg-blue-600",   // Blue
              "bg-emerald-600" // Green
            ];
            return (
              <div key={step} className={`rounded-xl px-4 py-3 text-center text-sm font-extrabold text-white shadow-lg ${stepColors[i % stepColors.length]} border border-white/10`}>
                <div className="text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold">Step {i + 1}</div>
                {step}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ---------- SECTION 6 : WHY (Comparison) ----------
const compares = [
  ["Long Queues", "Digital Queue"],
  ["Paper Forms", "Digital Documents"],
  ["Multiple Offices", "Unified Platform"],
  ["Manual Tracking", "Live Status"],
  ["Limited Accessibility", "Universal Accessibility"],
  ["No AI Guidance", "AI Sahayak"],
  ["No Synchronization", "Kiosk + Mobile Sync"],
];
export function WhySuvidha() {
  return (
    <Section eyebrow="Why SUVIDHA" title={<>The leap from <span className="text-white/60 line-through decoration-orange/60">paperwork</span> to <span className="text-gradient-orange">platform.</span></>}
      subtitle="A side-by-side look at how traditional citizen service stacks up against SUVIDHA.">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6">
          <div className="text-sm text-white/60 uppercase tracking-widest mb-4 font-bold">Traditional</div>
          <div className="space-y-2">
            {compares.map(([a]) => (
              <div key={a} className="flex items-center gap-3 rounded-xl bg-slate-900/90 border border-red-900/30 px-4 py-3 text-white/90 shadow-md">
                <XCircle className="size-4 text-red-500 shrink-0" /> <span className="font-bold">{a}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-strong rounded-2xl p-6 border-primary/30">
          <div className="text-sm text-orange uppercase tracking-widest mb-4 font-bold">SUVIDHA</div>
          <div className="space-y-2">
            {compares.map(([, b], i) => {
              const color = solidColors[i % solidColors.length];
              return (
                <div key={b} className={`flex items-center gap-3 rounded-xl ${color.bg} px-4 py-3 text-white shadow-md transition hover:-translate-y-0.5 duration-300`}>
                  <CheckCircle2 className="size-4 text-white shrink-0" /> <span className="font-extrabold">{b}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---------- SECTION 7 : HOW IT WORKS ----------
const steps = [
  { I: ScanFace, t: "Authentication", d: "Face / Aadhaar QR / Phone OTP" },
  { I: Landmark, t: "Choose Department", d: "Electricity · Water · Municipality" },
  { I: Workflow, t: "Apply Service", d: "Complaint · Connection · Bill" },
  { I: FileText, t: "Upload Documents", d: "Camera · Phone Sync · Locker" },
  { I: ShieldCheck, t: "Verification", d: "AI assistance + smart validation" },
  { I: Receipt, t: "Receipt & Tracking", d: "Token · Receipt · Live status" },
];
export function HowItWorks() {
  return (
    <Section eyebrow="How It Works" title={<>From <span className="text-gradient-blue">first tap</span> to <span className="text-gradient-orange">final receipt.</span></>}
      subtitle="A guided six-step flow designed for first-time and returning citizens.">
      <div className="relative">
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((s, i) => {
            const color = solidColors[i % solidColors.length];
            return (
              <motion.div key={s.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`rounded-2xl p-5 relative ${color.bg} shadow-lg hover:-translate-y-1 transition duration-300`}>
                <div className="text-[10px] text-white/90 tracking-widest uppercase font-bold">Step {i + 1}</div>
                <div className="mt-2 size-10 rounded-xl bg-white/20 grid place-items-center"><s.I className="size-5 text-white" /></div>
                <div className="mt-3 text-white font-extrabold text-sm sm:text-base">{s.t}</div>
                <div className={`text-xs ${color.desc} mt-1 leading-snug font-medium`}>{s.d}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ---------- SECTION 8 : AI SAHAYAK ----------
const aiFeatures = [
  { I: Mic, t: "Voice Guidance" }, { I: MessageSquare, t: "Smart Chat" },
  { I: Languages, t: "Multilingual" }, { I: FileText, t: "Smart Form Fill" },
  { I: Sparkles, t: "Citizen Guidance" }, { I: Landmark, t: "Service Discovery" },
];
export function AISahayak() {
  return (
    <Section eyebrow="AI Sahayak" title={<>Meet <span className="text-gradient-orange">Sahayak AI</span><br />Your Digital Civic Assistant.</>}
      subtitle="A multilingual, voice-first assistant that turns complex paperwork into a conversation.">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative max-w-sm mx-auto flex justify-center items-center my-6 lg:my-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-orange/20 blur-3xl" />
          
          {/* Sahayak Chat Mockup Wrapper */}
          <div className="relative z-10 bg-slate-950/40 rounded-3xl p-2 border border-white/10 shadow-2xl overflow-hidden hover:scale-[1.02] transition duration-300">
            {/* Glossy reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
            
            <img 
              src="/images/sahayak_chat.png" 
              className="rounded-2xl w-full max-h-[450px] object-contain shadow-xl" 
              alt="Sahayak AI Assistant" 
            />
          </div>

          {/* Glowing Voice Wave Indicator */}
          <div className="absolute -bottom-4 z-20 flex items-center gap-1.5 bg-slate-900 border border-orange/40 rounded-full px-4 py-2 shadow-xl animate-pulse">
            <span className="size-2 rounded-full bg-orange animate-ping" />
            <span className="text-[10px] text-white font-extrabold tracking-wider uppercase font-mono">Sahayak Active</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {aiFeatures.map((f, i) => {
            const color = solidColors[i % solidColors.length];
            return (
              <div key={f.t} className={`rounded-xl p-4 ${color.bg} hover:-translate-y-0.5 transition duration-300 shadow-md`}>
                <div className="size-9 rounded-lg bg-white/20 grid place-items-center mb-2"><f.I className="size-4 text-white" /></div>
                <div className="text-sm text-white font-extrabold">{f.t}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ---------- SECTION 9 : ARCHITECTURE ----------
const layers = [
  { I: Users, t: "Citizen Layer", d: "Kiosk + Mobile App" },
  { I: KeySquare, t: "Authentication Layer", d: "Face · Aadhaar · OTP" },
  { I: Layers, t: "Business Logic", d: "Services · Workflows · Rules" },
  { I: Database, t: "Data Layer", d: "Encrypted storage" },
  { I: BarChart3, t: "Admin Dashboard", d: "Monitoring & analytics" },
  { I: Globe, t: "Government APIs", d: "DigiLocker · UPI · eKYC (Future)" },
];
export function Architecture() {
  return (
    <Section id="architecture" eyebrow="System Architecture" title={<>A platform built for <span className="text-gradient-blue">scale & trust.</span></>}
      subtitle="A layered architecture engineered for security, observability and clean separation of concerns.">
      <div className="relative glass-strong rounded-3xl p-6 lg:p-10 border border-white/10 shadow-2xl overflow-hidden flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-orange/10 pointer-events-none" />
        <img 
          src="/images/architecture.png" 
          alt="System Architecture Diagram" 
          className="relative z-10 w-full max-w-4xl rounded-2xl shadow-xl object-contain"
        />
      </div>
    </Section>
  );
}

// ---------- SECTION 10 : TECH STACK ----------
const tech = [
  { I: Code2, t: "React + TypeScript", d: "Type-safe component UI" },
  { I: Zap, t: "Vite", d: "Lightning-fast tooling" },
  { I: Layers, t: "Tailwind CSS", d: "Design-system styling" },
  { I: Server, t: "Firebase / REST", d: "Backend-ready APIs" },
  { I: Database, t: "Local + Cloud DB", d: "Offline-first storage" },
  { I: Mic, t: "Web Speech API", d: "Voice recognition & TTS" },
  { I: Map, t: "Leaflet", d: "Kiosk maps & locator" },
  { I: LineChart, t: "Recharts", d: "Admin analytics" },
];
export function TechStack() {
  return (
    <Section id="technology" eyebrow="Technology" title={<>A modern stack, <span className="text-gradient-orange">production-ready.</span></>}
      subtitle="Best-in-class open standards chosen for performance, accessibility and long-term maintainability.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {tech.map((x, i) => {
          const color = solidColors[i % solidColors.length];
          return (
            <div key={x.t} className={`rounded-2xl p-5 hover:-translate-y-1 transition duration-300 ${color.bg} shadow-lg`}>
              <div className="size-10 rounded-xl bg-white/20 grid place-items-center mb-3"><x.I className="size-5 text-white" /></div>
              <div className="text-white font-extrabold">{x.t}</div>
              <div className={`text-xs ${color.desc} mt-1 font-medium`}>{x.d}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// ---------- SECTION 11 : ADMIN DASHBOARD ----------
export function AdminDashboard() {
  return (
    <Section eyebrow="Admin Dashboard" title={<>Real-time control room for <span className="text-gradient-blue">civic operations.</span></>}
      subtitle="A unified dashboard for officials to monitor kiosks, citizen requests and service performance.">
      <div className="glass-strong rounded-3xl p-6 lg:p-8 relative">
        <div className="grid lg:grid-cols-4 gap-4">
          {[{ l: "Active Kiosks", v: "128" }, { l: "Requests Today", v: "4,231" }, { l: "Avg. Wait", v: "3.2m" }, { l: "Uptime", v: "99.97%" }].map((k, i) => {
            const color = solidColors[i % solidColors.length];
            return (
              <div key={k.l} className={`rounded-xl p-4 ${color.bg} shadow-lg`}>
                <div className="text-xs text-white/90 font-bold">{k.l}</div>
                <div className="text-2xl font-extrabold text-white mt-1">{k.v}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-4">
          <div className="lg:col-span-2 bg-[#1b2a47] rounded-2xl p-5 shadow-lg border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <div className="text-white font-extrabold">Service Usage</div>
              <Activity className="size-4 text-gov-blue-soft" />
            </div>
            {/* fake line chart */}
            <svg viewBox="0 0 600 180" className="w-full h-40">
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,140 C80,110 120,60 180,80 S280,160 340,100 460,40 540,70 L600,60 L600,180 L0,180 Z" fill="url(#lg)" />
              <path d="M0,140 C80,110 120,60 180,80 S280,160 340,100 460,40 540,70 L600,60" stroke="#60a5fa" strokeWidth="2" fill="none" />
              <path d="M0,160 C80,150 140,140 200,130 S320,120 380,140 480,150 600,130" stroke="#fb923c" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            </svg>
          </div>
          <div className="bg-[#1b2a47] rounded-2xl p-5 shadow-lg border border-slate-800">
            <div className="text-white font-extrabold mb-3">Department Mix</div>
            <div className="grid place-items-center">
              <svg viewBox="0 0 120 120" className="size-40 -rotate-90">
                <circle cx="60" cy="60" r="48" stroke="#1f2937" strokeWidth="14" fill="none" />
                <circle cx="60" cy="60" r="48" stroke="#60a5fa" strokeWidth="14" fill="none" strokeDasharray="120 301" />
                <circle cx="60" cy="60" r="48" stroke="#fb923c" strokeWidth="14" fill="none" strokeDasharray="80 301" strokeDashoffset="-120" />
                <circle cx="60" cy="60" r="48" stroke="#34d399" strokeWidth="14" fill="none" strokeDasharray="60 301" strokeDashoffset="-200" />
              </svg>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-white/70">
              <div className="flex items-center gap-1"><span className="size-2 rounded-full bg-blue-400" /> Electricity</div>
              <div className="flex items-center gap-1"><span className="size-2 rounded-full bg-orange" /> Water</div>
              <div className="flex items-center gap-1"><span className="size-2 rounded-full bg-emerald-400" /> Munic.</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          {[{ l: "Kiosk Health", v: 92 }, { l: "AI Accuracy", v: 96 }, { l: "Resolution Rate", v: 88 }].map((p, i) => {
            const color = solidColors[(i + 2) % solidColors.length];
            return (
              <div key={p.l} className={`rounded-2xl p-5 ${color.bg} shadow-lg`}>
                <div className="text-xs text-white/90 font-bold">{p.l}</div>
                <div className="text-xl font-extrabold text-white">{p.v}%</div>
                <div className="mt-2 h-2 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full bg-white" style={{ width: `${p.v}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ---------- SECTION 12 : SMART CITY ----------
const cityNodes = [
  { I: Building2, t: "Municipal Offices", x: 18, y: 30 },
  { I: Hospital, t: "Hospitals", x: 70, y: 22 },
  { I: TramFront, t: "Railway Stations", x: 82, y: 60 },
  { I: GraduationCap, t: "Colleges", x: 14, y: 68 },
  { I: BusFront, t: "Bus Stations", x: 50, y: 78 },
  { I: Court, t: "Govt. Buildings", x: 40, y: 18 },
  { I: MapPinned, t: "Public Centers", x: 62, y: 48 },
];
export function SmartCity() {
  return (
    <Section eyebrow="Smart City Deployment" title={<>Designed for <span className="text-gradient-orange">every Smart City.</span></>}
      subtitle="A connected mesh of kiosks across the city, unified by one cloud platform and one mobile app.">
      <div className="relative glass-strong rounded-3xl p-6 lg:p-8 aspect-[16/9] grid-bg overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {cityNodes.map((n, i) => (
            <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="#60a5fa" strokeOpacity="0.4" strokeWidth="0.2" className="animate-dash" />
          ))}
        </svg>
        {/* central cloud */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 glass-strong rounded-2xl px-4 py-3 inline-flex items-center gap-2 text-sm text-white">
          <Cloud className="size-5 text-orange" /> Cloud Platform
        </div>
        {cityNodes.map((n) => (
          <div key={n.t} className="absolute glass rounded-xl px-3 py-2 text-[11px] text-white inline-flex items-center gap-2"
            style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}>
            <n.I className="size-3.5 text-gov-blue-soft" /> {n.t}
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---------- SECTION 13 : SECURITY ----------
export function Security() {
  const terminalLogs = [
    "[15:23:44] [SYSTEM] Kiosk Terminal Handshake Initiated",
    "[15:23:45] [AUTH] Biometric Liveness Check Passed (99.8%)",
    "[15:23:46] [DATA] TLS 1.3 Key Exchange Complete",
    "[15:23:47] [SECURITY] AES-256 Database Encryption Active",
    "[15:23:48] [SYSTEM] Session Completed. Local cache purged.",
    "[15:23:50] [AUTH] Mobile Companion Auth Verified (OTP)",
    "[15:23:51] [API] Secure Handshake with UIDAI eKYC",
    "[15:23:52] [FIREWALL] Intrusion prevention scan: 0 Threats",
    // Duplicate logs for loop scroll
    "[15:23:53] [SYSTEM] Kiosk Terminal Handshake Initiated",
    "[15:23:54] [AUTH] Biometric Liveness Check Passed (99.8%)",
    "[15:23:55] [DATA] TLS 1.3 Key Exchange Complete",
    "[15:23:56] [SECURITY] AES-256 Database Encryption Active",
    "[15:23:57] [SYSTEM] Session Completed. Local cache purged.",
    "[15:23:58] [AUTH] Mobile Companion Auth Verified (OTP)",
    "[15:23:59] [API] Secure Handshake with UIDAI eKYC",
    "[15:24:00] [FIREWALL] Intrusion prevention scan: 0 Threats"
  ];

  const pillars = [
    {
      I: ScanFace,
      t: "Biometric Safeguard",
      bg: "bg-teal-600",
      desc: "text-teal-100",
      points: [
        "Face recognition liveness checks",
        "Secure Aadhaar QR card matching",
        "SMS OTP backup verification fallback"
      ]
    },
    {
      I: Lock,
      t: "Data & Cloud Encryption",
      bg: "bg-blue-600",
      desc: "text-blue-100",
      points: [
        "AES-256 state-of-the-art encryption",
        "TLS 1.3 transit encryption protocols",
        "Immediate local session cache wipe"
      ]
    },
    {
      I: ShieldCheck,
      t: "Hardware Lockdown",
      bg: "bg-red-600",
      desc: "text-red-100",
      points: [
        "Tamper-resistant physical steel shell",
        "Restricted kiosk mode & disabled ports",
        "Real-time chassis intrusion alerts"
      ]
    },
    {
      I: Database,
      t: "Firewall & Network Safety",
      bg: "bg-amber-600",
      desc: "text-amber-100",
      points: [
        "Managed secure network segmentation",
        "Centralized firmware security patches",
        "Anti-MITM connection gateways"
      ]
    }
  ];

  return (
    <Section id="security" eyebrow="Security Stack" title={<>Built with <span className="text-gradient-blue">trust at the core.</span></>}
      subtitle="Citizen data is protected by government-grade security standards across hardware, network and application layers.">
      
      {/* CSS Styles injection for security scanner and logs scrolling */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-glow {
          0% { top: 0%; opacity: 0.8; }
          50% { top: 100%; opacity: 0.8; }
          100% { top: 0%; opacity: 0.8; }
        }
        .animate-scan-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #22c55e, transparent);
          box-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e;
          animation: scan-glow 4s linear infinite;
          z-index: 10;
        }
        @keyframes scroll-logs {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-logs-scroll {
          animation: scroll-logs 14s linear infinite;
        }
        .animate-logs-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Security Control Center Terminal (5 cols) */}
        <div className="lg:col-span-5 flex flex-col bg-slate-950/80 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl min-h-[460px]">
          
          {/* Console Header */}
          <div className="bg-[#112240] px-5 py-3.5 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <span className="text-white text-[11px] font-extrabold tracking-widest uppercase">Security Monitor</span>
            </div>
            <span className="text-slate-400 text-[10px] font-mono">SYS.VER: 2.4.0</span>
          </div>

          {/* Biometric Scanning Panel */}
          <div className="relative flex-1 bg-slate-950 flex flex-col items-center justify-center p-6 border-b border-slate-900 min-h-[220px]">
            
            {/* Visual scan frame overlay */}
            <div className="absolute inset-4 border border-white/5 pointer-events-none rounded-xl" />
            
            {/* Scan animation line */}
            <div className="animate-scan-line" />

            {/* Generated Biometrics Image */}
            <div className="relative size-40 md:size-44 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
              <img 
                src="/images/sec_biometrics.png" 
                className="w-full h-full object-cover opacity-85" 
                alt="Biometric Scan Active" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-65" />
            </div>

            {/* Scan status HUD */}
            <div className="mt-4 px-3 py-1 bg-emerald-950/50 border border-emerald-500/30 rounded-lg text-center">
              <span className="text-emerald-400 text-xs font-mono font-bold tracking-wider">
                FACE SCAN: ACTIVE · MATCH 99.8% · UIDAI eKYC SECURE
              </span>
            </div>

          </div>

          {/* Scrolling Log Terminal */}
          <div className="h-32 bg-slate-950 p-4 font-mono text-[10px] text-emerald-500 overflow-hidden relative shrink-0">
            <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none" />
            
            <div className="space-y-1.5 animate-logs-scroll">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="flex gap-2 whitespace-nowrap hover:bg-white/5 px-2 py-0.5 rounded transition">
                  <span className="text-slate-500 font-bold shrink-0">&gt;</span>
                  <span className="leading-tight">{log}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: 4 Security Pillars (7 cols) */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl p-6 ${p.bg} text-white shadow-xl flex flex-col justify-between hover:-translate-y-1 transition duration-300 border border-white/10`}
            >
              <div>
                <div className="size-11 rounded-xl bg-white/20 grid place-items-center mb-4 shadow">
                  <p.I className="size-5 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight leading-snug">{p.t}</h4>
                
                <ul className="mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs font-semibold leading-relaxed">
                      <span className={`size-1.5 rounded-full bg-white mt-1.5 shrink-0`} />
                      <span className={p.desc}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
}

// ---------- SECTION 14 : IMPACT ----------
export function Impact() {
  return (
    <Section eyebrow="Real-World Impact" title={<>Transforming citizen services <span className="text-gradient-orange">at scale.</span></>}
      subtitle="A unified ecosystem designed to simplify public service delivery and elevate the citizen experience.">
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { t: "For Citizens", items: ["Faster Services", "No Long Queues", "Better Accessibility"] },
          { t: "For Government", items: ["Better Monitoring", "Digital Governance", "Reduced Paperwork"] },
          { t: "For Smart Cities", items: ["Scalable Infrastructure", "Centralized Platform", "Connected Ecosystem"] },
        ].map((b, k) => (
          <motion.div key={b.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.05 }}
            className="glass-strong rounded-2xl p-6">
            <div className="text-orange text-xs uppercase tracking-widest mb-3">{b.t}</div>
            <ul className="space-y-2">
              {b.items.map((x) => (
                <li key={x} className="flex items-center gap-2 text-white/85 text-sm">
                  <CheckCircle2 className="size-4 text-success" /> {x}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ---------- SECTION 15 : ROADMAP ----------
const roadmap = [
  { t: "Current Version", d: "Kiosk · App · AI · Accessibility", done: true },
  { t: "Phase 2", d: "Government API Integration" },
  { t: "Phase 3", d: "DigiLocker Integration" },
  { t: "Phase 4", d: "UPI Payments" },
  { t: "Phase 5", d: "Cloud Synchronization" },
  { t: "Phase 6", d: "IoT-Enabled Smart Kiosks" },
  { t: "Phase 7", d: "National Smart City Deployment" },
];
export function Roadmap() {
  return (
    <Section id="future" eyebrow="Future Roadmap" title={<>From pilot to <span className="text-gradient-blue">national deployment.</span></>}
      subtitle="A clear phased rollout toward a fully integrated Smart Governance ecosystem.">
      <div className="relative overflow-x-auto pb-4">
        <div className="flex items-stretch gap-4 min-w-max">
          {roadmap.map((r, i) => (
            <div key={r.t} className="flex items-center gap-4">
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className={`glass-strong rounded-2xl p-5 w-[220px] ${r.done ? "border-orange/40" : ""}`}>
                <div className={`text-[10px] uppercase tracking-widest ${r.done ? "text-orange" : "text-white/50"}`}>{r.done ? "Live" : `Phase ${i + 1}`}</div>
                <div className="text-white font-semibold mt-1">{r.t}</div>
                <div className="text-xs text-white/60 mt-1">{r.d}</div>
              </motion.div>
              {i < roadmap.length - 1 && (
                <div className="h-px w-10 bg-gradient-to-r from-primary/60 to-orange/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ---------- SECTION 17 : FAQ ----------
const faqs = [
  { q: "What is SUVIDHA?", a: "SUVIDHA is a Smart Civic Service Kiosk paired with a Citizen Companion mobile app — one ecosystem for accessing government services." },
  { q: "How does the Smart Kiosk work?", a: "Citizens authenticate via face, Aadhaar QR or phone OTP, choose a department, and complete the service with AI guidance." },
  { q: "How does the Mobile App synchronize?", a: "A single Citizen ID syncs documents, tokens, applications and notifications in real time across both devices." },
  { q: "Is AI mandatory?", a: "No. AI Sahayak assists those who need help; experienced users can complete tasks directly." },
  { q: "Who can use SUVIDHA?", a: "Any citizen — including elderly users, non-English speakers and users with disabilities." },
  { q: "Can elderly citizens use it?", a: "Yes. Voice guidance, large touch targets and multilingual support are built in." },
  { q: "Is the platform future-ready?", a: "Yes. DigiLocker, UPI, eKYC and IoT integrations are on the roadmap." },
];
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="FAQ" title={<>Questions, <span className="text-gradient-orange">answered.</span></>}
      subtitle="Everything jury, officials and citizens commonly ask about SUVIDHA.">
      <div className="max-w-3xl mx-auto space-y-2">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass rounded-2xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between text-left px-5 py-4">
              <span className="text-white font-medium">{f.q}</span>
              <ChevronDown className={`size-4 text-white/60 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="px-5 pb-4 text-sm text-white/70">{f.a}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---------- SECTION 18 : CTA ----------
export function CTA() {
  return (
    <section id="cta" className="relative py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden glass-strong rounded-3xl p-10 lg:p-16 text-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute top-20 right-10 size-60 rounded-full bg-orange/20 blur-3xl" />
            <div className="absolute inset-0 grid-bg opacity-20" />
          </div>
          <div className="text-xs text-orange uppercase tracking-widest">Get Started</div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white tracking-tight">
            The Future of Citizen Services <span className="text-gradient-orange">Starts Here.</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            AI-powered, accessible and connected digital governance — built for India&apos;s Smart Cities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#features" className="btn-primary-orange rounded-xl px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
              Explore Platform <ArrowRight className="size-4" />
            </a>
            <a href="#architecture" className="btn-secondary-glass rounded-xl px-6 py-3 text-sm font-semibold">
              View Architecture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SECTION 19 : CONTACT ----------
export function Contact() {
  const team = [
    { n: "Manasvi Gangrade", r: "Team Lead · AI / ML" },
    { n: "Ayushi Sharma", r: "Product Design & Accessibility" },
    { n: "Muskan Lodhi", r: "Backend & API" },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let&apos;s build <span className="text-gradient-blue">Smart Governance</span> together.</>}
      subtitle="Reach out for demos, partnerships or pilot programs.">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-strong rounded-2xl p-6">
          <div className="text-xs uppercase tracking-widest text-orange mb-2">Project</div>
          <div className="text-2xl font-bold text-white">SUVIDHA</div>
          <div className="text-sm text-white/60 mt-1">Smart Civic Service Kiosk & Citizen Companion App</div>
          <div className="mt-6 text-xs uppercase tracking-widest text-orange mb-2">Team</div>
          <div className="space-y-2">
            {team.map((t) => (
              <div key={t.n} className="glass rounded-xl p-4 flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-primary to-orange grid place-items-center text-white font-semibold text-sm">
                  {t.n.split(" ").map(x => x[0]).join("")}
                </div>
                <div>
                  <div className="text-white font-medium">{t.n}</div>
                  <div className="text-xs text-white/60">{t.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="glass-strong rounded-2xl p-6 space-y-4">
          <Field label="Name"><input className="input" placeholder="Your full name" /></Field>
          <Field label="Email"><input type="email" className="input" placeholder="you@domain.gov" /></Field>
          <Field label="Message"><textarea rows={5} className="input resize-none" placeholder="Tell us about your initiative..." /></Field>
          <button className="btn-primary-orange w-full rounded-xl px-5 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2">
            <Send className="size-4" /> Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs text-white/60 uppercase tracking-widest">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

// ---------- FOOTER ----------
export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-gradient-to-br from-primary to-gov-blue grid place-items-center">
              <span className="font-bold text-white text-sm">SU</span>
            </div>
            <div className="text-white font-semibold">SUVIDHA</div>
          </div>
          <p className="mt-3 text-sm text-white/60 max-w-xs">
            Making citizen services smarter, faster and more accessible.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50 mb-3">Quick Links</div>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-white/80">
            {["Home", "Features", "Architecture", "Technology", "Future", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50 mb-3">Connect</div>
          <div className="flex gap-2">
            {[{ I: Github, h: "#" }, { I: Linkedin, h: "#" }, { I: Mail, h: "mailto:team@suvidha.gov.in" }].map(({ I, h }, i) => (
              <a key={i} href={h} className="size-10 grid place-items-center glass rounded-xl text-white/80 hover:text-white hover:border-primary/40">
                <I className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/50 flex flex-wrap items-center justify-between gap-2">
          <span>© 2026 SUVIDHA — Smart Civic Service Kiosk & Citizen Companion App</span>
          <span>Designed for Smart Governance.</span>
        </div>
      </div>
    </footer>
  );
}

// ---------- Helpers ----------
function Section({ id, eyebrow, title, subtitle, children }:
  { id?: string; eyebrow: string; title: React.ReactNode; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 bg-[#FD8008] text-white rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest shadow-lg shadow-orange-500/10 border border-orange-500/30">
            <span className="size-2 rounded-full bg-white" /> {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">{title}</h2>
          {subtitle && <p className="mt-4 text-white/65 text-base sm:text-lg">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass-strong rounded-2xl ${className}`}>{children}</div>;
}

function FeatureRow({ I, t, d, index = 0 }: { I: any; t: string; d: string; index?: number }) {
  const color = solidColors[index % solidColors.length];
  return (
    <div className={`rounded-xl p-4 flex items-start gap-3 hover:-translate-y-0.5 transition duration-300 ${color.bg} shadow-md`}>
      <div className="size-10 rounded-lg bg-white/20 grid place-items-center shrink-0"><I className="size-5 text-white" /></div>
      <div>
        <div className="text-white text-sm font-extrabold">{t}</div>
        <div className={`text-xs ${color.desc} mt-0.5 font-medium`}>{d}</div>
      </div>
    </div>
  );
}
