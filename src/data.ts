/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, ServiceDetail, ProductDetail, IndustrySector, CareerOpportunity, GalleryItem } from './types';

export const HERO_HIGHLIGHTS = [
  { value: '24+', label: 'Years of Engineering Expertise' },
  { value: '1200+', label: 'Projects Commissioned Worldwide' },
  { value: '500+', label: 'Enterprise Industrial Clients' },
  { value: '100%', label: 'In-House Turnkey Manufacturing' },
];

export const TIMELINE_DATA = [
  {
    year: '2001',
    title: 'Inception & Programming Core',
    desc: 'Began as a core industrial software & programming service, supporting leading Pune engineering hubs with PLC/HMI advanced algorithms.',
    milestone: 'Authorized Siemens S7 implementation partner'
  },
  {
    year: '2007',
    title: 'Custom Panel Manufacturing Unit',
    desc: 'Established our state-of-the-art facility in Khedshivapur to design, wire, and execute world-class PLC, MCC, PCC, and customized VFD integration panels.',
    milestone: 'ISO 9001:2008 & IP65 certified production facility'
  },
  {
    year: '2015',
    title: 'Turnkey Solution Provider Expansion',
    desc: 'Transitioned to an end-to-end turnkey project execution model handling design, mechanical integration, electrical wiring, commissioning, and validation.',
    milestone: 'Strategic vendor for major pharma and distillery plants in India & Africa'
  },
  {
    year: 'Present',
    title: 'Industry 4.0 & Smart Factory Leader',
    desc: 'Pioneering physical-to-digital transformations, IIoT architecture, plant-wide OPC-UA integrations, custom SCADA/Historian setups, and compliance-driven automation.',
    milestone: 'Serving over 8 process sectors with premium IoT systems'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'plc-automation',
    title: 'PLC Automation Systems',
    shortDesc: 'State-of-the-art programming & configuration for fail-safe, highly available industrial processes.',
    longDesc: 'Our core PLC systems are designed for high-availability process control. We specialize in hot-standby, distributed safety controls, and real-time processing using leading controller lines.',
    features: [
      'Redundant CPU systems configuration',
      'Distributed I/O (PROFINET, EtherNet/IP, Modbus TCP)',
      'Failsafe and SIL-certified safety PLC engineering',
      'Advanced PID controller tuning and complex recipe handling'
    ],
    specs: [
      'Architectures: Siemens S7-1500H, Rockwell ControlLogix, Schneider Modicon M580',
      'Standard: IEC 61131-3 compliant programming',
      'I/O Capacity: Up to 15,000+ points handled per centralized system'
    ],
    benefit: 'Reduces operational downtime by up to 99.8% through robust redundancy and clean algorithms.',
    icon: 'Cpu'
  },
  {
    id: 'scada-systems',
    title: 'Enterprise SCADA & Historians',
    shortDesc: 'Unified industrial visualization, data logging, analytics, and plant-wide transparency.',
    longDesc: 'Get full operational visibility. Our SCADA solutions bring disparate systems under a unified control center, backing up plant historical data with sub-second precision.',
    features: [
      'Interactive vector-based dashboard screens',
      'Relational and Time-Series Historian integration',
      'Real-time alarm escalation, custom SMS & Email triggers',
      'Web-based client deployment and Mobile telemetry access'
    ],
    specs: [
      'Platforms: Ignition SCADA, Wonderware System Platform, Siemens WinCC Professional',
      'Interface: OPC-UA, OPC-DA, MQTTSparkplugB',
      'Security: Active Directory / LDAP authentication integration'
    ],
    benefit: 'Provides actionable insights to root-cause errors and optimize resource consumption.',
    icon: 'Layers'
  },
  {
    id: 'mcc-pcc-panels',
    title: 'MCC & PCC Panel Manufacturing',
    shortDesc: 'In-house engineered, fully tested Power and Motor Control Centers built for rough conditions.',
    longDesc: 'Designed to high electrical safety standards. Engineered with precise thermal layouts and busbar configurations, then tested pre-dispatch inside our own Pune manufacturing plant.',
    features: [
      'Type-tested copper busbar structures with IP54/65 protection rating',
      'Intelligent MCCs (iMCC) with Ethernet/Modbus communication modules',
      'Form 3b and Form 4b separation structures',
      'Custom compartmentalized, fully-wired feeder bays'
    ],
    specs: [
      'Design standard: IEC 61439-1 & 2',
      'Short-circuit rating: Up to 50kA for 1 second',
      'Paint Finish: Epoxy powder coated (Structure shade RAL 7035 / 7032)'
    ],
    benefit: 'Minimizes plant electrical footprint and guarantees maximum field safety for operators.',
    icon: 'Zap'
  },
  {
    id: 'vfd-automation',
    title: 'VFD & Motion Control Systems',
    shortDesc: 'High-torque speed adjustments, multi-axis drive coordination, and heavy energy-saving tuning.',
    longDesc: 'Precise motor speed configuration for pumps, compressors, conveyers, and fans. We design heat-dissipated drive panels that operate seamlessly in demanding thermal regimes.',
    features: [
      'Closed-loop flux vector control systems',
      'Multi-drive synchronizations for heavy machinery',
      'Active-Front End (AFE) modules for ultra-low harmonics',
      'Clean bypass configuration with logic failsafes'
    ],
    specs: [
      'Drive brands: Danfoss VLT, ABB ACS880, Siemens G120/S120, Yaskawa A1000',
      'Rating: From 0.75 kW up to 500 kW panels',
      'Harmonics compliance: IEEE 519 standards integration'
    ],
    benefit: 'Cuts energy consumption by 25% to 45% in variable fluid/air systems.',
    icon: 'Activity'
  },
  {
    id: 'industrial-software',
    title: 'Industrial Software & IIoT',
    shortDesc: 'Bridging physical OT sensors directly into enterprise IT, MES, and cloud ERP systems.',
    longDesc: 'Enable smart factories. We write intermediate OPC collectors, customized database scripts, API channels, and MQTT brokers to drive live performance telemetry directly to corporate hubs.',
    features: [
      'Custom MES (Manufacturing Execution Systems) interface',
      'Batch management standard ISA-88 configuration',
      'Production efficiency (OEE) automatic calculator setups',
      'Predictive analytics tool integration via edge gateways'
    ],
    specs: [
      'Protocols: MQTT, OPC-UA, HTTPS REST Web API, Modbus',
      'Core stack: C#, Node.js, SQL database, TimescaleDB, Grafana',
      'Security: SSL encrypted data channels'
    ],
    benefit: 'Eradicates manual data-logging errors and enables C-level real-time visibility.',
    icon: 'Code'
  },
  {
    id: 'validation-services',
    title: 'Compliance & Validation (GAMP 5)',
    shortDesc: 'Expert validation lifecycle documentation and audits for regulated life science fields.',
    longDesc: 'Serving the heavy pharma, cosmetic, and food industries. We formulate flawless software lifecycle reports keeping your systems absolute and secure for drug audits.',
    features: [
      'Detailed User Requirements Spec (URS) and Functional Specs (FS)',
      'Detailed DQ, IQ, OQ documentation files',
      '21 CFR Part 11 electronic records & audit logs alignment',
      'Traceability Matrix from URS directly to final PQ protocols'
    ],
    specs: [
      'Standards: ISPE GAMP 5 Second Edition, US FDA 21 CFR Part 11',
      'Testing: Dynamic loop test logs with certified calibrator tools',
      'Scope: S88 batch structures validation'
    ],
    benefit: 'Assures error-free, quick FDA audit passing and guaranteed production batch traceability.',
    icon: 'ShieldCheck'
  }
];

