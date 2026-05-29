import { useState } from 'react';
import { PageId, IndustrySector } from '../types';
import { INDUSTRIES_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface IndustriesViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function IndustriesView({ setCurrentPage }: IndustriesViewProps) {
  const [activeTab, setActiveTab] = useState<string>(INDUSTRIES_DATA[0].id);

  const activeSec = INDUSTRIES_DATA.find((i) => i.id === activeTab) || INDUSTRIES_DATA[0];

  const industryImages: Record<string, string> = {
    'pharma-healthcare': 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200&q=80',
    'breweries-distilleries': 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80',
    'food-beverage': 'https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?auto=format&fit=crop&w=1200&q=80',
    'water-gas-utilities': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    'refinery-process': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16" id="industries-root-panel">
      
      {/* 1. SECTOR HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block font-bold">PRACTICAL VERTICAL OUTCOMES</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
          Industry-Specific Process Solutions
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm font-sans">
          STPL is an approved, audited technology integration partner across key highly regulated manufacturing verticals. We optimize recipe batch cycles and ensure total audit readiness.
        </p>
      </div>

      {/* 2. TAB TOGGLES LIST */}
      <div className="flex flex-wrap gap-2.5 justify-center" id="industry-vertical-tabs">
        {INDUSTRIES_DATA.map((ind) => {
          const active = ind.id === activeTab;
          return (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              id={`ind-btn-${ind.id}`}
              className={`px-5 py-3 rounded-lg border text-xs sm:text-sm font-bold tracking-tight transition-all flex items-center gap-2.5 ${
                active
                  ? 'bg-slate-900 border-[#00b4d8] text-[#00b4d8] glow-cyan'
                  : 'bg-slate-950/80 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900/40'
              }`}
            >
              <LucideIcon name={ind.icon} size={15} />
              <span>{ind.title}</span>
            </button>
          );
        })}
      </div>

      {/* 3. MULTI-LAYERED PICTURE BLOCK WITH ACCENTS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSec.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="relative min-h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-end p-6 sm:p-10 ml-0 mr-0"
          id={`industry-spotlight-${activeSec.id}`}
        >
          {/* Immersive Dark Background Photo */}
          <div className="absolute inset-0 z-0">
            <img 
              src={industryImages[activeSec.id] || "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200&q=80"}
              alt={activeSec.title}
              className="w-full h-full object-cover filter brightness-[0.22] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 blueprint-grid opacity-15"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
            {/* Left Main Content info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-[#00b4d8]/10 text-[#00b4d8] text-[9px] font-mono font-extrabold tracking-widest uppercase px-3 py-1 rounded border border-cyan-500/15">
                COMPLIANCE SEGMENT • {activeSec.id.toUpperCase()}
              </span>
              
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-none">
                {activeSec.title}
              </h3>

              {/* Challenge vs Solution vs Outcome comparison in 3 beautiful blocks */}
              <div className="grid grid-cols-1 gap-4">
                <div className="p-3.5 bg-red-950/20 border-l-4 border-red-500 rounded-r-lg bg-black/40">
                  <span className="block text-[8.5px] font-mono uppercase text-red-400 font-extrabold tracking-wider leading-none">Typical Industry Bottleneck:</span>
                  <p className="text-xs text-slate-300 leading-normal font-sans mt-1.5">{activeSec.challenge}</p>
                </div>

                <div className="p-3.5 bg-cyan-950/20 border-l-4 border-cyan-500 rounded-r-lg bg-black/40">
                  <span className="block text-[8.5px] font-mono uppercase text-cyan-400 font-extrabold tracking-wider leading-none">STPL Turnkey Engineering Solution:</span>
                  <p className="text-xs text-slate-300 leading-normal font-sans mt-1.5">{activeSec.solution}</p>
                </div>

                <div className="p-3.5 bg-emerald-950/20 border-l-4 border-emerald-500 rounded-r-lg bg-black/40">
                  <span className="block text-[8.5px] font-mono uppercase text-emerald-400 font-extrabold tracking-wider leading-none">Verified Plant Performance Outcome:</span>
                  <p className="text-xs text-slate-300 leading-normal font-sans mt-1.5">{activeSec.outcome}</p>
                </div>
              </div>
            </div>

            {/* Right panel features accent info */}
            <div className="lg:col-span-5 w-full">
              <div className="glassmorphism p-6 sm:p-7 rounded-2xl space-y-5 border border-white/10 glow-orange">
                <span className="text-[10px] font-mono uppercase text-orange-400 font-extrabold tracking-widest block">OT ALGORITHM SPECS:</span>
                
                <div className="space-y-3.5 text-xs text-slate-300">
                  {activeSec.features.map((item, index) => (
                    <div key={index} className="flex gap-2.5 items-start">
                      <LucideIcon name="CheckCircle" className="text-emerald-400 shrink-0 mt-0.5" size={13} />
                      <span className="font-sans text-[11px] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }}
                  className="w-full text-center py-3 bg-slate-900 hover:bg-[#00b4d8] border border-white/10 hover:text-black font-extrabold text-[10px] uppercase tracking-widest rounded-lg transition-all"
                >
                  Request compliance validation study
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
