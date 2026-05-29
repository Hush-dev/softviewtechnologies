import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory lead storage
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

const enquiries: Enquiry[] = [
  {
    id: "enq-1",
    fullName: "Rajesh Kulkarni",
    email: "rkulkarni@tata-motors-pune.com",
    company: "Tata Motors Auto Core",
    phone: "+91 9823024567",
    industry: "Automotive OEM",
    systemNeeded: "MCC & VFD Control Panels",
    message: "Interested in upgrading our component assembly plant panel with advanced SCADA monitoring.",
    createdAt: "2026-05-28T10:15:00Z",
    status: "Assigned to Expert"
  },
  {
    id: "enq-2",
    fullName: "Dr. Sunita Deshmukh",
    email: "sunita.d@pfizer-pune.in",
    company: "PharmaCore Solutions",
    phone: "+91 9158004561",
    industry: "Pharma & Healthcare",
    systemNeeded: "PLC Validation & SCADA GAMP5",
    message: "Seeking turnkey validation services and 21 CFR Part 11 compliance for our sterile filling line.",
    createdAt: "2026-05-28T14:45:00Z",
    status: "Under Assessment"
  }
];

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// 1. Health Endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", time: new Date().toISOString(), hasAi: !!ai });
});

// 2. Submit Inquiry API
app.post("/api/enquiry", (req, res) => {
  const { fullName, email, company, phone, industry, systemNeeded, message } = req.body;
  if (!fullName || !email || !company || !message) {
    return res.status(400).json({ error: "Missing required fields (fullName, email, company, message)" });
  }

  const newEnquiry: Enquiry = {
    id: `enq-${Date.now()}`,
    fullName,
    email,
    company,
    phone: phone || "Not Provided",
    industry: industry || "General Manufacturing",
    systemNeeded: systemNeeded || "Custom PLC Automation Solution",
    message,
    createdAt: new Date().toISOString(),
    status: "New lead"
  };

  enquiries.unshift(newEnquiry); // Insert at beginning
  res.status(201).json({ success: true, enquiry: newEnquiry });
});

// 3. Get all Inquiries
app.get("/api/enquiries", (req, res) => {
  res.json({ enquiries });
});

// 4. Industry 4.0 Consultation Assessment generator using server-side Gemini
app.post("/api/automation-estimator", async (req, res) => {
  if (!ai) {
    return res.status(503).json({ 
      error: "Gemini AI configured is unavailable. Please check GEMINI_API_KEY in active Secrets." 
    });
  }

  const { industry, scale, currentTools, bottleneck, specificSystems } = req.body;

  if (!industry || !scale || !bottleneck) {
    return res.status(400).json({ error: "Required fields matching current manufacturing layout are missing." });
  }

  try {
    const prompt = `You are a Principal Automation Architect and Industry 4.0 Specialist at Softview Technologies Pune, India.
    Generate a highly realistic, professional, enterprise-grade Industrial Automation Solution Architecture Report based on these inputs:
    
    - Manufacturing Sector / Industry: ${industry}
    - Scale of Facility: ${scale} (e.g. SME, Mid-size Plant, State-of-the-art MNC Factory)
    - Current Machinery / Control Systems: ${currentTools || "Manual / Legacy relay logic / Scattered PLCs"}
    - Primary Bottleneck or Pain Point: ${bottleneck}
    - Specific Automation Systems of Interest: ${Array.isArray(specificSystems) ? specificSystems.join(", ") : specificSystems || "PLC, SCADA, MCC Panels"}
    
    Structure the report in clean Markdown format with the following defined sections:
    
    1. executive_summary: A high-impact engineering assessment of their pain point and why modernization is critical now.
    2. architecture_recommendations: Specify recommended PLC brand selection options (e.g. Siemens S7-1500, Rockwell ControlLogix, Schneider Modicon), SCADA platform (e.g. Wonderware InTouch, Ignition SCADA, WinCC), and custom MCC/PCC Panel specifications matching their scale.
    3. industrial_software_spec: Mention IoT edge gateways, analytics platforms, database layer (SQL/Historian), and protocol interfaces (OPC-UA, Modbus TCP/IP, Ethernet/IP).
    4. implementation_roadmap: A structured 3-phase chronological timeline (Assessment/Design, Panel Assembly/Testing, Commissioning/Validation) for Softview's turnkey delivery.
    5. compliance_validation_pointers: Specific guidelines if relevant (like GAMP 5, FDA 21 CFR Part 11 for Pharma, CE/IP65 for panel manufacturing, safety standards ISO 13849).
    6. ROI_and_budgetary_guidance: Expected throughput gains (%), energy savings (%), and standard range bracket (SME Standard, Enterprise custom, or Premium Turnkey) with relative scale.
    
    Keep the tone incredibly authoritative, precise, engineering-driven, and technical. Use standard Indian industrial terms where applicable (e.g. MCC panels, Pune region ecosystem) but maintain a global execution focus.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        temperature: 0.2,
        systemInstruction: "You are the Lead Project Engineering Architect at Softview Technologies Pvt. Ltd., Pune. You provide highly detailed, factual, and premium industrial automation technical assessments. Do not use generic filler text or buzzwords; focus on exact engineering systems, PLCs, protocols, and control architecture."
      }
    });

    const reportMarkdown = response.text || "Report generation succeeded but returned empty text contents.";
    res.json({ success: true, report: reportMarkdown });
  } catch (error: any) {
    console.error("Gemini Automation Estimator error:", error);
    res.status(500).json({ error: "Failed to generate AI consultation report: " + error.message });
  }
});

// Vite Middleware integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Softview Backend] Server running on http://localhost:${PORT}`);
  });
}

startServer();
