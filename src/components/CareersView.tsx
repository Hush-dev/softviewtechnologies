import { useState, FormEvent } from 'react';
import { CareerOpportunity } from '../types';
import { CAREERS_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function CareersView() {
  const [selectedJob, setSelectedJob] = useState<CareerOpportunity | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantMsg, setApplicantMsg] = useState('');
  const [applicantFile, setApplicantFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleApply = (e: FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setApplicantMsg('');
      setApplicantFile(null);
    }, 2500);
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fade-in" id="careers-root">
      
      {/* 1. SECTOR HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block font-bold">STPL JOBS & APPRENTICESHIPS</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
          Build the Future of Smart Industry 4.0
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          We are constantly recruiting talented OT integration engineers, switchgear cabinet wirers, and industrial software program designers to scale output for world-class Indian projects.
        </p>
      </div>

      {/* 2. SPLIT LAYOUT: OFFICE COLLAB PIC & OPENINGS LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Photo with info details (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-xl border border-white/10 group text-left">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80" 
              alt="Engineers collaborating in Softview technology office" 
              className="w-full h-full object-cover filter brightness-[0.4]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-left space-y-1.5">
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block font-bold">PUNE CORE R&D TEAM</span>
              <h4 className="text-md font-bold text-white font-heading leading-tight">Join a Collaborative, Modern Workplace</h4>
              <p className="text-[11px] text-slate-300 leading-normal font-sans">
                Located near India's major industrial hubs, working under mentorship with state of the art software tools.
              </p>
            </div>
          </div>

          <div className="p-5 bg-slate-900/40 rounded-xl border border-white/5 space-y-3.5 text-left">
            <span className="text-[10px] font-mono font-extrabold uppercase text-orange-400 block tracking-wider">⚡ EMPLOYEE UTILITY benefits:</span>
            <ul className="text-xs text-slate-350 pl-4 list-disc space-y-1.5 font-sans">
              <li>Comprehensive wellness & medical coverage for families</li>
              <li>Compulsory weekly certified software lab hours</li>
              <li>Performance-linked annual cash bonus triggers</li>
            </ul>
          </div>
        </div>

        {/* Right openings list grid (7 Cols) */}
        <div className="lg:col-span-7 space-y-5" id="careers-opening-grid">
          <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#00b4d8] block text-left font-bold block">ACTIVE POSITIONS IN PUNE:</span>
          
          <div className="grid grid-cols-1 gap-4">
            {CAREERS_DATA.map((job) => (
              <div 
                key={job.id}
                className="p-5.5 bg-[#0a0f1d] border border-white/5 hover:border-cyan-500/20 rounded-xl transition-all shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left"
              >
                <div className="space-y-2">
                  <div className="flex gap-2 items-center flex-wrap">
                    <span className="text-[9px] font-mono uppercase bg-cyan-950/60 text-[#00b4d8] px-2.5 py-1 rounded border border-cyan-500/10">
                      {job.department}
                    </span>
                    <span className="text-[9.5px] font-mono text-slate-500">{job.type} • {job.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight font-heading">{job.title}</h3>
                  <p className="text-xs text-slate-400">{job.experience} experience target</p>
                </div>
                <button 
                  onClick={() => setSelectedJob(job)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-[#00b4d8] text-white hover:text-black font-extrabold uppercase text-[10px] font-mono tracking-widest rounded-lg transition-all border border-white/10 shrink-0"
                >
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. APPLICATION MODAL OVERLAY */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-md" id="apply-modal">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-slate-950 border border-white/10 max-w-lg w-full rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60 border border-white/10"
              >
                <LucideIcon name="X" size={18} />
              </button>

              <div className="space-y-1">
                <span className="text-[9px] font-mono text-orange-400 uppercase tracking-widest font-extrabold">APPLYING FOR POSITION:</span>
                <h3 className="text-lg sm:text-xl font-black text-white font-heading">{selectedJob.title}</h3>
                <span className="text-xs font-mono text-slate-400">{selectedJob.department} • Pune plant</span>
              </div>

              {isSuccess ? (
                <div className="p-8 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-center space-y-2">
                  <LucideIcon name="CheckCircle" className="text-emerald-400 mx-auto" size={44} />
                  <h4 className="text-md font-bold text-white">Application Received Successfully!</h4>
                  <p className="text-xs text-slate-450">Our HR coordinator will email you within 48 business hours to organize structural tests.</p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 font-sans text-xs">
                  
                  {/* Job specifications review inside modal */}
                  <div className="p-4.5 bg-slate-900 border border-white/5 rounded-xl space-y-2.5">
                    <span className="text-[9.5px] font-mono uppercase text-slate-400 font-bold block">EXPERIENCE TARGETS & SKILLS CODES:</span>
                    <ul className="text-[11px] text-slate-300 spacing-y-2 font-sans pl-4 list-disc space-y-1">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase text-slate-400">Your Full Name:</label>
                      <input 
                        type="text" 
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g. Rahul Sharma" 
                        className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase text-slate-400">Email Address:</label>
                      <input 
                        type="email" 
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="e.g. sharma.rahul@gmail.com" 
                        className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase text-slate-400">Phone Contact (India):</label>
                      <input 
                        type="tel" 
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210" 
                        className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase text-slate-400">Attach Resume PDF (Drag & Drop):</label>
                      <div className="relative border border-dashed border-white/10 hover:border-cyan-500/25 rounded-lg p-2.5 text-center cursor-pointer transition-all bg-black/40">
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setApplicantFile(e.target.files[0]);
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <span className="text-[10.5px] text-slate-450">
                          {applicantFile ? `📎 ${applicantFile.name}` : 'Upload PDF Doc [Max 4MB]'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-slate-400">Describe Your Experience with PLCs/Wiring:</label>
                    <textarea 
                      value={applicantMsg}
                      onChange={(e) => setApplicantMsg(e.target.value)}
                      rows={2.5}
                      placeholder="List any certifications (Siemens, Rockwell) or electrical projects..." 
                      className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-xs"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-extrabold uppercase tracking-widest font-mono rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      Submit Candidate Cover Profile
                    </button>
                  </div>

                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
