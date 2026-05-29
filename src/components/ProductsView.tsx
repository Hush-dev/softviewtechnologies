import { useState } from 'react';
import { PageId, ProductDetail } from '../types';
import { PRODUCTS_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface ProductsViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function ProductsView({ setCurrentPage }: ProductsViewProps) {
  const [selectedId, setSelectedId] = useState<string>(PRODUCTS_DATA[0].id);

  // Retrieve current active product
  const activeProduct = PRODUCTS_DATA.find((p) => p.id === selectedId) || PRODUCTS_DATA[0];

  // Visual catalog images representing closeups of panels & interfaces
  const productImages: Record<string, string> = {
    'plc-panels': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    'imcc-panels': 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80',
    'pcc-panels': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
    'hmi-scada': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16" id="products-catalog">
      
      {/* 1. HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block font-bold">STPL PRODUCTION STRONGHOLDS</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
          Certified Switchgear & Systems Catalog
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          All panels are fully designed in-house on elite CAD tools, assembled using multi-stage pneumatic tools, and type-tested to international insulation and stress certifications in Pune.
        </p>
      </div>

      {/* 2. SPECIFICATION SWITCH TABS (SIDE-BY-SIDE INTERACTION) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Navigator (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#00b4d8] block text-left font-bold">SELECT SWITCHGEAR SYSTEM:</span>
          
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3.5" id="product-tabs">
            {PRODUCTS_DATA.map((product) => {
              const active = product.id === selectedId;
              return (
                <button
                  key={product.id}
                  onClick={() => setSelectedId(product.id)}
                  id={`tab-${product.id}`}
                  className={`p-4.5 rounded-xl text-left transition-all duration-300 ${
                    active
                      ? 'bg-slate-900 border-2 border-[#00b4d8] text-white shadow-lg glow-cyan'
                      : 'bg-slate-950/70 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <div className={`p-2.5 rounded-lg border ${active ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400' : 'bg-slate-900 border-white/5 text-slate-500'}`}>
                      <LucideIcon name={product.icon} size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-[#00b4d8] leading-none uppercase">STPL-CORE</span>
                      <span className="block text-sm font-bold text-white mt-1 leading-tight">{product.title}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Guarantee stamp card */}
          <div className="p-5 bg-slate-900/40 rounded-xl border border-white/5 grid grid-cols-1 gap-3 text-left my-4">
            <span className="text-[9.5px] font-mono text-orange-400 uppercase tracking-wider font-extrabold flex items-center gap-1">
              <LucideIcon name="ShieldAlert" size={13} /> STPL TEST GUARANTEES
            </span>
            <ul className="text-[10px] text-slate-450 space-y-1.5 list-disc pl-4 font-mono">
              <li>HV Dielectric dry verification up to 2.5kV AC for 60s</li>
              <li>IP-54/IP-55 certified moisture seals</li>
              <li>Fully mapped wire runs with laser-printed sleeves</li>
            </ul>
          </div>
        </div>

        {/* Right Product Spotlight View (8 Cols) with Animated presence */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glassmorphism rounded-2xl p-6 sm:p-8 space-y-8 text-left border border-white/10 shadow-2xl relative overflow-hidden"
              id="product-spotlight"
            >
              
              {/* Split layout: Image and Basic Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* Visual Image container */}
                <div className="space-y-4">
                  <div className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-xl border border-white/10 group">
                    <img 
                      src={productImages[activeProduct.id] || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"}
                      alt={activeProduct.title}
                      className="w-full h-full object-cover select-none filter contrast-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-3 bottom-3 p-3 glassmorphism rounded-lg text-left">
                      <span className="text-[9.5px] font-mono text-[#00b4d8] uppercase tracking-widest block font-bold">TYPE TEST LABS CERTIFIED</span>
                      <span className="text-[11px] text-white font-medium mt-0.5 block leading-normal">Assembled at Kondhanpur Rd. Pune plant</span>
                    </div>
                  </div>

                  {/* Schematics blueprint preview accent */}
                  <div className="p-4 bg-slate-950 border border-white/5 rounded-xl flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <LucideIcon name="Layers" size={16} className="text-cyan-400 animate-pulse" />
                      <div>
                        <span className="block text-[10px] uppercase text-slate-400 font-mono tracking-wider">CAD Legend Path</span>
                        <span className="block text-[8px] text-slate-600 font-mono">/schematics/pdf/dwg_{activeProduct.id}_dwg</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setCurrentPage('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-3 py-1.5 bg-cyan-950/60 border border-cyan-500/20 text-[#00b4d8] text-[9.5px] font-mono tracking-widest rounded transition-all hover:bg-cyan-500 hover:text-black font-extrabold uppercase"
                    >
                      Draughtsman CAD PDF
                    </button>
                  </div>
                </div>

                {/* Info spotlight (Specs, core values) */}
                <div className="space-y-6">
                  <div>
                    <span className="text-[10.5px] font-mono text-orange-400 uppercase tracking-widest block font-extrabold">PRODUCT PROFILE</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight mt-1">{activeProduct.title}</h3>
                    <em className="text-xs sm:text-sm text-cyan-400 font-sans block mt-1.5 font-medium">"{activeProduct.tagline}"</em>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mt-3.5">
                      {activeProduct.description}
                    </p>
                  </div>

                  {/* Floating Spec table inside card */}
                  <div className="space-y-2.5">
                    <span className="text-[9px] font-mono uppercase text-slate-400 tracking-widest font-extrabold block">ELECTRICAL RATINGS SUMMARY:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                      {activeProduct.specs.map((item, index) => (
                        <div key={index} className="p-2.5 bg-black/40 border border-white/5 rounded flex justify-between items-center">
                          <span className="text-slate-500 text-[10px]">{item.label}:</span>
                          <span className="text-white font-semibold text-[10px]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Grid 2 Columns: Features and Plant Applications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                
                {/* Performance Core Highlights */}
                <div className="space-y-3.5">
                  <span className="text-[9.5px] font-mono uppercase text-[#00b4d8] tracking-widest block font-extrabold">⚡ PERFORMANCE ATTRIBUTES:</span>
                  <div className="space-y-2 text-xs">
                    {activeProduct.features.map((item, index) => (
                      <div key={index} className="flex gap-2.5 items-start text-slate-350">
                        <LucideIcon name="CheckCircle" className="text-emerald-400 shrink-0 mt-0.5" size={13} />
                        <span className="font-sans text-[11px] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safe Applications Areas */}
                <div className="space-y-3.5">
                  <span className="text-[9.5px] font-mono uppercase text-orange-400 tracking-widest block font-extrabold">🏭 APPROVED PROCESS YARDS:</span>
                  <div className="space-y-2 text-xs text-slate-350 font-sans">
                    {activeProduct.applications.map((item, index) => (
                      <div key={index} className="flex gap-2.5 items-start">
                        <LucideIcon name="ChevronRight" size={14} className="text-[#00b4d8] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-relaxed font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Inquiry & Lead Submission Trigger Footer */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-[10px] text-slate-400 max-w-sm text-center sm:text-left leading-normal">
                  *All switchboards comply with IEC-61439-1 & 2 type-test requirements. Certifications are archived in our catalog for official customer audit reviews.
                </p>
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }}
                  className="px-6 py-3 bg-[#00b4d8] hover:bg-cyan-400 text-black font-extrabold font-mono text-[10.5px] uppercase tracking-widest rounded-lg transition-all"
                >
                  Send Specs Request
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
