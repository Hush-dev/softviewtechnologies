import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface Enquiry {
  id: string;
  fullName: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  systemNeeded: string;
  message: string;
  createdAt: string;
  status: string;
}

export default function LeadHubView() {
  // AI Estimator Form State
  const [industry, setIndustry] = useState('Pharma & Healthcare');
  const [scale, setScale] = useState('State-of-the-art MNC Factory');
  const [currentTools, setCurrentTools] = useState('');
  const [bottleneck, setBottleneck] = useState('');
  const [selectedSystems, setSelectedSystems] = useState<string[]>(['PLC Panels']);
  
  // AI Output Report State
  const [isLoadingReport, setIsLoadingReport] = useState(false);
  const [generatedReport, setGeneratedReport] = useState<string | null>(null);
  const [estimatorError, setEstimatorError] = useState<string | null>(null);

  // Active Leads / Database logs state
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  
  // Custom manual enquiry insertion inside lead-hub
  const [leadName, setLeadName] = useState('');
  const [leadMail, setLeadMail] = useState('');
  const [leadCompany, setLeadCompany] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  const [insertSuccess, setInsertSuccess] = useState(false);

  // Fetch enquiries on mount and define refreshing interval
  const fetchEnquiries = async () => {
    setIsLoadingLeads(true);
    try {
      const res = await fetch('/api/enquiries');
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
      }
    } catch (e) {
      console.error("Failed to load enquiries database logs:", e);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleSystemToggle = (sys: string) => {
    if (selectedSystems.includes(sys)) {
      setSelectedSystems(selectedSystems.filter((s) => s !== sys));
    } else {
      setSelectedSystems([...selectedSystems, sys]);
    }
  };

  // Submit report request to Gemini backend
  const handleGenerateReport = async (e: FormEvent) => {
    e.preventDefault();
    if (!bottleneck) {
      setEstimatorError("Please enter your current manufacturing bottleneck.");
      return;
    }

    setIsLoadingReport(true);
    setGeneratedReport(null);
    setEstimatorError(null);

    try {
      const res = await fetch('/api/automation-estimator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry,
          scale,
          currentTools: currentTools || "Manual relay logs",
          bottleneck,
          specificSystems: selectedSystems,
        })
      });

      if (res.ok) {
        const data = await res.json();
        setGeneratedReport(data.report);
      } else {
        const errData = await res.json();
        setEstimatorError(errData.error || "Failed to generate report schema.");
      }
    } catch (err: any) {
      setEstimatorError("Failed to issue request to the server: " + err.message);
    } finally {
      setIsLoadingReport(false);
    }
  };

  // Create an enquiry directly inside lead-hub
  const handleInsertLead = async (e: FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadMail || !leadCompany || !leadMessage) return;

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: leadName,
          email: leadMail,
          company: leadCompany,
          phone: leadPhone || "Not Provided",
          industry: industry,
          systemNeeded: selectedSystems.join(", ") || "Custom PLC Automation Solution",
          message: leadMessage
        })
      });

      if (res.ok) {
        setInsertSuccess(true);
        // Refresh local listings to see direct database link insertion
        fetchEnquiries();
        setTimeout(() => {
          setInsertSuccess(false);
          setLeadName('');
          setLeadMail('');
          setLeadCompany('');
          setLeadPhone('');
          setLeadMessage('');
        }, 2200);
      }
    } catch (e) {
      console.error("Direct lead submission error:", e);
    }
  };

  // Quick custom formatter to make markdown titles and bullets look magnificent in React JSX!
  const renderFormattedReport = (rawText: string) => {
    const lines = rawText.split('\n');
    return (
      <div className="space-y-6 text-slate-300 font-sans text-xs sm:text-sm">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (trimmed.startsWith('###')) {
            return (
              <h5 key={idx} className="text-sm font-black text-orange-400 font-heading tracking-wide uppercase mt-4">
                {trimmed.replace('###', '').trim()}
              </h5>
            );
          }
          if (trimmed.startsWith('##')) {
            return (
              <h4 key={idx} className="text-base font-black text-[#00b4d8] font-heading tracking-tight mt-6 border-b border-white/5 pb-1">
                {trimmed.replace('##', '').trim()}
              </h4>
            );
          }
          if (trimmed.startsWith('#')) {
            return (
              <h3 key={idx} className="text-lg font-black text-white font-heading tracking-tight border-l-4 border-[#00b4d8] pl-3 py-1 bg-cyan-950/20 rounded">
                {trimmed.replace('#', '').trim()}
              </h3>
            );
          }
          if (trimmed.startsWith('*') || trimmed.startsWith('-')) {
            return (
              <div key={idx} className="flex gap-2 items-start pl-3">
                <span className="text-[#00b4d8] text-base leading-none">•</span>
                <span className="font-sans leading-relaxed">{trimmed.substring(1).trim()}</span>
              </div>
            );
          }
          if (!trimmed) return <div key={idx} className="h-2"></div>;
          
          return <p key={idx} className="leading-relaxed font-sans">{trimmed}</p>;
        })}
      </div>
    );
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fade-in" id="leadhub-root">
      
      {/* 1. SECTOR HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block font-bold">STPL COGNITIVE LABS DEPT</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
          AI Design Studio & Leads Hub
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          A live engineering playground linking our technical schemas directly with server-side AI processing. Model your plant configurations dynamically, or view active leads logs.
        </p>
      </div>

      {/* 2. DUAL COLUMNS LAYOUT: AI ESTIMATOR & SECURE DATABASE LOGS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left column: AI Generator controller form (6 Cols) */}
        <div className="lg:col-span-7 bg-[#0a0f1d] border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative text-left" id="estimator-form-col">
          <div className="space-y-1.5">
            <span className="text-[9px] font-mono text-orange-400 uppercase tracking-widest font-extrabold block">PUNE COGNITIVE SYSTEM ENGINE</span>
            <h3 className="text-xl font-bold font-heading text-white">Model Your Failsafe Panel Setup</h3>
            <p className="text-xs text-slate-400">Specify existing bottlenecks to receive immediate suggested PLCs, protocols, and compliance directives.</p>
          </div>

          <form onSubmit={handleGenerateReport} className="space-y-4 font-sans text-xs">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase text-slate-400">Industry Sectors:</label>
                <select 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 text-xs"
                >
                  <option>Pharma & Healthcare</option>
                  <option>Breweries & Distilleries</option>
                  <option>Food & Beverages Packaging</option>
                  <option>Water & Gas Utilities</option>
                  <option>Refinery & Heavy Process</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase text-slate-400">Plant Dimensions Scale:</label>
                <select 
                  value={scale}
                  onChange={(e) => setScale(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 text-xs"
                >
                  <option>SME Manufacturing Yard</option>
                  <option>Mid-scale Regional Facility</option>
                  <option>State-of-the-art MNC Factory</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase text-slate-400">Current Machinery Tools:</label>
                <input 
                  type="text" 
                  value={currentTools}
                  onChange={(e) => setCurrentTools(e.target.value)}
                  placeholder="e.g. Scattered PLC, Legacy relays" 
                  className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white placeholder-slate-655 focus:outline-none focus:border-cyan-500 text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase text-slate-400">Primary Bottleneck Pain Point:</label>
                <input 
                  type="text" 
                  required
                  value={bottleneck}
                  onChange={(e) => setBottleneck(e.target.value)}
                  placeholder="e.g. Temperature overshoot, audit compliance failures" 
                  className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white placeholder-slate-655 focus:outline-none focus:border-cyan-500 text-xs"
                />
              </div>
            </div>

            {/* Hardware checkboxes selectors */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-slate-400 block">Required Systems of Interest:</label>
              <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                {['PLC Panels', 'SCADA HUD Systems', 'Power MCC Panels', 'VFD Frequency Drives'].map((sys) => {
                  const selected = selectedSystems.includes(sys);
                  return (
                    <button
                      type="button"
                      key={sys}
                      onClick={() => handleSystemToggle(sys)}
                      className={`p-2.5 rounded border text-left flex items-center justify-between ${
                        selected
                          ? 'bg-cyan-950/40 border-[#00b4d8] text-[#00b4d8] font-bold'
                          : 'bg-black/40 border-white/5 text-slate-400'
                      }`}
                    >
                      <span>{sys}</span>
                      <LucideIcon name={selected ? 'CheckCircle' : 'Plus'} size={14} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                disabled={isLoadingReport}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold uppercase font-mono tracking-widest text-[11px] rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isLoadingReport ? 'Formulating Report Specs with Gemini...' : 'Query Intelligent Report Design'}
              </button>
            </div>

          </form>

          {/* AI Generator output displays with animated Presence */}
          <AnimatePresence>
            {estimatorError && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-950/20 border border-red-500/15 rounded-xl text-xs text-red-400 flex gap-2.5 items-start mt-4"
              >
                <LucideIcon name="ShieldAlert" className="shrink-0 mt-0.5" size={15} />
                <span>{estimatorError}</span>
              </motion.div>
            )}

            {generatedReport && (
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-slate-950 border border-white/10 rounded-xl space-y-4 text-left mt-6 shadow-2xl relative overflow-hidden"
                id="ai-report-output"
              >
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <div className="flex gap-1.5 items-center text-[10.5px] font-mono text-cyan-400">
                    <LucideIcon name="Cpu" size={14} className="animate-pulse-slow" />
                    <span>GEMINI-3.5 SPEC REPORT SCHEMA GENERATED:</span>
                  </div>
                  <button 
                    onClick={() => {
                      setGeneratedReport(null);
                    }}
                    className="p-1 px-2.5 bg-slate-900 border border-white/15 text-slate-400 text-[10px] uppercase font-mono rounded hover:text-white"
                  >
                    Clear Specs
                  </button>
                </div>

                <div className="max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                  {renderFormattedReport(generatedReport)}
                </div>

                <p className="text-[9.5px] text-slate-500 leading-normal border-t border-white/5 pt-3 mt-1 font-mono">
                  *This technical study is formulated server-side via Gemini models. Consult STPL Pune sales desk directly to translate this study into custom CAD drawings.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right column: Database enquiries listings logs (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Subtitle */}
          <div className="text-left space-y-1">
            <span className="text-[10px] font-mono text-[#00b4d8] uppercase tracking-widest font-extrabold block">PUNE OFFICE SHARED DATABASE LEADS</span>
            <h3 className="text-xl font-bold font-heading text-white">Confidential Filed Enquiries</h3>
            <p className="text-xs text-slate-400">Active secure loop records stored in server's in-memory CRM dashboard.</p>
          </div>

          {/* Quick manual entry within Lead-Hub tab to quickly test inputs insertion! */}
          <div className="bg-slate-950 border border-white/5 rounded-2xl p-5 text-left space-y-4">
            <span className="text-[9px] uppercase font-mono text-orange-400 font-extrabold tracking-wider leading-none block">INSERT DIRECT ENTRY CRM LEAD:</span>
            
            {insertSuccess ? (
              <div className="p-4 bg-emerald-950/20 border border-emerald-500/15 rounded-lg text-center text-xs text-emerald-400 font-semibold font-mono uppercase leading-normal">
                ✔ ENTRY INJECTED IN DATABASE
              </div>
            ) : (
              <form onSubmit={handleInsertLead} className="space-y-3 font-sans text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="text" 
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="Candidate Name" 
                    className="w-full bg-black/60 border border-white/15 rounded p-2 text-white placeholder-slate-650 text-[11px]"
                  />
                  <input 
                    type="email" 
                    required
                    value={leadMail}
                    onChange={(e) => setLeadMail(e.target.value)}
                    placeholder="Candidate Email" 
                    className="w-full bg-black/60 border border-white/15 rounded p-2 text-white placeholder-slate-650 text-[11px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="text" 
                    required
                    value={leadCompany}
                    onChange={(e) => setLeadCompany(e.target.value)}
                    placeholder="Company Org Name" 
                    className="w-full bg-black/60 border border-white/15 rounded p-2 text-white placeholder-slate-650 text-[11px]"
                  />
                  <input 
                    type="tel" 
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="Mobile Contact" 
                    className="w-full bg-black/60 border border-white/15 rounded p-2 text-white placeholder-slate-650 text-[11px]"
                  />
                </div>
                <input 
                  type="text" 
                  required
                  value={leadMessage}
                  onChange={(e) => setLeadMessage(e.target.value)}
                  placeholder="Inquiry Requirements summary..." 
                  className="w-full bg-black/60 border border-white/15 rounded p-2.5 text-white placeholder-slate-650 text-[11px]"
                />
                <button 
                  type="submit"
                  className="w-full py-2 bg-slate-900 border border-white/10 hover:bg-[#00b4d8] text-white hover:text-black font-extrabold uppercase text-[9.5px] font-mono tracking-widest rounded transition-all"
                >
                  Write Lead Entry directly to Database
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[460px] pr-1" id="leads-list">
            {isLoadingLeads && enquiries.length === 0 ? (
              <div className="p-8 text-center font-mono text-slate-500 text-xs">Loading Leads database stream...</div>
            ) : enquiries.length === 0 ? (
              <div className="p-8 text-center font-mono text-slate-500 text-xs">No entries filed.</div>
            ) : (
              enquiries.map((enq) => (
                <div 
                  key={enq.id}
                  className="p-5 bg-gradient-to-br from-[#0a0f1d] to-[#01040a] border border-white/5 rounded-xl shadow-lg hover:border-[#00b4d8]/20 transition-all text-left space-y-3"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-[#00b4d8] uppercase tracking-wider block font-bold block">{enq.company}</span>
                      <h4 className="text-md font-bold text-white font-heading">{enq.fullName}</h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[8.5px] uppercase font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">
                      {enq.status || 'New Lead'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-350 font-sans line-clamp-3 leading-relaxed">
                    "{enq.message}"
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[9.5px] font-mono border-t border-white/5 pt-2 text-slate-500">
                    <div>
                      <span>Needed: </span>
                      <span className="text-white font-semibold">{enq.systemNeeded}</span>
                    </div>
                    <div>
                      <span>Vertical: </span>
                      <span className="text-orange-400 font-semibold">{enq.industry}</span>
                    </div>
                  </div>

                  <div className="text-[8.5px] font-mono text-slate-600 text-right">
                    Filed on CRM: {new Date(enq.createdAt).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
