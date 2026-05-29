import { useState } from 'react';
import { PageId, Project } from '../types';
import { PROJECTS_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface ProjectsViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function ProjectsView({ setCurrentPage }: ProjectsViewProps) {
  const [activeProject, setActiveProject] = useState<string>(PROJECTS_DATA[0].id);

  const activeProj = PROJECTS_DATA.find((p) => p.id === activeProject) || PROJECTS_DATA[0];

  const projectImages: Record<string, string> = {
    'p1': 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=1200&q=80',
    'p2': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
    'p3': 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=1200&q=80',
    'p4': 'https://images.unsplash.com/photo-1508847154043-be12a3b64ea6?auto=format&fit=crop&w=1200&q=80',
  };

  // Mocks for structural layout before/after comparison values for active case study
  const beforeAfterMaps: Record<string, { before: string; after: string; diag: string }> = {
    'p1': {
      before: 'Manual raw ingredient valves operated manually. Frequent overshoots in gravity and temperature registers.',
      after: 'Synchronized recipe orchestration on Allen Bradley PLC under local RS-485 Modbus telemetry link.',
      diag: 'WATER_VALVE -> FLUID_BATCH -> BREWER_PANEL -> METHANE_STAGE_COCK'
    },
    'p2': {
      before: 'Silo data recorded on printed sheets. Lacking electronic signature tracing, causing audit failures under USFDA rules.',
      after: 'FDA 21 CFR Part 11 database mapping with continuous audit path logs and secure SQL nodes.',
      diag: 'SIEMENS_TIA_N3 -> DB_MIGRATION -> SQL_COLLECTOR -> SERVER_NODE_03'
    },
    'p3': {
      before: 'Multiple isolated remote pumps checked daily by physical security personnel travelling up to 40km.',
      after: 'Centralized radio edge nodes transmit water PSI flow telemetry back to centralized Pune headquarters.',
      diag: 'RADIO_MODEM_TX -> TOWER_RX -> IGNITION_DATABASE -> PUMP_OVERRIDE_FLAG'
    },
    'p4': {
      before: 'Induction motors run at absolute line speed regardless of air temperature, wasting up to 48% energy.',
      after: 'Closed-loop VFD speed frequency modulation controlled by feedback signal from physical air flow meter.',
      diag: 'VFD_FREQUENCY -> MODULATOR_15_HZ -> FEEDBACK_PSI -> MOTOR_OVERHEAT_SENS'
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fade-in" id="projects-catalog">
      
      {/* 1. SECTOR HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block font-bold">CASE RECORD STUDIES</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
          Commissioned Portfolio Studies
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          A visual archive of high durability hardware setups, custom-designed electric panels, and automated diagnostic systems running in live industrial plants.
        </p>
      </div>

      {/* 2. SIDE-BY-SIDE INTERACTION: TAB SELECT AND CORRESPONDING COMPREHENSIVE VIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left selector sidebar (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#00b4d8] block text-left font-bold font-bold">SELECT LIVE CASE ARCHIVE:</span>
          
          <div className="grid grid-cols-1 gap-3.5" id="projects-selector-menu">
            {PROJECTS_DATA.map((p) => {
              const isActive = p.id === activeProject;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProject(p.id)}
                  id={`proj-btn-${p.id}`}
                  className={`p-4.5 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-slate-900 border-2 border-[#00b4d8] text-white shadow-lg glow-cyan'
                      : 'bg-slate-950/70 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <div className={`p-2 rounded-lg border ${isActive ? 'bg-cyan-950/40 border-cyan-500/30 text-[#00b4d8]' : 'bg-slate-900 border-white/5 text-slate-500'}`}>
                      <LucideIcon name={p.icon} size={18} />
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-slate-550 leading-none">{p.category}</span>
                      <span className="block text-sm font-bold mt-1 text-white leading-tight">{p.title}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-5 bg-slate-900/40 rounded-xl border border-white/5 text-left grid grid-cols-1 gap-3">
            <span className="text-[10px] uppercase font-mono text-orange-400 font-extrabold tracking-wide flex items-center gap-1">
              <LucideIcon name="History" size={13} /> SLA PLANT REPAIR COVER
            </span>
            <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
              All commissioned solutions include 12 months of high priority site engineer support, code adjustment allowances, and backup restoration schemas.
            </p>
          </div>
        </div>

        {/* Right Active Case Study panel (8 Cols) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProj.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glassmorphism rounded-2xl p-6 sm:p-8 space-y-8 text-left border border-white/10 shadow-2xl relative overflow-hidden"
              id="projects-display-card"
            >
              
              {/* Image & Basic context block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* Immersive Image Block */}
                <div className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-xl border border-white/10 group">
                  <img 
                    src={projectImages[activeProj.id] || "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=800&q=80"}
                    alt={activeProj.title}
                    className="w-full h-full object-cover select-none filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-3 bottom-3 p-3.5 glassmorphism rounded-lg text-left">
                    <span className="text-[10px] font-mono text-[#00b4d8] uppercase tracking-widest block font-bold block">{activeProj.category}</span>
                    <span className="text-xs text-white mt-1 block font-semibold">📍 Client: {activeProj.client} • Location: {activeProj.location}</span>
                  </div>
                </div>

                {/* Case Info details */}
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-mono text-orange-400 uppercase tracking-widest block font-bold leading-none">CASE STUDY SPOTLIGHT</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1 leading-tight">{activeProj.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mt-4">
                      {activeProj.description}
                    </p>
                  </div>

                  {/* Highlights list with Lucide check */}
                  <div className="space-y-2.5">
                    <span className="text-[9.5px] font-mono uppercase text-slate-400 tracking-wider font-extrabold block">CASE RECORD OBJECTIVES:</span>
                    <div className="space-y-1.5 text-xs text-slate-350 font-sans">
                      {activeProj.highlights.map((h, index) => (
                        <div key={index} className="flex gap-2 items-start">
                          <LucideIcon name="CheckCircle" className="text-emerald-400 shrink-0 mt-0.5" size={13} />
                          <span className="text-[11px] font-sans leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Before and after layout panel box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
                
                {/* Before manual layout */}
                <div className="p-4 bg-red-950/20 border border-red-500/15 rounded-xl text-left space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase bg-red-550/15 text-red-400 font-extrabold px-2 py-0.5 rounded border border-red-500/10">
                    🔴 PREVIOUS BOTTLENECK:
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                    {beforeAfterMaps[activeProj.id]?.before}
                  </p>
                </div>

                {/* After automated layout */}
                <div className="p-4 bg-emerald-950/20 border border-emerald-500/15 rounded-xl text-left space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase bg-emerald-550/15 text-emerald-400 font-extrabold px-2 py-0.5 rounded border border-emerald-500/10">
                    🟢 STPL MODERN OT SOLUTION:
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                    {beforeAfterMaps[activeProj.id]?.after}
                  </p>
                </div>

              </div>

              {/* Live metrics indicator output panel */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-4">
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
                  <span className="text-[9.5px] font-mono uppercase text-slate-400 tracking-widest font-extrabold block text-center mb-3">
                    VERIFIED COMISSIONED Plant METRIC:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    {activeProj.metrics?.map((m, index) => (
                      <div key={index} className="bg-slate-950 p-3 rounded border border-white/5 hover:border-cyan-500/20 transition-all">
                        <span className="block text-lg font-black text-cyan-400 font-mono">{m.value}</span>
                        <span className="block text-[8px] uppercase text-slate-500 tracking-wider mt-1">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SCADA Code schematic visualization */}
              <div className="p-4.5 bg-[#030712] rounded-xl border border-white/5 space-y-2 text-left font-mono text-[10px]">
                <div className="flex justify-between items-center text-slate-500 text-[8.5px]">
                  <span>PLC LOGIC GRAPH MAPPED SECURE:</span>
                  <span className="text-[#00b4d8]">TYPE: REGISTER_SERIES_TX</span>
                </div>
                <div className="p-3 bg-slate-950 text-emerald-400 rounded-lg flex items-center gap-1 shrink-0 select-all overflow-x-auto whitespace-nowrap leading-none border border-emerald-500/10">
                  <LucideIcon name="Settings" size={12} className="text-amber-500 animate-spin-slow shrink-0" />
                  <span className="font-mono text-[9px] lowercase pl-1 text-[11px]">{beforeAfterMaps[activeProj.id]?.diag}</span>
                </div>
              </div>

              {/* Footer action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-[9.5px] text-slate-400">
                  *This database metric was logged during 90 days continuous trial verification runs following initial commissioning tests.
                </span>
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }}
                  className="px-6 py-3 bg-[#00b4d8] hover:bg-cyan-400 text-black font-extrabold text-[10.5px] uppercase tracking-widest rounded-lg transition-all font-mono"
                >
                  Consult this project case
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
