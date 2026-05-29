import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function AboutView() {
  return (
    <div className="py-0 space-y-0" id="about-root animate-fade-in">
      
      {/* 1. CINEMATIC FULL-WIDTH HEADER HERO */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1920&q=80" 
            alt="Advanced Switchgear Automation Assembly" 
            className="w-full h-full object-cover filter brightness-[0.22] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 blueprint-grid opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/15 inline-block">
              ABOUT SOFTVIEW TECHNOLOGIES
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight font-heading max-w-4xl mx-auto"
          >
            Transforming Manufacturing Via <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Physical-To-Digital</span> OT Integration.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-sans"
          >
            A multi-certified project engineering firm based in Pune, constructing high availability electrical cabinets and configuring failsafe controller algorithms since 2001.
          </motion.p>
        </div>
      </section>

      {/* 2. SPLIT-SCREEN STATS & PHILOSOPHY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left" id="about-split-view">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail with interactive floating elements */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-extrabold text-[#00b4d8] uppercase tracking-widest block">Core Operations</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-heading">
              Our 24-Year Commitment To Electrical & Code Quality
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Founded within Pune’s massive automotive and industrial zoning belt, Softview Technologies scaled from a pure mathematical algorithm programming unit to a heavy hardware integration powerhouse. We stand as the turnkey integration choice for MNC leaders, pharma laboratories, and continuous refineries.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Our structures aren't just panels; they are custom-designed, EPLAN simulated, and type-tested to resist rigorous voltage parameters and thermal stress. Every line of code conforms directly to ISPE GAMP 5 Second Edition requirements, ensuring seamless audit reviews.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5 space-y-2">
                <LucideIcon name="ShieldCheck" className="text-cyan-400" size={20} />
                <h4 className="text-sm font-bold text-white">IEC-61439 Certified</h4>
                <p className="text-[11px] text-slate-400">All electric panel busbars and isolation clearances are certified safe up to 50kA fault regimes.</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5 space-y-2">
                <LucideIcon name="History" className="text-orange-400" size={20} />
                <h4 className="text-sm font-bold text-white">24/7 SLA Engineering</h4>
                <p className="text-[11px] text-slate-400">Continuous post-commissioning diagnostics, replacements, and automated SCADA backups.</p>
              </div>
            </div>
          </div>

          {/* Right Video Mockup image with details */}
          <div className="lg:col-span-6 relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
              alt="Engineers working together in Pune factory" 
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 filter brightness-[0.4]"
              referrerPolicy="no-referrer"
            />
            {/* Tech details card overlay */}
            <div className="absolute inset-x-4 bottom-4 p-5 glassmorphism rounded-xl space-y-2 text-left">
              <span className="text-[9px] font-mono uppercase bg-[#00b4d8]/15 text-[#00b4d8] px-2 py-0.5 rounded border border-cyan-500/10">STPL PUNE DESK</span>
              <h4 className="text-md font-bold text-white leading-tight font-heading">Rigorous Physical Assembly Simulation</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                Each PLC register block and MCC feeder undergoes exhaustive dynamic simulated load tests prior to leaving the Pune dispatch dock.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE MISSION & VISION BENTO MAP */}
      <section className="py-24 bg-slate-950 border-y border-white/5 text-center" id="about-bento bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block font-bold">CHARTER VALUES</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight font-heading">
              Our Foundational Charters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-[#0a0f1d] border border-white/5 rounded-2xl space-y-4 hover:border-cyan-500/20 transition-all">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl w-fit">
                <LucideIcon name="TrendingUp" size={24} />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Operational Mission</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Accelerating clean energy, reducing raw crop process defects by up to 25%, and maintaining 100% data traceability to keep production yards moving at optimal mechanical loads.
              </p>
            </div>

            <div className="p-8 bg-[#0a0f1d] border border-white/5 rounded-2xl space-y-4 hover:border-cyan-500/20 transition-all">
              <div className="p-3 bg-[#00b4d8]/10 text-[#00b4d8] rounded-xl w-fit">
                <LucideIcon name="Sparkles" size={24} />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Smart Factories Vision</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                To build high contrast, comprehensive "Digital Twins" of every process line we commission, allowing remote managers anywhere in India to run quick diagnostics dynamically.
              </p>
            </div>

            <div className="p-8 bg-[#0a0f1d] border border-white/5 rounded-2xl space-y-4 hover:border-cyan-500/20 transition-all">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl w-fit">
                <LucideIcon name="Award" size={24} />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Quality Execution</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                A 100% compliance test guarantee on loop logs, extreme temperature resistance tests, high voltage protection clearances, and complete structural wire legends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTEGRATED PUNE INFRASTRUCTURE IN PICTURES (HIGHLY VISUAL INFOGRIG) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left" id="about-infra animate-fade-in">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block font-bold">PUNE HEADQUARTERS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
            Our Integrated Manufacturing Strengths
          </h2>
          <p className="text-slate-400 text-sm">
            Our infrastructure is fully localized within Pune’s major logistics and design corridors for maximum dispatch speeds.
          </p>
        </div>

        {/* 2 Big Picture block columns showing design office and electric wiring panel factory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Design Office - Narhe */}
          <div className="bg-[#0a0f1d] border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:border-cyan-500/20 transition-all">
            <div className="h-[300px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Navale IT Zone Office, Narhe" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 filter brightness-[0.4]"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 right-4 bg-cyan-500/10 border border-cyan-400/20 text-[#00b4d8] font-mono text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded">
                DESIGN STRENGHTS
              </span>
            </div>
            
            <div className="p-8 space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-heading text-white">Engineering Design, Academy & Sales HQ</h3>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Office No. 402, Navale IT Zone, Narhe, Pune</span>
              </div>
              <p className="text-xs text-slate-350 leading-relaxed font-sans">
                Our central creative workspace is where EPLAN schematics and AutoCAD panel specifications are created. Complete with computer-aided design screens, simulation models, and the Softview Academy classroom setups.
              </p>
              <div className="p-3.5 bg-slate-950 border border-white/5 rounded-xl flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>📍 Narhe, Pune (Near Highway)</span>
                <span className="text-[#00b4d8]">Mon - Sat: 9am - 6:30pm</span>
              </div>
            </div>
          </div>

          {/* Fabrication & Assembly Factory - Khedshivapur */}
          <div className="bg-[#0a0f1d] border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:border-cyan-500/20 transition-all">
            <div className="h-[300px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80" 
                alt="STPL Khedshivapur Switchgear Factory" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 filter brightness-[0.4]"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 right-4 bg-orange-500/10 border border-orange-400/20 text-orange-400 font-mono text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded">
                HEAVY FABRICATION
              </span>
            </div>

            <div className="p-8 space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-heading text-white">Switchgear Certified Assembly & Testing Unit</h3>
                <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest">Kondhanpur Road, Khedshivapur, Pune</span>
              </div>
              <p className="text-xs text-slate-350 leading-relaxed font-sans">
                STPL's main manufacturing stronghold spans structural panel fabrication, powder spray paint ovens, copper busbar cutters, and electrical loop simulation bays designed to IEC regulations.
              </p>
              <div className="p-3.5 bg-slate-950 border border-white/5 rounded-xl flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>📍 Khedshivapur Factory Unit</span>
                <span className="text-orange-400">Type-tested IEC-61439</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
