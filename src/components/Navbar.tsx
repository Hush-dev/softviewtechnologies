/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { useState, useEffect } from 'react';
import { PageId } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../assets/logo.png';
import { 
  Building, 
  ChevronDown, 
  ChevronRight, 
  Lock, 
  MapPin, 
  Phone, 
  User, 
  X, 
  Menu, 
  LogOut, 
  Sparkles, 
  Cpu, 
  Layers, 
  Zap, 
  Activity, 
  Code, 
  ShieldCheck, 
  Flame, 
  Grid, 
  Radio, 
  HeartPulse, 
  Wine, 
  Droplet,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Briefcase,
  ImageIcon
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

interface MegaMenuItem {
  title: string;
  desc: string;
  icon: any;
  id: string;
}

const SOLUTIONS_ITEMS: MegaMenuItem[] = [
  {
    title: 'PLC Automation Systems',
    desc: 'Redundant safety logic and high-availability configuration for hot-standby industrial controllers.',
    icon: Cpu,
    id: 'plc-automation'
  },
  {
    title: 'Enterprise SCADA & Historians',
    desc: 'Unified process modeling, real-time telemetry pipelines, and security logs database tools.',
    icon: Layers,
    id: 'scada-systems'
  },
  {
    title: 'MCC & PCC Panel Manufacturing',
    desc: 'Direct-engineered Type-tested switchgear cabinets with active cooling fan panels.',
    icon: Zap,
    id: 'mcc-pcc-panels'
  },
  {
    title: 'VFD & Motion Control Systems',
    desc: 'High-torque speed configurations & harmonic compliance to trim energy footprints by up to 45%.',
    icon: Activity,
    id: 'vfd-automation'
  },
  {
    title: 'Industrial Software & IIoT',
    desc: 'MQTT brokers, timeseries historian databases, Edge gateways, and unified C-level metrics.',
    icon: Code,
    id: 'industrial-software'
  },
  {
    title: 'Compliance & Validation (GAMP 5)',
    desc: 'Regulated life-sciences data integrity audit trails, URS reports, and FDA 21 CFR Part 11 alignments.',
    icon: ShieldCheck,
    id: 'validation-services'
  }
];

const PRODUCTS_ITEMS: MegaMenuItem[] = [
  {
    title: 'PLC Control Panel Assemblies',
    desc: 'Complete control terminal blocks with premium wiring ducts and air-cooler protection grids.',
    icon: Cpu,
    id: 'prod-plc'
  },
  {
    title: 'Intelligent MCC (iMCC)',
    desc: 'Modular motor switches with localized amperes monitoring and multi-protocol fieldbus routing.',
    icon: Flame,
    id: 'prod-mcc'
  },
  {
    title: 'Power Control Center Panels',
    desc: 'Heavy-duty main distribution boards with ACB breakers engineered up to 3200 Amps.',
    icon: Grid,
    id: 'prod-pcc'
  },
  {
    title: 'HMI Station Consoles',
    desc: 'IP65 oil-tight swing-arm interactive consoles designed for rough factory floors.',
    icon: Radio,
    id: 'prod-hmi'
  }
];

const INDUSTRIES_ITEMS: MegaMenuItem[] = [
  {
    title: 'Pharma & Healthcare',
    desc: 'GAMP 5 life-cycle loops, environment calibration matrices, and cleanroom air controllers.',
    icon: HeartPulse,
    id: 'ind-pharma'
  },
  {
    title: 'Breweries & Distilleries',
    desc: 'Recipe SCADA loops matching ISA-88 standards, fermentation charts, and steam modulation.',
    icon: Wine,
    id: 'ind-breweries'
  },
  {
    title: 'Food & Beverage Packaging',
    desc: 'Load-cell weight dispensers, silo feeds, and automatic inline sanitization.',
    icon: Activity,
    id: 'ind-food'
  },
  {
    title: 'Water & Gas Utilities',
    desc: 'Solar cellular telemetry RTUs, automatic leakage mapping, and pump sequencing tools.',
    icon: Droplet,
    id: 'ind-utilities'
  }
];

const TRAINING_ITEMS: MegaMenuItem[] = [
  {
    title: 'PLC Systems Masterclass',
    desc: 'IEC programming, ladder code scaling, and analog PID setups on genuine Siemens hardware.',
    icon: GraduationCap,
    id: 'course-1'
  },
  {
    title: 'Advanced SCADA & HMI Design',
    desc: 'Master driver configuration, alarm cascades, historians, and client telemetry screens.',
    icon: BookOpen,
    id: 'course-2'
  },
  {
    title: 'VFD & Switchgear Engineering',
    desc: 'Overload controller calculations, electric schematics, and thermal panel design.',
    icon: Zap,
    id: 'course-3'
  }
];

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'solutions' | 'products' | 'industries' | 'training' | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Client Portal Form State
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [portalClientCode, setPortalClientCode] = useState('');
  const [portalToken, setPortalToken] = useState('');
  const [portalError, setPortalError] = useState('');
  const [portalSuccess, setPortalSuccess] = useState('');

  // Mobile Menu Accordion Accordion states
  const [mobileExpanded, setMobileExpanded] = useState<'solutions' | 'products' | 'industries' | 'training' | null>(null);

  // Monitor Scroll for Sticky Level transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: PageId) => {
    setCurrentPage(id);
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubLinkClick = (page: PageId, subId?: string) => {
    setCurrentPage(page);
    setActiveDropdown(null);
    setIsOpen(false);

    // Give short interval for DOM nodes rendering
    setTimeout(() => {
      let targetElement = null;
      if (subId) {
        targetElement = document.getElementById(subId) || 
                        document.getElementById(`service-tab-${subId}`) ||
                        document.getElementById(`product-card-${subId}`) ||
                        document.getElementById(`industry-card-${subId}`) ||
                        document.getElementById(`course-card-${subId}`);
      }

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);
  };

  // Client Portal secure validation
  const handlePortalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!portalClientCode || !portalToken) {
      setPortalError('Credentials syntax required: missing ID node or token hash.');
      return;
    }
    setPortalError('');
    setPortalSuccess('Active secure TCP link established. Forwarding telemetry records to host...');
    
    setTimeout(() => {
      setIsPortalOpen(false);
      setPortalSuccess('');
      setPortalClientCode('');
      setPortalToken('');
    }, 2400);
  };

  return (
    <>
      {/* MASTER COMPLEX NAVBAR CONTAINER */}
      <nav 
        className="sticky top-0 z-50 font-sans border-b border-white/5 bg-[#030712]/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/5 hover:border-b-white/10 transition-all duration-305" 
        id="master-navigation-panel"
      >
        
        {/* --- DESKTOP NAV LAYOUT --- */}
        <div className="hidden lg:block">
          
          {/* LEVEL 1: TOP PREMIUM LOGO & PORTAL STRIP (Always Static & Visible) */}
          <div 
            className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between border-b border-white/5 h-16 py-4 opacity-100"
            id="top-logo-level"
          >
            {/* Logo Group */}
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => handleNav('home')}
              id="top-logo-trigger"
            >
              <img
    src={logo}
    alt="Softview Technologies"
    className="h-11 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
  />
              <div className="text-left">
                <span className="text-lg font-black tracking-wider text-white font-heading leading-none block ml-1">
                  SOFTVIEW <span className="text-[#00b4d8] font-medium text-xs tracking-widest">TECHNOLOGIES</span>
                  <span className="text-slate-500 text-[9px] block font-mono mt-0.5">Industry 4.0</span>
                </span>
              </div>
            </div>

            {/* Client Portal Trigger Action */}
            <button
              onClick={() => setIsPortalOpen(true)}
              id="client-portal-trigger"
              className="px-4.5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-full text-[10.5px] font-mono font-bold tracking-wider text-slate-350 hover:text-white flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
            >
              <Lock size={12} className="text-[#00b4d8]" />
              CLIENT ACCESS HUB
            </button>
          </div>

          {/* LEVEL 2: COMPACT MAIN NAVIGATION & CTA BAR */}
          <div 
            className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center relative h-16"
            id="main-secondary-level"
          >
            {/* Left-aligned navigation items */}
            <div className="flex items-center space-x-10 ml-0 mr-auto" id="centered-links-container">
              
              {/* solutions link & hover container */}
              <div 
                className="relative py-4"
                onMouseEnter={() => { setActiveDropdown('solutions'); setHoveredNav('solutions'); }}
                onMouseLeave={() => { setActiveDropdown(null); setHoveredNav(null); }}
              >
                <button 
                  onClick={() => handleNav('services')}
                  className={`flex items-center gap-1 text-[11.5px] font-bold uppercase tracking-widest transition-colors ${
                    currentPage === 'services' || activeDropdown === 'solutions' ? 'text-[#00b4d8]' : 'text-slate-350 hover:text-white'
                  }`}
                >
                  Solutions
                  <ChevronDown size={11} className={`transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {hoveredNav === 'solutions' && (
                  <motion.div 
                    layoutId="activeNavLine" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00b4d8] rounded-full" 
                  />
                )}
              </div>

              {/* products link */}
              <div 
                className="relative py-4"
                onMouseEnter={() => { setActiveDropdown('products'); setHoveredNav('products'); }}
                onMouseLeave={() => { setActiveDropdown(null); setHoveredNav(null); }}
              >
                <button 
                  onClick={() => handleNav('products')}
                  className={`flex items-center gap-1 text-[11.5px] font-bold uppercase tracking-widest transition-colors ${
                    currentPage === 'products' || activeDropdown === 'products' ? 'text-[#00b4d8]' : 'text-slate-350 hover:text-white'
                  }`}
                >
                  Products
                  <ChevronDown size={11} className={`transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {hoveredNav === 'products' && (
                  <motion.div 
                    layoutId="activeNavLine" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00b4d8] rounded-full" 
                  />
                )}
              </div>

              {/* industries link */}
              <div 
                className="relative py-4"
                onMouseEnter={() => { setActiveDropdown('industries'); setHoveredNav('industries'); }}
                onMouseLeave={() => { setActiveDropdown(null); setHoveredNav(null); }}
              >
                <button 
                  onClick={() => handleNav('industries')}
                  className={`flex items-center gap-1 text-[11.5px] font-bold uppercase tracking-widest transition-colors ${
                    currentPage === 'industries' || activeDropdown === 'industries' ? 'text-[#00b4d8]' : 'text-slate-350 hover:text-white'
                  }`}
                >
                  Industries
                  <ChevronDown size={11} className={`transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {hoveredNav === 'industries' && (
                  <motion.div 
                    layoutId="activeNavLine" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00b4d8] rounded-full" 
                  />
                )}
              </div>

              {/* training link */}
              <div 
                className="relative py-4"
                onMouseEnter={() => { setActiveDropdown('training'); setHoveredNav('training'); }}
                onMouseLeave={() => { setActiveDropdown(null); setHoveredNav(null); }}
              >
                <button 
                  onClick={() => handleNav('training')}
                  className={`flex items-center gap-1 text-[11.5px] font-bold uppercase tracking-widest transition-colors ${
                    currentPage === 'training' || activeDropdown === 'training' ? 'text-[#00b4d8]' : 'text-slate-350 hover:text-white'
                  }`}
                >
                  Training
                  <ChevronDown size={11} className={`transition-transform duration-200 ${activeDropdown === 'training' ? 'rotate-180' : ''}`} />
                </button>
                {hoveredNav === 'training' && (
                  <motion.div 
                    layoutId="activeNavLine" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00b4d8] rounded-full" 
                  />
                )}
              </div>

              {/* gallery direct link */}
              <div 
                className="relative py-4"
                onMouseEnter={() => setHoveredNav('gallery')}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <button 
                  onClick={() => handleNav('gallery')}
                  className={`text-[11.5px] font-bold uppercase tracking-widest transition-colors ${
                    currentPage === 'gallery' ? 'text-[#00b4d8]' : 'text-slate-350 hover:text-white'
                  }`}
                >
                  Gallery
                </button>
                {hoveredNav === 'gallery' && (
                  <motion.div 
                    layoutId="activeNavLine" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00b4d8] rounded-full" 
                  />
                )}
              </div>

              {/* careers direct link */}
              <div 
                className="relative py-4"
                onMouseEnter={() => setHoveredNav('careers')}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <button 
                  onClick={() => handleNav('careers')}
                  className={`text-[11.5px] font-bold uppercase tracking-widest transition-colors ${
                    currentPage === 'careers' ? 'text-[#00b4d8]' : 'text-slate-350 hover:text-white'
                  }`}
                >
                  Career
                </button>
                {hoveredNav === 'careers' && (
                  <motion.div 
                    layoutId="activeNavLine" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00b4d8] rounded-full" 
                  />
                )}
              </div>

            </div>

            {/* Primary Action Contact button */}
            <div className="flex-shrink-0 flex items-center space-x-3 absolute right-6 lg:right-8" id="master-cta-box">
              <button
                onClick={() => handleNav('contact')}
                id="navbar-cta-contact"
                className="relative inline-flex items-center gap-1.5 px-5.5 py-2.5 bg-[#00b4d8] hover:bg-cyan-400 text-black font-extrabold uppercase text-[10.5px] font-mono tracking-widest rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.03] active:scale-95 group overflow-hidden"
              >
                Contact Us
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 duration-200" />
              </button>
            </div>

          </div>

        </div>

        {/* --- DESKTOP MEGA DOCK PANELS --- */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-2xl border-b border-white/10 shadow-3xl z-40"
              id={`mega-dropdown-${activeDropdown}`}
            >
              <div className="max-w-7xl mx-auto p-8 lg:p-10 grid grid-cols-12 gap-8 text-left">
                
                {/* Left Side: Columns of Sub Navigation links (8 Cols) */}
                <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-6">
                  {activeDropdown === 'solutions' && SOLUTIONS_ITEMS.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => handleSubLinkClick('services', item.id)}
                      className="group flex gap-4 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all border border-transparent hover:border-white/5"
                    >
                      <div className="p-3 bg-slate-900 border border-white/10 rounded-xl text-slate-400 group-hover:text-[#00b4d8] group-hover:bg-cyan-950/20 group-hover:border-[#00b4d8]/20 transition-all shrink-0">
                        <item.icon size={18} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors block">{item.title}</span>
                        <span className="text-[10.5px] text-slate-400 block leading-normal line-clamp-2">{item.desc}</span>
                      </div>
                    </div>
                  ))}

                  {activeDropdown === 'products' && PRODUCTS_ITEMS.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => handleSubLinkClick('products', item.id)}
                      className="group flex gap-4 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all border border-transparent hover:border-white/5"
                    >
                      <div className="p-3 bg-slate-900 border border-white/10 rounded-xl text-slate-400 group-hover:text-[#00b4d8] group-hover:bg-cyan-950/20 group-hover:border-[#00b4d8]/20 transition-all shrink-0">
                        <item.icon size={18} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors block">{item.title}</span>
                        <span className="text-[10.5px] text-slate-400 block leading-normal line-clamp-2">{item.desc}</span>
                      </div>
                    </div>
                  ))}

                  {activeDropdown === 'industries' && INDUSTRIES_ITEMS.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => handleSubLinkClick('industries', item.id)}
                      className="group flex gap-4 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all border border-transparent hover:border-white/5"
                    >
                      <div className="p-3 bg-slate-900 border border-white/10 rounded-xl text-slate-400 group-hover:text-[#00b4d8] group-hover:bg-cyan-950/20 group-hover:border-[#00b4d8]/20 transition-all shrink-0">
                        <item.icon size={18} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors block">{item.title}</span>
                        <span className="text-[10.5px] text-slate-400 block leading-normal line-clamp-2">{item.desc}</span>
                      </div>
                    </div>
                  ))}

                  {activeDropdown === 'training' && TRAINING_ITEMS.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => handleSubLinkClick('training', item.id)}
                      className="group flex gap-4 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all border border-transparent hover:border-white/5"
                    >
                      <div className="p-3 bg-slate-900 border border-white/10 rounded-xl text-slate-400 group-hover:text-[#00b4d8] group-hover:bg-cyan-950/20 group-hover:border-[#00b4d8]/20 transition-all shrink-0">
                        <item.icon size={18} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors block">{item.title}</span>
                        <span className="text-[10.5px] text-slate-400 block leading-normal line-clamp-2">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Side: Beautiful featured card layout (4 Cols) */}
                <div className="col-span-4 border-l border-white/5 pl-8 text-left flex flex-col justify-between">
                  {activeDropdown === 'solutions' && (
                    <div className="space-y-4">
                      <div className="relative h-[130px] rounded-xl overflow-hidden border border-white/10">
                        <img 
                          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" 
                          alt="Engineering featured" 
                          className="w-full h-full object-cover filter brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                        <span className="absolute bottom-3 left-3 bg-cyan-500/15 border border-cyan-500/30 text-[#00b4d8] font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">
                          INTEGRATED ECOSYSTEM
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white leading-tight">OT Redundancy Audits</h4>
                        <p className="text-[10.5px] text-slate-300 leading-normal">
                          Order a structured process analysis of failover loop delays for severe motor configurations.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleNav('contact')}
                        className="text-[10.5px] font-mono uppercase bg-slate-900 hover:bg-[#00b4d8] text-white hover:text-black font-extrabold px-4 py-2 rounded-lg border border-white/10 transition-colors w-full"
                      >
                        Request Specification calculations
                      </button>
                    </div>
                  )}

                  {activeDropdown === 'products' && (
                    <div className="space-y-4">
                      <div className="relative h-[130px] rounded-xl overflow-hidden border border-white/10">
                        <img 
                          src="https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=400&q=80" 
                          alt="Products featured" 
                          className="w-full h-full object-cover filter brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                        <span className="absolute bottom-3 left-3 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">
                          IE-61439 TYPE-TESTED
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white leading-tight">Elite Panel Assemblies</h4>
                        <p className="text-[10.5px] text-slate-300 leading-normal">
                          All power & safety controllers undergo comprehensive electrostatic and load calculations pre-dispatch.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleNav('contact')}
                        className="text-[10.5px] font-mono uppercase bg-slate-900 hover:bg-[#00b4d8] text-white hover:text-black font-extrabold px-4 py-2 rounded-lg border border-white/10 transition-colors w-full"
                      >
                        Enquire Cabinet CAD Spec
                      </button>
                    </div>
                  )}

                  {activeDropdown === 'industries' && (
                    <div className="space-y-4">
                      <div className="relative h-[130px] rounded-xl overflow-hidden border border-white/10">
                        <img 
                          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80" 
                          alt="Industries featured" 
                          className="w-full h-full object-cover filter brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                        <span className="absolute bottom-3 left-3 bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">
                          GAMP 5 COMPLIANT
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white leading-tight">Life Sciences & Audits</h4>
                        <p className="text-[10.5px] text-slate-300 leading-normal">
                          Unrivaled 21 CFR Part 11 electronic records alignment logs integrated on core redundant servers.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleNav('contact')}
                        className="text-[10.5px] font-mono uppercase bg-slate-900 hover:bg-[#00b4d8] text-white hover:text-black font-extrabold px-4 py-2 rounded-lg border border-white/10 transition-colors w-full"
                      >
                        Browse Compliance Case Studies
                      </button>
                    </div>
                  )}

                  {activeDropdown === 'training' && (
                    <div className="space-y-4">
                      <div className="relative h-[130px] rounded-xl overflow-hidden border border-white/10">
                        <img 
                          src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80" 
                          alt="Labs featured" 
                          className="w-full h-full object-cover filter brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                        <span className="absolute bottom-3 left-3 bg-rose-500/15 border border-rose-500/30 text-rose-400 font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">
                          PUNE CORE LAB ACADEMY
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white leading-tight">Practical Workstations</h4>
                        <p className="text-[10.5px] text-slate-300 leading-normal">
                          Learn wiring structures using real physical Danfoss and Siemens benches. Seats are strictly allocated.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleNav('training')}
                        className="text-[10.5px] font-mono uppercase bg-slate-900 hover:bg-[#00b4d8] text-white hover:text-black font-extrabold px-4 py-2 rounded-lg border border-white/10 transition-colors w-full"
                      >
                        Reserve Academy Spot
                      </button>
                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MOBILE NAVBAR ROW --- */}
        <div className="lg:hidden flex items-center justify-between h-16 px-4 sm:px-6 max-w-7xl mx-auto w-full">
          {/* Logo Left */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')} id="mobile-logo-trigger">
            <img
    src={logo}
    alt="Softview Technologies"
    className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
  />
            <span className="text-sm font-black tracking-wider text-white font-heading ml-1">
              SOFTVIEW <span className="text-[#00b4d8] font-medium text-xs tracking-widest">TECHNOLOGIES</span>
              <span className="text-slate-500 text-[9px] block font-mono mt-0.5">Industry 4.0</span>
            </span>
          </div>

          {/* Right Mobile Buttons: Portal Access and Hamburger */}
          <div className="flex items-center gap-2">
            
            {/* Mobile Portal Login button */}
            <button
              onClick={() => setIsPortalOpen(true)}
              id="mobile-portal-button"
              className="p-2 sm:px-3 sm:py-1.5 bg-slate-900 border border-white/5 rounded-lg text-slate-350 hover:text-white flex items-center gap-1.5 active:scale-95 transition-all text-[11px] font-mono"
            >
              <Lock size={12} className="text-[#00b4d8]" />
              <span className="hidden sm:inline font-bold">Portal</span>
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsOpen(true)}
              id="mobile-hamburger-trigger"
              className="p-2.5 bg-slate-900 border border-white/5 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:bg-slate-800 transition-colors cursor-pointer"
            >
              <Menu size={18} />
            </button>
            
          </div>
        </div>

      </nav>

      {/* --- MOBILE FULLSCREEN OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col font-sans text-left"
            id="mobile-fullscreen-menu"
          >
            {/* Top Row: Logo & Close button */}
            <div className="border-b border-white/5 py-4 px-4 sm:px-6 flex items-center justify-between">
              <div 
                className="flex items-center cursor-pointer" 
                onClick={() => { setIsOpen(false); handleNav('home'); }}
              >
                <img
    src={logo}
    alt="Softview Technologies"
    className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
  />
                <span className="text-md font-black tracking-wider text-white font-heading uppercase ml-1">
                  SOFTVIEW <span className="text-[#00b4d8] font-medium text-xs tracking-widest">TECHNOLOGIES</span> <span className="text-slate-500 text-[9px] block font-mono mt-0.5">Industry 4.0</span>
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                id="mobile-menu-close"
                className="p-2.5 bg-slate-900 border border-white/10 text-slate-300 hover:text-white rounded-full focus:outline-none"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main scrollable body */}
            <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
              
              <div className="space-y-4">
                
                {/* Accordion 1: Solutions */}
                <div className="border-b border-white/5 pb-2.5">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')}
                    className="w-full flex justify-between items-center py-2 text-md font-bold text-white tracking-wide"
                  >
                    <span>Solutions</span>
                    <ChevronRight size={16} className={`text-slate-400 transition-transform ${mobileExpanded === 'solutions' ? 'rotate-90 text-[#00b4d8]' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === 'solutions' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-2 mt-2 pl-4"
                      >
                        {SOLUTIONS_ITEMS.map((link) => (
                          <div 
                            key={link.id}
                            onClick={() => handleSubLinkClick('services', link.id)}
                            className="bg-slate-900/40 p-2.5 rounded-lg border border-white/5 flex gap-3 text-left hover:bg-slate-900"
                          >
                            <span className="text-slate-300 font-medium text-xs block">{link.title}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion 2: Products */}
                <div className="border-b border-white/5 pb-2.5">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')}
                    className="w-full flex justify-between items-center py-2 text-md font-bold text-white tracking-wide"
                  >
                    <span>Products</span>
                    <ChevronRight size={16} className={`text-slate-400 transition-transform ${mobileExpanded === 'products' ? 'rotate-90 text-[#00b4d8]' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === 'products' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-2 mt-2 pl-4"
                      >
                        {PRODUCTS_ITEMS.map((link) => (
                          <div 
                            key={link.id}
                            onClick={() => handleSubLinkClick('products', link.id)}
                            className="bg-slate-900/40 p-2.5 rounded-lg border border-white/5 flex gap-3 text-left hover:bg-slate-900"
                          >
                            <span className="text-slate-300 font-medium text-xs block">{link.title}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion 3: Industries */}
                <div className="border-b border-white/5 pb-2.5">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')}
                    className="w-full flex justify-between items-center py-2 text-md font-bold text-white tracking-wide"
                  >
                    <span>Industries</span>
                    <ChevronRight size={16} className={`text-slate-400 transition-transform ${mobileExpanded === 'industries' ? 'rotate-90 text-[#00b4d8]' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === 'industries' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-2 mt-2 pl-4"
                      >
                        {INDUSTRIES_ITEMS.map((link) => (
                          <div 
                            key={link.id}
                            onClick={() => handleSubLinkClick('industries', link.id)}
                            className="bg-slate-900/40 p-2.5 rounded-lg border border-white/5 flex gap-3 text-left hover:bg-slate-900"
                          >
                            <span className="text-slate-300 font-medium text-xs block">{link.title}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion 4: Training */}
                <div className="border-b border-white/5 pb-2.5">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === 'training' ? null : 'training')}
                    className="w-full flex justify-between items-center py-2 text-md font-bold text-white tracking-wide"
                  >
                    <span>Training Programs</span>
                    <ChevronRight size={16} className={`text-slate-400 transition-transform ${mobileExpanded === 'training' ? 'rotate-90 text-[#00b4d8]' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === 'training' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-2 mt-2 pl-4"
                      >
                        {TRAINING_ITEMS.map((link) => (
                          <div 
                            key={link.id}
                            onClick={() => handleSubLinkClick('training', link.id)}
                            className="bg-slate-900/40 p-2.5 rounded-lg border border-white/5 flex gap-3 text-left hover:bg-slate-900"
                          >
                            <span className="text-slate-300 font-medium text-xs block">{link.title}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Direct Page: Gallery */}
                <div className="border-b border-white/5 pb-2.5">
                  <button
                    onClick={() => { setIsOpen(false); handleNav('gallery'); }}
                    className="w-full text-left py-2 text-md font-bold text-white tracking-wide"
                  >
                    Gallery
                  </button>
                </div>

                {/* Direct Page: Career */}
                <div className="border-b border-white/5 pb-2.5">
                  <button
                    onClick={() => { setIsOpen(false); handleNav('careers'); }}
                    className="w-full text-left py-2 text-md font-bold text-white tracking-wide"
                  >
                    Careers
                  </button>
                </div>

              </div>

              {/* Bottom CTAs inside mobile menu */}
              <div className="pt-8 space-y-4">
                <button
                  onClick={() => { setIsOpen(false); handleNav('contact'); }}
                  className="w-full py-4 bg-[#00b4d8] text-black font-extrabold uppercase font-mono tracking-widest text-xs rounded-xl flex items-center justify-center gap-2"
                >
                  Contact Engineering Desk
                  <ArrowRight size={14} />
                </button>
                <div className="p-4 bg-slate-900 border border-white/5 rounded-xl text-center space-y-2 text-[10.5px] font-mono text-slate-450">
                  <span>Pune OT Infrastructure Node</span>
                  <div className="flex justify-center gap-4 text-slate-500 text-[10px]">
                    <a href="mailto:info@softviewtech.co.in">Email Support</a>
                    <span>•</span>
                    <a href="tel:+912066894000">HQ Desk</a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SECURE CLIENT PORTAL DIALOG POPUP --- */}
      <AnimatePresence>
        {isPortalOpen && (
          <div className="fixed inset-0 z-[110] bg-black/85 flex items-center justify-center p-4 backdrop-blur-md" id="portal-modal-overlay">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-950 border border-white/10 max-w-md w-full rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative text-left font-sans"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPortalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900 border border-white/10"
              >
                <X size={18} />
              </button>

              <div className="space-y-1.5 border-b border-white/5 pb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 tracking-wider">
                  <Lock size={12} />
                  <span>STPL COGNITIVE ENERGETIC PORTAL</span>
                </div>
                <h3 className="text-xl font-black text-white font-heading">Secure Client Portal</h3>
                <p className="text-xs text-slate-450 leading-relaxed font-sans mt-1">
                  Access active factory telemetry terminals, scheduled FAT review codes, and registered panel schematic catalogs.
                </p>
              </div>

              {portalSuccess ? (
                <div className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-3 text-center">
                  <Sparkles size={36} className="text-emerald-400 mx-auto animate-pulse" />
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">SSL Handshake Complete</h4>
                  <p className="text-xs text-slate-350">{portalSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handlePortalSubmit} className="space-y-4 text-xs font-sans">
                  
                  {portalError && (
                    <div className="p-3.5 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-[11px] font-mono">
                      {portalError}
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Client Registration Code:</label>
                    <input 
                      type="text"
                      className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 text-xs font-mono"
                      placeholder="e.g., STPL-2026-CIPLA"
                      value={portalClientCode}
                      onChange={(e) => setPortalClientCode(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Secure Key Access Token:</label>
                    <input 
                      type="password"
                      className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 text-xs font-mono"
                      placeholder="••••••••••••"
                      value={portalToken}
                      onChange={(e) => setPortalToken(e.target.value)}
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold uppercase text-[10.5px] font-mono tracking-widest rounded-lg transition-transform hover:scale-[1.02] shadow-lg"
                    >
                      Conduct Link Handshake
                    </button>
                  </div>

                  <div className="text-[9px] font-mono text-slate-500 text-center leading-normal pt-2 border-t border-white/5">
                    *To obtain production terminal credentials, establish contact with Pune Project coordinators directly.
                  </div>

                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </>
  );
}