export const PRODUCTS_DATA: ProductDetail[] = [
  {
    id: 'prod-plc',
    title: 'PLC Control Panel Assemblies',
    tagline: 'Precision engineered, IEC compliant plant controllers',
    description: 'Custom assembled PLC panels utilizing Siemens, Rockwell, or Schneider Electric cores. Every unit undergoes complete software simulation tests and points testing on simulated rigs before dispatch.',
    specs: [
      { label: 'Ingress Protection', value: 'IP55, IP65 or IP66 compliant' },
      { label: 'Cable Entry', value: 'Bottom or Top Gland Plate with gaskets' },
      { label: 'Internal Layout', value: 'Panduit wire ducting and high quality Phoenix terminals' },
      { label: 'Testing Rig', value: 'Completes 100% loop dynamic test' }
    ],
    features: [
      'Integrated active cooler fan panels with dust filters',
      'Dedicated UPS buffer & surge execution blocks',
      'High insulation rating (up to 2kV AC isolation dynamic)',
      'Extremely clean, clear terminal legend blocks for on-site debug tracing'
    ],
    applications: [
      'Chemical Process Plants',
      'Distillery Fermentation & CIP Systems',
      'Automotive Paint Shops',
      'Water Treatment (WTP/STP) plants'
    ],
    icon: 'Cpu'
  },
  {
    id: 'prod-mcc',
    title: 'Intelligent Motor Control Centers (iMCC)',
    tagline: 'Communicative, robust electrical power grids',
    description: 'Rugged modular panels designed to control heavy motors dynamically while providing real-time amps, voltage, and diagnostic alerts via fieldbus directly to the SCADA system.',
    specs: [
      { label: 'Busbar Material', value: '99.9% Pure Conductivity Electrolytic Copper' },
      { label: 'Rated Current', value: 'Up to 3200 Amps' },
      { label: 'Working Voltage', value: '415V AC, 3 Phase, 50Hz standard' },
      { label: 'Communication Type', value: 'Profibus DP, Modbus RTU or Devicenet modules' }
    ],
    features: [
      'Draw-out or fixed feeder modular variants',
      'Intelligent overload relay protections integrated',
      'Thermal monitoring sensors inside critical joints',
      'Fully interlocked handles preventing opening when live'
    ],
    applications: [
      'Cement and Metal plants',
      'Utility Boiler house control blocks',
      'Sugar Mill processing divisions',
      'Continuous conveyer loops'
    ],
    icon: 'Flame'
  },
  {
    id: 'prod-pcc',
    title: 'Power Control Center Panels (PCC)',
    tagline: 'Heavy-duty mains distribution boards for industrial power',
    description: 'High capacity master panels that receive heavy transformer feed and distribute to sub-stations safely with ACB safety blocks, automatic circuit breaks, and micro-grid monitoring controllers.',
    specs: [
      { label: 'Fault Rating', value: '50kA for 1 second conforming to IEC standard' },
      { label: 'Enclosure Material', value: '2.0mm thick CRCA sheet steel structure' },
      { label: 'Circuit Breakers', value: 'Air Circuit Breakers (ACB) and MCCBs built-in' },
      { label: 'Standard Code', value: 'IS 8623 / IEC 61439 compliant' }
    ],
    features: [
      'Advanced digital energetic meters with RS485 interfaces',
      'Generous wiring bays for thick aluminum cable connections',
      'Rear access doors with customized mechanical safety locks',
      'Electrostatic epoxy powder coating for rust prevention'
    ],
    applications: [
      'MNC heavy manufacturing complexes',
      'Pharmaceutical API processing campuses',
      'Mega agro complexes and seed silos',
      'Continuous running paper factory units'
    ],
    icon: 'Grid'
  },
  {
    id: 'prod-hmi',
    title: 'HMI Station Consoles',
    tagline: 'High-contrast ergonomic graphical interfaces',
    description: 'Rugged operator consoles with heavy touch panels customized for plant floor workers. Provides process overview, valve toggles, manual overrides, and alarms on the spot.',
    specs: [
      { label: 'Screen Sizes', value: '7 inch, 9 inch, 12 inch to 15 inch premium' },
      { label: 'Front Panel Protection', value: 'IP65 oil-tight and moisture-proof standard' },
      { label: 'Panel Mount', value: 'Swing arm support, pedestal, or flush console' },
      { label: 'Screen Hardware', value: 'Hi-Resolution TFT capacitive touchscreens' }
    ],
    features: [
      'Industrial-grade fanless internal processors',
      'Real-time trending charts and manual setpoint triggers',
      'USB/Ethernet ports for quick log exports',
      'Multi-language graphical user display options'
    ],
    applications: [
      'Continuous continuous chemical mix tanks',
      'AHU (Air Handling Unit) and Cleanroom monitoring',
      'OEM bottling lines and packing machines',
      'Boiler fuel flow consoles'
    ],
    icon: 'Radio'
  }
];

