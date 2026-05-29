import { useState } from 'react';
import { PageId, ServiceDetail } from '../types';
import { SERVICES_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface ServicesViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function ServicesView({ setCurrentPage }: ServicesViewProps) {
  const [activeId, setActiveId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[0];

  const serviceImages: Record<string, string> = {
    'plc-programming': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    'scada-systems': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    'mcc-panels': 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=1200&q=80',
    'vfd-coordination': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    'iiot-connectivity': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    'gamp5-compliance': 'https://images.unsplash.com/photo-1581093196867-9f6c5e57a8a6?auto=format&fit=crop&w=1200&q=80',
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800 py-24 px-4 sm:px-6 lg:px-8 space-y-16" id="services-root">
      
      {/* 1. SECTOR HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-10">
        <span className="text-xs font-mono font-extrabold uppercase text-[#0077b6] tracking-widest block bg-sky-500/10 w-fit mx-auto px-3 py-1 rounded-full border border-sky-500/15">
          TURNKEY INTEGRATION HORIZONS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight font-heading">
          Engineering & Software Services
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm">
          A unique fusion of electrical engineering craft, high durability steel panel housing fabrication, and advanced industrial coding compliant to international safety and database standards.
        </p>
      </div>

      {/* 2. DIRECT SELECTION GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="service-button-group">
        {SERVICES_DATA.map((srv) => {
          const isActive = srv.id === activeId;
          return (
            <button
              key={srv.id}
              onClick={() => setActiveId(srv.id)}
              id={`service-tab-${srv.id}`}
              className={`p-4 rounded-xl border transition-all text-center ${
                isActive
                  ? 'bg-white border-[#0077b6] text-[#0077b6] shadow-md shadow-sky-500/5 ring-2 ring-sky-500/10'
                  : 'bg-white/50 border-slate-200 text-slate-500 hover:text-slate-850 hover:bg-white hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`p-2.5 rounded-lg ${isActive ? 'bg-sky-50 text-[#0077b6]' : 'bg-slate-100 text-slate-400'}`}>
                  <LucideIcon name={srv.icon} size={20} />
                </div>
                <span className="text-[11px] font-bold tracking-tight block truncate w-full">{srv.title}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. HERO SPOTLIGHT PANEL WITH GLASSMORPHISM OVERLAYS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="relative min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 flex flex-col justify-end p-6 sm:p-10 ml-0 mr-0"
          id={`epic-service-spotlight-${activeService.id}`}
        >
          {/* Main big high-contrast image asset */}
          <div className="absolute inset-0 z-0">
            <img 
              src={serviceImages[activeService.id] || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"}
              alt={activeService.title}
              className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            {/* Grid layout decoration */}
            <div className="absolute inset-0 blueprint-grid opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
            {/* Left stats info blocks */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-[#00b4d8]/10 text-[#00b4d8] text-[9px] font-mono font-extrabold tracking-widest uppercase px-3 py-1 rounded border border-cyan-500/15">
                SERVICE BLUEPRINT • STPL-0{SERVICES_DATA.indexOf(activeService) + 1}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-none">
                {activeService.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans max-w-2xl">
                {activeService.longDesc}
              </p>

              {/* Specs array tag highlights */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeService.specs.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-black/50 text-slate-300 rounded-full text-[9.5px] border border-white/10 font-mono">
                    🎛️ {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right floating card showing features details */}
            <div className="lg:col-span-5 w-full">
              <div className="glassmorphism p-6 sm:p-7 rounded-2xl space-y-5 border border-white/10 glow-cyan">
                <span className="text-[10px] font-mono uppercase text-orange-400 font-extrabold tracking-widest block">FEATURE PROTOCOLS:</span>
                
                <div className="space-y-3.5 text-xs text-slate-300">
                  {activeService.features.map((feat, index) => (
                    <div key={index} className="flex gap-2.5 items-start">
                      <LucideIcon name="Check" className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                      <span className="font-sans text-[11px] leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Sub Benefit banner */}
                <div className="p-3 bg-cyan-950/40 border border-cyan-500/20 text-[#00b4d8] text-[10.5px] font-mono font-extrabold rounded-lg uppercase tracking-wider flex items-center gap-2">
                  <LucideIcon name="ShieldCheck" size={14} />
                  <span>Value: {activeService.benefit}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 4. SUMMARY ROW FOR CUSTOM INQUIRIES */}
      <section className="bg-white rounded-2xl p-8 border border-slate-200 text-center relative overflow-hidden shadow-md hover:shadow-xl transition-all">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-left">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[9.5px] font-mono text-orange-600 bg-orange-100 px-2 py-0.5 rounded border border-orange-200 font-extrabold uppercase tracking-wide inline-block">
              CAD SIMULATION & DESIGN CHECKS DEPT
            </span>
            <h3 className="text-xl font-bold font-heading text-slate-800">Need custom software coordination?</h3>
            <p className="text-xs text-slate-500 leading-normal">
              Our engineering architects are trained directly on Siemens TIA, Rockwell Studio 5000, and Inductive Automation Ignition. We can design customized migration scripts for outdated Legacy PLC units securely.
            </p>
          </div>
          <button 
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
            className="px-6 py-3 bg-[#0077b6] hover:bg-[#005f96] text-white font-extrabold uppercase font-mono tracking-widest text-xs rounded-lg shrink-0 transition-all hover:scale-[1.03] shadow-md shadow-sky-500/10"
          >
            Request Custom Code Demo
          </button>
        </div>
      </section>

    </div>
  );
}
