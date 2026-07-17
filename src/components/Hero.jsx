import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#040404] text-white">
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="
    pointer-events-none
    absolute
    z-10
    h-[500px]
    w-[500px]
    rounded-full
    bg-cyan-400/10
    blur-[120px]
  "
      />
      {/* ================= Background ================= */}

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#111827_0%,#040404_55%)]" />
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 120, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-60 top-20 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[180px]"
      />

      {/* Orange Glow */}
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 50, -50, 0],
          scale: [1.2, 0.9, 1.1, 1.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 bottom-0 h-[700px] w-[700px] rounded-full bg-orange-500/20 blur-[180px]"
      />

      {/* Animated Grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-10
        bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
        bg-[size:60px_60px]"
      />
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* ================= Hero ================= */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        {/* LEFT */}

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 backdrop-blur-xl"
          >
            🚀 Africa's Next Tech Giant
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-6xl font-black leading-tight lg:text-8xl"
          >
            Africa's First
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">
              Blockchain
            </span>
            Smartphone Company
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
          >
            Building the Future of Secure Mobile Technology for Africa and the
            World.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <button className="group rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,165,0,.45)]">
              Become a Shareholder
              <ArrowRight
                className="ml-2 inline transition group-hover:translate-x-2"
                size={18}
              />
            </button>

            <button className="group flex items-center rounded-full border border-white/20 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
              <Play size={18} className="mr-2" />
              Explore Smartphones
            </button>
          </motion.div>
        </div>

        {/* RIGHT */}

        <div className="relative hidden flex-1 justify-center lg:flex">
          {/* Phone Glow */}

          <div className="absolute h-[600px] w-[350px] rounded-full bg-cyan-500/20 blur-[140px]" />

          {/* Phone */}

          <motion.img
            src="https://images.samsung.com/is/image/samsung/p6pim/levant/sm-s938bzkgmea/gallery/levant-galaxy-s25-ultra-sm-s938-sm-s938bzkgmea-thumb-546464049?$UX_EXT2_PNG$"
            alt="phone"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
            className="relative z-20 h-[700px] object-contain drop-shadow-[0_0_90px_rgba(0,200,255,.4)]"
          />

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute left-0 top-20 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <p className="text-sm text-gray-400">Funds Raised</p>

            <h2 className="mt-2 text-3xl font-bold">$8.7M</h2>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute right-0 bottom-20 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <p className="text-sm text-gray-400">Investors</p>

            <h2 className="mt-2 text-3xl font-bold">18,425</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
