import { useState, useEffect } from 'react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LucideIcon from './components/LucideIcon';

// Import our beautiful modular views
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ProductsView from './components/ProductsView';
import IndustriesView from './components/IndustriesView';
import ProjectsView from './components/ProjectsView';
import TrainingView from './components/TrainingView';
import GalleryView from './components/GalleryView';
import CareersView from './components/CareersView';
import ContactView from './components/ContactView';
import LeadHubView from './components/LeadHubView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  
  // Real-time fluctuating telemetry simulator to mimic active SCADA link loops
  const [telemetry, setTelemetry] = useState({
    psi: 84.2,
    temp: 68.5,
    rpm: 1420,
    status: 'OPTIMAL',
    activeMixer: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => {
        // Shift values slightly to prove real-time pipeline connection is active
        const deltaTemp = (Math.random() - 0.5) * 0.4;
        const deltaPsi = (Math.random() - 0.5) * 0.6;
        const deltaRpm = (Math.random() - 0.5) * 8;
        return {
          ...prev,
          temp: parseFloat(Math.max(48, Math.min(85, prev.temp + deltaTemp)).toFixed(1)),
          psi: parseFloat(Math.max(60, Math.min(110, prev.psi + deltaPsi)).toFixed(1)),
          rpm: Math.round(Math.max(800, Math.min(1800, prev.rpm + deltaRpm))),
        };
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Structural component selection router based on selected currentPage ID
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} telemetry={telemetry} setTelemetry={setTelemetry} />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView setCurrentPage={setCurrentPage} />;
      case 'products':
        return <ProductsView setCurrentPage={setCurrentPage} />;
      case 'industries':
        return <IndustriesView setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <ProjectsView setCurrentPage={setCurrentPage} />;
      case 'training':
        return <TrainingView setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <GalleryView />;
      case 'careers':
        return <CareersView />;
      case 'contact':
        return <ContactView />;
      case 'lead-hub':
        return <LeadHubView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} telemetry={telemetry} setTelemetry={setTelemetry} />;
    }
  };

  return (
    <div className="bg-[#030712] min-h-screen text-slate-100 flex flex-col font-sans select-none antialiased selection:bg-cyan-500 selection:text-black" id="app-root-frame">
      
      {/* 2. HEADER NAVIGATION BAR */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 3. CORE SUB-SECTION ROUTER */}
      <main className="flex-1" id="main-content-flow">
        {renderCurrentView()}
      </main>

      {/* 4. MASTER FOOTER */}
      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}
