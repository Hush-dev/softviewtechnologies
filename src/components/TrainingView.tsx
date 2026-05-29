import { useState } from 'react';
import { PageId } from '../types';
import { TRAINING_DATA } from '../data';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

interface TrainingViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function TrainingView({ setCurrentPage }: TrainingViewProps) {
  const [selectedCourse, setSelectedCourse] = useState<string>(TRAINING_DATA[0].id);

  const activeCourse = TRAINING_DATA.find((c) => c.id === selectedCourse) || TRAINING_DATA[0];

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800 py-24 px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in" id="academy-root">
      
      {/* 1. SECTOR HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-10">
        <span className="text-xs font-mono font-extrabold uppercase text-[#0077b6] tracking-widest block bg-sky-500/10 w-fit mx-auto px-3 py-1 rounded-full border border-sky-500/15">
          CERTIFIED CAPABILITY BUILDING CENTRE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight font-heading">
          Softview Practical PLC & SCADA Academy
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm font-sans">
          Hosting an active physical laboratory near India's major highway in Navale IT Zone Pune, training plant engineers directly on Siemens TIA Portal nodes and heavy hardware PLC rigs.
        </p>
      </div>

      {/* 2. SPLIT LAYOUT: CLASSROOM PIC & SELECTOR COURSE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left selector sidebar & Class image (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Immersive Lab Photo */}
          <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 group text-left">
            <img 
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80" 
              alt="Softview Academy Lab Pune" 
              className="w-full h-full object-cover select-none filter brightness-[0.7] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider block font-bold">PUNE ACADEMY LAB SETUP</span>
              <p className="text-xs text-white font-medium mt-1 leading-normal">
                Includes 6 operational analog sensor chambers, PLC boards, and Siemens switchboards.
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono uppercase tracking-widest text-[#0077b6] block text-left font-bold block">CHOOSE COHORT MODULE:</span>
          
          <div className="grid grid-cols-1 gap-3" id="academy-courses-tabs">
            {TRAINING_DATA.map((c) => {
              const active = c.id === selectedCourse;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCourse(c.id)}
                  id={`course-tab-${c.id}`}
                  className={`p-4 rounded-xl text-left transition-all ${
                    active
                      ? 'bg-white border-2 border-[#0077b6] text-slate-900 shadow-md ring-2 ring-sky-500/10'
                      : 'bg-white/60 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-white hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <div className={`p-2 rounded-lg border ${active ? 'bg-sky-50 border-sky-100 text-[#0077b6]' : 'bg-slate-100 border-slate-200 text-slate-400'}`}>
                      <LucideIcon name="BookOpen" size={16} />
                    </div>
                    <div>
                      <span className="block text-[8.5px] uppercase text-[#0077b6] tracking-widest leading-none font-mono">Module STPL-TR0{TRAINING_DATA.indexOf(c) + 1}</span>
                      <span className={`block text-sm font-bold mt-1 leading-tight ${active ? 'text-slate-900' : 'text-slate-600'}`}>{c.title}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right active course catalog spotlights (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-8 text-left border border-slate-200 shadow-xl relative overflow-hidden" id="course-details">
            
            {/* Outline heading */}
            <div>
              <span className="text-[10px] font-mono text-orange-600 uppercase tracking-widest block font-bold leading-none">ACADEMY DIRECTORY DETAILS</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading mt-1">{activeCourse.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-3.5">
                {activeCourse.description}
              </p>
            </div>

            {/* Split specifications: syllabus details and equipment checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
              
              {/* Syllabus points */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase text-[#0077b6] tracking-wider font-extrabold block">📖 MODULE CURRICULUM:</span>
                <div className="space-y-2.5 text-xs text-slate-600 font-sans">
                  {activeCourse.syllabus.map((item, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <LucideIcon name="Check" className="text-emerald-600 shrink-0 mt-0.5" size={14} />
                      <span className="text-[11px] leading-relaxed font-sans">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Physical equipment used */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase text-orange-600 tracking-wider font-extrabold block">💻 PRACTICAL HARDWARE RIGS:</span>
                <div className="space-y-2.5 text-xs text-slate-600 font-sans">
                  {activeCourse.equipment.map((eq, index) => (
                    <div key={index} className="flex gap-2.5 items-start">
                      <LucideIcon name="Atom" className="text-orange-500 shrink-0 mt-0.5" size={13} />
                      <span className="text-[11px] leading-relaxed font-sans">{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Practical outcomes row description */}
            <div className="bg-emerald-50/55 p-4 rounded-xl border border-emerald-100 space-y-1.5 text-left">
              <span className="block text-[8.5px] uppercase font-mono text-emerald-700 font-extrabold tracking-wider leading-none">VERIFIED COURSE OUTCOME:</span>
              <p className="text-[11px] text-slate-600 font-sans leading-normal mt-0.5">
                {activeCourse.outcome}
              </p>
            </div>

            {/* Action form */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[9px] uppercase font-mono text-slate-400 block">Pricing Plan:</span>
                <span className="text-lg font-black text-slate-900 font-mono">{activeCourse.pricing}</span>
              </div>
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'auto' });
                }}
                className="px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold uppercase font-mono tracking-widest text-[10px] rounded-lg shadow-lg hover:scale-[1.03] transition-all"
              >
                Inquire Slot Availability
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
