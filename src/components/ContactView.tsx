import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setEmail('');
      setSubject('');
      setMsg('');
    }, 2500);
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fade-in" id="contact-root">
      
      {/* 1. SECTOR HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block font-bold">STPL FIELD OFFICES</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
          Get in Touch with Our Pune Engineers
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Discuss specifications, switchgear cabinet structures, GAMP 5 system validation procedures, or book a reservation in our certified Training Academy.
        </p>
      </div>

      {/* 2. SPLIT LAYOUT: HQ/FACTORY CARDS & ENQUIRY FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Columns: Office Cards with exact Coordinate Nodes (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#00b4d8] block text-left font-bold block">REGISTERED LOCATIONS:</span>
          
          {/* Node 1: Narhe HQ */}
          <div className="p-6 bg-[#0a0f1d] border border-white/5 rounded-2xl text-left relative overflow-hidden group hover:border-cyan-500/20 transition-all">
            <div className="flex gap-4 items-start relative z-10">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl shrink-0">
                <LucideIcon name="MapPin" size={22} />
              </div>
              <div className="space-y-3.5">
                <div className="space-y-1">
                  <span className="text-[#00b4d8] font-mono text-[9px] uppercase tracking-wider block font-bold">HEAD OFFICE & DESIGN studio</span>
                  <h3 className="text-lg font-bold text-white leading-tight font-heading">Softview Technologies Pvt. Ltd.</h3>
                  <p className="text-xs text-slate-350 font-sans mt-1">Office No. 402, Navale IT Zone, Near highway Navale Bridge, Narhe, Pune, India (411041)</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono border-t border-white/5 pt-3 text-slate-450 text-[10.5px]">
                  <div>
                    <span className="block text-[8px] uppercase text-slate-550">Tele Line:</span>
                    <a href="tel:+912066894000" className="text-white hover:text-[#00b4d8] transition-colors font-semibold">+91-20-66894000</a>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase text-slate-550">GPS Coordinates:</span>
                    <span className="text-cyan-400 font-semibold">18.4552° N, 73.8188° E</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Glowing accents */}
            <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#00b4d8]/5 rounded-full blur-2xl group-hover:bg-[#00b4d8]/10 transition-all pointer-events-none"></div>
          </div>

          {/* Node 2: Khedshivapur Switchgear factory */}
          <div className="p-6 bg-[#0a0f1d] border border-white/5 rounded-2xl text-left relative overflow-hidden group hover:border-cyan-500/20 transition-all">
            <div className="flex gap-4 items-start relative z-10">
              <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl shrink-0">
                <LucideIcon name="Factory" size={22} />
              </div>
              <div className="space-y-3.5">
                <div className="space-y-1">
                  <span className="text-orange-400 font-mono text-[9px] uppercase tracking-wider block font-bold">MANUFACTURING & TESTING UNIT</span>
                  <h3 className="text-lg font-bold text-white leading-tight font-heading">STPL switchyard Assembly Assembly</h3>
                  <p className="text-xs text-slate-350 font-sans mt-1">S. No 35/3, Kondhanpur Road, Khedshivapur, Pune, Maharashtra, India (412205)</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono border-t border-white/5 pt-3 text-slate-450 text-[10.5px]">
                  <div>
                    <span className="block text-[8px] uppercase text-slate-550">Email Node Inbox:</span>
                    <a href="mailto:info@softviewtech.co.in" className="text-white hover:text-orange-400 transition-colors font-semibold">info@softviewtech.co.in</a>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase text-slate-550">GPS Coordinates:</span>
                    <span className="text-orange-400 font-semibold">18.3562° N, 73.8519° E</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Glowing accents */}
            <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all pointer-events-none"></div>
          </div>

          {/* Quick legal compliance cards */}
          <div className="p-4 bg-slate-900/30 rounded-xl border border-white/5 text-slate-450 text-[10px] space-y-1 text-left font-mono">
            <span className="text-[#00b4d8] font-bold uppercase tracking-wider block">CORPORATE IDENTITIES DEPT:</span>
            <span>CIN: U72200PN2001PTC016250 [Registered Pun. Maharashtra Province]</span>
          </div>
        </div>

        {/* Right Columns: Active message submission form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="glassmorphism rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10 shadow-2xl relative overflow-hidden text-left" id="contact-form-card">
            
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest font-extrabold block">DIRECT SECURE MESSAGE DEPT</span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading">Transmit Technical Specification Form</h3>
              <p className="text-xs text-slate-400">Our engineering estimator evaluates parameters and contacts you directly.</p>
            </div>

            {sent ? (
              <div className="p-8 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-center space-y-2">
                <LucideIcon name="CheckCircle" className="text-emerald-400 mx-auto" size={44} />
                <h4 className="text-md font-bold text-white">Message Dispatched!</h4>
                <p className="text-xs text-slate-450">We have logged your transmission in our active Pune CRM folder. A senior architect will pick it up shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-slate-400">Your Full Name:</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anand Deshmukh" 
                      className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white placeholder-slate-650 focus:outline-none focus:border-cyan-500 text-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-slate-400">Email Address:</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. deshmukh.anand@cipla.com" 
                      className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white placeholder-slate-655 focus:outline-none focus:border-cyan-500 text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-slate-400">Operational Subject Priority:</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g., Turnkey Allen-Bradley SCADA migration quote request..." 
                    className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white placeholder-slate-655 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-slate-400">Detailed Message Text:</label>
                  <textarea 
                    rows={4.5}
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Describe specific loop registers, required cabinet coatings, I/O count, motor load ranges, or syllabus packages..." 
                    className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white placeholder-slate-655 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold uppercase font-mono tracking-widest text-[11px] rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Transmit Secure Specs Code
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
