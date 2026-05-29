import * as React from 'react';
import { PageId, ServiceDetail, Project } from '../types';
import { SERVICES_DATA, INDUSTRIES_DATA, PROJECTS_DATA, HERO_HIGHLIGHTS, CLIENT_LOGOS, TIMELINE_DATA } from '../data';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
  telemetry: {
    psi: number;
    temp: number;
    rpm: number;
    status: string;
    activeMixer: boolean;
  };
  setTelemetry: React.Dispatch<React.SetStateAction<any>>;
}

export default function HomeView({ setCurrentPage, telemetry, setTelemetry }: HomeViewProps) {
  return (
    <div className="space-y-0" id="home-root">
      
      {/* 1. CINEMATIC FULL-SCREEN VIDEO-STYLE HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20" id="hero-sec">
        {/* Cinematic Visual Background Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1920&q=80" 
            alt="Advanced Factory Line Asset" 
            className="w-full h-full object-cover scale-105 filter brightness-[0.25] contrast-[1.10]" 
            referrerPolicy="no-referrer"
          />
          {/* Neon Grid Overlay & Gradient */}
          <div className="absolute inset-0 blueprint-grid opacity-25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent"></div>
          {/* Radial glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Vision, Headline, & Metrics */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glassmorphism text-[#00b4d8] text-[10px] font-extrabold tracking-widest uppercase shadow-lg shadow-cyan-500/5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>INNOVATING INDUSTRY 4.0 GLOBALLY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight font-heading">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 font-black">Precision</span> <br />
              In Industrial Automation & Smart Factories.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              From high-capacity certified <span className="text-[#00b4d8] font-bold">PLC / MCC panels</span> manufactured locally in our Khedshivapur Pune factory, to complex ISPE GAMP 5 validation, Ignition SCADA, and time-series IoT data engines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => {
                  setCurrentPage('lead-hub');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black rounded-lg shadow-lg shadow-orange-500/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.03] text-xs uppercase tracking-widest"
              >
                <LucideIcon name="Sparkles" size={16} />
                AI Plant Architecture Configurator
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4.5 glassmorphism hover:bg-white/10 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.03] text-xs uppercase tracking-widest"
              >
                <span>Systems Catalog</span>
                <LucideIcon name="ArrowUpRight" size={16} className="text-[#00b4d8]" />
              </button>
            </div>

            {/* Quick trust metrics grid with subtle animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/5">
              {HERO_HIGHLIGHTS.map((hl, k) => (
                <div key={k} className="p-3 bg-white/[0.03] border border-white/10 rounded-xl hover:border-cyan-500/20 hover:bg-white/[0.05] transition-all">
                  <span className="block text-xl sm:text-2xl font-black text-white font-mono">{hl.value}</span>
                  <span className="block text-[8.5px] text-slate-400 mt-1 uppercase tracking-widest leading-relaxed">{hl.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Floating Cyber Dashboard Telemetry */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="glassmorphism rounded-2xl p-6 shadow-2xl relative overflow-hidden border border-white/10 glow-cyan">
              
              {/* Simulator Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-5">
                <div className="flex gap-1.5 items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-400 font-mono tracking-wider font-bold">OPC-UA STREAM: ONLINE</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-[9px] font-mono border border-cyan-500/20">
                  Node-Pune-Primary
                </div>
              </div>

              {/* Dynamic Telemetry Display */}
              <div className="space-y-6">
                
                {/* Live values info card */}
                <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 uppercase font-mono tracking-wider font-bold">
                    <span className="flex items-center gap-1">
                      <LucideIcon name="Activity" size={12} className="text-[#00b4d8]" />
                      Active Reactor 03 Status
                    </span>
                    <span className="text-emerald-400 font-semibold">STRENGTH OPTIMAL</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 text-center">
                    <div className="bg-[#030712] p-2 rounded-lg border border-white/5">
                      <span className="block text-[8px] text-slate-500 font-mono uppercase">Vessel Temp</span>
                      <span className="text-base font-black text-white font-mono mt-0.5 block">{telemetry.temp}°C</span>
                    </div>
                    <div className="bg-[#030712] p-2 rounded-lg border border-white/5">
                      <span className="block text-[8px] text-slate-500 font-mono uppercase">Pressure PSI</span>
                      <span className="text-base font-black text-cyan-400 font-mono mt-0.5 block">{telemetry.psi}</span>
                    </div>
                    <div className="bg-[#030712] p-2 rounded-lg border border-white/5">
                      <span className="block text-[8px] text-slate-500 font-mono uppercase">Motor RPM</span>
                      <span className="text-base font-black text-orange-400 font-mono mt-0.5 block">{telemetry.rpm}</span>
                    </div>
                  </div>

                  {/* Manual trigger button */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px]">
                    <span className="text-slate-400 font-mono">Modulation Priority Override:</span>
                    <div className="flex gap-1.5">
                      <button 
                        onClick={() => setTelemetry((prev: any) => ({ ...prev, rpm: 980, temp: 59.5, psi: 68.4 }))}
                        className={`px-2 py-1 rounded font-mono text-[9px] transition-all ${telemetry.rpm < 1100 ? 'bg-cyan-500 text-black font-extrabold' : 'bg-[#030712] text-slate-400 border border-white/5'}`}
                      >
                        ECO MODE
                      </button>
                      <button 
                        onClick={() => setTelemetry((prev: any) => ({ ...prev, rpm: 1450, temp: 68.2, psi: 84.8 }))}
                        className={`px-2 py-1 rounded font-mono text-[9px] transition-all ${telemetry.rpm >= 1100 ? 'bg-cyan-500 text-black font-extrabold' : 'bg-[#030712] text-slate-400 border border-white/5'}`}
                      >
                        MAX FLOW
                      </button>
                    </div>
                  </div>
                </div>

                {/* Automation schematic diagram layout */}
                <div className="p-4 bg-black/20 rounded-xl border border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <LucideIcon name="Settings" size={12} className="text-orange-400" />
                      SCADA Flow Path Logic
                    </span>
                    <span className="text-[9px] text-slate-500">ADDR: 4001x2</span>
                  </div>

                  {/* Flow Schematic UI */}
                  <div className="bg-slate-950 p-3 rounded-lg border border-white/5 flex items-center justify-between gap-1 text-center font-mono">
                    <div className="space-y-1">
                      <span className="block text-[7.5px] text-slate-500">IN_VALVE_V1</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/10 rounded">OPEN</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-amber-500 relative">
                      <span className="absolute left-[40%] -top-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[7.5px] text-slate-500">MIXER_RPM</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-amber-500/15 text-amber-400 font-bold border border-amber-500/10 rounded animate-pulse">ENGAGED</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-500 to-slate-800"></div>
                    <div className="space-y-1">
                      <span className="block text-[7.5px] text-slate-500">OUT_PCCP</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded">HOLD</span>
                    </div>
                  </div>
                </div>

                {/* Sub-text quote */}
                <p className="text-[10.5px] text-slate-400 leading-normal italic text-center">
                  *This live SCADA widget is mimicking a real thermodynamic vessel process cycle. Click options to override motor logic speed indicators above.
                </p>

              </div>
              
              {/* Glowing Corner Decoration */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPATIBILITY & TRUST LOGO WALL */}
      <section className="bg-slate-950 border-y border-white/5 py-10 px-4" id="logo-wall">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-left shrink-0">
            <span className="text-[10px] font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block">Systems Integrated For</span>
            <span className="text-md font-bold text-white mt-0.5 block">Approved Turnkey Vendor Compatibility:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 items-center w-full justify-items-center opacity-60 grayscale hover:opacity-100 transition-opacity duration-300">
            {CLIENT_LOGOS.map((lg, i) => (
              <div key={i} className="text-xs font-mono font-bold text-white px-3.5 py-2.5 rounded-lg border border-white/5 bg-slate-900/50 w-full text-center">
                {lg}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PREMIUM SERVICES - IMMERSIVE VISUAL PANELS (LIGHT ENTERPRISE SECTION) */}
      <section className="bg-gradient-to-b from-slate-900 via-[#f8fafc] to-[#f8fafc] border-t border-white/5 py-1" id="service-overview-transition" />
      <section className="bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8 text-center" id="service-overview">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono font-extrabold uppercase text-[#0077b6] tracking-widest block bg-sky-500/10 w-fit mx-auto px-3 py-1 rounded-full border border-sky-500/15">
              OPERATIONAL SCOPE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight font-heading">
              Enterprise Industrial Automation Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              We operate fully customized panel fabrication factories and configure robust, bulletproof PLC/SCADA algorithms to keep your plants running with 100% data transparency and safety.
            </p>
          </div>

          {/* Instead of boring flat cards, create highly visual, immersive light design tech cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv, index) => {
              // Sourcing precise visual representations for each panel based on service index
              const serviceImages = [
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80", // PLC
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // SCADA
                "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=600&q=80", // MCC Panel
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80", // VFD drives
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80", // Software
                "https://images.unsplash.com/photo-1581093196867-9f6c5e57a8a6?auto=format&fit=crop&w=600&q=80", // Validation
              ];

              return (
                <motion.div 
                  whileHover={{ y: -8, scale: 1.01 }}
                  key={srv.id}
                  className="bg-white rounded-2xl overflow-hidden group shadow-md border border-slate-200/80 cursor-pointer flex flex-col h-[400px] hover:shadow-2xl hover:border-[#0077b6]/30 transition-all text-left"
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }}
                >
                  {/* Visual Card Header */}
                  <div className="h-[180px] relative overflow-hidden shrink-0">
                    <img 
                      src={serviceImages[index] || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    {/* Floating category badge */}
                    <div className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-md text-slate-800 rounded-xl border border-slate-100 shadow-sm transition-all">
                      <LucideIcon name={srv.icon} size={18} className="text-[#0077b6]" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-800 font-heading tracking-tight group-hover:text-[#0077b6] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans line-clamp-3">
                        {srv.longDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[11px] text-[#0077b6] uppercase tracking-wider font-extrabold mt-2">
                      <span>Explore Specifications</span>
                      <LucideIcon name="ChevronRight" size={14} className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SPLIT-SCREEN IMMERSIVE INDUSTRIES BLUEPRINT */}
      <section className="py-24 bg-slate-950 border-y border-white/5 relative overflow-hidden" id="industries-showcase">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Split Content */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block">BLUEPRINTS COMPLIANCE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-heading">
              Engineered For Complex Verticals.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              With variable recipe matrices, continuous fluid dynamic forces, and rigorous audit mandates (like FDA 21 CFR Part 11 or GAMP 5), we resolve physical bottlenecks with integrated digital controls.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <LucideIcon name="Check" className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                <span>ISPE GAMP 5 Certified Code Protocols</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <LucideIcon name="Check" className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                <span>IEC-61439 Type-tested Electric Cabinets</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <LucideIcon name="Check" className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                <span>99.98% Process Security & Safety Interlocks</span>
              </div>
            </div>

            <button 
              onClick={() => {
                setCurrentPage('industries');
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className="px-6 py-3 bg-slate-900 border border-white/10 hover:border-cyan-500/20 text-white font-bold rounded-lg text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all mt-4"
            >
              <span>Explore Sectors Blueprints</span>
              <LucideIcon name="ArrowUpRight" size={14} className="text-[#00b4d8]" />
            </button>
          </div>

          {/* Right Split Content: Full-width Industrial imagery slides grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {INDUSTRIES_DATA.slice(0, 4).map((ind, i) => {
              const bgs = [
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", // Pharma vial fill
                "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=600&q=80", // Brew tanks
                "https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?auto=format&fit=crop&w=600&q=80", // Packaging/Conveyors
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80", // WTP panel
              ];

              return (
                <div 
                  key={ind.id}
                  className="relative h-[240px] rounded-xl overflow-hidden shadow-lg border border-white/5 group"
                >
                  <img 
                    src={bgs[i] || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.4]"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 flex flex-col justify-end text-left space-y-1.5 z-10">
                    <div className="flex gap-2 items-center text-cyan-400">
                      <LucideIcon name={ind.icon} size={16} />
                      <h4 className="text-md font-bold text-white group-hover:text-cyan-300 transition-colors">{ind.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-normal line-clamp-2">
                      {ind.challenge}
                    </p>
                    <span 
                      onClick={() => {
                        setCurrentPage('industries');
                        window.scrollTo({ top: 0, behavior: 'auto' });
                      }}
                      className="text-[10px] text-[#00b4d8] font-bold uppercase tracking-wider mt-1 hover:underline cursor-pointer block"
                    >
                      Blueprints details →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. PROJECTS / CASE STUDIES - MAGAZINE-STYLE BENTO GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="projects-bento">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block font-bold">COMMITMENT STATISTICS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
              Commissioned Projects & Portfolios
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Take a look at how we transform raw steel, copper, electrical components, and lines of code into high efficiency outputs.
            </p>
          </div>
          <button 
            onClick={() => {
              setCurrentPage('projects');
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
            className="text-xs text-[#00b4d8] font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-2 group shrink-0"
          >
            <span>See All Turnkey Successes</span>
            <LucideIcon name="ChevronRight" size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* BENTO GRID: 2 Big and 2 Medium layouts, styled like a tech magazine portfolio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Big Bento Item 1 */}
          <div className="lg:col-span-8 bg-[#0a0f1d] border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl group hover:border-[#00b4d8]/20 transition-all">
            <div className="h-[250px] md:h-auto md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=800&q=80" 
                alt="Brewery Suite Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/10 to-transparent"></div>
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between text-left space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-[#00b4d8] uppercase tracking-wider px-2.5 py-1 bg-cyan-950/60 rounded border border-cyan-500/20">
                    BREWERY AUTO
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Rajasthan, India</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white">{PROJECTS_DATA[0].title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-4">
                  {PROJECTS_DATA[0].description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/5">
                {PROJECTS_DATA[0].metrics?.map((m, k) => (
                  <div key={k} className="bg-slate-950 p-2 rounded border border-white/5 text-center">
                    <span className="block text-xs font-black text-cyan-400 font-mono">{m.value}</span>
                    <span className="block text-[8px] uppercase text-slate-500 tracking-wider mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Large Aspect Bento Item 2 */}
          <div className="lg:col-span-4 bg-[#0a0f1d] border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-xl group hover:border-cyan-500/20 transition-all text-left">
            <div className="h-[200px] relative">
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80" 
                alt="Pharma Upgrade Project"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/10 to-transparent"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider px-2.5 py-1 bg-orange-950/40 rounded border border-orange-500/10 inline-block">
                  GAMP 5 COMPLAINT
                </span>
                <h3 className="text-lg font-bold font-heading text-white leading-tight">{PROJECTS_DATA[1].title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                  {PROJECTS_DATA[1].description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-center">
                {PROJECTS_DATA[1].metrics?.map((m, k) => (
                  <div key={k} className="bg-slate-950 p-1.5 rounded border border-white/5">
                    <span className="block text-xs font-black text-orange-400 font-mono">{m.value}</span>
                    <span className="block text-[7.5px] uppercase text-slate-500 mt-0.5 leading-tight">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Medium Bento Item 3 */}
          <div className="lg:col-span-4 bg-[#0a0f1d] border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-xl group hover:border-[#00b4d8]/20 transition-all text-left">
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#00b4d8] uppercase tracking-wider px-2.5 py-1 bg-cyan-950/60 rounded border border-cyan-500/20 inline-block">
                  TELEMETRY WATER
                </span>
                <h3 className="text-lg font-bold font-heading text-white leading-tight">{PROJECTS_DATA[2].title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {PROJECTS_DATA[2].description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-center">
                {PROJECTS_DATA[2].metrics?.map((m, k) => (
                  <div key={k} className="bg-slate-950 p-1.5 rounded border border-white/5">
                    <span className="block text-xs font-black text-cyan-400 font-mono">{m.value}</span>
                    <span className="block text-[7.5px] uppercase text-slate-500 mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[180px] relative">
              <img 
                src="https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80" 
                alt="Water Telemetry Project"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d] via-[#0a0f1d]/10 to-transparent"></div>
            </div>
          </div>

          {/* Big Bento Item 4 */}
          <div className="lg:col-span-8 bg-[#0a0f1d] border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl group hover:border-cyan-500/20 transition-all">
            <div className="p-6 md:w-1/2 flex flex-col justify-between text-left space-y-4 md:order-last">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider px-2.5 py-1 bg-orange-950/40 rounded border border-orange-500/10">
                    AUTOMOTIVE VENT
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Pune Plant</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white">{PROJECTS_DATA[3].title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-4">
                  {PROJECTS_DATA[3].description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/5">
                {PROJECTS_DATA[3].metrics?.map((m, k) => (
                  <div key={k} className="bg-slate-950 p-2 rounded border border-white/5 text-center">
                    <span className="block text-xs font-black text-orange-400 font-mono">{m.value}</span>
                    <span className="block text-[8px] uppercase text-slate-500 tracking-wider mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[250px] md:h-auto md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1508847154043-be12a3b64ea6?auto=format&fit=crop&w=800&q=80" 
                alt="Automotive VFD drive Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/10 to-transparent"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TIMELINE ACCENTS (PREMIUM LIGHT TECHNICAL HORIZON) */}
      <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] border-t border-slate-200/50 scale-100" id="timeline-sec">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-mono font-extrabold uppercase text-[#0077b6] tracking-widest block bg-sky-500/10 w-fit mx-auto px-3 py-1 rounded-full border border-sky-500/15">
              HISTORICAL DISPATCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-heading">
              Our Growth Journey
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
              Over two decades of local and international plant integrations.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200/80 ml-6 sm:ml-12 pl-6 sm:pl-10 space-y-12 text-left">
            {TIMELINE_DATA.map((item, index) => (
              <div key={index} className="relative group">
                {/* Glowing Bullet Node - Light background optimized */}
                <div className="absolute -left-[32px] sm:-left-[48px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0077b6] group-hover:scale-110 transition-all shadow-md group-hover:shadow-cyan-100"></div>
                
                <span className="text-lg sm:text-xl font-black text-[#0077b6] font-mono block">
                  {item.year}
                </span>
                <h3 className="text-md sm:text-lg font-bold text-slate-800 group-hover:text-[#0077b6] transition-all font-heading">
                  {item.title}
                </h3>
                <p className="text-[11.5px] sm:text-xs text-slate-500 mt-1 sm:mt-2 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-2 inline-block bg-slate-100 border border-slate-200 px-2.5 py-1 rounded text-[10px] font-mono text-[#0077b6]">
                  ⚡ Milestone: <span className="text-slate-700 font-sans font-medium">{item.milestone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ACADEMY PROMOTIONAL SECTION (LIGHT HIGH-TECH LAB) */}
      <section className="py-20 bg-gradient-to-b from-[#f1f5f9] to-slate-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12 border border-slate-200 bg-white shadow-xl" id="academy-lead-home-card">
            {/* Background image under soft light overlay */}
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="absolute inset-0 blueprint-grid opacity-15 filter invert"></div>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-left">
              <div className="lg:col-span-2 space-y-4">
                <span className="inline-block bg-orange-100 text-orange-700 text-[9.5px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded border border-orange-200">
                  PRACTICAL CAPABILITY BUILDING
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-905 leading-tight">
                  Enroll Engineers in Our Heavy PLC-SCADA Academy.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl font-sans">
                  STPL hosts a certified physical laboratory in Pune. Trainees learn electric AutoCAD schemas, wiring sequences, analog loop PID variables, and configure Ignition licenses directly on test rigs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-end shrink-0">
                <button 
                  onClick={() => {
                    setCurrentPage('training');
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }}
                  className="px-6 py-3.5 bg-[#0077b6] hover:bg-[#005f96] text-white font-extrabold text-[11px] uppercase tracking-wider rounded-lg transition-all text-center shadow-md shadow-sky-500/10"
                >
                  Book Practical Demo Class
                </button>
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }}
                  className="px-6 py-3.5 bg-slate-100 text-slate-700 font-bold text-[11px] uppercase tracking-wider rounded-lg hover:bg-slate-200 transition-all text-center border border-slate-200"
                >
                  Inquire Bulk Batch Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ULTIMATE DARK CTA CONVERSION PANEL */}
      <section className="py-24 bg-gradient-to-t from-slate-950 to-[#030712] border-t border-white/5 text-center relative overflow-hidden" id="conversion-sec">
        <div className="absolute inset-0 animate-pulse-slow pointer-events-none bg-gradient-to-r from-orange-500/5 via-cyan-500/5 to-transparent blur-3xl"></div>
        <div className="max-w-3xl mx-auto space-y-6 px-4 relative z-10">
          <span className="text-xs font-mono font-extrabold text-orange-400 uppercase tracking-widest block">SECURE PROCESS AUTOMATION CO.</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-heading">
            Upgrade Your Plant Performance Metric. Fully Turnkey.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Discuss customized wiring layout structures, cabinet protection coatings, safety interlock programming, or OPC collectors with our Senior Engineering Architects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button 
              onClick={() => {
                setCurrentPage('lead-hub');
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold rounded-lg text-xs uppercase tracking-widest shadow-xl shadow-orange-500/10 transition-all hover:scale-[1.03]"
            >
              Assess Plant Parameters
            </button>
            <button 
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg text-xs uppercase tracking-widest border border-white/10 hover:bg-slate-800 transition-all hover:scale-[1.03]"
            >
              Consult Pune Office directly
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
