import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import bgVideo from "./assets/bg-video.mp4";
import Lenis from "lenis";
import { useInView } from "react-intersection-observer";
import {
  ArrowUpRight,
  Play,
  Coins,
  ShieldCheck,
  TrendingUp,
  Gem,
  Crown,
  Shield,
  Lock,
  Zap,
  Smartphone,
  Tablet,
  Laptop,
  Layers,
  Brain,
  KeyRound,
  Heart,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Calculator,
  Cpu,
  HelpCircle,
  ChevronDown,
  Gift,
} from "lucide-react";

// Safe CJS/ESM interop import for react-countup in Vite
import ReactCountUp from "react-countup";
const CountUp = ReactCountUp.default || ReactCountUp;

// --- DATA CONFIGURATIONS ---
const corePillars = [
  {
    id: "growth",
    label: "Growth Strategy",
    icon: TrendingUp,
    desc: "Exponential expansion into high-yield emerging digital markets across the African continent.",
  },
  {
    id: "wealth",
    label: "Wealth Generation",
    icon: Gem,
    desc: "Secure early-stage private equity and capture direct yields from global decentralized technology demand.",
  },
  {
    id: "prestige",
    label: "Tech Prestige",
    icon: Crown,
    desc: "Command authority with a physical device that serves as a status symbol and nodes key.",
  },
  {
    id: "safety",
    label: "Hardware Safety",
    icon: Shield,
    desc: "Enterprise-grade encryption protocols running natively on an insulated, custom-built Secure OS.",
  },
  {
    id: "security",
    label: "Self-Sovereign Security",
    icon: Lock,
    desc: "Decentralized cryptographic storage keeping your digital identity entirely under your own keys.",
  },
];

const features = [
  {
    title: "Layer-1 Blockchain Core",
    desc: "Secures and manages your private keys natively, completely isolated from standard application memory.",
    icon: Layers,
  },
  {
    title: "Sleek Native Gateway",
    desc: "Access the decentralized ecosystem fluidly via custom-engineered iOS and Android sandboxed apps.",
    icon: Smartphone,
  },
  {
    title: "Web3 Protocol Stack",
    desc: "A custom-built hardware environment tailored for multi-chain asset management and lightning-fast dApps.",
    icon: Zap,
  },
  {
    title: "Neural AI Assistant",
    desc: "Locally-run machine learning models that personalize your digital workflow without uploading data to the cloud.",
    icon: Brain,
  },
];

const devices = {
  Phones: {
    name: "AfriMo Phone Prime",
    specs: [
      "108MP Cinematic Triple Lens",
      '6.8" AMOLED 120Hz Infinite Screen',
      "Hardware Cryptographic Key Vault",
      "Double-Enclave Secure OS Core",
    ],
    imageText: "SECURE NODE 01",
    icon: Smartphone,
  },
  Tablets: {
    name: "AfriMo Tab Horizon",
    specs: [
      '11" Liquid Retina TrueTone Display',
      "Quad-Array Spatial Audio Chamber",
      "Isolated Offline Sandbox Mode",
      "Machined Aerospace Aluminum Body",
    ],
    imageText: "HORIZON PRO",
    icon: Tablet,
  },
  Laptop: {
    name: "AfriMo Book Titanium",
    specs: [
      "Ultralight Titanium Shell",
      "Next-Gen Computational Engine",
      "Dedicated Web3 Physical Keypad",
      "Biometric Touch ID Encryption Lock",
    ],
    imageText: "TITAN BOOK",
    icon: Laptop,
  },
  IPad: {
    name: "AfriMo Slate Pro",
    specs: [
      "Precision Multi-Touch Surface",
      "Dual Boot Architecture (OS/SecureOS)",
      "Seamless Hot-Wallet Syncing",
      "Multi-Day High-Density Power Cell",
    ],
    imageText: "SLATE CORE",
    icon: Tablet,
  },
};

