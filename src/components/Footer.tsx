/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId } from '../types';
import LucideIcon from './LucideIcon';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNav = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a12] border-t border-slate-900 pt-16 pb-8 text-slate-400" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand & Corporate Overview */}
        <div id="footer-logo-block">
          <div className="flex items-center cursor-pointer mb-5" onClick={() => handleNav('home')}>
            <div className="p-2 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-md mr-3">
              <LucideIcon name="Layers" className="text-white" size={18} />
            </div>
            <span className="text-md font-bold tracking-tight text-white font-heading">
              SOFTVIEW <span className="text-[#00b4d8] font-light">TECHNOLOGIES</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-6">
            Leading Industry 4.0 turnkey industrial automation solutions provider in Pune since 2001. ISO 9001:2015 certified design & control panel manufacturing facilities.
          </p>
          <div className="flex gap-2 flex-wrap" id="compliance-badges">
            <span className="text-[9px] uppercase tracking-widest bg-slate-800/80 px-2 py-1 text-cyan-400 rounded border border-cyan-500/10 font-mono">
              ISO 9001:2015
            </span>
            <span className="text-[9px] uppercase tracking-widest bg-slate-800/80 px-2 py-1 text-orange-400 rounded border border-orange-500/10 font-mono">
              IP65 CERTIFIED
            </span>
            <span className="text-[9px] uppercase tracking-widest bg-slate-800/80 px-2 py-1 text-emerald-400 rounded border border-emerald-500/10 font-mono">
              IEC COMPLIANT
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div id="footer-links-block">
          <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-5 font-heading border-l-2 border-[#00b4d8] pl-2.5">
            Solutions Hub
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <button onClick={() => handleNav('products')} className="hover:text-white hover:underline block text-left">
                PLC Panels & Cabinets
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services')} className="hover:text-white hover:underline block text-left">
                Custom SCADA Systems
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('industries')} className="hover:text-white hover:underline block text-left">
                Industry 4.0 Digitalization
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('training')} className="hover:text-white hover:underline block text-left">
                PLC & SCADA Academy
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('projects')} className="hover:text-white hover:underline block text-left">
                Case Studies & Performance Logs
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('lead-hub')} className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 text-left font-bold">
                Smart Plant AI Configurator <LucideIcon name="ArrowUpRight" size={11} />
              </button>
            </li>
          </ul>
        </div>

        {/* Corporate Office */}
        <div id="footer-office-block">
          <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-5 font-heading border-l-2 border-[#00b4d8] pl-2.5">
            Corporate Office
          </h4>
          <div className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed mb-4">
            <LucideIcon name="MapPin" size={14} className="text-[#00b4d8] shrink-0 mt-0.5" />
            <p>
              Navale IT Zone, Phase 3, A Wing,<br />
              Office No. 402, 4th Floor,<br />
              Narhe, Pune - 411041,<br />
              Maharashtra, India
            </p>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-400">
            <LucideIcon name="Clock" size={14} className="text-slate-500 shrink-0" />
            <p>Mon - Sat: 09:00 AM - 06:30 PM</p>
          </div>
        </div>

        {/* Manufacturing Factory & Contacts */}
        <div id="footer-factory-block">
          <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-5 font-heading border-l-2 border-[#00b4d8] pl-2.5">
            Manufacturing Factory
          </h4>
          <div className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed mb-4">
            <LucideIcon name="Building" size={14} className="text-orange-400 shrink-0 mt-0.5" />
            <p>
              Gat No. 553A, Plot No.9,<br />
              Kondhanpur Road, Khedshivapur,<br />
              Pune - 412205,<br />
              Maharashtra, India
            </p>
          </div>
          <div className="border-t border-slate-900 pt-4 space-y-1.5 text-xs">
            <div className="flex items-center gap-2">
              <LucideIcon name="Phone" size={12} className="text-[#00b4d8]" />
              <span className="font-mono">+(91)-(20)-24690833</span>
            </div>
            <div className="flex items-center gap-2">
              <LucideIcon name="Activity" size={12} className="text-[#00b4d8]" />
              <span className="font-mono">+(91) 7507776585</span>
            </div>
            <div className="flex items-center gap-2">
              <LucideIcon name="Mail" size={12} className="text-orange-400" />
              <a href="mailto:mbp@stplpune.com" className="hover:text-white underline font-mono">mbp@stplpune.com</a>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500" id="footer-credit-block">
        <p>© 2026 Softview Technologies Pvt. Ltd. All rights reserved.</p>
        <p className="flex items-center gap-1.5 leading-none">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Turnkey Automation Solutions Pune • Made in India
        </p>
      </div>
    </footer>
  );
}
