import { useState } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'panels', label: 'Busbar Panels' },
    { id: 'commissioning', label: 'Site Commissioning' },
    { id: 'infrastructure', label: 'Pune Infrastructure' },
    { id: 'lab', label: 'Academy Labs' },
  ];

  // Map each gallery ID to a majestic, beautiful industrial asset URL
  const galleryImageUrls: Record<string, string> = {
    'g1': 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80', // PLC panels row
    'g2': 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=800&q=80', // Brewery Commissioning
    'g3': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', // Navale office
    'g4': 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80', // Academy labs
    'g5': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80', // iMCC panel inspection
    'g6': 'https://images.unsplash.com/photo-1508847154043-be12a3b64ea6?auto=format&fit=crop&w=800&q=80', // Automotive test
  };

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeLightboxItem = GALLERY_ITEMS.find((i) => i.id === lightboxId);

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 animate-fade-in" id="gallery-root">
      
      {/* 1. SECTOR HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-extrabold uppercase text-[#00b4d8] tracking-widest block font-bold">PHOTOGRAPHY ARCHIVES</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
          Pune Plant & Installation Gallery
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          A real visual archive showing panel alignment busbar clearances, site commissioning tests, Narhe IT corridor design HQ, and academy student practical rooms.
        </p>
      </div>

      {/* 2. CATEGORY SWITCH FILTERS */}
      <div className="flex flex-wrap gap-2 justify-center" id="gallery-filters">
        {categories.map((c) => {
          const active = c.id === selectedCategory;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              id={`filter-btn-${c.id}`}
              className={`px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                active
                  ? 'bg-[#00b4d8] text-black shadow-lg shadow-cyan-500/15 font-extrabold'
                  : 'bg-slate-950 border border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* 3. MULTI-COLUMN IMAGE MASONRY PORTFOLIO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              key={item.id}
              onClick={() => setLightboxId(item.id)}
              className="group bg-[#0a0f1d] border border-white/5 rounded-2xl overflow-hidden cursor-zoom-in shadow-xl hover:border-cyan-500/25 transition-all"
            >
              <div className="h-[250px] relative overflow-hidden">
                <img 
                  src={galleryImageUrls[item.id] || "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.45] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 right-4 bg-slate-950/80 border border-white/10 text-[#00b4d8] font-mono text-[8px] uppercase tracking-widest px-2.5 py-1 rounded">
                  {item.category}
                </span>
                
                {/* Visual hover overlays containing a beautiful magnifying lens icon */}
                <div className="absolute inset-0 bg-[#00b4d8]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-slate-950/90 rounded-full border border-cyan-500/25 text-[#00b4d8] shadow-lg">
                    <LucideIcon name="ZoomIn" size={20} />
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-1.5 text-left bg-gradient-to-b from-[#0a0f1d] to-slate-950">
                <h4 className="text-md font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-normal line-clamp-2">{item.desc}</p>
                <span className="text-[10px] text-slate-500 font-mono font-medium block">ID Code: STPL_IMG_{item.id.toUpperCase()}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 4. LIGHTBOX DRAWER PREVIEW */}
      <AnimatePresence>
        {lightboxId && activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxId(null)}
            id="gallery-lightbox"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-slate-950 border border-white/10 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon button */}
              <button 
                onClick={() => setLightboxId(null)}
                className="absolute top-4 right-4 p-2.5 bg-slate-900 border border-white/10 text-white rounded-full hover:bg-slate-800 transition-all z-10"
              >
                <LucideIcon name="X" size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-8 h-[300px] sm:h-[450px]">
                  <img 
                    src={galleryImageUrls[activeLightboxItem.id]} 
                    alt={activeLightboxItem.title} 
                    className="w-full h-full object-cover filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block bg-[#00b4d8]/10 text-[#00b4d8] text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-cyan-500/10">
                      STPL FIELD PHOTO • Category: {activeLightboxItem.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight leading-tight">
                      {activeLightboxItem.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans mt-2">
                      {activeLightboxItem.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/5 font-mono text-[10px]">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Asset Ref:</span>
                      <span className="text-white">STPL-DWG-L0{activeLightboxItem.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Facility:</span>
                      <span className="text-emerald-400 font-semibold">Verified Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