const faqs = [
  {
    question: "How does the custom hardware block security breaches?",
    answer:
      "AfriMo devices contain an isolated physical chip known as the Secure Enclave. This chip runs completely parallel to the main operating system, processing biometric validation, private keys, and encrypted conversations entirely locally.",
  },
  {
    question: "What legal rights do I receive as an equity shareholder?",
    answer:
      "When you participate in our fractional seed rounds, you receive officially registered, tokenized corporate equity shares. This entitles you to dividend distributions, voting rights on critical ecosystem updates, and capital appreciation.",
  },
  {
    question: "What is the capital requirement to start investing?",
    answer:
      "To ensure absolute accessibility, our seed round starts at just $100 (approximately ₦100,000). Your allocation is immediately locked and verified via certified financial custodians.",
  },
];

const partners = [
  "TechCabal",
  "Disrupt Africa",
  "Techpoint",
  "Ventures Africa",
  "Nairametrics",
  "Stears Business",
];
const doublePartners = [...partners, ...partners];

export default function AfrimobileLanding() {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030009] text-zinc-100 font-sans antialiased overflow-x-hidden selection:bg-amber-400 selection:text-black">
      {/* --- PREMIUM GOOGLE FONTS & WEBKIT 3D RENDERING SYSTEM --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght=300;400;500;600;700&family=Space+Grotesk:wght=400;500;600;700&display=swap');
        
        .font-display {
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.03em;
        }
        .font-body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        .perspective-container {
          perspective: 1500px;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>

      {/* Ambient backgrounds */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[25%] right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/[0.06]">
        <div className="container mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-black p-2.5 rounded-xl shadow-lg shadow-amber-500/10">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                AFRIMO
              </span>
              <span className="text-[10px] block text-amber-500 font-bold tracking-[0.3em] leading-none mt-1">
                TECHNOLOGIES
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-zinc-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              Vision
            </a>
            <a
              href="#showcase"
              className="hover:text-amber-400 transition-colors"
            >
              Devices
            </a>
            <a
              href="#technology"
              className="hover:text-amber-400 transition-colors"
            >
              Ecosystem
            </a>
            <a
              href="#investment"
              className="hover:text-amber-400 transition-colors"
            >
              Equity
            </a>
          </nav>
          <a
            href="#investment"
            className="hidden lg:flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-white font-bold px-6 py-3 rounded-xl border border-white/[0.08] shadow-sm transition-all text-xs tracking-wider uppercase"
          >
            Acquire Shares <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* --- HERO WITH NEON BLOCKCHAIN BACKGROUND VIDEO --- */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-24">
        {/* Background Glowing 3D Blockchain Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Advanced Dark Masking for readability and high tech depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030009]/30 via-[#030009]/80 to-[#030009]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030009_95%)]" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-300 font-display">
                Seed Stage Allocation Active
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[76px] font-bold leading-[1.05] tracking-tight text-white">
              Sovereign hardware. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
                Built for Web3.
              </span>
            </h1>
            <p className="font-body text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
              We are engineering Africa's premier blockchain-native physical
              ecosystem. Build capital, preserve decentralized keys, and claim
              global corporate shares from our early seed round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#investment"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-xl shadow-xl shadow-amber-500/10 transition-all text-sm tracking-wider uppercase text-center flex items-center justify-center gap-2"
              >
                Commit Capital <ArrowUpRight className="w-4 h-4 stroke-[3px]" />
              </a>
              <a
                href="#showcase"
                className="px-8 py-4 bg-zinc-900/40 hover:bg-zinc-900/80 text-white font-bold rounded-xl border border-white/[0.08] transition-all text-sm tracking-wider uppercase text-center flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-white text-white" /> View System
                Hardware
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-[560px] bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 rounded-[44px] border border-white/[0.08] p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] shadow-amber-500/[0.01] backdrop-blur-xl">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800" />
              </div>
              <div className="w-full h-full rounded-[30px] overflow-hidden bg-[#030009] relative border border-white/[0.05] flex flex-col justify-between p-6">
                <div className="space-y-1.5 mt-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold font-display">
                    SYSTEM RUNTIME V2.4
                  </span>
                  <h4 className="text-xl font-bold font-display text-white">
                    AFRIMO KEY 01
                  </h4>
                </div>

                <div className="my-auto space-y-4">
                  <div className="p-4 bg-zinc-900/40 border border-white/[0.04] rounded-2xl text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">
                      Global Share Base Value
                    </span>
                    <span className="text-2xl font-display font-bold text-amber-400">
                      $100.00{" "}
                      <span className="text-sm font-medium text-zinc-400">
                        / UNIT
                      </span>
                    </span>
                  </div>
                </div>

                <div className="text-[10px] tracking-widest text-zinc-500 font-display text-center uppercase border-t border-white/[0.04] pt-4">
                  CRYPTOGRAPHIC HANDSHAKE ESTABLISHED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRESS LOGO MARQUEE --- */}
      <section className="relative overflow-hidden bg-slate-950/40 border-y border-white/[0.06] py-10">
        <div className="text-center mb-6">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500 font-display">
            Global Press Distribution Coverage
          </span>
        </div>
        <div className="w-full relative overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030009] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030009] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-24 whitespace-nowrap min-w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 18, repeat: Infinity }}
          >
            {doublePartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-zinc-400 font-display font-semibold tracking-[0.15em] text-sm uppercase"
              >
                <div className="w-2 h-2 rounded-full bg-amber-500/40" />
                <span>{partner}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION / PILLARS --- */}
      <PillarsSection />

      {/* --- PHONE SPINNING SHOWCASE SECTION --- */}
      <DeviceShowcase />

      {/* --- INVESTMENT / CALCULATOR / SHARES PROGRESS --- */}
      <InvestmentCalculator />

      {/* --- FEATURES GRID & INTERACTIVE AFRICA NODE MAP --- */}
      <section
        id="technology"
        className="py-32 bg-slate-950/20 relative overflow-hidden"
      >
        {/* Ambient atmospheric backdrop specifically for Africa Map */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase font-bold text-amber-500 tracking-[0.3em] font-display">
              ECOSYSTEM MECHANICS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3">
              Uncompromising Integration
            </h2>
            <p className="font-body text-zinc-400 text-base sm:text-lg mt-4 font-light leading-relaxed">
              Every physical engineering layout works dynamically across nodes.
              Hover over any system block below to unveil its operational
              mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT SIDE: Animated Cybernetic Africa Node Map Logo */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-zinc-900/10 border border-white/[0.04] rounded-[32px] p-8 h-[540px] relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)] backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <AfricaNodeMap />
            </div>

            {/* RIGHT SIDE: 3D Hover flipping cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, i) => (
                <FeatureCard
                  key={i}
                  title={feat.title}
                  desc={feat.desc}
                  icon={feat.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <FAQSection />

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 border-t border-white/[0.06] py-20 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-amber-500/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 text-black p-2.5 rounded-xl">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                AFRIMO TECH
              </span>
            </div>
            <p className="font-body text-xs text-zinc-500 leading-relaxed font-light">
              Engineering structural digital sovereignty across key ecosystems.
              Designing secure hardware architecture natively for Africa.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs text-zinc-300 uppercase tracking-[0.2em] mb-5">
              Ecosystem Node
            </h4>
            <ul className="space-y-3 font-body text-xs text-zinc-500">
              <li>
                <a
                  href="#showcase"
                  className="hover:text-white transition-colors"
                >
                  AfriMo Phone Prime
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  className="hover:text-white transition-colors"
                >
                  AfriMo Titanium Laptop
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  className="hover:text-white transition-colors"
                >
                  AfriMo Tab Horizon
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="hover:text-white transition-colors"
                >
                  Blockchain Native Storage
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs text-zinc-300 uppercase tracking-[0.2em] mb-5">
              Support Portal
            </h4>
            <ul className="space-y-3 font-body text-xs text-zinc-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Engineering Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Corporate Escrow Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ Registry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Principles
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs text-zinc-300 uppercase tracking-[0.2em] mb-5">
              Gateway Contact
            </h4>
            <ul className="space-y-3.5 font-body text-xs text-zinc-500">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500" /> core@afrimotech.com
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500" /> +234 (0) 800-AFRIMO
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500" /> Tech Enclave,
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 mt-20 pt-8 border-t border-white/[0.06] text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-body">
          <p>
            © {new Date().getFullYear()} AfriMobile Technologies Ltd. System
            execution confirmed.
          </p>
          <div className="flex gap-6 font-semibold uppercase tracking-wider text-[10px] font-display">
            <a href="#" className="hover:text-white transition-colors">
              Third-Party Audit Protocol
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Escrow Guarantee
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENT: CYBERNETIC AFRICA NODE MAP ---
function AfricaNodeMap() {
  const nodes = [
    { id: "lagos", x: 120, y: 240, label: "Lagos Hub" },
    { id: "cairo", x: 230, y: 80, label: "Cairo Node" },
    { id: "casablanca", x: 100, y: 80, label: "Casablanca" },
    { id: "nairobi", x: 250, y: 260, label: "Nairobi Hub" },
    { id: "joburg", x: 185, y: 410, label: "Joburg Node" },
    { id: "dakar", x: 40, y: 180, label: "Dakar Node" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-between relative py-6">
      {/* Golden Scanning Beam */}
      <motion.div
        className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent pointer-events-none z-10"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <div className="text-center z-10 space-y-1">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-500/80 font-display">
          Sovereign Ledger
        </span>
        <h3 className="font-display font-bold text-lg text-white">
          Consolidated Africa Node
        </h3>
      </div>

      {/* Cybernetic Geometric Map Container */}
      <div className="w-full max-w-[280px] aspect-[4/5] relative my-auto">
        <svg
          viewBox="0 0 320 450"
          className="w-full h-full drop-shadow-[0_0_20px_rgba(245,158,11,0.15)]"
        >
          <defs>
            <linearGradient id="africaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Animated low-poly outer boundary map representing physical continent */}
          <motion.polygon
            points="100,80 230,80 240,100 285,210 250,290 185,410 145,330 120,240 40,180 80,100"
            className="stroke-amber-500/30 stroke-2 fill-url(#africaGrad)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

          {/* Inner Constellation Connection Grids */}
          <g>
            <line
              x1="100"
              y1="80"
              x2="120"
              y2="240"
              className="stroke-amber-500/10 stroke-[1px]"
            />
            <line
              x1="230"
              y1="80"
              x2="120"
              y2="240"
              className="stroke-amber-500/10 stroke-[1px]"
            />
            <line
              x1="250"
              y1="260"
              x2="120"
              y2="240"
              className="stroke-amber-500/30 stroke-[1.5px] stroke-dasharray-[5,5]"
            />
            <line
              x1="185"
              y1="410"
              x2="120"
              y2="240"
              className="stroke-amber-500/30 stroke-[1.5px]"
            />
            <line
              x1="40"
              y1="180"
              x2="120"
              y2="240"
              className="stroke-amber-500/20 stroke-[1px]"
            />
            <line
              x1="285"
              y1="210"
              x2="250"
              y2="260"
              className="stroke-amber-500/10 stroke-[1px]"
            />
            <line
              x1="250"
              y1="260"
              x2="185"
              y2="410"
              className="stroke-amber-500/20 stroke-[1px]"
            />
          </g>

          {/* Animated Pulsing Ledger Beacons */}
          {nodes.map((node) => (
            <g key={node.id}>
              {/* Outer wave rings */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={12}
                className="fill-transparent stroke-amber-500/30"
                animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{
                  duration: 2.5 + Math.random(),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Inner core node */}
              <circle
                cx={node.x}
                cy={node.y}
                r={4.5}
                className="fill-amber-400 stroke-black stroke-[1.5px] shadow-lg"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="w-full flex justify-between items-center px-4 border-t border-white/[0.04] pt-4 text-[10px] text-zinc-500 font-display uppercase tracking-widest z-10">
        <span>Nodes online: 4,090</span>
        <span className="text-amber-500 animate-pulse font-bold">
          Network Synced
        </span>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: 3D FLIPPING FEATURE CARD ---
function FeatureCard({ title, desc, icon: Icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-[260px] perspective-container cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* --- FRONT SIDE (Title + Icon) --- */}
        <div className="absolute inset-0 bg-zinc-900/10 border border-white/[0.04] p-8 rounded-[24px] flex flex-col justify-between backface-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)] backdrop-blur-md">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/[0.05] flex items-center justify-center text-amber-500">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-amber-500/60 uppercase tracking-widest font-display font-semibold block mb-2">
              MODULE ID_04
            </span>
            <h3 className="font-display font-bold text-xl text-white leading-snug">
              {title}
            </h3>
          </div>
        </div>

        {/* --- BACK SIDE (Description) --- */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black border border-amber-500/30 p-8 rounded-[24px] flex flex-col justify-center backface-hidden shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-white/[0.05] pb-3">
              <Icon className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] uppercase tracking-widest font-display font-bold text-zinc-400">
                Specs Registry
              </span>
            </div>
            <p className="font-body text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              {desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// --- SUB-COMPONENT: PILLARS ---
function PillarsSection() {
  const [activePillar, setActivePillar] = useState("growth");

  return (
    <section id="about" className="py-32 container mx-auto px-6 lg:px-16">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <span className="text-xs uppercase font-bold text-amber-500 tracking-[0.3em] font-display">
          ARCHITECTURAL BACKBONE
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3">
          Sovereignty Built on Steel & Silicon
        </h2>
        <p className="font-body text-zinc-400 text-base sm:text-lg mt-4 font-light leading-relaxed">
          We assemble concrete digital defenses and hardware modules ensuring
          absolute liquidity alignment and institutional capital growth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 flex flex-col gap-3">
          {corePillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className={`flex items-center gap-5 p-5 rounded-2xl text-left border transition-all ${
                activePillar === pillar.id
                  ? "bg-amber-500/[0.08] border-amber-500/30 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                  : "bg-zinc-900/10 border-white/[0.04] text-zinc-400 hover:bg-zinc-900/30"
              }`}
            >
              <div
                className={`p-3 rounded-xl transition-colors ${activePillar === pillar.id ? "bg-amber-500 text-black" : "bg-zinc-900 text-zinc-400"}`}
              >
                <pillar.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-zinc-100">
                  {pillar.label}
                </h4>
                <p className="font-body text-xs text-zinc-500 line-clamp-1 mt-1 font-light">
                  {pillar.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-7 bg-zinc-900/20 border border-white/[0.06] rounded-[32px] p-8 sm:p-12 min-h-[380px] flex flex-col justify-between backdrop-blur-xl relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]" />
          <AnimatePresence mode="wait">
            {corePillars.map(
              (pillar) =>
                pillar.id === activePillar && (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
                        <pillar.icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                        {pillar.label}
                      </h3>
                    </div>
                    <p className="font-body text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
                      {pillar.desc}
                    </p>

                    <div className="border-t border-white/[0.06] pt-6 flex flex-wrap gap-6 text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />{" "}
                        Insulated hardware core
                      </span>
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />{" "}
                        Cryptographic ledger sync
                      </span>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT: SHOWCASE ---
function DeviceShowcase() {
  const [activeDeviceTab, setActiveDeviceTab] = useState("Phones");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 15,
    restDelta: 0.001,
  });

  const phoneRotationY = useTransform(smoothProgress, [0, 1], [0, 360]);
  const phoneTiltX = useTransform(smoothProgress, [0, 1], [15, -15]);

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="py-32 bg-gradient-to-b from-[#030009] via-slate-950/20 to-[#030009] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase font-bold text-amber-500 tracking-[0.3em] font-display">
            HARDWARE TAXONOMY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3">
            Interactive Physical Architecture
          </h2>
          <p className="font-body text-zinc-400 text-base sm:text-lg mt-4 font-light leading-relaxed">
            Scroll down dynamically to observe the physical hardware chassis
            rotate in true 3D orbital space.
          </p>
        </div>

        {/* Dynamic Tab Slider */}
        <div className="flex justify-center gap-1.5 p-1.5 bg-zinc-900/40 border border-white/[0.06] rounded-2xl max-w-md mx-auto mb-20 backdrop-blur-md">
          {Object.keys(devices).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveDeviceTab(tab)}
              className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-display font-bold tracking-widest uppercase transition-all ${
                activeDeviceTab === tab
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/10"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-amber-500 font-display font-bold text-xs tracking-widest uppercase block mb-2">
                Technical Registry
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {devices[activeDeviceTab].name}
              </h3>
            </div>
            <ul className="space-y-4">
              {devices[activeDeviceTab].specs.map((spec, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/10 border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)]"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="font-body text-zinc-300 font-medium text-sm sm:text-base">
                    {spec}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 flex justify-center items-center relative h-[620px] perspective-container">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[450px] h-[450px] bg-amber-500/[0.03] rounded-full blur-[100px]" />
            </div>

            <motion.div
              style={{
                rotateY: phoneRotationY,
                rotateX: phoneTiltX,
                transformStyle: "preserve-3d",
                transform: "translateZ(0)",
              }}
              className="relative w-80 h-[520px] preserve-3d"
            >
              {/* --- FRONT PANEL --- */}
              <div
                className="absolute inset-0 bg-[#030009] rounded-[48px] border-4 border-zinc-800 p-3 shadow-2xl flex flex-col justify-between overflow-hidden backface-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
                style={{ transform: "translateZ(1px)" }}
              >
                <div className="w-28 h-6 bg-black rounded-full mx-auto flex items-center justify-center border-b border-white/[0.05]">
                  <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <div className="w-1 h-1 bg-blue-500/50 rounded-full" />
                  </div>
                </div>

                <div className="flex-1 my-4 bg-gradient-to-b from-zinc-900/50 to-black rounded-[32px] border border-white/[0.05] p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />

                  <div className="flex justify-between items-center text-[10px] text-zinc-500 tracking-wider font-display font-semibold">
                    <span>SECURE OS 2.4</span>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  </div>

                  <div className="space-y-4 text-center my-auto z-10">
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20 shadow-lg">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-white text-lg tracking-wide">
                      {devices[activeDeviceTab].imageText}
                    </h4>
                    <p className="font-body text-xs text-zinc-400 font-light">
                      Hardware Sandbox Active
                    </p>
                  </div>

                  <div className="bg-white/[0.03] p-4 rounded-xl flex items-center justify-between text-[11px] border border-white/[0.04] backdrop-blur-md">
                    <span className="text-zinc-500 font-display font-bold uppercase tracking-wider">
                      SECURE SHIELD
                    </span>
                    <span className="text-amber-500 font-display font-bold tracking-wide">
                      100% ONLINE
                    </span>
                  </div>
                </div>
              </div>

              {/* --- BACK PANEL --- */}
              <div
                className="absolute inset-0 bg-zinc-900 rounded-[48px] border-4 border-zinc-800 p-5 shadow-2xl flex flex-col justify-between overflow-hidden backface-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
                style={{ transform: "rotateY(180deg) translateZ(1px)" }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-20 h-20 rounded-[24px] bg-black border border-white/[0.06] p-3 flex flex-wrap gap-1.5 items-center justify-center shadow-lg">
                    <div className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-800" />
                  </div>
                  <span className="text-[10px] text-zinc-500 font-display font-bold tracking-widest uppercase">
                    AFRI_CORE
                  </span>
                </div>

                <div className="text-center my-auto">
                  <span className="text-3xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                    AFRIMO
                  </span>
                  <p className="text-[9px] text-amber-500 uppercase font-display font-bold tracking-[0.25em] mt-2">
                    Engineered in Lagos
                  </p>
                </div>

                <div className="text-center text-[10px] text-zinc-500 font-display font-semibold uppercase border-t border-white/[0.04] pt-4">
                  DECENTRALIZED NODE KEY 409
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT: INVESTMENT ---
function InvestmentCalculator() {
  const [investmentAmt, setInvestmentAmt] = useState(500);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const sharesOwned = Math.floor(investmentAmt / 100);
  const estimatedValuationFactor = 2.5;
  const projectedReturn = investmentAmt * estimatedValuationFactor;

  return (
    <section
      id="investment"
      ref={ref}
      className="py-32 container mx-auto px-6 lg:px-16 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
            <Gift className="w-4 h-4 text-amber-400 animate-bounce" />
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider font-display">
              Equity Allocations Available
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-white">
            Own the Physical Brand, Not Just the Device
          </h2>
          <p className="font-body text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            We are decentralizing structural ownership. Instead of relying
            solely on venture bank lines, AfriMobile registers public supporters
            with legally protective company shares during seed rounds.
          </p>

          <div className="bg-zinc-900/10 border border-white/[0.06] rounded-[24px] p-6 space-y-4 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
            <div className="flex justify-between text-xs uppercase tracking-wider font-display font-bold">
              <span className="text-zinc-500">Seed Progress Status</span>
              <span className="text-amber-500">
                {inView ? (
                  <CountUp start={0.0} end={3.98} decimals={2} duration={1.5} />
                ) : (
                  "0.00"
                )}
                M / 5.0M UNITS RESERVED
              </span>
            </div>
            <div className="w-full bg-black h-3.5 rounded-full overflow-hidden border border-white/[0.04] p-0.5">
              <motion.div
                className="bg-gradient-to-r from-amber-600 to-amber-300 h-full rounded-full"
                initial={{ width: "0%" }}
                animate={inView ? { width: `${(3.98 / 5) * 100}%` } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-2">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-display font-semibold">
                Allocations clear immediately via escrow
              </span>
              <span className="text-xs font-display font-bold text-zinc-300">
                79.6% Completed
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Calculator */}
        <div className="lg:col-span-6 bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 border border-white/[0.1] rounded-[40px] p-8 sm:p-12 shadow-2xl relative backdrop-blur-xl">
          <div className="absolute top-4 right-4 text-[9px] tracking-widest font-display font-bold bg-amber-500 text-black px-3 py-1.5 rounded-full uppercase">
            Realtime Ledger
          </div>
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-6 h-6 text-amber-500" />
            <h3 className="font-display text-2xl font-bold text-white">
              Capital Simulator
            </h3>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-3 font-display font-semibold">
                <label className="text-sm text-zinc-400">
                  Target Capital Commitment
                </label>
                <span className="text-xl font-bold text-white">
                  ${investmentAmt.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={investmentAmt}
                onChange={(e) => setInvestmentAmt(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-black rounded-lg appearance-none border border-white/[0.04]"
              />
              <div className="flex justify-between text-[10px] font-display font-bold text-zinc-500 mt-3">
                <span>MIN: $100</span>
                <span>MAX: $10,000</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-8">
              <div className="bg-black/50 p-5 rounded-2xl border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)]">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-display font-bold block mb-1">
                  Company Shares
                </span>
                <span className="text-3xl font-display font-bold text-amber-500">
                  {sharesOwned}
                </span>
                <span className="text-[10px] text-zinc-400 block mt-1.5 font-body">
                  @ $100.00 / Share
                </span>
              </div>
              <div className="bg-black/50 p-5 rounded-2xl border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)]">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-display font-bold block mb-1">
                  Target Yield (2.5x)
                </span>
                <span className="text-3xl font-display font-bold text-emerald-400">
                  ${projectedReturn.toLocaleString()}
                </span>
                <span className="text-[10px] text-zinc-400 block mt-1.5 font-body">
                  Global distribution metric
                </span>
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-display font-bold rounded-xl shadow-xl shadow-amber-500/10 transition-all text-xs tracking-widest uppercase flex items-center justify-center gap-2">
              Initiate Allocation Sequence{" "}
              <ArrowUpRight className="w-4 h-4 stroke-[3px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT: FAQ SECTION ---
function FAQSection() {
  return (
    <section className="py-32 container mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-purple-300 font-display">
              FAQ MODULE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Frequently Asked Details
          </h2>
          <p className="font-body text-zinc-400 text-base leading-relaxed font-light">
            Clear architecture ensures direct validation. If you have any
            further systemic queries about our secure blocks or allocation
            vaults, connect with our support nodes.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- MINI COMPONENT: FAQ ITEM ---
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-zinc-900/10 border border-white/[0.04] rounded-[20px] overflow-hidden transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className="font-display font-bold text-sm sm:text-base text-zinc-200">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180 text-amber-500" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 font-body text-sm text-zinc-400 leading-relaxed border-t border-white/[0.05] pt-4 font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
