import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import {
  WhatIs, Bento, KioskShowcase, MobileShowcase, SyncSection, WhySuvidha,
  HowItWorks, AISahayak, Architecture, TechStack, AdminDashboard, SmartCity,
  Security, Impact, Roadmap, FAQ, CTA, Contact, Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SUVIDHA — Smart Civic Service Kiosk & Citizen Companion App" },
      { name: "description", content: "AI-powered Smart Civic Service Kiosk and Citizen Companion App. One unified ecosystem for India's Smart Cities and digital governance." },
      { property: "og:title", content: "SUVIDHA — Smart Civic Service Kiosk" },
      { property: "og:description", content: "Modernizing citizen services through AI-powered Smart Kiosks and a connected mobile companion app." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhatIs />
        <Bento />
        <KioskShowcase />
        <MobileShowcase />
        <SyncSection />
        <WhySuvidha />
        <HowItWorks />
        <AISahayak />
        <Architecture />
        <TechStack />
        <AdminDashboard />
        <SmartCity />
        <Security />
        <Impact />
        <Roadmap />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