export const INDUSTRIES_DATA: IndustrySector[] = [
  {
    id: 'ind-pharma',
    title: 'Pharma & Healthcare',
    challenge: 'A major Pune pharmaceutical major was struggling with strict GAMP 5 compliance, constant audit errors on batch logs, and unreliable cleanroom pressure levels.',
    solution: 'Designed redundant Siemens S7-1500 controller networks combined with localized SCADA reporting complying heavily with 21 CFR Part 11 audit trails.',
    outcome: 'Zero failures in global FDA audits, complete trace records for 100% of batches, and high-stability climate zones.',
    features: ['GAMP 5 validation validation lifecycle', 'Audit trail automation', 'Clean Room HVAC controls', 'Automatic batch reporting software'],
    icon: 'HeartPulse'
  },
  {
    id: 'ind-breweries',
    title: 'Breweries & Distilleries',
    challenge: 'Batch consistency across boiling paths, sugar conversion spikes, and massive water and energy losses during continuous distillation.',
    solution: 'Turnkey automation including custom design of SCADA recipe loops (ISA-88 standards), gas monitoring panels, VFDs, and automatic pneumatic valve networks.',
    outcome: 'Increased fermentation output by 18%, guaranteed same taste parameter profiling, and reduced thermal fuel costs by 22%.',
    features: ['Fermentation analytics', 'CIP (Clean-in-Place) automation', 'Alcohol vapor safety monitors', 'Steam flow auto moderation'],
    icon: 'Wine'
  },
  {
    id: 'ind-food',
    title: 'Food & Beverage',
    challenge: 'Manual ingredient measurement causing massive structural food ingredient variations, wastage, and cross-contamination issues in continuous mixer lines.',
    solution: 'Integrated high-precision load-cell weight indicators linked to a master PLC batch controller, utilizing pneumatic feed actuators.',
    outcome: 'Eliminated manual dosage defects, achieved recipe accuracy of 99.95%, and doubled overall packaging line throughput.',
    features: ['Raw silo weigh management', 'Automatic inline sanitization', 'Recipe storage for 150 items', 'Hygienic panel enclosures'],
    icon: 'Activity'
  },
  {
    id: 'ind-utilities',
    title: 'Water & Gas Utilities',
    challenge: 'Large distance pipeline leakage, water billing disputes, manually operated pumping networks across regional Pune reservoirs.',
    solution: 'Deployed Solar-powered RTUs coupled with Long Range SCADA servers operating over secure cellular lines with automatic pressure release checks.',
    outcome: 'Curbed overall pumping electric losses by 28% and detected instant water pipe leakage locations automatically within 4 minutes.',
    features: ['High-mileage telemetry', 'GSM/GPRS diagnostic RTUs', 'Pump sequencing algorithms', 'Ultrasonic flow transmitters integration'],
    icon: 'Droplet'
  },
  {
    id: 'ind-refinery',
    title: 'Refinery & Process Plants',
    challenge: 'High physical explosion hazards, complex critical temperature parameters, and the absolute requirement for SIL-2 safety metrics.',
    solution: 'Explosion-proof control consoles, intrinsically safe barriers, high-redundancy logic solvers, and SIL-2 PLC systems certified by TÜV.',
    outcome: 'Maintained 3000+ running days with zero plant incidents, automated steam-cracking safety parameters.',
    features: ['Intrinsically safe field barrier modules', 'SIL-2 redundancy', 'Vapor alert alarm systems', 'Emergency ESD systems'],
    icon: 'Flame'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Brewery Automated Brew House Suite',
    category: 'Turnkey Brewery Automation',
    client: 'United Breweries Group',
    location: 'Rajasthan Plant, India',
    description: 'Executed complete recipe automation and motor control for a 150-KL continuous brew house plant. Project spanned structural design of VFD cabinets, Profinet networking, and dynamic Steam Flow modulation, adhering fully to international food standards.',
    highlights: [
      'Designed over 250 pneumatic valves dynamic sequences',
      'Engineered ISA-88 standard batch recipe structures',
      'Installed VFD panels for exact wort pump management',
      'Constructed complete plant-wide SCADA dashboard'
    ],
    metrics: [
      { label: 'Yield Increase', value: '+14.5%' },
      { label: 'Energy Savings', value: '18% Reduction' },
      { label: 'Commissioning Time', value: '45 Days' }
    ],
    icon: 'Wine'
  },
  {
    id: 'proj-2',
    title: 'GAMP 5 Compliant SCADA Upgrade',
    category: 'Life Science Validation',
    client: 'Aurobindo Pharma',
    location: 'Hyderabad Cluster, India',
    description: 'Modernized a heavy sterile powder filling and packing line control panels. Replaced obsolete controllers with Siemens S7-1500F safety systems, and configured advanced report logging to comply with United States FDA audit regulations.',
    highlights: [
      'Incorporated absolute 21 CFR Part 11 electronic records loggers',
      'Full validation testing (DQ/IQ/OQ/PQ execution logs)',
      'Interfaced with sterile weighing load cells',
      'Constructed modular IP65 SS316 cleanroom console panels'
    ],
    metrics: [
      { label: 'Audit Compliance', value: '100% Approved' },
      { label: 'Batch Lead Time', value: '-22% Saved' },
      { label: 'System Fails', value: 'Zero Errors' }
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 'proj-3',
    title: 'Continuous Water Supply SCADA Grid',
    category: 'Utility Infrastructure SCADA',
    client: 'Pune Municipal Corporation',
    location: 'Pune Division, India',
    description: 'Design and deployment of massive telemetry loop monitoring water grid distribution across 4 sub-pumping reservoirs. Utilized industrial RTU controllers linked via secured cellular routes back to raw-water main dashboards.',
    highlights: [
      'Centralized tracking of water turbidity levels',
      'Constructed intelligent auto pump rotation logic based on runtime hours',
      'Remote diagnostics for heavy-duty 415V variable frequency pump panels',
      'Automatic warning alarms for low reservoir statuses'
    ],
    metrics: [
      { label: 'Pumping Cost', value: '-30% Electric' },
      { label: 'Leakage Alert Response', value: '<5 Minutes' },
      { label: 'Daily Flow Volume', value: '45M Liters' }
    ],
    icon: 'Droplet'
  },
  {
    id: 'proj-4',
    title: 'Advanced AHU & Paint Booth Control Panels',
    category: 'Automotive OEM Systems',
    client: 'Bajaj Auto Ltd.',
    location: 'Akurdi, Pune, India',
    description: 'Engineered MCC-VFD coupled control systems with complex Air Handling Unit controls. Configured exact pressure and temperature controls to optimize painting gloss consistency and air filter lifecycles.',
    highlights: [
      'Multi-axis air fan synchronization using Danfoss drives',
      'Custom fabricated double-door mechanical dust enclosures',
      'Real-time delta-pressure filter monitoring dashboards',
      'Safety emergency shutdown line interlocking'
    ],
    metrics: [
      { label: 'Paint Rejects', value: 'Reduced by 40%' },
      { label: 'Filter Durability', value: '+50% Extended' },
      { label: 'Panel Dimensions', value: 'Custom 4-bay' }
    ],
    icon: 'Cpu'
  }
];

export const TRAINING_DATA = [
  {
    id: 'course-1',
    title: 'Comprehensive PLC Systems Course',
    duration: '4 Weeks / 6 Weeks (Specialized Packs)',
    description: 'Learn the fundamentals of PLC architecture, input/output structures, memory layout, ladder logic programming, and debugging techniques using real hardware boards.',
    syllabus: [
      'Internal hardware components & memory layouts of major systems',
      'IEC 61131-3 Ladder Logic & Structured Text programming',
      'Remote distributed hardware networking via PROFINET interfaces',
      'Analog variables scaling, filtering and fast loop PID config'
    ],
    equipment: [
      'Siemens S7-1200 and S7-1500 Trainer Kits',
      'Rockwell Micro850 PLC Boards',
      'Real Analog PID Loop Simulator Chambers',
      'Profinet & EtherNet/IP Fieldbus Switches'
    ],
    outcome: 'Hands-on project validation capabilities, certified by Softview Technologies.',
    pricing: '₹14,500 onwards'
  },
  {
    id: 'course-2',
    title: 'Advanced Industrial SCADA & HMI Design',
    duration: '4 Weeks (Practical lab assignments)',
    description: 'Master factory screen design, drivers setup, relational databases, historical logs, alarms, security parameters, and dynamic client screens configuration.',
    syllabus: [
      'Dynamic operator screen layout planning and visual patterns',
      'Industrial driver mapping and tag database creations',
      'Historian setup databases, SQL queries and automatic Excel export logging',
      'Alarm hierarchies, event logs and network security credentials'
    ],
    equipment: [
      'Ignition SCADA v8.1 Dual Licences',
      'Siemens WinCC Professional V18',
      'Wonderware InTouch HMI Runtime workstations',
      'OPC-UA Kepware Server Simulators'
    ],
    outcome: 'Industry ready system integration engineer capable of designing full plant control rooms.',
    pricing: '₹16,000 onwards'
  },
  {
    id: 'course-3',
    title: 'Industrial VFD & Switchgear Engineering',
    duration: '3 Weeks (Highly customized for plant staff)',
    description: 'Learn speed control of heavy electric machinery, electric drawing reading, current overload sizing, filters, and thermal cabinet calculations.',
    syllabus: [
      'Electric machinery torque-speed formulas and control modes',
      'VFD programming parameters, limits, ramp profiles, and digital IO bounds',
      'Filter reactor selections, EMF shielding, and cable rules',
      'Breakers, protective relays, current transformers, and thermal wire designs'
    ],
    equipment: [
      'Danfoss FC302 and ABB ACS550 Drives',
      'Coupled Active Regenerative Brake Resistors',
      'Siemens Switchgear & Safe Contactors Assembly Rigs',
      'AutoCAD Electrical Schematic Workstations'
    ],
    outcome: 'Ability to debug, wire, and fix heavy machinery motor issues with high engineering confidence.',
    pricing: '₹12,500 onwards'
  }
];

export const CLIENT_LOGOS = [
  'Tata Motors',
  'Bajaj Auto',
  'Serum Institute',
  'United Breweries',
  'Pfizer India',
  'Thermax',
  'Aurobindo Pharma',
  'Cipla Ltd'
];

export const CAREERS_DATA: CareerOpportunity[] = [
  {
    id: 'car-1',
    title: 'Senior Industrial Automation Engineer (PLC/SCADA)',
    department: 'Projects & Integration',
    experience: '4 - 7 Years in Turnkey Automation',
    location: 'Corporate Office (Narhe, Pune)',
    type: 'Full-Time, Permanent',
    description: 'We are seeking an experienced automation architect to spearhead turnkey project development from concept, panel design approvals, PLC/SCADA programming, to final site commissioning.',
    requirements: [
      'B.E./B.Tech in Instrumentation / Electronics / Electrical Engineering',
      'Proven expertise in programming Siemens S7-1500 (TIA Portal) or Rockwell ControlLogix',
      'Experience in SCADA platforms (Ignition SCADA, WinCC or Wonderware)',
      'Clear capability to draft electrical CAD GA diagrams and single-line diagrams',
      'Willingness to travel for domestic and foreign on-site integration stints'
    ]
  },
  {
    id: 'car-2',
    title: 'Control Panel Design & estimation Engineer',
    department: 'Engineering & Switchgear Manufacturing',
    experience: '2 - 5 Years in Panel Drafting',
    location: 'Production Factory (Khedshivapur, Pune)',
    type: 'Full-Time, Permanent',
    description: 'Responsible for preparing detailed GA (General Arrangement) drafts, power distribution SLDs, component estimations, busbar current sizing, and final wiring legends for client project bids.',
    requirements: [
      'Diploma / Degree in Electrical Engineering',
      'High proficiency in AutoCAD Electrical or EPLAN Cabinet software',
      'Thorough knowledge of switchgear components (MCCBs, Air circuit breakers, contactors, overload relays)',
      'Familiarity with IEC 61439 electrical panel type standards',
      'Ability to collaborate with dynamic wiring floor team'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gal-1', title: 'Sleek Siemens TIA Portal Automated Line Assembly Panel', category: 'panels', desc: 'Custom wired double-door stainless steel control cabinet with distributed Profinet modules.', iconName: 'Cpu' },
  { id: 'gal-2', title: '500-HP Modular Heavy Drive Cabinet In Assembly', category: 'panels', desc: 'Completed multi-motor VFD coordination panel with integrated active cooling ventilation.', iconName: 'Activity' },
  { id: 'gal-3', title: 'Continuous Fermentation SCADA Control Center Live', category: 'infrastructure', desc: 'High-contrast plant dashboard tracking 12 continuous sugar mash tanks in real-time.', iconName: 'Layers' },
  { id: 'gal-4', title: 'On-Site Commissioning at Major Water Utility Block', category: 'commissioning', desc: 'Softview engineers aligning electromagnetic flowmeters with localized PLC telemetry.', iconName: 'Droplet' },
  { id: 'gal-5', title: 'Certified Switchgear Dispatch Area - Khedshivapur', category: 'infrastructure', desc: 'Inspected power distribution assemblies waiting for final client dispatch seals.', iconName: 'Grid' },
  { id: 'gal-6', title: 'Industrial Training Lab Facilities - Narhe Office', category: 'lab', desc: 'Dedicated learning simulator setup for engineering students and factory plant trainees.', iconName: 'Radio' },
];
